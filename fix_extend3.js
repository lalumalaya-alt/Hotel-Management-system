const fs = require('fs');

let code = fs.readFileSync('Code.gs', 'utf8');

const endpoints = `
function extendCheckoutDate(rowIndex, newDateStr) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Check-In');
    if (!sheet) return { success: false, message: "Check-In sheet not found." };
    sheet.getRange(rowIndex, 7).setValue(newDateStr); // Column G (ExpectedOut)
    return { success: true, message: "Checkout date extended successfully." };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function addExtraRoom(rowIndex, checkInId, newRoomsStr) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Check-In');
    const roomsSheet = ss.getSheetByName('Rooms');

    // Get existing rooms
    const existingRoomsStr = sheet.getRange(rowIndex, 8).getValue() || ""; // Column H (RoomNos)
    const existingRooms = existingRoomsStr.toString().split(',').map(r=>r.trim()).filter(r=>r);
    const newRooms = newRoomsStr.split(',').map(r=>r.trim()).filter(r=>r);

    // Combine and mark new rooms as Booked
    const combinedRooms = Array.from(new Set([...existingRooms, ...newRooms]));
    sheet.getRange(rowIndex, 8).setValue(combinedRooms.join(', '));
    sheet.getRange(rowIndex, 10).setValue(combinedRooms.length); // Update room count column J

    // Mark new rooms as Booked in Rooms sheet
    const rData = roomsSheet.getDataRange().getValues();
    for (let r = 0; r < newRooms.length; r++) {
      for (let i = 1; i < rData.length; i++) {
        if ((rData[i][0] || '').toString() === newRooms[r]) {
          roomsSheet.getRange(i + 1, 4).setValue("Booked"); // Column D (Status)
          break;
        }
      }
    }

    return { success: true, message: "Added " + newRooms.join(', ') + " to check-in." };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function shiftRooms(rowIndex, checkInId, newRoomsStr) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Check-In');
    const roomsSheet = ss.getSheetByName('Rooms');

    // Get existing rooms
    const existingRoomsStr = sheet.getRange(rowIndex, 8).getValue() || ""; // Column H (RoomNos)
    const existingRooms = existingRoomsStr.toString().split(',').map(r=>r.trim()).filter(r=>r);
    const newRooms = newRoomsStr.split(',').map(r=>r.trim()).filter(r=>r);

    // Free old rooms
    const rData = roomsSheet.getDataRange().getValues();
    for (let r = 0; r < existingRooms.length; r++) {
      for (let i = 1; i < rData.length; i++) {
        if ((rData[i][0] || '').toString() === existingRooms[r]) {
          roomsSheet.getRange(i + 1, 4).setValue("Available"); // Column D (Status)
          break;
        }
      }
    }

    // Update check-in record
    sheet.getRange(rowIndex, 8).setValue(newRooms.join(', '));
    sheet.getRange(rowIndex, 10).setValue(newRooms.length); // Update room count column J

    // Book new rooms
    for (let r = 0; r < newRooms.length; r++) {
      for (let i = 1; i < rData.length; i++) {
        if ((rData[i][0] || '').toString() === newRooms[r]) {
          roomsSheet.getRange(i + 1, 4).setValue("Booked"); // Column D (Status)
          break;
        }
      }
    }

    return { success: true, message: "Shifted to room(s) " + newRooms.join(', ') + "." };
  } catch (e) {
    return { success: false, message: e.message };
  }
}

function addExtraPersonToRestaurant(checkInId, roomNo, dateStr, count) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Restaurant') || ss.getSheetByName('AdditionalCharges');
    if (!sheet) return { success: false, message: "Restaurant/Charges sheet not found." };

    const costPerPerson = 500; // Default flat rate
    const totalAmount = count * costPerPerson;

    const chargeId = 'RC-' + new Date().getTime();
    const itemName = 'Extra Person Charge (' + count + ' pax)';

    // Format: [ID, Date, CheckIn ID, Room No, Category, Description, Amount, Status]
    sheet.appendRow([
      chargeId,
      roomNo,
      checkInId,
      dateStr,
      'Extra Person', // Category
      itemName, // Description
      totalAmount,
      'Active' // Status
    ]);

    return { success: true, message: "Added " + count + " extra person(s) for " + totalAmount };
  } catch (err) {
    return { success: false, message: err.message };
  }
}
`;

code += "\n\n" + endpoints;

fs.writeFileSync('Code.gs', code);
console.log("Injected backend endpoints.");
