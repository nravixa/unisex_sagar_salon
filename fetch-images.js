import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesToFetch = [
  // Hero
  { dir: 'hero', file: 'hero-desktop.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop' },
  { dir: 'hero', file: 'hero-mobile.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  
  // Salon
  { dir: 'salon', file: 'salon-interior.jpg', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop' },
  
  // Services
  { dir: 'services', file: 'haircut.jpg', url: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'hair-color.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'hair-treatment.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'hair-spa.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'beard.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'bridal.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'mens-styling.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop' },
  { dir: 'services', file: 'womens-styling.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1200&auto=format&fit=crop' },
  
  // Lookbook
  { dir: 'lookbook', file: 'look-01.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-02.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-03.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-04.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-05.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-06.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-07.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop' },
  { dir: 'lookbook', file: 'look-08.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },
  
  // Stylists
  { dir: 'stylists', file: 'stylist-01.jpg', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { dir: 'stylists', file: 'stylist-02.jpg', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { dir: 'stylists', file: 'stylist-03.jpg', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop' },
  
  // Instagram
  { dir: 'instagram', file: 'insta-01.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop' },
  { dir: 'instagram', file: 'insta-02.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop' },
  { dir: 'instagram', file: 'insta-03.jpg', url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600&auto=format&fit=crop' },
  { dir: 'instagram', file: 'insta-04.jpg', url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop' },
  { dir: 'instagram', file: 'insta-05.jpg', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop' },
  { dir: 'instagram', file: 'insta-06.jpg', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop' },
];

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      // Handle redirects if any
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return resolve(downloadImage(response.headers.location, dest));
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const publicDir = path.join(__dirname, 'public', 'images');
  
  for (const item of imagesToFetch) {
    const dirPath = path.join(publicDir, item.dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    const filePath = path.join(dirPath, item.file);
    console.log(`Downloading ${item.file} to ${item.dir}...`);
    try {
      await downloadImage(item.url, filePath);
    } catch (err) {
      console.error(`Error downloading ${item.file}:`, err.message);
    }
  }
  console.log('Finished downloading all images.');
}

main();
