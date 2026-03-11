import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Portfolio } from '@/components/portfolio'
import { Destinations } from '@/components/destinations'
import { InstagramSection } from '@/components/instagram-section'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Approach />
      <Portfolio />
      <Destinations />
      <InstagramSection />
      <Contact />
      <Footer />
    </main>
  )
}
