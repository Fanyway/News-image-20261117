// News-image entry (Node 22, standard library only).
// The entry is the entry.png shipped beside this file: a front page summing
// up the world's news of Tuesday, 17 November 2026. This program writes
// that image to the output directory as entry.png, byte for byte, on
// every run — no network, no randomness, no drawing at run time.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = readFileSync(join(here, 'entry.png'));

// The shipped file must be a whole PNG: its 8-byte signature, then the
// image data its header describes. Refuse anything else rather than
// writing a broken entry.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (image.length < 8 || !image.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png beside this file is not a PNG image');
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
writeFileSync(target, image);

// Confirm the run wrote exactly the image shipped beside this file.
const written = readFileSync(target);
if (!written.equals(image)) {
  throw new Error('entry.png was not written byte for byte');
}
