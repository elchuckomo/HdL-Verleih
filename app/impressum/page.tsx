export const metadata = {
  title: "Impressum | HdL-Verleih",
  description: "Impressum von HdL-Verleih.",
};

export default function ImpressumPage() {
  return (
    <div className="wrap space-y-8 py-16">
      <header className="space-y-3">
        <p className="section-sub">Impressum</p>
        <h1 className="section-title">Impressum</h1>
      </header>

      <section className="panel space-y-4 text-sm text-[color:var(--muted)]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Angaben gemäß § 5 TMG</p>
          <p>HdL-Verleih</p>
          <p>Zum Hermannsberg 7</p>
          <p>35066 Frankenberg (Eder) OT Viermünden</p>
          <p>Deutschland</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Kontakt</p>
          <p>Telefon: +49 162 9222164</p>
          <p>E-Mail: sven_armand@web.de</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</p>
          <p>Sven Armand</p>
          <p>Adresse wie oben</p>
        </div>
      </section>
    </div>
  );
}
