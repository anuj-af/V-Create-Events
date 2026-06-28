import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AboutUs } from '@/components/about-us'
import { Services } from '@/components/services'
import { Approach } from '@/components/approach'
import { Portfolio } from '@/components/portfolio'
// import { Destinations } from '@/components/destinations'  // Hidden for now - will enable later
import { InstagramSection } from '@/components/instagram-section'
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
      {/* <Destinations />  // Hidden for now - will enable later */}
      <Contact />
      <Footer />
    </main>
  )
}
