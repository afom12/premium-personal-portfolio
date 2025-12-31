import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { WorkSection } from '@/components/WorkSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navigation />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}


