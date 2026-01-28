import Link from "next/link"
import { Button } from "@/components/ui/button"
import ActivitiesSection from "@/components/activities-section"
import GallerySection from "@/components/gallery-section"
import CollaboratorsSection from "@/components/collaborators-section"
import Image from "next/image"
export default function InicioPage() {
  return (
    <main className="relative">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">


            <div className="text-center lg:text-left">
              <Image
                src="/vibralma-logo-removed-bg.png"
                alt="Logo Vibralma"
                width={300}
                height={300}
                className="mx-auto lg:mx-0 mb-6 drop-shadow-xl"
                priority
              />
              <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
                Sonidos Ancestrales
              </h1>
              <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Especialistas en Bienestar Organizacional y Desarrollo Humano. Transformamos entornos laborales mediante
                terapia de sonidos, coaching psicológico y técnicas holísticas.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
                  <Link href="/servicios">Descubre nuestros servicios</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base border-2 bg-transparent">
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src="/tibetan-singing-bowls-therapy-session-peaceful-spi.jpg"
                  alt="Terapia de sonidos con cuencos tibetanos"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActivitiesSection />
      <GallerySection />
      <CollaboratorsSection />
    </main>
  )
}
