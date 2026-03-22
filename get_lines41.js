const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const s = content.indexOf('// Compute physical room states by checking overlapping CheckIns and Advance Bookings');
if (s !== -1) {
  console.log(content.substring(s, s + 3500));
}
