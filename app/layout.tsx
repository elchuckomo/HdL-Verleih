import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hdl-verleih.de"),
  title: {
    default: "Hau den Lukas & Musikanlage mieten in Frankenberg (Eder) | HdL-Verleih",
    template: "%s | HdL-Verleih",
  },
  description:
    "HdL-Verleih vermietet den Klassiker „Hau den Lukas“ und professionelle Musikanlagen in Frankenberg (Eder) und Umgebung. Perfekt für Feste, Firmenfeiern und Vereins-Events. Jetzt anfragen!",
  openGraph: {
    title: "Hau den Lukas & Musikanlage mieten in Frankenberg (Eder) | HdL-Verleih",
    description:
      "Hau den Lukas und professionelle Musikanlage für Events in Frankenberg (Eder) und Umgebung.",
    url: "https://hdl-verleih.de",
    siteName: "HdL-Verleih",
    locale: "de_DE",
    type: "website",
  },
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-hero-grain overflow-x-hidden">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-[color:var(--gold)] focus:px-4 focus:py-2 focus:text-[color:var(--bg)]"
        >
          Zum Inhalt springen
        </a>
        <header className="border-b border-white/10 bg-[color:var(--bg)]/95">
          <div className="wrap flex flex-col gap-4 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[color:var(--gold)] bg-[color:var(--iron)] p-1 float-glow">
                  {/* Place your logo at /public/logo.png */}
                  <Image
                    src="/logo.png"
                    alt="HdL-Verleih Logo"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-contain"
                    priority
                  />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--sand)]">Eventverleih</p>
                  <p className="text-2xl font-semibold uppercase tracking-[0.12em]">HdL-Verleih</p>
                </div>
              </div>
              <details className="relative z-50 lg:hidden">
                <summary className="cursor-pointer list-none rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">
                  Menü
                </summary>
                <div className="absolute right-0 z-50 mt-3 w-56 rounded-2xl border border-white/10 bg-[color:var(--bg-soft)] p-3 shadow-stamp">
                  <nav className="flex flex-col gap-2 text-sm uppercase tracking-[0.22em] text-[color:var(--sand)]">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/30 hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </details>
            </div>
            <nav className="hidden flex-wrap gap-3 text-sm uppercase tracking-[0.22em] text-[color:var(--sand)] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/30 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main id="content" className="min-h-screen">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-[color:var(--bg)]/95">
          <div className="wrap grid gap-6 py-8 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[color:var(--iron)] p-1">
                  {/* Place your logo at /public/logo.png */}
                  <Image
                    src="/logo.png"
                    alt="HdL-Verleih Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-contain"
                  />
                </div>
                <p className="text-lg font-semibold uppercase tracking-[0.12em]">HdL-Verleih</p>
              </div>
              <p className="text-sm text-[color:var(--muted)]">Zum Hermannsberg 7</p>
              <p className="text-sm text-[color:var(--muted)]">35066 Frankenberg (Eder) OT Viermünden</p>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--muted)]">
              <p>Telefon: <a className="text-[color:var(--gold)]" href="tel:+491629222164">+49 162 9222164</a></p>
              <p>E-Mail: <a className="text-[color:var(--gold)]" href="mailto:sven_armand@web.de">sven_armand@web.de</a></p>
              <p>Preis: <span className="text-[color:var(--gold)]">auf Anfrage</span></p>
            </div>
            <div className="space-y-2 text-sm text-[color:var(--muted)]">
              <p className="uppercase tracking-[0.3em] text-[color:var(--sand)]">Bereit für den Kracher?</p>
              <a className="btn-primary w-fit" href="/kontakt">Jetzt anfragen</a>
            </div>
          </div>
          <div className="border-t border-white/5">
            <div className="wrap flex flex-col items-start justify-between gap-3 py-4 text-xs text-[color:var(--muted)] md:flex-row">
              <p>© 2026 HdL-Verleih. Alle Rechte vorbehalten.</p>
              <div className="flex gap-4">
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
