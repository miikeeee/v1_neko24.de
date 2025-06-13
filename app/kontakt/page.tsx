import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie neko24.de - Wir helfen Ihnen gerne bei Fragen zur Nebenkostenabrechnung",
}

export default function KontaktPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen zu unserer Plattform oder benötigen Sie Unterstützung bei der Nebenkostenabrechnung? Wir
            sind gerne für Sie da!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Telefon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">+49 (0) 123 456789</p>
              <p className="text-gray-600 mt-2">Rufen Sie uns an für eine persönliche Beratung</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                E-Mail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">info@neko24.de</p>
              <p className="text-gray-600 mt-2">Schreiben Sie uns eine E-Mail mit Ihren Fragen</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-semibold">neko24.de</p>
                <p>Musterstraße 123</p>
                <p>12345 Musterstadt</p>
                <p>Deutschland</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Öffnungszeiten
              </CardTitle>
              <CardDescription>Unser Support-Team ist zu folgenden Zeiten für Sie erreichbar:</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span>9:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag:</span>
                  <span>10:00 - 14:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schnellstart</CardTitle>
              <CardDescription>
                Möchten Sie direkt mit der Erstellung Ihrer Nebenkostenabrechnung beginnen?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nutzen Sie unsere intuitive Plattform und erstellen Sie Ihre erste Abrechnung in wenigen Minuten.
              </p>
              <Button asChild className="w-full">
                <Link href="https://app.neko24.de">Jetzt Abrechnung erstellen</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card>
            <CardHeader>
              <CardTitle>Häufige Fragen</CardTitle>
              <CardDescription>
                Viele Antworten finden Sie bereits in unseren FAQ-Bereichen auf den jeweiligen Themenseiten.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="outline">
                  <Link href="/nebenkostenabrechnung/koeln">FAQ Köln</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/nebenkostenabrechnung/berlin">FAQ Berlin</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/nebenkostenabrechnung/heizkosten">FAQ Heizkosten</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
