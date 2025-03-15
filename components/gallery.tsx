"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Interior painting project",
      caption: "Modern Living Room Transformation",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Exterior painting project",
      caption: "Vibrant Exterior Makeover",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Decorative painting",
      caption: "Artistic Wall Design",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Commercial painting project",
      caption: "Commercial Space Renovation",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-paint-purple"></div>
              <span className="text-paint-purple font-medium text-sm">OUR WORK</span>
              <div className="h-px w-8 bg-paint-purple"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Project Gallery</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Browse through our recent painting projects and get inspired for your next renovation
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* Main carousel image */}
            <div className="aspect-[16/9] relative">
              <img
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{images[currentIndex].caption}</h3>
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index ? "border-paint-purple" : "border-transparent"
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-20 object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

