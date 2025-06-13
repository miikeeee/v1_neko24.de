"use client"

import { motion } from "framer-motion"

interface SectionProps {
  heading: string
  content: string
  index: number
}

export default function Section({ heading, content, index }: SectionProps) {
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <div className="prose max-w-none">
        <p>{content}</p>
      </div>
    </motion.div>
  )
}
