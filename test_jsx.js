const fs = require('fs');
const html = fs.readFileSync('FinanceAndSettings.html', 'utf8');
try {
  require('@babel/core').transformSync(html, {
    presets: ['@babel/preset-react']
  });
  console.log("Syntax OK");
} catch(e) {
  console.log(e.message);
}
