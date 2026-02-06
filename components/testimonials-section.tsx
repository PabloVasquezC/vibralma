
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote: "La experiencia con Vibralma Sonidos Ancestrales generó un cambio real en nuestro equipo. Después de la sesión, se percibió un ambiente más tranquilo, colaborativo y enfocado.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Más del 90% de nuestros colaboradores declaró una reducción significativa del estrés tras participar en las sesiones de sonoterapia de Vibralma.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Vibralma nos entregó una herramienta concreta para cuidar la salud emocional de nuestro equipo en un periodo de alta exigencia laboral.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Las terapias de sonido permitieron a nuestros colaboradores desconectarse de la presión diaria y volver a sus funciones con mayor claridad mental.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "La experiencia fue profundamente valorada por el equipo. Se sintieron escuchados, contenidos y con mayor sensación de bienestar general.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Tras la intervención de Vibralma Sonidos Ancestrales, observamos una mejora en el ánimo, la disposición al trabajo y la gestión del estrés.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Vibralma aporta una propuesta distinta y necesaria para las empresas que buscan cuidar a las personas más allá de los indicadores tradicionales.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Las sesiones de sonoterapia ayudaron a nuestro equipo a regular el estrés, mejorar la concentración y fortalecer el clima laboral.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "Recomendamos Vibralma Sonidos Ancestrales a organizaciones que quieran promover un bienestar real y sostenible en sus colaboradores.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    },
    {
        quote: "En tiempos de alta exigencia y presión, Vibralma se transformó en un apoyo clave para el equilibrio emocional de nuestro equipo.",
        source: "Encuestas Vibralma Sonidos Ancestrales"
    }
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-background via-muted/20 to-background border-t border-border/40">
            <div className="container mx-auto">
                <FadeIn direction="up">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
                            Lo que dicen de nosotros
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Impacto real en el bienestar y clima laboral de las organizaciones que confían en nosotros.
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((item, index) => (
                        <StaggerItem key={index} className="h-full">
                            <div className="bg-card hover:bg-card/80 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col relative group">
                                <Quote className="absolute top-6 right-6 text-primary/10 w-12 h-12 group-hover:text-primary/20 transition-colors" />
                                <div className="flex-grow">
                                    <p className="text-foreground/90 leading-relaxed italic mb-6 relative z-10">
                                        "{item.quote}"
                                    </p>
                                </div>
                                <div className="pt-4 border-t border-border/30">
                                    <p className="text-xs text-primary font-bold uppercase tracking-wide">
                                        {item.source}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
