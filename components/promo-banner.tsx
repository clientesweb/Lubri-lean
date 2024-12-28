'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const promos = [
  {
    title: "¡OFERTA ESPECIAL!",
    description: "20% de descuento en cambio de aceite"
  },
  {
    title: "¡NUEVO SERVICIO!",
    description: "Asesoramiento técnico personalizado"
  },
  {
    title: "¡PROMOCIÓN!",
    description: "Descuentos especiales en filtros"
  }
]

export function PromoBanner() {
  const [currentPromo, setCurrentPromo] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div 
      className="w-full h-14 flex items-center" // Increased height from h-10 to h-14
      style={{ backgroundColor: BRAND.colors.secondary }}
    >
      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPromo}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex items-center justify-center gap-2 text-center"
          >
            <ChevronRight 
              className="w-5 h-5"
              style={{ color: BRAND.colors.primary }}
            />
            <div className="text-base"> {/* Increased text size */}
              <span 
                className="font-bold mr-2"
                style={{ color: BRAND.colors.primary }}
              >
                {promos[currentPromo].title}
              </span>
              <span className="text-white">
                {promos[currentPromo].description}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

