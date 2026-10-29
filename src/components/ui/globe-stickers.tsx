"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

/* ───────────────────────────────────────────────
 * SVG icon markers — each pinned to its real-world
 * geographic coordinates on the globe surface.
 * Flagged: Dubai uses china-vector.svg as configured.
 * ─────────────────────────────────────────────── */
interface SvgIcon {
  id: string
  location: [number, number] // [latitude, longitude]
  icon: string               // public folder path
  label: string
}

export const svgIcons: SvgIcon[] = [
  { id: "switzerland", location: [46.81, 8.23],    icon: "/switzerland-vector.svg", label: "Switzerland" },
  { id: "italy",       location: [41.87, 12.57],   icon: "/italy-vector.svg",       label: "Italy" },
  { id: "dubai",       location: [25.20, 55.27],   icon: "/china-vector.svg",       label: "Dubai" }, // Reusing china vector as placeholder per specification
  { id: "singapore",   location: [1.35, 103.82],   icon: "/singapore-vector.svg",   label: "Singapore" },
  { id: "beach",       location: [-8.34, 115.09],  icon: "/beach-vector.svg",       label: "Bali (Beach)" },
  { id: "tokyo",       location: [35.68, 139.65],  icon: "/tokyo-tower-vector.svg", label: "Tokyo" },
  { id: "japan",       location: [43.06, 141.35],  icon: "/japan-vector.svg",       label: "Japan" }, 
  { id: "zealand",     location: [-40.90, 174.88], icon: "/flag-vector.svg",        label: "Zealand" }
]

/* ───────────────────────────────────────────────
 * Red web-strand arc routes connecting countries
 * ─────────────────────────────────────────────── */
const arcRoutes: { from: [number, number]; to: [number, number] }[] = [
  { from: [46.81, 8.23],    to: [41.87, 12.57] },    // Switzerland -> Italy
  { from: [41.87, 12.57],   to: [25.20, 55.27] },    // Italy -> Dubai
  { from: [25.20, 55.27],   to: [1.35, 103.82] },    // Dubai -> Singapore
  { from: [1.35, 103.82],   to: [-8.34, 115.09] },   // Singapore -> Bali (Beach)
  { from: [-8.34, 115.09],  to: [35.68, 139.65] },   // Bali -> Tokyo
  { from: [35.68, 139.65],  to: [-40.90, 174.88] },  // Tokyo -> Zealand
]

/** Convert lat/lng to 3D unit-sphere cartesian */
function latLngTo3D(lat: number, lng: number): [number, number, number] {
  const rLat = (lat * Math.PI) / 180
  const rLng = (lng * Math.PI) / 180 - Math.PI
  const cosLat = Math.cos(rLat)
  return [
    -cosLat * Math.cos(rLng),
    Math.sin(rLat),
    cosLat * Math.sin(rLng),
  ]
}

function projectToScreen(
  lat: number,
  lng: number,
  phi: number,
  theta: number,
) {
  const radius = 0.8
  const [x0, y0, z0] = latLngTo3D(lat, lng)

  const rx = x0 * radius
  const ry = y0 * radius
  const rz = z0 * radius

  const cosPhi = Math.cos(phi)
  const sinPhi = Math.sin(phi)
  const cosTheta = Math.cos(theta)
  const sinTheta = Math.sin(theta)

  const x1 = cosPhi * rx + sinPhi * rz
  const y1 = sinPhi * sinTheta * rx + cosTheta * ry - cosPhi * sinTheta * rz
  const z1 = -sinPhi * cosTheta * rx + sinTheta * ry + cosPhi * cosTheta * rz

  return {
    screenX: (x1 + 1) / 2,
    screenY: (1 - y1) / 2,
    z: z1,
  }
}

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

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

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

        const px = proj.screenX * 100
        const py = proj.screenY * 100

        if (proj.z > -0.1) {
          const opacity = Math.min(1, (proj.z + 0.1) * 4)
          const scale = 0.85 + Math.min(Math.max(proj.z, 0), 0.8) * 0.4

          el.style.left = `${px}%`
          el.style.top = `${py}%`
          el.style.opacity = opacity.toString()
          el.style.transform = `translate(-50%, -50%) scale(${scale})`
          el.style.pointerEvents = opacity > 0.5 ? "auto" : "none"
        } else {
          el.style.opacity = "0"
          el.style.pointerEvents = "none"
        }
      })
    }

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      // Strict Spider-Man color theme: Dark carbon sphere, suit-red dots, red arcs
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.4,
        mapSamples: 16000,
        mapBrightness: 4.5,
        baseColor: [0.06, 0.06, 0.06], // Deep carbon
        markerColor: [0.88, 0.11, 0.11], // Spidey suit red #E01B1B
        glowColor: [0.4, 0.05, 0.05], // Atmospheric crimson glow
        markerElevation: 0.02,

        markers: svgIcons.map((m) => ({
          location: m.location,
          size: 0.035,
        })),

        arcs: arcRoutes,
        arcColor: [0.88, 0.11, 0.11],
        arcWidth: 0.7,
        arcHeight: 0.35,

        opacity: 0.95,
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

  return (
    <div
      ref={containerRef}
      className={`relative aspect-square select-none ${className}`}
    >
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

      {/* Spider-Man styled icon overlays */}
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
              bg-[var(--spidey-carbon)] rounded-full
              border border-[var(--spidey-red)]
              p-[5px]
              shadow-[0_0_10px_rgba(224,27,27,0.4)]
              hover:scale-[1.25] hover:shadow-[0_0_20px_var(--spidey-red)]
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
              className="w-full h-full object-contain filter invert brightness-125"
              draggable={false}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
