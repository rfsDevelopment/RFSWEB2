import type { Config } from "tailwindcss";

/**
 * RFS design tokens. See DESIGN.md before changing anything here.
 * Rule of thumb: one accent (signal red), square geometry, hairline borders.
 */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        /* --- RFS palette --- */
        void: "#08090A",
        carbon: "#101113",
        bone: {
          DEFAULT: "#F0EEEA",
          dim: "#E2DFD9",
        },
        signal: {
          DEFAULT: "#E11021",
          deep: "#8E0912",
          dim: "#2A0709",
        },
        ink: {
          DEFAULT: "#F5F5F4",
          dim: "#9A9A9E",
          faint: "#5E5E63",
        },

        /* --- shadcn semantic tokens, kept so vendored ui/ components stay coherent --- */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
      },
      letterSpacing: {
        label: "0.18em",
        display: "-0.03em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        /* `top` rather than translateY: the sweeping line is 1px tall, so a
           percentage transform would resolve against its own height. */
        scan: {
          "0%": { top: "-2%", opacity: "0" },
          "8%, 92%": { opacity: "0.85" },
          "100%": { top: "102%", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scan: "scan 7s linear infinite",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports -- tailwind config is CJS-loaded
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
