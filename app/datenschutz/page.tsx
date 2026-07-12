export const metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise von HDL-Verleih.",
  alternates: {
    canonical: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="wrap space-y-8 py-10 lg:py-16">
      <header className="space-y-3">
        <p className="eyebrow">Datenschutz</p>
        <h1 className="section-title">Datenschutzhinweise</h1>
      </header>

      <section className="panel space-y-6 text-block">
        <div>
          <p className="eyebrow">1. Verantwortlicher</p>
          <p className="mt-2">HDL-Verleih</p>
          <p>Zum Hermannsberg 7</p>
          <p>35066 Frankenberg (Eder) OT Viermünden</p>
          <p>Deutschland</p>
          <p>E-Mail: sven_armand@web.de</p>
          <p>Telefon: +49 162 9222164</p>
        </div>
        <div>
          <p className="eyebrow">2. Hosting und Zugriffsdaten</p>
          <p className="mt-2">Diese Website wird bei einem externen Hosting-Anbieter betrieben.</p>
          <p>Hosting-Anbieter: Vercel Inc.</p>
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
          <p>Speicherdauer: Server-Logdaten werden in der Regel nach spätestens 7 bis 14 Tagen gelöscht.</p>
        </div>
        <div>
          <p className="eyebrow">3. Kontaktaufnahme</p>
          <p className="mt-2">
            Wenn du per E-Mail oder Telefon Kontakt mit uns aufnimmst, werden die von dir übermittelten personenbezogenen
            Daten ausschließlich zur Bearbeitung deiner Anfrage verarbeitet.
          </p>
          <p className="mt-2">Rechtsgrundlage:</p>
          <p>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder</p>
          <p>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
          <p className="mt-2">
            Kontaktangaben werden nicht für Web Analytics verwendet. Eine Weitergabe erfolgt nur, wenn sie für die
            technische Bereitstellung der Website, die Webanalyse oder aufgrund gesetzlicher Pflichten erforderlich ist.
          </p>
        </div>
        <div>
          <p className="eyebrow">4. Cookies und Webanalyse</p>
          <p className="mt-2">Diese Website verwendet keine Cookies.</p>
          <p className="mt-2">
            Zur anonymisierten Auswertung der Website-Nutzung verwenden wir Vercel Web Analytics. Der Dienst wird von
            Vercel Inc. bereitgestellt und erfasst keine benutzerdefinierten Ereignisse oder Kontaktangaben.
          </p>
          <p className="mt-2">Dabei können insbesondere folgende Daten in anonymisierter Form verarbeitet werden:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>aufgerufene Seite und Zeitpunkt des Seitenaufrufs</li>
            <li>Referrer, sofern technisch übermittelt</li>
            <li>Browser, Betriebssystem und Gerätetyp</li>
            <li>grobe geografische Region</li>
          </ul>
          <p className="mt-2">
            Vercel verwendet dafür nach eigenen Angaben keine Cookies und keine dauerhafte, websiteübergreifende
            Wiedererkennung. Ein aus der Anfrage abgeleiteter Besucher-Hash wird nach 24 Stunden verworfen.
          </p>
          <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der anonymisierten Auswertung der Website-Nutzung).</p>
        </div>
        <div>
          <p className="eyebrow">5. Rechte der betroffenen Personen</p>
          <p className="mt-2">Du hast das Recht auf:</p>
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
          <p className="eyebrow">6. Stand</p>
          <p className="mt-2">Stand: Juli 2026</p>
        </div>
      </section>
    </div>
  );
}
