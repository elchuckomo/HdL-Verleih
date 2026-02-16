export const metadata = {
  title: "Kontakt",
  description: "Kontakt zu HdL-Verleih. Preise auf Anfrage, persönliche Beratung.",
};

export default function KontaktPage() {
  return (
    <div className="wrap grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 reveal">
        <header className="space-y-3">
          <p className="section-sub">Kontakt</p>
          <h1 className="section-title">Direkt, schnell, persönlich.</h1>
          <p className="text-[color:var(--muted)]">
            Preise gibt es bei HdL-Verleih ausschließlich auf Anfrage. Wir freuen uns auf deine Veranstaltung
            und beraten gerne zu Aufbau, Ablauf und Technik.
          </p>
        </header>

        <div className="panel space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Adresse</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">Zum Hermannsberg 7</p>
            <p className="text-sm text-[color:var(--muted)]">35066 Frankenberg (Eder) OT Viermünden</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Telefon</p>
            <a className="mt-2 inline-block text-lg font-semibold text-[color:var(--gold)]" href="tel:+491629222164">+49 162 9222164</a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">E-Mail</p>
            <a className="mt-2 inline-block text-lg font-semibold text-[color:var(--gold)]" href="mailto:sven_armand@web.de">sven_armand@web.de</a>
          </div>
        </div>
      </div>

      <div className="panel space-y-6 reveal-delay-1">
        <div>
          <p className="section-sub">Anfrage</p>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.08em]">Sag uns, was du planst.</h2>
        </div>
        <p className="text-sm text-[color:var(--muted)]">
          Nutze die Kontaktdaten oder öffne eine E-Mail mit deinen Eckdaten. Keine Buchung online,
          sondern persönlicher Austausch.
        </p>
        <a
          className="btn-primary w-full"
          href="mailto:sven_armand@web.de?subject=Anfrage%20HdL-Verleih&body=Datum:%0AOrt:%0AArt%20der%20Veranstaltung:%0A"
        >
          E-Mail mit Anfrage öffnen
        </a>
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Preis auf Anfrage</p>
      </div>
    </div>
  );
}
