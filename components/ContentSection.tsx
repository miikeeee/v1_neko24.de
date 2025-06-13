"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ContentSectionProps {
  title: string
  content: string
  image: string
  imageAlt: string
  imageLeft?: boolean
  bgColor?: string
}

export default function ContentSection({
  title,
  content,
  image,
  imageAlt,
  imageLeft = false,
  bgColor = "bg-gray-50",
}: ContentSectionProps) {
  return (
    <section className={`py-12 md:py-20 ${bgColor}`}>
      <div className="container px-4 md:px-6">
        <div className={`grid gap-8 lg:grid-cols-3 items-center ${imageLeft ? "lg:grid-flow-dense" : ""}`}>
          <motion.div
            className={`lg:col-span-2 ${imageLeft ? "lg:col-start-2" : ""} text-center lg:text-left`}
            initial={{ opacity: 0, x: imageLeft ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 text-sm sm:text-base">{content}</p>
            </div>
          </motion.div>
          <motion.div
            className={`${imageLeft ? "lg:col-start-1 lg:row-start-1" : ""} order-first lg:order-none mb-6 lg:mb-0`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[200px] sm:h-[250px] w-full overflow-hidden rounded-lg shadow-md mx-auto lg:mx-0">
              <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
