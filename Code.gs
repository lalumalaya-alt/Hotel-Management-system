/**
 * Developed by Malaya
 */

/***************************************************
 * GLOBAL CONSTANTS
 ***************************************************/
const SS_ID = SpreadsheetApp.getActiveSpreadsheet().getId();

// SHEET NAMES
const LOGIN_SHEET_NAME      = "Login";
const ROOMS_SHEET_NAME      = "Rooms";
const BOOKINGS_SHEET_NAME   = "Bookings";
const QUOTES_SHEET_NAME     = "Quotes";
const FINANCE_SHEET_NAME    = "Finance";
const INVOICES_SHEET_NAME   = "Invoices";
const SETTINGS_SHEET_NAME   = "Settings";
const BUDGETS_SHEET_NAME    = "Budgets";
const CATEGORIES_SHEET_NAME = "Categories";

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
const CITY_COL             = 5;
const MARITAL_STATUS_COL   = 6;
const OCCUPANCY_TYPE_COL   = 7;
const FAMILY_DETAILS_COL   = 8;
const CHECK_IN_COL         = 9;
const CHECK_OUT_COL        = 10;
const BOOKING_STATUS_COL   = 11;
const ROOM_RATE_BOOK_COL   = 12;
const DISCOUNT_COL         = 13;
const TAX_COL              = 14;
const PAYMENT_METHOD_COL   = 15;
const TOTAL_AMOUNT_COL     = 16;
const PAYMENT_STATUS_COL   = 17;  // "Unpaid", "Partial", "Paid"
const AMOUNT_PAID_COL      = 18;  // Numeric amount paid so far

// LOGIN sheet columns (0-based)
const LOGIN_USERNAME_COL   = 0;
const LOGIN_PASSWORD_COL   = 1;
const LOGIN_ROLE_COL       = 2;
const LOGIN_OTP_COL        = 3;
const LOGIN_OTP_EXPIRY_COL = 4;

// QUOTES sheet columns (0-based) — cols 0-13 original, 14-25 new
const QUOTE_ID_COL              = 0;
const QUOTE_GUEST_NAME_COL      = 1;
const QUOTE_PHONE_COL           = 2;
const QUOTE_EMAIL_COL           = 3;
const QUOTE_CREATED_COL         = 4;
const QUOTE_VALID_COL           = 5;
const QUOTE_STATUS_COL          = 6;
const QUOTE_ITEMS_COL           = 7;
const QUOTE_SUBTOTAL_COL        = 8;
const QUOTE_TAX_COL             = 9;
const QUOTE_DISCOUNT_COL        = 10;
const QUOTE_TOTAL_COL           = 11;
const QUOTE_NOTES_COL           = 12;
const QUOTE_CREATED_BY_COL      = 13;
const QUOTE_CURRENCY_COL        = 14;
const QUOTE_GST_ENABLED_COL     = 15;
const QUOTE_GST_PERCENT_COL     = 16;
const QUOTE_GST_AMOUNT_COL      = 17;
const QUOTE_GREENTAX_ENABLED_COL= 18;
const QUOTE_GREENTAX_RATE_COL   = 19;
const QUOTE_GREENTAX_PAX_COL    = 20;
const QUOTE_GREENTAX_NIGHTS_COL = 21;
const QUOTE_GREENTAX_AMOUNT_COL = 22;
const QUOTE_CUSTOMER_TIN_COL    = 23;
const QUOTE_CONVERTED_COL       = 24;
const QUOTE_PDF_LINK_COL        = 25;

