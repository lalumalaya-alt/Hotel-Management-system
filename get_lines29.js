const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const s = content.indexOf('const handleEdit=(ci)=>{');
if (s !== -1) {
  console.log(content.substring(s, s + 3000));
}
