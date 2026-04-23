/**
 * Developed by Malaya
 */

/***************************************************
 * GLOBAL CONSTANTS
 ***************************************************/
const SS_ID = SpreadsheetApp.getActiveSpreadsheet().getId();
const DEFAULT_EXTRA_PERSON_RATE = 500;

// SHEET NAMES
const LOGIN_SHEET_NAME      = "Login";
const ROOMS_SHEET_NAME      = "Rooms";
const BOOKINGS_SHEET_NAME   = "Bookings";
const INVOICES_SHEET_NAME   = "Invoices";
const SETTINGS_SHEET_NAME   = "Settings";
const BUDGETS_SHEET_NAME    = "Budgets";
const CATEGORIES_SHEET_NAME = "Categories";
const STAY_SEGMENTS_SHEET_NAME = "StaySegments";
const MENU_SHEET_NAME       = "Menu";

// MENU sheet columns (0-based)
const MENU_ITEM_NAME_COL    = 0;
const MENU_CATEGORY_COL     = 1;
const MENU_PRICE_COL        = 2;

// STAY_SEGMENTS sheet columns (0-based)
const SEG_ID_COL         = 0;
const SEG_CHECKIN_ID_COL = 1;
const SEG_ROOM_NOS_COL   = 2;
const SEG_RATE_COL       = 3;
const SEG_PAX_COL        = 4;
const SEG_START_DATE_COL = 5;
const SEG_END_DATE_COL   = 6;

// ROOMS sheet columns (0-based)
const ROOM_NO_COL          = 0;
const ROOM_TYPE_COL        = 1;
const ROOM_RATE_COL        = 2;
const ROOM_STATUS_COL      = 3;

// BOOKINGS sheet columns (0-based)
const TICKET_ID_COL        = 0;
const BOOKING_ROOM_NO_COL  = 1;
const GUEST_NAME_COL       = 2;
const PHONE_COL            = 3;
const EMAIL_COL            = 4;
const CHECK_IN_COL         = 5;
const CHECK_OUT_COL        = 6;
const BOOKING_STATUS_COL   = 7;
const ROOM_RATE_BOOK_COL   = 8;
const DISCOUNT_COL         = 9;
const TAX_COL              = 10;
const PAYMENT_METHOD_COL   = 11;
const TOTAL_AMOUNT_COL     = 12;
const PAYMENT_STATUS_COL   = 13;  // "Unpaid", "Partial", "Paid"
const AMOUNT_PAID_COL      = 14;  // Numeric amount paid so far
const CHECKIN_TIME_COL     = 15;
const CHECKOUT_TIME_COL    = 16;
const FOOD_PLAN_COL        = 17;
const EXTRA_PERSON_COL     = 18;
const ADVANCE_PAID_COL     = 19;
const NUM_ROOMS_COL        = 20;
const LINKED_CHECKIN_COL   = 21;
const BOOKING_GST_TYPE_COL = 22;
const BOOKING_FIX_RENT_COL = 23;
const BOOKING_FIX_RENT_AMT_COL = 24;
const BOOKING_DISC_PCT_COL = 25; // Added back to prevent ReferenceError in Booking.gs

// LOGIN sheet columns (0-based)
const LOGIN_USERNAME_COL   = 0;
const LOGIN_PASSWORD_COL   = 1;
const LOGIN_ROLE_COL       = 2;

// INVOICES sheet columns (0-based)
const INV_ID_COL              = 0;
const INV_GUEST_NAME_COL      = 1;
const INV_PHONE_COL           = 2;
const INV_EMAIL_COL           = 3;
const INV_CUSTOMER_TIN_COL    = 4;
const INV_CURRENCY_COL        = 5;
const INV_CREATED_DATE_COL    = 6;
const INV_DUE_DATE_COL        = 7;
const INV_STATUS_COL          = 8;
const INV_ITEMS_COL           = 9;
const INV_SUBTOTAL_COL        = 10;
const INV_GST_ENABLED_COL     = 11;
const INV_GST_PERCENT_COL     = 12;
const INV_GST_AMOUNT_COL      = 13;
const INV_DISCOUNT_COL        = 14;
const INV_TOTAL_COL           = 15;
const INV_NOTES_COL           = 16;
const INV_PDF_LINK_COL        = 17;
const INV_CREATED_BY_COL      = 18;
const INV_UPDATED_AT_COL      = 19;

// SETTINGS sheet columns (0-based, single data row at row 2)
const SET_HOTEL_NAME_COL       = 0;
const SET_HOTEL_ADDRESS_COL    = 1;
const SET_HOTEL_PHONE_COL      = 2;
const SET_HOTEL_EMAIL_COL      = 3;
const SET_HOTEL_TIN_COL        = 4;
const SET_LOGO_FILE_ID_COL     = 5;
const SET_LOGO_URL_COL         = 6;
const SET_GST_DEFAULT_COL      = 7;
const SET_NEXT_INVOICE_COL     = 8;
const SET_PDF_FOLDER_ID_COL    = 9;
const SET_LOGO_FOLDER_ID_COL   = 10;
const SET_NEXT_CHECKIN_COL     = 11;
const SET_NEXT_BILL_COL        = 12;

// BUDGETS sheet columns (0-based)
const BDG_ID_COL           = 0;
const BDG_MONTH_COL        = 1;
const BDG_YEAR_COL         = 2;
const BDG_AMOUNT_COL       = 3;
const BDG_SPENT_COL        = 4;
const BDG_REMAINING_COL    = 5;
const BDG_SET_BY_COL       = 6;
const BDG_CREATED_AT_COL   = 7;
const BDG_UPDATED_AT_COL   = 8;

// CATEGORIES sheet columns (0-based)
const CAT_ID_COL           = 0;
const CAT_NAME_COL         = 1;
const CAT_TYPE_COL         = 2;
const CAT_IS_DEFAULT_COL   = 3;
const CAT_CREATED_BY_COL   = 4;
const CAT_CREATED_AT_COL   = 5;

const CUSTOMERS_SHEET_NAME = "Customers";
const CHECKIN_SHEET_NAME   = "CheckIn";
const RESTAURANT_SHEET_NAME = "Restaurant";

// CHECKIN sheet columns (0-based)
const CI_ID_COL             = 0;
const CI_LINKED_TICKET_COL  = 1;
const CI_GUEST_NAME_COL     = 2;
const CI_COMPANY_COL        = 3;
const CI_GST_NUMBER_COL     = 4;
const CI_IDENTITY_COL       = 5;
const CI_MOBILE_COL         = 6;
const CI_EMAIL_COL          = 7;
const CI_ADDRESS_COL        = 8;
const CI_CITY_COL           = 9;
const CI_STATE_COL          = 10;
const CI_PINCODE_COL        = 11;
const CI_COUNTRY_COL        = 12;
const CI_PURPOSE_COL        = 13;
const CI_CHECKIN_DATE_COL   = 14;
const CI_CHECKIN_TIME_COL   = 15;
const CI_CHECKOUT_DATE_COL  = 16;
const CI_CHECKOUT_TIME_COL  = 17;
const CI_ROOM_NUMBERS_COL   = 18;
const CI_ROOM_TYPES_COL     = 19;
const CI_NUM_ROOMS_COL      = 20;
const CI_PAX_COL            = 21;
const CI_ROOM_PAX_BREAKDOWN_COL = 22;
const CI_ADVANCE_PAID_COL   = 23;
const CI_PAYMENT_METHOD_COL = 24;
const CI_EXTRA_PERSON_COL   = 25;
const CI_FOOD_PLAN_COL      = 26;
const CI_GST_TYPE_COL       = 27;
const CI_FIX_RENT_COL       = 28;
const CI_FIX_RENT_AMT_COL   = 29;
const CI_BILL_TO_COL        = 30;
const CI_DISCOUNT_COL       = 31;
const CI_STATUS_COL         = 32;
const CI_CREATED_AT_COL     = 33;
const CI_BILLING_FORMAT_COL = 34;

// RESTAURANT sheet columns (0-based)
const REST_ORDER_ID_COL          = 0;
const REST_CHECKIN_ID_COL        = 1;
const REST_ROOM_NO_COL           = 2;
const REST_ORDER_DATE_COL        = 3;
const REST_MEAL_PERIOD_COL       = 4;
const REST_ITEM_NAME_COL         = 5;
const REST_QUANTITY_COL          = 6;
const REST_RATE_COL              = 7;
const REST_TOTAL_AMOUNT_COL      = 8;
const REST_STATUS_COL            = 9;
const REST_BILLED_CHECKIN_ID_COL = 10;
const REST_ADDED_BY_COL          = 11;

// Aliases for backward compatibility
const REST_CATEGORY_COL          = REST_MEAL_PERIOD_COL;
const REST_DESC_COL              = REST_ITEM_NAME_COL;
const REST_AMOUNT_COL            = REST_TOTAL_AMOUNT_COL;
const REST_CREATED_AT_COL        = REST_ADDED_BY_COL;
const REST_BILLED_CHECKIN_COL    = REST_BILLED_CHECKIN_ID_COL;


// CUSTOMERS sheet columns (0-based)
const CUST_ID_COL           = 0;
const CUST_NAME_COL         = 1;
const CUST_COMPANY_COL      = 2;
const CUST_GST_COL          = 3;
const CUST_IDENTITY_COL     = 4;
const CUST_PHONE_COL        = 5;
const CUST_EMAIL_COL        = 6;
const CUST_ADDRESS_COL      = 7;
const CUST_CITY_COL         = 8;
const CUST_STATE_COL        = 9;
const CUST_PINCODE_COL      = 10;
const CUST_COUNTRY_COL      = 11;
const CUST_LINKED_USER_COL  = 12;
const CUST_CREATED_AT_COL   = 13;

/***************************************************
 * WEB APP ENTRY POINT
 ***************************************************/
function doGet(e) {
  var template = HtmlService.createTemplateFromFile('index');
  return template
    .evaluate()
    .setTitle('Hill View EcoRetreat')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createTemplateFromFile(filename).getRawContent();
}

/***************************************************
 * LOGIN LOGIC
 ***************************************************/
function checkLogin(username, password) {
  try {
    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    const data = loginSheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
      let storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim();
      let storedPass = (data[i][LOGIN_PASSWORD_COL] || "").toString().trim();
      let storedRole = (data[i][LOGIN_ROLE_COL] || "").toString().trim().toLowerCase();

      if (storedUser === username && storedPass === password) {
        return {
          success: true,
          message: "Login successful",
          username: storedUser,
          role: storedRole === 'admin' ? 'admin' : 'user'
        };
      }
    }
    return { success: false, message: "Invalid credentials", role: null };
  } catch (e) {
    return { success: false, message: e.toString(), role: null };
  }
}

function createUserIfNotExists(email, generatedPassword) {
  const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
  const data = loginSheet.getDataRange().getValues();

  let userExists = false;
  for (let i = 1; i < data.length; i++) {
    let storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim();
    if (storedUser === email) {
      userExists = true;
      break;
    }
  }

  if (!userExists) {
    loginSheet.appendRow([email, generatedPassword, "user"]);
  }
}

function changePassword(username, oldPassword, newPassword) {
  try {
    if (!username || !oldPassword || !newPassword) {
      return { success: false, message: "All fields are required." };
    }
    if (newPassword.length < 4) {
      return { success: false, message: "New password must be at least 4 characters." };
    }

    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    const data = loginSheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
      let storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim();
      let storedPass = (data[i][LOGIN_PASSWORD_COL] || "").toString().trim();

      if (storedUser === username && storedPass === oldPassword) {
        loginSheet.getRange(i + 1, LOGIN_PASSWORD_COL + 1).setValue(newPassword);
        return { success: true, message: "Password changed successfully!" };
      }
    }
    return { success: false, message: "Current password is incorrect." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * CREATE ACCOUNT (Self-Registration)
 ***************************************************/
/***************************************************
 * FORGOT PASSWORD — OTP FLOW
 ***************************************************/
/***************************************************
 * HELPER FUNCTIONS
 ***************************************************/
function generateTicketId() {
  const prefix = "TKT";
  const timestamp = new Date().getTime().toString().slice(-6);
  const random = Math.floor(Math.random() * 900 + 100);
  return `${prefix}${timestamp}${random}`;
}

function generateFinanceId() {
  const prefix = "FIN";
  const timestamp = new Date().getTime().toString().slice(-6);
  const random = Math.floor(Math.random() * 900 + 100);
  return `${prefix}${timestamp}${random}`;
}

function daysBetween(d1, d2) {
  // Strip out the time component to compare strict calendar days
  let date1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let date2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  let diff = date2.getTime() - date1.getTime();
  let days = Math.round(diff / (1000 * 3600 * 24));
  return days;
}

// Calculate stay duration based on billing format
function calculateStayDuration(checkInDateStr, checkInTimeStr, checkoutDateObj, checkOutTimeStr, billingFormat) {
  let ciDate = new Date(checkInDateStr);
  if (isNaN(ciDate.getTime())) return 1;

  if (billingFormat === '24-Hour') {
    // Need full Date-Time objects
    let ciFullDate = new Date(checkInDateStr);
    if (checkInTimeStr) {
      let timeParts = checkInTimeStr.split(':');
      if (timeParts.length >= 2) {
        ciFullDate.setHours(parseInt(timeParts[0], 10), parseInt(timeParts[1], 10), 0, 0);
      }
    }

    let coFullDate = new Date(checkoutDateObj);
    if (checkOutTimeStr) {
      let timeParts = checkOutTimeStr.split(':');
      if (timeParts.length >= 2) {
        coFullDate.setHours(parseInt(timeParts[0], 10), parseInt(timeParts[1], 10), 0, 0);
      }
    }

    let diffMs = coFullDate.getTime() - ciFullDate.getTime();
    let hours = diffMs / (1000 * 60 * 60);
    return Math.max(1, Math.ceil(hours / 24));
  } else {
    // Standard format - calendar days
    let days = daysBetween(ciDate, checkoutDateObj);
    return days < 1 ? 1 : days;
  }
}


/**
 * Sequential ID generator using SETTINGS sheet as counter store.
 * type: 'invoice' → INV-0001, 'quote' → QTN-0001
 */
function getNextSequentialId(type) {
  const ss = SpreadsheetApp.openById(SS_ID);
  let settingsSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
  if (!settingsSheet) {
    throw new Error("Settings sheet not found. Please run Setup Demo Data first.");
  }

  const prefixMap = { invoice: 'INV' };
  const colMap = { invoice: SET_NEXT_INVOICE_COL };

  const prefix = prefixMap[type];
  const col = colMap[type];
  if (!prefix || col === undefined) throw new Error("Invalid sequential ID type: " + type);

  const cell = settingsSheet.getRange(2, col + 1);
  let currentNum = parseInt(cell.getValue()) || 1;
  const id = prefix + '-' + String(currentNum).padStart(4, '0');

  cell.setValue(currentNum + 1);
  SpreadsheetApp.flush();

  return id;
}

/**
 * Finds or creates a Drive folder by name (in root).
 */
function getOrCreateDriveFolder(folderName) {
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(folderName);
}

/***************************************************
 * BOOK / CHECKOUT ROOM
 ***************************************************/
function bookRoom(bookingDetails) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    const roomsData = roomsSheet.getDataRange().getValues();

    // Support multi-room: roomNos can be comma-separated string or single room
    let roomNosArr = [];
    if (bookingDetails.roomNos) {
      roomNosArr = bookingDetails.roomNos.split(',').map(r => r.trim()).filter(r => r);
    } else if (bookingDetails.roomNo) {
      roomNosArr = [bookingDetails.roomNo.toString().trim()];
    }
    if (roomNosArr.length === 0) {
      return { success: false, message: "No rooms selected." };
    }

    // Calculate total rooms being booked and determine if it's a type booking
    let totalRoomsCount = 0;
    let isTypeBooking = false;
    roomNosArr.forEach(r => {
      const match = r.match(/(.+?)(?:\s*\((\d+)\))?$/);
      if (match && match[2]) {
        totalRoomsCount += parseInt(match[2], 10);
        isTypeBooking = true;
      } else {
        totalRoomsCount += 1;
      }
    });

    // Validate physical rooms if it's not a type booking
    let roomRowIndices = [];
    if (!isTypeBooking) {
      for (let i = 1; i < roomsData.length; i++) {
        const rowRoomNo = (roomsData[i][ROOM_NO_COL] || "").toString().trim();
        if (roomNosArr.includes(rowRoomNo)) {
          roomRowIndices.push(i);
        }
      }
    }

    const ticketId = generateTicketId();
    const checkInDate = new Date(bookingDetails.checkIn);
    const checkOutDate = new Date(bookingDetails.checkOut);
    const checkInTime = bookingDetails.checkInTime || "14:00";
    const checkOutTime = bookingDetails.checkOutTime || "12:00";
    const foodPlan = bookingDetails.foodPlan || "None";
    const extraPerson = parseInt(bookingDetails.extraPerson || "0") || 0;
    const advancePaid = parseFloat(bookingDetails.advancePaid || "0") || 0;

    let totalRoomRate = parseFloat(bookingDetails.roomRate || "0") || 0;
    let finalAmount = parseFloat(bookingDetails.totalAmount || "0") || 0;
    let tax = parseFloat(bookingDetails.tax || "0") || 0;
    let paymentMethod = bookingDetails.paymentMethod || "Cash";

    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;

    let discountPercent = parseFloat(bookingDetails.discountPercent || "0") || 0; 
    let discount = (totalRoomRate * totalRoomsCount * nights * discountPercent) / 100;

    let roomNosStr = roomNosArr.join(', ');
    let paymentStatus = advancePaid >= finalAmount ? "Paid" : advancePaid > 0 ? "Partial" : "Unpaid";

    bookingsSheet.appendRow([
      ticketId,
      roomNosStr,
      bookingDetails.guestName,
      bookingDetails.phone,
      bookingDetails.email,
      checkInDate.toISOString(),
      checkOutDate.toISOString(),
      "Booked",
      totalRoomRate, // Store the single room rate or average rate
      discount,
      tax,
      paymentMethod,
      finalAmount,
      paymentStatus,
      advancePaid,
      checkInTime,
      checkOutTime,
      foodPlan,
      extraPerson,
      advancePaid,
      roomNosArr.length,
      "",
      bookingDetails.gstType || 'Excluding',
      bookingDetails.fixRoomRent || 'No',
      parseFloat(bookingDetails.fixRoomRentAmount) || 0,
      discountPercent
    ]);

    // Mark all selected physical rooms as Booked
    if (!isTypeBooking) {
      for (let ri = 0; ri < roomRowIndices.length; ri++) {
        roomsSheet.getRange(roomRowIndices[ri] + 1, ROOM_STATUS_COL + 1).setValue("Booked");
      }
    }

    let autoGeneratedPass = "guest" + new Date().getTime().toString().slice(-3);
    if (bookingDetails.email) {
      createUserIfNotExists(bookingDetails.email, autoGeneratedPass);
    }

    SpreadsheetApp.flush();

    try {
      if (bookingDetails.email) {
        let subject = `Room Booking Confirmation - Ticket ${ticketId}`;
        let body = `Hello ${bookingDetails.guestName},\n\nThank you for booking Room(s) #${roomNosStr}.\nCheck-in: ${checkInDate.toISOString()} at ${checkInTime}\nCheck-out: ${checkOutDate.toISOString()} at ${checkOutTime}\nFood Plan: ${foodPlan}\nAdvance Paid: ${advancePaid}\n\nTicket ID: ${ticketId}\n\nWe look forward to your stay!\n- Hill View Eco Retreat`;
        MailApp.sendEmail({ to: bookingDetails.email, subject, body });
      }
    } catch (emailErr) {
      Logger.log(`Email failed for booking ${ticketId}: ${emailErr.message}`);
    }

    return {
      success: true,
      message: `Room(s) ${roomNosStr} booked successfully. Ticket ID: ${ticketId}`,
      ticketId
    };
  } catch (e) {
    Logger.log(`Error in bookRoom: ${e.toString()}`);
    return { success: false, message: `An error occurred: ${e.message}` };
  }
}

