import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

export async function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier) && context.parentURL) {
    const base = new URL(specifier, context.parentURL).href
    for (const ext of ['.js', '.jsx', '.json', '/index.js']) {
      if (existsSync(fileURLToPath(base + ext))) return next(base + ext, context)
    }
  }
  return next(specifier, context)
}

export async function load(url, context, next) {
  if (url.endsWith('.json')) {
    const source = `export default ${readFileSync(fileURLToPath(url), 'utf8')}`
    return { format: 'module', shortCircuit: true, source }
  }
  return next(url, context)
}
