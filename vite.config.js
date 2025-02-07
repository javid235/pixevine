import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from all network interfaces
    port: 3000, // Port number for the dev server
    open: true, // Automatically opens the app in the default browser
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './index.html',
      },
    },
  },
})