function checkoutRoom(ticketId, paymentOverride) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsData = bookingsSheet.getDataRange().getValues();
    const roomsData = roomsSheet.getDataRange().getValues();

    // Read default currency from settings
    let defaultCurrency = 'MVR';
    try {
      const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        
      }
    } catch (ce) { Logger.log("Could not load settings currency: " + ce); }

    let bookingRowIndex = -1;
    let roomNoToCheckout = "";
    let guestName = "";
    let email = "";
    let phone = "";
    let checkInDate, checkOutDate;
    let roomRate, discount, tax, paymentMethod;

    for (let i = 1; i < bookingsData.length; i++) {
      if (bookingsData[i][TICKET_ID_COL].toString() === ticketId.toString()) {
        let status = (bookingsData[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
        if (status === "completed" || status === "checked out") {
          return { success: false, message: `Ticket ID ${ticketId} has already been checked out.` };
        }
        bookingRowIndex = i;
        roomNoToCheckout = bookingsData[i][BOOKING_ROOM_NO_COL];
        guestName = bookingsData[i][GUEST_NAME_COL];
        phone = bookingsData[i][PHONE_COL];
        email = bookingsData[i][EMAIL_COL];
        checkInDate = new Date(bookingsData[i][CHECK_IN_COL]);
        checkOutDate = new Date(bookingsData[i][CHECK_OUT_COL]);
        roomRate = parseFloat(bookingsData[i][ROOM_RATE_BOOK_COL]) || 0;
        discount = parseFloat(bookingsData[i][DISCOUNT_COL]) || 0;
        tax = parseFloat(bookingsData[i][TAX_COL]) || 0;
        paymentMethod = (bookingsData[i][PAYMENT_METHOD_COL] || "Cash").toString();
        break;
      }
    }
    if (bookingRowIndex === -1) {
      return { success: false, message: `Ticket ID ${ticketId} not found.` };
    }

    let actualCheckOut = new Date();
    checkOutDate = actualCheckOut;

    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    let baseAmount = roomRate * nights;
    let finalAmount = (baseAmount - discount) + tax;

    // Handle payment data
    let amountPaid = 0;
    let paymentStatus = "Unpaid";
    if (paymentOverride) {
      amountPaid = parseFloat(paymentOverride.amountPaid) || 0;
      if (paymentOverride.paymentMethod) paymentMethod = paymentOverride.paymentMethod;
    }
    if (amountPaid >= finalAmount) paymentStatus = "Paid";
    else if (amountPaid > 0) paymentStatus = "Partial";
    let balance = finalAmount - amountPaid;

    bookingsSheet.getRange(bookingRowIndex + 1, CHECK_OUT_COL + 1).setValue(checkOutDate.toISOString());
    bookingsSheet.getRange(bookingRowIndex + 1, BOOKING_STATUS_COL + 1).setValue("Checked Out");
    bookingsSheet.getRange(bookingRowIndex + 1, TOTAL_AMOUNT_COL + 1).setValue(finalAmount);
    bookingsSheet.getRange(bookingRowIndex + 1, PAYMENT_METHOD_COL + 1).setValue(paymentMethod);
    bookingsSheet.getRange(bookingRowIndex + 1, PAYMENT_STATUS_COL + 1).setValue(paymentStatus);
    bookingsSheet.getRange(bookingRowIndex + 1, AMOUNT_PAID_COL + 1).setValue(amountPaid);

    let roomRowIndex = -1;
    for (let j = 1; j < roomsData.length; j++) {
      let rowRoomNo = (roomsData[j][ROOM_NO_COL] || "").toString();
      if (rowRoomNo === roomNoToCheckout.toString()) {
        roomRowIndex = j;
        break;
      }
    }
    if (roomRowIndex !== -1) {
      roomsSheet.getRange(roomRowIndex + 1, ROOM_STATUS_COL + 1).setValue("Available");
    }
    SpreadsheetApp.flush();

    let invoiceHtml = generateInvoiceHtml({
      ticketId,
      occupantName: guestName,
      email,
      roomNo: roomNoToCheckout,
      checkIn: checkInDate.toISOString(),
      checkOut: checkOutDate.toISOString(),
      nights,
      roomRate,
      discount,
      tax,
      finalAmount,
      currency: defaultCurrency
    });

    try {
      let subject = `Invoice for your stay: Ticket ${ticketId}`;
      let bodyText = `Hello ${guestName},\n\nThank you for staying with us. Total: ${defaultCurrency} ${finalAmount.toFixed(2)}\n\nSafe travels!`;
      MailApp.sendEmail({
        to: email,
        subject,
        body: bodyText,
        htmlBody: invoiceHtml
      });
    } catch (emailErr) {
      Logger.log(`Email failed for checkout ${ticketId}: ${emailErr.message}`);
    }

    return {
      success: true,
      message: `Room ${roomNoToCheckout} (Ticket: ${ticketId}) checked out successfully.`,
      invoiceHtml,
      invoiceData: {
        ticketId: ticketId,
        guestName: guestName,
        phone: phone,
        email: email,
        roomNo: roomNoToCheckout.toString(),
        checkIn: checkInDate.toISOString(),
        checkOut: checkOutDate.toISOString(),
        nights: nights,
        roomRate: roomRate,
        baseAmount: baseAmount,
        discount: discount,
        tax: tax,
        paymentMethod: paymentMethod,
        finalAmount: finalAmount,
        paymentStatus: paymentStatus,
        amountPaid: amountPaid,
        balance: balance
      }
    };
  } catch (e) {
    Logger.log(`Error in checkoutRoom: ${e.toString()}`);
    return { success: false, message: `An error occurred during checkout: ${e.message}` };
  }
}

function processCheckoutPayment(ticketId, amountPaid, paymentMethod) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
    const data = sheet.getDataRange().getValues();

    let rowIndex = -1;
    let roomRate = 0, discount = 0, tax = 0, checkInDate, checkOutDate;

    for (let i = 1; i < data.length; i++) {
      if (data[i][TICKET_ID_COL].toString() === ticketId.toString()) {
        let status = (data[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
        if (status === "checked out") {
          return { success: false, message: "Cannot update payment for a checked-out booking." };
        }
        rowIndex = i;
        checkInDate = new Date(data[i][CHECK_IN_COL]);
        checkOutDate = new Date(data[i][CHECK_OUT_COL]);
        roomRate = parseFloat(data[i][ROOM_RATE_BOOK_COL]) || 0;
        discount = parseFloat(data[i][DISCOUNT_COL]) || 0;
        tax = parseFloat(data[i][TAX_COL]) || 0;
        break;
      }
    }

    if (rowIndex === -1) {
      return { success: false, message: `Ticket ID ${ticketId} not found.` };
    }

    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    const finalAmount = (roomRate * nights) - discount + tax;
    const paid = parseFloat(amountPaid) || 0;

    let paymentStatus = "Unpaid";
    if (paid >= finalAmount) paymentStatus = "Paid";
    else if (paid > 0) paymentStatus = "Partial";

    sheet.getRange(rowIndex + 1, PAYMENT_STATUS_COL + 1).setValue(paymentStatus);
    sheet.getRange(rowIndex + 1, AMOUNT_PAID_COL + 1).setValue(paid);
    if (paymentMethod) {
      sheet.getRange(rowIndex + 1, PAYMENT_METHOD_COL + 1).setValue(paymentMethod);
    }

    try {
      syncCustomerProfile({
        phone: mobile,
        name: guestName,
        email: email,
        companyName: companyName,
        gstNumber: gstNumber
      });
    } catch(e) { Logger.log("Customer Sync Checkout Error: " + e.message); }

    SpreadsheetApp.flush();

    return {
      success: true,
      message: `Payment recorded: MVR ${paid.toFixed(2)} (${paymentStatus})`,
      paymentStatus,
      amountPaid: paid,
      balance: finalAmount - paid
    };
  } catch (e) {
    Logger.log(`Error in processCheckoutPayment: ${e.toString()}`);
    return { success: false, message: `An error occurred: ${e.message}` };
  }
}

function updateBooking(rowIndex, bookingData) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Bookings sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    // Read existing read-only fields
    const existingTicket = sheet.getRange(rowIndex, TICKET_ID_COL + 1).getValue();
    const existingRoomNo = sheet.getRange(rowIndex, BOOKING_ROOM_NO_COL + 1).getValue();
    const existingRate = parseFloat(sheet.getRange(rowIndex, ROOM_RATE_BOOK_COL + 1).getValue()) || 0;
    const existingStatus = (sheet.getRange(rowIndex, BOOKING_STATUS_COL + 1).getValue() || '').toString();
    const existingPaymentStatus = (sheet.getRange(rowIndex, PAYMENT_STATUS_COL + 1).getValue() || 'Unpaid').toString();
    const existingAmountPaid = parseFloat(sheet.getRange(rowIndex, AMOUNT_PAID_COL + 1).getValue()) || 0;

    // Only allow editing active bookings
    if (existingStatus.toLowerCase() === 'checked out') {
      return { success: false, message: "Cannot edit a checked-out booking." };
    }

    // Validate dates
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      return { success: false, message: "Invalid dates provided." };
    }
    if (checkOutDate <= checkInDate) {
      return { success: false, message: "Check-out must be after check-in." };
    }

    let totalRoomsCount = 0;
    let roomNosStr = bookingData.roomNos || existingRoomNo;
    let isTypeBooking = false;
    roomNosStr.split(',').forEach(r => {
      const match = r.trim().match(/(.+?)(?:\s*\((\d+)\))?$/);
      if (match && match[2]) {
        totalRoomsCount += parseInt(match[2], 10);
        isTypeBooking = true;
      } else if (r.trim() !== "") {
        totalRoomsCount += 1;
      }
    });

    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    const totalRoomRate = bookingData.roomRate !== undefined ? parseFloat(bookingData.roomRate) : existingRate;
    const finalAmount = bookingData.totalAmount !== undefined ? parseFloat(bookingData.totalAmount) : 0;
    const tax = bookingData.tax !== undefined ? parseFloat(bookingData.tax) : 0;
    
    // In updateBooking, discount is an absolute amount in DISCOUNT_COL, so we convert discountPercent to absolute
    const discountPercent = bookingData.discountPercent !== undefined ? parseFloat(bookingData.discountPercent) : 0;
    const discount = (totalRoomRate * totalRoomsCount * nights * discountPercent) / 100;
    const advancePaidInput = bookingData.advancePaid !== undefined ? parseFloat(bookingData.advancePaid) : existingAmountPaid;
    let paymentStatus = advancePaidInput >= finalAmount ? "Paid" : advancePaidInput > 0 ? "Partial" : "Unpaid";

    // Build complete row (28 columns)
    const existingCheckInTime = (sheet.getRange(rowIndex, CHECKIN_TIME_COL + 1).getValue() || '14:00').toString();
    const existingCheckOutTime = (sheet.getRange(rowIndex, CHECKOUT_TIME_COL + 1).getValue() || '12:00').toString();
    const existingFoodPlan = (sheet.getRange(rowIndex, FOOD_PLAN_COL + 1).getValue() || 'None').toString();
    const existingExtraPerson = parseInt(sheet.getRange(rowIndex, EXTRA_PERSON_COL + 1).getValue()) || 0;
    const existingLinkedCheckIn = (sheet.getRange(rowIndex, LINKED_CHECKIN_COL + 1).getValue() || '').toString();

    const row = [
      existingTicket,
      roomNosStr,
      (bookingData.guestName || '').trim(),
      (bookingData.phone || '').trim(),
      (bookingData.email || '').trim(),
      checkInDate.toISOString(),
      checkOutDate.toISOString(),
      existingStatus,
      totalRoomRate,
      discount,
      tax,
      bookingData.paymentMethod || 'Cash',
      finalAmount,
      paymentStatus,
      advancePaidInput,
      bookingData.checkInTime || existingCheckInTime,
      bookingData.checkOutTime || existingCheckOutTime,
      bookingData.foodPlan || existingFoodPlan,
      bookingData.extraPerson !== undefined ? parseInt(bookingData.extraPerson) : existingExtraPerson,
      advancePaidInput,
      totalRoomsCount,
      existingLinkedCheckIn,
      bookingData.gstType || 'Excluding',
      bookingData.fixRoomRent || 'No',
      parseFloat(bookingData.fixRoomRentAmount) || 0,
      discountPercent
    ];

    sheet.getRange(rowIndex, 1, 1, 26).setValues([row]);
    
    // Update room statuses for the new set of rooms
    if (existingStatus !== 'Cancelled' && existingStatus !== 'Checked Out') {
      const ss = SpreadsheetApp.openById(SS_ID);
      const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
      const roomsData = roomsSheet.getDataRange().getValues();
      
      // Free up old physical rooms first
      let oldRooms = existingRoomNo.split(',').map(r => r.trim()).filter(r => r);
      oldRooms.forEach(rn => {
        const isType = rn.match(/(.+?)(?:\s*\(\d+\))?$/) && rn.match(/(.+?)(?:\s*\(\d+\))?$/)[2];
        if (!isType) {
          for (let i = 1; i < roomsData.length; i++) {
            if ((roomsData[i][ROOM_NO_COL] || '').toString() === rn) {
              roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Available");
              break;
            }
          }
        }
      });
      
      // Book new physical rooms
      if (!isTypeBooking) {
        let newRooms = roomNosStr.split(',').map(r => r.trim()).filter(r => r);
        newRooms.forEach(rn => {
          for (let i = 1; i < roomsData.length; i++) {
            if ((roomsData[i][ROOM_NO_COL] || '').toString() === rn) {
              roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Booked");
              break;
            }
          }
        });
      }
    }

    SpreadsheetApp.flush();

    return { success: true, message: "Booking updated successfully." };
  } catch (err) {
    Logger.log("Error in updateBooking: " + err.toString());
    return { success: false, message: err.message };
  }
}

function deleteBooking(rowIndex) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Bookings sheet not found." };
    if (rowIndex <= 1 || rowIndex > sheet.getLastRow()) return { success: false, message: "Invalid row index." };

    const status = (sheet.getRange(rowIndex, BOOKING_STATUS_COL + 1).getValue() || '').toString().toLowerCase();
    if (status === 'checked out') {
      return { success: false, message: "Cannot delete a checked-out booking." };
    }

    // If booking was active (Booked), free all rooms (supports multi-room comma-separated)
    if (status === 'booked') {
      const roomNoStr = (sheet.getRange(rowIndex, BOOKING_ROOM_NO_COL + 1).getValue() || '').toString();
      if (roomNoStr) {
        const roomNosArr = roomNoStr.split(',').map(r => r.trim()).filter(r => r);
        const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
        if (roomsSheet) {
          const roomsData = roomsSheet.getDataRange().getValues();
          for (let j = 1; j < roomsData.length; j++) {
            let rn = (roomsData[j][ROOM_NO_COL] || '').toString();
            if (roomNosArr.indexOf(rn) !== -1) {
              roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Available");
            }
          }
        }
      }
    }

    sheet.deleteRow(rowIndex);
    SpreadsheetApp.flush();
    return { success: true, message: "Booking deleted successfully." };
  } catch (err) {
    Logger.log("Error in deleteBooking: " + err.toString());
    return { success: false, message: err.message };
  }
}

