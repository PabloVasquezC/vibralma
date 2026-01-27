"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#nosotros", label: "Nosotros" },
    { href: "/#actividades", label: "Actividades" },
    { href: "/#galeria", label: "Galería" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/80 via-background/60 to-background/40 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/#inicio" className="z-50 relative">
            <Image src="/vibralma-logo-removed-bg.png" width={400} height={400} alt="Vibralma Logo" className="h-16 w-auto hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
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

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button asChild size="sm">
              <Link href="/#contacto">Reservar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 h-screen"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-serif font-medium transition-colors",
                      pathname === item.href ? "text-primary" : "text-foreground hover:text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4">
                  <ModeToggle />
                  <Button asChild size="lg" onClick={() => setIsOpen(false)}>
                    <Link href="/#contacto">Reservar</Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  )
}
