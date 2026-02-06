import Image from "next/image";
import { galleryItems } from "../../content/gallery";

export const metadata = {
  title: "Galerie | HdL-Verleih",
  description: "Impressionen vom Hau den Lukas und der Musikanlage im Einsatz.",
};

export default function GaleriePage() {
  return (
    <div className="wrap space-y-10 py-16">
      <header className="space-y-4 reveal">
        <p className="section-sub">Galerie</p>
        <h1 className="section-title">Starke Momente, starke Stimmung.</h1>
        <p className="text-[color:var(--muted)]">
          Hier zeigen wir echte Eindrücke vom Hau den Lukas und der Musikanlage im Einsatz.
        </p>
      </header>

      {galleryItems.length === 0 ? (
        <div className="panel reveal-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--sand)]">Noch keine Bilder</p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">
            Lege Bilder unter <span className="font-semibold text-white">public/gallery</span> ab und
            trage sie in <span className="font-semibold text-white">content/gallery.ts</span> ein.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {galleryItems.map((item) => (
            <figure key={item.file} className="panel overflow-hidden reveal-delay-1">
              <Image
                src={`/gallery/${item.file}`}
                alt={item.alt ?? "Galeriebild von HdL-Verleih"}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full rounded-2xl border border-white/10 object-contain"
              />
              {item.alt ? (
                <figcaption className="mt-4 text-sm text-[color:var(--muted)]">{item.alt}</figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
