const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const s = content.indexOf('const toggleRoom=(rn)=>{setSelectedRooms(prev=>prev.includes(rn)?prev.filter(r=>r!==rn):[...prev,rn]);};');
if (s !== -1) {
  console.log(content.substring(s, s + 1000));
}
