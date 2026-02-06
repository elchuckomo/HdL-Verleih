import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 reveal">
            <span className="badge">Hau den Lukas · Sound · Eventpower</span>
            <h1 className="text-4xl font-semibold uppercase leading-tight tracking-[0.08em] sm:text-5xl">
              HdL-Verleih bringt den Jahrmarktspuls auf dein Fest.
            </h1>
            <p className="text-lg text-[color:var(--muted)]">
              Wir vermieten den legendären Hau den Lukas und eine professionelle Musikanlage für Festivals,
              Vereinsfeste, Partys und lokale Feierlichkeiten. Rustikal, lautstark und garantiert ein Blickfang.
            </p>
            <div className="flex flex-col gap-3 lg:flex-row">
              <a className="btn-primary w-full lg:w-auto" href="/kontakt">Jetzt anfragen</a>
              <a className="btn-ghost w-full lg:w-auto" href="tel:+491629222164">Anrufen</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Publikumsmagnet",
                "Wettkampfgefühl",
                "Kraftprobe",
              ].map((item) => (
                <div
                  key={item}
                  className="panel flex items-center justify-center text-center text-sm uppercase tracking-[0.2em] reveal-delay-1"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="panel relative flex flex-col items-center justify-center gap-6 reveal-delay-2">
            <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[color:var(--iron)]/60 px-6 py-5 text-center">
              {/* Place your logo at /public/logo.png */}
              <Image
                src="/logo.png"
                alt="HdL-Verleih Logo"
                width={220}
                height={220}
                className="h-auto w-full max-w-[220px] object-contain sm:max-w-[240px]"
                priority
              />
            </div>
            <div className="text-center">
              <p className="section-sub">Auf einen Blick</p>
              <p className="text-2xl font-semibold uppercase tracking-[0.16em] sm:text-3xl">Event-Checkliste</p>
            </div>
            <div className="grid w-full gap-3">
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[color:var(--iron)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Aufbau</span>
                <span className="text-base font-semibold">Schnell & unkompliziert</span>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[color:var(--iron)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Einsatz</span>
                <span className="text-base font-semibold">Innen & außen</span>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-[color:var(--iron)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Betreuung</span>
                <span className="text-base font-semibold">Persönliche Abstimmung</span>
              </div>
            </div>
            <div className="w-full rounded-2xl border border-white/10 bg-[color:var(--iron)] px-5 py-4 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Preis</p>
              <p className="text-base font-semibold">Auf Anfrage – wir beraten persönlich</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-4 reveal">
          <p className="section-sub">Was wir vermieten</p>
          <h2 className="section-title">Klassiker für starke Auftritte.</h2>
          <p className="text-[color:var(--muted)]">
            HdL-Verleih liefert das Herzstück jeder fairground-inspirierten Feier: den Hau den Lukas.
            Kombiniert mit einer kraftvollen Musikanlage entsteht eine Bühne für Wettbewerb, Jubel und klare Ansagen.
          </p>
        </div>
        <div className="space-y-4">
          <div className="panel reveal-delay-1">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Hau den Lukas</p>
            <p className="mt-3 text-lg font-semibold">Der Publikumsmagnet mit Wettkampf-Faktor</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Ideal für Festivals, Jahrmärkte, Geburtstage oder Firmenevents. Schnell aufgebaut,
              sofort verständlich und sorgt für Stimmung sowie starke Erinnerungen.
            </p>
          </div>
          <div className="panel reveal-delay-2">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Musikanlage</p>
            <p className="mt-3 text-lg font-semibold">Satter Klang für Musik und Moderation</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Professionelle Soundtechnik für Partys, Durchsagen und stimmungsvolle Musik –
              verlässlich, klar und mit ordentlich Druck.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[color:var(--bg-soft)]">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 reveal">
            <p className="section-sub">Bereit für dein Event?</p>
            <h2 className="section-title">Jetzt anfragen und Stimmung sichern.</h2>
            <p className="text-[color:var(--muted)]">
              Preise gibt es ausschließlich auf Anfrage. Wir beraten persönlich und sorgen für ein Setup,
              das perfekt zu deinem Fest passt.
            </p>
          </div>
          <div className="panel space-y-4 reveal-delay-1">
            <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Direkter Draht</p>
            <p className="text-lg font-semibold">Ruf an oder schreib uns direkt.</p>
            <div className="flex flex-col gap-3 lg:flex-row">
              <a className="btn-primary w-full lg:w-auto" href="/kontakt">Jetzt anfragen</a>
              <a className="btn-ghost w-full lg:w-auto" href="tel:+491629222164">+49 162 9222164</a>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Preis auf Anfrage</p>
          </div>
        </div>
      </section>
    </div>
  );
}
