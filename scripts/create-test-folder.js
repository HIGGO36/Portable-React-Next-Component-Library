const fs = require('fs');
const path = require('path');
const Terser = require('terser');

const buildFolder = '.next';
const chunksFolders = ['server/chunks', 'static/chunks'];

const createTestFolder = async () => {
  const buildPath = path.resolve(__dirname, '..', buildFolder);
  const testPath = path.join(buildPath, 'test');
  const testFilePath = path.join(testPath, 'test-chunk.js');

  if (!fs.existsSync(testPath)) {
    fs.mkdirSync(testPath);
    console.log('Test folder created successfully:', testPath);
  }

  let allMinifiedContents = '';

  for (const chunkFolder of chunksFolders) {
    const chunkFolderPath = path.join(buildPath, chunkFolder);
    if (fs.existsSync(chunkFolderPath)) {
      const chunkFiles = fs.readdirSync(chunkFolderPath);

      if (chunkFiles.length === 0) {
        console.log('No files found in:', chunkFolderPath);
        continue;
      }

      for (const file of chunkFiles) {
        const filePath = path.join(chunkFolderPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const minifiedCode = await Terser.minify(fileContent);

          if (minifiedCode.error) {
            console.log('An error occurred during minification:', minifiedCode.error);
            continue;
          }

          allMinifiedContents += minifiedCode.code;
          fs.unlinkSync(filePath);
        }
      }

      console.log('Files merged into test chunk file from:', chunkFolderPath);
    } else {
      console.log('Chunks folder does not exist:', chunkFolderPath);
    }
  }

  fs.writeFileSync(testFilePath, allMinifiedContents);
  console.log('Test chunk file has been minified.');
};

(async () => {
  await createTestFolder();
})();
