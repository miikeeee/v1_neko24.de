import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von neko24.de - Rechtliche Informationen und Kontaktdaten",
}

export default function ImpressumPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Impressum</h1>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="space-y-2">
            <p>
              <strong>neko24.de</strong>
            </p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
            <p>Deutschland</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <div className="space-y-2">
            <p>
              <strong>Telefon:</strong> +49 (0) 123 456789
            </p>
            <p>
              <strong>E-Mail:</strong> info@neko24.de
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
          <p>DE123456789</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div className="space-y-2">
            <p>Max Mustermann</p>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
            Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>
      </div>
    </div>
  )
}
