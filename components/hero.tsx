'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BRAND } from '@/lib/constants'

const HERO_CONTENT = [
  {
    title: "Distribuidora de Lubricantes",
    subtitle: "Las mejores marcas y productos para tu vehículo",
    cta: "Conoce nuestros productos"
  },
  {
    title: "Expertos en Lubricantes",
    subtitle: "Asesoramiento técnico profesional",
    cta: "Contáctanos"
  },
  {
    title: "Calidad Garantizada",
    subtitle: "Productos originales e importados",
    cta: "Ver catálogo"
  }
]

export function Hero() {
  const [currentContent, setCurrentContent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % HERO_CONTENT.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(to right, ${BRAND.colors.dark} 20%, transparent 100%)` 
        }}
      />
      <div className="relative container mx-auto px-4 min-h-screen flex items-center pt-[calc(40px+5rem)]"> {/* Adjust for banner + header height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 
                className="text-xl md:text-2xl mb-4"
                style={{ color: BRAND.colors.primary }}
              >
                LUBRI-LEAN
              </h2>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            >
              {HERO_CONTENT[currentContent].title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl"
            >
              {HERO_CONTENT[currentContent].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button
                size="lg"
                className="text-black text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                {HERO_CONTENT[currentContent].cta}
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

