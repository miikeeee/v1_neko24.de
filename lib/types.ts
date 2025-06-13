export interface Hero {
  headline: string
  text: string
  buttonText: string
  image?: string
}

export interface Step {
  title: string
  text: string
}

export interface StickySection {
  steps: Step[]
  iconColor?: string
}

export interface Angebot {
  name: string
  badge?: string
  rabatt?: string
  preisAlt?: string
  preisNeu: string
  features: string[]
  cta: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CTA {
  text: string
  url: string
}

export interface ContentImage {
  src: string
  alt: string
}

export interface ContentImages {
  section1?: ContentImage
  section2?: ContentImage
  section3?: ContentImage
  section4?: ContentImage
}

export interface StructuredData {
  "@type": string
  mainEntity: Array<{
    "@type": string
    name: string
    acceptedAnswer: {
      "@type": string
      text: string
    }
  }>
}

export interface PageData {
  slug: string
  title: string
  metaDescription: string
  hero: Hero
  introText: string
  stickySection: StickySection
  angebote?: Angebot[]
  faq: FAQItem[]
  structuredData: StructuredData
  ctaFinal: CTA
  contentImages?: ContentImages
}
