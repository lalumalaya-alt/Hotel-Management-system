/**
 * Serves the HTML file
 */
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Income & Expense Manager')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Setup function to initialize sheets and headers
 * Run this function once manually from the Apps Script editor
 */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  


    // Setup Stay Segment Sheet
  let staySheet = ss.getSheetByName('Stay Segment');
  if (!staySheet) {
    staySheet = ss.insertSheet('Stay Segment');
    const stayHeaders = ['Room Number', 'Check-In Date/Time', 'Check-Out Date/Time'];
    staySheet.getRange(1, 1, 1, stayHeaders.length).setValues([stayHeaders]);
    staySheet.getRange(1, 1, 1, stayHeaders.length).setFontWeight('bold');
  }

  // Setup Rooms Sheet
  let roomsSheet = ss.getSheetByName('Rooms');
  if (!roomsSheet) {
    roomsSheet = ss.insertSheet('Rooms');
    const roomsHeaders = ['Room Number', 'Current Status', 'Last Check-In', 'Last Check-Out'];
    roomsSheet.getRange(1, 1, 1, roomsHeaders.length).setValues([roomsHeaders]);
    roomsSheet.getRange(1, 1, 1, roomsHeaders.length).setFontWeight('bold');
  }

// Setup Income Sheet
  let incomeSheet = ss.getSheetByName('Income');
  if (!incomeSheet) {
    incomeSheet = ss.insertSheet('Income');
    const incomeHeaders = [
      'Date', 'Entry Number', 'Room Number', 'Coffee / Black Pepper', 'Gst/Ngst', 'Other', 
      'Room Rent', 'Fooding', 'Total', 'Paid Amount', 'Due Amount', 'Payment Status', 'Mode Of Payment', 
      'Entry By', 'Payment Date'
    ];
    incomeSheet.getRange(1, 1, 1, incomeHeaders.length).setValues([incomeHeaders]);
    incomeSheet.getRange(1, 1, 1, incomeHeaders.length).setFontWeight('bold');
  } else {
    // Migration: Check if 'Coffee / Black Pepper' exists, if not insert it after 'Room Number'
    let headers = incomeSheet.getRange(1, 1, 1, incomeSheet.getLastColumn()).getValues()[0];
    let roomNumIndex = headers.indexOf('Room Number');
    let coffeeIndex = headers.indexOf('Coffee / Black Pepper');
    
    if (roomNumIndex !== -1 && coffeeIndex === -1) {
      incomeSheet.insertColumnAfter(roomNumIndex + 1);
      incomeSheet.getRange(1, roomNumIndex + 2).setValue('Coffee / Black Pepper').setFontWeight('bold');
      headers = incomeSheet.getRange(1, 1, 1, incomeSheet.getLastColumn()).getValues()[0]; // reload headers
    }
    
    // Migration: Check if 'Gst/Ngst' exists, if not insert it after 'Coffee / Black Pepper'
    coffeeIndex = headers.indexOf('Coffee / Black Pepper');
    const gstNgstIndex = headers.indexOf('Gst/Ngst');
    
    if (coffeeIndex !== -1 && gstNgstIndex === -1) {
      incomeSheet.insertColumnAfter(coffeeIndex + 1);
      incomeSheet.getRange(1, coffeeIndex + 2).setValue('Gst/Ngst').setFontWeight('bold');
      headers = incomeSheet.getRange(1, 1, 1, incomeSheet.getLastColumn()).getValues()[0];
    }

    // Migration: Check if 'Paid Amount' and 'Due Amount' exist
    const totalIndex = headers.indexOf('Total');
    const paidIndex = headers.indexOf('Paid Amount');
    
    if (totalIndex !== -1 && paidIndex === -1) {
      incomeSheet.insertColumnsAfter(totalIndex + 1, 2);
      incomeSheet.getRange(1, totalIndex + 2).setValue('Paid Amount').setFontWeight('bold');
      incomeSheet.getRange(1, totalIndex + 3).setValue('Due Amount').setFontWeight('bold');
      
      // Auto-fill existing rows
      const lastRow = incomeSheet.getLastRow();
      if (lastRow > 1) {
        const dataRange = incomeSheet.getRange(2, 1, lastRow - 1, incomeSheet.getLastColumn());
        const sheetData = dataRange.getValues();
        const newHeaders = incomeSheet.getRange(1, 1, 1, incomeSheet.getLastColumn()).getValues()[0];
        const statusIdx = newHeaders.indexOf('Payment Status');
        const totalIdx = newHeaders.indexOf('Total');
        
        for (let i = 0; i < sheetData.length; i++) {
          const status = sheetData[i][statusIdx];
          const totalVal = parseFloat(sheetData[i][totalIdx]) || 0;
          if (status === 'PAID' || status === 'ADVANCE') {
            incomeSheet.getRange(i + 2, totalIndex + 2).setValue(totalVal);
            incomeSheet.getRange(i + 2, totalIndex + 3).setValue(0);
          } else {
            incomeSheet.getRange(i + 2, totalIndex + 2).setValue(0);
            incomeSheet.getRange(i + 2, totalIndex + 3).setValue(totalVal);
          }
        }
      }
    }
  }

  // Setup Expenses Sheet
  let expenseSheet = ss.getSheetByName('Expenses');
  if (!expenseSheet) {
    expenseSheet = ss.insertSheet('Expenses');
    const expenseHeaders = [
      'Date', 'Type', 'Description', 'Details', 'Amount', 'Paid Amount', 'Due Amount',
      'Payment Status', 'Source Of Payment', 'Mode Of Payment', 
      'Entry By', 'Payment Date'
    ];
    expenseSheet.getRange(1, 1, 1, expenseHeaders.length).setValues([expenseHeaders]);
    expenseSheet.getRange(1, 1, 1, expenseHeaders.length).setFontWeight('bold');
  } else {
    // Migration: Check if 'Paid Amount' and 'Due Amount' exist
    const expHeaders = expenseSheet.getRange(1, 1, 1, expenseSheet.getLastColumn()).getValues()[0];
    const amountIndex = expHeaders.indexOf('Amount');
    const expPaidIndex = expHeaders.indexOf('Paid Amount');
    
    if (amountIndex !== -1 && expPaidIndex === -1) {
      expenseSheet.insertColumnsAfter(amountIndex + 1, 2);
      expenseSheet.getRange(1, amountIndex + 2).setValue('Paid Amount').setFontWeight('bold');
      expenseSheet.getRange(1, amountIndex + 3).setValue('Due Amount').setFontWeight('bold');
      
      // Auto-fill existing rows
      const lastRow = expenseSheet.getLastRow();
      if (lastRow > 1) {
        const dataRange = expenseSheet.getRange(2, 1, lastRow - 1, expenseSheet.getLastColumn());
        const sheetData = dataRange.getValues();
        const newHeaders = expenseSheet.getRange(1, 1, 1, expenseSheet.getLastColumn()).getValues()[0];
        const statusIdx = newHeaders.indexOf('Payment Status');
        const amountIdx = newHeaders.indexOf('Amount');
        
        for (let i = 0; i < sheetData.length; i++) {
          const status = sheetData[i][statusIdx];
          const amountVal = parseFloat(sheetData[i][amountIdx]) || 0;
          if (status === 'PAID' || status === 'ADVANCE') {
            expenseSheet.getRange(i + 2, amountIndex + 2).setValue(amountVal);
            expenseSheet.getRange(i + 2, amountIndex + 3).setValue(0);
          } else {
            expenseSheet.getRange(i + 2, amountIndex + 2).setValue(0);
            expenseSheet.getRange(i + 2, amountIndex + 3).setValue(amountVal);
          }
        }
      }
    }
  }
}

