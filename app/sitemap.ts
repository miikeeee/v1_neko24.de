import { getAllSlugs } from "@/lib/data"

export default async function sitemap() {
  const baseUrl = "https://neko24.de"

  // Get all dynamic slugs
  const slugs = getAllSlugs()

  // Create entries for dynamic pages
  const dynamicRoutes = slugs.map((slug) => ({
    url: `${baseUrl}/nebenkostenabrechnung/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/nebenkostenabrechnung`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...dynamicRoutes,
  ]

  return routes
}
