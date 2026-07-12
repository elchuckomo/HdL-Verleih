import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://hdl-verleih.de"),
  title: {
    default: "Hau den Lukas & Musikanlage mieten in Frankenberg (Eder) | HDL-Verleih",
    template: "%s | HDL-Verleih",
  },
  description:
    "HDL-Verleih vermietet Hau den Lukas und Musikanlage in Frankenberg (Eder) und Umgebung. Für Vereinsfeste, Feiern, Partys und lokale Veranstaltungen.",
  openGraph: {
    title: "Hau den Lukas & Musikanlage mieten in Frankenberg (Eder) | HDL-Verleih",
    description:
      "HDL-Verleih vermietet Hau den Lukas und Musikanlage in Frankenberg (Eder) und Umgebung. Anfrage per Telefon oder E-Mail.",
    url: "https://hdl-verleih.de",
    siteName: "HDL-Verleih",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hau den Lukas und Musikanlage mieten bei HDL-Verleih",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Angebot" },
  { href: "/galerie", label: "Bilder" },
  { href: "/kontakt", label: "Kontakt" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HDL-Verleih",
  url: "https://hdl-verleih.de",
  image: "https://hdl-verleih.de/og-image.png",
  telephone: "+491629222164",
  email: "sven_armand@web.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zum Hermannsberg 7",
    postalCode: "35066",
    addressLocality: "Frankenberg (Eder)",
    addressRegion: "Hessen",
    addressCountry: "DE",
  },
  areaServed: "Frankenberg (Eder) und Umgebung",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hau den Lukas mieten",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Musikanlage mieten",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[color:var(--accent)] focus:px-4 focus:py-2 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/95 backdrop-blur">
          <div className="wrap flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-3" aria-label="HDL-Verleih Startseite">
                <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-[color:var(--line)] bg-white p-1">
                  <Image
                    src="/logo.png"
                    alt="HDL-Verleih Logo"
                    width={44}
                    height={44}
                    className="h-10 w-10 object-contain"
                    priority
                  />
                </span>
                <span>
                  <span className="block text-base font-bold leading-tight text-[color:var(--ink)]">HDL-Verleih</span>
                  <span className="block text-xs text-[color:var(--muted)]">Hau den Lukas & Musikanlage</span>
                </span>
              </Link>

              <details className="relative z-50 lg:hidden">
                <summary className="cursor-pointer list-none rounded-md border border-[color:var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[color:var(--ink)]">
                  Menü
                </summary>
                <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-[color:var(--line)] bg-white p-2 shadow-stamp">
                  <nav className="flex flex-col gap-1 text-sm font-semibold text-[color:var(--ink)]">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="rounded-md px-3 py-3 hover:bg-[color:var(--paper)]">
                        {item.label}
                      </Link>
                    ))}
                    <Link href="/impressum" className="rounded-md px-3 py-3 hover:bg-[color:var(--paper)]">Impressum</Link>
                    <Link href="/datenschutz" className="rounded-md px-3 py-3 hover:bg-[color:var(--paper)]">Datenschutz</Link>
                  </nav>
                </div>
              </details>
            </div>

            <nav className="hidden items-center gap-2 text-sm font-semibold text-[color:var(--ink)] lg:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 hover:bg-white">
                  {item.label}
                </Link>
              ))}
              <Link className="btn-small" href="/kontakt">Anfragen</Link>
            </nav>
          </div>
        </header>

        <main id="content" className="min-h-screen">
          {children}
        </main>

        <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper)]">
          <div className="wrap grid gap-6 py-8 md:grid-cols-[1fr_1fr_auto] md:items-start">
            <div className="space-y-2">
              <p className="font-bold text-[color:var(--ink)]">HDL-Verleih</p>
              <p className="text-sm text-[color:var(--muted)]">Zum Hermannsberg 7</p>
              <p className="text-sm text-[color:var(--muted)]">35066 Frankenberg (Eder) OT Viermünden</p>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--muted)]">
              <p>Telefon: <a className="link" href="tel:+491629222164">+49 162 9222164</a></p>
              <p>E-Mail: <a className="link" href="mailto:sven_armand@web.de">sven_armand@web.de</a></p>
              <p>Preis: auf Anfrage</p>
            </div>
            <Link className="btn-primary w-full md:w-auto" href="/kontakt">Anfrage vorbereiten</Link>
          </div>
          <div className="border-t border-[color:var(--line)]">
            <div className="wrap flex flex-col gap-3 py-4 text-xs text-[color:var(--muted)] md:flex-row md:items-center md:justify-between">
              <p>© 2026 HDL-Verleih. Alle Rechte vorbehalten.</p>
              <div className="flex gap-4">
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
              </div>
              <a
                href="https://chuckomo.de"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-2 font-semibold text-[color:var(--ink)] transition hover:text-[color:var(--accent)]"
              >
                <span>Ein Projekt von</span>
                <Image
                  src="/chuckomo-logo-thumb.jpg"
                  alt="Chuckomo"
                  width={40}
                  height={40}
                  className="h-8 w-8 rounded-full border border-[color:var(--line)] bg-white object-contain transition group-hover:border-[color:var(--accent)]"
                />
                <span>Chuckomo</span>
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
