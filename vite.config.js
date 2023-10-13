import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taliwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), taliwindcss()],
  server: {
    host: '0.0.0.0',
  },
})
