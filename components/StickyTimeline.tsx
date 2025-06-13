"use client"
import { motion } from "framer-motion"
import type { StickySection } from "@/lib/types"

interface StickyTimelineProps {
  stickySection?: StickySection
}

export default function StickyTimeline({ stickySection }: StickyTimelineProps) {
  // Fallback if stickySection is undefined
  const steps = stickySection?.steps || [
    {
      title: "Datenerfassung",
      text: "Erfassen Sie alle relevanten Daten für Ihre Nebenkostenabrechnung.",
    },
    {
      title: "Automatische Berechnung",
      text: "Unsere Software berechnet alle Kosten automatisch und korrekt.",
    },
    {
      title: "Fertige Abrechnung",
      text: "Erhalten Sie Ihre fertige Nebenkostenabrechnung als PDF.",
    },
  ]

  const iconColor = stickySection?.iconColor || "#22C55E"

  return (
    <section id="info" className="bg-gray-50 py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">So funktioniert's</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Ihr Weg zur perfekten Nebenkostenabrechnung</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Steps with alternating layout */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-12 md:mb-16 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                {/* Step number with colored circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white font-bold text-sm sm:text-base"
                  style={{ backgroundColor: iconColor }}
                >
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex-grow">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{step.text}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting line to next step */}
              {index < steps.length - 1 && (
                <div
                  className="absolute left-5 sm:left-6 top-10 sm:top-12 w-0.5 h-12 sm:h-16"
                  style={{ backgroundColor: iconColor }}
                ></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
