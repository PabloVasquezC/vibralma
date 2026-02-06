import Link from "next/link"
import { Button } from "@/components/ui/button"
import ActivitiesSection from "@/components/activities-section"
import GallerySection from "@/components/gallery-section"
import ServicesSection from "@/components/services-section"
import CollaboratorsSection from "@/components/collaborators-section" // Assuming default export
import { N8nChat } from "@/components/N8n"
import { Instagram, Facebook, MessageCircle } from "lucide-react"
import Image from "next/image"
import { FadeIn, Float, ScaleIn } from "@/components/ui/motion-wrapper"
import TestimonialsSection from "@/components/testimonials-section"
import PurposeSection from "@/components/purpose-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">

      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 ">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <FadeIn delay={0.1}>
                <Float>
                  <Image
                    src="/vibralma-logo-removed-bg.png"
                    alt="Logo Vibralma"
                    width={300}
                    height={300}
                    className="mx-auto lg:mx-0 mb-6 drop-shadow-xl"
                    priority
                  />
                </Float>
              </FadeIn>
              <FadeIn delay={0.2} direction="up">
                <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
                  Un viaje de Sanación
                </h1>
              </FadeIn>
              <FadeIn delay={0.3} direction="up">
                <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Especialistas en Bienestar Organizacional y Desarrollo Humano. Transformamos entornos laborales mediante
                  terapia de sonidos, coaching psicológico y técnicas holísticas.
                </p>
              </FadeIn>
              <FadeIn delay={0.4} direction="up">
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
                    <Link href="#servicios">Descubre nuestros servicios</Link>
                  </Button>
                  <Button asChild size="lg" className="text-base shadow-lg shadow-primary/20">
                    <Link href="#contacto">Contactar</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <FadeIn delay={0.2} direction="left">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src="/foto-principal.png"
                    alt="Terapia de sonidos con cuencos tibetanos"
                    className="h-full w-full object-cover aspect-[1/1]"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <ActivitiesSection />

      <GallerySection />

      <section id="nosotros" className="py-24 px-6 bg-gradient-to-br from-background via-muted/40 to-background border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <ScaleIn>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/10">
                  <Image
                    src="/foto-kong.png"
                    alt="Sesión de sanación con gongs y cuencos"
                    className="w-full h-auto"
                    width={500}
                    height={500}
                  />
                </div>
              </ScaleIn>
            </div>
            <div className="order-1 md:order-2">
              <FadeIn direction="right">
                <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6">
                  Bienestar Integral para tu Organización
                </h2>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Somos un equipo multidisciplinario dedicado a la prevención del estrés y el Burnout en entornos de alta
                  exigencia como educación, salud y servicios.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Nuestro enfoque abarca desde estimulación sensorial para bebés hasta resiliencia emocional para
                  funcionarios de hospitales, ofreciendo más de 15 talleres y técnicas especializadas.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-xl border-2 border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm font-medium text-foreground/70">Talleres y Técnicas</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur-sm rounded-xl border-2 border-secondary/20">
                    <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                    <div className="text-sm font-medium text-foreground/70">Servicios Disponibles</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          <CollaboratorsSection />
        </div>
      </section>

      <PurposeSection />

      <section id="servicios" className="py-24 px-6 bg-gradient-to-b from-muted/40 to-background border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nuestros Servicios</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Soluciones integrales para el bienestar de tu equipo y organización
              </p>
            </div>
          </FadeIn>

          <ServicesSection />
        </div>
      </section>

      <TestimonialsSection />

      <section id="contacto" className="py-24 px-6 bg-gradient-to-t from-primary/10 via-background to-background border-t border-border/40">
        <div className="container mx-auto max-w-4xl">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4">
                Comienza tu viaje
              </h2>
              <p className="text-foreground/80">Contáctanos para transformar el bienestar de tu organización</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm rounded-xl border-2 border-primary/20 shadow-lg">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Información de Contacto</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-foreground/60 mb-1 font-medium">Dirección</div>
                      <div className="text-foreground">Alicia Morel #2437, Curicó, Chile</div>
                    </div>
                    <div>
                      <div className="text-foreground/60 mb-1 font-medium">Teléfono / WhatsApp</div>
                      <div className="text-foreground">+56 9 7334 3929</div>
                    </div>
                    <div>
                      <div className="text-foreground/60 mb-1 font-medium">Correo Electrónico</div>
                      <div className="text-foreground">vibralma.sa@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-card to-secondary/5 backdrop-blur-sm rounded-xl border-2 border-secondary/20 shadow-lg">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Síguenos</h3>
                  <div className="flex gap-4">
                    <Link href="https://www.instagram.com/vibralma_sonidos_ancestrales/" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </Link>
                    <Link href="https://www.facebook.com/vibralma.sonidos.ancestrales" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </Link>
                    <Link href="https://wa.me/56973343929" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-1 bg-white rounded-xl overflow-hidden h-full min-h-[600px] shadow-lg">
                <iframe
                  src="https://n8n.fluxia.cl/form/84cdbdaf-aad0-4e46-a24e-30fb94fd85b1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Formulario de contacto"
                  className="w-full h-full min-h-[600px]"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      <N8nChat />
    </main>
  )
}


