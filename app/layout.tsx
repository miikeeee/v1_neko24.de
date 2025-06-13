import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Neko24.de - Deine Easy Nebenkostenabrechnung Online",
    default: "Neko24.de - Deine Easy Nebenkostenabrechnung Online",
  },
  description: "Erstellen Sie Ihre Nebenkostenabrechnung schnell, sicher und gesetzeskonform mit neko24.de",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
