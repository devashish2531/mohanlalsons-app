"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background with paint splatter effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-paint-red/10 via-paint-pink/10 to-paint-blue/10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-paint-red/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-paint-blue/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-paint-purple/20 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-12 bg-paint-red"></div>
            <span className="text-paint-red font-medium">
              MOHAN LAL SONS PAINT STORE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Transform Your Space with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-paint-red via-paint-purple to-paint-blue">
              Vibrant Colors
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 leading-relaxed max-w-3xl">
            Your one-stop destination for all your painting needs. We offer a
            wide range of Asian Paints products and services to help you
            transform your space into a masterpiece.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-paint-red hover:bg-paint-red/90 text-white px-8 py-6 text-lg h-auto"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-foreground border-foreground/20 hover:bg-foreground/5 px-8 py-6 text-lg h-auto group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Simple decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}
