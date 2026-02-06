export const metadata = {
  title: "Leistungen | HdL-Verleih",
  description: "Hau den Lukas und professionelle Musikanlage für Feste, Festivals und Events. Preis auf Anfrage.",
};

const services = [
  {
    title: "Hau den Lukas",
    lead: "Der Klassiker mit Wettkampfcharakter.",
    body: "Ideal für Festivals, Jahrmärkte, Geburtstage und Firmenevents. Der Hau den Lukas zieht Blicke an, bringt Menschen zusammen und sorgt für sportlichen Ehrgeiz.",
    list: [
      "Publikumsmagnet mit Showeffekt",
      "Perfekt für Teams, Vereine, Firmen",
      "Schnell verständlich und sofort spielbar",
    ],
  },
  {
    title: "Musikanlage",
    lead: "Professioneller Sound für klare Ansagen.",
    body: "Die Soundanlage liefert satten Klang für Musik, Moderation und Durchsagen – ideal für Partys, Events oder lokale Feiern.",
    list: [
      "Kraftvoller, klarer Sound",
      "Ideal für Musik & Moderation",
      "Passend für Indoor und Outdoor",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <div className="wrap space-y-10 py-10 lg:space-y-12 lg:py-16">
      <header className="space-y-3 reveal">
        <p className="section-sub">Leistungen / Vermietung</p>
        <h1 className="section-title text-xl sm:text-2xl lg:text-4xl">Zwei Highlights für starke Events.</h1>
        <p className="text-[color:var(--muted)]">
          Egal ob Volksfest, Firmenfeier oder Geburtstag – HdL-Verleih sorgt für den richtigen Mix aus
          Wettbewerb, Show und klarem Sound.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="panel space-y-4 p-5 lg:p-6 reveal-delay-1">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">{service.title}</p>
              <h2 className="mt-3 text-xl font-semibold uppercase tracking-[0.06em] sm:text-2xl sm:tracking-[0.08em] lg:text-2xl">
                {service.lead}
              </h2>
              <p className="mt-3 text-sm text-[color:var(--muted)]">{service.body}</p>
            </div>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              {service.list.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 border-t border-white/10 pt-4 lg:flex-row lg:items-center lg:justify-between">
              <span className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Preis auf Anfrage</span>
              <a className="btn-primary w-full lg:w-auto" href="/kontakt">Anfrage stellen</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
