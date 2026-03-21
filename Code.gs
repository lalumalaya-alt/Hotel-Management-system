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
const STAY_SEGMENTS_SHEET_NAME = "StaySegments";

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
  // Strip out the time component to compare strict calendar days
  let date1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
  let date2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
  let diff = date2.getTime() - date1.getTime();
  let days = Math.round(diff / (1000 * 3600 * 24));
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

    // Validate all rooms are available and calculate combined rate
    let totalRoomRate = 0;
    let roomRowIndices = [];
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
      roomNosArr.length,
      ""
    ]);

    // Mark all selected rooms as Booked
    for (let ri = 0; ri < roomRowIndices.length; ri++) {
      roomsSheet.getRange(roomRowIndices[ri] + 1, ROOM_STATUS_COL + 1).setValue("Booked");
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

    // Recalculate financials
    let nights = daysBetween(checkInDate, checkOutDate);
    if (nights < 1) nights = 1;
    const discount = parseFloat(bookingData.discount || 0) || 0;
    const tax = parseFloat(bookingData.tax || 0) || 0;
    const baseAmount = existingRate * nights;
    const finalAmount = baseAmount - discount + tax;

    // Build complete row (25 columns)
    const existingCheckInTime = (sheet.getRange(rowIndex, CHECKIN_TIME_COL + 1).getValue() || '14:00').toString();
    const existingCheckOutTime = (sheet.getRange(rowIndex, CHECKOUT_TIME_COL + 1).getValue() || '12:00').toString();
    const existingFoodPlan = (sheet.getRange(rowIndex, FOOD_PLAN_COL + 1).getValue() || 'None').toString();
    const existingAdvancePaid = parseFloat(sheet.getRange(rowIndex, ADVANCE_PAID_COL + 1).getValue()) || 0;
    const existingNumRooms = parseFloat(sheet.getRange(rowIndex, NUM_ROOMS_COL + 1).getValue()) || 1;
    const existingLinkedCheckIn = (sheet.getRange(rowIndex, LINKED_CHECKIN_COL + 1).getValue() || '').toString();

    const row = [
      existingTicket,
      existingRoomNo,
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
      existingRate,
      discount,
      tax,
      bookingData.paymentMethod || 'Cash',
      finalAmount,
      existingPaymentStatus,
      existingAmountPaid,
      bookingData.checkInTime || existingCheckInTime,
      bookingData.checkOutTime || existingCheckOutTime,
      bookingData.foodPlan || existingFoodPlan,
      bookingData.advancePaid !== undefined ? parseFloat(bookingData.advancePaid) || 0 : existingAdvancePaid,
      existingNumRooms,
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

    // If linked to advance booking, update booking status
    if (checkInData.linkedTicketId) {
      const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
      const bData = bookingsSheet.getDataRange().getValues();
      for (let i = 1; i < bData.length; i++) {
        if ((bData[i][TICKET_ID_COL] || '').toString() === checkInData.linkedTicketId) {
          bookingsSheet.getRange(i + 1, BOOKING_STATUS_COL + 1).setValue("Checked In");
          bookingsSheet.getRange(i + 1, LINKED_CHECKIN_COL + 1).setValue(checkInId);
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
        parseInt(checkInData.pax) || 1,
        now,
        ""
      ]);
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
          ci = new Array(28).fill('');
          ci[CI_ID_COL]            = checkInId;
          ci[CI_LINKED_TICKET_COL] = checkInId;
          ci[CI_GUEST_NAME_COL]    = (bData[i][GUEST_NAME_COL] || '').toString();
          ci[CI_MOBILE_COL]        = (bData[i][PHONE_COL] || '').toString();
          ci[CI_EMAIL_COL]         = (bData[i][EMAIL_COL] || '').toString();
          ci[CI_ADDRESS_COL]       = (bData[i][CITY_COL] || '').toString();
          ci[CI_CHECKIN_DATE_COL]  = (bData[i][CHECK_IN_COL] || '').toString();
          ci[CI_CHECKIN_TIME_COL]  = (bData[i][CHECKIN_TIME_COL] || '14:00').toString();
          ci[CI_CHECKOUT_DATE_COL] = (bData[i][CHECK_OUT_COL] || '').toString();
          ci[CI_CHECKOUT_TIME_COL] = (bData[i][CHECKOUT_TIME_COL] || '12:00').toString();
          ci[CI_ROOM_NUMBERS_COL]  = (bData[i][BOOKING_ROOM_NO_COL] || '').toString();
          ci[CI_NUM_ROOMS_COL]     = parseInt(bData[i][NUM_ROOMS_COL]) || 1;
          ci[CI_PAX_COL]           = 1;
          ci[CI_ADVANCE_PAID_COL]  = parseFloat(bData[i][ADVANCE_PAID_COL]) || 0;
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
        defaultCurrency = (setRow[SET_DEFAULT_CURRENCY_COL] || 'MVR').toString();
        gstPercent = parseFloat(setRow[SET_GST_DEFAULT_COL]) || 5;
      }
    } catch (se) { Logger.log("Settings read error: " + se); }

    const guestName = (ci[CI_GUEST_NAME_COL] || '').toString();
    const companyName = (ci[CI_COMPANY_COL] || '').toString();
    const gstNumber = (ci[CI_GST_NUMBER_COL] || '').toString();
    const mobile = (ci[CI_MOBILE_COL] || '').toString();
    const email = (ci[CI_EMAIL_COL] || '').toString();
    const address = (ci[CI_ADDRESS_COL] || '').toString();
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

    let nights = daysBetween(checkInDate, actualCheckOutDate);
    if (nights < 1) nights = 1;

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
            if (segNights < 0) segNights = 0;

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
          foodOrders.push({
            orderDate: (restData[i][REST_ORDER_DATE_COL] || '').toString(),
            category: (restData[i][REST_CATEGORY_COL] || '').toString(),
            description: (restData[i][REST_DESC_COL] || '').toString(),
            amount: parseFloat(restData[i][REST_AMOUNT_COL]) || 0
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
      if (o.category === 'FoodBeverage') totalFooding += o.amount;
      else if (o.category === 'ExtraBed') totalExtraBed += o.amount;
      else totalOtherServices += o.amount;
    });

    let subtotal = totalRoomRent + totalFooding + totalExtraBed + totalOtherServices;
    let discountAmount = subtotal * (discountPercent / 100);
    let afterDiscount = subtotal - discountAmount;

    // CGST + SGST (each half of total GST)
    let sgstPercent = gstPercent / 2;
    let cgstPercent = gstPercent / 2;
    let sgstAmount = 0, cgstAmount = 0;
    if (gstType === 'Excluding') {
      sgstAmount = afterDiscount * (sgstPercent / 100);
      cgstAmount = afterDiscount * (cgstPercent / 100);
    }
    // If Including, GST is already in the price — no extra charge

    let billAmount = afterDiscount + sgstAmount + cgstAmount;
    let netAmount = billAmount - advancePaid;
    if (netAmount < 0) netAmount = 0;

    let paymentMode = checkoutData.paymentMode || 'Cash';
    let amountPaid = parseFloat(checkoutData.amountPaid) || 0;
    let balance = netAmount - amountPaid;

    // Generate bill number
    let billNumber = generateBillNumber();

    // Build day-by-day data for invoice
    let dayByDay = [];
    let grandRunning = 0;
    for (let d = 0; d < nights; d++) {
      let dayDate = new Date(checkInDate);
      dayDate.setDate(dayDate.getDate() + d);
      let dateStr = dayDate.toISOString().split('T')[0];

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

      let dayCats = { ExtraBed: 0, FoodBeverage: 0, MiniBar: 0, EarlyClean: 0, Xerox: 0, Laundry: 0, Fax: 0, SPBUC: 0, Travels: 0, Misc: 0 };

      foodOrders.forEach(o => {
        let oDate = o.orderDate.split('T')[0];
        if (oDate === dateStr && dayCats.hasOwnProperty(o.category)) {
          dayCats[o.category] += o.amount;
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
        miniBar: dayCats.MiniBar,
        earlyClean: dayCats.EarlyClean,
        xerox: dayCats.Xerox,
        laundry: dayCats.Laundry,
        fax: dayCats.Fax,
        spbuc: dayCats.SPBUC,
        travels: dayCats.Travels,
        misc: dayCats.Misc,
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
        roomsSheet.getRange(j + 1, ROOM_STATUS_COL + 1).setValue("Available");
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

    SpreadsheetApp.flush();

    return {
      success: true,
      message: "Checkout completed successfully.",
      invoiceData: {
        billNumber, checkInId,
        hotelName, hotelAddress, hotelPhone, hotelEmail, hotelTIN, hotelLogo, currency: defaultCurrency,
        guestName, companyName, gstNumber, mobile, email, address,
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
function getDashboardData() {
  try {
    const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
    const roomsData = roomsSheet.getDataRange().getValues();
    roomsData.shift();

    let totalRooms = roomsData.length;
    let bookedCount = 0;
    let availableRoomsList = [];
    let bookedRoomsList = [];
    let allRoomsDetails = [];

    roomsData.forEach(row => {
      let roomNo = (row[ROOM_NO_COL] || "").toString();
      let type   = (row[ROOM_TYPE_COL] || "").toString();
      let status = (row[ROOM_STATUS_COL] || "").toString();
      allRoomsDetails.push({ roomNo, type, status });
      if (status.toLowerCase() === "booked") {
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

    // Finance Summary
    let financeSummary = { totalIncome: 0, totalExpenses: 0, netBalance: 0 };
    let expenseCategories = {};
    let incomeCategories = {};
    try {
      const finSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
      if (finSheet) {
        const finData = finSheet.getDataRange().getValues();
        for (let i = 1; i < finData.length; i++) {
          let type = (finData[i][FIN_TYPE_COL] || "").toString();
          let amount = parseFloat(finData[i][FIN_AMOUNT_COL]) || 0;
          let category = (finData[i][FIN_CATEGORY_COL] || "Uncategorized").toString();
          if (type === "Income") {
            financeSummary.totalIncome += amount;
            incomeCategories[category] = (incomeCategories[category] || 0) + amount;
          } else if (type === "Expense") {
            financeSummary.totalExpenses += amount;
            expenseCategories[category] = (expenseCategories[category] || 0) + amount;
          }
        }
        financeSummary.netBalance = financeSummary.totalIncome - financeSummary.totalExpenses;
      }
    } catch (finErr) {
      Logger.log("Could not load finance data: " + finErr);
    }

    // Quote Stats
    let quoteStats = { totalQuotes: 0, draftQuotes: 0, sentQuotes: 0, acceptedQuotes: 0, expiredQuotes: 0 };
    try {
      const quoteSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
      if (quoteSheet) {
        const quoteData = quoteSheet.getDataRange().getValues();
        quoteStats.totalQuotes = Math.max(0, quoteData.length - 1);
        for (let i = 1; i < quoteData.length; i++) {
          let status = (quoteData[i][QUOTE_STATUS_COL] || "").toString();
          if (status === "Draft") quoteStats.draftQuotes++;
          else if (status === "Sent") quoteStats.sentQuotes++;
          else if (status === "Accepted") quoteStats.acceptedQuotes++;
          else if (status === "Expired") quoteStats.expiredQuotes++;
        }
      }
    } catch (quoteErr) {
      Logger.log("Could not load quote data: " + quoteErr);
    }

    // Monthly data (last 6 months) - declared outside try so return can access them
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let monthlyBookings = {};
    let monthlyRevenue = {};
    let monthlyIncome = {};
    let monthlyExpense = {};
    const now = new Date();
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
    try {
      const bookSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BOOKINGS_SHEET_NAME);
      const bookData = bookSheet.getDataRange().getValues();

      for (let i = 1; i < bookData.length; i++) {
        let bStatus = (bookData[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
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

      // Monthly income/expense
      try {
        const finSheet2 = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
        if (finSheet2) {
          const finData2 = finSheet2.getDataRange().getValues();
          for (let i = 1; i < finData2.length; i++) {
            let fDate = finData2[i][FIN_DATE_COL] ? new Date(finData2[i][FIN_DATE_COL]) : null;
            let fType = (finData2[i][FIN_TYPE_COL] || "").toString();
            let fAmt = parseFloat(finData2[i][FIN_AMOUNT_COL]) || 0;
            if (fDate) {
              const mKey = monthNames[fDate.getMonth()] + ' ' + fDate.getFullYear();
              if (monthlyIncome.hasOwnProperty(mKey)) {
                if (fType === "Income") monthlyIncome[mKey] += fAmt;
                else if (fType === "Expense") monthlyExpense[mKey] += fAmt;
              }
            }
          }
        }
      } catch (e2) { Logger.log("Monthly finance error: " + e2); }

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
        settingsDefaultCurrency = (setSheet.getRange(2, SET_DEFAULT_CURRENCY_COL + 1).getValue() || 'MVR').toString();
      }
    } catch (setErr) { Logger.log("Could not load settings currency: " + setErr); }

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
      financeSummary,
      expenseCategories,
      incomeCategories,
      quoteStats,
      bookingRevenue,
      recentBookings,
      invoiceStats,
      currentBudget,
      defaultCurrency: settingsDefaultCurrency,
      monthlyBookings: monthlyBookings || {},
      monthlyRevenue: monthlyRevenue || {},
      monthlyIncome: monthlyIncome || {},
      monthlyExpense: monthlyExpense || {}
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
        city: (row[CITY_COL] || "").toString(),
        maritalStatus: (row[MARITAL_STATUS_COL] || "").toString(),
        occupancyType: (row[OCCUPANCY_TYPE_COL] || "").toString(),
        familyDetails: (row[FAMILY_DETAILS_COL] || "").toString(),
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
        advancePaid: parseFloat(row[ADVANCE_PAID_COL]) || 0,
        numberOfRooms: parseInt(row[NUM_ROOMS_COL]) || 1,
        linkedCheckInId: (row[LINKED_CHECKIN_COL] || "").toString()
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

    loginSheet.appendRow([username.trim(), password.trim(), role.trim().toLowerCase(), "", ""]);
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
        phone: (row[CUST_PHONE_COL] || '').toString(),
        email: (row[CUST_EMAIL_COL] || '').toString(),
        city: (row[CUST_CITY_COL] || '').toString(),
        maritalStatus: (row[CUST_MARITAL_COL] || '').toString(),
        notes: (row[CUST_NOTES_COL] || '').toString(),
        createdAt: (row[CUST_CREATED_AT_COL] || '').toString(),
        linkedUsername: (row[CUST_LINKED_USER_COL] || '').toString()
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
      sheet.appendRow(["CustomerID", "Name", "Phone", "Email", "City", "MaritalStatus", "Notes", "CreatedAt", "LinkedUsername"]);
      const headerRange = sheet.getRange(1, 1, 1, 9);
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

function updateCustomer(rowIndex, customerData) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Customers sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    if (customerData.name !== undefined) sheet.getRange(rowIndex, CUST_NAME_COL + 1).setValue(customerData.name);
    if (customerData.phone !== undefined) sheet.getRange(rowIndex, CUST_PHONE_COL + 1).setValue(customerData.phone);
    if (customerData.email !== undefined) sheet.getRange(rowIndex, CUST_EMAIL_COL + 1).setValue(customerData.email);
    if (customerData.city !== undefined) sheet.getRange(rowIndex, CUST_CITY_COL + 1).setValue(customerData.city);
    if (customerData.maritalStatus !== undefined) sheet.getRange(rowIndex, CUST_MARITAL_COL + 1).setValue(customerData.maritalStatus);
    if (customerData.notes !== undefined) sheet.getRange(rowIndex, CUST_NOTES_COL + 1).setValue(customerData.notes);

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
 * ROOMS KANBAN
 ***************************************************/
function getRoomsForKanban() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
    const rooms = roomsSheet.getDataRange().getValues();
    const bookings = bookingsSheet.getDataRange().getValues();

    const guestMap = {};
    for (let i = 1; i < bookings.length; i++) {
      const status = (bookings[i][BOOKING_STATUS_COL] || '').toString().toLowerCase();
      if (status === 'booked') {
        const roomNo = (bookings[i][BOOKING_ROOM_NO_COL] || '').toString();
        guestMap[roomNo] = {
          guestName: (bookings[i][GUEST_NAME_COL] || '').toString(),
          checkIn: bookings[i][CHECK_IN_COL] ? new Date(bookings[i][CHECK_IN_COL]).toISOString() : '',
          checkOut: bookings[i][CHECK_OUT_COL] ? new Date(bookings[i][CHECK_OUT_COL]).toISOString() : ''
        };
      }
    }

    let result = [];
    for (let i = 1; i < rooms.length; i++) {
      const roomNo = (rooms[i][ROOM_NO_COL] || '').toString();
      const guest = guestMap[roomNo] || {};
      result.push({
        roomNo: roomNo,
        roomType: (rooms[i][ROOM_TYPE_COL] || '').toString(),
        roomRate: parseFloat(rooms[i][ROOM_RATE_COL]) || 0,
        roomStatus: (rooms[i][ROOM_STATUS_COL] || '').toString(),
        guestName: guest.guestName || '',
        checkIn: guest.checkIn || '',
        checkOut: guest.checkOut || ''
      });
    }
    return result;
  } catch (err) {
    return { error: err.message };
  }
}

/***************************************************
 * ROOM RESERVATION (24-hour hold from Quotes)
 ***************************************************/
function checkReservedRooms() {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const quotesSheet = ss.getSheetByName(QUOTES_SHEET_NAME);
    if (!roomsSheet || !quotesSheet) return { success: false, message: "Sheet not found." };

    const roomsData = roomsSheet.getDataRange().getValues();
    const quotesData = quotesSheet.getDataRange().getValues();
    const now = new Date();
    let releasedCount = 0;

    for (let i = 1; i < roomsData.length; i++) {
      if ((roomsData[i][ROOM_STATUS_COL] || '').toString() === 'Reserved') {
        const roomNo = (roomsData[i][ROOM_NO_COL] || '').toString();
        let shouldRelease = true;

        for (let q = 1; q < quotesData.length; q++) {
          const qStatus = (quotesData[q][QUOTE_STATUS_COL] || '').toString();
          const qCreated = quotesData[q][QUOTE_CREATED_COL] ? new Date(quotesData[q][QUOTE_CREATED_COL]) : null;
          const qConverted = (quotesData[q][QUOTE_CONVERTED_COL] || '').toString();

          if (qConverted) continue;
          if (qStatus === 'Expired' || qStatus === 'Converted') continue;

          try {
            const items = JSON.parse((quotesData[q][QUOTE_ITEMS_COL] || '[]').toString());
            const hasRoom = items.some(it => it.type === 'room' && it.reservedRoomNo === roomNo);
            if (hasRoom && qCreated) {
              const hoursSince = (now - qCreated) / (1000 * 60 * 60);
              if (hoursSince < 24) {
                shouldRelease = false;
                break;
              }
            }
          } catch (e) { /* ignore parse errors */ }
        }

        if (shouldRelease) {
          roomsSheet.getRange(i + 1, ROOM_STATUS_COL + 1).setValue("Available");
          releasedCount++;
        }
      }
    }

    SpreadsheetApp.flush();
    return { success: true, message: releasedCount + " room(s) released from reservation.", releasedCount: releasedCount };
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
 * QUOTE MANAGEMENT
 ***************************************************/
function getAllQuotes() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
    if (!sheet) return [];
    const data = sheet.getDataRange().getValues();
    let quotes = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      quotes.push({
        rowIndex: i + 1,
        quoteId: (row[QUOTE_ID_COL] || "").toString(),
        guestName: (row[QUOTE_GUEST_NAME_COL] || "").toString(),
        phone: (row[QUOTE_PHONE_COL] || "").toString(),
        email: (row[QUOTE_EMAIL_COL] || "").toString(),
        createdDate: (row[QUOTE_CREATED_COL] || "").toString(),
        validUntil: (row[QUOTE_VALID_COL] || "").toString(),
        status: (row[QUOTE_STATUS_COL] || "").toString(),
        items: (row[QUOTE_ITEMS_COL] || "[]").toString(),
        subTotal: parseFloat(row[QUOTE_SUBTOTAL_COL]) || 0,
        tax: parseFloat(row[QUOTE_TAX_COL]) || 0,
        discount: parseFloat(row[QUOTE_DISCOUNT_COL]) || 0,
        totalAmount: parseFloat(row[QUOTE_TOTAL_COL]) || 0,
        notes: (row[QUOTE_NOTES_COL] || "").toString(),
        createdBy: (row[QUOTE_CREATED_BY_COL] || "").toString(),
        currency: (row[QUOTE_CURRENCY_COL] || 'MVR').toString(),
        gstEnabled: row[QUOTE_GST_ENABLED_COL] === true || row[QUOTE_GST_ENABLED_COL] === 'true',
        gstPercent: parseFloat(row[QUOTE_GST_PERCENT_COL]) || 0,
        gstAmount: parseFloat(row[QUOTE_GST_AMOUNT_COL]) || 0,
        greenTaxEnabled: row[QUOTE_GREENTAX_ENABLED_COL] === true || row[QUOTE_GREENTAX_ENABLED_COL] === 'true',
        greenTaxPerNight: parseFloat(row[QUOTE_GREENTAX_RATE_COL]) || 0,
        greenTaxPax: parseFloat(row[QUOTE_GREENTAX_PAX_COL]) || 0,
        greenTaxNights: parseFloat(row[QUOTE_GREENTAX_NIGHTS_COL]) || 0,
        greenTaxAmount: parseFloat(row[QUOTE_GREENTAX_AMOUNT_COL]) || 0,
        customerTIN: (row[QUOTE_CUSTOMER_TIN_COL] || '').toString(),
        convertedToInvoice: (row[QUOTE_CONVERTED_COL] || '').toString(),
        pdfDriveLink: (row[QUOTE_PDF_LINK_COL] || '').toString()
      });
    }
    return quotes;
  } catch (err) {
    return { error: err.message };
  }
}

function addQuote(quoteData) {
  try {
    if (!quoteData.guestName) {
      return { success: false, message: "Guest name is required." };
    }
    if (!quoteData.items || quoteData.items === '[]') {
      return { success: false, message: "At least one item is required." };
    }

    try { JSON.parse(quoteData.items); } catch (jsonErr) {
      return { success: false, message: "Invalid items format." };
    }

    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Quotes sheet not found." };

    const quoteId = getNextSequentialId('quote');
    const createdDate = new Date().toISOString();
    const status = quoteData.status || "Draft";
    const subTotal = parseFloat(quoteData.subTotal) || 0;
    const discount = parseFloat(quoteData.discount) || 0;
    const currency = quoteData.currency || 'MVR';

    // Tax calculations
    const gstEnabled = quoteData.gstEnabled === true;
    const gstPercent = parseFloat(quoteData.gstPercent) || 0;
    const gstAmount = gstEnabled ? (subTotal - discount) * (gstPercent / 100) : 0;
    const greenTaxEnabled = quoteData.greenTaxEnabled === true;
    const greenTaxRate = parseFloat(quoteData.greenTaxPerNight) || 0;
    const greenTaxPax = parseFloat(quoteData.greenTaxPax) || 0;
    const greenTaxNights = parseFloat(quoteData.greenTaxNights) || 0;
    const greenTaxAmount = greenTaxEnabled ? greenTaxRate * greenTaxPax * greenTaxNights : 0;
    const totalAmount = subTotal - discount + gstAmount + greenTaxAmount;

    sheet.appendRow([
      quoteId,
      quoteData.guestName.trim(),
      (quoteData.phone || "").trim(),
      (quoteData.email || "").trim(),
      createdDate,
      (quoteData.validUntil || "").trim(),
      status,
      quoteData.items,
      subTotal,
      0,
      discount,
      Math.round(totalAmount * 100) / 100,
      (quoteData.notes || "").trim(),
      (quoteData.createdBy || "").trim(),
      currency,
      gstEnabled,
      gstPercent,
      Math.round(gstAmount * 100) / 100,
      greenTaxEnabled,
      greenTaxRate,
      greenTaxPax,
      greenTaxNights,
      Math.round(greenTaxAmount * 100) / 100,
      (quoteData.customerTIN || '').trim(),
      '',
      ''
    ]);

    // Reserve rooms if items contain reservedRoomNo
    try {
      const parsedItems = JSON.parse(quoteData.items);
      const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
      if (roomsSheet) {
        const roomsData = roomsSheet.getDataRange().getValues();
        parsedItems.forEach(item => {
          if (item.type === 'room' && item.reservedRoomNo) {
            for (let r = 1; r < roomsData.length; r++) {
              if ((roomsData[r][ROOM_NO_COL] || '').toString() === item.reservedRoomNo.toString()) {
                const curStatus = (roomsData[r][ROOM_STATUS_COL] || '').toString().toLowerCase();
                if (curStatus === 'available') {
                  roomsSheet.getRange(r + 1, ROOM_STATUS_COL + 1).setValue("Reserved");
                }
                break;
              }
            }
          }
        });
      }
    } catch (reserveErr) { Logger.log("Room reserve error: " + reserveErr); }

    return { success: true, message: "Quote created successfully!", quoteId: quoteId };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateQuote(rowIndex, quoteData) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Quotes sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    // Original columns 0-13
    if (quoteData.guestName !== undefined) sheet.getRange(rowIndex, QUOTE_GUEST_NAME_COL + 1).setValue(quoteData.guestName);
    if (quoteData.phone !== undefined) sheet.getRange(rowIndex, QUOTE_PHONE_COL + 1).setValue(quoteData.phone);
    if (quoteData.email !== undefined) sheet.getRange(rowIndex, QUOTE_EMAIL_COL + 1).setValue(quoteData.email);
    if (quoteData.validUntil !== undefined) sheet.getRange(rowIndex, QUOTE_VALID_COL + 1).setValue(quoteData.validUntil);
    if (quoteData.status !== undefined) sheet.getRange(rowIndex, QUOTE_STATUS_COL + 1).setValue(quoteData.status);
    if (quoteData.notes !== undefined) sheet.getRange(rowIndex, QUOTE_NOTES_COL + 1).setValue(quoteData.notes);

    if (quoteData.items !== undefined) {
      try { JSON.parse(quoteData.items); } catch (e) {
        return { success: false, message: "Invalid items format." };
      }
      sheet.getRange(rowIndex, QUOTE_ITEMS_COL + 1).setValue(quoteData.items);
    }

    if (quoteData.subTotal !== undefined) sheet.getRange(rowIndex, QUOTE_SUBTOTAL_COL + 1).setValue(parseFloat(quoteData.subTotal) || 0);
    if (quoteData.tax !== undefined) sheet.getRange(rowIndex, QUOTE_TAX_COL + 1).setValue(parseFloat(quoteData.tax) || 0);
    if (quoteData.discount !== undefined) sheet.getRange(rowIndex, QUOTE_DISCOUNT_COL + 1).setValue(parseFloat(quoteData.discount) || 0);

    // New columns 14-25
    if (quoteData.currency !== undefined) sheet.getRange(rowIndex, QUOTE_CURRENCY_COL + 1).setValue(quoteData.currency);
    if (quoteData.customerTIN !== undefined) sheet.getRange(rowIndex, QUOTE_CUSTOMER_TIN_COL + 1).setValue(quoteData.customerTIN);

    // Tax fields
    if (quoteData.gstEnabled !== undefined) sheet.getRange(rowIndex, QUOTE_GST_ENABLED_COL + 1).setValue(quoteData.gstEnabled === true);
    if (quoteData.gstPercent !== undefined) sheet.getRange(rowIndex, QUOTE_GST_PERCENT_COL + 1).setValue(parseFloat(quoteData.gstPercent) || 0);
    if (quoteData.greenTaxEnabled !== undefined) sheet.getRange(rowIndex, QUOTE_GREENTAX_ENABLED_COL + 1).setValue(quoteData.greenTaxEnabled === true);
    if (quoteData.greenTaxPerNight !== undefined) sheet.getRange(rowIndex, QUOTE_GREENTAX_RATE_COL + 1).setValue(parseFloat(quoteData.greenTaxPerNight) || 0);
    if (quoteData.greenTaxPax !== undefined) sheet.getRange(rowIndex, QUOTE_GREENTAX_PAX_COL + 1).setValue(parseFloat(quoteData.greenTaxPax) || 0);
    if (quoteData.greenTaxNights !== undefined) sheet.getRange(rowIndex, QUOTE_GREENTAX_NIGHTS_COL + 1).setValue(parseFloat(quoteData.greenTaxNights) || 0);

    // Recalculate tax amounts and total
    const subTotal = parseFloat(sheet.getRange(rowIndex, QUOTE_SUBTOTAL_COL + 1).getValue()) || 0;
    const discount = parseFloat(sheet.getRange(rowIndex, QUOTE_DISCOUNT_COL + 1).getValue()) || 0;
    const gstEnabled = sheet.getRange(rowIndex, QUOTE_GST_ENABLED_COL + 1).getValue() === true;
    const gstPercent = parseFloat(sheet.getRange(rowIndex, QUOTE_GST_PERCENT_COL + 1).getValue()) || 0;
    const gstAmount = gstEnabled ? (subTotal - discount) * (gstPercent / 100) : 0;
    const greenTaxEnabled = sheet.getRange(rowIndex, QUOTE_GREENTAX_ENABLED_COL + 1).getValue() === true;
    const greenTaxRate = parseFloat(sheet.getRange(rowIndex, QUOTE_GREENTAX_RATE_COL + 1).getValue()) || 0;
    const greenTaxPax = parseFloat(sheet.getRange(rowIndex, QUOTE_GREENTAX_PAX_COL + 1).getValue()) || 0;
    const greenTaxNights = parseFloat(sheet.getRange(rowIndex, QUOTE_GREENTAX_NIGHTS_COL + 1).getValue()) || 0;
    const greenTaxAmount = greenTaxEnabled ? greenTaxRate * greenTaxPax * greenTaxNights : 0;
    const total = subTotal - discount + gstAmount + greenTaxAmount;

    sheet.getRange(rowIndex, QUOTE_GST_AMOUNT_COL + 1).setValue(Math.round(gstAmount * 100) / 100);
    sheet.getRange(rowIndex, QUOTE_GREENTAX_AMOUNT_COL + 1).setValue(Math.round(greenTaxAmount * 100) / 100);
    sheet.getRange(rowIndex, QUOTE_TOTAL_COL + 1).setValue(Math.round(total * 100) / 100);

    // Reserve rooms if status changed and items contain reservedRoomNo
    if (quoteData.status === 'Sent' || quoteData.status === 'Accepted') {
      try {
        const itemsStr = (quoteData.items || sheet.getRange(rowIndex, QUOTE_ITEMS_COL + 1).getValue() || '[]').toString();
        const parsedItems = JSON.parse(itemsStr);
        const roomsSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(ROOMS_SHEET_NAME);
        if (roomsSheet) {
          const roomsData = roomsSheet.getDataRange().getValues();
          parsedItems.forEach(item => {
            if (item.type === 'room' && item.reservedRoomNo) {
              for (let r = 1; r < roomsData.length; r++) {
                if ((roomsData[r][ROOM_NO_COL] || '').toString() === item.reservedRoomNo.toString()) {
                  const curStatus = (roomsData[r][ROOM_STATUS_COL] || '').toString().toLowerCase();
                  if (curStatus === 'available') {
                    roomsSheet.getRange(r + 1, ROOM_STATUS_COL + 1).setValue("Reserved");
                  }
                  break;
                }
              }
            }
          });
        }
      } catch (reserveErr) { Logger.log("Room reserve error on update: " + reserveErr); }
    }

    return { success: true, message: "Quote updated successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteQuote(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Quotes sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Cannot delete header row." };
    sheet.deleteRow(rowIndex);
    return { success: true, message: "Quote deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function getQuoteById(quoteId) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(QUOTES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Quotes sheet not found." };
    const data = sheet.getDataRange().getValues();

    for (let i = 1; i < data.length; i++) {
      if ((data[i][QUOTE_ID_COL] || "").toString() === quoteId.toString()) {
        return {
          success: true,
          quote: {
            rowIndex: i + 1,
            quoteId: (data[i][QUOTE_ID_COL] || "").toString(),
            guestName: (data[i][QUOTE_GUEST_NAME_COL] || "").toString(),
            phone: (data[i][QUOTE_PHONE_COL] || "").toString(),
            email: (data[i][QUOTE_EMAIL_COL] || "").toString(),
            createdDate: (data[i][QUOTE_CREATED_COL] || "").toString(),
            validUntil: (data[i][QUOTE_VALID_COL] || "").toString(),
            status: (data[i][QUOTE_STATUS_COL] || "").toString(),
            items: (data[i][QUOTE_ITEMS_COL] || "[]").toString(),
            subTotal: parseFloat(data[i][QUOTE_SUBTOTAL_COL]) || 0,
            tax: parseFloat(data[i][QUOTE_TAX_COL]) || 0,
            discount: parseFloat(data[i][QUOTE_DISCOUNT_COL]) || 0,
            totalAmount: parseFloat(data[i][QUOTE_TOTAL_COL]) || 0,
            notes: (data[i][QUOTE_NOTES_COL] || "").toString(),
            createdBy: (data[i][QUOTE_CREATED_BY_COL] || "").toString(),
            currency: (data[i][QUOTE_CURRENCY_COL] || 'MVR').toString(),
            gstEnabled: data[i][QUOTE_GST_ENABLED_COL] === true || data[i][QUOTE_GST_ENABLED_COL] === 'true',
            gstPercent: parseFloat(data[i][QUOTE_GST_PERCENT_COL]) || 0,
            gstAmount: parseFloat(data[i][QUOTE_GST_AMOUNT_COL]) || 0,
            greenTaxEnabled: data[i][QUOTE_GREENTAX_ENABLED_COL] === true || data[i][QUOTE_GREENTAX_ENABLED_COL] === 'true',
            greenTaxPerNight: parseFloat(data[i][QUOTE_GREENTAX_RATE_COL]) || 0,
            greenTaxPax: parseFloat(data[i][QUOTE_GREENTAX_PAX_COL]) || 0,
            greenTaxNights: parseFloat(data[i][QUOTE_GREENTAX_NIGHTS_COL]) || 0,
            greenTaxAmount: parseFloat(data[i][QUOTE_GREENTAX_AMOUNT_COL]) || 0,
            customerTIN: (data[i][QUOTE_CUSTOMER_TIN_COL] || '').toString(),
            convertedToInvoice: (data[i][QUOTE_CONVERTED_COL] || '').toString(),
            pdfDriveLink: (data[i][QUOTE_PDF_LINK_COL] || '').toString()
          }
        };
      }
    }
    return { success: false, message: "Quote not found." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * FINANCE MANAGEMENT
 ***************************************************/
function recalculateBalances() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) return { success: false, message: "Finance sheet not found." };
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return { success: true, message: "No records to recalculate." };

    let runningBalance = 0;
    let balanceArray = [];

    for (let i = 1; i < data.length; i++) {
      let type = (data[i][FIN_TYPE_COL] || "").toString();
      let amount = parseFloat(data[i][FIN_AMOUNT_COL]) || 0;
      if (type === "Income") {
        runningBalance += amount;
      } else if (type === "Expense") {
        runningBalance -= amount;
      }
      balanceArray.push([runningBalance]);
    }

    sheet.getRange(2, FIN_BALANCE_COL + 1, balanceArray.length, 1).setValues(balanceArray);
    SpreadsheetApp.flush();
    return { success: true, message: "Balances recalculated." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function getAllFinanceRecords() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) return [];
    const data = sheet.getDataRange().getValues();
    let records = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      records.push({
        rowIndex: i + 1,
        id: (row[FIN_ID_COL] || "").toString(),
        date: (row[FIN_DATE_COL] || "").toString(),
        type: (row[FIN_TYPE_COL] || "").toString(),
        description: (row[FIN_DESC_COL] || "").toString(),
        shopSource: (row[FIN_SHOP_COL] || "").toString(),
        amount: parseFloat(row[FIN_AMOUNT_COL]) || 0,
        balance: parseFloat(row[FIN_BALANCE_COL]) || 0,
        enteredBy: (row[FIN_ENTERED_BY_COL] || "").toString(),
        createdAt: (row[FIN_CREATED_AT_COL] || "").toString(),
        category: (row[FIN_CATEGORY_COL] || '').toString(),
        currency: (row[FIN_CURRENCY_COL] || 'MVR').toString(),
        linkedInvoiceId: (row[FIN_LINKED_INV_COL] || '').toString()
      });
    }
    return records;
  } catch (err) {
    return { error: err.message };
  }
}

function addFinanceRecord(recordData) {
  try {
    if (!recordData.date || !recordData.type || !recordData.description) {
      return { success: false, message: "Date, type, and description are required." };
    }
    if (recordData.type !== "Income" && recordData.type !== "Expense") {
      return { success: false, message: "Type must be 'Income' or 'Expense'." };
    }
    let amount = parseFloat(recordData.amount);
    if (isNaN(amount) || amount <= 0) {
      return { success: false, message: "Amount must be a positive number." };
    }

    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) {
      return { success: false, message: "Finance sheet not found. Please create it first." };
    }

    const id = generateFinanceId();
    const createdAt = new Date().toISOString();

    // Calculate new balance
    const data = sheet.getDataRange().getValues();
    let previousBalance = 0;
    if (data.length > 1) {
      previousBalance = parseFloat(data[data.length - 1][FIN_BALANCE_COL]) || 0;
    }
    let newBalance = recordData.type === "Income" ? previousBalance + amount : previousBalance - amount;

    sheet.appendRow([
      id,
      recordData.date,
      recordData.type,
      recordData.description.trim(),
      (recordData.shopSource || "").trim(),
      amount,
      newBalance,
      (recordData.enteredBy || "").trim(),
      createdAt,
      (recordData.category || '').trim(),
      (recordData.currency || 'MVR').trim(),
      (recordData.linkedInvoiceId || '').trim()
    ]);

    // Recalculate budget for this month if expense
    if (recordData.type === 'Expense') {
      const d = new Date(recordData.date);
      getBudgetForMonth(d.getMonth() + 1, d.getFullYear());
    }

    return { success: true, message: "Finance record added successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function updateFinanceRecord(rowIndex, recordData) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) return { success: false, message: "Finance sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Invalid row index." };

    if (recordData.date !== undefined) sheet.getRange(rowIndex, FIN_DATE_COL + 1).setValue(recordData.date);
    if (recordData.type !== undefined) {
      if (recordData.type !== "Income" && recordData.type !== "Expense") {
        return { success: false, message: "Type must be 'Income' or 'Expense'." };
      }
      sheet.getRange(rowIndex, FIN_TYPE_COL + 1).setValue(recordData.type);
    }
    if (recordData.description !== undefined) sheet.getRange(rowIndex, FIN_DESC_COL + 1).setValue(recordData.description);
    if (recordData.shopSource !== undefined) sheet.getRange(rowIndex, FIN_SHOP_COL + 1).setValue(recordData.shopSource);
    if (recordData.amount !== undefined) {
      let amount = parseFloat(recordData.amount);
      if (isNaN(amount) || amount <= 0) {
        return { success: false, message: "Amount must be a positive number." };
      }
      sheet.getRange(rowIndex, FIN_AMOUNT_COL + 1).setValue(amount);
    }
    if (recordData.category !== undefined) sheet.getRange(rowIndex, FIN_CATEGORY_COL + 1).setValue(recordData.category);
    if (recordData.currency !== undefined) sheet.getRange(rowIndex, FIN_CURRENCY_COL + 1).setValue(recordData.currency);

    // Recalculate all balances after edit
    recalculateBalances();

    return { success: true, message: "Finance record updated successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteFinanceRecord(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) return { success: false, message: "Finance sheet not found." };
    if (rowIndex <= 1) {
      return { success: false, message: "Cannot delete header row." };
    }
    sheet.deleteRow(rowIndex);

    // Recalculate all balances after deletion
    recalculateBalances();

    return { success: true, message: "Finance record deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function getFinanceSummary() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet) return { totalIncome: 0, totalExpenses: 0, netBalance: 0 };
    const data = sheet.getDataRange().getValues();
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 1; i < data.length; i++) {
      let type = (data[i][FIN_TYPE_COL] || "").toString();
      let amount = parseFloat(data[i][FIN_AMOUNT_COL]) || 0;
      if (type === "Income") totalIncome += amount;
      else if (type === "Expense") totalExpenses += amount;
    }

    return { totalIncome, totalExpenses, netBalance: totalIncome - totalExpenses };
  } catch (err) {
    return { error: err.message };
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
        greenTaxDefaultRate: 6, nextInvoiceNum: 1, nextQuoteNum: 1, pdfFolderId: '', logoFolderId: ''
      }};
    }
    const row = sheet.getRange(2, 1, 1, 14).getValues()[0];
    return { success: true, data: {
      hotelName: (row[SET_HOTEL_NAME_COL] || 'Hill View Eco Retreat').toString(),
      hotelAddress: (row[SET_HOTEL_ADDRESS_COL] || '').toString(),
      hotelPhone: (row[SET_HOTEL_PHONE_COL] || '').toString(),
      hotelEmail: (row[SET_HOTEL_EMAIL_COL] || '').toString(),
      hotelTIN: (row[SET_HOTEL_TIN_COL] || '').toString(),
      logoFileId: (row[SET_LOGO_FILE_ID_COL] || '').toString(),
      logoUrl: (row[SET_LOGO_URL_COL] || '').toString(),
      defaultCurrency: (row[SET_DEFAULT_CURRENCY_COL] || 'MVR').toString(),
      gstDefaultPercent: parseFloat(row[SET_GST_DEFAULT_COL]) || 16,
      greenTaxDefaultRate: parseFloat(row[SET_GREENTAX_DEFAULT_COL]) || 6,
      nextInvoiceNum: parseInt(row[SET_NEXT_INVOICE_COL]) || 1,
      nextQuoteNum: parseInt(row[SET_NEXT_QUOTE_COL]) || 1,
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
    let currentQuoteNum = 1;
    let currentPdfFolderId = settingsData.pdfFolderId || '';
    let currentLogoFolderId = settingsData.logoFolderId || '';
    if (sheet.getLastRow() >= 2) {
      const existing = sheet.getRange(2, 1, 1, 14).getValues()[0];
      currentInvoiceNum = parseInt(existing[SET_NEXT_INVOICE_COL]) || 1;
      currentQuoteNum = parseInt(existing[SET_NEXT_QUOTE_COL]) || 1;
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
      settingsData.defaultCurrency || 'MVR',
      parseFloat(settingsData.gstDefaultPercent) || 16,
      parseFloat(settingsData.greenTaxDefaultRate) || 6,
      currentInvoiceNum,
      currentQuoteNum,
      currentPdfFolderId,
      currentLogoFolderId
    ];

    if (sheet.getLastRow() < 2) {
      sheet.appendRow(row);
    } else {
      sheet.getRange(2, 1, 1, 14).setValues([row]);
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
        greenTaxEnabled: row[INV_GREENTAX_ENABLED_COL] === true || row[INV_GREENTAX_ENABLED_COL] === 'true',
        greenTaxPerNight: parseFloat(row[INV_GREENTAX_RATE_COL]) || 0,
        greenTaxPax: parseFloat(row[INV_GREENTAX_PAX_COL]) || 0,
        greenTaxNights: parseFloat(row[INV_GREENTAX_NIGHTS_COL]) || 0,
        greenTaxAmount: parseFloat(row[INV_GREENTAX_AMOUNT_COL]) || 0,
        discount: parseFloat(row[INV_DISCOUNT_COL]) || 0,
        totalAmount: parseFloat(row[INV_TOTAL_COL]) || 0,
        notes: (row[INV_NOTES_COL] || '').toString(),
        sourceQuoteId: (row[INV_SOURCE_QUOTE_COL] || '').toString(),
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
    const greenTaxEnabled = invoiceData.greenTaxEnabled === true;
    const greenTaxRate = parseFloat(invoiceData.greenTaxPerNight) || 0;
    const greenTaxPax = parseFloat(invoiceData.greenTaxPax) || 0;
    const greenTaxNights = parseFloat(invoiceData.greenTaxNights) || 0;
    const greenTaxAmount = greenTaxEnabled ? greenTaxRate * greenTaxPax * greenTaxNights : 0;
    const totalAmount = subTotal - discount + gstAmount + greenTaxAmount;

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
      greenTaxEnabled,
      greenTaxRate,
      greenTaxPax,
      greenTaxNights,
      Math.round(greenTaxAmount * 100) / 100,
      discount,
      Math.round(totalAmount * 100) / 100,
      (invoiceData.notes || '').trim(),
      invoiceData.sourceQuoteId || '',
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
    const greenTaxEnabled = invoiceData.greenTaxEnabled === true;
    const greenTaxRate = parseFloat(invoiceData.greenTaxPerNight) || 0;
    const greenTaxPax = parseFloat(invoiceData.greenTaxPax) || 0;
    const greenTaxNights = parseFloat(invoiceData.greenTaxNights) || 0;
    const greenTaxAmount = greenTaxEnabled ? greenTaxRate * greenTaxPax * greenTaxNights : 0;
    const totalAmount = subTotal - discount + gstAmount + greenTaxAmount;

    // Read old status before overwriting
    const oldStatus = (sheet.getRange(rowIndex, INV_STATUS_COL + 1).getValue() || '').toString();

    // Keep existing ID and createdDate, update everything else
    const existingId = sheet.getRange(rowIndex, INV_ID_COL + 1).getValue();
    const existingCreated = sheet.getRange(rowIndex, INV_CREATED_DATE_COL + 1).getValue();
    const existingSource = sheet.getRange(rowIndex, INV_SOURCE_QUOTE_COL + 1).getValue();
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
      greenTaxEnabled,
      greenTaxRate,
      greenTaxPax,
      greenTaxNights,
      Math.round(greenTaxAmount * 100) / 100,
      discount,
      Math.round(totalAmount * 100) / 100,
      (invoiceData.notes || '').trim(),
      existingSource,
      existingPdf,
      existingCreatedBy,
      now
    ];

    sheet.getRange(rowIndex, 1, 1, 26).setValues([row]);

    // Auto-record payment when status changes to Paid
    const newStatus = (invoiceData.status || 'Draft').toString();
    let paymentRecorded = false;
    if (newStatus === 'Paid' && oldStatus !== 'Paid') {
      try {
        const finSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
        if (finSheet) {
          const finData = finSheet.getDataRange().getValues();
          let alreadyRecorded = false;
          for (let f = 1; f < finData.length; f++) {
            if ((finData[f][FIN_LINKED_INV_COL] || '').toString() === existingId.toString()) {
              alreadyRecorded = true;
              break;
            }
          }
          if (!alreadyRecorded) {
            addFinanceRecord({
              date: new Date().toISOString().slice(0, 10),
              type: 'Income',
              description: 'Payment for ' + existingId,
              shopSource: 'Invoice Payment',
              amount: Math.round(totalAmount * 100) / 100,
              enteredBy: invoiceData.createdBy || existingCreatedBy || '',
              category: 'Invoice Payment',
              currency: invoiceData.currency || 'MVR',
              linkedInvoiceId: existingId.toString()
            });
            recalculateBalances();
            paymentRecorded = true;
          }
        }
      } catch (finErr) {
        Logger.log("Auto-payment error: " + finErr.message);
      }
    }

    return { success: true, message: "Invoice updated successfully!", paymentRecorded: paymentRecorded };
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
  const isInvoice = type === 'invoice';
  const docLabel = isInvoice ? 'INVOICE' : 'QUOTATION';
  const docId = isInvoice ? data.invoiceId : data.quoteId;

  let items = [];
  try { items = JSON.parse(typeof data.items === 'string' ? data.items : '[]'); } catch (e) { items = []; }
  const roomItems = items.filter(i => i.type === 'room');
  const actItems = items.filter(i => i.type === 'activity');
  const svcItems = items.filter(i => i.type === 'service');

  let itemRows = '';
  roomItems.forEach(it => {
    itemRows += '<tr><td>' + (it.roomType || 'Room') + '</td><td>' + (it.quantity || 1) + ' room(s) x ' + (it.nights || 0) + ' night(s) x ' + cur + ' ' + (parseFloat(it.rate) || 0).toFixed(2) + '</td><td class="right">' + cur + ' ' + (parseFloat(it.amount) || 0).toFixed(2) + '</td></tr>';
  });
  actItems.forEach(it => {
    itemRows += '<tr><td>' + (it.description || 'Activity') + '</td><td>' + (it.pax || 1) + ' pax x ' + cur + ' ' + (parseFloat(it.rate) || 0).toFixed(2) + '</td><td class="right">' + cur + ' ' + (parseFloat(it.amount) || 0).toFixed(2) + '</td></tr>';
  });
  svcItems.forEach(it => {
    itemRows += '<tr><td>' + (it.description || 'Service') + '</td><td>-</td><td class="right">' + cur + ' ' + (parseFloat(it.amount) || 0).toFixed(2) + '</td></tr>';
  });

  const subTotal = parseFloat(data.subTotal) || 0;
  const discount = parseFloat(data.discount) || 0;
  const gstAmount = parseFloat(data.gstAmount) || 0;
  const greenTaxAmount = parseFloat(data.greenTaxAmount) || 0;
  const totalAmount = parseFloat(data.totalAmount) || 0;

  let totalsRows = '<tr><td colspan="2"><strong>Subtotal</strong></td><td class="right"><strong>' + cur + ' ' + subTotal.toFixed(2) + '</strong></td></tr>';
  if (discount > 0) totalsRows += '<tr><td colspan="2">Discount</td><td class="right">- ' + cur + ' ' + discount.toFixed(2) + '</td></tr>';
  if (data.gstEnabled) totalsRows += '<tr><td colspan="2">GST (' + (data.gstPercent || 0) + '%)</td><td class="right">' + cur + ' ' + gstAmount.toFixed(2) + '</td></tr>';
  if (data.greenTaxEnabled) totalsRows += '<tr><td colspan="2">Green Tax</td><td class="right">' + cur + ' ' + greenTaxAmount.toFixed(2) + '</td></tr>';
  totalsRows += '<tr class="total"><td colspan="2"><strong>TOTAL</strong></td><td class="right"><strong>' + cur + ' ' + totalAmount.toFixed(2) + '</strong></td></tr>';

  let dateInfo = '';
  if (isInvoice) {
    dateInfo = '<p><strong>Date:</strong> ' + (data.createdDate || '') + '</p><p><strong>Due Date:</strong> ' + (data.dueDate || '') + '</p><p><strong>Status:</strong> ' + (data.status || '') + '</p>';
  } else {
    dateInfo = '<p><strong>Created:</strong> ' + (data.createdDate || '') + '</p><p><strong>Valid Until:</strong> ' + (data.validUntil || '') + '</p>';
  }

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
    (data.customerTIN ? '<p><strong>Customer TIN:</strong> ' + data.customerTIN + '</p>' : '') +
    dateInfo +
    '<table><tr><th>Description</th><th>Details</th><th class="right">Amount (' + cur + ')</th></tr>' +
    itemRows + totalsRows + '</table>' +
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

function emailQuote(quoteId) {
  try {
    const result = getQuoteById(quoteId);
    if (!result.success) return result;
    const q = result.quote;

    if (!q.email) return { success: false, message: "No email address on this quote." };

    const settingsResult = getSettings();
    const settings = settingsResult.success ? settingsResult.data : { hotelName: 'Hill View Eco Retreat' };

    const htmlBody = generateDocumentEmailHtml('quote', q, settings);
    const subject = settings.hotelName + ' - Quotation ' + q.quoteId;

    MailApp.sendEmail({
      to: q.email,
      subject: subject,
      body: 'Dear ' + q.guestName + ',\n\nPlease find your quotation ' + q.quoteId + ' for ' + (q.currency || 'MVR') + ' ' + q.totalAmount.toFixed(2) + '.\nValid until: ' + (q.validUntil || 'N/A') + '\n\nThank you!\n' + settings.hotelName,
      htmlBody: htmlBody
    });

    return { success: true, message: "Quote emailed to " + q.email + " successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * QUOTE → INVOICE CONVERSION
 ***************************************************/
function convertQuoteToInvoice(quoteRowIndex, user) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const quotesSheet = ss.getSheetByName(QUOTES_SHEET_NAME);
    if (!quotesSheet) return { success: false, message: "Quotes sheet not found." };

    const quoteRow = quotesSheet.getRange(quoteRowIndex, 1, 1, 26).getValues()[0];
    const quoteId = (quoteRow[QUOTE_ID_COL] || '').toString();
    const converted = (quoteRow[QUOTE_CONVERTED_COL] || '').toString();
    if (converted && converted !== '' && converted !== 'false') {
      return { success: false, message: "This quote has already been converted to invoice " + converted + "." };
    }

    const invoicesSheet = ss.getSheetByName(INVOICES_SHEET_NAME);
    if (!invoicesSheet) return { success: false, message: "Invoices sheet not found." };

    const invId = getNextSequentialId('invoice');
    const now = new Date().toISOString();

    // Read quote data
    const items = (quoteRow[QUOTE_ITEMS_COL] || '[]').toString();
    const subTotal = parseFloat(quoteRow[QUOTE_SUBTOTAL_COL]) || 0;
    const discount = parseFloat(quoteRow[QUOTE_DISCOUNT_COL]) || 0;
    const currency = (quoteRow[QUOTE_CURRENCY_COL] || 'MVR').toString();
    const gstEnabled = quoteRow[QUOTE_GST_ENABLED_COL] === true || quoteRow[QUOTE_GST_ENABLED_COL] === 'true';
    const gstPercent = parseFloat(quoteRow[QUOTE_GST_PERCENT_COL]) || 0;
    const gstAmount = parseFloat(quoteRow[QUOTE_GST_AMOUNT_COL]) || 0;
    const greenTaxEnabled = quoteRow[QUOTE_GREENTAX_ENABLED_COL] === true || quoteRow[QUOTE_GREENTAX_ENABLED_COL] === 'true';
    const greenTaxRate = parseFloat(quoteRow[QUOTE_GREENTAX_RATE_COL]) || 0;
    const greenTaxPax = parseFloat(quoteRow[QUOTE_GREENTAX_PAX_COL]) || 0;
    const greenTaxNights = parseFloat(quoteRow[QUOTE_GREENTAX_NIGHTS_COL]) || 0;
    const greenTaxAmount = parseFloat(quoteRow[QUOTE_GREENTAX_AMOUNT_COL]) || 0;
    const totalAmount = parseFloat(quoteRow[QUOTE_TOTAL_COL]) || 0;

    // Due date = 30 days from now
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);

    invoicesSheet.appendRow([
      invId,
      (quoteRow[QUOTE_GUEST_NAME_COL] || '').toString(),
      (quoteRow[QUOTE_PHONE_COL] || '').toString(),
      (quoteRow[QUOTE_EMAIL_COL] || '').toString(),
      (quoteRow[QUOTE_CUSTOMER_TIN_COL] || '').toString(),
      currency,
      now,
      dueDate.toISOString(),
      'Draft',
      items,
      subTotal,
      gstEnabled,
      gstPercent,
      gstAmount,
      greenTaxEnabled,
      greenTaxRate,
      greenTaxPax,
      greenTaxNights,
      greenTaxAmount,
      discount,
      totalAmount,
      (quoteRow[QUOTE_NOTES_COL] || '').toString(),
      quoteId,
      '',
      user || '',
      now
    ]);

    // Mark quote as Converted
    quotesSheet.getRange(quoteRowIndex, QUOTE_STATUS_COL + 1).setValue('Converted');
    quotesSheet.getRange(quoteRowIndex, QUOTE_CONVERTED_COL + 1).setValue(invId);

    // Auto-create bookings from room items
    try {
      const parsedItems = JSON.parse(items);
      const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
      const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
      const roomsData = roomsSheet ? roomsSheet.getDataRange().getValues() : [];

      const guestName = (quoteRow[QUOTE_GUEST_NAME_COL] || '').toString();
      const phone = (quoteRow[QUOTE_PHONE_COL] || '').toString();
      const email = (quoteRow[QUOTE_EMAIL_COL] || '').toString();

      parsedItems.forEach(item => {
        if (item.type === 'room' && item.reservedRoomNo) {
          const roomNo = item.reservedRoomNo.toString();

          // Set room to Booked
          for (let r = 1; r < roomsData.length; r++) {
            if ((roomsData[r][ROOM_NO_COL] || '').toString() === roomNo) {
              roomsSheet.getRange(r + 1, ROOM_STATUS_COL + 1).setValue("Booked");
              break;
            }
          }

          // Create booking entry
          const ticketId = generateTicketId();
          const checkInDate = new Date();
          const checkOutDate = new Date();
          checkOutDate.setDate(checkOutDate.getDate() + (parseInt(item.nights) || 1));
          const roomRate = parseFloat(item.rate) || 0;
          const nights = parseInt(item.nights) || 1;
          const qty = parseInt(item.quantity) || 1;
          const baseAmount = roomRate * nights * qty;

          bookingsSheet.appendRow([
            ticketId, roomNo, guestName, phone, email,
            '', '', 'Single', '',
            checkInDate.toISOString(),
            checkOutDate.toISOString(),
            'Booked',
            roomRate, 0, 0, 'Invoice',
            baseAmount, 'Unpaid', 0,
            '', '', 'None', 0, qty, ''
          ]);
        }
      });
      SpreadsheetApp.flush();
    } catch (bookErr) {
      Logger.log("Auto-booking from quote conversion error: " + bookErr);
    }

    return { success: true, message: "Quote converted to invoice " + invId + " successfully!", invoiceId: invId };
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
    } else if (type === 'quote') {
      const sheet = ss.getSheetByName(QUOTES_SHEET_NAME);
      if (sheet) {
        const data = sheet.getDataRange().getValues();
        for (let i = 1; i < data.length; i++) {
          if ((data[i][QUOTE_ID_COL] || '').toString() === recordId) {
            sheet.getRange(i + 1, QUOTE_PDF_LINK_COL + 1).setValue(fileUrl);
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
 * BUDGET MANAGEMENT
 ***************************************************/
function getAllBudgets() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BUDGETS_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return [];
    const data = sheet.getDataRange().getValues();
    let records = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      records.push({
        rowIndex: i + 1,
        budgetId: (row[BDG_ID_COL] || '').toString(),
        month: parseInt(row[BDG_MONTH_COL]) || 0,
        year: parseInt(row[BDG_YEAR_COL]) || 0,
        budgetAmount: parseFloat(row[BDG_AMOUNT_COL]) || 0,
        totalSpent: parseFloat(row[BDG_SPENT_COL]) || 0,
        remaining: parseFloat(row[BDG_REMAINING_COL]) || 0,
        setBy: (row[BDG_SET_BY_COL] || '').toString(),
        createdAt: (row[BDG_CREATED_AT_COL] || '').toString(),
        updatedAt: (row[BDG_UPDATED_AT_COL] || '').toString()
      });
    }
    return records;
  } catch (err) {
    return { error: err.message };
  }
}

function setBudget(month, year, budgetAmount, user) {
  try {
    month = parseInt(month);
    year = parseInt(year);
    budgetAmount = parseFloat(budgetAmount);
    if (!month || !year || isNaN(budgetAmount) || budgetAmount < 0) {
      return { success: false, message: "Valid month, year, and budget amount are required." };
    }

    const ss = SpreadsheetApp.openById(SS_ID);
    const sheet = ss.getSheetByName(BUDGETS_SHEET_NAME);
    if (!sheet) return { success: false, message: "Budgets sheet not found." };

    const now = new Date().toISOString();
    const budgetId = 'BDG-' + year + '-' + String(month).padStart(2, '0');
    const spent = calculateMonthlyExpenses(month, year);
    const remaining = budgetAmount - spent;

    // Check if budget already exists for this month/year
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (parseInt(data[i][BDG_MONTH_COL]) === month && parseInt(data[i][BDG_YEAR_COL]) === year) {
        sheet.getRange(i + 1, 1, 1, 9).setValues([[
          budgetId, month, year, budgetAmount, spent, remaining, user || '', data[i][BDG_CREATED_AT_COL], now
        ]]);
        return { success: true, message: "Budget updated for " + month + "/" + year + "!" };
      }
    }

    // Create new budget
    sheet.appendRow([budgetId, month, year, budgetAmount, spent, remaining, user || '', now, now]);
    return { success: true, message: "Budget set for " + month + "/" + year + "!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function getBudgetForMonth(month, year) {
  try {
    month = parseInt(month);
    year = parseInt(year);
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(BUDGETS_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return null;

    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (parseInt(data[i][BDG_MONTH_COL]) === month && parseInt(data[i][BDG_YEAR_COL]) === year) {
        // Recalculate spent
        const spent = calculateMonthlyExpenses(month, year);
        const budgetAmount = parseFloat(data[i][BDG_AMOUNT_COL]) || 0;
        const remaining = budgetAmount - spent;

        // Update spent/remaining in sheet
        sheet.getRange(i + 1, BDG_SPENT_COL + 1).setValue(spent);
        sheet.getRange(i + 1, BDG_REMAINING_COL + 1).setValue(remaining);
        sheet.getRange(i + 1, BDG_UPDATED_AT_COL + 1).setValue(new Date().toISOString());

        return {
          budgetId: (data[i][BDG_ID_COL] || '').toString(),
          month: month, year: year,
          budgetAmount: budgetAmount,
          totalSpent: spent,
          remaining: remaining
        };
      }
    }
    return null;
  } catch (err) {
    return null;
  }
}

function calculateMonthlyExpenses(month, year) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return 0;
    const data = sheet.getDataRange().getValues();
    let total = 0;
    for (let i = 1; i < data.length; i++) {
      const type = (data[i][FIN_TYPE_COL] || '').toString();
      if (type !== 'Expense') continue;
      const dateStr = (data[i][FIN_DATE_COL] || '').toString();
      if (!dateStr) continue;
      const d = new Date(dateStr);
      if ((d.getMonth() + 1) === month && d.getFullYear() === year) {
        total += parseFloat(data[i][FIN_AMOUNT_COL]) || 0;
      }
    }
    return Math.round(total * 100) / 100;
  } catch (err) {
    return 0;
  }
}

/***************************************************
 * CATEGORIES MANAGEMENT
 ***************************************************/
function getAllCategories() {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CATEGORIES_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return [];
    const data = sheet.getDataRange().getValues();
    let records = [];
    for (let i = 1; i < data.length; i++) {
      let row = data[i];
      records.push({
        rowIndex: i + 1,
        categoryId: (row[CAT_ID_COL] || '').toString(),
        name: (row[CAT_NAME_COL] || '').toString(),
        type: (row[CAT_TYPE_COL] || '').toString(),
        isDefault: row[CAT_IS_DEFAULT_COL] === true || row[CAT_IS_DEFAULT_COL] === 'true',
        createdBy: (row[CAT_CREATED_BY_COL] || '').toString(),
        createdAt: (row[CAT_CREATED_AT_COL] || '').toString()
      });
    }
    return records;
  } catch (err) {
    return { error: err.message };
  }
}

function addCategory(name, type, user) {
  try {
    if (!name || !type) return { success: false, message: "Category name and type are required." };
    if (type !== 'Income' && type !== 'Expense') return { success: false, message: "Type must be 'Income' or 'Expense'." };

    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CATEGORIES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Categories sheet not found." };

    // Check for duplicate
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if ((data[i][CAT_NAME_COL] || '').toString().toLowerCase() === name.toLowerCase() &&
          (data[i][CAT_TYPE_COL] || '').toString() === type) {
        return { success: false, message: "Category '" + name + "' already exists for " + type + "." };
      }
    }

    const id = 'CAT-' + new Date().getTime();
    sheet.appendRow([id, name.trim(), type, false, user || '', new Date().toISOString()]);
    return { success: true, message: "Category '" + name + "' added successfully!" };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

function deleteCategory(rowIndex) {
  try {
    const sheet = SpreadsheetApp.openById(SS_ID).getSheetByName(CATEGORIES_SHEET_NAME);
    if (!sheet) return { success: false, message: "Categories sheet not found." };
    if (rowIndex <= 1) return { success: false, message: "Cannot delete header row." };

    const isDefault = sheet.getRange(rowIndex, CAT_IS_DEFAULT_COL + 1).getValue();
    if (isDefault === true || isDefault === 'true') {
      return { success: false, message: "Cannot delete default categories." };
    }

    sheet.deleteRow(rowIndex);
    return { success: true, message: "Category deleted successfully." };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * MONTHLY REPORTS
 ***************************************************/
function getMonthlyReport(month, year, reportType) {
  try {
    month = parseInt(month);
    year = parseInt(year);
    if (!month || !year) return { success: false, message: "Month and year are required." };

    const finSheet = SpreadsheetApp.openById(SS_ID).getSheetByName(FINANCE_SHEET_NAME);
    if (!finSheet || finSheet.getLastRow() <= 1) {
      return { success: true, data: { records: [], categoryTotals: {}, totalIncome: 0, totalExpenses: 0, net: 0, budget: null } };
    }

    const finData = finSheet.getDataRange().getValues();
    let records = [];
    let categoryTotals = {};
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 1; i < finData.length; i++) {
      const dateStr = (finData[i][FIN_DATE_COL] || '').toString();
      if (!dateStr) continue;
      const d = new Date(dateStr);
      if ((d.getMonth() + 1) !== month || d.getFullYear() !== year) continue;

      const type = (finData[i][FIN_TYPE_COL] || '').toString();
      const amount = parseFloat(finData[i][FIN_AMOUNT_COL]) || 0;
      const category = (finData[i][FIN_CATEGORY_COL] || 'Uncategorized').toString();

      // Filter by report type
      if (reportType === 'income' && type !== 'Income') continue;
      if (reportType === 'expense' && type !== 'Expense') continue;

      if (type === 'Income') totalIncome += amount;
      if (type === 'Expense') totalExpenses += amount;

      // Category totals
      const catKey = type + ':' + category;
      if (!categoryTotals[catKey]) categoryTotals[catKey] = { category: category, type: type, total: 0 };
      categoryTotals[catKey].total += amount;

      records.push({
        id: (finData[i][FIN_ID_COL] || '').toString(),
        date: dateStr,
        type: type,
        description: (finData[i][FIN_DESC_COL] || '').toString(),
        shopSource: (finData[i][FIN_SHOP_COL] || '').toString(),
        amount: amount,
        category: category,
        currency: (finData[i][FIN_CURRENCY_COL] || 'MVR').toString(),
        enteredBy: (finData[i][FIN_ENTERED_BY_COL] || '').toString()
      });
    }

    // Get budget for this month
    const budget = getBudgetForMonth(month, year);

    return {
      success: true,
      data: {
        records: records,
        categoryTotals: Object.values(categoryTotals),
        totalIncome: Math.round(totalIncome * 100) / 100,
        totalExpenses: Math.round(totalExpenses * 100) / 100,
        net: Math.round((totalIncome - totalExpenses) * 100) / 100,
        budget: budget
      }
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

/***************************************************
 * AI CHAT ASSISTANT (Gemini API)
 ***************************************************/
function askAIAssistant(question, username, role, chatHistory) {
  try {
    if (!question || !question.trim()) {
      return { success: false, message: "Please enter a question." };
    }

    const GEMINI_API_KEY = "AIzaSyCfOu4Vt-aZ3Q2SvA3wjQH3e1k_0JBHT1M";
    const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;

    // Build data context based on role
    let dataContext = "";

    if (role === "admin") {
      // Admin: access to ALL data
      const ss = SpreadsheetApp.openById(SS_ID);

      // Rooms
      try {
        const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
        const roomsData = roomsSheet.getDataRange().getValues();
        if (roomsData.length > 1) {
          dataContext += "=== ROOMS ===\n";
          const headers = roomsData[0];
          for (let i = 1; i < roomsData.length; i++) {
            let row = {};
            headers.forEach((h, idx) => { row[h] = roomsData[i][idx]; });
            dataContext += JSON.stringify(row) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Bookings
      try {
        const bookSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
        const bookData = bookSheet.getDataRange().getValues();
        if (bookData.length > 1) {
          dataContext += "=== BOOKINGS ===\n";
          const headers = bookData[0];
          for (let i = 1; i < bookData.length; i++) {
            let row = {};
            headers.forEach((h, idx) => { row[h] = bookData[i][idx]; });
            dataContext += JSON.stringify(row) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Finance
      try {
        const finSheet = ss.getSheetByName(FINANCE_SHEET_NAME);
        const finData = finSheet.getDataRange().getValues();
        if (finData.length > 1) {
          dataContext += "=== FINANCE ===\n";
          const headers = finData[0];
          for (let i = 1; i < finData.length; i++) {
            let row = {};
            headers.forEach((h, idx) => { row[h] = finData[i][idx]; });
            dataContext += JSON.stringify(row) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Invoices
      try {
        const invSheet = ss.getSheetByName(INVOICES_SHEET_NAME);
        const invData = invSheet.getDataRange().getValues();
        if (invData.length > 1) {
          dataContext += "=== INVOICES ===\n";
          const headers = invData[0];
          for (let i = 1; i < invData.length; i++) {
            let row = {};
            headers.forEach((h, idx) => { row[h] = invData[i][idx]; });
            dataContext += JSON.stringify(row) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Quotes
      try {
        const quoteSheet = ss.getSheetByName(QUOTES_SHEET_NAME);
        const quoteData = quoteSheet.getDataRange().getValues();
        if (quoteData.length > 1) {
          dataContext += "=== QUOTES ===\n";
          const headers = quoteData[0];
          for (let i = 1; i < quoteData.length; i++) {
            let row = {};
            headers.forEach((h, idx) => { row[h] = quoteData[i][idx]; });
            dataContext += JSON.stringify(row) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Users (NO passwords)
      try {
        const loginSheet = ss.getSheetByName(LOGIN_SHEET_NAME);
        const loginData = loginSheet.getDataRange().getValues();
        if (loginData.length > 1) {
          dataContext += "=== USERS ===\n";
          for (let i = 1; i < loginData.length; i++) {
            dataContext += JSON.stringify({
              username: loginData[i][LOGIN_USERNAME_COL],
              role: loginData[i][LOGIN_ROLE_COL]
            }) + "\n";
          }
          dataContext += "\n";
        }
      } catch (e) {}

      // Budgets
      try {
        const budgetSheet = ss.getSheetByName(BUDGETS_SHEET_NAME);
        if (budgetSheet) {
          const budgetData = budgetSheet.getDataRange().getValues();
          if (budgetData.length > 1) {
            dataContext += "=== BUDGETS ===\n";
            const headers = budgetData[0];
            for (let i = 1; i < budgetData.length; i++) {
              let row = {};
              headers.forEach((h, idx) => { row[h] = budgetData[i][idx]; });
              dataContext += JSON.stringify(row) + "\n";
            }
            dataContext += "\n";
          }
        }
      } catch (e) {}

      // Pre-calculated Revenue Analytics
      try {
        dataContext += "=== REVENUE ANALYTICS (Auto-Calculated) ===\n";

        // Monthly booking revenue (from Bookings sheet)
        const bookSheet2 = ss.getSheetByName(BOOKINGS_SHEET_NAME);
        const bookData2 = bookSheet2.getDataRange().getValues();
        let monthlyBookingRevenue = {};
        let totalBookingRevenue = 0;
        let totalBookings = 0;
        let checkedOutCount = 0;
        let activeBookings = 0;
        let totalCollected = 0;
        let totalOutstanding = 0;

        for (let i = 1; i < bookData2.length; i++) {
          let status = (bookData2[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
          let amount = parseFloat(bookData2[i][TOTAL_AMOUNT_COL]) || 0;
          let paid = parseFloat(bookData2[i][AMOUNT_PAID_COL]) || 0;
          let ciDate = bookData2[i][CHECK_IN_COL] ? new Date(bookData2[i][CHECK_IN_COL]) : null;
          totalBookings++;
          totalCollected += paid;
          totalOutstanding += (amount - paid);

          if (status === "checked out" || status === "completed") {
            totalBookingRevenue += amount;
            checkedOutCount++;
          } else if (status === "booked") {
            activeBookings++;
          }

          if (ciDate) {
            let mKey = (ciDate.getMonth() + 1).toString().padStart(2, '0') + '/' + ciDate.getFullYear();
            if (!monthlyBookingRevenue[mKey]) monthlyBookingRevenue[mKey] = { revenue: 0, bookings: 0, collected: 0 };
            monthlyBookingRevenue[mKey].revenue += amount;
            monthlyBookingRevenue[mKey].bookings++;
            monthlyBookingRevenue[mKey].collected += paid;
          }
        }

        dataContext += "Booking Summary: " + JSON.stringify({
          totalBookings: totalBookings,
          activeBookings: activeBookings,
          checkedOut: checkedOutCount,
          totalBookingRevenue: Math.round(totalBookingRevenue * 100) / 100,
          totalCollected: Math.round(totalCollected * 100) / 100,
          totalOutstanding: Math.round(totalOutstanding * 100) / 100
        }) + "\n";

        dataContext += "Monthly Booking Revenue:\n";
        Object.keys(monthlyBookingRevenue).sort().forEach(function(m) {
          dataContext += "  " + m + ": " + JSON.stringify(monthlyBookingRevenue[m]) + "\n";
        });

        // Monthly finance income/expenses (from Finance sheet)
        const finSheet3 = ss.getSheetByName(FINANCE_SHEET_NAME);
        if (finSheet3) {
          const finData3 = finSheet3.getDataRange().getValues();
          let monthlyFinance = {};
          let totalIncome = 0;
          let totalExpenses = 0;

          for (let i = 1; i < finData3.length; i++) {
            let fDate = finData3[i][FIN_DATE_COL] ? new Date(finData3[i][FIN_DATE_COL]) : null;
            let fType = (finData3[i][FIN_TYPE_COL] || "").toString();
            let fAmt = parseFloat(finData3[i][FIN_AMOUNT_COL]) || 0;
            let fCat = (finData3[i][FIN_CATEGORY_COL] || "").toString();

            if (fType === "Income") totalIncome += fAmt;
            else if (fType === "Expense") totalExpenses += fAmt;

            if (fDate) {
              let mKey = (fDate.getMonth() + 1).toString().padStart(2, '0') + '/' + fDate.getFullYear();
              if (!monthlyFinance[mKey]) monthlyFinance[mKey] = { income: 0, expenses: 0, categories: {} };
              if (fType === "Income") monthlyFinance[mKey].income += fAmt;
              else if (fType === "Expense") {
                monthlyFinance[mKey].expenses += fAmt;
                monthlyFinance[mKey].categories[fCat] = (monthlyFinance[mKey].categories[fCat] || 0) + fAmt;
              }
            }
          }

          dataContext += "Finance Summary: " + JSON.stringify({
            totalIncome: Math.round(totalIncome * 100) / 100,
            totalExpenses: Math.round(totalExpenses * 100) / 100,
            netProfit: Math.round((totalIncome - totalExpenses) * 100) / 100
          }) + "\n";

          dataContext += "Monthly Finance Breakdown:\n";
          Object.keys(monthlyFinance).sort().forEach(function(m) {
            let mf = monthlyFinance[m];
            dataContext += "  " + m + ": income=" + Math.round(mf.income * 100) / 100 + ", expenses=" + Math.round(mf.expenses * 100) / 100 + ", net=" + Math.round((mf.income - mf.expenses) * 100) / 100 + ", expenseCategories=" + JSON.stringify(mf.categories) + "\n";
          });
        }

        // Invoice revenue (from Invoices sheet)
        const invSheet2 = ss.getSheetByName(INVOICES_SHEET_NAME);
        if (invSheet2) {
          const invData2 = invSheet2.getDataRange().getValues();
          let totalInvoiced = 0;
          let paidInvoiceTotal = 0;
          let overdueTotal = 0;
          let invoiceCount = 0;

          for (let i = 1; i < invData2.length; i++) {
            let invStatus = (invData2[i][INV_STATUS_COL] || "").toString().toLowerCase();
            let invTotal = parseFloat(invData2[i][INV_TOTAL_COL]) || 0;
            invoiceCount++;
            totalInvoiced += invTotal;
            if (invStatus === "paid") paidInvoiceTotal += invTotal;
            else if (invStatus === "overdue") overdueTotal += invTotal;
          }

          dataContext += "Invoice Revenue Summary: " + JSON.stringify({
            totalInvoices: invoiceCount,
            totalInvoiced: Math.round(totalInvoiced * 100) / 100,
            paidTotal: Math.round(paidInvoiceTotal * 100) / 100,
            overdueTotal: Math.round(overdueTotal * 100) / 100,
            unpaidTotal: Math.round((totalInvoiced - paidInvoiceTotal) * 100) / 100
          }) + "\n";
        }

        dataContext += "\n";
      } catch (e) { Logger.log("Revenue analytics error: " + e); }

    } else {
      // Regular user: ONLY their own bookings
      try {
        const ss = SpreadsheetApp.openById(SS_ID);
        const bookSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
        const bookData = bookSheet.getDataRange().getValues();

        dataContext += "=== YOUR BOOKINGS ===\n";
        let found = false;
        for (let i = 1; i < bookData.length; i++) {
          const email = (bookData[i][EMAIL_COL] || "").toString().trim().toLowerCase();
          if (email === username.trim().toLowerCase()) {
            found = true;
            dataContext += JSON.stringify({
              ticketId: bookData[i][TICKET_ID_COL],
              roomNo: bookData[i][BOOKING_ROOM_NO_COL],
              guestName: bookData[i][GUEST_NAME_COL],
              phone: bookData[i][PHONE_COL],
              checkIn: bookData[i][CHECK_IN_COL] ? new Date(bookData[i][CHECK_IN_COL]).toISOString() : "",
              checkOut: bookData[i][CHECK_OUT_COL] ? new Date(bookData[i][CHECK_OUT_COL]).toISOString() : "",
              status: bookData[i][BOOKING_STATUS_COL],
              roomRate: bookData[i][ROOM_RATE_BOOK_COL],
              discount: bookData[i][DISCOUNT_COL],
              tax: bookData[i][TAX_COL],
              totalAmount: bookData[i][TOTAL_AMOUNT_COL],
              paymentStatus: bookData[i][PAYMENT_STATUS_COL],
              amountPaid: bookData[i][AMOUNT_PAID_COL]
            }) + "\n";
          }
        }
        if (!found) {
          dataContext += "No bookings found for this user.\n";
        }
        dataContext += "\n";
      } catch (e) {}
    }

    // Build Gemini API request
    const systemInstruction = role === "admin"
      ? "You are an AI assistant for Hill View Eco Retreat Management System. You have access to the hotel's database including rooms, bookings, finance, invoices, quotes, users, budgets, AND pre-calculated REVENUE ANALYTICS. The REVENUE ANALYTICS section contains auto-calculated monthly revenue breakdowns from bookings, finance income/expenses by month with expense categories, and invoice totals. Use these pre-calculated figures when answering revenue, profit, income, expense, or financial performance questions — do NOT try to recalculate from raw data. Answer questions ONLY based on the provided data. When the answer involves multiple records or rows of data, format it as an HTML table with inline styles (use style='border-collapse:collapse;width:100%' on the table, style='background:#001f3f;color:white;padding:10px 14px;text-align:left;font-size:13px' on th elements, style='padding:10px 14px;border-bottom:1px solid #eee;font-size:13px' on td elements, and style='background:#f8fafc' on every even tr in tbody). Keep responses concise and helpful. If the data doesn't contain the answer, say so politely. Do NOT reveal any passwords. Format currency values with 2 decimal places."
      : "You are an AI assistant for a hotel guest. You can ONLY answer questions about this guest's own bookings and checkout information. You do NOT have access to any other data like finance, other guests, room management, invoices, settings, or users. When the answer involves booking data, format it as an HTML table with inline styles (use style='border-collapse:collapse;width:100%' on the table, style='background:#001f3f;color:white;padding:10px 14px;text-align:left;font-size:13px' on th elements, style='padding:10px 14px;border-bottom:1px solid #eee;font-size:13px' on td elements, and style='background:#f8fafc' on every even tr in tbody). Keep responses concise and helpful. If the guest asks about anything other than their bookings, politely explain you can only help with their booking information.";

    // Build multi-turn contents from chat history
    const contents = [];
    const history = Array.isArray(chatHistory) ? chatHistory : [];

    // First message always includes data context
    if (history.length > 0) {
      // Add data context as the first user message, with model acknowledgment
      contents.push({ role: "user", parts: [{ text: "Here is the current hotel data for reference:\n" + dataContext }] });
      contents.push({ role: "model", parts: [{ text: "Got it. I have the hotel data loaded and ready to help. What would you like to know?" }] });

      // Add conversation history
      for (let i = 0; i < history.length; i++) {
        const h = history[i];
        if (h.role === 'user') {
          contents.push({ role: "user", parts: [{ text: h.text }] });
        } else if (h.role === 'ai') {
          contents.push({ role: "model", parts: [{ text: h.text }] });
        }
      }
    }

    // Add the new question
    if (history.length === 0) {
      // First message — include data context with the question
      contents.push({ role: "user", parts: [{ text: "DATA CONTEXT:\n" + dataContext + "\n\nUSER QUESTION: " + question }] });
    } else {
      contents.push({ role: "user", parts: [{ text: question }] });
    }

    const payload = {
      system_instruction: {
        parts: [{ text: systemInstruction }]
      },
      contents: contents,
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 2048
      }
    };

    const options = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const response = UrlFetchApp.fetch(GEMINI_URL, options);
    const json = JSON.parse(response.getContentText());

    if (json.error) {
      return { success: false, message: json.error.message || "API error occurred." };
    }

    const reply = json.candidates && json.candidates[0] && json.candidates[0].content && json.candidates[0].content.parts && json.candidates[0].content.parts[0]
      ? json.candidates[0].content.parts[0].text
      : "I could not generate a response. Please try again.";

    return { success: true, reply: reply };
  } catch (err) {
    Logger.log("AI Assistant error: " + err.toString());
    return { success: false, message: "An error occurred: " + err.message };
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
      const currentHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1).getValues()[0];
      const newHeaders = [...config.headers];

      // If the sheet is empty, just append the headers
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(newHeaders);
      } else {
        // Find missing headers and append them to the right
        let colsToAdd = [];
        for (let i = 0; i < newHeaders.length; i++) {
          if (currentHeaders.indexOf(newHeaders[i]) === -1) {
            colsToAdd.push(newHeaders[i]);
          }
        }
        if (colsToAdd.length > 0) {
          const startCol = currentHeaders.length + 1;
          // Clean up empty strings from currentHeaders length if they exist
          let actualStartCol = 1;
          for(let k=currentHeaders.length-1; k>=0; k--) {
            if(currentHeaders[k] !== "") {
              actualStartCol = k + 2;
              break;
            }
          }
          sheet.getRange(1, actualStartCol, 1, colsToAdd.length).setValues([colsToAdd]);
        }
      }
      sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight("bold");
    }
  }
}

function initDataStructure() {
  const config = [
    { sheetName: LOGIN_SHEET_NAME, headers: ["Username", "Password", "Role", "OTP", "OTPExpiry"] },
    { sheetName: ROOMS_SHEET_NAME, headers: ["Room ID", "Room No", "Room Type", "Room Rate", "Room Status"] },
    { sheetName: BOOKINGS_SHEET_NAME, headers: ["Timestamp", "Ticket ID", "Room No", "Guest Name", "Phone", "Email", "Check-In", "Check-In Time", "Check-Out", "Check-Out Time", "Status", "Advance Paid", "Food Plan"] },
    { sheetName: QUOTES_SHEET_NAME, headers: ["Quote ID", "Date", "Customer Name", "Customer Email", "Customer Phone", "Valid Until", "Items JSON", "Subtotal", "Discount Type", "Discount Value", "Discount Amount", "Tax Type", "Tax Value", "Tax Amount", "Total", "Status", "Notes", "Converted to Invoice"] },
    { sheetName: FINANCE_SHEET_NAME, headers: ["Record ID", "Date", "Type", "Category", "Amount", "Description", "Reference ID", "Payment Method", "Added By"] },
    { sheetName: INVOICES_SHEET_NAME, headers: ["Invoice ID", "Date", "Due Date", "Customer Name", "Customer Email", "Customer Phone", "Customer Address", "Items JSON", "Subtotal", "Discount Type", "Discount Value", "Discount Amount", "Tax Type", "Tax Value", "Tax Amount", "Total", "Amount Paid", "Status", "Notes", "Linked CheckIn / Quote"] },
    { sheetName: SETTINGS_SHEET_NAME, headers: ["Setting Key", "Setting Value"] },
    { sheetName: BUDGETS_SHEET_NAME, headers: ["Month", "Year", "Amount", "Set By", "Set Date"] },
    { sheetName: CATEGORIES_SHEET_NAME, headers: ["Category ID", "Type", "Name", "Is Default"] },
    { sheetName: CUSTOMERS_SHEET_NAME, headers: ["Customer ID", "Name", "Phone", "Email", "Address", "City", "State", "Country", "Zip Code", "DOB", "Anniversary", "Gender", "Marital Status", "Identity Proof", "Linked Username", "Notes", "Created Date"] },
    { sheetName: CHECKIN_SHEET_NAME, headers: ["CheckIn ID", "Linked Ticket ID", "Guest Name", "Company Name", "GST Number", "Identity Proof", "Mobile", "Email", "Address", "Purpose of Visit", "Check-In Date", "Check-In Time", "Check-Out Date", "Check-Out Time", "Room Numbers", "Pax", "Advance Paid", "Extra Person", "Food Plan", "GST Type", "Fix Room Rent", "Fix Room Rent Amount", "Bill To", "Discount Percent", "Status", "Actual Check-Out Date", "Total Room Rent", "Total Restaurant", "Total Services", "Net Payable", "Total Paid", "Balance", "Payment Mode", "Checkout Remarks"] },
    { sheetName: RESTAURANT_SHEET_NAME, headers: ["Order ID", "CheckIn ID", "Room No", "Date", "Category", "Description", "Amount", "Status", "Billed CheckIn ID", "Added By"] },
    { sheetName: STAY_SEGMENTS_SHEET_NAME, headers: ["Segment ID", "CheckIn ID", "Room Numbers", "Rate", "Pax", "Start Date", "End Date", "Created By", "Timestamp"] }
  ];
  manageSheetsDataStructure(config);
}

function setupDemoData() {
  const ss = SpreadsheetApp.openById(SS_ID);
  const sheetNames = [LOGIN_SHEET_NAME, ROOMS_SHEET_NAME, BOOKINGS_SHEET_NAME, QUOTES_SHEET_NAME, FINANCE_SHEET_NAME, INVOICES_SHEET_NAME, SETTINGS_SHEET_NAME, BUDGETS_SHEET_NAME, CATEGORIES_SHEET_NAME, CUSTOMERS_SHEET_NAME, CHECKIN_SHEET_NAME, RESTAURANT_SHEET_NAME, STAY_SEGMENTS_SHEET_NAME];

  // --- 1. Delete all existing sheets ---
  let tempSheet = ss.insertSheet("_TEMP_SETUP_");
  const allSheets = ss.getSheets();
  for (let i = 0; i < allSheets.length; i++) {
    if (allSheets[i].getName() !== "_TEMP_SETUP_") {
      ss.deleteSheet(allSheets[i]);
    }
  }

  // --- 2. Create all sheets with headers via new manager function ---
  initDataStructure();

  const loginSheet = ss.getSheetByName(LOGIN_SHEET_NAME);
  const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
  const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);
  const quotesSheet = ss.getSheetByName(QUOTES_SHEET_NAME);
  const financeSheet = ss.getSheetByName(FINANCE_SHEET_NAME);
  const invoicesSheet = ss.getSheetByName(INVOICES_SHEET_NAME);
  const settingsSheet = ss.getSheetByName(SETTINGS_SHEET_NAME);
  const budgetsSheet = ss.getSheetByName(BUDGETS_SHEET_NAME);
  const categoriesSheet = ss.getSheetByName(CATEGORIES_SHEET_NAME);
  const customersSheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
  const checkinSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
  const restaurantSheet = ss.getSheetByName(RESTAURANT_SHEET_NAME);
  const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);

  // SETTINGS (1 data row after headers)
  settingsSheet.appendRow(["MRI Demo Hotel", "Demo Location, Maldives", "+960-0000000", "info@demo.com", "", "", "", "MVR", 5, 6, 5, 6, "", "", 4, 1]);

  // Delete temp sheet
  ss.deleteSheet(tempSheet);

  // --- 3. Populate demo data ---

  // ===== LOGIN (3 users) =====
  loginSheet.appendRow(["admin@demo.com", "admin123", "admin", "", ""]);
  loginSheet.appendRow(["user1@demo.com", "user123", "user", "", ""]);
  loginSheet.appendRow(["user2@demo.com", "user123", "user", "", ""]);
  loginSheet.appendRow(["client1@demo.com", "client123", "user", "", ""]);
  loginSheet.appendRow(["client2@demo.com", "client123", "user", "", ""]);

  // ===== ROOMS (10 rooms) =====
  const roomsData = [
    ["101", "Standard", 800,  "Available"],
    ["102", "Standard", 800,  "Booked"],
    ["103", "Deluxe",   1200, "Available"],
    ["104", "Deluxe",   1200, "Booked"],
    ["105", "Suite",    2500, "Available"],
    ["106", "Suite",    2500, "Booked"],
    ["107", "Family",   1800, "Booked"],
    ["108", "Single",   500,  "Reserved"],
    ["109", "Double",   1000, "Maintenance"],
    ["110", "Family",   1800, "Booked"]
  ];
  roomsSheet.getRange(2, 1, roomsData.length, 4).setValues(roomsData);

  // ===== BOOKINGS (9 bookings - varied dates/statuses for calendar testing, 25 columns) =====
  const bookingsData = [
    ["TKT-20260201-001", "104", "Demo Guest 1", "+960-1000001", "user1@demo.com",   "Demo City A", "Single",  "Single",   "",                  "2026-02-01T14:00:00Z", "2026-02-04T12:00:00Z", "Checked In",  1200, 0,   60,  "Cash",        3660,  "Unpaid",  0,    "14:00", "12:00", "Including Breakfast", 0, 1, "CHK-0001"],
    ["TKT-20260203-002", "107", "Demo Guest 2", "+960-1000002", "user2@demo.com",   "Demo City B", "Married", "Family",   "Spouse + 1 child",  "2026-02-03T14:00:00Z", "2026-02-06T12:00:00Z", "Booked",      1800, 100, 85,  "Card",        5385,  "Partial", 3000, "14:00", "12:00", "Including Breakfast and Dinner", 3000, 1, ""],
    ["TKT-20260110-003", "101", "Demo Guest 3", "+960-1000003", "guest3@demo.com",  "Demo City C", "Single",  "Single",   "",                  "2026-01-10T14:00:00Z", "2026-01-12T12:00:00Z", "Checked Out", 800,  0,   32,  "Cash",        1632,  "Paid",    1632, "14:00", "12:00", "None", 0, 1, ""],
    ["TKT-20260115-004", "103", "Demo Guest 4", "+960-1000004", "guest4@demo.com",  "Demo City A", "Married", "Couple",   "Spouse",            "2026-01-15T14:00:00Z", "2026-01-18T12:00:00Z", "Checked Out", 1200, 50,  71,  "Bank Transfer", 3621,  "Paid",    3621, "14:00", "12:00", "Including Breakfast", 1000, 1, ""],
    ["TKT-20260120-005", "105", "Demo Guest 5", "+960-1000005", "guest5@demo.com",  "Demo City D", "Single",  "Single",   "",                  "2026-01-20T14:00:00Z", "2026-01-23T12:00:00Z", "Checked Out", 2500, 200, 145, "Cash",        7445,  "Paid",    7445, "14:00", "12:00", "None", 2000, 1, ""],
    ["TKT-20260210-006", "108", "Demo Guest 6", "+960-1000006", "user1@demo.com",   "Demo City B", "Single",  "Single",   "",                  "2026-02-10T14:00:00Z", "2026-02-13T12:00:00Z", "Booked",      500,  0,   25,  "Card",        1525,  "Unpaid",  0,    "14:00", "12:00", "None", 0, 1, ""],
    ["TKT-20260215-007", "106", "Demo Guest 7", "+960-1000007", "user2@demo.com",   "Demo City E", "Married", "Couple",   "Spouse",            "2026-02-15T14:00:00Z", "2026-02-18T12:00:00Z", "Booked",      2500, 0,   125, "Card",        7625,  "Paid",    7625, "14:00", "12:00", "Including Breakfast", 5000, 1, ""],
    ["TKT-20260220-008", "110", "Demo Guest 8", "+960-1000008", "guest8@demo.com",  "Demo City A", "Single",  "Family",   "2 children",        "2026-02-20T14:00:00Z", "2026-02-25T12:00:00Z", "Checked In",  1800, 200, 80,  "Bank Transfer", 8880,  "Unpaid",  0,    "14:00", "12:00", "Including Breakfast and Dinner", 0, 1, "CHK-0002"],
    ["TKT-20260225-009", "102", "Demo Guest 9", "+960-1000009", "guest9@demo.com",  "Demo City C", "Single",  "Double",   "",                  "2026-02-25T14:00:00Z", "2026-02-28T12:00:00Z", "Checked In",  800,  0,   48,  "Cash",        2448,  "Unpaid",  0,    "14:00", "12:00", "None", 0, 1, "CHK-0003"]
  ];
  bookingsSheet.getRange(2, 1, bookingsData.length, 25).setValues(bookingsData);

  // ===== QUOTES (4 quotes, 26 columns) =====
  const quoteItems1 = JSON.stringify([
    { type: "room", description: "Deluxe Room", roomType: "Deluxe", quantity: 1, nights: 3, rate: 1200, amount: 3600 },
    { type: "service", description: "Airport Transfer", amount: 150 }
  ]);
  const quoteItems2 = JSON.stringify([
    { type: "room", description: "Suite Room", roomType: "Suite", quantity: 1, nights: 5, rate: 2500, amount: 12500 },
    { type: "activity", description: "Sunset Cruise", pax: 2, rate: 200, amount: 400 },
    { type: "service", description: "Airport Transfer", amount: 150 }
  ]);
  const quoteItems3 = JSON.stringify([
    { type: "room", description: "Standard Room", roomType: "Standard", quantity: 2, nights: 2, rate: 800, amount: 3200 }
  ]);
  const quoteItems4 = JSON.stringify([
    { type: "room", description: "Family Room", roomType: "Family", quantity: 1, nights: 4, rate: 1800, amount: 7200 },
    { type: "activity", description: "Snorkeling Trip", pax: 4, rate: 150, amount: 600 },
    { type: "service", description: "Spa Package", amount: 350 }
  ]);

  const quotesData = [
    ["QTN-0001", "Demo Client 1", "+960-2000001", "client1@demo.com", "2026-02-01T10:00:00Z", "2026-02-15T23:59:59Z", "Sent",     quoteItems1, 3750, 0, 0, 4350, "Includes breakfast", "admin@demo.com", "MVR", true, 16, 600, false, 6, 0, 0, 0, "", "", ""],
    ["QTN-0002", "Demo Client 2", "+960-2000002", "client2@demo.com", "2026-02-05T11:00:00Z", "2026-02-20T23:59:59Z", "Draft",    quoteItems2, 13050, 0, 500, 14558, "VIP demo guest", "admin@demo.com", "USD", true, 16, 2008, false, 6, 0, 0, 0, "", "", ""],
    ["QTN-0003", "Demo Client 3", "+960-2000003", "client3@demo.com", "2026-02-08T09:00:00Z", "2026-02-22T23:59:59Z", "Accepted", quoteItems3, 3200, 0, 0, 3736, "", "admin@demo.com", "MVR", true, 16, 512, true, 6, 2, 2, 24, "", "", ""],
    ["QTN-0004", "Demo Client 4", "+960-2000004", "client4@demo.com", "2026-02-10T15:00:00Z", "2026-01-25T23:59:59Z", "Expired",  quoteItems4, 8150, 0, 100, 9434, "Demo family vacation", "admin@demo.com", "MVR", true, 16, 1288, true, 6, 4, 4, 96, "", "", ""]
  ];
  quotesSheet.getRange(2, 1, quotesData.length, 26).setValues(quotesData);

  // Extra quote for Feb 21 reservation testing
  const quoteItems5 = JSON.stringify([
    { type: "room", description: "Single Room", roomType: "Single", quantity: 1, nights: 3, rate: 500, amount: 1500, reservedRoomNo: "108" },
    { type: "service", description: "Airport Transfer", amount: 150 }
  ]);
  quotesSheet.appendRow(["QTN-0005", "Demo Client 1", "+960-2000001", "client1@demo.com", "2026-02-21T10:00:00Z", "2026-03-07T23:59:59Z", "Accepted", quoteItems5, 1650, 0, 0, 1914, "Room reserve test - Feb 21", "admin@demo.com", "MVR", true, 16, 264, false, 6, 0, 0, 0, "", "", ""]);

  // ===== INVOICES (3 invoices) =====
  const invItems1 = JSON.stringify([
    { type: "room", roomType: "Deluxe", quantity: 2, nights: 3, rate: 1200, amount: 7200 },
    { type: "activity", description: "Snorkeling Trip", pax: 4, rate: 150, amount: 600 },
    { type: "service", description: "Airport Transfer", amount: 150 }
  ]);
  const invItems2 = JSON.stringify([
    { type: "room", roomType: "Suite", quantity: 1, nights: 5, rate: 2500, amount: 12500 },
    { type: "service", description: "Spa Package", amount: 500 }
  ]);
  const invItems3 = JSON.stringify([
    { type: "room", roomType: "Standard", quantity: 1, nights: 2, rate: 800, amount: 1600 },
    { type: "service", description: "Laundry", amount: 50 }
  ]);

  const invItems4 = JSON.stringify([
    { type: "room", roomType: "Family", quantity: 1, nights: 4, rate: 1800, amount: 7200 },
    { type: "service", description: "Airport Transfer", amount: 150 }
  ]);

  const invoicesData = [
    ["INV-0001", "Demo Guest 1", "+960-1000001", "user1@demo.com", "TIN-00001", "MVR", "2026-02-01T10:00:00Z", "2026-03-01T23:59:59Z", "Paid", invItems1, 7950, true, 16, 1272, true, 6, 4, 3, 72, 0, 9294, "Deluxe demo package", "", "", "admin@demo.com", "2026-02-01T10:00:00Z"],
    ["INV-0002", "Demo Guest 2", "+960-1000002", "user2@demo.com", "", "USD", "2026-02-05T11:00:00Z", "2026-02-15T23:59:59Z", "Sent", invItems2, 13000, true, 16, 2000, false, 6, 0, 0, 0, 500, 14500, "Demo suite package", "", "", "admin@demo.com", "2026-02-05T11:00:00Z"],
    ["INV-0003", "Demo Guest 3", "+960-1000003", "guest3@demo.com", "TIN-00003", "MVR", "2026-02-10T09:00:00Z", "2026-03-10T23:59:59Z", "Draft", invItems3, 1650, true, 16, 264, true, 6, 1, 2, 12, 0, 1926, "Demo standard booking", "", "", "admin@demo.com", "2026-02-10T09:00:00Z"],
    ["INV-0004", "Demo Guest 4", "+960-1000004", "guest4@demo.com", "", "MVR", "2026-01-20T10:00:00Z", "2026-02-01T23:59:59Z", "Sent", invItems4, 7350, true, 16, 1176, false, 6, 0, 0, 0, 0, 8526, "Demo overdue test", "", "", "admin@demo.com", "2026-01-20T10:00:00Z"]
  ];
  invoicesSheet.getRange(2, 1, invoicesData.length, 26).setValues(invoicesData);

  // ===== FINANCE (13 records, 12 columns — includes linked invoice payment) =====
  const financeData = [
    ["FIN-20260101-001", "2026-01-12T10:00:00Z", "Income",  "Room Checkout - Demo Guest 3",  "Room 101",            1632,  1632,   "admin@demo.com", "2026-01-12T12:05:00Z", "Room Checkout",    "MVR", ""],
    ["FIN-20260102-002", "2026-01-15T09:00:00Z", "Expense", "Electricity Bill - January",    "Demo Utility Co",     2800,  -1168,  "admin@demo.com", "2026-01-15T09:30:00Z", "Utilities",        "MVR", ""],
    ["FIN-20260103-003", "2026-01-18T11:00:00Z", "Income",  "Room Checkout - Demo Guest 4",  "Room 103",            3621,  2453,   "admin@demo.com", "2026-01-18T12:00:00Z", "Room Checkout",    "MVR", ""],
    ["FIN-20260104-004", "2026-01-20T14:00:00Z", "Expense", "Kitchen Supplies Restock",      "Demo Supplier A",     1500,  953,    "admin@demo.com", "2026-01-20T14:30:00Z", "Kitchen Supplies", "MVR", ""],
    ["FIN-20260105-005", "2026-01-23T10:00:00Z", "Income",  "Room Checkout - Demo Guest 5",  "Room 105",            7445,  8398,   "admin@demo.com", "2026-01-23T10:15:00Z", "Room Checkout",    "MVR", ""],
    ["FIN-20260106-006", "2026-01-25T08:00:00Z", "Expense", "Staff Salaries - January",      "Demo Payroll",        5000,  3398,   "admin@demo.com", "2026-01-25T08:00:00Z", "Staff Salaries",   "MVR", ""],
    ["FIN-20260107-007", "2026-01-28T16:00:00Z", "Income",  "Restaurant Sales - Week 4",     "Demo Restaurant",     3200,  6598,   "admin@demo.com", "2026-01-28T16:00:00Z", "Restaurant",       "MVR", ""],
    ["FIN-20260108-008", "2026-02-01T09:00:00Z", "Expense", "Water Bill - January",          "Demo Utility Co",     950,   5648,   "admin@demo.com", "2026-02-01T09:00:00Z", "Utilities",        "MVR", ""],
    ["FIN-20260113-013", "2026-02-01T10:00:00Z", "Income",  "Payment for INV-0001",          "Demo Invoice Payment", 9294, 14942,  "admin@demo.com", "2026-02-01T10:05:00Z", "Invoice Payment",  "MVR", "INV-0001"],
    ["FIN-20260109-009", "2026-02-03T11:00:00Z", "Income",  "Event Booking - Demo Conference","Demo Events Hall",    4500,  19442,  "admin@demo.com", "2026-02-03T11:00:00Z", "Events",           "MVR", ""],
    ["FIN-20260110-010", "2026-02-05T14:00:00Z", "Expense", "Laundry Service Supplies",      "Demo Supplier B",     800,   18642,  "admin@demo.com", "2026-02-05T14:30:00Z", "Laundry",          "MVR", ""],
    ["FIN-20260111-011", "2026-02-08T10:00:00Z", "Income",  "Spa Services - Week 1 Feb",     "Demo Spa",            2100,  20742,  "admin@demo.com", "2026-02-08T10:00:00Z", "Spa",              "MVR", ""],
    ["FIN-20260112-012", "2026-02-10T13:00:00Z", "Expense", "Maintenance - AC Repair",       "Demo Maintenance Co", 1350,  19392,  "admin@demo.com", "2026-02-10T13:00:00Z", "Maintenance",      "MVR", ""]
  ];
  financeSheet.getRange(2, 1, financeData.length, 12).setValues(financeData);

  // ===== CATEGORIES (default categories) =====
  const now = new Date().toISOString();
  const defaultCategories = [
    ["CAT-EXP-001", "Utilities",        "Expense", true, "system", now],
    ["CAT-EXP-002", "Kitchen Supplies",  "Expense", true, "system", now],
    ["CAT-EXP-003", "Staff Salaries",    "Expense", true, "system", now],
    ["CAT-EXP-004", "Maintenance",       "Expense", true, "system", now],
    ["CAT-EXP-005", "Laundry",           "Expense", true, "system", now],
    ["CAT-EXP-006", "Marketing",         "Expense", true, "system", now],
    ["CAT-EXP-007", "Miscellaneous",     "Expense", true, "system", now],
    ["CAT-INC-001", "Room Checkout",     "Income",  true, "system", now],
    ["CAT-INC-002", "Restaurant",        "Income",  true, "system", now],
    ["CAT-INC-003", "Events",            "Income",  true, "system", now],
    ["CAT-INC-004", "Spa",               "Income",  true, "system", now],
    ["CAT-INC-005", "Excursions",        "Income",  true, "system", now],
    ["CAT-INC-006", "Fishing Trips",     "Income",  true, "system", now],
    ["CAT-INC-007", "Other Income",      "Income",  true, "system", now],
    ["CAT-INC-008", "Invoice Payment",   "Income",  true, "system", now]
  ];
  categoriesSheet.getRange(2, 1, defaultCategories.length, 6).setValues(defaultCategories);

  // ===== BUDGETS (current month) =====
  const nowDate = new Date();
  budgetsSheet.appendRow([
    "BDG-" + nowDate.getFullYear() + "-" + String(nowDate.getMonth() + 1).padStart(2, '0'),
    nowDate.getMonth() + 1,
    nowDate.getFullYear(),
    50000,
    3100,
    46900,
    "admin@demo.com",
    now,
    now
  ]);

  // ===== CUSTOMERS (6 demo customers) =====
  const customersData = [
    ["CUST-000001", "Demo Guest 1",  "+960-1000001", "user1@demo.com",    "Demo City A", "Single",  "VIP guest",        now, "user1@demo.com"],
    ["CUST-000002", "Demo Guest 2",  "+960-1000002", "user2@demo.com",    "Demo City B", "Married", "Family traveller", now, "user2@demo.com"],
    ["CUST-000003", "Demo Guest 3",  "+960-1000003", "guest3@demo.com",   "Demo City C", "Single",  "Regular customer", now, "guest3@demo.com"],
    ["CUST-000004", "Demo Client 1", "+960-2000001", "client1@demo.com",  "Demo City D", "Married", "Corporate client", now, "client1@demo.com"],
    ["CUST-000005", "Demo Client 2", "+960-2000002", "client2@demo.com",  "Demo City E", "Single",  "Travel agency",    now, "client2@demo.com"],
    ["CUST-000006", "Walk-in Guest", "+960-3000001", "",                  "Demo City F", "Single",  "Walk-in",          now, ""]
  ];
  customersSheet.getRange(2, 1, customersData.length, 9).setValues(customersData);

  // ===== CHECKIN (3 active check-ins linked to demo bookings) =====
  const demoNow = new Date().toISOString();
  const checkinData = [
    ["CHK-0001", "TKT-20260201-001", "Demo Guest 1", "", "", "", "+960-1000001", "user1@demo.com",  "Demo City A", "Leisure",  "2026-02-01T14:00:00Z", "14:00", "2026-02-04T12:00:00Z", "12:00", "104", "Deluxe",   1, 2, 0, 0, "Including Breakfast",           "Excluding", "No", 0, "Individual", 0, "Active", demoNow],
    ["CHK-0002", "TKT-20260220-008", "Demo Guest 8", "", "", "", "+960-1000008", "guest8@demo.com", "Demo City A", "Leisure",  "2026-02-20T14:00:00Z", "14:00", "2026-02-25T12:00:00Z", "12:00", "110", "Family",   1, 4, 0, 2, "Including Breakfast and Dinner", "Excluding", "No", 0, "Individual", 0, "Active", demoNow],
    ["CHK-0003", "TKT-20260225-009", "Demo Guest 9", "", "", "", "+960-1000009", "guest9@demo.com", "Demo City C", "Business", "2026-02-25T14:00:00Z", "14:00", "2026-02-28T12:00:00Z", "12:00", "102", "Standard", 1, 1, 0, 0, "None",                          "Excluding", "No", 0, "Individual", 0, "Active", demoNow]
  ];
  checkinSheet.getRange(2, 1, checkinData.length, 28).setValues(checkinData);

  // ===== RESTAURANT (4 demo orders for active check-in rooms) =====
  const restaurantData = [
    ["ORD-0001", "104", "CHK-0001", "2026-02-01", "FoodBeverage", "Lunch for 2",         250, "Active", demoNow],
    ["ORD-0002", "104", "CHK-0001", "2026-02-02", "Laundry",      "2 shirts, 1 trouser", 150, "Active", demoNow],
    ["ORD-0003", "110", "CHK-0002", "2026-02-21", "FoodBeverage", "Dinner for 4",        600, "Active", demoNow],
    ["ORD-0004", "110", "CHK-0002", "2026-02-22", "ExtraBed",     "Extra mattress",      500, "Active", demoNow]
  ];
  restaurantSheet.getRange(2, 1, restaurantData.length, 9).setValues(restaurantData);

  // --- 4. Format header rows ---
  [loginSheet, roomsSheet, bookingsSheet, quotesSheet, financeSheet, invoicesSheet, settingsSheet, budgetsSheet, categoriesSheet, customersSheet, checkinSheet, restaurantSheet, staySegmentsSheet].forEach(function(sheet) {
    const lastCol = sheet.getLastColumn();
    if (lastCol > 0) {
      const headerRange = sheet.getRange(1, 1, 1, lastCol);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#001f3f");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
  });

  SpreadsheetApp.getUi().alert("Demo data setup complete!\n\nLogin credentials:\n• admin@demo.com / admin123 (Admin)\n• user1@demo.com / user123 (User)\n• user2@demo.com / user123 (User)\n• client1@demo.com / client123 (Client)\n• client2@demo.com / client123 (Client)\n\nSheets created: " + sheetNames.join(", ") + "\n\nNew sheets added: CheckIn, Restaurant");
}

function updateStaySegment(checkInId, newRoomNos, newRate, newPax) {
  try {
    const ss = SpreadsheetApp.openById(SS_ID);
    const staySegmentsSheet = ss.getSheetByName(STAY_SEGMENTS_SHEET_NAME);
    const checkInSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);

    if (!staySegmentsSheet || !checkInSheet || !roomsSheet) {
      return { success: false, message: "Required sheets not found." };
    }

    const now = new Date().toISOString();
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
      parseInt(newPax) || 1,
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
        checkInSheet.getRange(ciRowIndex, CI_PAX_COL + 1).setValue(newPax);
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
