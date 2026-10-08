import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Starfield } from "@/components/starfield";
import { FloatingRobot } from "@/components/floating-robot";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Dev Saxena | Full Stack Developer";
const description =
  "B.Tech CS student building full-stack and data-driven web apps. Projects: BPIS, Aurelia Atelier, EXP-TRAC.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-saxena.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Dev Saxena",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dev Saxena, Full Stack Developer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      {/* overflow-x-clip stops entrance animations (slide-in from the side) from causing sideways scroll on phones */}
      <body className="min-h-full flex flex-col bg-background overflow-x-clip" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <MotionProvider>
            <Starfield />
            <Navbar />
            <div className="pt-16 grow relative z-10">{children}</div>
            <Footer />
            <FloatingRobot />
          </MotionProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
