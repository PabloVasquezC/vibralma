
"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/motion-wrapper"
import { Button } from "./ui/button"
import { ProductModal } from "./product-modal"


import { urlFor } from "@/sanity/lib/image"

export interface Product {
    _id: string
    name: string
    subtitle: string
    description: string
    image: any
    tags: string[]
}

interface ProductShowcaseProps {
    products: Product[]
}

export default function ProductShowcase({ products }: ProductShowcaseProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="container mx-auto px-6">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                            Nuestros Productos
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Descubre nuestra línea exclusiva de blends esenciales para tu bienestar
                        </p>
                    </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24 max-w-6xl mx-auto">
                    {products.map((product) => (
                        <StaggerItem
                            key={product._id}
                            className="group relative h-96 bg-transparent transition-all duration-500 hover:-translate-y-2 perspective-1000 cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                        >
                            <div className="absolute inset-0 bg-card rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-x-2 border border-border/50 overflow-visible">
                                {/* Decorative Background Gradient inside Card */}
                                <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-muted/50 to-transparent opacity-50 rounded-t-2xl" />

                                {/* Image Container - Allows Overflow */}
                                <div className="relative h-64 flex items-center justify-center -mt-12 z-20">
                                    <div className="absolute inset-x-12 bottom-4 top-12 bg-black/20 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                                    <Image
                                        src={product.image ? urlFor(product.image).url() : '/placeholder.png'}
                                        alt={product.name}
                                        width={400}
                                        height={500}
                                        className="object-contain h-[140%] w-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-4 drop-shadow-xl"
                                    />
                                </div>

                                <div className="px-6 pb-6 pt-2 relative z-10">
                                    <div className="mb-3 text-center">
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-primary font-medium tracking-wide text-xs uppercase">
                                            {product.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-muted-foreground font-light text-sm text-center line-clamp-2 mb-4">
                                        {product.description}
                                    </p>

                                    <Button
                                        className="w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md"
                                        variant="default"
                                        size="sm"
                                    >
                                        Ver Detalle
                                    </Button>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <ProductModal
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    product={selectedProduct}
                />
            </div>
        </section>
    )
}
