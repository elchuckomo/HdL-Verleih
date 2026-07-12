import Image from "next/image";
import { galleryItems } from "../../content/gallery";

export const metadata = {
  title: "Bilder",
  description: "Echte Bilder vom Hau den Lukas, der Musikanlage und Zubehör von HDL-Verleih.",
  alternates: {
    canonical: "/galerie",
  },
};

export default function GaleriePage() {
  return (
    <div className="wrap space-y-10 py-10 lg:py-16">
      <header className="max-w-3xl space-y-4">
        <p className="eyebrow">Bilder</p>
        <h1 className="section-title">So sieht der Hau den Lukas im Einsatz aus.</h1>
        <p className="text-lg leading-8 text-[color:var(--muted)]">
          Keine Stockbilder: Die Galerie zeigt vorhandene Aufnahmen aus dem HDL-Verleih.
        </p>
      </header>

      {galleryItems.length === 0 ? (
        <div className="panel">
          <p className="eyebrow">Noch keine Bilder</p>
          <p className="mt-3 text-block">
            Lege Bilder unter <span className="font-semibold text-[color:var(--ink)]">public/gallery</span> ab und
            trage sie in <span className="font-semibold text-[color:var(--ink)]">content/gallery.ts</span> ein.
          </p>
        </div>
      ) : (
        <div className="columns-1 gap-5 md:columns-2">
          {galleryItems.map((item) => (
            <figure key={item.file} className="media-frame mb-5 break-inside-avoid">
              <Image
                src={`/gallery/${item.file}`}
                alt={item.alt ?? "Galeriebild von HDL-Verleih"}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
              {item.alt ? <figcaption>{item.alt}</figcaption> : null}
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
