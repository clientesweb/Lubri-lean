'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BRAND } from '@/lib/constants'

const MENU_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40) // Adjust scroll threshold to account for banner height
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`w-full h-20 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Lubri-Lean"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-primary relative group text-sm uppercase tracking-wider font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-8">
              <Link
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href={`tel:${BRAND.contact.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{BRAND.contact.phone}</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col gap-6">
                {MENU_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-white hover:text-primary text-2xl font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-4 pt-6 border-t border-white/10"
                >
                  <Link
                    href={BRAND.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-primary"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Síguenos en Instagram</span>
                  </Link>
                  <Link
                    href={`tel:${BRAND.contact.phone}`}
                    className="flex items-center gap-3 text-white hover:text-primary"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{BRAND.contact.phone}</span>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

