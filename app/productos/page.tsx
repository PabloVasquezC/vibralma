
import ProductShowcase from "@/components/product-showcase"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Productos | Vibralma",
    description: "Conoce nuestra línea de productos de bienestar y aceites esenciales.",
}

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-20">
            <ProductShowcase />
        </main>
    )
}
