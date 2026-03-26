const fs = require('fs');
let indexHtml = fs.readFileSync('index.html', 'utf8');
const codeJs = fs.readFileSync('Code.gs', 'utf8');

// Read and inject css.html and js.html
try {
  const cssHtml = fs.readFileSync('css.html', 'utf8');
  indexHtml = indexHtml.replace(/<\?\!= include\('css'\); \?>/g, cssHtml);
} catch(e) { console.log('css.html not found, skipping'); }

try {
  const jsHtml = fs.readFileSync('js.html', 'utf8');
  indexHtml = indexHtml.replace(/<\?\!= include\('js'\); \?>/g, jsHtml);
} catch(e) { console.log('js.html not found, skipping'); }

fs.writeFileSync('index_local.html', indexHtml);
console.log('Generated index_local.html');
