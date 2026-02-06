import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { PageTransition } from "@/components/page-transition"
import { Navigation } from "@/components/navigation"
import FloatingLines from "@/components/floating-lines" // Assuming FloatingLines is imported from this path
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const cormorant = Inter({
  subsets: ["latin"],
  variable: "--font-serif",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vibralma - Un viaje de Sanación",
  description:
    "Especialistas en Bienestar Organizacional y Desarrollo Humano. Terapia de sonidos, coaching psicológico y técnicas holísticas en Curicó, Chile.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/vibralma-logo-removed-bg.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/vibralma-logo-removed-bg.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/vibralma-logo-removed-bg.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/vibralma-logo-removed-bg.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background/50 via-background/60 to-primary/10">
            <FloatingLines
              linesGradient={[
                "#14B8A6", // Turquesa vibrante
                "#8B5CF6", // Violeta místico
                "#F472B6", // Rosa energético
                "#FB923C", // Naranja cálido
                "#34D399", // Verde esmeralda
                "#FBBF24", // Dorado brillante
              ]}
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={[10, 14, 12]}
              lineDistance={[5, 3, 4]}
              animationSpeed={0.5}
              interactive={true}
              bendRadius={5.0}
              bendStrength={-0.5}
              parallax={true}
              parallaxStrength={0.2}
              mixBlendMode="screen"
            />
          </div>
          <Navigation />
          <PageTransition>{children}</PageTransition>
          <footer className="py-12 px-6 border-t-2 border-border bg-gradient-to-b from-transparent to-primary/3 relative z-10">
            <div className="container mx-auto text-center">
              <p className="text-sm text-foreground/70 font-medium">
                © {new Date().getFullYear()} Vibralma. Todos los derechos reservados.
              </p>
              <p className="text-sm text-foreground/70 font-medium mt-2">
                Sitio web construido por{" "}
                <a
                  href="https://fluxia.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:text-primary transition-colors hover:underline"
                >
                  Fluxia
                </a>
              </p>
            </div>
          </footer>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
