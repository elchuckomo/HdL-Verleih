export const metadata = {
  title: "Kontakt | HdL-Verleih",
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
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Google Maps</p>
            <a
              className="mt-2 inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[color:var(--sand)] underline-offset-4 hover:underline"
              href="https://maps.google.com/?q=Zum%20Hermannsberg%207%2C%2035066%20Frankenberg%20(Eder)"
              target="_blank"
              rel="noreferrer"
            >
              Karte öffnen
            </a>
          </div>
        </div>
      </div>

      <div className="panel space-y-6 reveal-delay-1">
        <div>
          <p className="section-sub">Anfrage</p>
          <h2 className="text-2xl font-semibold uppercase tracking-[0.08em]">Sag uns, was du planst.</h2>
        </div>
        <p className="text-sm text-[color:var(--muted)]">
          Nutze die Kontaktdaten oder sende uns direkt eine Nachricht. Keine Buchung online,
          sondern persönlicher Austausch.
        </p>
        <form className="space-y-4" action="mailto:sven_armand@web.de" method="post" encType="text/plain">
          <input
            className="w-full rounded-2xl border border-white/10 bg-[color:var(--iron)]/80 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-[color:var(--iron)]/80 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            type="email"
            name="email"
            placeholder="E-Mail"
          />
          <textarea
            className="h-28 w-full rounded-2xl border border-white/10 bg-[color:var(--iron)]/80 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]"
            name="message"
            placeholder="Wunschtermin, Eventtyp, Ort ..."
          />
          <button className="btn-primary w-full" type="submit">Nachricht vorbereiten</button>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Preis auf Anfrage</p>
        </form>
      </div>
    </div>
  );
}
