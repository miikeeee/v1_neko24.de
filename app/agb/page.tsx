import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von neko24.de",
}

export default function AGBPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen neko24.de und
            seinen Kunden über die Nutzung der Plattform zur Erstellung von Nebenkostenabrechnungen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 2 Vertragsgegenstand</h2>
          <p>
            neko24.de stellt eine Online-Plattform zur Verfügung, mit der Nutzer Nebenkostenabrechnungen erstellen
            können. Die Plattform umfasst verschiedene Tools und Funktionen zur automatisierten Berechnung und
            Erstellung rechtssicherer Nebenkostenabrechnungen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 3 Registrierung und Nutzerkonto</h2>
          <p>
            Zur Nutzung der Plattform ist eine Registrierung erforderlich. Der Nutzer verpflichtet sich, wahrheitsgemäße
            und vollständige Angaben zu machen und diese aktuell zu halten.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 4 Leistungen</h2>
          <p>neko24.de bietet verschiedene Servicepakete an:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Erstellung von Nebenkostenabrechnungen</li>
            <li>Automatische Berechnung nach gesetzlichen Vorgaben</li>
            <li>PDF-Export der fertigen Abrechnungen</li>
            <li>Rechtliche Beratung (je nach Paket)</li>
            <li>Support und Kundenservice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 5 Preise und Zahlungsbedingungen</h2>
          <p>
            Die aktuellen Preise sind auf der Website einsehbar. Alle Preise verstehen sich inklusive der gesetzlichen
            Mehrwertsteuer. Die Zahlung erfolgt über die auf der Plattform angebotenen Zahlungsmethoden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 6 Pflichten des Nutzers</h2>
          <p>Der Nutzer verpflichtet sich:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Die Plattform nur für rechtmäßige Zwecke zu nutzen</li>
            <li>Korrekte und vollständige Daten einzugeben</li>
            <li>Seine Zugangsdaten vertraulich zu behandeln</li>
            <li>Keine schädlichen Programme oder Inhalte hochzuladen</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 7 Haftung</h2>
          <p>
            neko24.de haftet nur für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen. Die
            Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht Schäden aus der Verletzung des Lebens,
            des Körpers oder der Gesundheit betroffen sind.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 8 Kündigung</h2>
          <p>
            Der Vertrag kann von beiden Seiten mit einer Frist von 30 Tagen zum Monatsende gekündigt werden. Das Recht
            zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">§ 9 Schlussbestimmungen</h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand ist der Sitz von neko24.de. Sollten einzelne Bestimmungen dieser AGB
            unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
        </section>
      </div>
    </div>
  )
}
