import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, MessageCircle } from "lucide-react"


export default function ContactoPage() {
  return (
    <div className="relative min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-4">
            Comienza tu viaje
          </h1>
          <p className="text-foreground/90">Contáctanos para transformar el bienestar de tu organización</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border-2 border-primary/20 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Información de Contacto</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-foreground/60 mb-1 font-medium">Dirección</div>
                  <div className="text-foreground">Alicia Morel #2437, Curicó, Chile</div>
                </div>
                <div>
                  <div className="text-foreground/60 mb-1 font-medium">Teléfono / WhatsApp</div>
                  <div className="text-foreground">+56 9 7334 3929</div>
                </div>
                <div>
                  <div className="text-foreground/60 mb-1 font-medium">Correo Electrónico</div>
                  <div className="text-foreground">vibralma.sa@gmail.com</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border-2 border-secondary/20 shadow-lg">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Síguenos</h3>
              <div className="flex gap-4">


                <Link href="https://www.instagram.com/vibralma_sonidos_ancestrales/" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Link>
                <Link href="https://www.facebook.com/vibralma.sonidos.ancestrales" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Link>
                <Link href="https://wa.me/56973343929" target="_blank" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors font-medium">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 bg-card/30 backdrop-blur-sm rounded-xl border-2 border-accent/20 shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-background border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-foreground resize-none"
                />
              </div>
              <Button type="submit" className="w-full shadow-lg shadow-primary/20">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
