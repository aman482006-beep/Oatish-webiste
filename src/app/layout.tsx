import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { WebBackground } from "@/components/ui/web-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Loader } from "@/components/sections/loader";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Jain — Finance × Technology × Communication",
  description: "Portfolio of Aman Jain, BBA student at CHRIST University exploring financial analysis, fintech, AI-powered tools, and educational content.",
  icons: {
    icon: "/spiderman/emblem.svg",
    shortcut: "/spiderman/emblem.svg",
    apple: "/spiderman/emblem.png",
  },
  openGraph: {
    title: "Aman Jain — Finance × Technology × Communication",
    description: "I study finance. I build with technology. I create to make ideas useful.",
    url: "https://amanmalu.me",
    siteName: "Aman Jain Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} bg-[var(--spidey-black)] text-[var(--spidey-white)] font-body antialiased relative min-h-screen selection:bg-[var(--spidey-red)] selection:text-white`}>
        <Loader />
        <CustomCursor />
        <ScrollProgressBar />
        <WebBackground />
        <SmoothScroll>
          <Navbar />
          <ScrollReveal />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
