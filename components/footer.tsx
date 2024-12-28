'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Phone } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export function Footer() {
  const phoneNumber = BRAND.contact.phone.replace(/\D/g, '') // Remove non-digits for tel: link

  return (
    <footer className="bg-black pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="Lubri-Lean"
              className="h-16 w-auto"
            />
            <p className="text-white/70">
              Expertos en limpieza y detallado automotriz profesional. 
              Cuidamos tu vehículo como si fuera nuestro.
            </p>
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: BRAND.colors.primary }}
            >
              Servicios
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Cambio de Aceite
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Cambio de Filtros
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Service Completo
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-white/70 hover:text-white transition-colors">
                  Venta de Productos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: BRAND.colors.primary }}
            >
              Horario
            </h3>
            <ul className="space-y-4 text-white/70">
              <li>Lunes - Viernes: 9:00 - 18:00</li>
              <li>Sábado: 9:00 - 14:00</li>
              <li>Domingo: Cerrado</li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="text-xl font-bold mb-6"
              style={{ color: BRAND.colors.primary }}
            >
              Síguenos
            </h3>
            <div className="flex gap-4">
              <Link
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
              <Link
                href={`tel:${phoneNumber}`}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Lubri-Lean. Todos los derechos reservados.
              <span className="block md:inline md:ml-2">
                Powered by <a 
                  href="https://dualitydomain.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: BRAND.colors.primary }}
                  className="hover:opacity-80 transition-opacity font-medium"
                >
                  Duality Domain
                </a>
              </span>
            </p>
            <nav className="flex flex-wrap justify-center gap-8">
              <Link href="/privacidad" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-white/60 hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <Link
        href={BRAND.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 transition-transform hover:scale-110"
      >
        <img
          src="/logo.png"
          alt="Lubri-Lean WhatsApp"
          className="w-full h-full object-contain"
        />
      </Link>
    </footer>
  )
}

