'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const REVIEWS = [
  {
    name: "Juan Pérez",
    rating: 5,
    comment: "Excelente servicio y asesoramiento. Los productos son de primera calidad.",
    date: "hace 2 semanas"
  },
  {
    name: "María González",
    rating: 5,
    comment: "Muy buenos precios y atención personalizada. Recomendado!",
    date: "hace 1 mes"
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    comment: "El mejor lugar para el mantenimiento de mi auto. Profesionales y honestos.",
    date: "hace 1 mes"
  },
  // Add more reviews as needed
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const scrollToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length)
    }

    const timer = setInterval(scrollToNext, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="resenas" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div 
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: BRAND.colors.primary }}
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-medium">4.9 / 5.0</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: `${-100 * currentIndex}%`
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
              className="flex"
            >
              {REVIEWS.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-zinc-900 p-8 rounded-xl max-w-2xl mx-auto">
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5"
                          style={{ 
                            color: i < review.rating ? BRAND.colors.primary : '#4B5563',
                            fill: i < review.rating ? BRAND.colors.primary : 'none'
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-white/90 text-lg mb-6">{review.comment}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{review.name}</span>
                      <span className="text-sm text-white/60">{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-white/20'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? BRAND.colors.primary : undefined 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

