
"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"


import { urlFor } from "@/sanity/lib/image"

interface Product {
    _id: string
    name: string
    subtitle: string
    description: string
    image: any
    tags: string[]
}

interface ProductModalProps {
    isOpen: boolean
    onClose: () => void
    product: Product | null
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!product) return null

    const handleWhatsAppClick = () => {
        const message = `Hola, me interesa el producto *${product.name}* (${product.subtitle}). ¿Me podrían dar más información?`
        const whatsappUrl = `https://wa.me/56973343929?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-border/50"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 bg-gradient-to-br from-muted/50 to-background relative min-h-[300px] md:min-h-full flex items-center justify-center p-8 overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="relative z-10 w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={product.image ? urlFor(product.image).url() : '/placeholder.png'}
                                        alt={product.name}
                                        width={500}
                                        height={600}
                                        className="object-contain max-h-[80%] w-auto drop-shadow-2xl"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                                <div className="mb-6">
                                    <h3 className="text-secondary font-medium tracking-widest text-sm uppercase mb-2">
                                        {product.subtitle}
                                    </h3>
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                                        {product.name}
                                    </h2>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.tags && product.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="prose prose-stone dark:prose-invert max-w-none text-muted-foreground mb-8 text-lg leading-relaxed">
                                    <p>{product.description}</p>
                                    <p>
                                        Nuestros blends están formulados con aceites esenciales 100% puros y naturales,
                                        creados para acompañarte en tus momentos de autocuidado y bienestar.
                                    </p>
                                </div>

                                <div className="mt-auto pt-6 border-t border-border/50">
                                    <Button
                                        onClick={handleWhatsAppClick}
                                        size="lg"
                                        className="w-full text-lg gap-2 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 bg-[#25D366] hover:bg-[#128C7E] text-white border-none"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        Consultar por WhatsApp
                                    </Button>
                                    <p className="text-center text-xs text-muted-foreground mt-3">
                                        Te responderemos a la brevedad posible.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

