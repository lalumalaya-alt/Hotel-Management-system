const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

// 1. Add new state to RestaurantView
if (!code.includes('const [items, setItems] = useState')) {
  code = code.replace(
    /const \[editOrder,setEditOrder\]=useState\(null\);/,
    `const [editOrder,setEditOrder]=useState(null);\n      const [items, setItems] = useState([{itemName: '', quantity: 1, rate: 0}]);\n      const [mealPeriod, setMealPeriod] = useState('Breakfast');`
  );
}

// 2. Update Submit function
code = code.replace(
  /if\(!selRoom\)\{Swal\.fire\(\{icon:'warning',text:'Select a room first\.'\}\);return;\}\s*if\(!fd\.amount\|\|parseFloat\(fd\.amount\)<=0\)\{Swal\.fire\(\{icon:'warning',text:'Enter a valid amount\.'\}\);return;\}\s*setSaving\(true\);\s*if\(editOrder\)\{[\s\S]*?\}\s*\};/m,
  `if(!selRoom){Swal.fire({icon:'warning',text:'Select a room first.'});return;}
        if (items.some(i => !i.itemName || i.quantity <= 0)) {Swal.fire({icon:'warning',text:'Please complete all order line items.'});return;}
        setSaving(true);
        if(editOrder){
          google.script.run.withSuccessHandler(res=>{setSaving(false);if(res.success){Swal.fire({icon:'success',text:res.message,timer:2000,showConfirmButton:false});resetOrderForm();loadOrders();}else Swal.fire({icon:'error',text:res.message});}).withFailureHandler(e=>{setSaving(false);Swal.fire({icon:'error',text:e.message});}).updateFoodOrder(editOrder.rowIndex,{roomNo:selRoom,checkInId:selCheckIn,orderDate:fd.orderDate,items:items.map(i=>({...i,mealPeriod})),status:'Active'});
        }else{
          google.script.run.withSuccessHandler(res=>{setSaving(false);if(res.success){Swal.fire({icon:'success',text:res.message,timer:2000,showConfirmButton:false});resetOrderForm();loadOrders();}else Swal.fire({icon:'error',text:res.message});}).withFailureHandler(e=>{setSaving(false);Swal.fire({icon:'error',text:e.message});}).addFoodOrder({roomNo:selRoom,checkInId:selCheckIn,orderDate:fd.orderDate,items:items.map(i=>({...i,mealPeriod}))});
        }
      };`
);

// 3. Update the Reset Form function
code = code.replace(
  /const resetOrderForm=\(\)=>\{setEditOrder\(null\);setFd\(\{category:'FoodBeverage',description:'',amount:'',orderDate:new Date\(\)\.toISOString\(\)\.split\('T'\)\[0\]\}\);\};/g,
  `const resetOrderForm=()=>{setEditOrder(null);setFd({...fd,orderDate:new Date().toISOString().split('T')[0]});setItems([{itemName: '', quantity: 1, rate: 0}]);setMealPeriod('Breakfast');};`
);

// 4. Update the Edit action assignment
code = code.replace(
  /if\(a==='edit'\)\{setEditOrder\(rd\);setSelRoom\(rd\.roomNo\);setSelCheckIn\(rd\.checkInId\);setFd\(\{category:rd\.category,description:rd\.description,amount:rd\.amount,orderDate:rd\.orderDate\?rd\.orderDate\.split\('T'\)\[0\]:''\}\);\}/g,
  `if(a==='edit'){setEditOrder(rd);setSelRoom(rd.roomNo);setSelCheckIn(rd.checkInId);setFd({...fd, orderDate:rd.orderDate?rd.orderDate.split('T')[0]:''});setItems([{itemName:rd.itemName||rd.description||'',quantity:rd.quantity||1,rate:rd.rate||rd.amount||0}]);if(rd.mealPeriod)setMealPeriod(rd.mealPeriod);}`
);

// Ensure menuItems state and fetch
if (!code.includes('const [menuItems, setMenuItems] = useState')) {
  code = code.replace(
    /const loadOrders=\(\)=>\{tRef\.current\?\.destroy\(\);google\.script\.run\.withSuccessHandler\(r=>\{const d=Array\.isArray\(r\)\?r:\[\];initT\(d\);\}\)\.getAllFoodOrders\(\);\};/,
    `const [menuItems, setMenuItems] = useState([]);\n      const loadOrders=()=>{tRef.current?.destroy();google.script.run.withSuccessHandler(r=>{const d=Array.isArray(r)?r:[];initT(d);}).getAllFoodOrders();google.script.run.withSuccessHandler(r=>{setMenuItems(r||[]);}).getAllMenuItems();};`
  );
}

// 6. Update the columns definition logic
code = code.replace(
  /columns:\[\{data:'orderId'\},\{data:'roomNo'\},\{data:'checkInId'\},\{data:'orderDate',render:fmtD\},\{data:'category',render:d=>CAT_LABELS\[d\]\|\|d\},\{data:'description'\},\{data:'amount',render:fmtC\},\{data:'status',render:d=>\`<span class="badge \$\{d==='Active'\?'badge-success':'badge-secondary'\}">\$\{d\}<\/span>\`\},\{data:null,orderable:false,className:'text-right',render:\(d,t,r\)=>\`\$\{r\.status==='Active'\?'<button class="action-icon edit-icon" data-action="edit" title="Edit"><i class="fas fa-edit"><\/i><\/button><button class="action-icon delete-icon" data-action="delete" title="Delete"><i class="fas fa-trash"><\/i><\/button>':''\}\`\}\]/g,
  `columns:[{data:'orderId'},{data:'roomNo'},{data:'checkInId'},{data:'orderDate',render:fmtD},{data:'mealPeriod'},{data:'itemName'},{data:'quantity'},{data:'rate',render:fmtC},{data:'totalAmount',render:fmtC},{data:'status',render:d=>\`<span class="badge \$\{d==='Active'?'badge-success':'badge-secondary'\}>\$\{d\}</span>\`},{data:null,orderable:false,className:'text-right',render:(d,t,r)=>\`\$\{r.status==='Active'?'<button class="action-icon edit-icon" data-action="edit" title="Edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete" title="Delete"><i class="fas fa-trash"></i></button>':''\}\`}]`
);


// 7. Change the layout HTML table header
code = code.replace(
  /<th>Date<\/th><th>Category<\/th><th>Description<\/th><th>Amount<\/th><th>Status<\/th><th className="text-right">Actions<\/th>/,
  `<th>Date</th><th>Meal Period</th><th>Item Name</th><th>Qty</th><th>Rate</th><th>Total</th><th>Status</th><th className="text-right">Actions</th>`
);

fs.writeFileSync('index.html', code, 'utf8');
console.log('Other things patched successfully.');
