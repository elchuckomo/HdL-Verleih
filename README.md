# HdL-Verleih Website

## Galerie: Bilder hinzufügen
1) Lege deine Bilder unter `public/gallery/` ab.
2) Öffne `content/gallery.ts`.
3) Trage jedes Bild in `galleryItems` ein, z. B.:
```ts
export const galleryItems = [
  { file: "hau-den-lukas-1.jpg", alt: "Hau den Lukas beim Stadtfest" },
  { file: "soundanlage-1.webp", alt: "Musikanlage Outdoor" },
];
```
4) Starte den Dev-Server neu, falls er läuft.

### Unterstützte Dateitypen
- jpg
- png
- webp

### Empfohlene Größen
- Mindestens 1600px Breite für klare Darstellung auf großen Bildschirmen.
