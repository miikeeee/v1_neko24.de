import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 md:py-24 lg:py-32">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">404 - Seite nicht gefunden</h1>
            <p className="text-muted-foreground">Die angeforderte Seite konnte nicht gefunden werden.</p>
          </div>
          <Button asChild>
            <Link href="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
