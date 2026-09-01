const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'hero');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const url = 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2400&auto=format&fit=crop';
const dest = path.join(dir, 'hero-bg.jpg');

const file = fs.createWriteStream(dest);
https.get(url, (response) => {
    if (response.statusCode !== 200) {
        console.error('Failed to download: status ' + response.statusCode);
        return;
    }
    response.pipe(file);
    file.on('finish', () => {
        file.close(() => console.log('Hero image downloaded.'));
    });
}).on('error', (err) => {
    fs.unlink(dest, () => {});
    console.error('Error downloading:', err.message);
});
