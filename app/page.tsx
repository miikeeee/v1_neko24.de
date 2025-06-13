"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Home, Shield, Users, Zap, TrendingUp, Award, Star } from "lucide-react"
import Image from "next/image"
import { getAllSlugs } from "@/lib/data"
import FAQ from "@/components/FAQ"
import { motion } from "framer-motion"

export default function HomePage() {
  const featuredSlugs = getAllSlugs().slice(0, 6)

  const testimonials = [
    {
      name: "Maria Schmidt",
      role: "Vermieterin",
      content: "Mit neko24.de spare ich jedes Jahr Stunden bei der Nebenkostenabrechnung. Einfach perfekt!",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      role: "Hausverwaltung",
      content: "Endlich eine Lösung, die wirklich funktioniert. Rechtssicher und benutzerfreundlich.",
      rating: 5,
    },
    {
      name: "Anna Müller",
      role: "Immobilienbesitzerin",
      content: "Die automatische Berechnung ist genial. Keine Fehler mehr in meinen Abrechnungen!",
      rating: 5,
    },
  ]

  const faqItems = [
    {
      question: "Wie funktioniert neko24.de?",
      answer:
        "Unsere Plattform führt Sie Schritt für Schritt durch die Erstellung Ihrer Nebenkostenabrechnung. Sie geben einfach Ihre Daten ein und erhalten eine rechtssichere, fertige Abrechnung als PDF.",
    },
    {
      question: "Ist die Nutzung kostenlos?",
      answer:
        "Wir bieten verschiedene Pakete an, von kostenlosen Basisfunktionen bis hin zu Premium-Services mit persönlicher Beratung. Schauen Sie sich unsere Preisübersicht an.",
    },
    {
      question: "Sind die Abrechnungen rechtssicher?",
      answer:
        "Ja, alle unsere Abrechnungen entsprechen den aktuellen gesetzlichen Vorgaben und werden regelmäßig von Rechtsexperten überprüft.",
    },
    {
      question: "Kann ich die Software auch für mehrere Immobilien nutzen?",
      answer:
        "Selbstverständlich! Unsere Plattform ist sowohl für einzelne Wohnungen als auch für große Immobilienportfolios geeignet.",
    },
    {
      question: "Wie schnell erhalte ich meine fertige Abrechnung?",
      answer:
        "Nach der Eingabe Ihrer Daten erhalten Sie Ihre fertige Nebenkostenabrechnung sofort als PDF zum Download.",
    },
  ]

  return (
    <>
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nebenkostenabrechnung leicht gemacht
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Erstellen Sie Ihre Nebenkostenabrechnung schnell, sicher und gesetzeskonform mit neko24.de
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-auto button-hover-effect">
                  <Link href="https://app.neko24.de">Jetzt starten</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-auto button-hover-effect-outline">
                  <Link href="https://app.neko24.de">Mehr erfahren</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative h-[300px] w-[450px] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?height=300&width=450"
                  alt="Nebenkostenabrechnung Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        id="features"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Warum neko24.de?</h2>
            <p className="text-gray-500 mt-2 max-w-[800px] mx-auto">
              Unsere Plattform bietet Ihnen alles, was Sie für eine rechtssichere Nebenkostenabrechnung benötigen
            </p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Rechtssicher",
                description: "Alle Abrechnungen entsprechen den aktuellen gesetzlichen Vorgaben und Fristen.",
              },
              {
                icon: CheckCircle,
                title: "Einfach",
                description: "Intuitive Benutzeroberfläche für schnelle und fehlerfreie Abrechnungserstellung.",
              },
              {
                icon: Home,
                title: "Für alle Immobilien",
                description: "Ob Mehrfamilienhaus oder Einzelwohnung - neko24 passt sich Ihren Bedürfnissen an.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col space-y-2">
                  <div className="p-2 bg-primary/10 w-fit rounded-full">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild size="lg" className="w-auto button-hover-effect">
              <Link href="https://app.neko24.de" className="flex items-center gap-2">
                Jetzt Nebenkostenabrechnung erstellen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Vertrauen Sie auf unsere Erfahrung</h2>
            <p className="text-primary-foreground/80 mt-2 max-w-[800px] mx-auto">
              Tausende zufriedene Kunden nutzen bereits neko24.de für ihre Nebenkostenabrechnungen
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Users, number: "10.000+", text: "Zufriedene Kunden" },
              { icon: Zap, number: "50.000+", text: "Erstellte Abrechnungen" },
              { icon: TrendingUp, number: "99.9%", text: "Rechtssicherheit" },
              { icon: Award, number: "4.9/5", text: "Kundenbewertung" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Das sagen unsere Kunden</h2>
            <p className="text-gray-500 mt-2 max-w-[800px] mx-auto">
              Erfahren Sie, warum Vermieter und Hausverwaltungen auf neko24.de vertrauen
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Entdecken Sie unsere Ressourcen</h2>
            <p className="text-gray-500 mt-2">
              Informationen zu Nebenkostenabrechnungen in verschiedenen Städten und Situationen
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredSlugs.map((slug, index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/nebenkostenabrechnung/${slug}`}
                  className="block rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-xl font-bold">
                    Nebenkostenabrechnung {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </h3>
                  <p className="text-gray-500 mt-2">Spezifische Informationen für {slug}</p>
                  <div className="mt-4 flex items-center text-primary">
                    Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Häufig gestellte Fragen</h2>
            <p className="text-gray-500 mt-2">Antworten auf die wichtigsten Fragen zu neko24.de</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FAQ question={item.question} answer={item.answer} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Bereit für einfache Nebenkostenabrechnungen?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80">
                Sparen Sie Zeit und vermeiden Sie Fehler mit unserer intuitiven Plattform.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary" className="w-auto button-hover-effect-secondary">
              <Link href="https://app.neko24.de">Jetzt kostenlos testen</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}
