import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wayool: {
          base: "var(--bg-base)",
          surface: "var(--surface)",
          muted: "var(--text-muted)",
          accent: "var(--accent)",
          "accent-secondary": "var(--accent-secondary)",
          highlight: "var(--highlight)",
          "highlight-muted": "var(--highlight-muted)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px var(--accent-glow)",
        "glow-lg": "0 0 56px -4px var(--accent-glow)",
        card: "0 28px 80px -32px rgba(0, 0, 0, 0.85)",
      },
      backgroundImage: {
        "gradient-radial-accent":
          "radial-gradient(ellipse 80% 60% at 50% 110%, var(--accent-glow-soft), transparent 55%)",
      },
    },
  },
  plugins: [],
};
export default config;
