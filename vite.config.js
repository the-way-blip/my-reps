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
        name: 'MyReps - Know Your Representatives',
        short_name: 'MyReps',
        description: 'Find and track your elected officials at every level of government',
        theme_color: '#0b1221',
        background_color: '#0b1221',
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
