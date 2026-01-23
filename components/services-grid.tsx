"use client"

import { motion } from "framer-motion"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

interface Service {
    _id: string
    name: string
    description?: string
    image?: any
    icon?: string
}

interface ServicesGridProps {
    services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const },
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {services.map((service) => (
                <motion.div
                    key={service._id}
                    variants={item}
                    className="group p-6 bg-card/30 backdrop-blur-sm rounded-xl border border-border/40 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
                >
                    <div className="mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden relative">
                            {service.image ? (
                                <Image
                                    src={urlFor(service.image).url()}
                                    alt={service.name}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <span className="text-3xl text-primary">{service.icon || "✨"}</span>
                            )}
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
            ))}
        </motion.div>
    )
}
