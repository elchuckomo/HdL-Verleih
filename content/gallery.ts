export type GalleryItem = {
  file: string;
  alt?: string;
  caption?: string;
  aiGenerated?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    file: "Bild der Boxen.png",
    alt: "KI-generiertes Symbolbild einer Musikanlage mit zwei Lautsprechern und Subwoofer",
    caption: "Musikanlage mit zwei Lautsprechern und Subwoofer",
    aiGenerated: true,
  },
  { file: "Hammer.png", alt: "Holzhammer für den Hau den Lukas" },
  { file: "Hau den Lukas bei Nacht.jpeg", alt: "Hau den Lukas bei Nacht" },
  { file: "Hau den Lukas erster Einsatz.jpeg", alt: "Hau den Lukas aufgebaut im Außenbereich" },
];
