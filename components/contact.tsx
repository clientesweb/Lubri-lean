'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-zinc-900">
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
            Contáctanos
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte con el mantenimiento de tu vehículo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Llámanos</h3>
                  <p className="text-white/80">{BRAND.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-white/80">{BRAND.contact.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: BRAND.colors.primary }}
                >
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ubicación</h3>
                  <p className="text-white/80">{BRAND.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.0307321455473!2d-55.89655902396866!3d-27.366695776707386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be3649024b9d%3A0x4d0d1f5a1dd57cd4!2sLubri-Lean!5e0!3m2!1ses!2sar!4v1703717844830!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder="Nombre"
                  className="bg-white/10 border-white/20 text-white"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <Input
                type="tel"
                placeholder="Teléfono"
                className="bg-white/10 border-white/20 text-white"
              />
              <Input
                placeholder="Modelo de auto"
                className="bg-white/10 border-white/20 text-white"
              />
              <Textarea
                placeholder="Mensaje"
                className="bg-white/10 border-white/20 text-white h-32"
              />
              <Button 
                type="submit"
                size="lg"
                className="w-full text-black text-lg"
                style={{ backgroundColor: BRAND.colors.primary }}
              >
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

