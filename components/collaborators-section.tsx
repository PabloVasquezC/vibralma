import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface Collaborator {
    _id: string
    name: string
    location: string
    specialty?: string
    description?: string
    image?: any
}

async function getCollaborators() {
    const query = `*[_type == "collaboratorType"] | order(_createdAt desc) {
    _id,
    name,
    location,
    specialty,
    description,
    image
  }`
    return await client.fetch<Collaborator[]>(query)
}

export default async function CollaboratorsSection() {
    const collaborators = await getCollaborators()

    if (collaborators.length === 0) {
        return (
            <div className="p-10 text-center border-2 border-red-500 m-10 bg-red-50">
                <h2 className="text-xl font-bold text-red-600">DEBUG: No se encontraron colaboradores</h2>
                <p>La consulta a Sanity retornó 0 elementos.</p>
                <p>Verifica que los documentos tengan _type == "collaboratorType" y estén publicados.</p>
            </div>
        )
    }

    return (
        <section id="colaboradores" className="py-24 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Nuestros Colaboradores</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Conoce al equipo de profesionales dedicados a tu bienestar
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collaborators.map((collaborator) => (
                        <div
                            key={collaborator._id}
                            className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                                {collaborator.image ? (
                                    <Image
                                        src={urlFor(collaborator.image).url()}
                                        alt={collaborator.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary/40">
                                        <span className="text-6xl">👤</span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="mb-1 text-primary-foreground/80 font-medium text-sm bg-primary/20 backdrop-blur-sm inline-block px-3 py-1 rounded-full border border-primary/30">
                                        {collaborator.specialty || "Especialista"}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-1">{collaborator.name}</h3>
                                    <p className="text-white/80 text-sm flex items-center gap-1">
                                        <span className="text-primary">📍</span> {collaborator.location}
                                    </p>
                                </div>
                            </div>

                            {collaborator.description && (
                                <div className="absolute inset-0 bg-background/95 backdrop-blur-sm p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h3 className="text-xl font-bold mb-2 text-primary">{collaborator.name}</h3>
                                    <p className="text-foreground/80 leading-relaxed text-sm">
                                        {collaborator.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