/**
 * Helper to sort a sheet by the Date column (Column A)
 */
function sortSheetByDate(sheet) {
  const lastRow = sheet.getLastRow();
  const lastCol = sheet.getLastColumn();
  
  if (lastRow > 1) {
    // Sort everything from row 2 (skipping header) by column 1 (Date)
    const range = sheet.getRange(2, 1, lastRow - 1, lastCol);
    range.sort({ column: 1, ascending: true });
  }
}

/**
 * Add an income record
 */
function addIncome(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Income');
    
    // Auto calculate total
    const roomRent = parseFloat(data.roomRent) || 0;
    const fooding = parseFloat(data.fooding) || 0;
    const total = roomRent + fooding;
    
    const paymentDate = (data.paymentStatus === 'PAID' || data.paymentStatus === 'ADVANCE') ? data.date : '';
    
    let paidAmount = 0;
    let dueAmount = total;
    if (data.paymentStatus === 'PAID' || data.paymentStatus === 'ADVANCE') {
      paidAmount = total;
      dueAmount = 0;
    }

    const rowData = [
      data.date,
      data.entryNumber,
      data.roomNumber,
      data.coffeePepper,
      data.gstNgst,
      data.other,
      roomRent,
      fooding,
      total,
      paidAmount,
      dueAmount,
      data.paymentStatus,
      data.modeOfPayment,
      data.entryBy,
      paymentDate
    ];
    
    sheet.appendRow(rowData);
    sortSheetByDate(sheet);
    return { success: true, message: 'Saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Add an expense record
 */
function addExpense(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Expenses');
    
    const amount = parseFloat(data.amount) || 0;
    const paymentDate = (data.paymentStatus === 'PAID' || data.paymentStatus === 'ADVANCE') ? data.date : '';
    
    let paidAmount = 0;
    let dueAmount = amount;
    if (data.paymentStatus === 'PAID' || data.paymentStatus === 'ADVANCE') {
      paidAmount = amount;
      dueAmount = 0;
    }

    const rowData = [
      data.date,
      data.type,
      data.description,
      data.details,
      amount,
      paidAmount,
      dueAmount,
      data.paymentStatus,
      data.sourceOfPayment,
      data.modeOfPayment,
      data.entryBy,
      paymentDate
    ];
    
    sheet.appendRow(rowData);
    sortSheetByDate(sheet);
    return { success: true, message: 'Saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Helper to get data as array of objects
 */
function getSheetDataAsObjects(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  
  const headers = data[0];
  const rows = data.slice(1);
  return rows.map((row, index) => {
    let obj = { _rowIndex: index + 2 }; // +2 because array is 0-indexed and header is row 1
    headers.forEach((header, i) => {
      obj[header] = row[i];
    });
    return obj;
  });
}

/**
 * Parses date string (YYYY-MM-DD or standard JS date) into Date object safely
 */
function parseDate(dateValue) {
  if (!dateValue) return null;
  const d = new Date(dateValue);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Helper to safely format a Date object to YYYY-MM-DD using the script's timezone
 * This prevents the "one day back" bug caused by .toISOString() converting local midnight to previous day UTC
 */
function formatDateToLocal(dateObj) {
  if (!dateObj || isNaN(dateObj.getTime())) return '';
  return Utilities.formatDate(dateObj, Session.getScriptTimeZone(), "yyyy-MM-dd");
}

/**
 * Dashboard Calculations
 */
function getDashboardData(monthValue = '') {
  try {
    const incomeData = getSheetDataAsObjects('Income');
    const expenseData = getSheetDataAsObjects('Expenses');
    
    let targetMonth, targetYear;
    if (monthValue) {
      const parts = monthValue.split('-');
      targetYear = parseInt(parts[0], 10);
      targetMonth = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
    } else {
      const now = new Date();
      targetMonth = now.getMonth();
      targetYear = now.getFullYear();
    }
    
    const now = new Date();
    const todayStr = formatDateToLocal(now);
    
    // Calculate Financial Year (April 1 to March 31) based on current real date
    let fyStartYear = now.getFullYear();
    if (now.getMonth() < 3) { // Jan, Feb, Mar are months 0, 1, 2
      fyStartYear -= 1;
    }
    const fyStartDate = new Date(fyStartYear, 3, 1); // April 1st
    
    let dashboard = {
      todayIncome: 0,
      todayExpenses: 0,
      cashInCounter: 0,
      monthlyIncome: 0,
      monthlyExpenses: 0,
      netMonthlyRoomSavings: 0,
      netMonthlyFoodSavings: 0,
      totalUnpaidIncome: 0,
      totalUnpaidExpenses: 0,
      totalRoomRentIncome: 0,
      totalFoodingIncome: 0,
      totalRoomExpenses: 0,
      totalFoodExpenses: 0,
      totalFyIncome: 0,
      totalFyExpenses: 0,
      cashTakenMalaya: 0,
      cashTakenMDSir: 0
    };
    
    let totalCashCollection = 0;
    let cashExpensesFromCounter = 0;

    // Process Income
    incomeData.forEach(row => {
      const d = parseDate(row['Date']);
      const isToday = d && formatDateToLocal(d) === todayStr;
      const isTargetMonth = d && d.getMonth() === targetMonth && d.getFullYear() === targetYear;
      const isFy = d && d >= fyStartDate;
      
      const amount = parseFloat(row['Total']) || 0;
      const roomRent = parseFloat(row['Room Rent']) || 0;
      const fooding = parseFloat(row['Fooding']) || 0;
      
      if (isToday) dashboard.todayIncome += amount;
      if (isFy) dashboard.totalFyIncome += amount;
      
      if (isTargetMonth) {
        dashboard.monthlyIncome += amount;
        dashboard.totalRoomRentIncome += roomRent;
        dashboard.totalFoodingIncome += fooding;
      }
      
      if (row['Payment Status'] === 'UNPAID') {
        dashboard.totalUnpaidIncome += amount;
      } else if (row['Mode Of Payment'] === 'CASH') {
        totalCashCollection += amount;
      }
    });

    // Process Expenses
    expenseData.forEach(row => {
      const d = parseDate(row['Date']);
      const isToday = d && formatDateToLocal(d) === todayStr;
      const isTargetMonth = d && d.getMonth() === targetMonth && d.getFullYear() === targetYear;
      const isFy = d && d >= fyStartDate;
      
      const amount = parseFloat(row['Amount']) || 0;
      const type = row['Type'];
      const description = row['Description'];
      
      if (isToday) dashboard.todayExpenses += amount;
      if (isFy) dashboard.totalFyExpenses += amount;
      
      if (isTargetMonth) {
        dashboard.monthlyExpenses += amount;
        if (type === 'ROOM') dashboard.totalRoomExpenses += amount;
        if (type === 'FOOD') dashboard.totalFoodExpenses += amount;
        if (description === 'Malaya') dashboard.cashTakenMalaya += amount;
        if (description === 'MD Sir') dashboard.cashTakenMDSir += amount;
      }
      
      if (row['Payment Status'] === 'UNPAID') {
        dashboard.totalUnpaidExpenses += amount;
      } else if (row['Mode Of Payment'] === 'CASH' && row['Source Of Payment'] === 'COUNTER') {
        cashExpensesFromCounter += amount;
      }
    });

    dashboard.netMonthlyRoomSavings = dashboard.totalRoomRentIncome - dashboard.totalRoomExpenses;
    dashboard.netMonthlyFoodSavings = dashboard.totalFoodingIncome - dashboard.totalFoodExpenses;
    dashboard.cashInCounter = totalCashCollection - cashExpensesFromCounter;
    
    return { success: true, data: dashboard };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Get Unpaid Incomes
 */
function getUnpaidIncome(monthValue = '') {
  try {
    const data = getSheetDataAsObjects('Income');
    
    let targetMonth, targetYear;
    if (monthValue) {
      const parts = monthValue.split('-');
      targetYear = parseInt(parts[0], 10);
      targetMonth = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
    }

    const unpaid = data.filter(r => {
      if (r['Payment Status'] !== 'UNPAID' && r['Payment Status'] !== 'PARTIAL') return false;
      if (monthValue) {
        const d = parseDate(r['Date']);
        if (!d || d.getMonth() !== targetMonth || d.getFullYear() !== targetYear) {
          return false;
        }
      }
      return true;
    }).map(r => ({
      rowIndex: r._rowIndex,
      date: r['Date'] ? formatDateToLocal(new Date(r['Date'])) : '',
      entryNumber: r['Entry Number'],
      roomNumber: r['Room Number'],
      coffeePepper: r['Coffee / Black Pepper'],
      gstNgst: r['Gst/Ngst'],
      other: r['Other'],
      roomRent: r['Room Rent'],
      fooding: r['Fooding'],
      total: r['Total'],
      paidAmount: r['Paid Amount'],
      dueAmount: r['Due Amount'],
      entryBy: r['Entry By']
    }));
    return { success: true, data: unpaid };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Get Unpaid Expenses
 */
function getUnpaidExpenses(monthValue = '') {
  try {
    const data = getSheetDataAsObjects('Expenses');
    
    let targetMonth, targetYear;
    if (monthValue) {
      const parts = monthValue.split('-');
      targetYear = parseInt(parts[0], 10);
      targetMonth = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
    }

    const unpaid = data.filter(r => {
      if (r['Payment Status'] !== 'UNPAID' && r['Payment Status'] !== 'PARTIAL') return false;
      if (monthValue) {
        const d = parseDate(r['Date']);
        if (!d || d.getMonth() !== targetMonth || d.getFullYear() !== targetYear) {
          return false;
        }
      }
      return true;
    }).map(r => ({
      rowIndex: r._rowIndex,
      date: r['Date'] ? formatDateToLocal(new Date(r['Date'])) : '',
      type: r['Type'],
      description: r['Description'],
      amount: r['Amount'],
      paidAmount: r['Paid Amount'],
      dueAmount: r['Due Amount'],
      entryBy: r['Entry By']
    }));
    return { success: true, data: unpaid };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Get Report Data (All rows based on Category and Month)
 */
function getReportData(category, monthValue, expenseType = '', expenseDesc = '') {
  try {
    const sheetName = category === 'INCOME' ? 'Income' : 'Expenses';
    const data = getSheetDataAsObjects(sheetName);
    
    let targetMonth, targetYear;
    if (monthValue) {
      const parts = monthValue.split('-');
      targetYear = parseInt(parts[0], 10);
      targetMonth = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
    }
    
    const filteredData = data.filter(r => {
      if (monthValue) {
        const d = parseDate(r['Date']);
        if (!d || d.getMonth() !== targetMonth || d.getFullYear() !== targetYear) {
          return false;
        }
      }
      if (category === 'EXPENSE') {
        if (expenseType && r['Type'] !== expenseType) return false;
        if (expenseDesc && r['Description'] !== expenseDesc) return false;
      }
      return true;
    }).map(r => {
      // Map all columns for the frontend
      if (category === 'INCOME') {
        return {
          date: r['Date'] ? formatDateToLocal(new Date(r['Date'])) : '',
          entryNumber: r['Entry Number'],
          roomNumber: r['Room Number'],
          coffeePepper: r['Coffee / Black Pepper'],
          gstNgst: r['Gst/Ngst'],
          other: r['Other'],
          roomRent: r['Room Rent'],
          fooding: r['Fooding'],
          total: r['Total'],
          paidAmount: r['Paid Amount'],
          dueAmount: r['Due Amount'],
          paymentStatus: r['Payment Status'],
          modeOfPayment: r['Mode Of Payment'],
          entryBy: r['Entry By'],
          paymentDate: r['Payment Date'] ? formatDateToLocal(new Date(r['Payment Date'])) : ''
        };
      } else {
        return {
          date: r['Date'] ? formatDateToLocal(new Date(r['Date'])) : '',
          type: r['Type'],
          description: r['Description'],
          details: r['Details'],
          amount: r['Amount'],
          paymentStatus: r['Payment Status'],
          sourceOfPayment: r['Source Of Payment'],
          modeOfPayment: r['Mode Of Payment'],
          entryBy: r['Entry By'],
          paymentDate: r['Payment Date'] ? formatDateToLocal(new Date(r['Payment Date'])) : ''
        };
      }
    });
    
    return { success: true, data: filteredData };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Mark Income Paid
 * Expected data: { rowIndex, modeOfPayment, paymentDate }
 */
function markIncomePaid(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Income');
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    const statusCol = headers.indexOf('Payment Status') + 1;
    const modeCol = headers.indexOf('Mode Of Payment') + 1;
    const dateCol = headers.indexOf('Payment Date') + 1;
    const totalCol = headers.indexOf('Total') + 1;
    const paidCol = headers.indexOf('Paid Amount') + 1;
    const dueCol = headers.indexOf('Due Amount') + 1;

    if (statusCol <= 0 || modeCol <= 0 || dateCol <= 0 || totalCol <= 0 || paidCol <= 0 || dueCol <= 0) {
      throw new Error("Could not find required columns in the sheet headers. Please ensure 'Paid Amount' and 'Due Amount' exist in Row 1.");
    }

    const currentTotal = parseFloat(sheet.getRange(data.rowIndex, totalCol).getValue()) || 0;
    const currentPaid = parseFloat(sheet.getRange(data.rowIndex, paidCol).getValue()) || 0;
    
    const newPaidAmount = parseFloat(data.paidAmount) || 0;
    const totalPaid = currentPaid + newPaidAmount;
    let newDue = currentTotal - totalPaid;
    
    if (newDue < 0) newDue = 0; // Prevent negative due

    let newStatus = 'PARTIAL';
    if (newDue <= 0) {
      newStatus = 'PAID';
    }

    sheet.getRange(data.rowIndex, paidCol).setValue(totalPaid);
    sheet.getRange(data.rowIndex, dueCol).setValue(newDue);
    sheet.getRange(data.rowIndex, statusCol).setValue(newStatus);
    sheet.getRange(data.rowIndex, modeCol).setValue(data.modeOfPayment);
    sheet.getRange(data.rowIndex, dateCol).setValue(data.paymentDate);
    
    return { success: true, message: 'Saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Mark Expense Paid
 * Expected data: { rowIndex, modeOfPayment, paymentDate, sourceOfPayment }
 */
function markExpensePaid(data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Expenses');
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    
    const statusCol = headers.indexOf('Payment Status') + 1;
    const sourceCol = headers.indexOf('Source Of Payment') + 1;
    const modeCol = headers.indexOf('Mode Of Payment') + 1;
    const dateCol = headers.indexOf('Payment Date') + 1;
    const amountCol = headers.indexOf('Amount') + 1;
    const paidCol = headers.indexOf('Paid Amount') + 1;
    const dueCol = headers.indexOf('Due Amount') + 1;

    if (statusCol <= 0 || sourceCol <= 0 || modeCol <= 0 || dateCol <= 0 || amountCol <= 0 || paidCol <= 0 || dueCol <= 0) {
      throw new Error("Could not find required columns in the sheet headers. Please ensure 'Paid Amount' and 'Due Amount' exist in Row 1.");
    }

    const currentTotal = parseFloat(sheet.getRange(data.rowIndex, amountCol).getValue()) || 0;
    const currentPaid = parseFloat(sheet.getRange(data.rowIndex, paidCol).getValue()) || 0;
    
    const newPaidAmount = parseFloat(data.paidAmount) || 0;
    const totalPaid = currentPaid + newPaidAmount;
    let newDue = currentTotal - totalPaid;
    
    if (newDue < 0) newDue = 0; // Prevent negative due

    let newStatus = 'PARTIAL';
    if (newDue <= 0) {
      newStatus = 'PAID';
    }

    sheet.getRange(data.rowIndex, paidCol).setValue(totalPaid);
    sheet.getRange(data.rowIndex, dueCol).setValue(newDue);
    sheet.getRange(data.rowIndex, statusCol).setValue(newStatus);
    sheet.getRange(data.rowIndex, sourceCol).setValue(data.sourceOfPayment);
    sheet.getRange(data.rowIndex, modeCol).setValue(data.modeOfPayment);
    sheet.getRange(data.rowIndex, dateCol).setValue(data.paymentDate);
    
    return { success: true, message: 'Saved successfully' };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

/**
 * Reads dropdown settings from the "Settings" sheet
 */
function getDropdownSettings() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Settings');
  if (!sheet) {
    return { paymentStatus: [], modeOfPayment: [], entryBy: [], roomDescriptions: [], foodDescriptions: [], sourceOfPayment: [], coffeePepperOptions: [], gstNgstOptions: [] };
  }
  
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return { paymentStatus: [], modeOfPayment: [], entryBy: [], roomDescriptions: [], foodDescriptions: [], sourceOfPayment: [], coffeePepperOptions: [], gstNgstOptions: [] };
  }
  
  const data = sheet.getRange(2, 1, lastRow - 1, 9).getValues();
  
  const paymentStatus = [];
  const modeOfPayment = [];
  const entryBy = [];
  const roomDescriptions = [];
  const foodDescriptions = [];
  const sourceOfPayment = [];
  const coffeePepperOptions = [];
  const gstNgstOptions = [];
  
  data.forEach(row => {
    if (row[0] && row[0].toString().trim() !== '') paymentStatus.push(row[0].toString().trim());
    if (row[1] && row[1].toString().trim() !== '') modeOfPayment.push(row[1].toString().trim());
    if (row[2] && row[2].toString().trim() !== '') entryBy.push(row[2].toString().trim());
    if (row[4] && row[4].toString().trim() !== '') roomDescriptions.push(row[4].toString().trim());
    if (row[5] && row[5].toString().trim() !== '') foodDescriptions.push(row[5].toString().trim());
    if (row[6] && row[6].toString().trim() !== '') sourceOfPayment.push(row[6].toString().trim());
    if (row[7] && row[7].toString().trim() !== '') coffeePepperOptions.push(row[7].toString().trim());
    if (row[8] && row[8].toString().trim() !== '') gstNgstOptions.push(row[8].toString().trim());
  });
  
  return {
    paymentStatus: paymentStatus,
    modeOfPayment: modeOfPayment,
    entryBy: entryBy,
    roomDescriptions: roomDescriptions,
    foodDescriptions: foodDescriptions,
    sourceOfPayment: sourceOfPayment,
    coffeePepperOptions: coffeePepperOptions,
    gstNgstOptions: gstNgstOptions
  };
}


/**
 * Room Status Database Functions
 */
function getRoomStatus() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Get current room status from Rooms sheet
    const roomsSheet = ss.getSheetByName('Rooms');
    let statusData = [];
    let roomNumbersInSheet = [];
    if (roomsSheet) {
      statusData = getSheetDataAsObjects('Rooms');
      roomNumbersInSheet = statusData.map(r => r['Room Number'].toString());
    }

    // Get master list of rooms from Settings
    const settingsData = getDropdownSettings();
    let masterRooms = settingsData.roomDescriptions || [];

    // Merge masterRooms with rooms already in the Rooms sheet
    let mergedRooms = [...new Set([...masterRooms.map(String), ...roomNumbersInSheet])];

    // Filter out non-room items (must contain at least one digit) and sort numerically
    masterRooms = mergedRooms.filter(r => /\d/.test(r)).sort((a, b) => {
        const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
        const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
        return numA - numB;
    });

    // Map status
    const result = masterRooms.map(roomNum => {
      let status = 'AVAILABLE';
      const existing = statusData.find(r => r['Room Number'].toString() === roomNum.toString());
      if (existing && existing['Current Status']) {
        status = existing['Current Status'];
      }
      return { roomNumber: roomNum, status: status };
    });

    // Filter out any empty strings that might have come from settings or sheets
    const finalResult = result.filter(r => r.roomNumber && r.roomNumber.trim() !== '');

    return { success: true, data: finalResult };
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}

function processCheckIn(roomNumber, dateTimeStr) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let roomsSheet = ss.getSheetByName('Rooms');
    let staySheet = ss.getSheetByName('Stay Segment');

    if (!roomsSheet) throw new Error("Rooms sheet not found.");
    if (!staySheet) throw new Error("Stay Segment sheet not found.");

    const roomsData = getSheetDataAsObjects('Rooms');

    let rowIndex = -1;
    for (let i = 0; i < roomsData.length; i++) {
      if (roomsData[i]['Room Number'].toString() === roomNumber.toString()) {
        rowIndex = roomsData[i]._rowIndex;
        break;
      }
    }

    const dateTime = new Date(dateTimeStr);

    if (rowIndex === -1) {
       roomsSheet.appendRow([roomNumber, 'OCCUPIED', dateTime, '']);
    } else {
       roomsSheet.getRange(rowIndex, 2).setValue('OCCUPIED');
       roomsSheet.getRange(rowIndex, 3).setValue(dateTime);
    }

    staySheet.appendRow([roomNumber, dateTime, '']);

    return { success: true, message: `Room ${roomNumber} Checked-In successfully.` };
  } catch(err) {
    return { success: false, message: err.toString() };
  }
}

function processCheckOut(roomNumber, dateTimeStr) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let roomsSheet = ss.getSheetByName('Rooms');
    let staySheet = ss.getSheetByName('Stay Segment');

    if (!roomsSheet) throw new Error("Rooms sheet not found.");
    if (!staySheet) throw new Error("Stay Segment sheet not found.");

    const roomsData = getSheetDataAsObjects('Rooms');

    let rowIndex = -1;
    for (let i = 0; i < roomsData.length; i++) {
      if (roomsData[i]['Room Number'].toString() === roomNumber.toString()) {
        rowIndex = roomsData[i]._rowIndex;
        break;
      }
    }

    const dateTime = new Date(dateTimeStr);

    if (rowIndex !== -1) {
       roomsSheet.getRange(rowIndex, 2).setValue('AVAILABLE');
       roomsSheet.getRange(rowIndex, 4).setValue(dateTime);
    }

    // Find the latest stay row for this room without a checkout date
    const stayData = staySheet.getDataRange().getValues();
    let stayRowIndex = -1;
    // Iterate backwards to find the most recent checkin
    for(let i = stayData.length - 1; i > 0; i--) {
        if(stayData[i][0].toString() === roomNumber.toString() && stayData[i][2] === '') {
            stayRowIndex = i + 1; // +1 because array is 0-indexed and sheet is 1-indexed
            break;
        }
    }

    if(stayRowIndex !== -1) {
        staySheet.getRange(stayRowIndex, 3).setValue(dateTime);
    } else {
        // Fallback if we somehow checkout without a checkin record
        staySheet.appendRow([roomNumber, '', dateTime]);
    }

    return { success: true, message: `Room ${roomNumber} Checked-Out successfully.` };
  } catch(err) {
    return { success: false, message: err.toString() };
  }
}
