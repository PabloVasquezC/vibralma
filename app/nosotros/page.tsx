export default function NosotrosPage() {
  return (
    <div className="relative min-h-screen py-24 px-6">
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6">
              Bienestar Integral para tu Organización
            </h1>
            <p className="text-foreground/90 leading-relaxed mb-6">
              Somos un equipo multidisciplinario dedicado a la prevención del estrés y el Burnout en entornos de alta
              exigencia como educación, salud y servicios.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-6">
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
    </div>
  )
}
