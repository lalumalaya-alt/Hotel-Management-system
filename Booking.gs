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

    // Calculate room rent
    let roomNosArr = roomNumbers.split(',').map(r => r.trim()).filter(r => r);
    let dailyRoomRate = 0;
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
    let totalRoomRent = dailyRoomRate * nights;

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

      let dayRoom = dailyRoomRate;
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
        linkedCheckInId: (row[LINKED_CHECKIN_COL] || "").toString(),
        gstType: (row[BOOKING_GST_TYPE_COL] || "Excluding").toString(),
        fixRoomRent: (row[BOOKING_FIX_RENT_COL] !== undefined && row[BOOKING_FIX_RENT_COL] !== "") ? parseFloat(row[BOOKING_FIX_RENT_COL]) : '',
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


function getRoomAvailability(checkInStr, checkOutStr, excludeTicketId) {
  try {
    const ciReq = new Date(checkInStr);
    const coReq = new Date(checkOutStr);
    if (isNaN(ciReq.getTime()) || isNaN(coReq.getTime())) return [];

    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);

    if (!roomsSheet || !bookingsSheet) return [];

    const roomsData = roomsSheet.getDataRange().getValues();
    const bookingsData = bookingsSheet.getDataRange().getValues();

    let allRooms = [];
    for (let i = 1; i < roomsData.length; i++) {
      allRooms.push({
        roomNo: (roomsData[i][ROOM_NO_COL] || "").toString().trim(),
        roomType: (roomsData[i][ROOM_TYPE_COL] || "").toString(),
        roomRate: parseFloat(roomsData[i][ROOM_RATE_COL]) || 0,
        baseStatus: (roomsData[i][ROOM_STATUS_COL] || "").toString().toLowerCase(),
        isAvailable: true // Assume available until proven otherwise
      });
    }

    for (let i = 1; i < bookingsData.length; i++) {
      const bStatus = (bookingsData[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
      const bTicket = (bookingsData[i][TICKET_ID_COL] || "").toString();

      // Skip if this is the booking we are currently editing
      if (excludeTicketId && bTicket === excludeTicketId) continue;

      if (bStatus === 'booked' || bStatus === 'checked in') {
        const bCi = new Date(bookingsData[i][CHECK_IN_COL]);
        const bCo = new Date(bookingsData[i][CHECK_OUT_COL]);

        // Check for overlap: requested CheckIn < booked CheckOut AND requested CheckOut > booked CheckIn
        if (ciReq < bCo && coReq > bCi) {
          const bRoomsStr = (bookingsData[i][BOOKING_ROOM_NO_COL] || "").toString().trim();

          if (bRoomsStr.includes('(')) {
            // It is a type-based advance booking (e.g., "Cottage (2), Family (1)")
            // We must deduct this quantity from available physical rooms to protect the inventory.
            const parts = bRoomsStr.split(',');
            parts.forEach(p => {
              const match = p.match(/(.+?)\s*\((\d+)\)/);
              if (match) {
                const tName = match[1].trim();
                let qty = parseInt(match[2]);

                // Find 'qty' number of available physical rooms of this type and mark them false
                for (let r = 0; r < allRooms.length && qty > 0; r++) {
                  if (allRooms[r].roomType === tName && allRooms[r].isAvailable) {
                    allRooms[r].isAvailable = false;
                    qty--;
                  }
                }
              }
            });
          } else {
            // It's a legacy physical room booking or a Checked In physical room
            const bRooms = bRoomsStr.split(',').map(r => r.trim());
            bRooms.forEach(br => {
              const rm = allRooms.find(r => r.roomNo === br);
              if (rm) rm.isAvailable = false;
            });
          }
        }
      }
    }

    // Also check active Check-Ins directly (for Walk-ins which don't have a Booking record)
    const checkInSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (checkInSheet && checkInSheet.getLastRow() > 1) {
      const ciData = checkInSheet.getDataRange().getValues();
      for (let i = 1; i < ciData.length; i++) {
        const status = (ciData[i][CI_STATUS_COL] || "").toString().toLowerCase();
        if (status === 'active') {
          const cCi = new Date(ciData[i][CI_CHECKIN_DATE_COL]);
          const cCo = new Date(ciData[i][CI_CHECKOUT_DATE_COL]);

          if (ciReq < cCo && coReq > cCi) {
            const cRooms = (ciData[i][CI_ROOM_NUMBERS_COL] || "").toString().split(',').map(r => r.trim());
            cRooms.forEach(cr => {
              const rm = allRooms.find(r => r.roomNo === cr);
              if (rm) rm.isAvailable = false;
            });
          }
        }
      }
    }

    // Also mark rooms as unavailable if their base status is Maintenance
    allRooms.forEach(rm => {
      if (rm.baseStatus === 'maintenance') rm.isAvailable = false;
    });

    return allRooms;
  } catch (err) {
    Logger.log("Error in getRoomAvailability: " + err.message);
    return [];
  }
}


function getPendingBookings() {
  try {
    const bookings = getAllBookings();
    if (bookings.error) return [];
    return bookings.filter(b => b.status.toLowerCase() === 'booked');
  } catch (e) {
    Logger.log("Error in getPendingBookings: " + e.toString());
    return [];
  }
}


function getRoomTypeAvailability(checkInStr, checkOutStr, excludeTicketId) {
  try {
    const ciReq = new Date(checkInStr);
    const coReq = new Date(checkOutStr);
    if (isNaN(ciReq.getTime()) || isNaN(coReq.getTime())) return [];

    const ss = SpreadsheetApp.openById(SS_ID);
    const roomsSheet = ss.getSheetByName(ROOMS_SHEET_NAME);
    const bookingsSheet = ss.getSheetByName(BOOKINGS_SHEET_NAME);

    if (!roomsSheet || !bookingsSheet) return [];

    const roomsData = roomsSheet.getDataRange().getValues();
    const bookingsData = bookingsSheet.getDataRange().getValues();

    // 1. Group total physical rooms by type (excluding Maintenance)
    let typeInventory = {};
    for (let i = 1; i < roomsData.length; i++) {
      const rType = (roomsData[i][ROOM_TYPE_COL] || "").toString().trim();
      const rStatus = (roomsData[i][ROOM_STATUS_COL] || "").toString().toLowerCase();
      const rRate = parseFloat(roomsData[i][ROOM_RATE_COL]) || 0;

      if (!typeInventory[rType]) {
        typeInventory[rType] = { type: rType, total: 0, booked: 0, available: 0, rate: rRate };
      }

      // If it's physically out of order, don't count it in the total
      if (rStatus !== 'maintenance') {
        typeInventory[rType].total += 1;
      }
    }

    // 2. Parse existing bookings to subtract overlaps
    for (let i = 1; i < bookingsData.length; i++) {
      const bStatus = (bookingsData[i][BOOKING_STATUS_COL] || "").toString().toLowerCase();
      const bTicket = (bookingsData[i][TICKET_ID_COL] || "").toString();

      if (excludeTicketId && bTicket === excludeTicketId) continue;

      if (bStatus === 'booked' || bStatus === 'checked in') {
        const bCi = new Date(bookingsData[i][CHECK_IN_COL]);
        const bCo = new Date(bookingsData[i][CHECK_OUT_COL]);

        // Overlap condition
        if (ciReq < bCo && coReq > bCi) {
          const bRoomsStr = (bookingsData[i][BOOKING_ROOM_NO_COL] || "").toString().trim();

          // Bookings can now be either literal room numbers "101, 102" OR "Cottage (2), Family (1)"
          if (bRoomsStr.includes('(')) {
            // It's a room type string: "Cottage (2), Family (1)"
            const parts = bRoomsStr.split(',');
            parts.forEach(p => {
              const match = p.match(/(.+?)\s*\((\d+)\)/);
              if (match) {
                const tName = match[1].trim();
                const qty = parseInt(match[2]);
                if (typeInventory[tName]) typeInventory[tName].booked += qty;
              }
            });
          } else {
            // It's specific room numbers (legacy or checked-in bookings)
            const rNos = bRoomsStr.split(',').map(r => r.trim());
            rNos.forEach(rn => {
              // Find the type of this room
              for (let r = 1; r < roomsData.length; r++) {
                if ((roomsData[r][ROOM_NO_COL] || "").toString().trim() === rn) {
                  const tName = (roomsData[r][ROOM_TYPE_COL] || "").toString().trim();
                  if (typeInventory[tName]) typeInventory[tName].booked += 1;
                  break;
                }
              }
            });
          }
        }
      }
    }

    // 2.5 Also check active Check-Ins directly (for Walk-ins which don't have a Booking record)
    const checkInSheet = ss.getSheetByName(CHECKIN_SHEET_NAME);
    if (checkInSheet && checkInSheet.getLastRow() > 1) {
      const ciData = checkInSheet.getDataRange().getValues();
      for (let i = 1; i < ciData.length; i++) {
        const status = (ciData[i][CI_STATUS_COL] || "").toString().toLowerCase();
        if (status === 'active') {
          const cCi = new Date(ciData[i][CI_CHECKIN_DATE_COL]);
          const cCo = new Date(ciData[i][CI_CHECKOUT_DATE_COL]);

          if (ciReq < cCo && coReq > cCi) {
            const cRooms = (ciData[i][CI_ROOM_NUMBERS_COL] || "").toString().split(',').map(r => r.trim());
            cRooms.forEach(cr => {
              for (let r = 1; r < roomsData.length; r++) {
                if ((roomsData[r][ROOM_NO_COL] || "").toString().trim() === cr) {
                  const tName = (roomsData[r][ROOM_TYPE_COL] || "").toString().trim();
                  if (typeInventory[tName]) typeInventory[tName].booked += 1;
                  break;
                }
              }
            });
          }
        }
      }
    }

    // 3. Calculate final availability
    return Object.values(typeInventory).map(t => {
      t.available = t.total - t.booked;
      if (t.available < 0) t.available = 0;
      return t;
    });

  } catch (err) {
    Logger.log("Error in getRoomTypeAvailability: " + err.message);
    return [];
  }
}
