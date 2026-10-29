import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./home-spacing.css";
import { ScrollProgressBar } from "@/components/ui/scroll-progress";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const plusJakarta = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Jain — Finance × Technology × Communication",
  description: "I'm Aman Jain, a BBA student at CHRIST University exploring financial analysis, fintech, AI-powered tools, and educational content.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Aman Jain — Finance × Technology × Communication",
    description: "I study finance. I build with technology. I create to make ideas useful.",
    url: "https://amanmalu.me",
    siteName: "Aman Jain Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakarta.variable + " " + manrope.variable + " font-body antialiased min-h-screen"}>
        <ScrollProgressBar />
        <SmoothScroll>
          <Navbar />
          <div className="site-main">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
