"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline">neko24.de</span>
          <span className="font-bold text-xl sm:hidden">neko24</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex button-hover-effect">
            <Link href="https://app.neko24.de">Jetzt Berechnung starten</Link>
          </Button>
          <Button variant="ghost" size="icon" className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden border-t">
          <div className="container py-4">
            <Button asChild className="w-full button-hover-effect">
              <Link href="https://app.neko24.de" onClick={() => setIsMenuOpen(false)}>
                Jetzt Berechnung starten
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
