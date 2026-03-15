import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Wir setzen base auf '/', damit alle Pfade absolut vom Hauptverzeichnis geladen werden.
  // Das verhindert die "weiße Seite" auf Netlify.
  base: '/',
})