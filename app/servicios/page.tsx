export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nuestros Servicios</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para el bienestar de tu equipo y organización
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
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
    </div>
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
