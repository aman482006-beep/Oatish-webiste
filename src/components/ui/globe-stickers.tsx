"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

/* ───────────────────────────────────────────────
 * SVG icon markers — each pinned to its real-world
 * geographic coordinates on the globe surface.
 * ─────────────────────────────────────────────── */
interface SvgIcon {
  id: string
  location: [number, number] // [latitude, longitude]
  icon: string               // public folder path
  label: string
}

const svgIcons: SvgIcon[] = [
  { id: "switzerland", location: [46.81, 8.23],    icon: "/switzerland-vector.svg", label: "Switzerland" },
  { id: "italy",       location: [41.87, 12.57],   icon: "/italy-vector.svg",       label: "Italy" },
  { id: "dubai",       location: [25.20, 55.27],   icon: "/china-vector.svg",       label: "Dubai" }, // Reusing china vector as placeholder
  { id: "singapore",   location: [1.35, 103.82],   icon: "/singapore-vector.svg",   label: "Singapore" },
  { id: "beach",       location: [-8.34, 115.09],  icon: "/beach-vector.svg",       label: "Bali (Beach)" },
  { id: "tokyo",       location: [35.68, 139.65],  icon: "/tokyo-tower-vector.svg", label: "Tokyo" },
  { id: "japan",       location: [43.06, 141.35],  icon: "/japan-vector.svg",       label: "Japan" }, 
  { id: "zealand",     location: [-40.90, 174.88], icon: "/flag-vector.svg",        label: "Zealand" }
]

/* ───────────────────────────────────────────────
 * Pink arc routes — only connecting the SVG icon
 * countries in a logical travel route.
 * ─────────────────────────────────────────────── */
const arcRoutes: { from: [number, number]; to: [number, number] }[] = [
  { from: [46.81, 8.23],    to: [41.87, 12.57] },    // Switzerland -> Italy
  { from: [41.87, 12.57],   to: [25.20, 55.27] },    // Italy -> Dubai
  { from: [25.20, 55.27],   to: [1.35, 103.82] },    // Dubai -> Singapore
  { from: [1.35, 103.82],   to: [-8.34, 115.09] },   // Singapore -> Bali (Beach)
  { from: [-8.34, 115.09],  to: [35.68, 139.65] },   // Bali -> Tokyo
  { from: [35.68, 139.65],  to: [-40.90, 174.88] },  // Tokyo -> Zealand
]

/* ───────────────────────────────────────────────
 * Projection helpers — exactly match cobe's internal
 * WebGL math so HTML overlays sit perfectly on top.
 *
 * Cobe source (index.esm.js) uses:
 *   U([lat,lng]) → 3D cartesian on unit sphere
 *   O(point)     → screen xy + visibility
 *
 * We replicate both here.
 * ─────────────────────────────────────────────── */

/** Convert lat/lng to 3D unit-sphere cartesian — matches cobe's `U()` */
function latLngTo3D(lat: number, lng: number): [number, number, number] {
  const rLat = (lat * Math.PI) / 180
  const rLng = (lng * Math.PI) / 180 - Math.PI
  const cosLat = Math.cos(rLat)
  return [
    -cosLat * Math.cos(rLng),   // x
    Math.sin(rLat),              // y
    cosLat * Math.sin(rLng),     // z
  ]
}

/**
 * Project a geographic point to screen-space, matching cobe's `O()`.
 *
 * @param radius  Globe visual radius in cobe's coordinate space.
 *                Cobe uses 0.8 (constant `ee`) + markerElevation.
 *                We use 0.82 to sit icons slightly above surface.
 * @returns screenX, screenY in 0–1 range, and z for depth/visibility.
 */
function projectToScreen(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
) {
  // We use EXACTLY 0.8 as the radius. Cobe native dots sit on this exact sphere layer.
  // Any radius mismatch (like 0.82) causes parallax "roaming" drift when rotating.
  const radius = 0.8;
  const [x0, y0, z0] = latLngTo3D(lat, lng)

  // Scale to globe radius
  const rx = x0 * radius
  const ry = y0 * radius
  const rz = z0 * radius

  // Rotation matrix — matches cobe's camera transform
  const cosPhi = Math.cos(phi)
  const sinPhi = Math.sin(phi)
  const cosTheta = Math.cos(theta)
  const sinTheta = Math.sin(theta)

  // After rotation
  const x1 = cosPhi * rx + sinPhi * rz
  const y1 = sinPhi * sinTheta * rx + cosTheta * ry - cosPhi * sinTheta * rz
  const z1 = -sinPhi * cosTheta * rx + sinTheta * ry + cosPhi * cosTheta * rz

  return {
    // Cobe projects with scale=1, offset=[0,0], aspect=1
    screenX: (x1 + 1) / 2,
    screenY: (1 - y1) / 2,
    z: z1, // positive = facing camera
  }
}

