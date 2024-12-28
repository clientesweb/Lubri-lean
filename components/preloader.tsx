'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500) // Give time for final animation
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative mb-8"
            >
              <Image
                src="/logo.png"
                alt="Lubri-Lean"
                width={150}
                height={150}
                className="w-32 h-32 object-contain"
              />
              {/* Glowing effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute inset-0 filter blur-xl"
                style={{
                  background: `radial-gradient(circle, ${BRAND.colors.primary}50 0%, transparent 70%)`,
                }}
              />
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <motion.h1
                animate={{
                  color: [BRAND.colors.primary, '#fff', BRAND.colors.primary],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="text-4xl font-bold mb-2"
              >
                LUBRI-LEAN
              </motion.h1>
              <motion.p
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="text-white/80 text-lg"
              >
                LUBRICANTES - DISTRIBUIDORA
              </motion.p>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full rounded-full"
                style={{ backgroundColor: BRAND.colors.primary }}
              />
            </div>

            {/* Loading Text */}
            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="mt-4 text-white/60"
            >
              Cargando {progress}%
            </motion.p>

            {/* Animated Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ backgroundColor: BRAND.colors.primary }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

