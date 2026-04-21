const fs = require('fs');
let code = fs.readFileSync('Code.gs', 'utf8');

// Also update processMergedCheckout to use billingFormat
code = code.replace(
  "let nights = daysBetween(cidDate, actualCheckOutDate);",
  "const billingFormat = (ciData[i][CI_BILLING_FORMAT_COL] || 'Standard').toString();\n          let checkOutTime = (ciData[i][CI_CHECKOUT_TIME_COL] || '12:00').toString();\n          let nights = calculateStayDuration(\n            ciData[i][CI_CHECKIN_DATE_COL],\n            ciData[i][CI_CHECKIN_TIME_COL],\n            actualCheckOutDate,\n            checkOutTime,\n            billingFormat\n          );"
);

fs.writeFileSync('Code.gs', code);
