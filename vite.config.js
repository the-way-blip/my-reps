import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Build My Ballot — Know Your Representatives',
        short_name: 'Build My Ballot',
        description: 'Walk into the voting booth prepared. Research every race on your ballot and build a personalized plan before election day.',
        theme_color: '#0B2E59',
        background_color: '#F7F3E8',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MiB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: { maxEntries: 4, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/api\.congress\.gov\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'congress-api-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/v3\.openstates\.org\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'openstates-api-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/www\.googleapis\.com\/civicinfo\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'google-civic-api-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\/api\/(congress|openstates|census)\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'proxy-api-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['react-simple-maps'],
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('d3-geo') || id.includes('topojson-client')) {
            return 'map-libs'
          }
          if (id.includes('node_modules/react-dom')) {
            return 'react-dom'
          }
          if (id.includes('node_modules/react-router')) {
            return 'react-router'
          }
          if (id.includes('@supabase')) {
            return 'supabase'
          }
          // Split large data files into their own chunks
          if (id.includes('data/stateLegislators')) {
            return 'stateLegislators'
          }
          if (id.includes('data/civicDocuments')) {
            return 'civicDocuments'
          }
          if (id.includes('data/foundingValues')) {
            return 'foundingValues'
          }
          if (id.includes('data/michiganLocal') && !id.includes('michiganLocalLoader')) {
            return 'michiganLocal'
          }
        },
      },
    },
  },
  server: {
    proxy: {
      '/api/openstates': {
        target: 'https://v3.openstates.org',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/openstates/, ''),
      },
      '/api/census': {
        target: 'https://geocoding.geo.census.gov',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/census/, ''),
      },
    },
  },
})
