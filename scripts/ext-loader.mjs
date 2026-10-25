// Lets Node import the app's ESM data files directly (extensionless relative imports + JSON).
// Usage: node --import ./scripts/ext-loader.mjs <script>
import { register } from 'node:module'
register('./ext-loader-hooks.mjs', import.meta.url)
