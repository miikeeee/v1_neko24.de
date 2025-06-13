"use client"

import { useState, useEffect } from "react"
import HeroSection from "@/components/HeroSection"
import StickyTimeline from "@/components/StickyTimeline"
import AngeboteSection from "@/components/AngeboteSection"
import ContentSection from "@/components/ContentSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"
import type { PageData } from "@/lib/types"

interface LandingPageProps {
  data: PageData
}

export default function LandingPage({ data }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Ensure all required data is available, use fallbacks if not
  const hero = data?.hero || {
    headline: `Nebenkostenabrechnung ${data?.slug || ""}`,
    text: "Ihre professionelle Nebenkostenabrechnung – Schnell. Sicher. Gesetzeskonform.",
    buttonText: "Jetzt starten",
    image: "/placeholder.svg?height=300&width=450",
  }

  const stickySection = data?.stickySection || {
    steps: [
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
    ],
    iconColor: "#22C55E",
  }

  const faq = data?.faq || [
    {
      question: "Wie funktioniert neko24.de?",
      answer:
        "Unsere Plattform ermöglicht Ihnen die einfache und rechtssichere Erstellung von Nebenkostenabrechnungen.",
    },
    {
      question: "Ist die Nutzung kostenlos?",
      answer: "Wir bieten verschiedene Pakete an. Kontaktieren Sie uns für weitere Informationen.",
    },
  ]

  const ctaFinal = data?.ctaFinal || {
    text: "Jetzt Nebenkostenabrechnung erstellen",
    url: "https://app.neko24.de",
  }

  // Get images from data or use fallbacks
  const contentImages = data?.contentImages || {}

  return (
    <>
      <HeroSection hero={hero} />

      <StickyTimeline stickySection={stickySection} />

      {data?.angebote && data.angebote.length > 0 && <AngeboteSection angebote={data.angebote} />}

      <ContentSection
        title="Darum neko24.de"
        content="Unsere Plattform bietet Ihnen eine automatisierte Erstellung von Nebenkostenabrechnungen, die rechtskonform und einfach bedienbar ist. Wir unterstützen Sie bei allen Schritten, von der Erfassung der Kosten bis zur fertigen Abrechnung."
        image={contentImages.section1?.src || "/placeholder.svg?height=300&width=400"}
        imageAlt={contentImages.section1?.alt || "Nebenkostenabrechnung Dashboard"}
      />

      <ContentSection
        title="Wie funktioniert's?"
        content="In wenigen Schritten zur rechtssicheren Abrechnung: Daten eingeben, Kosten zuordnen, Abrechnung generieren – fertig! Unser System führt Sie durch den gesamten Prozess und stellt sicher, dass alle relevanten Informationen korrekt erfasst werden."
        image={contentImages.section2?.src || "/placeholder.svg?height=300&width=400"}
        imageAlt={contentImages.section2?.alt || "Prozessablauf"}
        imageLeft={true}
        bgColor="bg-white"
      />

      <ContentSection
        title={`Rechtskonform nach aktuellen Standards`}
        content="Unsere Plattform berücksichtigt alle aktuellen gesetzlichen Anforderungen und sorgt dafür, dass Ihre Nebenkostenabrechnung rechtssicher ist. Wir aktualisieren unsere Software regelmäßig, um Änderungen in der Gesetzgebung zu berücksichtigen."
        image={contentImages.section3?.src || "/placeholder.svg?height=300&width=400"}
        imageAlt={contentImages.section3?.alt || "Rechtssicherheit"}
      />

      <ContentSection
        title="Förderung sichern"
        content="Nutzen Sie staatliche Fördermöglichkeiten für energieeffiziente Maßnahmen. Unsere Plattform informiert Sie über aktuelle Förderprogramme und unterstützt Sie bei der Antragstellung."
        image={contentImages.section4?.src || "/placeholder.svg?height=300&width=400"}
        imageAlt={contentImages.section4?.alt || "Förderung"}
        imageLeft={true}
        bgColor="bg-white"
      />

      <FAQSection faq={faq} />

      <CTASection cta={ctaFinal} />

      {/* JSON-LD structured data */}
      {data?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...data.structuredData,
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  )
}
