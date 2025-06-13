"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { CTA } from "@/lib/types"

interface CTASectionProps {
  cta?: CTA
}

export default function CTASection({ cta }: CTASectionProps) {
  // Fallback values if cta is undefined
  const text = cta?.text || "Jetzt Nebenkostenabrechnung erstellen"
  const url = cta?.url || "https://app.neko24.de"

  return (
    <section className="py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">Bereit loszulegen?</h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-sm sm:text-base">
              Erstellen Sie Ihre Nebenkostenabrechnung schnell und einfach mit neko24.de
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="w-auto button-hover-effect-secondary">
            <Link href={url}>{text}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
