'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const FAQS = [
  {
    question: "¿Qué marcas de aceite manejan?",
    answer: "Trabajamos con las mejores marcas del mercado, incluyendo aceites importados y nacionales de primera calidad."
  },
  {
    question: "¿Cuánto tiempo toma un cambio de aceite?",
    answer: "El servicio de cambio de aceite generalmente toma entre 30-45 minutos, dependiendo del vehículo."
  },
  {
    question: "¿Ofrecen garantía en sus servicios?",
    answer: "Sí, todos nuestros servicios y productos cuentan con garantía. La duración depende del tipo de servicio realizado."
  },
  {
    question: "¿Necesito cita previa?",
    answer: "Aunque atendemos sin cita previa, recomendamos agendar para asegurar una atención inmediata y personalizada."
  },
  {
    question: "¿Realizan servicio a domicilio?",
    answer: "Sí, ofrecemos servicio a domicilio para ciertos servicios. Contáctanos para más información."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: BRAND.colors.primary }}
          >
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-black/50 rounded-lg text-left hover:bg-black/70 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-black/30 rounded-b-lg text-white/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

