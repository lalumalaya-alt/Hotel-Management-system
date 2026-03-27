const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const startIndex = html.indexOf('<script type="text/babel">') + '<script type="text/babel">'.length;
const endIndex = html.indexOf('</script>', startIndex);

const jsxCode = html.substring(startIndex, endIndex);
fs.writeFileSync('temp.jsx', jsxCode);