/* ───────────────────────────────────────────────
 * Component
 * ─────────────────────────────────────────────── */
interface GlobeStickersProps {
  className?: string
  speed?: number
}

export function GlobeStickers({
  className = "",
  speed = 0.003,
}: GlobeStickersProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const iconRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  /* ── Pointer / drag handlers ── */
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  /* ── Globe + animation loop ── */
  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    /** Position every SVG icon using exact % positioning */
    function updateIcons(currentPhi: number, currentTheta: number) {
      svgIcons.forEach((marker) => {
        const el = iconRefs.current.get(marker.id)
        if (!el) return

        const proj = projectToScreen(
          marker.location[0],
          marker.location[1],
          currentPhi,
          currentTheta,
        )

        // Using percentages allows perfect sync regardless of CSS scale transforms on the parent!
        const px = proj.screenX * 100
        const py = proj.screenY * 100

        // Z-index calculation for visual depth fading
        // proj.z ranges roughly from -0.8 (rear) to 0.8 (front) due to radius 0.8
        if (proj.z > -0.1) {
          // Front of globe — visible
          // Swiftly fade in/out near edges smoothly
          const opacity = Math.min(1, (proj.z + 0.1) * 4) 
          const scale = 0.85 + Math.min(Math.max(proj.z, 0), 0.8) * 0.4

          el.style.left = `${px}%`
          el.style.top = `${py}%`
          el.style.opacity = opacity.toString()
          el.style.transform = `translate(-50%, -50%) scale(${scale})`
          el.style.pointerEvents = opacity > 0.5 ? "auto" : "none"
        } else {
          // Back of globe — hidden
          el.style.opacity = "0"
          el.style.pointerEvents = "none"
        }
      })
    }

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 8,
        baseColor: [1, 1, 1],
        markerColor: [0.9, 0.3, 0.5],
        glowColor: [1, 1, 1],
        markerElevation: 0.02,

        // Small dots on the globe surface at each SVG icon location
        markers: svgIcons.map((m) => ({
          location: m.location,
          size: 0.03,
        })),

        // Pink arcs connecting only the SVG marker countries
        arcs: arcRoutes,
        arcColor: [0.9, 0.4, 0.7],
        arcWidth: 0.6,
        arcHeight: 0.3,

        opacity: 0.9,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const currentTheta = 0.2 + thetaOffsetRef.current + dragOffset.current.theta

        globe!.update({ phi: currentPhi, theta: currentTheta })
        updateIcons(currentPhi, currentTheta)
        animationId = requestAnimationFrame(animate)
      }

      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"), 50)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0] && entries[0].contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [speed])

  /* ── Render ── */
  return (
    <div
      ref={containerRef}
      className={`relative aspect-square select-none ${className}`}
    >
      {/* WebGL globe canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />

      {/* SVG icon overlays — positioned by the animation loop */}
      {svgIcons.map((m) => (
        <div
          key={m.id}
          ref={(el) => {
            if (el) iconRefs.current.set(m.id, el)
          }}
          className={`icon-${m.id} absolute`}
          style={{
            opacity: 0,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            willChange: "transform, opacity, left, top",
          }}
        >
          <div
            className="
              w-7 h-7 md:w-8 md:h-8
              bg-white/95 backdrop-blur-sm rounded-full
              border-2 border-[var(--gold)]
              p-[5px]
              shadow-[0_0_8px_rgba(255,215,0,0.25)]
              hover:scale-[1.25] hover:shadow-[0_0_18px_var(--gold)]
              transition-all duration-200
              cursor-pointer
              flex items-center justify-center
            "
            title={m.label}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.icon}
              alt={m.label}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
