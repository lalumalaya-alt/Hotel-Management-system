const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// I replaced `loadOrders` but I accidentally included `setRecs` instead of the original function's logic.
// Original loadOrders in RestaurantView was:
// const loadOrders=()=>{tRef.current?.destroy();google.script.run.withSuccessHandler(r=>{const d=Array.isArray(r)?r:[];initT(d);}).getAllFoodOrders();};

code = code.replace(
  /const loadOrders=\(\)=>\{tRef\.current\?\.destroy\(\);google\.script\.run\.withSuccessHandler\(r=>\{setRecs\(r\|\|\[\]\);initT\(\);\}\)\.getAllFoodOrders\(\);google\.script\.run\.withSuccessHandler\(r=>\{setMenuItems\(r\|\|\[\]\);\}\)\.getAllMenuItems\(\);\};/,
  `const loadOrders=()=>{tRef.current?.destroy();google.script.run.withSuccessHandler(r=>{const d=Array.isArray(r)?r:[];initT(d);}).getAllFoodOrders();google.script.run.withSuccessHandler(r=>{setMenuItems(r||[]);}).getAllMenuItems();};`
);

fs.writeFileSync('index.html', code, 'utf8');