function generateInvoiceHtml(invoiceData) {
  let {
    ticketId,
    occupantName,
    email,
    roomNo,
    checkIn,
    checkOut,
    nights,
    roomRate,
    discount,
    tax,
    finalAmount,
    currency
  } = invoiceData;
  const cur = currency || 'MVR';

  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .invoice-container { max-width: 600px; margin: auto; border: 1px solid #ccc; padding: 20px; }
          h2, h3 { text-align: center; color: #001f3f; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 8px; border: 1px solid #ddd; text-align: left; }
          th { background: #001f3f; color: white; }
          .right { text-align: right; }
          .total { font-weight: bold; background: #f0f0f0; }
        </style>
      </head>
      <body>
        <div class="invoice-container">
          <h2>Hill View Eco Retreat - Invoice</h2>
          <p><strong>Ticket ID:</strong> ${ticketId}</p>
          <p><strong>Guest Name:</strong> ${occupantName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Room #:</strong> ${roomNo}</p>
          <p><strong>Check-in:</strong> ${checkIn}</p>
          <p><strong>Check-out:</strong> ${checkOut}</p>
          <p><strong>Nights Stayed:</strong> ${nights}</p>
          <hr>
          <table>
            <tr><th>Description</th><th class="right">Amount (${cur})</th></tr>
            <tr><td>Room Rate (${nights} night${nights > 1 ? 's' : ''} x ${cur} ${roomRate.toFixed(2)})</td><td class="right">${cur} ${(roomRate * nights).toFixed(2)}</td></tr>
            <tr><td>Discount</td><td class="right">- ${cur} ${discount.toFixed(2)}</td></tr>
            <tr><td>Tax</td><td class="right">${cur} ${tax.toFixed(2)}</td></tr>
            <tr class="total"><td>Total Amount</td><td class="right">${cur} ${finalAmount.toFixed(2)}</td></tr>
          </table>
          <hr>
          <p style="text-align:center;">Thank you for staying with us!</p>
        </div>
      </body>
    </html>
  `;
}

/***************************************************
 * CHECK-IN FUNCTIONS
 ***************************************************/

function generateCustomerId() {
  return "CUST-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
}

function generateCheckInId() {
  const ss = SpreadsheetApp.openById(SS_ID);
  const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
  let nextNum = 1;
  if (setSheet && setSheet.getLastRow() > 1) {
    nextNum = parseInt(setSheet.getRange(2, SET_NEXT_CHECKIN_COL + 1).getValue()) || 1;
    setSheet.getRange(2, SET_NEXT_CHECKIN_COL + 1).setValue(nextNum + 1);
  }
  return "CHK-" + String(nextNum).padStart(4, '0');
}

function generateBillNumber() {
  const ss = SpreadsheetApp.openById(SS_ID);
  const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
  let nextNum = 1;
  if (setSheet && setSheet.getLastRow() > 1) {
    nextNum = parseInt(setSheet.getRange(2, SET_NEXT_BILL_COL + 1).getValue()) || 1;
    setSheet.getRange(2, SET_NEXT_BILL_COL + 1).setValue(nextNum + 1);
  }
  return "BILL-" + String(nextNum).padStart(6, '0');
}

function addCheckIn(checkInData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const ciSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (!ciSheet) return { success: false, message: "CheckIn sheet not found. Run Setup Demo Data." };

    const checkInId = generateCheckInId();
    const now = new Date().toISOString();

    const roomNumbers = checkInData.roomNumbers || '';
    const roomNosArr = roomNumbers.split(',').map(r => r.trim()).filter(r => r);

    // Get room types for selected rooms
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const roomsData = roomsSheet.getDataRange().getValues();
    let roomTypes = [];
    for (let r = 0; r < roomNosArr.length; r++) {
      for (let i = 1; i < roomsData.length; i++) {
        if ((roomsData[i][ROOM_NO_COL] || '').toString() === roomNosArr[r]) {
          roomTypes.push((roomsData[i][ROOM_TYPE_COL] || '').toString());
          // Mark room as Booked
          roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Booked");
          break;
        }
      }
    }

    ciSheet.appendRow([
      checkInId,
      checkInData.linkedTicketId || '',
      checkInData.guestName || '',
      checkInData.companyName || '',
      checkInData.gstNumber || '',
      checkInData.identityProof || '',
      checkInData.mobile || '',
      checkInData.email || '',
      checkInData.address || '',
      checkInData.city || '',
      checkInData.state || '',
      checkInData.pinCode || '',
      checkInData.country || '',
      checkInData.purposeOfVisit || '',
      checkInData.checkInDate || '',
      checkInData.checkInTime || '14:00',
      checkInData.checkOutDate || '',
      checkInData.checkOutTime || '12:00',
      roomNumbers,
      roomTypes.join(','),
      roomNosArr.length,
      parseInt(checkInData.pax) || 1,
      checkInData.roomPaxBreakdown || '',
      parseFloat(checkInData.advancePaid) || 0,
      checkInData.paymentMethod || '',
      parseInt(checkInData.extraPerson) || 0,
      checkInData.foodPlan || 'None',
      checkInData.gstType || 'Excluding',
      checkInData.fixRoomRent || 'No',
      parseFloat(checkInData.fixRoomRentAmount) || 0,
      checkInData.billTo || 'Individual',
      parseFloat(checkInData.discountPercent) || 0,
      'Active',
      now,
      checkInData.billingFormat || 'Standard'
    ]);

    // If linked to advance booking, update booking status
    if (checkInData.linkedTicketId) {
      const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        if ((bData[i][TICKET_ID_COL] || '').toString() === checkInData.linkedTicketId) {
          bookingsSheet.getRange(i + 1, BOOKING_STATUS_COL + 1).setValue("Checked In");
          bookingsSheet.getRange(i + 1, LINKED_CHECKIN_COL + 1).setValue(checkInId);
          
          // Free old physical rooms that are no longer being used
          let oldRoomsStr = (bData[i][BOOKING_ROOM_NO_COL] || '').toString();
          let oldRooms = oldRoomsStr.split(',').map(r => r.trim()).filter(Boolean);

          oldRooms.forEach(rn => {
            const match = rn.match(/(.+?)(?:\s*\((\d+)\))?$/);
            const isType = match && match[2]; // Check if it was just a type request e.g., 'Cottage (1)'
            if (!isType && !roomNosArr.includes(rn)) {
              for (let j = 1; j < roomsData.length; j++) {
                if ((roomsData[j][ROOM_NO_COL] || '').toString() === rn) {
                  roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Available");
                  break;
                }
              }
            }
          });

          // Update the Booking record to reflect the final rooms chosen at the desk
          bookingsSheet.getRange(i + 1, BOOKING_ROOM_NO_COL + 1).setValue(roomNosArr.join(', '));
          bookingsSheet.getRange(i + 1, NUM_ROOMS_COL + 1).setValue(roomNosArr.length);

          break;
        }
      }
    }

    // Calculate initial daily rate for StaySegments
    let initialDailyRate = 0;
    if (checkInData.fixRoomRent === 'Yes') {
      initialDailyRate = parseFloat(checkInData.fixRoomRentAmount) || 0;
    } else {
      for (let r = 0; r < roomNosArr.length; r++) {
        for (let i = 1; i < roomsData.length; i++) {
          if ((roomsData[i][ROOM_NO_COL] || '').toString() === roomNosArr[r]) {
            initialDailyRate += parseFloat(roomsData[i][ROOM_RATE_COL]) || 0;
            break;
          }
        }
      }
    }

    // Append a new row to the StaySegments sheet
    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);
    if (staySegmentsSheet) {
      const newSegmentId = "SEG-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
      staySegmentsSheet.appendRow([
        newSegmentId,
        checkInId,
        roomNumbers,
        initialDailyRate,
        parseInt(checkInData.pax) || 1, // StaySegments uses total pax for historical record keeping
        checkInData.checkInDate,
        ""
      ]);
    }

    SpreadsheetApp.flush();
    
    // Attempt customer sync in background
    try {
      syncCustomerProfile({
        name: checkInData.guestName,
        phone: checkInData.mobile,
        email: checkInData.email,
        companyName: checkInData.companyName,
        gstNumber: checkInData.gstNumber,
        identityProof: checkInData.identityProof,
        address: checkInData.address,
        city: checkInData.city,
        state: checkInData.state,
        pinCode: checkInData.pinCode,
        country: checkInData.country
      });
    } catch(syncErr) {
      Logger.log("Silent customer sync fail: " + syncErr.message);
    }
    
    return { success: true, message: `Check-in successful. ID: ${checkInId}`, checkInId };
  } catch (e) {
    Logger.log("Error in addCheckIn: " + e.toString());
    return { success: false, message: e.message };
  }
}

function getActiveCheckInsWithStats() {
  try {
    autoExtendOverstayingCheckIns();
    const checkIns = getAllCheckIns();
    if (checkIns.error || !Array.isArray(checkIns)) return [];

    const activeCis = checkIns.filter(ci => ci.status === 'Active');

    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const restSheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);

    const roomsData = roomsSheet && roomsSheet.getLastRow() > 1 ? roomsSheet.getDataRange().getValues() : [];
    const restData = restSheet && restSheet.getLastRow() > 1 ? restSheet.getDataRange().getValues() : [];
    const segmentsData = staySegmentsSheet && staySegmentsSheet.getLastRow() > 1 ? staySegmentsSheet.getDataRange().getValues() : [];

    // Map room rates for quick lookup
    const roomRates = {};
    for (let i = 1; i < roomsData.length; i++) {
      const rNo = (roomsData[i][ROOM_NO_COL] || '').toString();
      const rate = parseFloat(roomsData[i][ROOM_RATE_COL]) || 0;
      roomRates[rNo] = rate;
    }

    const now = new Date();

    return activeCis.map(ci => {
      // Find StaySegments for this check-in
      const ciSegments = [];
      for (let i = 1; i < segmentsData.length; i++) {
        if ((segmentsData[i][SEG_CHECKIN_ID_COL] || '').toString() === ci.checkInId) {
          let sStart = new Date(segmentsData[i][SEG_START_DATE_COL]);
          if (isNaN(sStart.getTime())) sStart = new Date(ci.checkInDate);

          let endDateStr = (segmentsData[i][SEG_END_DATE_COL] || '').toString();
          let sEnd = endDateStr ? new Date(endDateStr) : now;
          if (isNaN(sEnd.getTime())) sEnd = now;

          // Default minimum of 1 night for calculating
          let sDays = daysBetween(sStart, sEnd);
          if (isNaN(sDays) || sDays < 1) sDays = 1;

          let rate = parseFloat(segmentsData[i][SEG_RATE_COL]) || 0;
          let roomNos = (segmentsData[i][SEG_ROOM_NOS_COL] || '').toString();

          ciSegments.push({
             roomNos: roomNos,
             rate: rate,
             nights: sDays,
             segmentTotal: rate * sDays
          });
        }
      }

      // Calculate nightsStayed based on billing format
      const nightsStayed = calculateStayDuration(ci.checkInDate, ci.checkInTime, now, null, ci.billingFormat);

      // Calculate liveRoomRent
      let liveRoomRent = 0;
      if (ciSegments.length > 0) {
        ciSegments.forEach(seg => {
          liveRoomRent += seg.segmentTotal;
        });
      } else {
        const assignedRooms = (ci.roomNumbers || '').split(',').map(r => r.trim()).filter(Boolean);
        assignedRooms.forEach(rn => {
          liveRoomRent += (roomRates[rn] || 0) * nightsStayed;
        });
      }

      // Calculate liveFoodBill
      let liveFoodBill = 0;
      for (let i = 1; i < restData.length; i++) {
        const cId = (restData[i][REST_CHECKIN_ID_COL] || '').toString();
        const status = (restData[i][REST_STATUS_COL] || '').toString();
        if (cId === ci.checkInId && status === 'Active') {
           liveFoodBill += parseFloat(restData[i][REST_TOTAL_AMOUNT_COL]) || 0;
        }
      }

      // Calculate liveBalance
      const advancePaid = parseFloat(ci.advancePaid) || 0;
      const liveBalance = (liveRoomRent + liveFoodBill) - advancePaid;

      return {
        ...ci,
        nightsStayed,
        liveRoomRent,
        liveFoodBill,
        liveBalance,
        staySegments: ciSegments
      };
    });
  } catch (e) {
    Logger.log("Error in getActiveCheckInsWithStats: " + e.toString());
    return [];
  }
}

function getAllCheckIns() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (!sheet || sheet.getLastRow() < 2) return [];
    const data = sheet.getDataRange().getValues();
    let checkIns = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      checkIns.push({
        rowIndex: i + 1,
        checkInId: (row[CI_ID_COL] || '').toString(),
        linkedTicketId: (row[CI_LINKED_TICKET_COL] || '').toString(),
        guestName: (row[CI_GUEST_NAME_COL] || '').toString(),
        companyName: (row[CI_COMPANY_COL] || '').toString(),
        gstNumber: (row[CI_GST_NUMBER_COL] || '').toString(),
        identityProof: (row[CI_IDENTITY_COL] || '').toString(),
        mobile: (row[CI_MOBILE_COL] || '').toString(),
        email: (row[CI_EMAIL_COL] || '').toString(),
        address: (row[CI_ADDRESS_COL] || '').toString(),
        city: (row[CI_CITY_COL] || '').toString(),
        state: (row[CI_STATE_COL] || '').toString(),
        pinCode: (row[CI_PINCODE_COL] || '').toString(),
        country: (row[CI_COUNTRY_COL] || '').toString(),
        purposeOfVisit: (row[CI_PURPOSE_COL] || '').toString(),
        checkInDate: (row[CI_CHECKIN_DATE_COL] || '').toString(),
        checkInTime: (row[CI_CHECKIN_TIME_COL] || '14:00').toString(),
        checkOutDate: (row[CI_CHECKOUT_DATE_COL] || '').toString(),
        checkOutTime: (row[CI_CHECKOUT_TIME_COL] || '12:00').toString(),
        roomNumbers: (row[CI_ROOM_NUMBERS_COL] || '').toString(),
        roomTypes: (row[CI_ROOM_TYPES_COL] || '').toString(),
        numberOfRooms: parseInt(row[CI_NUM_ROOMS_COL]) || 0,
        pax: parseInt(row[CI_PAX_COL]) || 1,
        roomPaxBreakdown: (row[CI_ROOM_PAX_BREAKDOWN_COL] || '').toString(),
        advancePaid: parseFloat(row[CI_ADVANCE_PAID_COL]) || 0,
        paymentMethod: (row[CI_PAYMENT_METHOD_COL] || '').toString(),
        extraPerson: parseInt(row[CI_EXTRA_PERSON_COL]) || 0,
        foodPlan: (row[CI_FOOD_PLAN_COL] || 'None').toString(),
        gstType: (row[CI_GST_TYPE_COL] || 'Excluding').toString(),
        fixRoomRent: (row[CI_FIX_RENT_COL] || 'No').toString(),
        fixRoomRentAmount: parseFloat(row[CI_FIX_RENT_AMT_COL]) || 0,
        billTo: (row[CI_BILL_TO_COL] || 'Individual').toString(),
        discountPercent: parseFloat(row[CI_DISCOUNT_COL]) || 0,
        status: (row[CI_STATUS_COL] || 'Active').toString(),
        createdAt: (row[CI_CREATED_AT_COL] || '').toString(),
        billingFormat: (row[CI_BILLING_FORMAT_COL] || 'Standard').toString()
      });
    }
    return checkIns;
  } catch (e) {
    Logger.log("Error in getAllCheckIns: " + e.toString());
    return { error: e.message };
  }
}

function getCheckInByRoomNo(roomNo) {
  try {
    const checkIns = getActiveCheckInsWithStats();
    if (!checkIns.error && Array.isArray(checkIns)) {
      for (let i = 0; i < checkIns.length; i++) {
        if (checkIns[i].status === 'Active') {
          let rooms = (checkIns[i].roomNumbers || '').split(',').map(r => r.trim());
          if (rooms.indexOf(roomNo.toString().trim()) !== -1) {
            return checkIns[i];
          }
        }
      }
    }
    // Fallback: search Bookings for a room with active booking but no check-in record
    const ss = SpreadsheetApp.openById(SS_ID);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    if (bookingsSheet && bookingsSheet.getLastRow() > 1) {
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        let bStatus = (bData[i][BOOKING_STATUS_COL] || '').toString();
        if (bStatus !== 'Booked' && bStatus !== 'Checked In') continue;
        let bRooms = (bData[i][BOOKING_ROOM_NO_COL] || '').toString().split(',').map(r => r.trim());
        if (bRooms.indexOf(roomNo.toString().trim()) !== -1) {
          return {
            checkInId: (bData[i][TICKET_ID_COL] || '').toString(),
            linkedTicketId: (bData[i][TICKET_ID_COL] || '').toString(),
            guestName: (bData[i][GUEST_NAME_COL] || '').toString(),
            companyName: '', gstNumber: '', identityProof: '',
            mobile: (bData[i][PHONE_COL] || '').toString(),
            email: (bData[i][EMAIL_COL] || '').toString(),
            address: '',
            purposeOfVisit: '',
            checkInDate: (bData[i][CHECK_IN_COL] || '').toString(),
            checkInTime: (bData[i][CHECKIN_TIME_COL] || '14:00').toString(),
            checkOutDate: (bData[i][CHECK_OUT_COL] || '').toString(),
            checkOutTime: (bData[i][CHECKOUT_TIME_COL] || '12:00').toString(),
            roomNumbers: (bData[i][BOOKING_ROOM_NO_COL] || '').toString(),
            roomTypes: '',
            numberOfRooms: parseInt(bData[i][NUM_ROOMS_COL]) || 1,
            pax: 1,
            roomPaxBreakdown: '',
            advancePaid: parseFloat(bData[i][ADVANCE_PAID_COL]) || 0,
            paymentMethod: '', // Fallback safely
            extraPerson: parseInt(bData[i][EXTRA_PERSON_COL]) || 0,
            foodPlan: (bData[i][FOOD_PLAN_COL] || 'None').toString(),
            gstType: 'Excluding', fixRoomRent: 'No', fixRoomRentAmount: 0,
            billTo: 'Individual',
            discountPercent: parseFloat(bData[i][DISCOUNT_COL]) || 0,
            status: 'Active', createdAt: '', isFromBooking: true,
            billingFormat: 'Standard'
          };
        }
      }
    }
    return null;
  } catch (e) {
    Logger.log("Error in getCheckInByRoomNo: " + e.toString());
    return null;
  }
}

function searchBookingsByGuestName(query) {
  try {
    const bookings = getAllBookings();
    if (bookings.error) return [];
    let q = (query || '').toLowerCase().trim();
    if (!q) return [];
    return bookings.filter(b => {
      return b.status.toLowerCase() === 'booked' && b.guestName.toLowerCase().indexOf(q) !== -1;
    });
  } catch (e) {
    Logger.log("Error in searchBookingsByGuestName: " + e.toString());
    return [];
  }
}

function getBookingByTicketId(ticketId) {
  try {
    const bookings = getAllBookings();
    if (bookings.error) return null;
    for (let i = 0; i < bookings.length; i++) {
      if (bookings[i].ticketId === ticketId) return bookings[i];
    }
    return null;
  } catch (e) {
    Logger.log("Error in getBookingByTicketId: " + e.toString());
    return null;
  }
}

function updateCheckIn(rowIndex, checkInData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (!sheet) return { success: false, message: "CheckIn sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    const existingId = sheet.getRange(rowIndex, CI_ID_COL + 1).getValue();
    const existingLinked = sheet.getRange(rowIndex, CI_LINKED_TICKET_COL + 1).getValue();
    const existingStatus = sheet.getRange(rowIndex, CI_STATUS_COL + 1).getValue();
    const existingCreatedAt = sheet.getRange(rowIndex, CI_CREATED_AT_COL + 1).getValue();

    const roomNumbers = checkInData.roomNumbers || '';
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const roomsData = roomsSheet.getDataRange().getValues();
    let roomNosArr = roomNumbers.split(',').map(r => r.trim()).filter(r => r);
    let roomTypes = [];
    for (let r = 0; r < roomNosArr.length; r++) {
      for (let i = 1; i < roomsData.length; i++) {
        if ((roomsData[i][ROOM_NO_COL] || '').toString() === roomNosArr[r]) {
          roomTypes.push((roomsData[i][ROOM_TYPE_COL] || '').toString());
          break;
        }
      }
    }

    const row = [
      existingId, existingLinked,
      checkInData.guestName || '', checkInData.companyName || '', checkInData.gstNumber || '',
      checkInData.identityProof || '', checkInData.mobile || '', checkInData.email || '',
      checkInData.address || '', checkInData.city || '', checkInData.state || '', checkInData.pinCode || '', checkInData.country || '', 
      checkInData.purposeOfVisit || '', checkInData.checkInDate || '', checkInData.checkInTime || '14:00',
      checkInData.checkOutDate || '', checkInData.checkOutTime || '12:00',
      roomNumbers, roomTypes.join(','), roomNosArr.length,
      parseInt(checkInData.pax) || 1, checkInData.roomPaxBreakdown || '',
      parseFloat(checkInData.advancePaid) || 0,
      checkInData.paymentMethod || '',
      parseInt(checkInData.extraPerson) || 0, checkInData.foodPlan || 'None',
      checkInData.gstType || 'Excluding', checkInData.fixRoomRent || 'No',
      parseFloat(checkInData.fixRoomRentAmount) || 0, checkInData.billTo || 'Individual',
      parseFloat(checkInData.discountPercent) || 0, existingStatus, existingCreatedAt,
      checkInData.billingFormat || 'Standard'
    ];

    sheet.getRange(rowIndex, 1, 1, 35).setValues([row]);
    SpreadsheetApp.flush();
    return { success: true, message: "Check-in updated successfully." };
  } catch (e) {
    Logger.log("Error in updateCheckIn: " + e.toString());
    return { success: false, message: e.message };
  }
}

/***************************************************
 * RESTAURANT FUNCTIONS
 ***************************************************/

function generateOrderId() {
  return "ORD-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
}

function addFoodOrder(orderData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    if (!sheet) return { success: false, message: "Restaurant sheet not found. Run Setup Demo Data." };

    const orderId = generateOrderId();
    const now = new Date().toISOString();

    // Ensure roomNo supports comma-separated string if it's an array
    let roomNos = orderData.roomNo;
    if (Array.isArray(roomNos)) {
      roomNos = roomNos.join(', ');
    } else if (typeof roomNos !== 'string') {
      roomNos = (roomNos || '').toString();
    }

    // The new logic requires processing an array of items to prevent concurrency faults
    // If frontend sends legacy single-item payload, wrap it in an array to maintain backwards compatibility
    const items = Array.isArray(orderData.items) ? orderData.items : [{
      itemName: orderData.description || '',
      quantity: orderData.quantity || 1,
      defaultPrice: orderData.rate || orderData.amount || 0,
      totalAmount: orderData.amount || 0
    }];

    items.forEach(item => {
      sheet.appendRow([
        orderId,
        orderData.checkInId || '',
        roomNos,
        orderData.orderDate || now.split('T')[0],
        orderData.category || 'FoodBeverage',
        item.itemName || '',
        parseInt(item.quantity) || 1,
        parseFloat(item.defaultPrice) || 0,
        parseFloat(item.totalAmount) || 0,
        'Active',
        '',
        'Admin'
      ]);
    });
    SpreadsheetApp.flush();
    return { success: true, message: "Order added successfully.", orderId };
  } catch (e) {
    Logger.log("Error in addFoodOrder: " + e.toString());
    return { success: false, message: e.message };
  }
}

function getAllFoodOrders() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    if (!sheet || sheet.getLastRow() < 2) return [];
    const data = sheet.getDataRange().getValues();
    let orders = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      orders.push({
        rowIndex: i + 1,
        orderId: (row[REST_ORDER_ID_COL] || '').toString(),
        roomNo: (row[REST_ROOM_NO_COL] || '').toString(),
        checkInId: (row[REST_CHECKIN_ID_COL] || '').toString(),
        orderDate: (row[REST_ORDER_DATE_COL] || '').toString(),
        mealPeriod: (row[REST_MEAL_PERIOD_COL] || '').toString(),
        itemName: (row[REST_ITEM_NAME_COL] || '').toString(),
        quantity: parseInt(row[REST_QUANTITY_COL]) || 1,
        rate: parseFloat(row[REST_RATE_COL]) || 0,
        totalAmount: parseFloat(row[REST_TOTAL_AMOUNT_COL]) || 0,
        status: (row[REST_STATUS_COL] || 'Active').toString(),
        addedBy: (row[REST_ADDED_BY_COL] || '').toString(),

        // Backward compatibility properties needed by unmodified frontend code
        category: (row[REST_MEAL_PERIOD_COL] || '').toString(),
        description: (row[REST_ITEM_NAME_COL] || '').toString(),
        amount: parseFloat(row[REST_TOTAL_AMOUNT_COL]) || 0
      });
    }
    return orders;
  } catch (e) {
    Logger.log("Error in getAllFoodOrders: " + e.toString());
    return { error: e.message };
  }
}

function getFoodOrdersByCheckIn(checkInId) {
  try {
    const all = getAllFoodOrders();
    if (all.error) return [];
    return all.filter(o => o.checkInId === checkInId && o.status === 'Active');
  } catch (e) {
    return [];
  }
}

function getFoodOrdersByRoom(roomNo) {
  try {
    const all = getAllFoodOrders();
    if (all.error) return [];
    return all.filter(o => o.roomNo === roomNo.toString() && o.status === 'Active');
  } catch (e) {
    return [];
  }
}

function updateFoodOrder(rowIndex, orderData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    if (!sheet) return { success: false, message: "Restaurant sheet not found." };

    const existingId = sheet.getRange(rowIndex, REST_ORDER_ID_COL + 1).getValue();
    const existingCreated = sheet.getRange(rowIndex, REST_CREATED_AT_COL + 1).getValue();

    // Ensure roomNo supports comma-separated string if it's an array
    let roomNos = orderData.roomNo;
    if (Array.isArray(roomNos)) {
      roomNos = roomNos.join(', ');
    } else if (typeof roomNos !== 'string') {
      roomNos = (roomNos || '').toString();
    }

    const row = [
      existingId,
      orderData.checkInId || '',
      roomNos,
      orderData.orderDate || '',
      orderData.category || 'FoodBeverage',
      orderData.description || '',
      parseInt(orderData.quantity) || 1,
      parseFloat(orderData.rate) || parseFloat(orderData.amount) || 0,
      parseFloat(orderData.amount) || 0,
      orderData.status || 'Active',
      '',
      'Admin'
    ];
    sheet.getRange(rowIndex, 1, 1, 12).setValues([row]);
    SpreadsheetApp.flush();
    return { success: true, message: "Order updated successfully." };
  } catch (e) {
    Logger.log("Error in updateFoodOrder: " + e.toString());
    return { success: false, message: e.message };
  }
}

function deleteFoodOrder(rowIndex) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    if (!sheet) return { success: false, message: "Restaurant sheet not found." };
    if (rowIndex <= 1 || rowIndex > sheet.getLastRow()) return { success: false, message: "Invalid row." };
    sheet.deleteRow(rowIndex);
    SpreadsheetApp.flush();
    return { success: true, message: "Order deleted successfully." };
  } catch (e) {
    Logger.log("Error in deleteFoodOrder: " + e.toString());
    return { success: false, message: e.message };
  }
}

function getActiveCheckInRooms() {
  try {
    const checkIns = getAllCheckIns();
    if (checkIns.error) return [];
    let rooms = [];
    checkIns.forEach(ci => {
      if (ci.status === 'Active') {
        let roomNos = ci.roomNumbers.split(',').map(r => r.trim()).filter(r => r);
        roomNos.forEach(rn => {
          rooms.push({ roomNo: rn, checkInId: ci.checkInId, guestName: ci.guestName });
        });
      }
    });
    return rooms;
  } catch (e) {
    return [];
  }
}

/***************************************************
 * CHECKOUT FUNCTIONS (REVAMPED)
 ***************************************************/

function processWalkinCheckout(guestName, orderIds, checkoutData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const restSheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    const invSheet = ss.getSheetByName(INVOICES_SHEET_NAME);

    if (!restSheet || !invSheet) return { success: false, message: "Required sheets not found." };

    const restData = restSheet.getDataRange().getValues();
    let selectedOrders = [];
    let totalFooding = 0;

    // 1. Collect orders and calculate sum
    for (let i = 1; i < restData.length; i++) {
      let oId = (restData[i][REST_ORDER_ID_COL] || '').toString();
      if (orderIds.includes(oId) && (restData[i][REST_STATUS_COL] || '').toString() === 'Active') {
        let amt = parseFloat(restData[i][REST_TOTAL_AMOUNT_COL]) || 0;
        let desc = (restData[i][REST_ITEM_NAME_COL] || '').toString();
        let qty = parseInt(restData[i][REST_QUANTITY_COL]) || 1;
        let rate = parseFloat(restData[i][REST_RATE_COL]) || 0;
        let cat = (restData[i][REST_MEAL_PERIOD_COL] || '').toString();
        selectedOrders.push({ rowIndex: i, orderId: oId, description: desc, amount: amt, quantity: qty, rate: rate, category: cat });
        totalFooding += amt;
      }
    }

    if (selectedOrders.length === 0) return { success: false, message: "No active orders found." };

    // 2. Billing Math
    let sgstPercent = parseFloat(checkoutData.sgstPercent) || 0;
    let cgstPercent = parseFloat(checkoutData.cgstPercent) || 0;

    let taxDivisor = checkoutData.gstType === 'Including' ? (1 + ((sgstPercent + cgstPercent) / 100)) : 1;
    if (taxDivisor > 1) {
      totalFooding = totalFooding / taxDivisor;
      selectedOrders.forEach(o => {
        o.amount = o.amount / taxDivisor;
      });
    }

    let discountPercent = parseFloat(checkoutData.discountPercent) || 0;
    let discountAmount = totalFooding * (discountPercent / 100);
    let afterDiscount = totalFooding - discountAmount;

    let sgstAmount = afterDiscount * (sgstPercent / 100);
    let cgstAmount = afterDiscount * (cgstPercent / 100);

    let billAmount = afterDiscount + sgstAmount + cgstAmount;
    let paymentMode = checkoutData.paymentMode || 'Cash';

    // Read Settings
    let hotelName = 'Hill View Eco Retreat', hotelAddress = '', hotelPhone = '', hotelEmail = '', hotelTIN = '', defaultCurrency = 'MVR', hotelLogo = '';
    try {
      const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        const setRow = setSheet.getRange(2, 1, 1, setSheet.getLastColumn()).getValues()[0];
        hotelName = (setRow[SET_HOTEL_NAME_COL] || 'Hill View Eco Retreat').toString();
        hotelAddress = (setRow[SET_HOTEL_ADDRESS_COL] || '').toString();
        hotelPhone = (setRow[SET_HOTEL_PHONE_COL] || '').toString();
        hotelEmail = (setRow[SET_HOTEL_EMAIL_COL] || '').toString();
        hotelTIN = (setRow[SET_HOTEL_TIN_COL] || '').toString();
        
        hotelLogo = (setRow[SET_LOGO_URL_COL] || '').toString();
      }
    } catch (e) {}

    const billNumber = generateBillNumber();
    const nowStr = new Date().toISOString();

    // 3. Database Updates
    if (!checkoutData.isPreview) {
      selectedOrders.forEach(o => {
         restSheet.getRange(o.rowIndex + 1, REST_STATUS_COL + 1).setValue("Billed");
         restSheet.getRange(o.rowIndex + 1, REST_BILLED_CHECKIN_ID_COL + 1).setValue(billNumber);
      });

      const invoiceItems = selectedOrders.map(o => ({ description: o.description, category: o.category, quantity: o.quantity, rate: o.rate, amount: o.amount }));

      const invoiceRow = new Array(20).fill('');
      invoiceRow[0] = billNumber;
      invoiceRow[1] = guestName;
      invoiceRow[2] = "";
      invoiceRow[3] = "";
      invoiceRow[4] = "";
      invoiceRow[5] = defaultCurrency;
      invoiceRow[6] = nowStr;
      invoiceRow[7] = nowStr;
      invoiceRow[8] = checkoutData.paymentStatus === 'Credit' ? 'Unpaid' : (checkoutData.paymentStatus === 'Partial' ? 'Partial' : 'Paid');
      invoiceRow[9] = JSON.stringify(invoiceItems);
      invoiceRow[10] = totalFooding;
      invoiceRow[11] = true;
      invoiceRow[12] = sgstPercent + cgstPercent;
      invoiceRow[13] = sgstAmount + cgstAmount;
      invoiceRow[14] = discountAmount;
      invoiceRow[15] = billAmount;
      invoiceRow[16] = "Walk-in POS Bill";
      invoiceRow[17] = "";
      invoiceRow[18] = "System";
      invoiceRow[19] = nowStr;

      invSheet.appendRow(invoiceRow);

      SpreadsheetApp.flush();
    }

    // 5. Construct invoiceData for frontend
    let syntheticDayByDay = [{
      date: nowStr.split('T')[0],
      rooms: 0,
      extraBed: 0,
      foodBev: totalFooding,
      laundry: 0,
      dayTotal: totalFooding,
      grandTotal: totalFooding
    }];

    return {
      success: true,
      message: checkoutData.isPreview ? "Preview generated." : "Walk-in Checkout completed successfully.",
      invoiceData: {
        billNumber,
        checkInId: "Walk-in",
        guestName: guestName,
        companyName: "",
        gstNumber: "",
        mobile: "",
        email: "",
        address: "",
        billTo: "Individual",
        checkInDate: nowStr,
        checkInTime: "",
        checkOutDate: nowStr,
        checkOutTime: "",
        foodPlan: "None",
        pax: 1,
        numberOfRooms: 0,
        roomNumbers: "",
        dayByDay: syntheticDayByDay,
        subtotal: totalFooding,
        discountPercent,
        discountAmount,
        sgstPercent,
        sgstAmount,
        cgstPercent,
        cgstAmount,
        gstType: checkoutData.gstType,
        billAmount,
        advancePaid: 0,
        netAmount: billAmount,
        items: selectedOrders.map(o => ({ description: o.description, category: o.category, quantity: o.quantity, rate: o.rate, amount: o.amount })),
        hotelName, hotelAddress, hotelPhone, hotelEmail, hotelTIN, hotelLogo
      }
    };
  } catch (e) {
    Logger.log("Error in processWalkinCheckout: " + e.toString());
    return { success: false, message: e.message };
  }
}

function processFullCheckout(checkInId, checkoutData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const ciSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    const restSheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);

    // Find check-in record
    const ciData = ciSheet ? ciSheet.getDataRange().getValues() : [[]];
    let ciRowIndex = -1;
    let ci = null;
    for (let i = 1; i < ciData.length; i++) {
      if ((ciData[i][CI_ID_COL] || '').toString() === checkInId) {
        if ((ciData[i][CI_STATUS_COL] || '').toString() === 'Checked Out') {
          return { success: false, message: "This check-in has already been checked out." };
        }
        ciRowIndex = i;
        ci = ciData[i];
        break;
      }
    }
    // Fallback: if no CheckIn record, build from Bookings (booking-only guest)
    if (ciRowIndex === -1 && bookingsSheet && bookingsSheet.getLastRow() > 1) {
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        if ((bData[i][TICKET_ID_COL] || '').toString() === checkInId) {
          let bStatus = (bData[i][BOOKING_STATUS_COL] || '').toString();
          if (bStatus === 'Checked Out') return { success: false, message: "This booking has already been checked out." };
          ci = new Array(34).fill('');
          ci[CI_ID_COL]            = checkInId;
          ci[CI_LINKED_TICKET_COL] = checkInId;
          ci[CI_GUEST_NAME_COL]    = (bData[i][GUEST_NAME_COL] || '').toString();
          ci[CI_MOBILE_COL]        = (bData[i][PHONE_COL] || '').toString();
          ci[CI_EMAIL_COL]         = (bData[i][EMAIL_COL] || '').toString();
          ci[CI_ADDRESS_COL]       = '';
          ci[CI_CITY_COL]          = '';
          ci[CI_STATE_COL]         = '';
          ci[CI_PINCODE_COL]       = '';
          ci[CI_COUNTRY_COL]       = '';
          ci[CI_CHECKIN_DATE_COL]  = (bData[i][CHECK_IN_COL] || '').toString();
          ci[CI_CHECKIN_TIME_COL]  = (bData[i][CHECKIN_TIME_COL] || '14:00').toString();
          ci[CI_CHECKOUT_DATE_COL] = (bData[i][CHECK_OUT_COL] || '').toString();
          ci[CI_CHECKOUT_TIME_COL] = (bData[i][CHECKOUT_TIME_COL] || '12:00').toString();
          ci[CI_ROOM_NUMBERS_COL]  = (bData[i][BOOKING_ROOM_NO_COL] || '').toString();
          ci[CI_NUM_ROOMS_COL]     = parseInt(bData[i][NUM_ROOMS_COL]) || 1;
          ci[CI_PAX_COL]           = 1;
          ci[CI_ROOM_PAX_BREAKDOWN_COL] = ''; // Not supported natively in advance bookings yet
          ci[CI_ADVANCE_PAID_COL]  = parseFloat(bData[i][ADVANCE_PAID_COL]) || 0;
          ci[CI_PAYMENT_METHOD_COL] = ''; // Set to blank as requested to prevent mapping errors
          ci[CI_EXTRA_PERSON_COL]  = parseInt(bData[i][EXTRA_PERSON_COL]) || 0;
          ci[CI_FOOD_PLAN_COL]     = (bData[i][FOOD_PLAN_COL] || 'None').toString();
          ci[CI_GST_TYPE_COL]      = 'Excluding';
          ci[CI_FIX_RENT_COL]      = 'No';
          ci[CI_FIX_RENT_AMT_COL]  = 0;
          ci[CI_BILL_TO_COL]       = 'Individual';
          ci[CI_DISCOUNT_COL]      = parseFloat(bData[i][DISCOUNT_COL]) || 0;
          ci[CI_STATUS_COL]        = 'Active';
          ciRowIndex = -2; // Booking-only path — no CheckIn sheet row to write back
          break;
        }
      }
    }
    if (!ci) return { success: false, message: "No check-in or booking record found." };

    // Read settings for GST
    let gstPercent = 5;
    let hotelName = 'Hill View Eco Retreat', hotelAddress = '', hotelPhone = '', hotelEmail = '', hotelTIN = '', hotelLogo = '', defaultCurrency = 'MVR';
    try {
      const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        const setRow = setSheet.getRange(2, 1, 1, setSheet.getLastColumn()).getValues()[0];
        hotelName = (setRow[SET_HOTEL_NAME_COL] || 'Hill View Eco Retreat').toString();
        hotelAddress = (setRow[SET_HOTEL_ADDRESS_COL] || '').toString();
        hotelPhone = (setRow[SET_HOTEL_PHONE_COL] || '').toString();
        hotelEmail = (setRow[SET_HOTEL_EMAIL_COL] || '').toString();
        hotelTIN = (setRow[SET_HOTEL_TIN_COL] || '').toString();
        hotelLogo = (setRow[SET_LOGO_URL_COL] || '').toString();
        
        gstPercent = parseFloat(setRow[SET_GST_DEFAULT_COL]) || 5;
      }
    } catch (se) { Logger.log("Settings read error: " + se); }

    const guestName = (ci[CI_GUEST_NAME_COL] || '').toString();
    const companyName = (ci[CI_COMPANY_COL] || '').toString();
    const gstNumber = (ci[CI_GST_NUMBER_COL] || '').toString();
    const mobile = (ci[CI_MOBILE_COL] || '').toString();
    const email = (ci[CI_EMAIL_COL] || '').toString();
    const address = (ci[CI_ADDRESS_COL] || '').toString();
    const city = (ci[CI_CITY_COL] || '').toString();
    const state = (ci[CI_STATE_COL] || '').toString();
    const pinCode = (ci[CI_PINCODE_COL] || '').toString();
    const country = (ci[CI_COUNTRY_COL] || '').toString();
    const roomNumbers = (ci[CI_ROOM_NUMBERS_COL] || '').toString();
    const roomTypes = (ci[CI_ROOM_TYPES_COL] || '').toString();
    const pax = parseInt(ci[CI_PAX_COL]) || 1;
    const extraPerson = parseInt(ci[CI_EXTRA_PERSON_COL]) || 0;
    const advancePaid = parseFloat(ci[CI_ADVANCE_PAID_COL]) || 0;
    const foodPlan = (ci[CI_FOOD_PLAN_COL] || 'None').toString();
    const gstType = (ci[CI_GST_TYPE_COL] || 'Excluding').toString();
    const fixRoomRent = (ci[CI_FIX_RENT_COL] || 'No').toString();
    const fixRoomRentAmount = parseFloat(ci[CI_FIX_RENT_AMT_COL]) || 0;
    const billTo = (ci[CI_BILL_TO_COL] || 'Individual').toString();
    const discountPercent = parseFloat(ci[CI_DISCOUNT_COL]) || 0;

    const checkInDate = new Date(ci[CI_CHECKIN_DATE_COL]);
    const checkInTime = (ci[CI_CHECKIN_TIME_COL] || '14:00').toString();
    const actualCheckOutDate = checkoutData.checkOutDate ? new Date(checkoutData.checkOutDate) : new Date();
    const checkOutTime = checkoutData.checkOutTime || (ci[CI_CHECKOUT_TIME_COL] || '12:00').toString();
    const billingFormat = (ci[CI_BILLING_FORMAT_COL] || 'Standard').toString();

    let nights = calculateStayDuration(
      ci[CI_CHECKIN_DATE_COL],
      ci[CI_CHECKIN_TIME_COL],
      actualCheckOutDate,
      checkOutTime,
      billingFormat
    );
    if (isNaN(nights) || nights < 1) { nights = 1; }

    // Calculate room rent using StaySegments if available
    let roomNosArr = roomNumbers.split(',').map(r => r.trim()).filter(r => r);
    let dailyRoomRate = 0; // Legacy fallback calculation
    if (fixRoomRent === 'Yes' && fixRoomRentAmount > 0) {
      dailyRoomRate = fixRoomRentAmount;
    } else {
      const roomsData = roomsSheet.getDataRange().getValues();
      for (let r = 0; r < roomNosArr.length; r++) {
        for (let j = 1; j < roomsData.length; j++) {
          if ((roomsData[j][ROOM_NO_COL] || '').toString() === roomNosArr[r]) {
            dailyRoomRate += parseFloat(roomsData[j][ROOM_RATE_COL]) || 0;
            break;
          }
        }
      }
    }
    let totalRoomRent = 0;
    let staySegments = [];

    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);
    if (staySegmentsSheet) {
      const segmentsData = staySegmentsSheet.getDataRange().getValues();
      for (let i = 1; i < segmentsData.length; i++) {
        if ((segmentsData[i][SEG_CHECKIN_ID_COL] || '').toString() === checkInId.toString()) {
          let segStartDateStr = (segmentsData[i][SEG_START_DATE_COL] || '').toString();
          let segEndDateStr = (segmentsData[i][SEG_END_DATE_COL] || '').toString();
          
          if (!segEndDateStr) {
             // Close the active segment
             segEndDateStr = actualCheckOutDate.toISOString();
             staySegmentsSheet.getRange(i + 1, SEG_END_DATE_COL + 1).setValue(segEndDateStr);
          }

          if (segStartDateStr && segEndDateStr) {
            let segStartDate = new Date(segStartDateStr);
            let segEndDate = new Date(segEndDateStr);
            // Ensure minimum of 1 night for the overall stay, but 0-night segments are possible if swapped same day
            let segNights = daysBetween(segStartDate, segEndDate);
            if (isNaN(segNights) || segNights < 1) segNights = 1;

            let segRate = parseFloat(segmentsData[i][SEG_RATE_COL]) || 0;
            
            staySegments.push({
              startDate: segStartDate,
              endDate: segEndDate,
              nights: segNights,
              rate: segRate,
              roomNos: (segmentsData[i][SEG_ROOM_NOS_COL] || '').toString(),
              pax: parseInt(segmentsData[i][SEG_PAX_COL]) || 1
            });
          }
        }
      }
      
      // Calculate total rent based on actual segments
      if (staySegments.length === 1 && staySegments[0].nights === 0 && nights === 1) {
        staySegments[0].nights = 1;
      }
      
      for (let s of staySegments) {
        totalRoomRent += s.rate * s.nights;
      }
    }

    // Fallback to legacy calculation if no segments found
    if (staySegments.length === 0) {
      totalRoomRent = dailyRoomRate * nights;
      staySegments.push({
        startDate: checkInDate,
        endDate: actualCheckOutDate,
        nights: nights,
        rate: dailyRoomRate,
        roomNos: roomNumbers,
        pax: pax
      });
    }

    // Get food/service orders by category for day-by-day breakdown
    let foodOrders = [];
    if (restSheet && restSheet.getLastRow() > 1) {
      const restData = restSheet.getDataRange().getValues();
      for (let i = 1; i < restData.length; i++) {
        if ((restData[i][REST_CHECKIN_ID_COL] || '').toString() === checkInId && (restData[i][REST_STATUS_COL] || '').toString() === 'Active') {
          let oDateObj = new Date(restData[i][REST_ORDER_DATE_COL]);
          let y = oDateObj.getFullYear();
          let m = String(oDateObj.getMonth() + 1).padStart(2, '0');
          let d = String(oDateObj.getDate()).padStart(2, '0');
          let cleanOrderDate = y + '-' + m + '-' + d;

          foodOrders.push({
            orderDate: cleanOrderDate,
            category: (restData[i][REST_MEAL_PERIOD_COL] || '').toString(),
            description: (restData[i][REST_ITEM_NAME_COL] || '').toString(),
            amount: parseFloat(restData[i][REST_TOTAL_AMOUNT_COL]) || 0
          });
        }
      }
    }

    // Sum food charges by category
    let totalFooding = 0;
    let totalExtraBed = 0;
    let totalOtherServices = 0;
    let categoryTotals = {};
    foodOrders.forEach(o => {
      categoryTotals[o.category] = (categoryTotals[o.category] || 0) + o.amount;

      if (['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'FoodBeverage'].includes(o.category)) {
        totalFooding += o.amount;
        o.mappedCategory = 'FoodBeverage'; // used in dayByDay generator
      } else if (o.category === 'ExtraBed') {
        totalExtraBed += o.amount;
        o.mappedCategory = 'ExtraBed';
      } else {
        totalOtherServices += o.amount;
        o.mappedCategory = o.category;
      }
    });

    // Calculate global Extra Bed total before subtotal
    let totalExtraBedCalculated = nights * extraPerson * DEFAULT_EXTRA_PERSON_RATE;

    let taxDivisor = gstType === 'Including' ? (1 + (gstPercent / 100)) : 1;
    if (taxDivisor > 1) {
      totalRoomRent = totalRoomRent / taxDivisor;
      totalFooding = totalFooding / taxDivisor;
      totalExtraBed = totalExtraBed / taxDivisor;
      totalOtherServices = totalOtherServices / taxDivisor;
      totalExtraBedCalculated = totalExtraBedCalculated / taxDivisor;
      dailyRoomRate = dailyRoomRate / taxDivisor;

      staySegments.forEach(s => { s.rate = s.rate / taxDivisor; });
      foodOrders.forEach(o => { o.amount = o.amount / taxDivisor; });
      Object.keys(categoryTotals).forEach(k => { categoryTotals[k] = categoryTotals[k] / taxDivisor; });
    }

    let subtotal = totalRoomRent + totalFooding + totalExtraBed + totalOtherServices + totalExtraBedCalculated;
    let discountAmount = subtotal * (discountPercent / 100);
    let afterDiscount = subtotal - discountAmount;

    // CGST + SGST (each half of total GST)
    let sgstPercent = gstPercent / 2;
    let cgstPercent = gstPercent / 2;

    let sgstAmount = afterDiscount * (sgstPercent / 100);
    let cgstAmount = afterDiscount * (cgstPercent / 100);

    let billAmount = afterDiscount + sgstAmount + cgstAmount;
    let netAmount = billAmount - advancePaid;
    if (netAmount < 0) netAmount = 0;

    let paymentMode = checkoutData.paymentMode || 'Cash';
    let amountPaid = parseFloat(checkoutData.amountPaid) || 0;
    if (checkoutData.paymentStatus === 'Credit') {
      amountPaid = 0;
    }
    let balance = netAmount - amountPaid;

    // Generate bill number
    let billNumber = generateBillNumber();

    // Build day-by-day data for invoice
    let dayByDay = [];
    let grandRunning = 0;
    for (let d = 0; d < nights; d++) {
      let dayDate = new Date(checkInDate);
      dayDate.setDate(dayDate.getDate() + d);
      let y = dayDate.getFullYear();
      let m = String(dayDate.getMonth() + 1).padStart(2, '0');
      let dt = String(dayDate.getDate()).padStart(2, '0');
      let dateStr = y + '-' + m + '-' + dt;

      // Find applicable segment rate for this specific day
      let dayRoom = dailyRoomRate; // fallback
      if (staySegments.length > 0) {
        // Find segment active on this day. If multiple, take the last one started that day.
        for (let s = staySegments.length - 1; s >= 0; s--) {
          let seg = staySegments[s];
          let segStartStr = seg.startDate.toISOString().split('T')[0];
          let segEndStr = seg.endDate.toISOString().split('T')[0];
          if (dateStr >= segStartStr && dateStr < segEndStr) {
            dayRoom = seg.rate;
            break;
          } else if (dateStr === segStartStr && seg.nights === 0) {
            // For a 0-night segment, it doesn't span a whole day, ignore for day room rate unless it's the only one
          }
        }
      }

      let dayCats = { ExtraBed: 0, FoodBeverage: 0, Laundry: 0 };
      
      let dailyEpCharge = (extraPerson * DEFAULT_EXTRA_PERSON_RATE) / taxDivisor;
      dayCats.ExtraBed += dailyEpCharge;

      foodOrders.forEach(o => {
        let oDate = o.orderDate;
        let isLastNight = (d === nights - 1);
        if ((oDate === dateStr || (isLastNight && oDate > dateStr)) && dayCats.hasOwnProperty(o.mappedCategory || o.category)) {
          dayCats[o.mappedCategory || o.category] += o.amount;
        }
      });

      let dayTotal = dayRoom;
      Object.values(dayCats).forEach(v => dayTotal += v);
      grandRunning += dayTotal;

      dayByDay.push({
        date: dateStr,
        rooms: dayRoom,
        extraBed: dayCats.ExtraBed,
        foodBev: dayCats.FoodBeverage,
        laundry: dayCats.Laundry,
        dayTotal: dayTotal,
        grandTotal: grandRunning
      });
    }

    // Mark check-in as checked out (only for real CheckIn records, not booking-only fallback)
    if (ciRowIndex >= 0 && ciSheet) {
      ciSheet.getRange(ciRowIndex + 1, CI_STATUS_COL + 1).setValue("Checked Out");
      ciSheet.getRange(ciRowIndex + 1, CI_CHECKOUT_DATE_COL + 1).setValue(actualCheckOutDate.toISOString());
      ciSheet.getRange(ciRowIndex + 1, CI_CHECKOUT_TIME_COL + 1).setValue(checkOutTime);
    }

    // Free all rooms
    const roomsData = roomsSheet.getDataRange().getValues();
    for (let j = 1; j < roomsData.length; j++) {
      let rn = (roomsData[j][ROOM_NO_COL] || '').toString();
      if (roomNosArr.indexOf(rn) !== -1) {
        roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Maintenance");
      }
    }

    // Update linked booking status
    if (ci[CI_LINKED_TICKET_COL]) {
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        if ((bData[i][TICKET_ID_COL] || '').toString() === ci[CI_LINKED_TICKET_COL].toString()) {
          bookingsSheet.getRange(i + 1, BOOKING_STATUS_COL + 1).setValue("Checked Out");
          break;
        }
      }
    }

    try {
      syncCustomerProfile({
        name: guestName,
        phone: mobile,
        email: email,
        address: address,
        city: city,
        state: state,
        pinCode: pinCode,
        country: country,
        companyName: companyName,
        gstNumber: gstNumber
      });
    } catch(syncErr) {
      Logger.log("Customer Sync Checkout Error: " + syncErr.message);
    }

    SpreadsheetApp.flush();

    return {
      success: true,
      message: "Checkout completed successfully.",
      invoiceData: {
        billNumber, checkInId,
        hotelName, hotelAddress, hotelPhone, hotelEmail, hotelTIN, hotelLogo, currency: defaultCurrency,
        guestName, companyName, gstNumber, mobile, email, address, city, state, pinCode, country,
        checkInDate: checkInDate.toISOString(), checkInTime,
        checkOutDate: actualCheckOutDate.toISOString(), checkOutTime,
        roomNumbers, roomTypes, numberOfRooms: roomNosArr.length,
        pax, extraPerson, foodPlan, billTo,
        nights, dailyRoomRate, totalRoomRent,
        totalFooding, totalExtraBed, totalOtherServices, categoryTotals,
        subtotal, discountPercent, discountAmount,
        gstType, sgstPercent, cgstPercent, sgstAmount, cgstAmount,
        billAmount, advancePaid, netAmount,
        paymentMode, amountPaid, balance,
        dayByDay
      }
    };
  } catch (e) {
    Logger.log("Error in processFullCheckout: " + e.toString());
    return { success: false, message: e.message };
  }
}


function processAdvancedCheckout(primaryGuestData, selectedRoomsFlat, selectedOrdersFlat, checkoutData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const ciSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    const restSheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);
    
    // Read settings for GST
    let gstPercent = 5;
    let hotelName = 'Hill View Eco Retreat', hotelAddress = '', hotelPhone = '', hotelEmail = '', hotelTIN = '', hotelLogo = '', defaultCurrency = 'MVR';
    try {
      const setSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        const setRow = setSheet.getRange(2, 1, 1, setSheet.getLastColumn()).getValues()[0];
        hotelName = (setRow[SET_HOTEL_NAME_COL] || 'Hill View Eco Retreat').toString();
        hotelAddress = (setRow[SET_HOTEL_ADDRESS_COL] || '').toString();
        hotelPhone = (setRow[SET_HOTEL_PHONE_COL] || '').toString();
        hotelEmail = (setRow[SET_HOTEL_EMAIL_COL] || '').toString();
        hotelTIN = (setRow[SET_HOTEL_TIN_COL] || '').toString();
        hotelLogo = (setRow[SET_LOGO_URL_COL] || '').toString();
        
        gstPercent = parseFloat(setRow[SET_GST_DEFAULT_COL]) || 5;
      }
    } catch (se) { Logger.log("Settings read error: " + se); }

    const actualCheckOutDate = checkoutData.checkOutDate ? new Date(checkoutData.checkOutDate) : new Date();
    const checkOutTime = checkoutData.checkOutTime || '12:00';
    let advanceToApply = parseFloat(checkoutData.advanceToApply) || 0;
    
    // Pre-read all data
    const ciData = ciSheet ? ciSheet.getDataRange().getValues() : [[]];
    const roomsData = roomsSheet ? roomsSheet.getDataRange().getValues() : [[]];
    const segmentsData = staySegmentsSheet ? staySegmentsSheet.getDataRange().getValues() : [[]];
    
    // Group selected rooms by checkInId
    const roomsByCi = {};
    selectedRoomsFlat.forEach(sr => {
      if(!roomsByCi[sr.checkInId]) roomsByCi[sr.checkInId] = [];
      roomsByCi[sr.checkInId].push(sr.roomNo);
    });

    let totalRoomRent = 0;
    let allRoomNosArr = [];
    let combinedRoomTypes = [];
    let totalPax = 0;
    let earliestCheckInDate = null;
    let latestCheckInTime = "14:00";
    let matchedCis = [];
    let allSegments = [];

    // 1. Process Rooms & Rent Math per CheckIn
    for (const [cId, selectedRoomNos] of Object.entries(roomsByCi)) {
      let found = false;
      for (let i = 1; i < ciData.length; i++) {
        if ((ciData[i][CI_ID_COL] || '').toString() === cId) {
          matchedCis.push({ id: cId, rowIndex: i, data: ciData[i], selectedRoomNos });
          found = true;
          
          let rNs = (ciData[i][CI_ROOM_NUMBERS_COL] || '').toString().split(',').map(r => r.trim()).filter(Boolean);
          allRoomNosArr = allRoomNosArr.concat(selectedRoomNos);
          
          let rTs = (ciData[i][CI_ROOM_TYPES_COL] || '').toString().split(',').map(r => r.trim()).filter(Boolean);
          combinedRoomTypes = combinedRoomTypes.concat(rTs);
          
          totalPax += parseInt(ciData[i][CI_PAX_COL]) || 1; // Simplification: we just add total pax of the CI
          
          let cidDate = new Date(ciData[i][CI_CHECKIN_DATE_COL]);
          if (!earliestCheckInDate || cidDate < earliestCheckInDate) {
             earliestCheckInDate = cidDate;
             latestCheckInTime = (ciData[i][CI_CHECKIN_TIME_COL] || '14:00').toString();
          }

          const billingFormat = (ciData[i][CI_BILLING_FORMAT_COL] || 'Standard').toString();
          let checkOutTime = (ciData[i][CI_CHECKOUT_TIME_COL] || '12:00').toString();
          let nights = calculateStayDuration(
            ciData[i][CI_CHECKIN_DATE_COL],
            ciData[i][CI_CHECKIN_TIME_COL],
            actualCheckOutDate,
            checkOutTime,
            billingFormat
          );
          if (isNaN(nights) || nights < 1) { nights = 1; }
          
          let staySegments = [];
          if (staySegmentsSheet) {
            for (let s = 1; s < segmentsData.length; s++) {
              if ((segmentsData[s][SEG_CHECKIN_ID_COL] || '').toString() === cId.toString()) {
                let segRoomNosStr = (segmentsData[s][SEG_ROOM_NOS_COL] || '').toString();
                let segRoomsArr = segRoomNosStr.split(',').map(r => r.trim()).filter(Boolean);
                
                let activeRoomsInSegment = 0;
                for (let rn of selectedRoomNos) {
                  if (segRoomsArr.some(sr => sr.toString().trim() === rn.toString().trim())) activeRoomsInSegment++;
                }
                
                let orphanRoomsInSegment = 0;
                for (let rn of segRoomsArr) {
                  if (!rNs.some(cr => cr.toString().trim() === rn.toString().trim())) orphanRoomsInSegment++;
                }

                if (activeRoomsInSegment > 0 || orphanRoomsInSegment > 0) {
                  let segStartDateStr = (segmentsData[s][SEG_START_DATE_COL] || '').toString();
                  let segEndDateStr = (segmentsData[s][SEG_END_DATE_COL] || '').toString();
                  let billingEndDate = segEndDateStr ? new Date(segEndDateStr) : actualCheckOutDate;
                  let segStartDate = new Date(segStartDateStr);

                  // Timezone safety formatting
                  let bY = billingEndDate.getFullYear();
                  let bM = String(billingEndDate.getMonth() + 1).padStart(2, '0');
                  let bD = String(billingEndDate.getDate()).padStart(2, '0');
                  let safeBillingDate = new Date(bY + '-' + bM + '-' + bD + 'T00:00:00');

                  let sY = segStartDate.getFullYear();
                  let sM = String(segStartDate.getMonth() + 1).padStart(2, '0');
                  let sD = String(segStartDate.getDate()).padStart(2, '0');
                  let safeStartDate = new Date(sY + '-' + sM + '-' + sD + 'T00:00:00');

                  let segNights = daysBetween(safeStartDate, safeBillingDate);
                  if (isNaN(segNights) || segNights < 1) segNights = 1;

                  let segRate = parseFloat(segmentsData[s][SEG_RATE_COL]) || 0;
                  
                  let safeSegLen = segRoomsArr.length || 1;
                  let checkoutFraction = selectedRoomNos.length / (rNs.length || 1);
                  let rateForSelected = (segRate / safeSegLen) * activeRoomsInSegment;
                  let rateForOrphans = (segRate / safeSegLen) * orphanRoomsInSegment * checkoutFraction;
                  let proportionedRate = rateForSelected + rateForOrphans;
                  if (isNaN(proportionedRate)) proportionedRate = 0;
                  
                  staySegments.push({ rate: proportionedRate, nights: segNights, startDate: segStartDate, endDate: billingEndDate });
                }
              }
            }
          }

          if (staySegments.length === 1 && staySegments[0].nights === 0 && nights === 1) {
            staySegments[0].nights = 1;
          }

          if (staySegments.length > 0) {
             for (let s of staySegments) {
                totalRoomRent += s.rate * s.nights;
                allSegments.push(s);
             }
          } else {
             // Fallback legacy calc if no segments
             let fixRoomRent = (ciData[i][CI_FIX_RENT_COL] || 'No').toString();
             let fixRoomRentAmount = parseFloat(ciData[i][CI_FIX_RENT_AMT_COL]) || 0;
             let dailyRoomRate = 0;
             if (fixRoomRent === 'Yes' && fixRoomRentAmount > 0) {
                dailyRoomRate = (fixRoomRentAmount / rNs.length) * selectedRoomNos.length;
             } else {
                for (let r = 0; r < selectedRoomNos.length; r++) {
                  for (let j = 1; j < roomsData.length; j++) {
                    if ((roomsData[j][ROOM_NO_COL] || '').toString() === selectedRoomNos[r]) {
                      dailyRoomRate += parseFloat(roomsData[j][ROOM_RATE_COL]) || 0;
                      break;
                    }
                  }
                }
             }
             totalRoomRent += dailyRoomRate * nights;
             allSegments.push({ rate: dailyRoomRate, nights: nights, startDate: cidDate, endDate: actualCheckOutDate });
          }
          break;
        }
      }
      if (!found) return { success: false, message: `Check-In ${cId} could not be found.` };
    }

    // 2. Collect POS charges
    let foodOrders = [];
    if (restSheet && restSheet.getLastRow() > 1 && selectedOrdersFlat && selectedOrdersFlat.length > 0) {
      const restData = restSheet.getDataRange().getValues();
      for (let i = 1; i < restData.length; i++) {
        let oId = (restData[i][REST_ORDER_ID_COL] || '').toString();
        if (selectedOrdersFlat.includes(oId) && (restData[i][REST_STATUS_COL] || '').toString() === 'Active') {
          let oDateObj = new Date(restData[i][REST_ORDER_DATE_COL]);
          let y = oDateObj.getFullYear();
          let m = String(oDateObj.getMonth() + 1).padStart(2, '0');
          let d = String(oDateObj.getDate()).padStart(2, '0');
          let cleanOrderDate = y + '-' + m + '-' + d;

          foodOrders.push({
            rowIndex: i,
            orderDate: cleanOrderDate,
            category: (restData[i][REST_MEAL_PERIOD_COL] || '').toString(),
            description: (restData[i][REST_ITEM_NAME_COL] || '').toString(),
            amount: parseFloat(restData[i][REST_TOTAL_AMOUNT_COL]) || 0
          });
        }
      }
    }

    let totalFooding = 0, totalExtraBed = 0, totalOtherServices = 0;
    let categoryTotals = {};
    foodOrders.forEach(o => {
      categoryTotals[o.category] = (categoryTotals[o.category] || 0) + o.amount;
      if (['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'FoodBeverage'].includes(o.category)) {
        totalFooding += o.amount;
        o.mappedCategory = 'FoodBeverage';
      } else if (o.category === 'ExtraBed') {
        totalExtraBed += o.amount;
        o.mappedCategory = 'ExtraBed';
      } else {
        totalOtherServices += o.amount;
        o.mappedCategory = o.category;
      }
    });

    // Calculate global Extra Bed total before subtotal
    if (!earliestCheckInDate) { earliestCheckInDate = actualCheckOutDate; }
    let combinedNights = daysBetween(earliestCheckInDate, actualCheckOutDate);
    if (combinedNights < 1) combinedNights = 1;
    let totalExtraBedCalculated = combinedNights * (parseInt(primaryGuestData.extraPerson) || 0) * DEFAULT_EXTRA_PERSON_RATE;

    let taxDivisor = primaryGuestData.gstType === 'Including' ? (1 + (gstPercent / 100)) : 1;
    if (taxDivisor > 1) {
      totalRoomRent = totalRoomRent / taxDivisor;
      totalFooding = totalFooding / taxDivisor;
      totalExtraBed = totalExtraBed / taxDivisor;
      totalOtherServices = totalOtherServices / taxDivisor;
      totalExtraBedCalculated = totalExtraBedCalculated / taxDivisor;

      allSegments.forEach(s => { s.rate = s.rate / taxDivisor; });
      foodOrders.forEach(o => { o.amount = o.amount / taxDivisor; });
      Object.keys(categoryTotals).forEach(k => { categoryTotals[k] = categoryTotals[k] / taxDivisor; });
    }

    // 3. Billing Math
    let subtotal = totalRoomRent + totalFooding + totalExtraBed + totalOtherServices + totalExtraBedCalculated;
    let discountPercent = parseFloat(checkoutData.discountPercent) || 0;
    let discountAmount = subtotal * (discountPercent / 100);
    let afterDiscount = subtotal - discountAmount;

    let sgstPercent = gstPercent / 2;
    let cgstPercent = gstPercent / 2;

    let sgstAmount = afterDiscount * (sgstPercent / 100);
    let cgstAmount = afterDiscount * (cgstPercent / 100);

    let billAmount = afterDiscount + sgstAmount + cgstAmount;
    let netAmount = billAmount - advanceToApply;
    if (netAmount < 0) netAmount = 0;

    let paymentMode = checkoutData.paymentMode || 'Cash';
    let amountPaid = parseFloat(checkoutData.amountPaid) || 0;
    if (checkoutData.paymentStatus === 'Credit') {
      amountPaid = 0;
    }
    let balance = netAmount - amountPaid;

    let billNumber = generateBillNumber();

    // 5. Build Synthetic DayByDay for PDF
    let dayByDay = [];
    let grandRunning = 0;
    
    for (let d = 0; d < combinedNights; d++) {
      let dayDate = new Date(earliestCheckInDate);
      dayDate.setDate(dayDate.getDate() + d);
      let y = dayDate.getFullYear();
      let m = String(dayDate.getMonth() + 1).padStart(2, '0');
      let dt = String(dayDate.getDate()).padStart(2, '0');
      let dateStr = y + '-' + m + '-' + dt;
      
      let dayRoom = 0;
      allSegments.forEach(seg => {
        let sy = seg.startDate.getFullYear();
        let sm = String(seg.startDate.getMonth() + 1).padStart(2, '0');
        let sdt = String(seg.startDate.getDate()).padStart(2, '0');
        let segStartStr = sy + '-' + sm + '-' + sdt;

        let ey = seg.endDate.getFullYear();
        let em = String(seg.endDate.getMonth() + 1).padStart(2, '0');
        let edt = String(seg.endDate.getDate()).padStart(2, '0');
        let segEndStr = ey + '-' + em + '-' + edt;

        if (dateStr >= segStartStr && dateStr < segEndStr) {
          dayRoom += seg.rate;
        } else if (dateStr === segStartStr && seg.nights === 0 && combinedNights === 1) {
          dayRoom += seg.rate;
        }
      });
      
      let dayCats = { ExtraBed: 0, FoodBeverage: 0, Laundry: 0 };
      
      let dailyEpCharge = ((parseInt(primaryGuestData.extraPerson) || 0) * DEFAULT_EXTRA_PERSON_RATE) / taxDivisor;
      dayCats.ExtraBed += dailyEpCharge;

      foodOrders.forEach(o => {
        let oDate = o.orderDate;
        let isLastNight = (d === combinedNights - 1);
        if ((oDate === dateStr || (isLastNight && oDate > dateStr)) && dayCats.hasOwnProperty(o.mappedCategory || o.category)) {
          dayCats[o.mappedCategory || o.category] += o.amount;
        }
      });
      
      let dayTotal = dayRoom;
      Object.values(dayCats).forEach(v => dayTotal += v);
      grandRunning += dayTotal;
      
      dayByDay.push({
        date: dateStr,
        rooms: dayRoom,
        extraBed: dayCats.ExtraBed,
        foodBev: dayCats.FoodBeverage,
        laundry: dayCats.Laundry,
        dayTotal: dayTotal,
        grandTotal: grandRunning
      });
    }

    if (!checkoutData.isPreview) {
      // 6. Database Updates: Physical Rooms
      for (let j = 1; j < roomsData.length; j++) {
        let rn = (roomsData[j][ROOM_NO_COL] || '').toString();
        if (allRoomNosArr.includes(rn)) {
          roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Maintenance");
        }
      }

      // 7. Database Updates: POS Orders
      foodOrders.forEach(o => {
         restSheet.getRange(o.rowIndex + 1, REST_STATUS_COL + 1).setValue("Billed");
         restSheet.getRange(o.rowIndex + 1, REST_BILLED_CHECKIN_ID_COL + 1).setValue(billNumber);
      });

      // 8. Database Updates: Generate ONE master invoice in the Invoices sheet
      const masterInvSheet = ss.getSheetByName(INVOICES_SHEET_NAME);
      if (masterInvSheet) {
        const invoiceItems = [
          { description: `Combined Room Rent (${allRoomNosArr.length} rooms)`, amount: totalRoomRent },
          { description: `Total POS Orders`, amount: totalFooding + totalExtraBed + totalOtherServices }
        ];
        
        if (totalExtraBedCalculated > 0) {
          invoiceItems.push({ description: 'Extra Bed / Person Charge', amount: totalExtraBedCalculated });
        }

        const invoiceMeta = {
          isMeta: true,
          companyName: primaryGuestData.companyName,
          address: primaryGuestData.address,
          city: primaryGuestData.city,
          state: primaryGuestData.state,
          pinCode: primaryGuestData.pinCode,
          country: primaryGuestData.country,
          checkInDate: earliestCheckInDate ? earliestCheckInDate.toISOString() : '',
          checkInTime: latestCheckInTime,
          checkOutDate: actualCheckOutDate.toISOString(),
          checkOutTime: checkOutTime,
          roomNumbers: allRoomNosArr.join(', '),
          roomTypes: combinedRoomTypes.join(', '),
          numberOfRooms: allRoomNosArr.length,
          pax: totalPax,
          extraPerson: primaryGuestData.extraPerson,
          foodPlan: primaryGuestData.foodPlan,
          billTo: primaryGuestData.billTo,
          nights: combinedNights,
          advancePaid: advanceToApply,
          paymentMode: paymentMode,
          amountPaid: amountPaid,
          balance: balance,
          dayByDay: dayByDay
        };
        invoiceItems.push(invoiceMeta);

        const nowStr = new Date().toISOString();
        const invoiceRow = new Array(20).fill('');
        invoiceRow[0] = billNumber;
        invoiceRow[1] = primaryGuestData.guestName;
        invoiceRow[2] = primaryGuestData.mobile;
        invoiceRow[3] = primaryGuestData.email;
        invoiceRow[4] = primaryGuestData.gstNumber || "";
        invoiceRow[5] = defaultCurrency;
        invoiceRow[6] = nowStr;
        invoiceRow[7] = nowStr;
        invoiceRow[8] = checkoutData.paymentStatus === 'Credit' ? 'Unpaid' : (checkoutData.paymentStatus === 'Partial' ? 'Partial' : 'Paid');
        invoiceRow[9] = JSON.stringify(invoiceItems);
        invoiceRow[10] = subtotal;
        invoiceRow[11] = true;
        invoiceRow[12] = gstPercent;
        invoiceRow[13] = sgstAmount + cgstAmount;
        invoiceRow[14] = discountAmount;
        invoiceRow[15] = billAmount;
        invoiceRow[16] = `Merged: ${Object.keys(roomsByCi).join(', ')}`;
        invoiceRow[17] = "";
        invoiceRow[18] = "System";
        invoiceRow[19] = nowStr;

        masterInvSheet.appendRow(invoiceRow);
      }

      // 9. Database Updates: Update CheckIn/Bookings Sheets
      let advanceToDeduct = advanceToApply; // How much advance we still need to deduct from the active sheets
      for (let ciRec of matchedCis) {
        let allCiRoomNumbers = (ciRec.data[CI_ROOM_NUMBERS_COL] || '').toString().split(',').map(r => r.trim()).filter(Boolean);
        let remainingCiRooms = allCiRoomNumbers.filter(r => !ciRec.selectedRoomNos.includes(r));
        let currentCiAdvance = parseFloat(ciRec.data[CI_ADVANCE_PAID_COL]) || 0;
        
        // --- Safely close open Stay Segments for this checkout ---
        if (staySegmentsSheet) {
          const sData = staySegmentsSheet.getDataRange().getValues();
          for (let s = 1; s < sData.length; s++) {
            if ((sData[s][SEG_CHECKIN_ID_COL] || '').toString() === ciRec.id && !(sData[s][SEG_END_DATE_COL] || '').toString()) {
              if (remainingCiRooms.length === 0) {
                 staySegmentsSheet.getRange(s + 1, SEG_END_DATE_COL + 1).setValue(actualCheckOutDate.toISOString());
              } else {
                 staySegmentsSheet.getRange(s + 1, SEG_END_DATE_COL + 1).setValue(actualCheckOutDate.toISOString());
                 let segRate = parseFloat(sData[s][SEG_RATE_COL]) || 0;
                 let newRate = (segRate / allCiRoomNumbers.length) * remainingCiRooms.length;
                 const newSegmentId = "SEG-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
                 staySegmentsSheet.appendRow([newSegmentId, ciRec.id, remainingCiRooms.join(','), newRate, parseInt(sData[s][SEG_PAX_COL]) || 1, actualCheckOutDate.toISOString(), ""]);
              }
            }
          }
        }
        // ---------------------------------------------------------
        
        if (remainingCiRooms.length === 0) {
          // Full checkout for this CI
          ciSheet.getRange(ciRec.rowIndex + 1, CI_STATUS_COL + 1).setValue("Checked Out");
          ciSheet.getRange(ciRec.rowIndex + 1, CI_CHECKOUT_DATE_COL + 1).setValue(actualCheckOutDate.toISOString());
          ciSheet.getRange(ciRec.rowIndex + 1, CI_CHECKOUT_TIME_COL + 1).setValue(checkOutTime);

          // Advance is considered fully consumed, deduct it from our pool so we know how much more to drain
          advanceToDeduct = advanceToDeduct - currentCiAdvance;
          if (advanceToDeduct < 0) advanceToDeduct = 0; // Guard

          // Mark linked booking as checked out
          if (ciRec.data[CI_LINKED_TICKET_COL]) {
            const bData = bookingsSheet.getDataRange().getValues();
            for (let i = 1; i < bData.length; i++) {
              if ((bData[i][TICKET_ID_COL] || '').toString() === ciRec.data[CI_LINKED_TICKET_COL].toString()) {
                bookingsSheet.getRange(i + 1, BOOKING_STATUS_COL + 1).setValue("Checked Out");
                break;
              }
            }
          }
        } else {
          // Partial checkout for this CI - keep active
          ciSheet.getRange(ciRec.rowIndex + 1, CI_ROOM_NUMBERS_COL + 1).setValue(remainingCiRooms.join(', '));
          ciSheet.getRange(ciRec.rowIndex + 1, CI_NUM_ROOMS_COL + 1).setValue(remainingCiRooms.length);

          // Proportionately or aggressively deduct used advance from the active sheet
          if (advanceToDeduct > 0) {
             if (currentCiAdvance >= advanceToDeduct) {
                ciSheet.getRange(ciRec.rowIndex + 1, CI_ADVANCE_PAID_COL + 1).setValue(currentCiAdvance - advanceToDeduct);
                advanceToDeduct = 0;
             } else {
                ciSheet.getRange(ciRec.rowIndex + 1, CI_ADVANCE_PAID_COL + 1).setValue(0);
                advanceToDeduct -= currentCiAdvance;
             }
          }
        }
      }

      SpreadsheetApp.flush();
    }

    try {
      syncCustomerProfile({
        phone: primaryGuestData.mobile,
        name: primaryGuestData.guestName,
        email: primaryGuestData.email,
        address: primaryGuestData.address,
        city: primaryGuestData.city,
        state: primaryGuestData.state,
        pinCode: primaryGuestData.pinCode,
        country: primaryGuestData.country,
        companyName: primaryGuestData.companyName,
        gstNumber: primaryGuestData.gstNumber
      });
    } catch(e) { Logger.log("Customer Sync AdvCheckout Error: " + e.message); }

    return {
      success: true,
      message: checkoutData.isPreview ? 'Preview generated.' : 'Advanced Checkout completed successfully.',
      invoiceData: {
        billNumber, 
        checkInId: Object.keys(roomsByCi).join(', '),
        hotelName, hotelAddress, hotelPhone, hotelEmail, hotelTIN, hotelLogo, currency: defaultCurrency,
        guestName: primaryGuestData.guestName, 
        companyName: primaryGuestData.companyName, 
        gstNumber: primaryGuestData.gstNumber, 
        mobile: primaryGuestData.mobile, 
        email: primaryGuestData.email, 
        address: primaryGuestData.address,
        checkInDate: earliestCheckInDate ? earliestCheckInDate.toISOString() : "", 
        checkInTime: latestCheckInTime,
        checkOutDate: actualCheckOutDate.toISOString(), 
        checkOutTime,
        roomNumbers: allRoomNosArr.join(', '), 
        roomTypes: combinedRoomTypes.join(', '), 
        numberOfRooms: allRoomNosArr.length,
        pax: totalPax, 
        extraPerson: 0, 
        foodPlan: "Multiple", 
        billTo: primaryGuestData.billTo,
        nights: combinedNights, 
        dailyRoomRate: totalRoomRent > 0 ? (totalRoomRent / combinedNights).toFixed(2) : 0,
        totalRoomRent,
        totalFooding, totalExtraBed, totalOtherServices, categoryTotals,
        subtotal, discountPercent, discountAmount,
        gstType: primaryGuestData.gstType, sgstPercent, cgstPercent, sgstAmount, cgstAmount,
        billAmount, advancePaid: advanceToApply, netAmount,
        paymentMode, amountPaid, balance,
        dayByDay
      }
    };

  } catch (e) {
    Logger.log("Error in processAdvancedCheckout: " + e.toString());
    return { success: false, message: e.message };
  }
}
function numberToWords(num) {
  if (num === 0) return 'Zero';
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  num = Math.round(Math.abs(num));
  if (num < 20) return ones[num];
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
  if (num < 1000) return ones[Math.floor(num / 100)] + ' Hundred' + (num % 100 ? ' ' + numberToWords(num % 100) : '');
  if (num < 100000) return numberToWords(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 ? ' ' + numberToWords(num % 1000) : '');
  if (num < 10000000) return numberToWords(Math.floor(num / 100000)) + ' Lakh' + (num % 100000 ? ' ' + numberToWords(num % 100000) : '');
  return numberToWords(Math.floor(num / 10000000)) + ' Crore' + (num % 10000000 ? ' ' + numberToWords(num % 10000000) : '');
}

/***************************************************
 * DASHBOARD
 ***************************************************/

function autoExtendOverstayingCheckIns() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return;

    let updated = false;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Midnight today
    
    // YYYY-MM-DD local format
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[CI_STATUS_COL] === 'Active') {
        const coStr = row[CI_CHECKOUT_DATE_COL];
        if (coStr) {
          let coDate = new Date(coStr);
          // if it is a valid date
          if (!isNaN(coDate.getTime())) {
            let coDateMidnight = new Date(coDate.getFullYear(), coDate.getMonth(), coDate.getDate());
            if (coDateMidnight < today) {
              sheet.getRange(i + 1, CI_CHECKOUT_DATE_COL + 1).setValue(todayStr);
              updated = true;
            }
          }
        }
      }
    }
    
    if (updated) {
      SpreadsheetApp.flush();
    }
  } catch (e) {
    console.error("Error auto-extending overstaying checkins:", e);
  }
}

function getDashboardData() {
  try {
    initDataStructure();
    autoExtendOverstayingCheckIns();
    const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    const roomsData = roomsSheet.getDataRange().getValues();
    roomsData.shift();

    let totalRooms = roomsData.length;
    let bookedCount = 0;
    let availableRoomsList = [];
    let bookedRoomsList = [];
    let allRoomsDetails = [];

    // Pre-fetch active checkins and bookings to attach guest details to rooms
    let guestMap = {};
    const now = new Date();
    try {
      const ciSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CHECKIN_SHEET_NAME);
      if (ciSheet) {
        const ciData = ciSheet.getDataRange().getValues();
        for (let i = 1; i < ciData.length; i++) {
          if ((ciData[i][CI_STATUS_COL] || '').toString() === 'Active') {
            const rnStr = (ciData[i][CI_ROOM_NUMBERS_COL] || '').toString();
            const rns = rnStr.split(',').map(r => r.trim()).filter(Boolean);
            const gName = (ciData[i][CI_GUEST_NAME_COL] || '').toString();
            const cinStr = ciData[i][CI_CHECKIN_DATE_COL];
            const coutStr = ciData[i][CI_CHECKOUT_DATE_COL];
            
            const cin = cinStr ? new Date(cinStr).toISOString() : '';
            const cout = coutStr ? new Date(coutStr).toISOString() : '';
            
            // An active check-in means the room is currently occupied regardless of the expected checkout date
            const isCurrentlyOccupying = cinStr && new Date(cinStr) <= now;
            
            if (isCurrentlyOccupying) {
              rns.forEach(rn => {
                guestMap[rn] = { guestName: gName, checkIn: cin, checkOut: cout, liveStatus: 'CheckedIn' };
              });
            }
          }
        }
      }
      
      const bkSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
      if (bkSheet) {
        const bkData = bkSheet.getDataRange().getValues();
        for (let i = 1; i < bkData.length; i++) {
          if ((bkData[i][BOOKING_STATUS_COL] || '').toString() === 'Confirmed' || (bkData[i][BOOKING_STATUS_COL] || '').toString() === 'Booked') {
            const rnStr = (bkData[i][BOOKING_ROOM_NO_COL] || '').toString();
            const rns = rnStr.split(',').map(r => r.trim()).filter(Boolean);
            const gName = (bkData[i][GUEST_NAME_COL] || '').toString();
            const cinStr = bkData[i][CHECK_IN_COL];
            const coutStr = bkData[i][CHECK_OUT_COL];
            
            const cin = cinStr ? new Date(cinStr).toISOString() : '';
            const cout = coutStr ? new Date(coutStr).toISOString() : '';
            
            // Exclude the actual check-out day block
            const isCurrentlyOccupying = cinStr && coutStr && new Date(cinStr) <= now && now < new Date(new Date(coutStr).getFullYear(), new Date(coutStr).getMonth(), new Date(coutStr).getDate());
            
            if (isCurrentlyOccupying) {
              rns.forEach(rn => {
                // Only apply if not already claimed by a check-in
                if (!guestMap[rn]) {
                  guestMap[rn] = { guestName: gName, checkIn: cin, checkOut: cout, liveStatus: 'Booked' };
                }
              });
            }
          }
        }
      }
    } catch(e) { Logger.log("Error attaching guest details: " + e); }

    roomsData.forEach((row, index) => {
      let roomNo = (row[ROOM_NO_COL] || "").toString();
      let type   = (row[ROOM_TYPE_COL] || "").toString();
      let dbStatus = (row[ROOM_STATUS_COL] || "").toString();
      
      let guestData = guestMap[roomNo] || {};
      let finalStatus = guestData.liveStatus ? guestData.liveStatus : dbStatus;
      
      allRoomsDetails.push({ 
        roomNo, 
        type, 
        status: finalStatus,
        roomRate: parseFloat(row[ROOM_RATE_COL]) || 0,
        rowIndex: index + 2,
        guestName: guestData.guestName || '',
        checkIn: guestData.checkIn || '',
        checkOut: guestData.checkOut || ''
      });
      
      if (finalStatus.toLowerCase() === "booked" || finalStatus.toLowerCase() === "checkedin") {
        bookedCount++;
        bookedRoomsList.push(roomNo);
      } else {
        availableRoomsList.push(roomNo);
      }
    });

    let maintenanceCount = roomsData.filter(r => (r[ROOM_STATUS_COL] || "").toString().toLowerCase() === "maintenance").length;
    let reservedCount = roomsData.filter(r => (r[ROOM_STATUS_COL] || "").toString().toLowerCase() === "reserved").length;
    let availableCount = totalRooms - bookedCount - maintenanceCount - reservedCount;

    // Room type breakdown
    let roomTypeMap = {};
    roomsData.forEach(row => {
      let t = (row[ROOM_TYPE_COL] || "Other").toString();
      roomTypeMap[t] = (roomTypeMap[t] || 0) + 1;
    });

    // Monthly data (last 6 months) - declared outside try so return can access them
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let monthlyBookings = {};
    let monthlyRevenue = {};
    let monthlyIncome = {};
    let monthlyExpense = {};
    for (let m = 5; m >= 0; m--) {
      const d = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const key = monthNames[d.getMonth()] + ' ' + d.getFullYear();
      monthlyBookings[key] = 0;
      monthlyRevenue[key] = 0;
      monthlyIncome[key] = 0;
      monthlyExpense[key] = 0;
    }

    // Booking Revenue
    let bookingRevenue = { totalRevenue: 0, checkedOutCount: 0, activeBookingCount: 0, totalBookings: 0 };
    let recentBookings = [];
    let todaysCheckIns = [];

    const today = new Date();
    const todayStr = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

    try {
      const bookSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
      const bookData = bookSheet.getDataRange().getValues();

      for (let i = 1; i < bookData.length; i++) {
        let bStatusRaw = (bookData[i][BOOKING_STATUS_COL] || "").toString();
        let bStatus = bStatusRaw.toLowerCase();
        let bAmount = parseFloat(bookData[i][TOTAL_AMOUNT_COL]) || 0;
        let ciDate = bookData[i][CHECK_IN_COL] ? new Date(bookData[i][CHECK_IN_COL]) : null;
        if (bStatus === "checked out" || bStatus === "completed") {
          bookingRevenue.totalRevenue += bAmount;
          bookingRevenue.checkedOutCount++;
        } else if (bStatus === "booked") {
          bookingRevenue.activeBookingCount++;
        }
        bookingRevenue.totalBookings++;
        if (ciDate) {
          const mKey = monthNames[ciDate.getMonth()] + ' ' + ciDate.getFullYear();
          if (monthlyBookings.hasOwnProperty(mKey)) {
            monthlyBookings[mKey]++;
            monthlyRevenue[mKey] += bAmount;
          }

          if (bStatusRaw === 'Booked') {
             const ciStr = ciDate.getFullYear() + '-' + String(ciDate.getMonth() + 1).padStart(2, '0') + '-' + String(ciDate.getDate()).padStart(2, '0');
             if (ciStr === todayStr) {
               todaysCheckIns.push({
                 guestName: (bookData[i][GUEST_NAME_COL] || '').toString(),
                 roomNo: (bookData[i][BOOKING_ROOM_NO_COL] || '').toString(),
                 totalAmount: bAmount
               });
             }
          }
        }
        recentBookings.push({
          ticketId: (bookData[i][TICKET_ID_COL] || '').toString(),
          roomNo: (bookData[i][BOOKING_ROOM_NO_COL] || '').toString(),
          guestName: (bookData[i][GUEST_NAME_COL] || '').toString(),
          checkIn: ciDate ? ciDate.toISOString() : '',
          status: (bookData[i][BOOKING_STATUS_COL] || '').toString(),
          totalAmount: bAmount
        });
      }
      recentBookings.reverse();
      recentBookings = recentBookings.slice(0, 8);

    } catch (bookErr) {
      Logger.log("Could not load booking revenue data: " + bookErr);
    }

    // Invoice Stats
    let invoiceStats = { totalInvoices: 0, draftInvoices: 0, sentInvoices: 0, paidInvoices: 0, overdueInvoices: 0, cancelledInvoices: 0, invoiceRevenue: 0 };
    try {
      const invSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
      if (invSheet && invSheet.getLastRow() > 1) {
        const invData = invSheet.getDataRange().getValues();
        invoiceStats.totalInvoices = Math.max(0, invData.length - 1);
        for (let i = 1; i < invData.length; i++) {
          let status = (invData[i][INV_STATUS_COL] || '').toString();
          let total = parseFloat(invData[i][INV_TOTAL_COL]) || 0;
          if (status === 'Draft') invoiceStats.draftInvoices++;
          else if (status === 'Sent') invoiceStats.sentInvoices++;
          else if (status === 'Paid') { invoiceStats.paidInvoices++; invoiceStats.invoiceRevenue += total; }
          else if (status === 'Overdue') invoiceStats.overdueInvoices++;
          else if (status === 'Cancelled') invoiceStats.cancelledInvoices++;
        }
      }
    } catch (invErr) { Logger.log("Could not load invoice data: " + invErr); }

    // Today's Expected Check-Outs
    let todaysCheckOuts = [];
    try {
      const ciSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CHECKIN_SHEET_NAME);
      if (ciSheet && ciSheet.getLastRow() > 1) {
        const ciData = ciSheet.getDataRange().getValues();
        for (let i = 1; i < ciData.length; i++) {
          if ((ciData[i][CI_STATUS_COL] || '').toString() === 'Active') {
            let coDate = ciData[i][CI_CHECKOUT_DATE_COL] ? new Date(ciData[i][CI_CHECKOUT_DATE_COL]) : null;
            if (coDate) {
               const coStr = coDate.getFullYear() + '-' + String(coDate.getMonth() + 1).padStart(2, '0') + '-' + String(coDate.getDate()).padStart(2, '0');
               if (coStr === todayStr) {
                 todaysCheckOuts.push({
                   guestName: (ciData[i][CI_GUEST_NAME_COL] || '').toString(),
                   roomNo: (ciData[i][CI_ROOM_NUMBERS_COL] || '').toString(),
                   checkInId: (ciData[i][CI_ID_COL] || '').toString()
                 });
               }
            }
          }
        }
      }
    } catch (e) {}

    // Current month budget
    let currentBudget = null;
    try {
      currentBudget = getBudgetForMonth(now.getMonth() + 1, now.getFullYear());
    } catch (bdgErr) { Logger.log("Could not load budget: " + bdgErr); }

    // Read default currency from Settings
    let settingsDefaultCurrency = 'MVR';
    try {
      const setSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        
      }
    } catch (setErr) { Logger.log("Could not load settings currency: " + setErr); }

    // Step 1: Aggregate todays paid sales
    const todaysPaidSales = [];
    try {
      const invoicesSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
      if (invoicesSheet && invoicesSheet.getLastRow() > 1) {
        const invData = invoicesSheet.getDataRange().getValues();
        const localTodayStr = new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0');
        
        for (let i = 1; i < invData.length; i++) {
          const invDateStr = (invData[i][INV_CREATED_DATE_COL] || '').toString();
          const invStatus = (invData[i][INV_STATUS_COL] || '').toString().trim();
          
          if (invDateStr.includes(localTodayStr) && invStatus === 'Paid') {
            const invoiceId = (invData[i][INV_ID_COL] || '').toString();
            const guestName = (invData[i][INV_GUEST_NAME_COL] || '').toString();
            const totalSales = parseFloat(invData[i][INV_NET_AMOUNT_COL]) || 0;
            const itemsStr = (invData[i][INV_ITEMS_JSON_COL] || '').toString();
            
            let roomRent = 0;
            let foodRevenue = 0;
            
            if (itemsStr) {
              try {
                const items = JSON.parse(itemsStr);
                items.forEach(item => {
                  const desc = (item.description || '').toLowerCase();
                  const type = (item.type || '').toLowerCase();
                  const amt = parseFloat(item.amount) || 0;
                  
                  if (type === 'room' || desc.includes('room rent')) {
                    roomRent += amt;
                  } else {
                    foodRevenue += amt;
                  }
                });
              } catch(e) {}
            }
            todaysPaidSales.push({ invoiceId, guestName, roomRent, foodRevenue, totalSales });
          }
        }
      }
    } catch (invErr) { Logger.log("Could not aggregate todays sales: " + invErr); }

    return {
      totalRooms,
      bookedRooms: bookedCount,
      availableRooms: availableCount,
      maintenanceRooms: maintenanceCount,
      reservedRooms: reservedCount,
      availableRoomNumbers: availableRoomsList,
      bookedRoomNumbers: bookedRoomsList,
      allRoomsDetails,
      roomTypeBreakdown: roomTypeMap,
      bookingRevenue,
      recentBookings,
      todaysCheckIns,
      todaysCheckOuts,
      invoiceStats,
      todaysPaidSales,
      defaultCurrency: settingsDefaultCurrency
    };
  } catch (e) {
    Logger.log(`Error in getDashboardData: ${e.toString()}`);
    return { error: e.message };
  }
}

function getAvailableRoomNumbers() {
  try {
    const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    const data = roomsSheet.getDataRange().getValues();
    if (data.length <= 1) return [];

    data.shift();
    let availableRooms = [];
    data.forEach(row => {
      let status = (row[ROOM_STATUS_COL] || "").toString().toLowerCase();
      if (status === "available") {
        availableRooms.push((row[ROOM_NO_COL] || "").toString());
      }
    });
    return availableRooms;
  } catch (e) {
    Logger.log(`Error in getAvailableRoomNumbers: ${e.toString()}`);
    return [];
  }
}

function getCurrentBookings() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const headers = data.shift();

    let allBookings = data.map(row => {
      let booking = {};
      headers.forEach((header, idx) => {
        booking[header.trim().replace(/\s+/g, '')] = row[idx];
      });
      return booking;
    });

    let active = allBookings.filter(b => {
      return b.Status && b.Status.toString().toLowerCase() === 'booked';
    });

    active.forEach(b => {
      if (b.CheckIn) b.CheckIn = new Date(b.CheckIn).toISOString();
      if (b.CheckOut) b.CheckOut = new Date(b.CheckOut).toISOString();
    });

    return active;
  } catch (e) {
    Logger.log(`Error in getCurrentBookings: ${e.toString()}`);
    return { error: e.message };
  }
}

function getAllBookings() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return [];

    let bookings = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      bookings.push({
        rowIndex: i + 1,
        ticketId: (row[TICKET_ID_COL] || "").toString(),
        roomNo: (row[BOOKING_ROOM_NO_COL] || "").toString(),
        guestName: (row[GUEST_NAME_COL] || "").toString(),
        phone: (row[PHONE_COL] || "").toString(),
        email: (row[EMAIL_COL] || "").toString(),
        checkIn: row[CHECK_IN_COL] ? new Date(row[CHECK_IN_COL]).toISOString() : "",
        checkOut: row[CHECK_OUT_COL] ? new Date(row[CHECK_OUT_COL]).toISOString() : "",
        status: (row[BOOKING_STATUS_COL] || "").toString(),
        roomRate: parseFloat(row[ROOM_RATE_BOOK_COL]) || 0,
        discount: parseFloat(row[DISCOUNT_COL]) || 0,
        tax: parseFloat(row[TAX_COL]) || 0,
        paymentMethod: (row[PAYMENT_METHOD_COL] || "").toString(),
        totalAmount: parseFloat(row[TOTAL_AMOUNT_COL]) || 0,
        paymentStatus: (row[PAYMENT_STATUS_COL] || "Unpaid").toString(),
        amountPaid: parseFloat(row[AMOUNT_PAID_COL]) || 0,
        checkInTime: (row[CHECKIN_TIME_COL] || "14:00").toString(),
        checkOutTime: (row[CHECKOUT_TIME_COL] || "12:00").toString(),
        foodPlan: (row[FOOD_PLAN_COL] || "None").toString(),
        extraPerson: parseInt(row[EXTRA_PERSON_COL]) || 0,
        advancePaid: parseFloat(row[ADVANCE_PAID_COL]) || 0,
        numberOfRooms: parseInt(row[NUM_ROOMS_COL]) || 1,
        linkedCheckInId: (row[LINKED_CHECKIN_COL] || "").toString(),
        gstType: (row[BOOKING_GST_TYPE_COL] || "Excluding").toString(),
        fixRoomRent: (row[BOOKING_FIX_RENT_COL] || "No").toString(),
        fixRoomRentAmount: parseFloat(row[BOOKING_FIX_RENT_AMT_COL]) || 0,
        discountPercent: parseFloat(row[BOOKING_DISC_PCT_COL]) || 0
      });
    }
    return bookings;
  } catch (err) {
    return { error: err.message };
  }
}

/***************************************************
 * USER MANAGEMENT
 ***************************************************/
function getAllUsers() {
  try {
    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    const data = loginSheet.getDataRange().getValues();
    let users = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      users.push({
        rowIndex: i + 1,
        username: row[LOGIN_USERNAME_COL],
        role: row[LOGIN_ROLE_COL]
      });
    }
    return users;
  } catch (err) {
    return { error: err.message };
  }
}

function addUser(username, password, role) {
  try {
    if (!username || !password || !role) {
      return { success: false, message: "Missing required fields." };
    }

    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    const data = loginSheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      let storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim().toLowerCase();
      if (storedUser === username.toLowerCase()) {
        return { success: false, message: "User already exists." };
      }
    }

    loginSheet.appendRow([username.trim(), password.trim(), role.trim().toLowerCase()]);
    return { success: true, message: "User added successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateUser(rowIndex, newPassword, newRole) {
  try {
    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    if (rowIndex <= 1) {
      return { success: false, message: "Invalid row index." };
    }

    if (newPassword) {
      loginSheet.getRange(rowIndex, LOGIN_PASSWORD_COL + 1).setValue(newPassword);
    }
    if (newRole) {
      loginSheet.getRange(rowIndex, LOGIN_ROLE_COL + 1).setValue(newRole.toLowerCase());
    }

    return { success: true, message: "User updated successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteUser(rowIndex) {
  try {
    const loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    if (rowIndex <= 1) {
      return { success: false, message: "Cannot delete the header row." };
    }
    loginSheet.deleteRow(rowIndex);
    return { success: true, message: "User deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * CUSTOMER MANAGEMENT
 ***************************************************/
function getAllCustomers() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    let sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return [];
    const data = sheet.getDataRange().getValues();
    let customers = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      customers.push({
        rowIndex: i + 1,
        customerId: (row[CUST_ID_COL] || '').toString(),
        name: (row[CUST_NAME_COL] || '').toString(),
        companyName: (row[CUST_COMPANY_COL] || '').toString(),
        gstNumber: (row[CUST_GST_COL] || '').toString(),
        identityProof: (row[CUST_IDENTITY_COL] || '').toString(),
        phone: (row[CUST_PHONE_COL] || '').toString(),
        email: (row[CUST_EMAIL_COL] || '').toString(),
        address: (row[CUST_ADDRESS_COL] || '').toString(),
        city: (row[CUST_CITY_COL] || '').toString(),
        state: (row[CUST_STATE_COL] || '').toString(),
        pinCode: (row[CUST_PINCODE_COL] || '').toString(),
        country: (row[CUST_COUNTRY_COL] || '').toString(),
        linkedUsername: (row[CUST_LINKED_USER_COL] || '').toString(),
        createdAt: (row[CUST_CREATED_AT_COL] || '').toString()
      });
    }
    return customers;
  } catch (err) {
    return { error: err.message };
  }
}

function addCustomer(customerData) {
  try {
    if (!customerData.name) return { success: false, message: "Customer name is required." };

    const ss = SpreadsheetApp.openById(SS_ID);
    let sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CUSTOMERS_SHEET_NAME);
      sheet.appendRow(["Customer ID", "Name", "Phone", "Email", "Address", "City", "State", "Country", "Zip Code", "DOB", "Anniversary", "Gender", "Marital Status", "Identity Proof", "Linked Username", "Notes", "Created Date", "Company Name", "GST Number"]);
      const headerRange = sheet.getRange(1, 1, 1, 19);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#001f3f");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    const custId = "CUST-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
    const now = new Date().toISOString();
    const email = (customerData.email || '').trim();
    let linkedUsername = '';

    if (email) {
      const autoPass = "guest" + new Date().getTime().toString().slice(-4);
      createUserIfNotExists(email, autoPass);
      linkedUsername = email;
    }

    sheet.appendRow([
      custId,
      (customerData.name || '').trim(),
      (customerData.phone || '').trim(),
      email,
      (customerData.city || '').trim(),
      (customerData.maritalStatus || '').trim(),
      (customerData.notes || '').trim(),
      now,
      linkedUsername
    ]);

    return { success: true, message: "Customer added successfully!", customerId: custId };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function syncCustomerProfile(guestData) {
  try {
    // The phone number is the strict unique identifier. If missing, abort sync.
    if (!guestData || !guestData.phone) return;

    initDataStructure(); // Ensure the 14-column schema is active

    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet) return;

    const data = sheet.getDataRange().getValues();
    let rowIndex = -1;
    const incomingPhone = String(guestData.phone).trim();

    // 1. Search for existing customer by Mobile Number
    for (let i = 1; i < data.length; i++) {
      let existingPhone = String(data[i][CUST_PHONE_COL] || '').trim();
      if (existingPhone === incomingPhone) {
        rowIndex = i + 1;
        break;
      }
    }

    if (rowIndex > -1) {
      // 2. UPDATE EXISTING: Aggressively overwrite old data with new data if provided during checkout
      if (guestData.name) sheet.getRange(rowIndex, CUST_NAME_COL + 1).setValue(guestData.name);
      if (guestData.companyName) sheet.getRange(rowIndex, CUST_COMPANY_COL + 1).setValue(guestData.companyName);
      if (guestData.gstNumber) sheet.getRange(rowIndex, CUST_GST_COL + 1).setValue(guestData.gstNumber);
      if (guestData.identityProof) sheet.getRange(rowIndex, CUST_IDENTITY_COL + 1).setValue(guestData.identityProof);
      if (guestData.email) sheet.getRange(rowIndex, CUST_EMAIL_COL + 1).setValue(guestData.email);
      if (guestData.address) sheet.getRange(rowIndex, CUST_ADDRESS_COL + 1).setValue(guestData.address);
      if (guestData.city) sheet.getRange(rowIndex, CUST_CITY_COL + 1).setValue(guestData.city);
      if (guestData.state) sheet.getRange(rowIndex, CUST_STATE_COL + 1).setValue(guestData.state);
      if (guestData.pinCode) sheet.getRange(rowIndex, CUST_PINCODE_COL + 1).setValue(guestData.pinCode);
      if (guestData.country) sheet.getRange(rowIndex, CUST_COUNTRY_COL + 1).setValue(guestData.country);
    } else {
      // 3. CREATE NEW: No matching mobile number found, build a fresh 14-column row
      const newId = "CUST-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
      const row = new Array(14).fill('');

      row[CUST_ID_COL] = newId;
      row[CUST_NAME_COL] = guestData.name || '';
      row[CUST_COMPANY_COL] = guestData.companyName || '';
      row[CUST_GST_COL] = guestData.gstNumber || '';
      row[CUST_IDENTITY_COL] = guestData.identityProof || '';
      row[CUST_PHONE_COL] = incomingPhone;
      row[CUST_EMAIL_COL] = guestData.email || '';
      row[CUST_ADDRESS_COL] = guestData.address || '';
      row[CUST_CITY_COL] = guestData.city || '';
      row[CUST_STATE_COL] = guestData.state || '';
      row[CUST_PINCODE_COL] = guestData.pinCode || '';
      row[CUST_COUNTRY_COL] = guestData.country || '';
      row[CUST_LINKED_USER_COL] = '';
      row[CUST_CREATED_AT_COL] = new Date().toISOString();
      
      sheet.appendRow(row);
    }
    SpreadsheetApp.flush();
  } catch (e) {
    Logger.log("Customer Sync Error: " + e.message);
  }
}

function updateCustomer(rowIndex, customerData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Customers sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    if (customerData.name !== undefined) sheet.getRange(rowIndex, CUST_NAME_COL + 1).setValue(customerData.name);
    if (customerData.companyName !== undefined) sheet.getRange(rowIndex, CUST_COMPANY_COL + 1).setValue(customerData.companyName);
    if (customerData.gstNumber !== undefined) sheet.getRange(rowIndex, CUST_GST_COL + 1).setValue(customerData.gstNumber);
    if (customerData.identityProof !== undefined) sheet.getRange(rowIndex, CUST_IDENTITY_COL + 1).setValue(customerData.identityProof);
    if (customerData.phone !== undefined) sheet.getRange(rowIndex, CUST_PHONE_COL + 1).setValue(customerData.phone);
    if (customerData.email !== undefined) sheet.getRange(rowIndex, CUST_EMAIL_COL + 1).setValue(customerData.email);
    if (customerData.address !== undefined) sheet.getRange(rowIndex, CUST_ADDRESS_COL + 1).setValue(customerData.address);
    if (customerData.city !== undefined) sheet.getRange(rowIndex, CUST_CITY_COL + 1).setValue(customerData.city);
    if (customerData.state !== undefined) sheet.getRange(rowIndex, CUST_STATE_COL + 1).setValue(customerData.state);
    if (customerData.pinCode !== undefined) sheet.getRange(rowIndex, CUST_PINCODE_COL + 1).setValue(customerData.pinCode);
    if (customerData.country !== undefined) sheet.getRange(rowIndex, CUST_COUNTRY_COL + 1).setValue(customerData.country);

    return { success: true, message: "Customer updated successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteCustomer(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Customers sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Cannot delete header row." };
    sheet.deleteRow(rowIndex);
    return { success: true, message: "Customer deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * ROOM MANAGEMENT
 ***************************************************/
function getAllRooms() {
  try {
    const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    const data = roomsSheet.getDataRange().getValues();
    let rooms = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      rooms.push({
        rowIndex: i + 1,
        roomNo: row[ROOM_NO_COL],
        roomType: row[ROOM_TYPE_COL],
        roomRate: row[ROOM_RATE_COL],
        roomStatus: row[ROOM_STATUS_COL]
      });
    }

    return rooms;
  } catch (err) {
    return { error: err.message };
  }
}

function addRoom(roomNo, roomType, roomRate, roomStatus) {
  try {
    if (!roomNo) {
      return { success: false, message: "Room No is required." };
    }

    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
      let existingRoomNo = (data[i][ROOM_NO_COL] || "").toString().trim().toLowerCase();
      if (existingRoomNo === roomNo.toString().toLowerCase()) {
        return { success: false, message: "A room with this number already exists." };
      }
    }

    sheet.appendRow([
      roomNo.trim(),
      (roomType || "").trim(),
      parseFloat(roomRate) || 0,
      (roomStatus || "Available").trim()
    ]);

    return { success: true, message: "Room added successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateRoom(rowIndex, roomNo, roomType, roomRate, roomStatus) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    if (rowIndex <= 1) {
      return { success: false, message: "Invalid row index." };
    }

    const currentValue = sheet.getRange(rowIndex, ROOM_NO_COL + 1).getValue();
    if (roomNo && roomNo.toString().trim().toLowerCase() !== (currentValue || "").toString().trim().toLowerCase()) {
      const data = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (i + 1 === rowIndex) continue;
        let existingNo = (data[i][ROOM_NO_COL] || "").toString().toLowerCase();
        if (existingNo === roomNo.toString().toLowerCase()) {
          return { success: false, message: "Another room with this number already exists." };
        }
      }
    }

    if (roomNo) {
      sheet.getRange(rowIndex, ROOM_NO_COL + 1).setValue(roomNo);
    }
    if (roomType !== undefined) {
      sheet.getRange(rowIndex, ROOM_TYPE_COL + 1).setValue(roomType);
    }
    if (roomRate !== undefined) {
      sheet.getRange(rowIndex, ROOM_RATE_COL + 1).setValue(parseFloat(roomRate) || 0);
    }
    if (roomStatus !== undefined) {
      sheet.getRange(rowIndex, ROOM_STATUS_COL + 1).setValue(roomStatus);
    }

    return { success: true, message: "Room updated successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteRoom(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    if (rowIndex <= 1) {
      return { success: false, message: "Cannot delete header row." };
    }
    sheet.deleteRow(rowIndex);
    return { success: true, message: "Room deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * SETTINGS MANAGEMENT
 ***************************************************/
function getSettings() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
    if (!sheet || sheet.getLastRow() < 2) {
      return { success: true, data: {
        hotelName: 'Hill View Eco Retreat', hotelAddress: '', hotelPhone: '', hotelEmail: '', hotelTIN: '',
        logoFileId: '', logoUrl: '', defaultCurrency: 'MVR', gstDefaultPercent: 16,
        nextInvoiceNum: 1, nextQuoteNum: 1, pdfFolderId: '', logoFolderId: ''
      }};
    }
    const row = sheet.getRange(2, 1, 1, 13).getValues()[0];
    return { success: true, data: {
      hotelName: (row[SET_HOTEL_NAME_COL] || 'Hill View Eco Retreat').toString(),
      hotelAddress: (row[SET_HOTEL_ADDRESS_COL] || '').toString(),
      hotelPhone: (row[SET_HOTEL_PHONE_COL] || '').toString(),
      hotelEmail: (row[SET_HOTEL_EMAIL_COL] || '').toString(),
      hotelTIN: (row[SET_HOTEL_TIN_COL] || '').toString(),
      logoFileId: (row[SET_LOGO_FILE_ID_COL] || '').toString(),
      logoUrl: (row[SET_LOGO_URL_COL] || '').toString(),
      gstDefaultPercent: parseFloat(row[SET_GST_DEFAULT_COL]) || 16,
      nextInvoiceNum: parseInt(row[SET_NEXT_INVOICE_COL]) || 1,
      pdfFolderId: (row[SET_PDF_FOLDER_ID_COL] || '').toString(),
      logoFolderId: (row[SET_LOGO_FOLDER_ID_COL] || '').toString()
    }};
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateSettings(settingsData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    let sheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Settings sheet not found." };

    // Read current counter values fresh from sheet to prevent race condition
    let currentInvoiceNum = 1;
    let currentPdfFolderId = settingsData.pdfFolderId || '';
    let currentLogoFolderId = settingsData.logoFolderId || '';
    if (sheet.getLastRow() >= 2) {
      const existing = sheet.getRange(2, 1, 1, 11).getValues()[0];
      currentInvoiceNum = parseInt(existing[SET_NEXT_INVOICE_COL]) || 1;
      currentPdfFolderId = (existing[SET_PDF_FOLDER_ID_COL] || '').toString() || currentPdfFolderId;
      currentLogoFolderId = (existing[SET_LOGO_FOLDER_ID_COL] || '').toString() || currentLogoFolderId;
    }

    const row = [
      settingsData.hotelName || 'Hill View Eco Retreat',
      settingsData.hotelAddress || '',
      settingsData.hotelPhone || '',
      settingsData.hotelEmail || '',
      settingsData.hotelTIN || '',
      settingsData.logoFileId || '',
      settingsData.logoUrl || '',
      parseFloat(settingsData.gstDefaultPercent) || 16,
      currentInvoiceNum,
      currentPdfFolderId,
      currentLogoFolderId
    ];

    if (sheet.getLastRow() < 2) {
      sheet.appendRow(row);
    } else {
      sheet.getRange(2, 1, 1, 11).setValues([row]);
    }

    return { success: true, message: "Settings updated successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function uploadLogo(base64Data, fileName, mimeType) {
  try {
    const folder = getOrCreateDriveFolder("Hotel Invoice App Logos");
    const decoded = Utilities.base64Decode(base64Data);
    const blob = Utilities.newBlob(decoded, mimeType, fileName);
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const fileId = file.getId();
    const logoUrl = "https://drive.google.com/thumbnail?id=" + fileId + "&sz=w400";

    // Update settings with logo info
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
    if (sheet && sheet.getLastRow() >= 2) {
      sheet.getRange(2, SET_LOGO_FILE_ID_COL + 1).setValue(fileId);
      sheet.getRange(2, SET_LOGO_URL_COL + 1).setValue(logoUrl);
      sheet.getRange(2, SET_LOGO_FOLDER_ID_COL + 1).setValue(folder.getId());
    }

    return { success: true, message: "Logo uploaded successfully!", fileId: fileId, logoUrl: logoUrl };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * INVOICE MANAGEMENT
 ***************************************************/
function getAllInvoices() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return [];
    const data = sheet.getDataRange().getValues();
    let records = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      records.push({
        rowIndex: i + 1,
        invoiceId: (row[INV_ID_COL] || '').toString(),
        guestName: (row[INV_GUEST_NAME_COL] || '').toString(),
        phone: (row[INV_PHONE_COL] || '').toString(),
        email: (row[INV_EMAIL_COL] || '').toString(),
        customerTIN: (row[INV_CUSTOMER_TIN_COL] || '').toString(),
        currency: (row[INV_CURRENCY_COL] || 'MVR').toString(),
        createdDate: (row[INV_CREATED_DATE_COL] || '').toString(),
        dueDate: (row[INV_DUE_DATE_COL] || '').toString(),
        status: (row[INV_STATUS_COL] || 'Draft').toString(),
        items: (row[INV_ITEMS_COL] || '[]').toString(),
        subTotal: parseFloat(row[INV_SUBTOTAL_COL]) || 0,
        gstEnabled: row[INV_GST_ENABLED_COL] === true || row[INV_GST_ENABLED_COL] === 'true',
        gstPercent: parseFloat(row[INV_GST_PERCENT_COL]) || 0,
        gstAmount: parseFloat(row[INV_GST_AMOUNT_COL]) || 0,
        greenTaxEnabled: false, // DEPRECATED
        greenTaxPerNight: 0, // DEPRECATED
        greenTaxPax: 0, // DEPRECATED
        greenTaxNights: 0, // DEPRECATED
        greenTaxAmount: 0, // DEPRECATED
        discount: parseFloat(row[INV_DISCOUNT_COL]) || 0,
        totalAmount: parseFloat(row[INV_TOTAL_COL]) || 0,
        notes: (row[INV_NOTES_COL] || '').toString(),
                pdfDriveLink: (row[INV_PDF_LINK_COL] || '').toString(),
        createdBy: (row[INV_CREATED_BY_COL] || '').toString(),
        updatedAt: (row[INV_UPDATED_AT_COL] || '').toString()
      });
    }
    return records;
  } catch (err) {
    return { error: err.message };
  }
}

function getInvoiceById(invoiceId) {
  try {
    const invoices = getAllInvoices();
    if (invoices.error) return { success: false, message: invoices.error };
    const found = invoices.find(inv => inv.invoiceId === invoiceId);
    if (!found) return { success: false, message: "Invoice not found." };
    return { success: true, data: found };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function addInvoice(invoiceData) {
  try {
    if (!invoiceData.guestName) return { success: false, message: "Guest name is required." };

    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Invoices sheet not found." };

    const id = getNextSequentialId('invoice');
    const now = new Date().toISOString();

    // Calculate taxes
    const subTotal = parseFloat(invoiceData.subTotal) || 0;
    const discount = parseFloat(invoiceData.discount) || 0;
    const gstEnabled = invoiceData.gstEnabled === true;
    const gstPercent = parseFloat(invoiceData.gstPercent) || 0;
    const gstAmount = gstEnabled ? (subTotal - discount) * (gstPercent / 100) : 0;
    const totalAmount = subTotal - discount + gstAmount;

    sheet.appendRow([
      id,
      (invoiceData.guestName || '').trim(),
      (invoiceData.phone || '').trim(),
      (invoiceData.email || '').trim(),
      (invoiceData.customerTIN || '').trim(),
      invoiceData.currency || 'MVR',
      now,
      invoiceData.dueDate || '',
      invoiceData.status || 'Draft',
      typeof invoiceData.items === 'string' ? invoiceData.items : JSON.stringify(invoiceData.items || []),
      subTotal,
      gstEnabled,
      gstPercent,
      Math.round(gstAmount * 100) / 100,
      discount,
      Math.round(totalAmount * 100) / 100,
      (invoiceData.notes || '').trim(),
            '',
      (invoiceData.createdBy || '').trim(),
      now
    ]);

    return { success: true, message: "Invoice created successfully!", invoiceId: id };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateInvoice(rowIndex, invoiceData) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Invoices sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    const now = new Date().toISOString();
    const subTotal = parseFloat(invoiceData.subTotal) || 0;
    const discount = parseFloat(invoiceData.discount) || 0;
    const gstEnabled = invoiceData.gstEnabled === true;
    const gstPercent = parseFloat(invoiceData.gstPercent) || 0;
    const gstAmount = gstEnabled ? (subTotal - discount) * (gstPercent / 100) : 0;
    const totalAmount = subTotal - discount + gstAmount;

    // Read old status before overwriting
    const oldStatus = (sheet.getRange(rowIndex, INV_STATUS_COL + 1).getValue() || '').toString();

    // Keep existing ID and createdDate, update everything else
    const existingId = sheet.getRange(rowIndex, INV_ID_COL + 1).getValue();
    const existingCreated = sheet.getRange(rowIndex, INV_CREATED_DATE_COL + 1).getValue();
        const existingPdf = sheet.getRange(rowIndex, INV_PDF_LINK_COL + 1).getValue();
    const existingCreatedBy = sheet.getRange(rowIndex, INV_CREATED_BY_COL + 1).getValue();

    const row = [
      existingId,
      (invoiceData.guestName || '').trim(),
      (invoiceData.phone || '').trim(),
      (invoiceData.email || '').trim(),
      (invoiceData.customerTIN || '').trim(),
      invoiceData.currency || 'MVR',
      existingCreated,
      invoiceData.dueDate || '',
      invoiceData.status || 'Draft',
      typeof invoiceData.items === 'string' ? invoiceData.items : JSON.stringify(invoiceData.items || []),
      subTotal,
      gstEnabled,
      gstPercent,
      Math.round(gstAmount * 100) / 100,
      discount,
      Math.round(totalAmount * 100) / 100,
      (invoiceData.notes || '').trim(),
            existingPdf,
      existingCreatedBy,
      now
    ];

    sheet.getRange(rowIndex, 1, 1, 20).setValues([row]);

    return { success: true, message: "Invoice updated successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteInvoice(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Invoices sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Cannot delete header row." };
    sheet.deleteRow(rowIndex);
    return { success: true, message: "Invoice deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function reopenInvoice(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Invoices sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };
    sheet.getRange(rowIndex, INV_STATUS_COL + 1).setValue('Draft');
    sheet.getRange(rowIndex, INV_UPDATED_AT_COL + 1).setValue(new Date().toISOString());
    return { success: true, message: "Invoice reopened as Draft." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function markInvoicePaid(rowIndex, paymentData) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Invoices sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    const totalAmount = parseFloat(sheet.getRange(rowIndex, INV_TOTAL_COL + 1).getValue()) || 0;
    const itemsStr = sheet.getRange(rowIndex, INV_ITEMS_COL + 1).getValue();
    let items = [];
    try { items = JSON.parse(itemsStr || '[]'); } catch(e) {}

    let metaIndex = items.findIndex(i => i.isMeta);
    let meta = metaIndex >= 0 ? items[metaIndex] : { isMeta: true };

    let prevPaid = parseFloat(meta.amountPaid) || 0;
    let newPaid = prevPaid + (parseFloat(paymentData.amount) || 0);
    let balance = totalAmount - newPaid;

    meta.amountPaid = newPaid;
    meta.balance = balance;
    meta.paymentMode = paymentData.mode || meta.paymentMode || 'Cash';

    if (metaIndex >= 0) {
      items[metaIndex] = meta;
    } else {
      items.push(meta);
    }

    let newStatus = balance <= 0 ? 'Paid' : (newPaid > 0 ? 'Partial' : 'Unpaid');

    let oldNotes = (sheet.getRange(rowIndex, INV_NOTES_COL + 1).getValue() || '').toString();
    let pDate = paymentData.date || new Date().toISOString().split('T')[0];
    let noteAddition = `Payment: ${paymentData.amount} via ${paymentData.mode} on ${pDate}`;
    let newNotes = oldNotes ? oldNotes + '\n' + noteAddition : noteAddition;

    sheet.getRange(rowIndex, INV_ITEMS_COL + 1).setValue(JSON.stringify(items));
    sheet.getRange(rowIndex, INV_STATUS_COL + 1).setValue(newStatus);
    sheet.getRange(rowIndex, INV_NOTES_COL + 1).setValue(newNotes);
    sheet.getRange(rowIndex, INV_UPDATED_AT_COL + 1).setValue(new Date().toISOString());

    return { success: true, message: `Payment of ${paymentData.amount} recorded. Status is now ${newStatus}.` };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function checkOverdueInvoices() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(INVOICES_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return { success: true, overdueCount: 0 };

    const data = sheet.getDataRange().getValues();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let overdueCount = 0;

    for (let i = 1; i < data.length; i++) {
      const status = (data[i][INV_STATUS_COL] || '').toString();
      const dueDateStr = (data[i][INV_DUE_DATE_COL] || '').toString();

      if (status !== 'Draft' && status !== 'Sent') continue;
      if (!dueDateStr) continue;

      const dueDate = new Date(dueDateStr);
      dueDate.setHours(0, 0, 0, 0);

      if (dueDate < today) {
        sheet.getRange(i + 1, INV_STATUS_COL + 1).setValue('Overdue');
        sheet.getRange(i + 1, INV_UPDATED_AT_COL + 1).setValue(new Date().toISOString());
        overdueCount++;
      }
    }

    if (overdueCount > 0) SpreadsheetApp.flush();

    return {
      success: true,
      overdueCount: overdueCount,
      message: overdueCount > 0 ? overdueCount + ' invoice(s) marked as overdue.' : 'No new overdue invoices.'
    };
  } catch (err) {
    return { success: false, message: err.message, overdueCount: 0 };
  }
}

/***************************************************
 * EMAIL INVOICE / QUOTE
 ***************************************************/
function generateDocumentEmailHtml(type, data, settings) {
  const hotelName = settings.hotelName || 'Hill View Eco Retreat';
  const hotelAddress = settings.hotelAddress || '';
  const hotelPhone = settings.hotelPhone || '';
  const hotelEmail = settings.hotelEmail || '';
  const cur = data.currency || 'MVR';
  const docLabel = 'INVOICE';
  const docId = data.invoiceId;

  let items = [];
  try { items = JSON.parse(typeof data.items === 'string' ? data.items : '[]'); } catch (e) { items = []; }

  // Re-run the global categorization math matching the frontend converter
  let roomsAmt = 0;
  let extraBedAmt = 0;
  let foodBevAmt = 0;
  let laundryAmt = 0;

  items.forEach(it => {
     let desc = (it.description || '').toLowerCase();
     let type = (it.type || '').toLowerCase();
     
     if (type === 'room' || desc.includes('room rent') || desc.includes('combined room')) {
       roomsAmt += parseFloat(it.amount) || 0;
     } else if (desc.includes('extra bed') || type === 'extrabed') {
       extraBedAmt += parseFloat(it.amount) || 0;
     } else if (desc.includes('laundry')) {
       laundryAmt += parseFloat(it.amount) || 0;
     } else {
       foodBevAmt += parseFloat(it.amount) || 0;
     }
  });

  const subTotal = parseFloat(data.subTotal) || 0;
  const discountAmount = parseFloat(data.discount) || 0;
  const gstAmount = parseFloat(data.gstAmount) || 0;
  const billAmount = parseFloat(data.totalAmount) || 0;

  let totalsRows = '<tr><td><strong>Subtotal</strong></td><td class="right"><strong>' + cur + ' ' + subTotal.toFixed(2) + '</strong></td></tr>';
  if (discountAmount > 0) totalsRows += '<tr><td>Discount</td><td class="right">- ' + cur + ' ' + discountAmount.toFixed(2) + '</td></tr>';
  
  if (data.gstEnabled && gstAmount > 0) {
      let halfGst = (gstAmount / 2).toFixed(2);
      let halfPercent = ((parseFloat(data.gstPercent) || 0) / 2).toFixed(2);
      totalsRows += '<tr><td>SGST (' + halfPercent + '%)</td><td class="right">' + cur + ' ' + halfGst + '</td></tr>';
      totalsRows += '<tr><td>CGST (' + halfPercent + '%)</td><td class="right">' + cur + ' ' + halfGst + '</td></tr>';
  } else if (data.gstEnabled) {
      totalsRows += '<tr><td>GST (' + (data.gstPercent || 0) + '%)</td><td class="right">' + cur + ' ' + gstAmount.toFixed(2) + '</td></tr>';
  }

  totalsRows += '<tr class="total"><td><strong>Bill Amount</strong></td><td class="right"><strong>' + cur + ' ' + billAmount.toFixed(2) + '</strong></td></tr>';

  let dateInfo = '<p><strong>Date:</strong> ' + (data.createdDate || '').split('T')[0] + '</p><p><strong>Status:</strong> ' + (data.status || '') + '</p>';

  return '<html><head><style>body{font-family:Arial,sans-serif;margin:20px;color:#333}' +
    '.doc-container{max-width:650px;margin:auto;border:1px solid #ddd;padding:30px;border-radius:4px}' +
    'h2{text-align:center;color:#001f3f;margin-bottom:5px}' +
    '.subtitle{text-align:center;color:#666;font-size:14px;margin-bottom:20px}' +
    'table{width:100%;border-collapse:collapse;margin:15px 0}' +
    'th,td{padding:10px;border:1px solid #ddd;text-align:left;font-size:14px}' +
    'th{background:#001f3f;color:white}' +
    '.right{text-align:right}' +
    '.total{font-weight:bold;background:#f0f0f0}' +
    '.hotel-info{text-align:center;color:#666;font-size:13px;margin-bottom:20px}' +
    '.footer{text-align:center;margin-top:25px;padding-top:15px;border-top:1px solid #ddd;color:#888;font-size:12px}' +
    '</style></head><body><div class="doc-container">' +
    '<h2>' + hotelName + '</h2>' +
    '<p class="subtitle">' + docLabel + '</p>' +
    '<div class="hotel-info">' + (hotelAddress ? hotelAddress + '<br>' : '') + (hotelPhone ? 'Phone: ' + hotelPhone + ' | ' : '') + (hotelEmail ? 'Email: ' + hotelEmail : '') + '</div>' +
    '<p><strong>' + docLabel + ' #:</strong> ' + docId + '</p>' +
    '<p><strong>Guest:</strong> ' + (data.guestName || '') + '</p>' +
    '<p><strong>Email:</strong> ' + (data.email || '') + '</p>' +
    (data.phone ? '<p><strong>Phone:</strong> ' + data.phone + '</p>' : '') +
    dateInfo +
    '<table><tr><th>Category</th><th class="right">Amount (' + cur + ')</th></tr>' +
    (roomsAmt > 0 ? '<tr><td>Room Rent</td><td class="right">' + cur + ' ' + roomsAmt.toFixed(2) + '</td></tr>' : '') +
    (extraBedAmt > 0 ? '<tr><td>Extra Bed</td><td class="right">' + cur + ' ' + extraBedAmt.toFixed(2) + '</td></tr>' : '') +
    (foodBevAmt > 0 ? '<tr><td>Food & Beverage</td><td class="right">' + cur + ' ' + foodBevAmt.toFixed(2) + '</td></tr>' : '') +
    (laundryAmt > 0 ? '<tr><td>Laundry</td><td class="right">' + cur + ' ' + laundryAmt.toFixed(2) + '</td></tr>' : '') +
    totalsRows + '</table>' +
    (data.notes ? '<p style="font-style:italic;color:#666">Notes: ' + data.notes + '</p>' : '') +
    '<div class="footer"><p>Thank you for choosing ' + hotelName + '!</p></div>' +
    '</div></body></html>';
}

function emailInvoice(invoiceId) {
  try {
    const result = getInvoiceById(invoiceId);
    if (!result.success) return result;
    const inv = result.data;

    if (!inv.email) return { success: false, message: "No email address on this invoice." };

    const settingsResult = getSettings();
    const settings = settingsResult.success ? settingsResult.data : { hotelName: 'Hill View Eco Retreat' };

    const htmlBody = generateDocumentEmailHtml('invoice', inv, settings);
    const subject = settings.hotelName + ' - Invoice ' + inv.invoiceId;

    MailApp.sendEmail({
      to: inv.email,
      subject: subject,
      body: 'Dear ' + inv.guestName + ',\n\nPlease find your invoice ' + inv.invoiceId + ' for ' + (inv.currency || 'MVR') + ' ' + inv.totalAmount.toFixed(2) + '.\n\nThank you!\n' + settings.hotelName,
      htmlBody: htmlBody
    });

    return { success: true, message: "Invoice emailed to " + inv.email + " successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}


/***************************************************
 * PDF DRIVE STORAGE
 ***************************************************/
function savePdfToDrive(base64PdfData, fileName, recordId, type) {
  try {
    const folder = getOrCreateDriveFolder("Hotel Invoice PDFs");
    const decoded = Utilities.base64Decode(base64PdfData);
    const blob = Utilities.newBlob(decoded, 'application/pdf', fileName);
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const fileUrl = file.getUrl();

    // Update the PDF link column in the appropriate sheet
    const ss = SpreadsheetApp.openById(SS_ID);
    if (type === 'invoice') {
      const sheet = ss.getSheetByName(INVOICES_SHEET_NAME);
      if (sheet) {
        const data = sheet.getDataRange().getValues();
        for (let i = 1; i < data.length; i++) {
          if ((data[i][INV_ID_COL] || '').toString() === recordId) {
            sheet.getRange(i + 1, INV_PDF_LINK_COL + 1).setValue(fileUrl);
            break;
          }
        }
      }
    }

    // Update PDF folder ID in settings
    const settingsSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
    if (settingsSheet && settingsSheet.getLastRow() >= 2) {
      settingsSheet.getRange(2, SET_PDF_FOLDER_ID_COL + 1).setValue(folder.getId());
    }

    return { success: true, message: "PDF saved to Drive!", fileUrl: fileUrl };
  } catch (err) {
    return { success: false, message: err.message };
  }
}


/***************************************************
 * SETUP DEMO DATA
 * Deletes ALL existing sheets, recreates them
 * with headers, and populates with generic demo data.
 * Run this once from the Script Editor to set up.
 ***************************************************/
/**
 * Automatically adds, modifies, or deletes sheets and their headers according to logic.
 * @param {Array<Object>} configArray - Array of sheet configurations: {sheetName: "Name", headers: ["Col1", "Col2"], deleteSheet: false}
 */
function manageSheetsDataStructure(configArray) {
  const ss = SpreadsheetApp.openById(SS_ID);
  const currentSheets = ss.getSheets().reduce((acc, sheet) => {
    acc[sheet.getName()] = sheet;
    return acc;
  }, {});

  for (let config of configArray) {
    if (config.deleteSheet) {
      if (currentSheets[config.sheetName] && ss.getSheets().length > 1) {
        ss.deleteSheet(currentSheets[config.sheetName]);
        delete currentSheets[config.sheetName];
      }
      continue;
    }

    let sheet = currentSheets[config.sheetName];
    if (!sheet) {
      sheet = ss.insertSheet(config.sheetName);
      currentSheets[config.sheetName] = sheet;
    }

    // Set/Update headers
    if (config.headers && config.headers.length > 0) {
      // Clear the entire first row to strictly synchronize headers
      const maxCols = sheet.getMaxColumns();
      if (maxCols > 0) {
        sheet.getRange(1, 1, 1, maxCols).clearContent();
      }
      
      // Write the exact config.headers array into row 1
      const newHeaders = [...config.headers];
      
      // Ensure the sheet has enough columns for the new headers
      if (maxCols < newHeaders.length) {
        sheet.insertColumnsAfter(maxCols, newHeaders.length - maxCols);
      }
      
      const headerRange = sheet.getRange(1, 1, 1, newHeaders.length);
      headerRange.setValues([newHeaders]);
      
      // Re-apply formatting
      headerRange.setFontWeight("bold");
      headerRange.setFontColor("#ffffff");
      headerRange.setBackground("#001f3f");
    }
  }
}

function initDataStructure() {
  const config = [
    { sheetName: LOGIN_SHEET_NAME, headers: ["Username", "Password", "Role"] },
    { sheetName: ROOMS_SHEET_NAME, headers: ["Room No", "Room Type", "Room Rate", "Room Status"] },
    { sheetName: BOOKINGS_SHEET_NAME, headers: ["Ticket ID", "Room No", "Guest Name", "Phone", "Email", "Check-In", "Check-Out", "Status", "Room Rate", "Discount", "Tax", "Payment Method", "Total Amount", "Payment Status", "Amount Paid", "CheckIn Time", "CheckOut Time", "Food Plan", "Extra Person", "Advance Paid", "Num Rooms", "Linked CheckIn", "GST Type", "Fix Rent", "Fix Rent Amount", "Discount Percent"] },
    { sheetName: INVOICES_SHEET_NAME, headers: ["InvoiceID", "GuestName", "Phone", "Email", "CustomerTIN", "Currency", "CreatedDate", "DueDate", "Status", "Items", "SubTotal", "GSTEnabled", "GSTPercent", "GSTAmount", "Discount", "TotalAmount", "Notes", "PDFDriveLink", "CreatedBy", "UpdatedAt"] },
    { sheetName: SETTINGS_SHEET_NAME, headers: ["HotelName", "HotelAddress", "HotelPhone", "HotelEmail", "HotelTIN", "LogoFileId", "LogoUrl", "GSTDefaultPercent", "NextInvoiceNum", "PDFDriveFolderId", "LogoDriveFolderId", "NextCheckInNum", "NextBillNum"] },
    { sheetName: CUSTOMERS_SHEET_NAME, headers: ["Customer ID", "Guest Name", "Company Name", "GST Number", "Identity Proof", "Mobile", "Email", "Village/Street", "City", "State", "Pin Code", "Country", "Linked Username", "Created Date"] },
    { sheetName: CHECKIN_SHEET_NAME, headers: ["CheckIn ID", "Linked Ticket ID", "Guest Name", "Company Name", "GST Number", "Identity Proof", "Mobile", "Email", "Village/Street", "City", "State", "Pin Code", "Country", "Purpose of Visit", "Check-In Date", "Check-In Time", "Check-Out Date", "Check-Out Time", "Room Numbers", "Room Types", "Number of Rooms", "Pax", "Room Pax Breakdown", "Advance Paid", "Payment Method", "Extra Person", "Food Plan", "GST Type", "Fix Room Rent", "Fix Room Rent Amount", "Bill To", "Discount Percent", "Status", "Created At", "Billing Format"] },
    { sheetName: RESTAURANT_SHEET_NAME, headers: ["OrderID", "CheckInID", "RoomNo", "Date", "MealPeriod", "ItemName", "Quantity", "Rate", "TotalAmount", "Status", "BilledCheckInID", "AddedBy"] },
    { sheetName: STAY_SEGMENTS_SHEET_NAME, headers: ["Segment ID", "CheckIn ID", "Room Numbers", "Rate", "Pax", "Start Date", "End Date", "Created By", "Timestamp"] },
    { sheetName: MENU_SHEET_NAME, headers: ["ItemName", "FoodCategory", "DefaultPrice"] }
  ];
  manageSheetsDataStructure(config);
}

function getAllMenuItems() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(MENU_SHEET_NAME);
    if (!sheet || sheet.getLastRow() < 2) return [];

    const data = sheet.getDataRange().getValues();
    const items = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      const itemName = (row[MENU_ITEM_NAME_COL] || "").toString().trim();
      if (itemName) {
        items.push({
          rowIndex: i + 1,
          itemName: itemName,
          foodCategory: (row[MENU_CATEGORY_COL] || "").toString().trim(),
          defaultPrice: parseFloat(row[MENU_PRICE_COL]) || 0
        });
      }
    }

    return items;
  } catch (e) {
    Logger.log("Error in getAllMenuItems: " + e.toString());
    return [];
  }
}

function addMenuItem(itemName, category, price) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(MENU_SHEET_NAME);
    if (!sheet) return { success: false, message: "Menu sheet not found." };
    
    const data = sheet.getDataRange().getValues();
    const cleanName = itemName.toString().trim();
    for (let i = 1; i < data.length; i++) {
      if ((data[i][MENU_ITEM_NAME_COL] || "").toString().trim().toLowerCase() === cleanName.toLowerCase()) {
        return { success: false, message: "A menu item with this name already exists." };
      }
    }
    
    sheet.appendRow([cleanName, category || 'Lunch', parseFloat(price) || 0]);
    SpreadsheetApp.flush();
    return { success: true, message: "Menu item added successfully." };
  } catch (e) {
    Logger.log("Error in addMenuItem: " + e.toString());
    return { success: false, message: e.message };
  }
}

function updateMenuItem(rowIndex, itemName, category, price) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(MENU_SHEET_NAME);
    if (!sheet) return { success: false, message: "Menu sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };
    
    const data = sheet.getDataRange().getValues();
    const cleanName = itemName.toString().trim();
    
    // Check duplicates, excluding the current row
    for (let i = 1; i < data.length; i++) {
      if ((i + 1) !== rowIndex && (data[i][MENU_ITEM_NAME_COL] || "").toString().trim().toLowerCase() === cleanName.toLowerCase()) {
        return { success: false, message: "Another menu item with this name already exists." };
      }
    }
    
    sheet.getRange(rowIndex, 1, 1, 3).setValues([[cleanName, category || 'Lunch', parseFloat(price) || 0]]);
    SpreadsheetApp.flush();
    return { success: true, message: "Menu item updated successfully." };
  } catch (e) {
    Logger.log("Error in updateMenuItem: " + e.toString());
    return { success: false, message: e.message };
  }
}

function deleteMenuItem(rowIndex) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(MENU_SHEET_NAME);
    if (!sheet) return { success: false, message: "Menu sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };
    
    sheet.deleteRow(rowIndex);
    SpreadsheetApp.flush();
    return { success: true, message: "Menu item deleted successfully." };
  } catch (e) {
    Logger.log("Error in deleteMenuItem: " + e.toString());
    return { success: false, message: e.message };
  }
}

function addMidStayAdvance(checkInId, additionalAmount, paymentMode, user) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const ciSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (!ciSheet) return { success: false, message: "Check-In sheet not found." };

    const amt = parseFloat(additionalAmount);
    if (isNaN(amt) || amt <= 0) return { success: false, message: "Invalid amount." };

    const data = ciSheet.getDataRange().getValues();
    let rowIndex = -1;
    let currentAdvance = 0;

    for (let i = 1; i < data.length; i++) {
      if ((data[i][CI_ID_COL] || '').toString() === checkInId.toString()) {
        rowIndex = i + 1;
        currentAdvance = parseFloat(data[i][CI_ADVANCE_PAID_COL]) || 0;
        break;
      }
    }

    if (rowIndex === -1) return { success: false, message: "Check-in ID not found." };

    const newTotal = currentAdvance + amt;
    ciSheet.getRange(rowIndex, CI_ADVANCE_PAID_COL + 1).setValue(newTotal);
    SpreadsheetApp.flush();

    return { success: true, message: "Advance added successfully.", newTotal: newTotal };
  } catch (e) {
    Logger.log("Error in addMidStayAdvance: " + e.toString());
    return { success: false, message: e.message };
  }
}

function updateStaySegment(checkInId, newRoomNos, newRate, newPax, switchDateTime) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);
    const checkInSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    
    if (!staySegmentsSheet || !checkInSheet || !roomsSheet) {
      return { success: false, message: "Required sheets not found." };
    }

    const now = switchDateTime ? new Date(switchDateTime).toISOString() : new Date().toISOString();
    let oldRoomNosStr = "";

    // 1. Find the active segment for this checkInId and end it
    const segmentsData = staySegmentsSheet.getDataRange().getValues();
    let activeSegmentRow = -1;
    for (let i = 1; i < segmentsData.length; i++) {
      if ((segmentsData[i][SEG_CHECKIN_ID_COL] || '').toString() === checkInId.toString()) {
        const endDate = (segmentsData[i][SEG_END_DATE_COL] || '').toString();
        if (!endDate) {
          activeSegmentRow = i + 1; // 1-based index
          oldRoomNosStr = (segmentsData[i][SEG_ROOM_NOS_COL] || '').toString();
          staySegmentsSheet.getRange(activeSegmentRow, SEG_END_DATE_COL + 1).setValue(now);
          break;
        }
      }
    }

    if (activeSegmentRow === -1) {
       return { success: false, message: "No active stay segment found to update." };
    }

    // 2. Append a brand new row to the StaySegments sheet for the new segment
    const newSegmentId = "SEG-" + new Date().getTime().toString().slice(-6) + Math.floor(Math.random() * 900 + 100);
    staySegmentsSheet.appendRow([
      newSegmentId,
      checkInId,
      newRoomNos,
      parseFloat(newRate) || 0,
      newPax.paxTotal || parseInt(newPax) || 1,
      now,
      ""
    ]);

    // 3. Open the CheckIn sheet, find the main check-in row, and overwrite RoomNumbers and Pax
    const checkInData = checkInSheet.getDataRange().getValues();
    let ciRowIndex = -1;
    for (let i = 1; i < checkInData.length; i++) {
      if ((checkInData[i][CI_ID_COL] || '').toString() === checkInId.toString()) {
        ciRowIndex = i + 1;
        checkInSheet.getRange(ciRowIndex, CI_ROOM_NUMBERS_COL + 1).setValue(newRoomNos);
        checkInSheet.getRange(ciRowIndex, CI_PAX_COL + 1).setValue(newPax.paxTotal || parseInt(newPax) || 1);
        checkInSheet.getRange(ciRowIndex, CI_ROOM_PAX_BREAKDOWN_COL + 1).setValue(newPax.roomPaxBreakdown || '');
        // Also update number of rooms to reflect the new state
        const newRoomsArr = newRoomNos.split(',').map(r => r.trim()).filter(r => r);
        checkInSheet.getRange(ciRowIndex, CI_NUM_ROOMS_COL + 1).setValue(newRoomsArr.length);
        break;
      }
    }

    // 4. Update the Rooms sheet: Compare old room numbers with new room numbers
    const oldRoomsArr = oldRoomNosStr.split(',').map(r => r.trim()).filter(r => r);
    const newRoomsArr = newRoomNos.split(',').map(r => r.trim()).filter(r => r);
    const roomsData = roomsSheet.getDataRange().getValues();

    // Change any old rooms that are no longer occupied to "Available"
    for (let o = 0; o < oldRoomsArr.length; o++) {
      if (newRoomsArr.indexOf(oldRoomsArr[o]) === -1) {
        for (let j = 1; j < roomsData.length; j++) {
          if ((roomsData[j][ROOM_NO_COL] || '').toString() === oldRoomsArr[o]) {
             roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Available");
             break;
          }
        }
      }
    }

    // Change any newly added rooms to "Booked"
    for (let n = 0; n < newRoomsArr.length; n++) {
      if (oldRoomsArr.indexOf(newRoomsArr[n]) === -1) {
        for (let j = 1; j < roomsData.length; j++) {
          if ((roomsData[j][ROOM_NO_COL] || '').toString() === newRoomsArr[n]) {
             roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Booked");
             break;
          }
        }
      }
    }

    SpreadsheetApp.flush();
    return { success: true, message: "Stay segment updated successfully." };
  } catch (e) {
    Logger.log("Error in updateStaySegment: " + e.toString());
    return { success: false, message: e.message };
  }
}
