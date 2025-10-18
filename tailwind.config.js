// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores base para light mode
        background: '#FFFFFF', // Blanco
        foreground: '#1F2937', // Gris oscuro para texto principal (mejor contraste que negro puro)
        muted: '#6B7280',      // Gris medio para texto secundario

        // Colores de la marca (ajustados para buen contraste en fondo blanco)
        primary: {
          DEFAULT: '#2a3a6a', // Azul oscuro del logo
          light: '#4e5f9a',   // Variante más clara para hover/acentos
        },
        secondary: {
          DEFAULT: '#f58220', // Naranja del logo
          light: '#f9a150',   // Variante más clara
        },
        accent: {
          DEFAULT: '#93c43e', // Verde lima del logo
          light: '#add567',   // Variante más clara
        },
        // Colores adicionales si son necesarios
        highlight: '#6bc8ea', // Celeste del logo
        danger: '#e12027',    // Rojo del logo
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};