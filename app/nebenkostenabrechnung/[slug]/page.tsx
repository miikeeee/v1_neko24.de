import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPageData, getAllSlugs } from "@/lib/data"
import LandingPage from "@/components/LandingPage"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pageData = getPageData(params.slug)

  if (!pageData) {
    return {
      title: "Seite nicht gefunden",
    }
  }

  return {
    title: pageData.title,
    description: pageData.metaDescription,
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

export default function SlugPage({ params }: Props) {
  const pageData = getPageData(params.slug)

  if (!pageData) {
    notFound()
  }

  return <LandingPage data={pageData} />
}
