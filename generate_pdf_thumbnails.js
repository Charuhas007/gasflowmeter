const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

let pdfjsLib;
const pdfFiles = [
  "Thermal Mass Flow meter-11.pdf",
  "Compact Gas Flow meter.pdf",
  "Steam Flow Meter-2.pdf",
  "Insertion Type Thermal Mass flow Meter.pdf",
  "industrial-oxygen-flow-meter.pdf",
  "Compressor-Air-Flow-Meter.pdf"
];

const baseUrl = "https://gasflowmeter.net/pdf/";

async function generateThumbnail(fileName) {
  const url = baseUrl + encodeURI(fileName).replace(/%20/g, "%20");
  const baseName = fileName.replace('.pdf', '');
  const outPath = path.join(__dirname, 'public', 'downloads', `${baseName}.png`);
  
  if (fs.existsSync(outPath)) {
    console.log(`Thumbnail already exists for ${fileName}`);
    return;
  }

  try {
    console.log(`Fetching ${url}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = new Uint8Array(await res.arrayBuffer());
    
    console.log(`Parsing PDF: ${fileName}`);
    const loadingTask = pdfjsLib.getDocument({ data });
    const pdfDocument = await loadingTask.promise;
    const page = await pdfDocument.getPage(1);
    
    const viewport = page.getViewport({ scale: 1.0 }); // 1.0 is enough for a thumbnail
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');
    
    await page.render({
      canvasContext: ctx,
      viewport: viewport
    }).promise;
    
    const buffer = canvas.toBuffer('image/png');
    fs.mkdirSync(path.join(__dirname, 'public', 'downloads'), { recursive: true });
    fs.writeFileSync(outPath, buffer);
    console.log(`Successfully saved thumbnail: ${outPath}`);
  } catch (error) {
    console.error(`Error processing ${fileName}:`, error.message);
  }
}

async function main() {
  pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  for (const file of pdfFiles) {
    await generateThumbnail(file);
  }
}

main();
