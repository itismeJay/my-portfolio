const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimize() {
  const src = path.resolve(__dirname, '../src/assets/profile-photo.png');
  if (!fs.existsSync(src)) {
    console.error('Source image not found:', src);
    process.exit(1);
  }

  const outDir = path.resolve(__dirname, '../src/assets');
  const sizes = [200, 400, 800];

  for (const w of sizes) {
    const outWebp = path.join(outDir, `profile-photo-${w}.webp`);
    await sharp(src).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
    console.log('Wrote', outWebp);
  }

  // Also write an optimized PNG fallback at 400px
  const outPng = path.join(outDir, `profile-photo-400.png`);
  await sharp(src).resize({ width: 400 }).png({ quality: 80, compressionLevel: 9 }).toFile(outPng);
  console.log('Wrote', outPng);
}

optimize().catch((err) => { console.error(err); process.exit(1); });
