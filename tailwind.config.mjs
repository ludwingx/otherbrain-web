/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["lg"],
    },
    // Height
    {
      pattern: /h-(0|2|3|4|6|8|12|16|24|32)/,
      variants: ["lg"],
    },
    // Text sizes for all screen sizes
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/,
      variants: ["lg"],
    },
    // Font weights
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    // Alignments
    {
      pattern: /text-(left|center|right)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          50: "#E5F8FA", // Claro
          100: "#C1F0F5",
          200: "#85E1EA",
          300: "#5FD8E3",
          400: "#38CFDC",
          500: "#29C5D7", // Principal
          600: "#22AAB6",
          700: "#1B8F96",
          800: "#145969", // Secundario oscuro
          900: "#0A3E51", // Muy oscuro para el fondo
        },
        neutral: {
          50: "#EFF4F5", // Claro
          100: "#DEE8EB",
          200: "#A9C0C2", // Secundario neutral
          300: "#7A9AA0",
          400: "#5B7F83",
          500: "#3B6367",
          600: "#2A4A4E",
          700: "#1E3538",
          800: "#06141B", // Fondo oscuro principal
          900: "#020A0D", // Muy oscuro
        },
        accent: {
          500: "#087794", // Acento
          600: "#075F75",
          700: "#054B5B",
        },
        // Añadimos colores de texto de alto contraste
        text: {
          light: "#ffffff", // Blanco para textos sobre fondo oscuro
          dark: "#1c1c1c", // Gris oscuro para textos sobre fondo claro
        },
        background: {
          light: "#ffffff", // Blanco para fondo claro
          dark: "#111111", // Fondo oscuro
        },
      },
      cursor: {
        fancy: "url(https://www.svgrepo.com/show/269/color-picker.svg)",
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        headings: ["Outfit Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-1rem)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInShadowLight: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(15, 23, 42, .025), 0 8px 10px -6px rgba(15, 23, 42, .025);" },
        },
        fadeInShadowDark: {
          "100%": { boxShadow: "0 20px 25px -5px rgba(2, 6, 23, .25), 0 8px 10px -6px rgba(2, 6, 23, .25);" },
        },
      },
      animation: {
        dropdown: "dropdown 300ms ease-in-out forwards",
        fadeInShadowLight: "fadeInShadowLight 500ms ease-in-out forwards",
        fadeInShadowDark: "fadeInShadowDark 500ms ease-in-out forwards",
      },
    },
  },
  variants: {
    animation: ["responsive"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss/plugin")(function ({ addVariant }) {
      addVariant("dark-me", ".dark_&");
    }),
  ],
};
