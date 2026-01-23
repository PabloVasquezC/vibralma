import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-01-01",
    token: process.env.SANITY_API_TOKEN, // Users need to provide this in .env.local or run with SANITY_API_TOKEN=...
    useCdn: false,
})

const servicesData = [
    {
        icon: "🧠",
        title: "Coaching Psicológico Laboral",
        description: "Comunicación efectiva, liderazgo y prevención del Burnout para equipos de alto rendimiento.",
    },
    {
        icon: "🎵",
        title: "Terapia de Sonidos",
        description: "Cuencos tibetanos y gongs para reducción profunda del estrés y armonización energética.",
    },
    {
        icon: "🎼",
        title: "Musicoterapia",
        description: "Relajación profunda mediante elementos musicales terapéuticos cuidadosamente seleccionados.",
    },
    {
        icon: "🤝",
        title: "Dinámicas y Juegos",
        description: "Fortalecimiento de equipos mediante actividades interactivas y colaborativas.",
    },
    {
        icon: "⚡",
        title: "Chi Kung",
        description: "Práctica china milenaria de cultivo de energía interna y movimiento consciente.",
    },
    {
        icon: "💆",
        title: "Masajes Terapéuticos",
        description: "Sesiones de masaje profesional directamente en tu lugar de trabajo.",
    },
    {
        icon: "🎲",
        title: "Ludoteca Móvil",
        description: "Juegos de madera y desafíos estratégicos para estimular la creatividad y cohesión.",
    },
    {
        icon: "🧘",
        title: "Movimiento Consciente",
        description: "Estiramientos y conciencia corporal para mejorar postura y reducir tensión.",
    },
    {
        icon: "🎨",
        title: "Arteterapia",
        description: "Expresión emocional y sanación mediante la creación artística guiada.",
    },
    {
        icon: "🌸",
        title: "Aromaterapia",
        description: "Aceites esenciales terapéuticos para equilibrio emocional y bienestar.",
    },
    {
        icon: "💃",
        title: "Biodanza",
        description: "Música, movimiento y vivencia grupal para reconexión con las emociones.",
    },
    {
        icon: "🔄",
        title: "Danza Circular",
        description: "Integración grupal mediante danzas tradicionales en formación circular.",
    },
    {
        icon: "🥁",
        title: "Danza Africana",
        description: "Ritmos percutivos y movimientos terrestres para liberar energía vital.",
    },
    {
        icon: "💪",
        title: "Zumba",
        description: "Fitness cardiovascular con música latina y coreografías energizantes.",
    },
    {
        icon: "🕉️",
        title: "Conexión Interior",
        description: "Meditación profunda y movimiento intuitivo para paz mental y claridad.",
    },
    {
        icon: "🧘‍♀️",
        title: "Yoga Terapéutico",
        description: "Alineación postural, respiración consciente y flexibilidad para el bienestar integral.",
    },
    {
        icon: "💼",
        title: "Bienestar Laboral",
        description: "Gestión del estrés y comunicación efectiva en ambientes corporativos.",
    },
    {
        icon: "🛡️",
        title: "Defensa Personal",
        description: "Autodefensa y mindfulness para empoderamiento personal y seguridad.",
    },
    {
        icon: "🕊️",
        title: "Ceremonias de Unión",
        description: "Compromisos sagrados con ritos ancestrales personalizados.",
    },
    {
        icon: "🍃",
        title: "Gastronomía Integral",
        description: "Catering consciente y nutritivo con ingredientes saludables y sostenibles.",
    },
]

async function importServices() {
    console.log('Starting import...')

    if (!process.env.SANITY_API_TOKEN) {
        console.error('Error: SANITY_API_TOKEN is missing in .env.local')
        return
    }

    for (const service of servicesData) {
        const doc = {
            _type: 'serviceType',
            name: service.title,
            description: service.description,
            icon: service.icon,
            location: "Curicó", // Default location as it's required in schema
        }

        try {
            const created = await client.create(doc)
            console.log(`Created service: ${service.title} (${created._id})`)
        } catch (err) {
            console.error(`Failed to create service: ${service.title}`, err)
        }
    }

    console.log('Import finished.')
}

importServices()
