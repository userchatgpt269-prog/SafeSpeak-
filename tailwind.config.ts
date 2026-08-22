import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15233D",
          muted: "#5A6578",
          soft: "#8A93A6",
        },
        canvas: {
          DEFAULT: "#F6F7FB",
          card: "#FFFFFF",
        },
        navy: {
          DEFAULT: "#1B2C52",
          deep: "#101B33",
        },
        teal: {
          DEFAULT: "#0E8A84",
          soft: "#E7F6F5",
          bright: "#12A39B",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 35, 61, 0.04), 0 12px 32px rgba(21, 35, 61, 0.06)",
        lift: "0 8px 28px rgba(21, 35, 61, 0.10)",
        mock: "0 24px 60px rgba(16, 27, 51, 0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "msg-in": {
          from: { opacity: "0", transform: "translateY(10px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "line-draw": {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "msg-in": "msg-in 0.55s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
