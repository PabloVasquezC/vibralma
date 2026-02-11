import ServicesSection from "@/components/services-section"

export const revalidate = 60


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

        <ServicesSection />
      </div>
    </div>
  )
}
