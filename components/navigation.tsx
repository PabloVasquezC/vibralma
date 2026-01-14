"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/inicio", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/inicio" className="text-2xl font-serif font-semibold text-primary">
            Vibralma
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-foreground hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contacto">Reservar</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
