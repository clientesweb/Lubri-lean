import { Preloader } from '@/components/preloader'
import { PromoBanner } from '@/components/promo-banner'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Reviews } from '@/components/reviews'
import { FAQ } from '@/components/faq'
import { InstagramFeed } from '@/components/instagram-feed'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { WhatsAppNotification } from '@/components/whatsapp-notification'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader />
      <div className="fixed top-0 left-0 right-0 z-50">
        <PromoBanner />
        <Header />
      </div>
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <FAQ />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppNotification />
    </div>
  )
}

