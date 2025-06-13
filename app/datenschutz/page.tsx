import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von neko24.de - Informationen zum Umgang mit Ihren Daten",
}

export default function DatenschutzPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-xl font-semibold mb-2">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie
            dem Impressum dieser Website entnehmen.
          </p>

          <h3 className="text-xl font-semibold mb-2 mt-4">Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
            Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Hosting</h2>
          <h3 className="text-xl font-semibold mb-2">Externes Hosting</h3>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf
            dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
            <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
            <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
            <li>Recht auf Einschränkung der Datenverarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten bei uns</li>
            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Kontakt</h2>
          <p>Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:</p>
          <div className="mt-2">
            <p>
              <strong>E-Mail:</strong> datenschutz@neko24.de
            </p>
            <p>
              <strong>Telefon:</strong> +49 (0) 123 456789
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
