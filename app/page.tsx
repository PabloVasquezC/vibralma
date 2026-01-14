import Link from "next/link"
import { Button } from "@/components/ui/button"
import FloatingLines from "@/components/floating-lines"
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/inicio")

  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background/60 via-background/70 to-primary/10">
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

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-semibold text-primary">
              Vibralma
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#inicio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link
                href="#nosotros"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="#servicios"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#contacto"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              Reservar
            </Button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
                Un viaje de Sanación
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Especialistas en Bienestar Organizacional y Desarrollo Humano. Transformamos entornos laborales mediante
                terapia de sonidos, coaching psicológico y técnicas holísticas.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <Button size="lg" className="text-base shadow-lg shadow-primary/20">
                  Descubre nuestros servicios
                </Button>
                <Button size="lg" variant="outline" className="text-base border-2 bg-transparent">
                  Contactar
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

      <section id="nosotros" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/10">
                <img
                  src="/sound-therapy-healing-session-with-gongs-and-singi.jpg"
                  alt="Sesión de sanación con gongs y cuencos"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
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
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 px-6 bg-muted/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales para el bienestar de tu equipo y organización
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4">
              Comienza tu viaje
            </h2>
            <p className="text-foreground/80">Contáctanos para transformar el bienestar de tu organización</p>
          </div>

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
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                    Instagram
                  </Link>
                  <Link href="#" className="text-foreground/70 hover:text-primary transition-colors font-medium">
                    Facebook
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-card to-accent/5 backdrop-blur-sm rounded-xl border-2 border-accent/20 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground resize-none"
                  />
                </div>
                <Button type="submit" className="w-full shadow-lg shadow-primary/20">
                  Enviar mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t-2 border-border bg-gradient-to-b from-transparent to-primary/3">
        <div className="container mx-auto text-center">
          <p className="text-sm text-foreground/70 font-medium">
            © {new Date().getFullYear()} Vibralma. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

const services = [
  {
    icon: "🧠",
    title: "Coaching Psicológico Laboral",
    description: "Comunicación efectiva, liderazgo y prevención del Burnout para equipos de alto rendimiento.",
  },
  {
    icon: "🎵",
    title: "Terapia de Sonidos",
    description: "Cuencos tibetanos y gongs para reducción profunda del estrés y armonización energética.",
  },
  {
    icon: "🎼",
    title: "Musicoterapia",
    description: "Relajación profunda mediante elementos musicales terapéuticos cuidadosamente seleccionados.",
  },
  {
    icon: "🤝",
    title: "Dinámicas y Juegos",
    description: "Fortalecimiento de equipos mediante actividades interactivas y colaborativas.",
  },
  {
    icon: "⚡",
    title: "Chi Kung",
    description: "Práctica china milenaria de cultivo de energía interna y movimiento consciente.",
  },
  {
    icon: "💆",
    title: "Masajes Terapéuticos",
    description: "Sesiones de masaje profesional directamente en tu lugar de trabajo.",
  },
  {
    icon: "🎲",
    title: "Ludoteca Móvil",
    description: "Juegos de madera y desafíos estratégicos para estimular la creatividad y cohesión.",
  },
  {
    icon: "🧘",
    title: "Movimiento Consciente",
    description: "Estiramientos y conciencia corporal para mejorar postura y reducir tensión.",
  },
  {
    icon: "🎨",
    title: "Arteterapia",
    description: "Expresión emocional y sanación mediante la creación artística guiada.",
  },
  {
    icon: "🌸",
    title: "Aromaterapia",
    description: "Aceites esenciales terapéuticos para equilibrio emocional y bienestar.",
  },
  {
    icon: "💃",
    title: "Biodanza",
    description: "Música, movimiento y vivencia grupal para reconexión con las emociones.",
  },
  {
    icon: "🔄",
    title: "Danza Circular",
    description: "Integración grupal mediante danzas tradicionales en formación circular.",
  },
  {
    icon: "🥁",
    title: "Danza Africana",
    description: "Ritmos percutivos y movimientos terrestres para liberar energía vital.",
  },
  {
    icon: "💪",
    title: "Zumba",
    description: "Fitness cardiovascular con música latina y coreografías energizantes.",
  },
  {
    icon: "🕉️",
    title: "Conexión Interior",
    description: "Meditación profunda y movimiento intuitivo para paz mental y claridad.",
  },
  {
    icon: "🧘‍♀️",
    title: "Yoga Terapéutico",
    description: "Alineación postural, respiración consciente y flexibilidad para el bienestar integral.",
  },
  {
    icon: "💼",
    title: "Bienestar Laboral",
    description: "Gestión del estrés y comunicación efectiva en ambientes corporativos.",
  },
  {
    icon: "🛡️",
    title: "Defensa Personal",
    description: "Autodefensa y mindfulness para empoderamiento personal y seguridad.",
  },
  {
    icon: "🕊️",
    title: "Ceremonias de Unión",
    description: "Compromisos sagrados con ritos ancestrales personalizados.",
  },
  {
    icon: "🍃",
    title: "Gastronomía Integral",
    description: "Catering consciente y nutritivo con ingredientes saludables y sostenibles.",
  },
]
