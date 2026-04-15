import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AboutUs } from '@/components/about-us'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Portfolio } from '@/components/portfolio'
import { Destinations } from '@/components/destinations'
import { InstagramSection } from '@/components/instagram-section'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ValuesSection } from '@/components/values-section'
import { SectionDivider } from '@/components/section-divider'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <SectionDivider />
      <Services />
      <Approach />
      <SectionDivider />
      <Portfolio />
      <ValuesSection />
      <SectionDivider />
      <InstagramSection />
      <Destinations />
      <SectionDivider />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
