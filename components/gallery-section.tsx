import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface GalleryItem {
    _id: string
    title: string
    description?: string
    image: any
}

async function getGalleryItems() {
    const query = `*[_type == "galeriaItemType"] | order(_createdAt desc) {
    _id,
    title,
    description,
    image
  }`
    return await client.fetch<GalleryItem[]>(query)
}

export default async function GallerySection() {
    const galleryItems = await getGalleryItems()

    if (galleryItems.length === 0) {
        return null
    }

    return (
        <section id="galeria" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Galería
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Explora nuestros momentos y experiencias
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <div
                            key={item._id}
                            className="group relative h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                        >
                            {item.image && (
                                <Image
                                    src={urlFor(item.image).url()}
                                    alt={item.title || "Imagen de galería"}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