// FINANCE sheet columns (0-based) — cols 0-8 original, 9-11 new
const FIN_ID_COL           = 0;
const FIN_DATE_COL         = 1;
const FIN_TYPE_COL         = 2;
const FIN_DESC_COL         = 3;
const FIN_SHOP_COL         = 4;
const FIN_AMOUNT_COL       = 5;
const FIN_BALANCE_COL      = 6;
const FIN_ENTERED_BY_COL   = 7;
const FIN_CREATED_AT_COL   = 8;
const FIN_CATEGORY_COL     = 9;
const FIN_CURRENCY_COL     = 10;
const FIN_LINKED_INV_COL   = 11;

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
const INV_GREENTAX_ENABLED_COL= 14;
const INV_GREENTAX_RATE_COL   = 15;
const INV_GREENTAX_PAX_COL    = 16;
const INV_GREENTAX_NIGHTS_COL = 17;
const INV_GREENTAX_AMOUNT_COL = 18;
const INV_DISCOUNT_COL        = 19;
const INV_TOTAL_COL           = 20;
const INV_NOTES_COL           = 21;
const INV_SOURCE_QUOTE_COL    = 22;
const INV_PDF_LINK_COL        = 23;
const INV_CREATED_BY_COL      = 24;
const INV_UPDATED_AT_COL      = 25;

// SETTINGS sheet columns (0-based, single data row at row 2)
const SET_HOTEL_NAME_COL       = 0;
const SET_HOTEL_ADDRESS_COL    = 1;
const SET_HOTEL_PHONE_COL      = 2;
const SET_HOTEL_EMAIL_COL      = 3;
const SET_HOTEL_TIN_COL        = 4;
const SET_LOGO_FILE_ID_COL     = 5;
const SET_LOGO_URL_COL         = 6;
const SET_DEFAULT_CURRENCY_COL = 7;
const SET_GST_DEFAULT_COL      = 8;
const SET_GREENTAX_DEFAULT_COL = 9;
const SET_NEXT_INVOICE_COL     = 10;
const SET_NEXT_QUOTE_COL       = 11;
const SET_PDF_FOLDER_ID_COL    = 12;
const SET_LOGO_FOLDER_ID_COL   = 13;

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

// BOOKINGS sheet NEW columns (appended at 19-24)
const CHECKIN_TIME_COL     = 19;
const CHECKOUT_TIME_COL    = 20;
const FOOD_PLAN_COL        = 21;
const ADVANCE_PAID_COL     = 22;
const NUM_ROOMS_COL        = 23;
const LINKED_CHECKIN_COL   = 24;

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
const CI_PURPOSE_COL        = 9;
const CI_CHECKIN_DATE_COL   = 10;
const CI_CHECKIN_TIME_COL   = 11;
const CI_CHECKOUT_DATE_COL  = 12;
const CI_CHECKOUT_TIME_COL  = 13;
const CI_ROOM_NUMBERS_COL   = 14;
const CI_ROOM_TYPES_COL     = 15;
const CI_NUM_ROOMS_COL      = 16;
const CI_PAX_COL            = 17;
const CI_ADVANCE_PAID_COL   = 18;
const CI_EXTRA_PERSON_COL   = 19;
const CI_FOOD_PLAN_COL      = 20;
const CI_GST_TYPE_COL       = 21;
const CI_FIX_RENT_COL       = 22;
const CI_FIX_RENT_AMT_COL   = 23;
const CI_BILL_TO_COL        = 24;
const CI_DISCOUNT_COL       = 25;
const CI_STATUS_COL         = 26;
const CI_CREATED_AT_COL     = 27;

// RESTAURANT sheet columns (0-based)
const REST_ORDER_ID_COL     = 0;
const REST_ROOM_NO_COL      = 1;
const REST_CHECKIN_ID_COL   = 2;
const REST_ORDER_DATE_COL   = 3;
const REST_CATEGORY_COL     = 4;
const REST_DESC_COL         = 5;
const REST_AMOUNT_COL       = 6;
const REST_STATUS_COL       = 7;
const REST_CREATED_AT_COL   = 8;

// SETTINGS sheet NEW columns (appended)
const SET_NEXT_CHECKIN_COL  = 14;
const SET_NEXT_BILL_COL     = 15;

