'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

const SERVICES = [
  {
    icon: null,
    title: "Cambio de Aceite",
    description: "Servicio profesional con aceites de primera calidad",
    image: "https://images.unsplash.com/photo-1635763200208-c71fd6c88d75?q=80&w=2000"
  },
  {
    icon: null,
    title: "Cambio de Filtros",
    description: "Aire, combustible, aceite y habitáculo",
    image: "https://images.unsplash.com/photo-1636797549122-9c7996de4bdc?q=80&w=2000"
  },
  {
    icon: null,
    title: "Service Completo",
    description: "Mantenimiento integral de tu vehículo",
    image: "https://images.unsplash.com/photo-1487754160018-cd6b53ad3c77?q=80&w=2000"
  },
  {
    icon: null,
    title: "Asesoramiento Técnico",
    description: "Expertos a tu servicio",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000"
  },
  {
    icon: null,
    title: "Venta de Aceites",
    description: "Envasados, importados y sueltos",
    image: "https://images.unsplash.com/photo-1604705528621-81b2e4f89e68?q=80&w=2000"
  },
  {
    icon: null,
    title: "Venta de Baterías",
    description: "Las mejores marcas del mercado",
    image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000"
  },
  {
    icon: null,
    title: "Venta de Filtros",
    description: "Amplio stock de todas las marcas",
    image: "https://images.unsplash.com/photo-1632934454254-75d589f84403?q=80&w=2000"
  },
  {
    icon: null,
    title: "Productos Varios",
    description: "Todo para el mantenimiento de tu vehículo",
    image: "https://images.unsplash.com/photo-1606577924006-27d39b132ae2?q=80&w=2000"
  }
]

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-zinc-900">
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
            Nuestros Servicios
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white/80 mb-4">
              LUBRICANTES - DISTRIBUIDORA
            </p>
            <p className="text-lg text-white/60">
              Experiencia, calidad y honestidad a su servicio
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/5]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

