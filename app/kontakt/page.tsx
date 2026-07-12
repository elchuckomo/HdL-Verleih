export const metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu HDL-Verleih in Frankenberg (Eder). Anfrage für Hau den Lukas und Musikanlage per Telefon oder E-Mail stellen.",
  alternates: {
    canonical: "/kontakt",
  },
};

const requestDetails = [
  "Datum oder Zeitraum",
  "Einsatzort",
  "Art der Veranstaltung",
  "Hau den Lukas, Musikanlage oder beides",
  "Telefonnummer für Rückfragen",
];

export default function KontaktPage() {
  return (
    <div className="wrap grid gap-8 py-10 lg:grid-cols-[1fr_0.9fr] lg:py-16">
      <div className="space-y-6">
        <header className="space-y-4">
          <p className="eyebrow">Kontakt</p>
          <h1 className="section-title">Kurz anfragen, dann persönlich abstimmen.</h1>
          <p className="text-lg leading-8 text-[color:var(--muted)]">
            Preise werden individuell geklärt, weil Ort, Anlass, Zeitraum und gewünschte Technik eine Rolle spielen.
            Schreib die wichtigsten Eckdaten dazu oder ruf direkt an.
          </p>
        </header>

        <section className="panel space-y-5">
          <div>
            <p className="eyebrow">Telefon</p>
            <a className="mt-2 inline-block text-2xl font-bold text-[color:var(--accent)]" href="tel:+491629222164">
              +49 162 9222164
            </a>
          </div>
          <div>
            <p className="eyebrow">E-Mail</p>
            <a className="mt-2 inline-block text-xl font-bold text-[color:var(--accent)]" href="mailto:sven_armand@web.de">
              sven_armand@web.de
            </a>
          </div>
          <div>
            <p className="eyebrow">Adresse</p>
            <p className="mt-2 text-block">Zum Hermannsberg 7</p>
            <p className="text-block">35066 Frankenberg (Eder) OT Viermünden</p>
          </div>
        </section>
      </div>

      <aside className="panel space-y-6">
        <div className="space-y-3">
          <p className="eyebrow">Für deine Anfrage hilfreich</p>
          <h2 className="text-2xl font-bold leading-tight text-[color:var(--ink)]">Diese Angaben sparen Rückfragen.</h2>
        </div>
        <ul className="space-y-3 text-sm leading-6 text-[color:var(--muted)]">
          {requestDetails.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue)]" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="grid gap-3">
          <a
            className="btn-primary w-full"
            href="mailto:sven_armand@web.de?subject=Anfrage%20HDL-Verleih&body=Hallo%20HDL-Verleih,%0A%0Aich%20m%C3%B6chte%20anfragen:%0A%0ADatum%20/%20Zeitraum:%0AEinsatzort:%0AArt%20der%20Veranstaltung:%0AGew%C3%BCnscht:%20Hau%20den%20Lukas%20/%20Musikanlage%20/%20beides%0ATelefonnummer%20f%C3%BCr%20R%C3%BCckfragen:%0A%0AViele%20Gr%C3%BC%C3%9Fe"
          >
            E-Mail mit Eckdaten öffnen
          </a>
          <a className="btn-ghost w-full" href="tel:+491629222164">Direkt anrufen</a>
        </div>
        <p className="text-xs leading-5 text-[color:var(--muted)]">
          Es gibt kein Kontaktformular auf dieser Website. Die Anfrage läuft direkt über dein Mailprogramm oder per Telefon.
        </p>
      </aside>
    </div>
  );
}
