import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col gap-2 py-10 md:flex-row md:py-6">
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} neko24.de. Alle Rechte vorbehalten.</p>
        <nav className="md:ml-auto flex gap-4 sm:gap-6">
          <Link href="/impressum" className="text-xs text-gray-500 hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-xs text-gray-500 hover:underline">
            Datenschutz
          </Link>
          <Link href="/agb" className="text-xs text-gray-500 hover:underline">
            AGB
          </Link>
          <Link href="/kontakt" className="text-xs text-gray-500 hover:underline">
            Kontakt
          </Link>
        </nav>
      </div>
    </footer>
  )
}
