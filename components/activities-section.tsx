import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper"

interface Activity {
    _id: string
    name: string
    description?: string
    image?: any
}

async function getActivities() {
    return await client.fetch<Activity[]>(
        `*[_type == "activityType"] | order(_createdAt desc) {
      _id,
      name,
      description,
      image
    }`
    )
}

export default async function ActivitiesSection() {
    const activities = await getActivities()

    if (activities.length === 0) {
        return null
    }

    return (
        <section id="actividades" className="py-24 px-6 bg-gradient-to-b from-background to-primary/10 border-t border-border/40">
            <div className="container mx-auto max-w-6xl">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Nuestras Actividades
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Experiencias diseñadas para el crecimiento y bienestar
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity) => (
                        <StaggerItem
                            key={activity._id}
                            className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                {activity.image ? (
                                    <Image
                                        src={urlFor(activity.image).url()}
                                        alt={activity.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                                        <span className="text-4xl">✨</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <p className="text-white text-sm line-clamp-3">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 relative z-10 bg-card">
                                <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                    {activity.name}
                                </h3>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}
