export const metadata = {
  title: "Datenschutz | HdL-Verleih",
  description: "Datenschutzhinweise von HdL-Verleih.",
};

export default function DatenschutzPage() {
  return (
    <div className="wrap space-y-8 py-16">
      <header className="space-y-3">
        <p className="section-sub">Datenschutz</p>
        <h1 className="section-title">Datenschutzhinweise</h1>
      </header>

      <section className="panel space-y-6 text-sm text-[color:var(--muted)]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">1. Verantwortlicher</p>
          <p>HdL-Verleih</p>
          <p>Zum Hermannsberg 7</p>
          <p>35066 Frankenberg (Eder) OT Viermünden</p>
          <p>Deutschland</p>
          <p>E-Mail: sven_armand@web.de</p>
          <p>Telefon: +49 162 9222164</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">2. Hosting und Zugriffsdaten</p>
          <p>Diese Website wird bei einem externen Hosting-Anbieter betrieben.</p>
          <p>Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch folgende Daten verarbeitet:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Browsertyp und Betriebssystem</li>
          </ul>
          <p className="mt-2">
            Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der Website.
          </p>
          <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
          <p>Speicherdauer: Server-Logdaten werden in der Regel nach spätestens 7–14 Tagen gelöscht.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">3. Kontaktaufnahme</p>
          <p>
            Wenn du per E-Mail oder Telefon Kontakt mit uns aufnimmst, werden die von dir übermittelten personenbezogenen
            Daten ausschließlich zur Bearbeitung deiner Anfrage verarbeitet.
          </p>
          <p className="mt-2">Rechtsgrundlage:</p>
          <p>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder</p>
          <p>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
          <p className="mt-2">Eine Weitergabe der Daten an Dritte erfolgt nicht ohne deine ausdrückliche Einwilligung.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">4. Cookies und Tracking</p>
          <p>Diese Website verwendet keine Cookies, keine Tracking-Tools und keine Analyse-Dienste.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">5. Rechte der betroffenen Personen</p>
          <p>Du hast das Recht auf:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Auskunft über deine gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Löschung deiner Daten (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p className="mt-2">
            Zudem hast du das Recht, dich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--sand)]">6. Stand</p>
          <p>Vorlage – Stand: Februar 2026</p>
        </div>
      </section>
    </div>
  );
}
