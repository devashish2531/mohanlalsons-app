import Hero from "@/components/hero"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </main>
  )
}

