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

// 5. Replace Form Structure
const formStart = '<form onSubmit={submit}>';
const formEnd = '<div className="form-actions">';
const startIndex = code.indexOf(formStart);
const endIndex = code.indexOf(formEnd);

if (startIndex !== -1 && endIndex !== -1) {
  const currentForm = code.substring(startIndex + formStart.length, endIndex);

  const newForm = `
            <div className="form-group">
              <label>Select Room *</label>
              {activeRooms.length===0 ? (
                <div style={{color:'#e74c3c',fontSize:'14px',marginBottom:'15px'}}><i className="fas fa-info-circle"></i> No active check-ins found. Check in guests first from the Check-In page.</div>
              ) : (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px'}}>
                  {Object.entries(activeRooms.reduce((acc, rm) => {
                    if (!acc[rm.checkInId]) acc[rm.checkInId] = { guestName: rm.guestName, rooms: [] };
                    acc[rm.checkInId].rooms.push(rm);
                    return acc;
                  }, {})).map(([ciId, group]) => (
                    <div key={ciId} style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '10px', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '6px', minWidth: '150px'}}>
                      <div style={{fontWeight: 'bold', color: 'var(--navy-primary)', fontSize: '14px', marginBottom: '5px'}}>
                        <i className="fas fa-user-circle"></i> {group.guestName} <span style={{fontSize: '12px', color: '#888', fontWeight: 'normal'}}>(ID: {ciId})</span>
                      </div>
                      <div style={{display:'flex', flexWrap:'wrap', gap:'15px'}}>
                        {group.rooms.map(rm => (
                          <label key={rm.roomNo} style={{display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', margin: '0', fontSize: '14px'}}>
                            <input
                              type="radio"
                              name="restaurant_room_selection"
                              value={rm.roomNo}
                              checked={selRoom === rm.roomNo}
                              onChange={() => pickRoom(rm.roomNo)}
                              style={{cursor: 'pointer', margin: '0'}}
                            />
                            <span>#{rm.roomNo}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-grid" style={{marginBottom: '15px'}}>
              <div className="form-group"><label>Date *</label><input type="date" value={fd.orderDate} onChange={e=>setFd({...fd,orderDate:e.target.value})} required/></div>
              <div className="form-group"><label>Meal Period *</label><select value={mealPeriod} onChange={e=>setMealPeriod(e.target.value)} required><option value="Breakfast">Breakfast</option><option value="Lunch">Lunch</option><option value="Dinner">Dinner</option><option value="Snacks">Snacks</option></select></div>
            </div>
            {selGuestName&&<p style={{fontSize:'13px',color:'#666',marginBottom:'15px'}}><i className="fas fa-info-circle"></i> Selected Guest: <strong>{selGuestName}</strong> | Check-In ID: <strong>{selCheckIn}</strong></p>}

            <div style={{marginBottom: '15px', borderBottom: '2px solid var(--navy-primary)', paddingBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <strong>Order Items</strong>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setItems([...items, {itemName: '', quantity: 1, rate: 0}])}><i className="fas fa-plus"></i> Add Item</button>
            </div>

            <div style={{marginBottom: '20px'}}>
              <div style={{display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr auto', gap: '10px', fontWeight: 'bold', fontSize: '12px', color: '#555', marginBottom: '5px'}}>
                <div>Item Name *</div>
                <div>Quantity *</div>
                <div>Rate *</div>
                <div style={{textAlign: 'right'}}>Total</div>
                <div></div>
              </div>

              {items.map((item, index) => (
                <div key={index} style={{display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr auto', gap: '10px', alignItems: 'center', marginBottom: '10px'}}>
                  <input type="text" value={item.itemName} onChange={e => {
                      const newItems = [...items];
                      newItems[index] = { ...newItems[index], itemName: e.target.value };
                      setItems(newItems);
                  }} placeholder="Enter item name" required/>
                  <input type="number" min="1" step="1" value={item.quantity} onChange={e => {
                      const newItems = [...items];
                      newItems[index] = { ...newItems[index], quantity: parseInt(e.target.value) || 0 };
                      setItems(newItems);
                  }} required/>
                  <input type="number" min="0" step="0.01" value={item.rate} onChange={e => {
                      const newItems = [...items];
                      newItems[index] = { ...newItems[index], rate: parseFloat(e.target.value) || 0 };
                      setItems(newItems);
                  }} required/>
                  <div style={{textAlign: 'right', fontWeight: 'bold', padding: '8px', backgroundColor: '#eee', borderRadius: '4px'}}>
                    {APP_CURRENCY} {((item.quantity || 0) * (item.rate || 0)).toFixed(2)}
                  </div>
                  <button type="button" className="action-icon delete-icon" onClick={() => {
                      const newItems = [...items];
                      newItems.splice(index, 1);
                      setItems(newItems);
                  }} disabled={items.length === 1} style={{margin: 0}}><i className="fas fa-trash"></i></button>
                </div>
              ))}

              <div style={{textAlign: 'right', marginTop: '15px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '4px', fontSize: '16px'}}>
                Grand Total: <strong>{APP_CURRENCY} {items.reduce((sum, item) => sum + ((item.quantity || 0) * (item.rate || 0)), 0).toFixed(2)}</strong>
              </div>
            </div>
            `;

  code = code.replace(currentForm, newForm);
}

fs.writeFileSync('index.html', code, 'utf8');
console.log('index.html patched.');
