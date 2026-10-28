import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Without this, a fetch to /api/... (or /user/...) with no match falls
    // through to Vite's SPA fallback, which returns index.html with a 200 -
    // the frontend then fails to parse it as JSON and silently shows an
    // error state. Proxies local requests to `serverless offline` instead.
    proxy: {
      '/api': 'http://localhost:3000',
      '/user': 'http://localhost:3000',
    },
  },
})
