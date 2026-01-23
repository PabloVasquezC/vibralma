import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                404
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                Página no encontrada
            </h2>
            <p className="text-foreground/80 max-w-md mb-8 leading-relaxed">
                Lo sentimos, la página que estás buscando no existe o ha sido movida.
                Regresa al inicio para continuar tu viaje de sanación.
            </p>
            <Link href="/">
                <Button size="lg" className="shadow-lg shadow-primary/20">
                    Volver al Inicio
                </Button>
            </Link>
        </div>
    )
}
