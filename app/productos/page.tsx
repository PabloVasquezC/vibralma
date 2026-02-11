
import ProductShowcase from "@/components/product-showcase"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Productos | Vibralma",
    description: "Conoce nuestra línea de productos de bienestar y aceites esenciales.",
}

export const revalidate = 10


import { client } from "@/sanity/lib/client"

async function getProducts() {
    const query = `*[_type == "product"] | order(_createdAt asc) {
        _id,
        name,
        subtitle,
        description,
        image,
        tags
    }`
    return await client.fetch(query)
}

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <main className="min-h-screen pt-20">
            <ProductShowcase products={products} />
        </main>
    )
}
