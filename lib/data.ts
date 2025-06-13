import fs from "fs"
import path from "path"
import type { PageData } from "./types"

const DATA_DIRECTORY = path.join(process.cwd(), "data/nebenkostenabrechnung")

export function getAllSlugs(): string[] {
  try {
    // In production, read from the actual directory
    if (fs.existsSync(DATA_DIRECTORY)) {
      return fs
        .readdirSync(DATA_DIRECTORY)
        .filter((file) => file.endsWith(".json"))
        .map((file) => file.replace(".json", ""))
    }

    // For development/preview, return hardcoded slugs
    return ["koeln", "berlin", "vermieter", "heizkosten", "mietwohnung"]
  } catch (error) {
    console.error("Error reading slugs:", error)
    return ["koeln", "berlin", "vermieter", "heizkosten"]
  }
}

export function getPageData(slug: string): PageData | null {
  try {
    // In production, read from the actual file
    const filePath = path.join(DATA_DIRECTORY, `${slug}.json`)
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf8")
        const data = JSON.parse(fileContent)

        // Validate that the required fields exist
        if (!data.hero || !data.hero.headline) {
          console.warn(`Missing hero data in ${slug}.json, using mock data`)
          return getMockData(slug)
        }

        return data
      } catch (parseError) {
        console.error(`Error parsing JSON for slug ${slug}:`, parseError)
        console.log("Falling back to mock data...")
        return getMockData(slug)
      }
    }

    // For development/preview, return mock data
    return getMockData(slug)
  } catch (error) {
    console.error(`Error reading data for slug ${slug}:`, error)
    return getMockData(slug)
  }
}

function getMockData(slug: string): PageData {
  // Generate mock data based on the slug
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    slug,
    title: `Nebenkostenabrechnung ${capitalizedSlug} – Schnell & Gesetzeskonform | neko24.de`,
    metaDescription: `Erstellen Sie Ihre Nebenkostenabrechnung für ${capitalizedSlug} mit wenigen Klicks. Vollständig rechtskonform, schnell, digital.`,
    hero: {
      headline: `Nebenkostenabrechnung ${capitalizedSlug}`,
      text: `Ihre professionelle Nebenkostenabrechnung für ${capitalizedSlug} – Schnell. Sicher. Gesetzeskonform.`,
      buttonText: "Jetzt starten",
      image: `/placeholder.svg?height=300&width=450`,
    },
    introText: `Mit neko24.de sparen Sie Zeit, Kosten und Nerven bei der Erstellung Ihrer Nebenkostenabrechnung für ${capitalizedSlug}.`,
    stickySection: {
      steps: [
        {
          title: "Vor Ort Datenerfassung",
          text: `Ein Experte nimmt die Daten Ihrer Immobilie für ${capitalizedSlug} direkt bei Ihnen auf.`,
        },
        {
          title: "Digitale Abrechnung erstellen",
          text: "Automatische Berechnung, Zuordnung und PDF-Erstellung mit allen Details.",
        },
        {
          title: "Förderung sichern",
          text: "Unsere Plattform berücksichtigt automatisch lokale Fördermöglichkeiten.",
        },
      ],
      iconColor: "#22C55E",
    },
    angebote: [
      {
        name: "Nebenkostenabrechnung Basic",
        preisAlt: "69",
        preisNeu: "49",
        rabatt: "-29%",
        features: [
          "Perfekt für eine Wohneinheit geeignet",
          "Intuitive Schritt-für-Schritt Anleitung",
          "100% gesetzeskonforme Abrechnung",
          "Professioneller PDF-Export zum Versand",
          "Schneller E-Mail Support bei Fragen",
          "Automatische Berechnung aller Umlagen",
        ],
        cta: "Jetzt starten",
      },
      {
        name: "Nebenkostenabrechnung Pro",
        badge: "Beliebt",
        preisAlt: "149",
        preisNeu: "99",
        rabatt: "-34%",
        features: [
          "Ideal für bis zu 3 Wohneinheiten",
          "3 Jahre lang unbegrenzt nutzbar",
          "Prioritäts-Support mit schneller Hilfe",
          "Automatischer E-Mail Versand an Mieter",
          "Persönliche rechtliche Beratung inklusive",
          "Kostenlose Updates und neue Features",
        ],
        cta: "Jetzt starten",
      },
    ],
    faq: [
      {
        question: "Wie schnell ist die Abrechnung verfügbar?",
        answer: "Unmittelbar nach der Eingabe – in wenigen Minuten als PDF.",
      },
      {
        question: "Ist neko24.de rechtssicher?",
        answer: "Ja, alle Dokumente entsprechen den gesetzlichen Anforderungen.",
      },
      {
        question: `Berücksichtigt neko24.de spezifische Anforderungen für ${capitalizedSlug}?`,
        answer: `Ja, unsere Plattform ist speziell auf die Anforderungen und Besonderheiten für ${capitalizedSlug} angepasst.`,
      },
      {
        question: "Kann ich die Abrechnung auch nachträglich ändern?",
        answer:
          "Ja, Sie können Ihre Abrechnungen jederzeit bearbeiten und anpassen, solange sie noch nicht an die Mieter versendet wurden.",
      },
    ],
    structuredData: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `Wie schnell erhalte ich meine Nebenkostenabrechnung für ${capitalizedSlug}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sie erhalten Ihre fertige Nebenkostenabrechnung unmittelbar nach Dateneingabe.",
          },
        },
        {
          "@type": "Question",
          name: `Berücksichtigt neko24.de spezifische Anforderungen für ${capitalizedSlug}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Ja, unsere Plattform ist speziell auf die Anforderungen und Besonderheiten für ${capitalizedSlug} angepasst.`,
          },
        },
      ],
    },
    ctaFinal: {
      text: `Jetzt Nebenkostenabrechnung für ${capitalizedSlug} starten`,
      url: "https://app.neko24.de",
    },
    contentImages: {
      section1: {
        src: "/placeholder.svg?height=300&width=400",
        alt: `${capitalizedSlug} Dashboard`,
      },
      section2: {
        src: "/placeholder.svg?height=300&width=400",
        alt: `${capitalizedSlug} Prozessablauf`,
      },
      section3: {
        src: "/placeholder.svg?height=300&width=400",
        alt: `${capitalizedSlug} Rechtssicherheit`,
      },
      section4: {
        src: "/placeholder.svg?height=300&width=400",
        alt: `${capitalizedSlug} Förderung`,
      },
    },
  }
}
