import sharp from 'sharp';
import { readFileSync, copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const svgContent = readFileSync(resolve(projectRoot, 'public/favicon.svg'), 'utf-8');

// The original SVG is 48x46. We want to render it centered on a 1024x1024 dark navy background.
// Scale the icon to ~70% of the canvas for proper padding (iOS icons need some breathing room).
const iconSize = 700;
const canvasSize = 1024;
const offsetX = Math.round((canvasSize - iconSize * (48 / 46)) / 2);
const offsetY = Math.round((canvasSize - iconSize) / 2);

// Update SVG dimensions to render at high resolution
const scaledSvg = svgContent
  .replace(/width="48"/, `width="${iconSize * (48/46)}"`)
  .replace(/height="46"/, `height="${iconSize}"`);

const svgBuffer = Buffer.from(scaledSvg);

const outputiOS = resolve(projectRoot, 'ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png');
const outputPublic = resolve(projectRoot, 'public/app-icon-1024.png');

async function generate() {
  // Render the SVG at high resolution
  const iconLayer = await sharp(svgBuffer, { density: 300 })
    .resize(Math.round(iconSize * (48/46)), iconSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create the 1024x1024 canvas with dark navy background and composite the icon
  await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 11, g: 18, b: 33 } // #0b1221
    }
  })
    .composite([{ input: iconLayer, left: offsetX, top: offsetY }])
    .png()
    .toFile(outputiOS);

  // Copy to public folder
  copyFileSync(outputiOS, outputPublic);

  console.log(`Generated 1024x1024 app icon:`);
  console.log(`  -> ${outputiOS}`);
  console.log(`  -> ${outputPublic}`);
}

generate().catch(err => { console.error(err); process.exit(1); });
