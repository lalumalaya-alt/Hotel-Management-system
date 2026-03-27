const fs = require('fs');
let code = fs.readFileSync('Code.gs', 'utf8');

code = code.replace(
  /const REST_BILLED_CHECKIN_COL = 8;[\s\S]*?const REST_ADDED_BY_COL = 9;/m,
  ''
);

fs.writeFileSync('Code.gs', code, 'utf8');
