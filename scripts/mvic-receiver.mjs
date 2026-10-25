// Local receiver for the MVIC in-browser scrape. The MVIC page's CSP blocks fetch() to localhost,
// so the browser navigates to http://127.0.0.1:4712/recv#<name>:<base64 gzip JSON> and this page
// POSTs the payload back to this server, which writes data-raw/mvic-2026-general/<name>.
import { createServer } from 'http'
import { mkdirSync, writeFileSync, appendFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'data-raw/mvic-2026-general')
mkdirSync(OUT, { recursive: true })
const PORT = 4712

const RECV_PAGE = `<!doctype html><title>recv</title><body><pre id=s>receiving…</pre><script>
(async()=>{
  const h=location.hash.slice(1);
  if(!h){document.getElementById('s').textContent='no hash';return}
  const idx=h.indexOf(':');const name=decodeURIComponent(h.slice(0,idx));const payload=h.slice(idx+1);
  const r=await fetch('/chunk',{method:'POST',headers:{'Content-Type':'text/plain'},body:JSON.stringify({name,payload})});
  document.getElementById('s').textContent='saved '+name+' '+(await r.text());
})();
</script></body>`

createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') { res.writeHead(200); return res.end('ok') }
  if (req.method === 'GET' && req.url.startsWith('/recv')) { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(RECV_PAGE) }
  if (req.method !== 'POST') { res.writeHead(405); return res.end() }
  let body = ''
  req.on('data', c => { body += c })
  req.on('end', () => {
    try {
      const { name, payload } = JSON.parse(body)
      const safe = String(name).replace(/[^A-Za-z0-9_.-]+/g, '_').slice(0, 140)
      writeFileSync(path.join(OUT, safe), payload)
      appendFileSync(path.join(OUT, 'progress.log'), `${new Date().toISOString()} ${safe} ${payload.length}\n`)
      res.writeHead(200); res.end(`ok ${payload.length}`)
    } catch (e) { res.writeHead(400); res.end(String(e)) }
  })
}).listen(PORT, '127.0.0.1', () => console.log(`mvic receiver on http://127.0.0.1:${PORT}`))
