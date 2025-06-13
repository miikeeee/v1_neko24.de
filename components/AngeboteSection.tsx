"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Angebot } from "@/lib/types"

interface AngeboteSectionProps {
  angebote: Angebot[]
}

export default function AngeboteSection({ angebote }: AngeboteSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Unsere Angebote</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Wählen Sie das passende Paket für Ihre Bedürfnisse</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-5xl mx-auto">
          {angebote.map((angebot, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg border bg-card shadow-sm overflow-hidden flex-1 max-w-sm lg:max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {angebot.badge && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                  {angebot.badge}
                </div>
              )}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{angebot.name}</h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    {angebot.preisAlt && (
                      <span className="text-lg text-gray-500 line-through">{angebot.preisAlt}€</span>
                    )}
                    <span className="text-3xl sm:text-4xl font-bold">{angebot.preisNeu}€</span>
                    {angebot.rabatt && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                        {angebot.rabatt}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">einmalig</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {angebot.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <Button asChild className="w-full button-hover-effect">
                    <Link href="https://app.neko24.de">{angebot.cta}</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
