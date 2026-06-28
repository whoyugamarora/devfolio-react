import AuroraBackground from '@/components/AuroraBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import CertificationsSection from '@/components/CertificationsSection'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AuroraBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <CertificationsSection />
      <Contact />
      <Footer />
    </main>
  )
}
