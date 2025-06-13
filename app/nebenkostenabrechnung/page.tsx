import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllSlugs } from "@/lib/data"

export const metadata = {
  title: "Nebenkostenabrechnung erstellen | neko24.de",
  description:
    "Erstellen Sie Ihre Nebenkostenabrechnung schnell, sicher und gesetzeskonform. neko24.de unterstützt Vermieter und Hausverwaltungen.",
}

export default function NebenKostenPage() {
  const slugs = getAllSlugs()

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nebenkostenabrechnung leicht gemacht
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Erstellen Sie Ihre Nebenkostenabrechnung schnell, sicher und gesetzeskonform mit neko24.de
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="https://app.neko24.de">Jetzt starten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Unsere Ressourcen</h2>
            <p className="text-gray-500 mt-2">
              Informationen zu Nebenkostenabrechnungen in verschiedenen Städten und Situationen
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {slugs.map((slug) => (
              <Link
                key={slug}
                href={`/nebenkostenabrechnung/${slug}`}
                className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold">
                  Nebenkostenabrechnung {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h3>
                <p className="text-gray-500 mt-2">Spezifische Informationen für {slug}</p>
                <div className="mt-4 flex items-center text-primary">
                  Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Bereit für einfache Nebenkostenabrechnungen?
              </h2>
              <p className="mx-auto max-w-[600px] text-primary-foreground/80">
                Sparen Sie Zeit und vermeiden Sie Fehler mit unserer intuitiven Plattform.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="https://app.neko24.de">Jetzt kostenlos testen</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
