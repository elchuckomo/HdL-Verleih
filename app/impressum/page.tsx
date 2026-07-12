export const metadata = {
  title: "Impressum",
  description: "Impressum von HDL-Verleih.",
  alternates: {
    canonical: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="wrap space-y-8 py-10 lg:py-16">
      <header className="space-y-3">
        <p className="eyebrow">Impressum</p>
        <h1 className="section-title">Impressum</h1>
      </header>

      <section className="panel space-y-6 text-block">
        <div>
          <p className="eyebrow">Angaben gemäß § 5 DDG</p>
          <p className="mt-2">HDL-Verleih</p>
          <p>Zum Hermannsberg 7</p>
          <p>35066 Frankenberg (Eder) OT Viermünden</p>
          <p>Deutschland</p>
        </div>
        <div>
          <p className="eyebrow">Kontakt</p>
          <p className="mt-2">Telefon: +49 162 9222164</p>
          <p>E-Mail: sven_armand@web.de</p>
        </div>
        <div>
          <p className="eyebrow">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</p>
          <p className="mt-2">Sven Armand</p>
          <p>Adresse wie oben</p>
        </div>
        <div>
          <p className="eyebrow">Hinweis zur Verbraucherstreitbeilegung</p>
          <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </section>
    </div>
  );
}
