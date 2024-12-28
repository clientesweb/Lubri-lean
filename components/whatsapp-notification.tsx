'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export function WhatsAppNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show notification after 5 seconds
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('whatsapp-notification-dismissed')
      if (!dismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    localStorage.setItem('whatsapp-notification-dismissed', 'true')
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-28 right-6 z-40 max-w-sm"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 pr-12">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Lubri-Lean"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">¿Necesitas ayuda?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Chatea con nosotros por WhatsApp para una atención personalizada
                </p>
              </div>
            </div>
          </div>
          {/* Animated pulse effect - Commented out as requested */}
          {/* <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full"
            style={{ backgroundColor: BRAND.colors.primary }}
          /> */}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

