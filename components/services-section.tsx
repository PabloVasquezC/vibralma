import { client } from "@/sanity/lib/client"
import ServicesGrid from "@/components/services-grid"

interface Service {
    _id: string
    name: string
    description?: string
    image?: any
}

async function getServices() {
    return await client.fetch<Service[]>(
        `*[_type == "serviceType"] | order(name asc) {
      _id,
      name,
      description,
      image,
      icon
    }`
    )
}

export default async function ServicesSection() {
    const services = await getServices()

    if (services.length === 0) {
        return (
            <div className="text-center p-10 border-2 border-dashed border-muted rounded-xl">
                <p className="text-muted-foreground">No hay servicios disponibles por el momento.</p>
            </div>
        )
    }

    return <ServicesGrid services={services} />
}
