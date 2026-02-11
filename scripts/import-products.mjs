
import { createClient } from 'next-sanity'

import { createReadStream } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

process.loadEnvFile('.env.local')

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-01-01",
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})


const products = [
    {
        id: "shanti",
        name: "Shanti",
        subtitle: "Blend Equilibrio Vital",
        description: "Encuentra tu centro y restaura el equilibrio interior con esta mezcla armonizante.",
        image: "/products/SHANTI.png",
        tags: ["Equilibrio", "Bienestar", "Armonía"]
    },
    {
        id: "prana-vayu",
        name: "Prana Vayu",
        subtitle: "Blend Aire Vital",
        description: "Renueva tu energía y respira profundamente con la esencia de la vida.",
        image: "/products/PRANA_VAYU.png",
        tags: ["Energía", "Respiración", "Vitalidad"]
    },
    {
        id: "energia-zen",
        name: "Energía Zen",
        subtitle: "Blend Anti-Estrés",
        description: "Libera tensiones y sumérgete en un estado de calma profunda y serenidad.",
        image: "/products/ENERGIA_ZEN.png",
        tags: ["Relax", "Anti-estrés", "Calma"]
    },
    {
        id: "shuddhi",
        name: "Shuddhi",
        subtitle: "Blend Purificación",
        description: "Limpia tu energía y renueva tu espíritu con esta mezcla purificadora.",
        image: "/products/SHUDDHI.png",
        tags: ["Purificación", "Renovación", "Equilibrio"]
    },
    {
        id: "vishram",
        name: "Vishram",
        subtitle: "Blend Descanso Profundo",
        description: "Encuentra la paz interior y disfruta de un descanso reparador con esta mezcla relajante.",
        image: "/products/VISHRAM.png",
        tags: ["Descanso", "Relajación", "Paz interior"]
    }
]

async function uploadImage(imagePath) {
    try {
        const fullPath = path.join(process.cwd(), 'public', imagePath)
        const readStream = createReadStream(fullPath)
        const asset = await client.assets.upload('image', readStream, {
            filename: path.basename(imagePath)
        })
        return asset._id
    } catch (error) {
        console.error(`Failed to upload image at ${imagePath}:`, error)
        return null
    }
}

async function importProducts() {
    console.log('Starting product import...')

    if (!process.env.SANITY_API_TOKEN) {
        console.error('Error: SANITY_API_TOKEN is missing in .env.local')
        return
    }

    for (const product of products) {
        console.log(`Processing ${product.name}...`)

        let imageAssetId = null
        if (product.image) {
            imageAssetId = await uploadImage(product.image)
        }

        const doc = {
            _type: 'product',
            name: product.name,
            subtitle: product.subtitle,
            description: product.description,
            tags: product.tags,
            image: imageAssetId ? {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: imageAssetId
                }
            } : undefined
        }

        try {
            const created = await client.create(doc)
            console.log(`Created product: ${product.name} (${created._id})`)
        } catch (err) {
            console.error(`Failed to create product: ${product.name}`, err)
        }
    }

    console.log('Import finished.')
}

importProducts()
