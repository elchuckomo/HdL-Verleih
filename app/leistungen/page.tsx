import Image from "next/image";
import Link from "next/link";
import { AiGeneratedBadge } from "../../components/AiGeneratedBadge";

export const metadata = {
  title: "Angebot",
  description:
    "Hau den Lukas und Musikanlage bei HDL-Verleih mieten. Für Vereinsfeste, Feiern, Partys und lokale Veranstaltungen in der Region Frankenberg (Eder).",
  alternates: {
    canonical: "/leistungen",
  },
};

const services = [
  {
    title: "Hau den Lukas",
    lead: "Eine Attraktion, die Gäste sofort verstehen.",
    body: "Aufstellen, erklären, mitmachen: Der Hau den Lukas eignet sich für Veranstaltungen, bei denen Menschen ins Gespräch kommen, anfeuern und eine einfache Kraftprobe ausprobieren sollen.",
    image: "/gallery/Hau den Lukas erster Einsatz.jpeg",
    alt: "Aufgebauter Hau den Lukas im Außenbereich",
    list: [
      "für Vereinsfeste, Kirmes, Feiern und Partys",
      "gut sichtbar auf dem Veranstaltungsgelände",
      "persönliche Abstimmung zu Einsatzort und Ablauf",
    ],
  },
  {
    title: "Musikanlage",
    lead: "Soundtechnik für Musik, Ansagen und Stimmung.",
    body: "Die Musikanlage wird passend zum Anlass besprochen. Entscheidend sind Ort, Zeitraum, gewünschte Nutzung und ob Musik, Moderation oder Durchsagen im Vordergrund stehen.",
    image: "/gallery/Bild der Boxen.png",
    alt: "KI-generiertes Symbolbild einer Musikanlage mit zwei Lautsprechern und Subwoofer",
    aiGenerated: true,
    list: [
      "für Musik, Moderation und Durchsagen",
      "als Ergänzung zum Hau den Lukas möglich",
      "Preis und Umfang nach persönlicher Abstimmung",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <div className="wrap space-y-10 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="eyebrow">Angebot</p>
        <h1 className="section-title">Hau den Lukas und Musikanlage für dein Fest.</h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          HDL-Verleih bietet keine anonyme Online-Buchung. Du nennst die Eckdaten deiner Veranstaltung und
          bekommst eine persönliche Rückmeldung zu Verfügbarkeit, Aufbau, Technik und Preis.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="ai-media">
              <Image
                src={service.image}
                alt={service.alt}
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`h-72 w-full ${service.title === "Hau den Lukas" ? "bg-[color:var(--canvas)] object-contain" : "object-cover"}`}
              />
              {service.aiGenerated ? <AiGeneratedBadge /> : null}
            </div>
            <div className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="eyebrow">{service.title}</p>
                <h2 className="text-2xl font-bold leading-tight text-[color:var(--ink)]">{service.lead}</h2>
                <p className="text-block">{service.body}</p>
              </div>
              <ul className="space-y-2 text-sm leading-6 text-[color:var(--muted)]">
                {service.list.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[color:var(--blue)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[color:var(--line)] pt-5">
                <Link className="btn-primary w-full sm:w-auto" href="/kontakt">Dazu anfragen</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
