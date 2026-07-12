import Image from "next/image";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const occasions = [
  "Vereinsfeste",
  "Dorffeste und Kirmes",
  "Geburtstage",
  "Firmen- und Teamfeiern",
  "Partys",
  "Lokale Veranstaltungen",
];

const requestSteps = [
  {
    title: "Eckdaten senden",
    body: "Datum, Ort, Anlass und gewünschte Technik kurz per Telefon oder E-Mail nennen.",
  },
  {
    title: "Verfügbarkeit klären",
    body: "HDL stimmt mit dir ab, was möglich ist und welche Details für Aufbau, Ablauf und Preis wichtig sind.",
  },
  {
    title: "Absprechen und festhalten",
    body: "Nach der persönlichen Abstimmung hast du eine klare Grundlage für deine Veranstaltung.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-[color:var(--line)] bg-[color:var(--paper)]">
        <div className="wrap grid gap-8 py-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="eyebrow">Eventverleih aus Frankenberg (Eder)</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
                Hau den Lukas und Musikanlage mieten.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted)]">
                HDL-Verleih vermietet den Hau den Lukas und Soundtechnik für Feste, Feiern und Veranstaltungen
                in Frankenberg (Eder) und Umgebung. Kurz anfragen, Eckdaten nennen, persönlich abstimmen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="btn-primary" href="/kontakt">Verfügbarkeit anfragen</Link>
              <Link className="btn-ghost" href="/leistungen">Angebot ansehen</Link>
            </div>

            <dl className="grid gap-3 sm:grid-cols-3">
              <div className="fact">
                <dt>Angebot</dt>
                <dd>Hau den Lukas</dd>
              </div>
              <div className="fact">
                <dt>Zusätzlich</dt>
                <dd>Musikanlage</dd>
              </div>
              <div className="fact">
                <dt>Kontakt</dt>
                <dd>Telefon & E-Mail</dd>
              </div>
            </dl>
          </div>

          <figure className="media-frame">
            <Image
              src="/gallery/Hau den Lukas bei Nacht.jpeg"
              alt="Aufgebauter Hau den Lukas mit Beleuchtung bei einer Veranstaltung"
              width={900}
              height={1400}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-[480px] w-full bg-[color:var(--ink)] object-contain sm:h-[560px] lg:h-[640px]"
              priority
            />
            <figcaption>Hau den Lukas im Einsatz, gut sichtbar auch bei Abendveranstaltungen.</figcaption>
          </figure>
        </div>
      </section>

      <section className="wrap grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div className="space-y-4">
          <p className="eyebrow">Was du mieten kannst</p>
          <h2 className="section-title">Zwei Dinge, die auf Veranstaltungen sofort verstanden werden.</h2>
          <p className="text-[color:var(--muted)]">
            Der Hau den Lukas bringt eine einfache Kraftprobe auf das Fest. Die Musikanlage unterstützt Musik,
            Moderation und Durchsagen. Beides wird persönlich abgestimmt, statt pauschal online gebucht.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="service-card">
            <Image
              src="/gallery/Hau den Lukas erster Einsatz.jpeg"
              alt="Hau den Lukas aufgebaut vor Fachwerkhaus und Kirche"
              width={900}
              height={1400}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="h-72 w-full bg-[color:var(--canvas)] object-contain"
            />
            <div className="space-y-3 p-5">
              <p className="eyebrow">Hau den Lukas</p>
              <h3>Der sichtbare Mittelpunkt für Wettbewerb und Stimmung.</h3>
              <p>
                Geeignet für Veranstaltungen, bei denen Gäste schnell mitmachen können: zuschauen, anfeuern,
                ausprobieren.
              </p>
            </div>
          </article>

          <article className="service-card">
            <Image
              src="/gallery/Bild der Boxen.png"
              alt="Musikanlage mit zwei Lautsprechern und Subwoofer"
              width={1448}
              height={1086}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="h-72 w-full object-cover"
            />
            <div className="space-y-3 p-5">
              <p className="eyebrow">Musikanlage</p>
              <h3>Sound für Musik, Ansagen und Ablauf.</h3>
              <p>
                Die passende Technik wird direkt besprochen: Anlass, Ort, Aufbau und gewünschte Nutzung bestimmen
                den sinnvollen Umfang.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-[color:var(--line)] bg-[color:var(--paper)]">
        <div className="wrap grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
          <div className="space-y-4">
            <p className="eyebrow">Typische Anlässe</p>
            <h2 className="section-title">Wenn Menschen zusammenkommen, passt eine einfache Attraktion oft am besten.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {occasions.map((occasion) => (
              <div className="occasion" key={occasion}>
                {occasion}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <div className="space-y-4">
          <p className="eyebrow">So läuft die Anfrage</p>
          <h2 className="section-title">Keine Online-Buchung. Eine direkte Abstimmung.</h2>
          <p className="text-[color:var(--muted)]">
            Preise werden nicht pauschal auf der Website genannt. Für eine sinnvolle Rückmeldung braucht HDL die
            wichtigsten Eckdaten deiner Veranstaltung.
          </p>
        </div>

        <ol className="grid gap-4">
          {requestSteps.map((step, index) => (
            <li className="step" key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[color:var(--ink)] text-white">
        <div className="wrap grid gap-8 py-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[color:var(--sand)]">Direkter Kontakt</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Plane dein Fest? Frag kurz an.</h2>
            <p className="max-w-2xl text-white/75">
              Nenne Datum, Einsatzort, Anlass und ob Hau den Lukas, Musikanlage oder beides gewünscht ist.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link className="btn-primary" href="/kontakt">Anfrage vorbereiten</Link>
            <a className="btn-light" href="tel:+491629222164">+49 162 9222164</a>
          </div>
        </div>
      </section>
    </div>
  );
}
