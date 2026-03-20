const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// I need to add the JSX for the edit modal inside the Check-In component
const modalJSX = `
      {showEditModal && editCheckIn && (
        <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="modal modal-wide" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h3><i className="fas fa-edit"></i> Edit Check-In: {editCheckIn.checkInId}</h3>
                    <button className="close-btn" onClick={() => setShowEditModal(false)}><i className="fas fa-times"></i></button>
                </div>
                <div className="modal-body" style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                    {/* Extend Checkout Date */}
                    <div className="form-section" style={{flex:'1 1 300px', padding:'15px', border:'1px solid #ddd', borderRadius:'8px'}}>
                        <h4><i className="fas fa-calendar-plus"></i> Extend Checkout Date</h4>
                        <div className="form-group" style={{marginTop:'10px'}}>
                            <label>New Expected Out Date</label>
                            <input type="date" id="newCheckOutDate" defaultValue={editCheckIn.checkOutDate ? editCheckIn.checkOutDate.split('T')[0] : ''} />
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            const newDate = document.getElementById('newCheckOutDate').value;
                            if(!newDate) return Swal.fire({icon:'warning', text:'Select a date.'});
                            setSaving(true);
                            google.script.run.withSuccessHandler(r => {
                                setSaving(false);
                                if(r.success) {
                                    Swal.fire({icon:'success', text:r.message, timer:2000, showConfirmButton:false});
                                    setShowEditModal(false);
                                    loadCheckIns();
                                } else Swal.fire({icon:'error', text:r.message});
                            }).withFailureHandler(e => {setSaving(false);Swal.fire({icon:'error', text:e.message})}).extendCheckoutDate(editCheckIn.rowIndex, newDate);
                        }} disabled={saving}>Extend</button>
                    </div>

                    {/* Add Extra Person */}
                    <div className="form-section" style={{flex:'1 1 300px', padding:'15px', border:'1px solid #ddd', borderRadius:'8px'}}>
                        <h4><i className="fas fa-user-plus"></i> Add Extra Person</h4>
                        <div className="form-group" style={{marginTop:'10px'}}>
                            <label>Date</label>
                            <input type="date" id="paxDate" defaultValue={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div className="form-group">
                            <label>Count</label>
                            <input type="number" min="1" id="paxCount" defaultValue="1" />
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            const date = document.getElementById('paxDate').value;
                            const count = parseInt(document.getElementById('paxCount').value) || 1;
                            const room = (editCheckIn.roomNumbers || '').split(',')[0];
                            if(!date) return Swal.fire({icon:'warning', text:'Select a date.'});
                            setSaving(true);
                            google.script.run.withSuccessHandler(r => {
                                setSaving(false);
                                if(r.success) {
                                    Swal.fire({icon:'success', text:r.message, timer:2000, showConfirmButton:false});
                                    setShowEditModal(false);
                                } else Swal.fire({icon:'error', text:r.message});
                            }).withFailureHandler(e => {setSaving(false);Swal.fire({icon:'error', text:e.message})}).addExtraPersonToRestaurant(editCheckIn.checkInId, room, date, count);
                        }} disabled={saving}>Add Person</button>
                    </div>

                    {/* Shift Room */}
                    <div className="form-section" style={{flex:'1 1 300px', padding:'15px', border:'1px solid #ddd', borderRadius:'8px'}}>
                        <h4><i className="fas fa-exchange-alt"></i> Shift Room</h4>
                        <div className="form-group" style={{marginTop:'10px'}}>
                            <label>Select New Room(s)</label>
                            <select id="shiftRoomSelect" multiple style={{height:'100px'}}>
                                {rooms.filter(r => r.roomStatus.toLowerCase() === 'available').map(r => (
                                    <option key={r.roomNo} value={r.roomNo}>{r.roomNo} ({r.roomType})</option>
                                ))}
                            </select>
                            <small>Hold Ctrl/Cmd to select multiple</small>
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            const sel = Array.from(document.getElementById('shiftRoomSelect').selectedOptions).map(o => o.value);
                            if(sel.length === 0) return Swal.fire({icon:'warning', text:'Select a room.'});
                            setSaving(true);
                            google.script.run.withSuccessHandler(r => {
                                setSaving(false);
                                if(r.success) {
                                    Swal.fire({icon:'success', text:r.message, timer:2000, showConfirmButton:false});
                                    setShowEditModal(false);
                                    loadCheckIns();
                                    google.script.run.withSuccessHandler(res => setRooms((Array.isArray(res) ? res : []).filter(rm => (rm.roomStatus || '').toLowerCase() === 'available'))).getAllRooms();
                                } else Swal.fire({icon:'error', text:r.message});
                            }).withFailureHandler(e => {setSaving(false);Swal.fire({icon:'error', text:e.message})}).shiftRooms(editCheckIn.rowIndex, editCheckIn.checkInId, sel.join(','));
                        }} disabled={saving}>Shift Room</button>
                    </div>

                    {/* Add Extra Room */}
                    <div className="form-section" style={{flex:'1 1 300px', padding:'15px', border:'1px solid #ddd', borderRadius:'8px'}}>
                        <h4><i className="fas fa-plus-square"></i> Add Extra Room</h4>
                        <div className="form-group" style={{marginTop:'10px'}}>
                            <label>Select Additional Room(s)</label>
                            <select id="addRoomSelect" multiple style={{height:'100px'}}>
                                {rooms.filter(r => r.roomStatus.toLowerCase() === 'available').map(r => (
                                    <option key={r.roomNo} value={r.roomNo}>{r.roomNo} ({r.roomType})</option>
                                ))}
                            </select>
                            <small>Hold Ctrl/Cmd to select multiple</small>
                        </div>
                        <button className="btn btn-primary" onClick={() => {
                            const sel = Array.from(document.getElementById('addRoomSelect').selectedOptions).map(o => o.value);
                            if(sel.length === 0) return Swal.fire({icon:'warning', text:'Select a room.'});
                            setSaving(true);
                            google.script.run.withSuccessHandler(r => {
                                setSaving(false);
                                if(r.success) {
                                    Swal.fire({icon:'success', text:r.message, timer:2000, showConfirmButton:false});
                                    setShowEditModal(false);
                                    loadCheckIns();
                                    google.script.run.withSuccessHandler(res => setRooms((Array.isArray(res) ? res : []).filter(rm => (rm.roomStatus || '').toLowerCase() === 'available'))).getAllRooms();
                                } else Swal.fire({icon:'error', text:r.message});
                            }).withFailureHandler(e => {setSaving(false);Swal.fire({icon:'error', text:e.message})}).addExtraRoom(editCheckIn.rowIndex, editCheckIn.checkInId, sel.join(','));
                        }} disabled={saving}>Add Room</button>
                    </div>

                </div>
            </div>
        </div>
      )}
`;

html = html.replace(/(<div style={{marginTop:'30px'}}><h3 style={{marginBottom:'15px',color:'var\(--navy-primary\)'}}><i className="fas fa-list"><\/i> All Check-Ins<\/h3>)/, modalJSX + "$1");

fs.writeFileSync('index.html', html);
console.log("Injected modal into index.html");
