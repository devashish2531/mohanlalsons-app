"use client"

import { Paintbrush, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="bg-gradient-to-r from-paint-red to-paint-blue w-10 h-10 rounded-md mr-3 flex items-center justify-center">
                <Paintbrush size={24} className="text-white" />
              </span>
              <span className="text-2xl font-bold text-foreground">Mohan Lal & Sons</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Your one-stop destination for all your painting needs. We offer a wide range of Asian Paints products and
              services to help you transform your space into a masterpiece.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-paint-blue/10 text-paint-blue hover:bg-paint-blue/20"
              >
                <Facebook size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-paint-pink/10 text-paint-pink hover:bg-paint-pink/20"
              >
                <Instagram size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-paint-purple/10 text-paint-purple hover:bg-paint-purple/20"
              >
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-foreground/70 hover:text-paint-red transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-foreground/70 hover:text-paint-red transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-foreground/70 hover:text-paint-red transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-foreground/70 hover:text-paint-red transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70 hover:text-paint-red transition-colors">Interior Painting</li>
              <li className="text-foreground/70 hover:text-paint-red transition-colors">Exterior Painting</li>
              <li className="text-foreground/70 hover:text-paint-red transition-colors">Decorative Finishes</li>
              <li className="text-foreground/70 hover:text-paint-red transition-colors">Waterproofing</li>
              <li className="text-foreground/70 hover:text-paint-red transition-colors">Wood Finishes</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Mohan Lal & Sons. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

