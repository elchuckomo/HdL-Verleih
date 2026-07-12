import type { MetadataRoute } from "next";

const routes = ["", "/leistungen", "/galerie", "/kontakt", "/impressum", "/datenschutz"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://hdl-verleih.de${route}`,
    lastModified: new Date("2026-07-12"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/kontakt" || route === "/leistungen" ? 0.8 : 0.5,
  }));
}
