const fs = require('fs');

let code = fs.readFileSync('index.html', 'utf8');

// The regex I used earlier to find the form failed because it didn't match the actual source!
// The source is:
// <form onSubmit={submit}>
//   <div className="form-grid">
//     <div className="form-group"><label>Room *</label>
//
// So let's write a targeted patch just for THIS form.

const startIndex = code.indexOf('<form onSubmit={submit}>\n            <div className="form-grid">\n              <div className="form-group"><label>Room *</label>');

if (startIndex !== -1) {
  const endIndex = code.indexOf('</form>\n        </div>\n        <h3 style=', startIndex);
  if (endIndex !== -1) {
      const oldForm = code.substring(startIndex, endIndex + '</form>'.length);
      const newForm = `<form onSubmit={submit}>
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
                  <select value={item.itemName} onChange={e => {
                      const newItems = [...items];
                      const selVal = e.target.value;
                      newItems[index] = { ...newItems[index], itemName: selVal };
                      const menuItm = menuItems.find(m => m.itemName === selVal);
                      if (menuItm && menuItm.defaultPrice) {
                          newItems[index].rate = menuItm.defaultPrice;
                      }
                      setItems(newItems);
                  }} required>
                    <option value="">Select Item</option>
                    {menuItems.map(m => <option key={m.itemName} value={m.itemName}>{m.itemName} (Rs {m.defaultPrice})</option>)}
                  </select>
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
            <div className="form-actions"><button type="submit" className="btn btn-primary" disabled={saving}>{saving?<><i className="fas fa-spinner fa-spin"></i> Saving...</>:<><i className="fas fa-save"></i> {editOrder?'Update':'Add'} Order</>}</button>{editOrder&&<button type="button" className="btn btn-secondary" onClick={resetOrderForm}><i className="fas fa-times"></i> Cancel Edit</button>}</div>
          </form>`;

      code = code.replace(oldForm, newForm);
      fs.writeFileSync('index.html', code, 'utf8');
      console.log('Target form patched successfully.');
  } else {
      console.log('End marker not found');
  }
} else {
    console.log('Start marker not found');
}
