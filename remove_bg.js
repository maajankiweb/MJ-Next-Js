const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function processImage() {
  console.log("Removing background...");
  try {
    const blob = await removeBackground('public/ashish.png');
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync('public/ashish-nobg.png', buffer);
    console.log("Done!");
  } catch (error) {
    console.error("Error:", error);
  }
}

processImage();
