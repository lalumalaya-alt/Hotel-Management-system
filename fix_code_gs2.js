const fs = require('fs');
let code = fs.readFileSync('Code.gs', 'utf8');

const fix = `
/**
 * Adds an extra person charge directly to the Restaurant/Additional Charges sheet.
 */
function addExtraPersonToRestaurant(checkInId, roomNo, dateStr, count) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('Restaurant');
    if (!sheet) {
      sheet = ss.getSheetByName('AdditionalCharges');
      if (!sheet) throw new Error("Charges sheet not found.");
    }

    // Default Extra Person cost
    const costPerPerson = 500; // Using a flat rate here to avoid missing getSettings fields

    const totalAmount = count * costPerPerson;

    const chargeId = 'RC-' + new Date().getTime();
    const itemName = 'Extra Person Charge (' + count + ' pax)';

    sheet.appendRow([
      chargeId,
      dateStr, // Date
      checkInId,
      roomNo,
      itemName,
      count,
      costPerPerson,
      totalAmount,
      'Added via Extra Person Button',
      'Unpaid'
    ]);

    return { success: true, message: "Added " + count + " extra person(s) for " + totalAmount };
  } catch (err) {
    Logger.log("addExtraPersonToRestaurant Error: " + err.message);
    return { success: false, message: err.message };
  }
}

/**
 * Shifts a guest from one set of rooms to another.
 */
function shiftRooms(rowIndex, checkInId, newRoomsStr, newCheckoutDate) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Check-In');
    if (!sheet) throw new Error("Check-In sheet not found.");

    const data = sheet.getDataRange().getValues();
    let targetRow = -1;
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == checkInId) {
        targetRow = i + 1; // 1-based index
        break;
      }
    }

    if (targetRow === -1) throw new Error("Check-in ID not found.");

    // Update Expected Checkout Date (Col G / index 6, Col H / index 7, Col I / index 8)
    // Check-In sheet columns:
    // 0: ID, 1: GuestName, 2: Phone, 3: Email, 4: Address, 5: CheckInDate, 6: ExpectedOut,
    // 7: RoomNos, 8: Pax, 9: Advance, 10: Status

    // Using checkInId to find the row is safer than rowIndex, so we'll use that.
    sheet.getRange(targetRow, 7).setValue(newCheckoutDate);
    sheet.getRange(targetRow, 8).setValue(newRoomsStr);

    return { success: true, message: "Rooms shifted successfully to " + newRoomsStr };
  } catch (err) {
    Logger.log("shiftRooms Error: " + err.message);
    return { success: false, message: err.message };
  }
}
`;

if (!code.includes('addExtraPersonToRestaurant')) {
  code += "\n" + fix + "\n";
  fs.writeFileSync('Code.gs', code);
  console.log("Appended new version.");
} else {
  console.log("Already exists.");
}
