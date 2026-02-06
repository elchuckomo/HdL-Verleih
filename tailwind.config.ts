import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "stamp": "0 12px 40px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "hero-grain": "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 55%), repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 6px)",
      },
    },
  },
  plugins: [],
};

export default config;
