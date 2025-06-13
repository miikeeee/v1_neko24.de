"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { FAQItem } from "@/lib/types"

interface FAQSectionProps {
  faq?: FAQItem[]
}

export default function FAQSection({ faq = [] }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // If no FAQ items are provided, return null
  if (!faq || faq.length === 0) return null

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Häufig gestellte Fragen</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">Antworten auf die wichtigsten Fragen</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                className="border rounded-lg overflow-hidden bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-sm sm:text-base">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50 border-t">
                        <p className="text-sm sm:text-base">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