// CUSTOMERS sheet columns (0-based)
const CUST_ID_COL           = 0;
const CUST_NAME_COL         = 1;
const CUST_PHONE_COL        = 2;
const CUST_EMAIL_COL        = 3;
const CUST_CITY_COL         = 4;
const CUST_MARITAL_COL      = 5;
const CUST_NOTES_COL        = 6;
const CUST_CREATED_AT_COL   = 7;
const CUST_LINKED_USER_COL  = 8;

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
    loginSheet.appendRow([email, generatedPassword, "user", "", ""]);
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
function createAccount(email, password) {
  try {
    if (!email || !password) {
      return { success: false, message: "Email and password are required." };
    }

    email = email.toString().trim().toLowerCase();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: "Please enter a valid email address." };
    }

    if (password.length < 4) {
      return { success: false, message: "Password must be at least 4 characters." };
    }

    var loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    var data = loginSheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      var storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim().toLowerCase();
      if (storedUser === email) {
        return { success: false, message: "An account with this email already exists." };
      }
    }

    loginSheet.appendRow([email, password, "user", "", ""]);

    return { success: true, message: "Account created successfully! You can now login." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * FORGOT PASSWORD — OTP FLOW
 ***************************************************/
function sendForgotPasswordOTP(email) {
  try {
    if (!email) {
      return { success: false, message: "Email is required." };
    }

    email = email.toString().trim().toLowerCase();

    var loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    var data = loginSheet.getDataRange().getValues();
    var userRowIndex = -1;

    for (var i = 1; i < data.length; i++) {
      var storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim().toLowerCase();
      if (storedUser === email) {
        userRowIndex = i + 1;
        break;
      }
    }

    if (userRowIndex === -1) {
      return { success: false, message: "No account found with this email." };
    }

    var otp = Math.floor(1000 + Math.random() * 9000).toString();
    var expiry = new Date(Date.now() + 10 * 60 * 1000).toISOString();

    loginSheet.getRange(userRowIndex, LOGIN_OTP_COL + 1).setValue(otp);
    loginSheet.getRange(userRowIndex, LOGIN_OTP_EXPIRY_COL + 1).setValue(expiry);
    SpreadsheetApp.flush();

    var hotelName = 'Hill View Eco Retreat';
    try {
      var setSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(SETTINGS_SHEET_NAME);
      if (setSheet && setSheet.getLastRow() > 1) {
        hotelName = (setSheet.getRange(2, SET_HOTEL_NAME_COL + 1).getValue() || 'Hill View Eco Retreat').toString();
      }
    } catch (se) { Logger.log("Could not load hotel name: " + se); }

    MailApp.sendEmail({
      to: email,
      subject: hotelName + ' - Password Reset OTP',
      body: 'Hello,\n\nYour OTP for password reset is: ' + otp + '\n\nThis code is valid for 10 minutes.\n\nIf you did not request this, please ignore this email.\n\n- ' + hotelName
    });

    return { success: true, message: "OTP sent to your email. Check your inbox." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function verifyOTP(email, otp) {
  try {
    if (!email || !otp) {
      return { success: false, message: "Email and OTP are required." };
    }

    email = email.toString().trim().toLowerCase();
    otp = otp.toString().trim();

    var loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    var data = loginSheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      var storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim().toLowerCase();
      if (storedUser === email) {
        var storedOtp = (data[i][LOGIN_OTP_COL] || "").toString().trim();
        var storedExpiry = (data[i][LOGIN_OTP_EXPIRY_COL] || "").toString().trim();

        if (storedOtp !== otp) {
          return { success: false, message: "Invalid OTP. Please try again." };
        }

        if (!storedExpiry || new Date(storedExpiry) < new Date()) {
          loginSheet.getRange(i + 1, LOGIN_OTP_COL + 1).setValue("");
          loginSheet.getRange(i + 1, LOGIN_OTP_EXPIRY_COL + 1).setValue("");
          return { success: false, message: "OTP has expired. Please request a new one." };
        }

        return { success: true, message: "OTP verified successfully." };
      }
    }

    return { success: false, message: "No account found with this email." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function resetPassword(email, otp, newPassword) {
  try {
    if (!email || !otp || !newPassword) {
      return { success: false, message: "All fields are required." };
    }
    if (newPassword.length < 4) {
      return { success: false, message: "New password must be at least 4 characters." };
    }

    email = email.toString().trim().toLowerCase();
    otp = otp.toString().trim();

    var loginSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(LOGIN_SHEET_NAME);
    var data = loginSheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      var storedUser = (data[i][LOGIN_USERNAME_COL] || "").toString().trim().toLowerCase();
      if (storedUser === email) {
        var storedOtp = (data[i][LOGIN_OTP_COL] || "").toString().trim();
        var storedExpiry = (data[i][LOGIN_OTP_EXPIRY_COL] || "").toString().trim();

        if (storedOtp !== otp) {
          return { success: false, message: "Invalid OTP." };
        }
        if (!storedExpiry || new Date(storedExpiry) < new Date()) {
          loginSheet.getRange(i + 1, LOGIN_OTP_COL + 1).setValue("");
          loginSheet.getRange(i + 1, LOGIN_OTP_EXPIRY_COL + 1).setValue("");
          return { success: false, message: "OTP has expired. Please request a new one." };
        }

        loginSheet.getRange(i + 1, LOGIN_PASSWORD_COL + 1).setValue(newPassword);
        loginSheet.getRange(i + 1, LOGIN_OTP_COL + 1).setValue("");
        loginSheet.getRange(i + 1, LOGIN_OTP_EXPIRY_COL + 1).setValue("");

        return { success: true, message: "Password reset successfully! You can now login." };
      }
    }

    return { success: false, message: "No account found with this email." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

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
  let diff = d2.getTime() - d1.getTime();
  let days = Math.ceil(diff / (1000 * 3600 * 24));
  return days;
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

  const prefixMap = { invoice: 'INV', quote: 'QTN' };
  const colMap = { invoice: SET_NEXT_INVOICE_COL, quote: SET_NEXT_QUOTE_COL };

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

    // Support room types (e.g. "Cottage (2)") OR physical room numbers ("101")
    let totalRoomRate = 0;
    let roomRowIndices = [];
    let isTypeBooking = roomNosArr.some(r => r.includes('('));
    let numRoomsCount = 0;

    if (isTypeBooking) {
      // Just extract total rate from payload if provided (or we can calculate)
      // Actually, we pass combinedRate from frontend in payload if type booking, or we parse it
      totalRoomRate = parseFloat(bookingDetails.combinedRate) || 0;
      roomNosArr.forEach(p => {
        const match = p.match(/(.+?)\s*\((\d+)\)/);
        if (match) numRoomsCount += parseInt(match[2]);
      });
    } else {
      // Legacy check for physical rooms
      for (let r = 0; r < roomNosArr.length; r++) {
        let found = false;
        for (let i = 1; i < roomsData.length; i++) {
          let rowRoomNo = (roomsData[i][ROOM_NO_COL] || "").toString();
          if (rowRoomNo === roomNosArr[r]) {
            let status = (roomsData[i][ROOM_STATUS_COL] || "").toString().toLowerCase();
            if (status !== 'available' && status !== 'reserved') {
              return { success: false, message: `Room ${roomNosArr[r]} is not available.` };
            }
            totalRoomRate += parseFloat(roomsData[i][ROOM_RATE_COL]) || 0;
            roomRowIndices.push(i);
            found = true;
            break;
          }
        }
        if (!found) {
          return { success: false, message: `Room ${roomNosArr[r]} not found.` };
        }
      }
      numRoomsCount = roomNosArr.length;
    }

    const ticketId = generateTicketId();
    const checkInDate = new Date(bookingDetails.checkIn);
    const checkOutDate = new Date(bookingDetails.checkOut);
    const checkInTime = bookingDetails.checkInTime || "14:00";
    const checkOutTime = bookingDetails.checkOutTime || "12:00";
    const foodPlan = bookingDetails.foodPlan || "None";
    const advancePaid = parseFloat(bookingDetails.advancePaid || "0") || 0;

    let discount = parseFloat(bookingDetails.discount || "0") || 0;
    let tax = parseFloat(bookingDetails.tax || "0") || 0;
    let paymentMethod = bookingDetails.paymentMethod || "Cash";

    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    let baseAmount = totalRoomRate * nights;
    let finalAmount = baseAmount - discount + tax;

    let roomNosStr = roomNosArr.join(',');
    let paymentStatus = advancePaid >= finalAmount ? "Paid" : advancePaid > 0 ? "Partial" : "Unpaid";

    bookingsSheet.appendRow([
      ticketId,
      roomNosStr,
      bookingDetails.guestName,
      bookingDetails.phone,
      bookingDetails.email,
      bookingDetails.city || '',
      bookingDetails.maritalStatus || '',
      bookingDetails.occupancyType || '',
      bookingDetails.familyDetails || '',
      checkInDate.toISOString(),
      checkOutDate.toISOString(),
      "Booked",
      totalRoomRate,
      discount,
      tax,
      paymentMethod,
      finalAmount,
      paymentStatus,
      advancePaid,
      checkInTime,
      checkOutTime,
      foodPlan,
      advancePaid,
      numRoomsCount,
      ""
    ]);

    // Mark all selected rooms as Booked (only if physical rooms were assigned)
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
        defaultCurrency = (setSheet.getRange(2, SET_DEFAULT_CURRENCY_COL + 1).getValue() || 'MVR').toString();
      }
    } catch (ce) { Logger.log("Could not load settings currency: " + ce); }

    let bookingRowIndex = -1;
    let roomNoToCheckout = "";
    let guestName = "";
    let email = "";
    let phone = "";
    let city = "";
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
        city = bookingsData[i][CITY_COL];
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
        city: city,
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
    const existingRoomNoStr = (sheet.getRange(rowIndex, BOOKING_ROOM_NO_COL + 1).getValue() || '').toString();
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

    // Handle Room Updates
    let finalRoomNosStr = existingRoomNoStr;
    let finalRate = existingRate;
    let finalNumRooms = parseFloat(sheet.getRange(rowIndex, NUM_ROOMS_COL + 1).getValue()) || 1;

    if (bookingData.roomNos && bookingData.roomNos !== existingRoomNoStr) {
      const newRoomsArr = bookingData.roomNos.split(',').map(r => r.trim()).filter(r => r);
      const oldRoomsArr = existingRoomNoStr.split(',').map(r => r.trim()).filter(r => r);
      const isTypeBooking = bookingData.roomNos.includes('(');

      const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
      const roomsData = roomsSheet.getDataRange().getValues();

      let newTotalRate = 0;
      let newRoomCount = 0;

      if (isTypeBooking) {
        newTotalRate = parseFloat(bookingData.combinedRate) || 0;
        newRoomsArr.forEach(p => {
          const match = p.match(/(.+?)\s*\((\d+)\)/);
          if (match) newRoomCount += parseInt(match[2]);
        });
      } else {
        // Calculate new rate and mark new physical rooms as Booked
        for (let r = 0; r < newRoomsArr.length; r++) {
          let found = false;
          for (let i = 1; i < roomsData.length; i++) {
            if ((roomsData[i][ROOM_NO_COL] || "").toString() === newRoomsArr[r]) {
              newTotalRate += parseFloat(roomsData[i][ROOM_RATE_COL]) || 0;
              roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Booked");
              found = true;
              break;
            }
          }
          if (!found) return { success: false, message: `Room ${newRoomsArr[r]} not found.` };
        }
        newRoomCount = newRoomsArr.length;
      }

      // If old rooms were physical, mark unselected ones as Available
      const wasTypeBooking = existingRoomNoStr.includes('(');
      if (!wasTypeBooking) {
        for (let r = 0; r < oldRoomsArr.length; r++) {
          if (newRoomsArr.indexOf(oldRoomsArr[r]) === -1) {
            for (let i = 1; i < roomsData.length; i++) {
              if ((roomsData[i][ROOM_NO_COL] || "").toString() === oldRoomsArr[r]) {
                roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Available");
                break;
              }
            }
          }
        }
      }

      finalRoomNosStr = bookingData.roomNos;
      finalRate = newTotalRate;
      finalNumRooms = newRoomCount;
    }

    // Recalculate financials
    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    const discount = parseFloat(bookingData.discount || 0) || 0;
    const tax = parseFloat(bookingData.tax || 0) || 0;
    const baseAmount = finalRate * nights;
    const finalAmount = baseAmount - discount + tax;

    // Determine new payment status based on updated amounts
    const advancePaid = bookingData.advancePaid !== undefined ? parseFloat(bookingData.advancePaid) || 0 : existingAmountPaid;
    let paymentStatus = "Unpaid";
    if (advancePaid >= finalAmount) paymentStatus = "Paid";
    else if (advancePaid > 0) paymentStatus = "Partial";

    // Build complete row (25 columns)
    const existingCheckInTime = (sheet.getRange(rowIndex, CHECKIN_TIME_COL + 1).getValue() || '14:00').toString();
    const existingCheckOutTime = (sheet.getRange(rowIndex, CHECKOUT_TIME_COL + 1).getValue() || '12:00').toString();
    const existingFoodPlan = (sheet.getRange(rowIndex, FOOD_PLAN_COL + 1).getValue() || 'None').toString();
    const existingLinkedCheckIn = (sheet.getRange(rowIndex, LINKED_CHECKIN_COL + 1).getValue() || '').toString();

    const row = [
      existingTicket,
      finalRoomNosStr,
      (bookingData.guestName || '').trim(),
      (bookingData.phone || '').trim(),
      (bookingData.email || '').trim(),
      (bookingData.city || '').trim(),
      bookingData.maritalStatus || 'Single',
      bookingData.occupancyType || 'Single',
      (bookingData.familyDetails || '').trim(),
      checkInDate.toISOString(),
      checkOutDate.toISOString(),
      existingStatus,
      finalRate,
      discount,
      tax,
      bookingData.paymentMethod || 'Cash',
      finalAmount,
      paymentStatus,
      advancePaid,
      bookingData.checkInTime || existingCheckInTime,
      bookingData.checkOutTime || existingCheckOutTime,
      bookingData.foodPlan || existingFoodPlan,
      advancePaid,
      finalNumRooms,
      existingLinkedCheckIn
    ];

    sheet.getRange(rowIndex, 1, 1, 25).setValues([row]);
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
      checkInData.purposeOfVisit || '',
      checkInData.checkInDate || '',
      checkInData.checkInTime || '14:00',
      checkInData.checkOutDate || '',
      checkInData.checkOutTime || '12:00',
      roomNumbers,
      roomTypes.join(','),
      roomNosArr.length,
      parseInt(checkInData.pax) || 1,
      parseFloat(checkInData.advancePaid) || 0,
      parseInt(checkInData.extraPerson) || 0,
      checkInData.foodPlan || 'None',
      checkInData.gstType || 'Excluding',
      checkInData.fixRoomRent || 'No',
      parseFloat(checkInData.fixRoomRentAmount) || 0,
      checkInData.billTo || 'Individual',
      parseFloat(checkInData.discountPercent) || 0,
      'Active',
      now
    ]);

    // If linked to advance booking, update booking status and free any removed rooms
    if (checkInData.linkedTicketId) {
      const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        if ((bData[i][TICKET_ID_COL] || '').toString() === checkInData.linkedTicketId) {
          const oldRoomsStr = (bData[i][BOOKING_ROOM_NO_COL] || '').toString();
          const oldRoomsArr = oldRoomsStr.split(',').map(r => r.trim()).filter(r => r);

          // If any originally booked rooms were NOT checked into, release them
          for (let r = 0; r < oldRoomsArr.length; r++) {
            if (roomNosArr.indexOf(oldRoomsArr[r]) === -1) {
              for (let j = 1; j < roomsData.length; j++) {
                if ((roomsData[j][ROOM_NO_COL] || "").toString() === oldRoomsArr[r]) {
                  roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Available");
                  break;
                }
              }
            }
          }

          // Update booking status and synced room list
          bookingsSheet.getRange(i + 1, BOOKING_STATUS_COL + 1).setValue("Checked In");
          bookingsSheet.getRange(i + 1, LINKED_CHECKIN_COL + 1).setValue(checkInId);
          bookingsSheet.getRange(i + 1, BOOKING_ROOM_NO_COL + 1).setValue(roomNumbers);
          bookingsSheet.getRange(i + 1, NUM_ROOMS_COL + 1).setValue(roomNosArr.length);
          break;
        }
      }
    }

    SpreadsheetApp.flush();
    return { success: true, message: `Check-in successful. ID: ${checkInId}`, checkInId };
  } catch (e) {
    Logger.log("Error in addCheckIn: " + e.toString());
    return { success: false, message: e.message };
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
        purposeOfVisit: (row[CI_PURPOSE_COL] || '').toString(),
        checkInDate: (row[CI_CHECKIN_DATE_COL] || '').toString(),
        checkInTime: (row[CI_CHECKIN_TIME_COL] || '14:00').toString(),
        checkOutDate: (row[CI_CHECKOUT_DATE_COL] || '').toString(),
        checkOutTime: (row[CI_CHECKOUT_TIME_COL] || '12:00').toString(),
        roomNumbers: (row[CI_ROOM_NUMBERS_COL] || '').toString(),
        roomTypes: (row[CI_ROOM_TYPES_COL] || '').toString(),
        numberOfRooms: parseInt(row[CI_NUM_ROOMS_COL]) || 0,
        pax: parseInt(row[CI_PAX_COL]) || 1,
        advancePaid: parseFloat(row[CI_ADVANCE_PAID_COL]) || 0,
        extraPerson: parseInt(row[CI_EXTRA_PERSON_COL]) || 0,
        foodPlan: (row[CI_FOOD_PLAN_COL] || 'None').toString(),
        gstType: (row[CI_GST_TYPE_COL] || 'Excluding').toString(),
        fixRoomRent: (row[CI_FIX_RENT_COL] || 'No').toString(),
        fixRoomRentAmount: parseFloat(row[CI_FIX_RENT_AMT_COL]) || 0,
        billTo: (row[CI_BILL_TO_COL] || 'Individual').toString(),
        discountPercent: parseFloat(row[CI_DISCOUNT_COL]) || 0,
        status: (row[CI_STATUS_COL] || 'Active').toString(),
        createdAt: (row[CI_CREATED_AT_COL] || '').toString()
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
    const checkIns = getAllCheckIns();
    if (!checkIns.error) {
      for (let i = 0; i < checkIns.length; i++) {
        if (checkIns[i].status === 'Active') {
          let rooms = checkIns[i].roomNumbers.split(',').map(r => r.trim());
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
            address: (bData[i][CITY_COL] || '').toString(),
            purposeOfVisit: '',
            checkInDate: (bData[i][CHECK_IN_COL] || '').toString(),
            checkInTime: (bData[i][CHECKIN_TIME_COL] || '14:00').toString(),
            checkOutDate: (bData[i][CHECK_OUT_COL] || '').toString(),
            checkOutTime: (bData[i][CHECKOUT_TIME_COL] || '12:00').toString(),
            roomNumbers: (bData[i][BOOKING_ROOM_NO_COL] || '').toString(),
            roomTypes: '',
            numberOfRooms: parseInt(bData[i][NUM_ROOMS_COL]) || 1,
            pax: 1,
            advancePaid: parseFloat(bData[i][ADVANCE_PAID_COL]) || 0,
            extraPerson: 0,
            foodPlan: (bData[i][FOOD_PLAN_COL] || 'None').toString(),
            gstType: 'Excluding', fixRoomRent: 'No', fixRoomRentAmount: 0,
            billTo: 'Individual',
            discountPercent: parseFloat(bData[i][DISCOUNT_COL]) || 0,
            status: 'Active', createdAt: '', isFromBooking: true
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
      checkInData.address || '', checkInData.purposeOfVisit || '',
      checkInData.checkInDate || '', checkInData.checkInTime || '14:00',
      checkInData.checkOutDate || '', checkInData.checkOutTime || '12:00',
      roomNumbers, roomTypes.join(','), roomNosArr.length,
      parseInt(checkInData.pax) || 1, parseFloat(checkInData.advancePaid) || 0,
      parseInt(checkInData.extraPerson) || 0, checkInData.foodPlan || 'None',
      checkInData.gstType || 'Excluding', checkInData.fixRoomRent || 'No',
      parseFloat(checkInData.fixRoomRentAmount) || 0, checkInData.billTo || 'Individual',
      parseFloat(checkInData.discountPercent) || 0, existingStatus, existingCreatedAt
    ];

    sheet.getRange(rowIndex, 1, 1, 28).setValues([row]);
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

    sheet.appendRow([
      orderId,
      orderData.roomNo || '',
      orderData.checkInId || '',
      orderData.orderDate || now.split('T')[0],
      orderData.category || 'FoodBeverage',
      orderData.description || '',
      parseFloat(orderData.amount) || 0,
      'Active',
      now
    ]);
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
        category: (row[REST_CATEGORY_COL] || '').toString(),
        description: (row[REST_DESC_COL] || '').toString(),
        amount: parseFloat(row[REST_AMOUNT_COL]) || 0,
        status: (row[REST_STATUS_COL] || 'Active').toString(),
        createdAt: (row[REST_CREATED_AT_COL] || '').toString()
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

    const row = [
      existingId,
      orderData.roomNo || '',
      orderData.checkInId || '',
      orderData.orderDate || '',
      orderData.category || 'FoodBeverage',
      orderData.description || '',
      parseFloat(orderData.amount) || 0,
      orderData.status || 'Active',
      existingCreated
    ];
    sheet.getRange(rowIndex, 1, 1, 9).setValues([row]);
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

/***************************************************
 * DYNAMIC SHEET MANAGER
 * Automatically adds, modifies, or deletes sheets and headers.
 * Example config usage:
 * manageSheetsDataStructure([
 *   { name: "MyNewSheet", action: "add", headers: ["ID", "Name", "Date"] },
 *   { name: "OldSheet", action: "delete" },
 *   { name: "ExistingSheet", action: "modify", headers: ["UpdatedID", "UpdatedName"] }
 * ]);
 ***************************************************/
function manageSheetsDataStructure(configArray) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    let results = [];

    for (let i = 0; i < configArray.length; i++) {
      const config = configArray[i];
      const sheetName = config.name;
      const action = (config.action || '').toLowerCase();
      const headers = config.headers || [];

      if (!sheetName) continue;

      let sheet = ss.getSheetByName(sheetName);

      if (action === 'delete') {
        if (sheet) {
          ss.deleteSheet(sheet);
          results.push(`Deleted sheet: ${sheetName}`);
        } else {
          results.push(`Sheet ${sheetName} not found for deletion.`);
        }
      }
      else if (action === 'add') {
        if (!sheet) {
          sheet = ss.insertSheet(sheetName);
          results.push(`Added sheet: ${sheetName}`);

          if (headers.length > 0) {
            sheet.appendRow(headers);
            const headerRange = sheet.getRange(1, 1, 1, headers.length);
            headerRange.setFontWeight("bold");
            headerRange.setBackground("#001f3f");
            headerRange.setFontColor("#ffffff");
            sheet.setFrozenRows(1);
          }
        } else {
          results.push(`Sheet ${sheetName} already exists, skipping add.`);
        }
      }
      else if (action === 'modify') {
        if (sheet) {
          if (headers.length > 0) {
            // Overwrite the first row with new headers
            const headerRange = sheet.getRange(1, 1, 1, headers.length);
            headerRange.setValues([headers]);
            headerRange.setFontWeight("bold");
            headerRange.setBackground("#001f3f");
            headerRange.setFontColor("#ffffff");
            sheet.setFrozenRows(1);
            results.push(`Modified headers for sheet: ${sheetName}`);
          }
        } else {
          results.push(`Sheet ${sheetName} not found for modification.`);
        }
      }
    }

    SpreadsheetApp.flush();
    return { success: true, messages: results };
  } catch (err) {
    Logger.log("Error in manageSheetsDataStructure: " + err.message);
    return { success: false, message: err.message };
  }
}
