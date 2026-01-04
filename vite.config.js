/** @type {import('tailwindcss').Config} **/
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
})