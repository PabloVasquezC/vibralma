
import { FadeIn, ScaleIn } from "./ui/motion-wrapper"

export default function PurposeSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-primary/5">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <FadeIn direction="up">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">Nuestra Misión</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-12">
                        Propósito
                    </h3>
                </FadeIn>

                <ScaleIn delay={0.2}>
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-serif italic">
                        "En Vibralma Sonidos Ancestrales buscamos impactar positivamente en el bienestar integral de las personas, acompañando a las empresas en la creación de entornos laborales más conscientes, equilibrados y humanos. A través de la sonoterapia y el poder del sonido ancestral, ayudamos a reducir el estrés, regular el sistema nervioso y favorecer estados de calma, claridad y conexión, contribuyendo a una mejor calidad de vida y a equipos más saludables, presentes y comprometidos."
                    </p>
                </ScaleIn>
            </div>
        </section>
    )
}
