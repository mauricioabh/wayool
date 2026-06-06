import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "public", "icons");
const svg = readFileSync(join(iconsDir, "icon.svg"));

for (const size of [192, 512]) {
  const png = await sharp(svg).resize(size, size).png().toBuffer();
  writeFileSync(join(iconsDir, `icon-${size}.png`), png);
}

const maskableSvg = readFileSync(join(iconsDir, "maskable-icon.svg"));
for (const size of [192, 512]) {
  const png = await sharp(maskableSvg).resize(size, size).png().toBuffer();
  writeFileSync(join(iconsDir, `maskable-icon-${size}.png`), png);
}

console.log("PWA icons generated.");
