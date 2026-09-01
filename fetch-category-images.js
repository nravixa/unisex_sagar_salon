import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToFetch = [
  { file: 'cat-waxing.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' }, // Valid beauty image
  { file: 'cat-bleach.jpg', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop' }, // Valid beauty image
  { file: 'cat-mani-pedi.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop' }, // Valid beauty image
  { file: 'cat-cleanup.jpg', url: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop' },
  { file: 'cat-facial.jpg', url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1200&auto=format&fit=crop' },
  { file: 'cat-polishing.jpg', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop' }
];

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return resolve(downloadImage(response.headers.location, dest));
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const dirPath = path.join(__dirname, 'public', 'images', 'services');
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  
  for (const item of imagesToFetch) {
    const filePath = path.join(dirPath, item.file);
    try {
      await downloadImage(item.url, filePath);
      console.log(`Downloaded ${item.file}`);
    } catch (err) {
      console.error(`Error downloading ${item.file}:`, err.message);
    }
  }
}

main();
