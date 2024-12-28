'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const INSTAGRAM_CONTENT = {
  posts: ['C769BvIAoks', 'C_jSrzCPekR', 'C_jSgkKvv8t'],
  reels: ['C9QkB6Avnt0']
}

export function InstagramFeed() {
  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <Instagram 
            className="w-8 h-8" 
            style={{ color: BRAND.colors.primary }} 
          />
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ color: BRAND.colors.primary }}
          >
            Síguenos en Instagram
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSTAGRAM_CONTENT.posts.map((postId, index) => (
            <motion.div
              key={postId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="aspect-square w-full"
            >
              <iframe
                src={`https://www.instagram.com/p/${postId}/embed`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          {INSTAGRAM_CONTENT.reels.map((reelId, index) => (
            <motion.div
              key={reelId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="aspect-[9/16] max-w-sm mx-auto"
            >
              <iframe
                src={`https://www.instagram.com/reel/${reelId}/embed`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

