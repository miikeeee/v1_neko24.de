"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import type { Hero } from "@/lib/types"

interface HeroSectionProps {
  hero?: Hero
}

export default function HeroSection({ hero }: HeroSectionProps) {
  // Fallback values if hero is undefined
  const headline = hero?.headline || "Nebenkostenabrechnung"
  const text = hero?.text || "Ihre professionelle Nebenkostenabrechnung – Schnell. Sicher. Gesetzeskonform."
  const buttonText = hero?.buttonText || "Jetzt starten"
  const image = hero?.image || "/placeholder.svg?height=300&width=450"

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">{headline}</h1>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-500 text-sm sm:text-base md:text-lg">{text}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-auto button-hover-effect">
                <Link href="https://app.neko24.de">{buttonText}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-auto button-hover-effect-outline">
                <Link href="https://app.neko24.de">Mehr erfahren</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end order-first lg:order-last mb-6 lg:mb-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full max-w-[450px] overflow-hidden rounded-lg shadow-xl">
              <Image src={image || "/placeholder.svg"} alt={headline} fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
