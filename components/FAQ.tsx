"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQProps {
  question: string
  answer: string
}

export default function FAQ({ question, answer }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-sm sm:text-base">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 border-t">
              <p className="text-sm sm:text-base">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
