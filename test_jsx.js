const fs = require('fs');
const html = fs.readFileSync('AuthAndBooking.html', 'utf8');

// Use Babel to parse just to ensure no JSX syntax errors were introduced
try {
  require('@babel/core').transformSync(html, {
    presets: ['@babel/preset-react']
  });
  console.log("Syntax OK");
} catch(e) {
  console.log(e.message);
}
