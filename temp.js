"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef;
var LOGO = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGXxCe0WNNedmFqSWeF761f7Kshhc-NP5ChRQKz9fr97cO8VaarvD0KlCwqHojJVBWv-RAxfOqMI5rD4H78KnARyOc6QgwL1nRRFWf5xNQ1d9F9HfAoLPPGlTyP0GwNl4n-INMEsWLQ4Y7zJtz5bOdAnc2ePH9-uCRgshlo6BsS6gJEz6fhrxL-5U5O3sX/s160/channels4_profile.jpg';
var fmtDate = function fmtDate(s) {
  if (!s) return '-';
  return new Date(s).toLocaleDateString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  });
};
var fmtDateTime = function fmtDateTime(s) {
  if (!s) return '-';
  return new Date(s).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};
var APP_CURRENCY = 'MVR';
var fmtCur = function fmtCur(a, currency) {
  return (currency || APP_CURRENCY || 'MVR') + ' ' + (parseFloat(a) || 0).toFixed(2);
};
var statusCls = function statusCls(s) {
  if (!s) return '';
  var m = {
    available: 'status-available',
    booked: 'status-booked',
    checkedout: 'status-checkedout',
    maintenance: 'status-maintenance',
    draft: 'status-draft',
    sent: 'status-sent',
    accepted: 'status-accepted',
    expired: 'status-expired',
    income: 'status-income',
    expense: 'status-expense',
    paid: 'status-paid',
    partial: 'status-partial',
    unpaid: 'status-unpaid',
    overdue: 'status-overdue',
    cancelled: 'status-cancelled',
    converted: 'status-converted',
    reserved: 'status-reserved'
  };
  return m[s.toLowerCase().replace(/\s+/g, '')] || '';
};
var CURRENCIES = ['MVR', 'USD', 'EUR', 'GBP', 'AED', 'SAR', 'INR', 'PKR', 'LKR', 'BDT', 'JPY', 'CNY', 'AUD', 'CAD', 'SGD', 'MYR', 'THB', 'IDR', 'PHP', 'VND', 'KRW', 'TWD', 'HKD', 'NZD', 'CHF', 'SEK', 'NOK', 'DKK', 'PLN', 'CZK', 'HUF', 'RON', 'BGN', 'HRK', 'RUB', 'UAH', 'TRY', 'ZAR', 'EGP', 'NGN', 'KES', 'GHS', 'TZS', 'UGX', 'MAD', 'TND', 'QAR', 'KWD', 'BHD', 'OMR', 'JOD', 'ILS', 'BRL', 'ARS', 'CLP', 'COP', 'PEN', 'MXN', 'UYU', 'DOP', 'CRC', 'GTQ', 'PYG', 'BOB', 'VES', 'TTD', 'JMD', 'BBD', 'BZD', 'BMD', 'BSD', 'KYD', 'XCD', 'FJD', 'PGK', 'WST', 'TOP', 'VUV', 'SBD', 'MWK', 'ZMW', 'BWP', 'MUR', 'SCR', 'NPR', 'BTN', 'MMK', 'KHR', 'LAK', 'MNT', 'KZT', 'UZS', 'GEL', 'AMD', 'AZN', 'AFN', 'IQD', 'IRR', 'SYP', 'LBP', 'YER', 'ETB', 'RWF', 'BIF', 'DJF', 'ERN', 'SOS', 'SDG', 'LSL', 'SZL', 'NAD', 'GMD', 'SLL', 'GNF', 'LRD', 'CVE', 'STN', 'XOF', 'XAF', 'XPF', 'CDF', 'AOA', 'MZN', 'MDL', 'ALL', 'MKD', 'BAM', 'RSD', 'ISK', 'GIP', 'FKP', 'SHP', 'HTG', 'NIO', 'HNL', 'PAB', 'CUP'];
var downloadInvoicePdf = function downloadInvoicePdf(inv) {
  var cur = inv.currency || APP_CURRENCY;
  var fc = function fc(a) {
    return fmtCur(a, cur);
  };
  var items = function () {
    try {
      return JSON.parse(typeof inv.items === 'string' ? inv.items : '[]');
    } catch (e) {
      return [];
    }
  }();
  var roomItems = items.filter(function (i) {
    return i.type === 'room';
  });
  var actItems = items.filter(function (i) {
    return i.type === 'activity';
  });
  var svcItems = items.filter(function (i) {
    return i.type === 'service';
  });
  var tBody = [];
  if (roomItems.length > 0) {
    tBody.push([{
      text: 'Room Type',
      style: 'th'
    }, {
      text: 'Qty',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Nights',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Rate',
      style: 'th',
      alignment: 'right'
    }, {
      text: 'Amount (' + cur + ')',
      style: 'th',
      alignment: 'right'
    }]);
    roomItems.forEach(function (it) {
      var qty = it.quantity || 1;
      tBody.push([it.roomType || 'Room', {
        text: String(qty),
        alignment: 'center'
      }, {
        text: String(it.nights),
        alignment: 'center'
      }, {
        text: fc(it.rate),
        alignment: 'right'
      }, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  if (actItems.length > 0) {
    if (tBody.length > 0) tBody.push([{
      text: '',
      colSpan: 5,
      border: [false, false, false, false]
    }, {}, {}, {}, {}]);
    tBody.push([{
      text: 'Activity',
      style: 'th',
      colSpan: 2
    }, {}, {
      text: 'Pax',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Rate',
      style: 'th',
      alignment: 'right'
    }, {
      text: 'Amount (' + cur + ')',
      style: 'th',
      alignment: 'right'
    }]);
    actItems.forEach(function (it) {
      return tBody.push([{
        text: it.description || 'Activity',
        colSpan: 2
      }, {}, {
        text: String(it.pax || 1),
        alignment: 'center'
      }, {
        text: fc(it.rate),
        alignment: 'right'
      }, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  if (svcItems.length > 0) {
    if (tBody.length > 0) tBody.push([{
      text: '',
      colSpan: 5,
      border: [false, false, false, false]
    }, {}, {}, {}, {}]);
    tBody.push([{
      text: 'Service',
      style: 'th',
      colSpan: 4
    }, {}, {}, {}, {
      text: 'Amount (' + cur + ')',
      style: 'th',
      alignment: 'right'
    }]);
    svcItems.forEach(function (it) {
      return tBody.push([{
        text: it.description || 'Service',
        colSpan: 4
      }, {}, {}, {}, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  tBody.push([{
    text: 'Subtotal',
    bold: true,
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(inv.subTotal),
    alignment: 'right',
    bold: true
  }]);
  if (inv.discount > 0) tBody.push([{
    text: 'Discount',
    colSpan: 4
  }, {}, {}, {}, {
    text: '- ' + fc(inv.discount),
    alignment: 'right'
  }]);
  if (inv.gstEnabled) tBody.push([{
    text: 'GST (' + inv.gstPercent + '%)',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(inv.gstAmount),
    alignment: 'right'
  }]);
  if (inv.greenTaxEnabled) tBody.push([{
    text: 'Green Tax (' + cur + ' ' + inv.greenTaxPerNight + ' x ' + inv.greenTaxPax + ' pax x ' + inv.greenTaxNights + ' nights)',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(inv.greenTaxAmount),
    alignment: 'right'
  }]);
  tBody.push([{
    text: 'TOTAL',
    bold: true,
    fillColor: '#f0f0f0',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(inv.totalAmount),
    bold: true,
    alignment: 'right',
    fillColor: '#f0f0f0'
  }]);
  var guestInfo = [{
    text: 'Bill To:\n',
    bold: true,
    fontSize: 13
  }, (inv.guestName || '') + '\n', {
    text: 'Phone: ',
    bold: true
  }, (inv.phone || '-') + '\n', {
    text: 'Email: ',
    bold: true
  }, (inv.email || '-') + '\n'];
  if (inv.customerTIN) guestInfo.push({
    text: 'TIN: ',
    bold: true
  }, inv.customerTIN + '\n');
  var doc = {
    content: [{
      text: 'MRI HOTEL - INVOICE',
      style: 'hdr',
      alignment: 'center'
    }, {
      text: 'Invoice #' + (inv.invoiceId || '') + '  |  Currency: ' + cur,
      alignment: 'center',
      color: '#666',
      margin: [0, 0, 0, 15]
    }, {
      columns: [{
        text: guestInfo
      }, {
        text: [{
          text: 'Invoice Date: ',
          bold: true
        }, fmtDate(inv.createdDate) + '\n', {
          text: 'Due Date: ',
          bold: true
        }, fmtDate(inv.dueDate) + '\n', {
          text: 'Status: ',
          bold: true
        }, (inv.status || 'Draft') + '\n']
      }]
    }, {
      text: '\n'
    }, {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto', 'auto', 'auto'],
        body: tBody
      }
    }, inv.notes ? {
      text: '\nNotes: ' + inv.notes,
      margin: [0, 10, 0, 0],
      italics: true
    } : {
      text: ''
    }, {
      text: '\nThank you for your business!',
      alignment: 'center',
      margin: [0, 20, 0, 0],
      italics: true
    }],
    styles: {
      hdr: {
        fontSize: 22,
        bold: true,
        color: '#001f3f'
      },
      th: {
        bold: true,
        fontSize: 12,
        color: 'white',
        fillColor: '#001f3f'
      }
    },
    defaultStyle: {
      fontSize: 11
    }
  };
  pdfMake.createPdf(doc).download('Invoice-' + (inv.invoiceId || 'new') + '.pdf');
};
var savePdfToDriveHelper = function savePdfToDriveHelper(record) {
  var cur = record.currency || APP_CURRENCY;
  var fc = function fc(a) {
    return fmtCur(a, cur);
  };
  var items = function () {
    try {
      return JSON.parse(typeof record.items === 'string' ? record.items : '[]');
    } catch (e) {
      return [];
    }
  }();
  var roomItems = items.filter(function (i) {
    return i.type === 'room';
  });
  var actItems = items.filter(function (i) {
    return i.type === 'activity';
  });
  var svcItems = items.filter(function (i) {
    return i.type === 'service';
  });
  var tBody = [];
  if (roomItems.length > 0) {
    tBody.push([{
      text: 'Room Type',
      style: 'th'
    }, {
      text: 'Qty',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Nights',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Rate',
      style: 'th',
      alignment: 'right'
    }, {
      text: 'Amount',
      style: 'th',
      alignment: 'right'
    }]);
    roomItems.forEach(function (it) {
      return tBody.push([it.roomType || 'Room', {
        text: String(it.quantity || 1),
        alignment: 'center'
      }, {
        text: String(it.nights),
        alignment: 'center'
      }, {
        text: fc(it.rate),
        alignment: 'right'
      }, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  if (actItems.length > 0) {
    if (tBody.length > 0) tBody.push([{
      text: '',
      colSpan: 5,
      border: [false, false, false, false]
    }, {}, {}, {}, {}]);
    tBody.push([{
      text: 'Activity',
      style: 'th',
      colSpan: 2
    }, {}, {
      text: 'Pax',
      style: 'th',
      alignment: 'center'
    }, {
      text: 'Rate',
      style: 'th',
      alignment: 'right'
    }, {
      text: 'Amount',
      style: 'th',
      alignment: 'right'
    }]);
    actItems.forEach(function (it) {
      return tBody.push([{
        text: it.description || 'Activity',
        colSpan: 2
      }, {}, {
        text: String(it.pax || 1),
        alignment: 'center'
      }, {
        text: fc(it.rate),
        alignment: 'right'
      }, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  if (svcItems.length > 0) {
    if (tBody.length > 0) tBody.push([{
      text: '',
      colSpan: 5,
      border: [false, false, false, false]
    }, {}, {}, {}, {}]);
    tBody.push([{
      text: 'Service',
      style: 'th',
      colSpan: 4
    }, {}, {}, {}, {
      text: 'Amount',
      style: 'th',
      alignment: 'right'
    }]);
    svcItems.forEach(function (it) {
      return tBody.push([{
        text: it.description || 'Service',
        colSpan: 4
      }, {}, {}, {}, {
        text: fc(it.amount),
        alignment: 'right'
      }]);
    });
  }
  tBody.push([{
    text: 'Subtotal',
    bold: true,
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(record.subTotal),
    alignment: 'right',
    bold: true
  }]);
  if (record.discount > 0) tBody.push([{
    text: 'Discount',
    colSpan: 4
  }, {}, {}, {}, {
    text: '- ' + fc(record.discount),
    alignment: 'right'
  }]);
  if (record.gstEnabled) tBody.push([{
    text: 'GST (' + record.gstPercent + '%)',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(record.gstAmount),
    alignment: 'right'
  }]);
  if (record.greenTaxEnabled) tBody.push([{
    text: 'Green Tax',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(record.greenTaxAmount),
    alignment: 'right'
  }]);
  tBody.push([{
    text: 'TOTAL',
    bold: true,
    fillColor: '#f0f0f0',
    colSpan: 4
  }, {}, {}, {}, {
    text: fc(record.totalAmount),
    bold: true,
    alignment: 'right',
    fillColor: '#f0f0f0'
  }]);
  var id = record.invoiceId;
  var title = 'INVOICE';
  var doc = {
    content: [{
      text: 'MRI HOTEL - ' + title,
      style: 'hdr',
      alignment: 'center'
    }, {
      text: '#' + id,
      alignment: 'center',
      color: '#666',
      margin: [0, 0, 0, 15]
    }, {
      columns: [{
        text: [{
          text: 'Guest: ',
          bold: true
        }, (record.guestName || '') + '\n', {
          text: 'Phone: ',
          bold: true
        }, (record.phone || '-') + '\n', {
          text: 'Email: ',
          bold: true
        }, record.email || '-']
      }, {
        text: [{
          text: 'Date: ',
          bold: true
        }, fmtDate(record.createdDate) + '\n', {
          text: 'Status: ',
          bold: true
        }, record.status || 'Draft']
      }]
    }, {
      text: '\n'
    }, {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto', 'auto', 'auto'],
        body: tBody
      }
    }, record.notes ? {
      text: '\nNotes: ' + record.notes,
      margin: [0, 10, 0, 0],
      italics: true
    } : {
      text: ''
    }],
    styles: {
      hdr: {
        fontSize: 22,
        bold: true,
        color: '#001f3f'
      },
      th: {
        bold: true,
        fontSize: 12,
        color: 'white',
        fillColor: '#001f3f'
      }
    },
    defaultStyle: {
      fontSize: 11
    }
  };
  Swal.fire({
    title: 'Saving to Drive...',
    allowOutsideClick: false,
    didOpen: function didOpen() {
      return Swal.showLoading();
    }
  });
  pdfMake.createPdf(doc).getBase64(function (base64) {
    var fileName = title + '-' + id + '.pdf';
    google.script.run.withSuccessHandler(function (r) {
      Swal.close();
      if (r.success) Swal.fire({
        icon: 'success',
        title: 'Saved!',
        text: 'PDF saved to Google Drive.',
        timer: 2000,
        showConfirmButton: false
      });else Swal.fire({
        icon: 'error',
        title: 'Error',
        text: r.message
      });
    }).withFailureHandler(function (e) {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: e.message
      });
    }).savePdfToDrive(base64, fileName, id, 'invoice');
  });
};
function TableSkeleton(_ref) {
  var _ref$rows = _ref.rows,
    rows = _ref$rows === void 0 ? 5 : _ref$rows,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 6 : _ref$columns;
  return /*#__PURE__*/React.createElement("div", {
    className: "skeleton-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skeleton-table-row"
  }, _toConsumableArray(Array(columns)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "skeleton skeleton-table-cell",
      style: {
        flex: 1
      }
    });
  })), _toConsumableArray(Array(rows)).map(function (_, r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r,
      className: "skeleton-table-row"
    }, _toConsumableArray(Array(columns)).map(function (_, c) {
      return /*#__PURE__*/React.createElement("div", {
        key: c,
        className: "skeleton skeleton-table-cell",
        style: {
          flex: 1
        }
      });
    }));
  }));
}
function DashboardCardSkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "skeleton-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skeleton skeleton-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "skeleton skeleton-text-large",
    style: {
      width: '60%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "skeleton skeleton-text",
    style: {
      width: '80%'
    }
  }));
}
function ChartSkeleton() {
  return /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skeleton skeleton-chart"
  }));
}
function SearchableSelect(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    options = _ref2.options,
    placeholder = _ref2.placeholder,
    className = _ref2.className,
    required = _ref2.required,
    disabled = _ref2.disabled;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    search = _useState4[0],
    setSearch = _useState4[1];
  var wrapperRef = useRef(null);
  var searchRef = useRef(null);
  var normalized = (options || []).map(function (o) {
    var _o$value, _o$label;
    return {
      value: String((_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : ''),
      label: String((_o$label = o.label) !== null && _o$label !== void 0 ? _o$label : '')
    };
  });
  var selected = normalized.find(function (o) {
    return o.value === String(value !== null && value !== void 0 ? value : '');
  });
  var filtered = search.trim() ? normalized.filter(function (o) {
    return o.label.toLowerCase().includes(search.toLowerCase());
  }) : normalized;
  useEffect(function () {
    if (!isOpen) return;
    var handler = function handler(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, [isOpen]);
  useEffect(function () {
    if (isOpen && searchRef.current) searchRef.current.focus();
  }, [isOpen]);
  var toggle = function toggle() {
    if (!disabled) {
      setIsOpen(function (o) {
        return !o;
      });
      setSearch('');
    }
  };
  var pick = function pick(val) {
    onChange(val);
    setIsOpen(false);
    setSearch('');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'ss-wrapper' + (className ? ' ' + className : ''),
    ref: wrapperRef
  }, /*#__PURE__*/React.createElement("div", {
    className: 'ss-control' + (isOpen ? ' open' : '') + (disabled ? ' disabled' : ''),
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    className: 'ss-value' + (selected ? '' : ' placeholder')
  }, selected ? selected.label : placeholder || 'Select...'), /*#__PURE__*/React.createElement("i", {
    className: 'fas fa-chevron-down ss-arrow'
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    className: "ss-dropdown"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ss-search-wrapper"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search ss-search-icon"
  }), /*#__PURE__*/React.createElement("input", {
    ref: searchRef,
    type: "text",
    className: "ss-search-input",
    placeholder: "Search...",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), search && /*#__PURE__*/React.createElement("button", {
    className: "ss-search-clear",
    onClick: function onClick(e) {
      e.stopPropagation();
      setSearch('');
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ss-options-list"
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "ss-no-results"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search"
  }), " No results") : filtered.map(function (o) {
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      className: 'ss-option' + (o.value === String(value !== null && value !== void 0 ? value : '') ? ' selected' : ''),
      onClick: function onClick() {
        return pick(o.value);
      }
    }, o.value === String(value !== null && value !== void 0 ? value : '') && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check ss-check"
    }), o.label);
  }))));
}
function LoginPage(_ref3) {
  var onLogin = _ref3.onLogin;
  var _useState5 = useState('login'),
    _useState6 = _slicedToArray(_useState5, 2),
    view = _useState6[0],
    setView = _useState6[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "login-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-box"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Logo",
    className: "login-logo"
  }), /*#__PURE__*/React.createElement("h2", null, "Hill View Eco Retreat"), /*#__PURE__*/React.createElement(LoginForm, {
    onLogin: onLogin
  })));
}
function LoginForm(_ref4) {
  var onLogin = _ref4.onLogin;
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    u = _useState8[0],
    setU = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    p = _useState0[0],
    setP = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    err = _useState10[0],
    setErr = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    ld = _useState12[0],
    setLd = _useState12[1];
  var submit = function submit(e) {
    e.preventDefault();
    setLd(true);
    setErr('');
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r.success) onLogin(r.username, r.role);else setErr(r.message);
    }).withFailureHandler(function (e) {
      setLd(false);
      setErr('Connection error: ' + e.message);
    }).checkLogin(u, p);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Username"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: u,
    onChange: function onChange(e) {
      return setU(e.target.value);
    },
    required: true,
    placeholder: "Enter your email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: p,
    onChange: function onChange(e) {
      return setP(e.target.value);
    },
    required: true,
    placeholder: "Enter your password"
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: ld,
    style: {
      width: '100%'
    }
  }, ld ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Logging in...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-in-alt"
  }), " Login")), err && /*#__PURE__*/React.createElement("div", {
    className: "error"
  }, err));
}
function Sidebar(_ref5) {
  var activeMenu = _ref5.activeMenu,
    setActiveMenu = _ref5.setActiveMenu,
    role = _ref5.role,
    user = _ref5.user,
    onLogout = _ref5.onLogout,
    isOpen = _ref5.isOpen,
    setIsOpen = _ref5.setIsOpen;
  var adm = role === 'admin';
  var items = [{
    k: 'dashboard',
    i: 'fa-chart-line',
    l: 'Dashboard',
    a: true
  }, {
    k: 'bookings',
    i: 'fa-calendar-check',
    l: 'Bookings',
    a: false
  }, {
    k: 'calendar',
    i: 'fa-calendar-alt',
    l: 'Calendar',
    a: false
  }, {
    k: 'checkin',
    i: 'fa-door-open',
    l: 'Check-In',
    a: true
  }, {
    k: 'checkout',
    i: 'fa-sign-out-alt',
    l: 'Checkout',
    a: true
  }, {
    k: 'restaurant',
    i: 'fa-utensils',
    l: 'Restaurant',
    a: true
  }, {
    k: 'rooms',
    i: 'fa-bed',
    l: 'Rooms',
    a: true
  }, {
    k: 'invoices',
    i: 'fa-file-invoice-dollar',
    l: 'Invoices',
    a: true
  }, {
    k: 'finance',
    i: 'fa-coins',
    l: 'Finance',
    a: true
  }, {
    k: 'reports',
    i: 'fa-chart-bar',
    l: 'Reports',
    a: true
  }, {
    k: 'users',
    i: 'fa-users',
    l: 'Users',
    a: true
  }, {
    k: 'customers',
    i: 'fa-address-book',
    l: 'Customers',
    a: true
  }, {
    k: 'settings',
    i: 'fa-cog',
    l: 'Settings',
    a: true
  }, {
    k: 'account',
    i: 'fa-user-circle',
    l: 'My Account',
    a: false
  }, {
    k: 'about',
    i: 'fa-info-circle',
    l: 'About App',
    a: false
  }];
  var click = function click(k) {
    setActiveMenu(k);
    setIsOpen(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-overlay ".concat(isOpen ? 'open' : ''),
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "sidebar ".concat(isOpen ? 'open' : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'white',
      fontSize: '20px',
      fontWeight: '700'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-hotel"
  }), " Hill View Eco Retreat")), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-user-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-user-name"
  }, user), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-user-role"
  }, role)), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-menu-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidebar-menu-title"
  }, "Navigation"), /*#__PURE__*/React.createElement("ul", {
    className: "sidebar-menu"
  }, items.filter(function (m) {
    return adm || !m.a;
  }).map(function (m) {
    return /*#__PURE__*/React.createElement("li", {
      key: m.k
    }, /*#__PURE__*/React.createElement("button", {
      className: activeMenu === m.k ? 'active' : '',
      onClick: function onClick() {
        return click(m.k);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(m.i)
    }), /*#__PURE__*/React.createElement("span", null, m.l)));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sidebar-logout"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogout
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-out-alt"
  }), /*#__PURE__*/React.createElement("span", null, "Logout")))));
}
function DashboardView(_ref6) {
  var user = _ref6.user;
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    ld = _useState14[0],
    setLd = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    st = _useState16[0],
    setSt = _useState16[1];
  var cr = useRef({});
  var fmtDShort = function fmtDShort(dt) {
    if (!dt) return '-';
    var dd = new Date(dt);
    return dd.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short'
    });
  };
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r.error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: r.error
        });
        return;
      }
      if (r.defaultCurrency) APP_CURRENCY = r.defaultCurrency;
      setSt(r);
      setTimeout(function () {
        return charts(r);
      }, 200);
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: e.message
      });
    }).getDashboardData();
    return function () {
      Object.values(cr.current).forEach(function (c) {
        if (c) c.destroy();
      });
    };
  }, []);
  var charts = function charts(d) {
    Object.values(cr.current).forEach(function (c) {
      if (c) c.destroy();
    });
    cr.current = {};
    var palette = ['#001f3f', '#0074D9', '#34a853', '#fbbc04', '#ea4335', '#6f42c1', '#20c997', '#e67e22', '#3498db', '#9b59b6'];

    // 1. Invoice Status Doughnut
    var c5 = document.getElementById('invStatusChart');
    if (c5) {
      var iv = d.invoiceStats || {};
      cr.current.is = new Chart(c5, {
        type: 'doughnut',
        data: {
          labels: ['Draft', 'Sent', 'Paid', 'Overdue', 'Cancelled'],
          datasets: [{
            data: [iv.draftInvoices || 0, iv.sentInvoices || 0, iv.paidInvoices || 0, iv.overdueInvoices || 0, iv.cancelledInvoices || 0],
            backgroundColor: ['#6c757d', '#006d6f', '#00a89d', '#f39c12', '#d35400'],
            borderColor: '#fff',
            borderWidth: 2,
            hoverOffset: 10
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#333',
                padding: 12,
                usePointStyle: true
              }
            },
            title: {
              display: true,
              text: 'Invoice Status',
              color: '#001f3f',
              font: {
                size: 16,
                weight: 'bold'
              }
            }
          }
        }
      });
    }
  };
  if (ld) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kpi-cards"
  }, _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "skeleton",
      style: {
        height: '130px',
        borderRadius: '8px'
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid-9"
  }, _toConsumableArray(Array(9)).map(function (_, i) {
    return /*#__PURE__*/React.createElement(DashboardCardSkeleton, {
      key: i
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-split"
  }, /*#__PURE__*/React.createElement(ChartSkeleton, null), /*#__PURE__*/React.createElement("div", {
    className: "skeleton",
    style: {
      height: '380px',
      borderRadius: '4px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid-2"
  }, /*#__PURE__*/React.createElement(ChartSkeleton, null), /*#__PURE__*/React.createElement(ChartSkeleton, null), /*#__PURE__*/React.createElement(ChartSkeleton, null), /*#__PURE__*/React.createElement(ChartSkeleton, null)));
  var f = (st === null || st === void 0 ? void 0 : st.financeSummary) || {};
  var b = (st === null || st === void 0 ? void 0 : st.bookingRevenue) || {};
  var inv = (st === null || st === void 0 ? void 0 : st.invoiceStats) || {};
  var bdg = (st === null || st === void 0 ? void 0 : st.currentBudget) || null;
  var rb = (st === null || st === void 0 ? void 0 : st.recentBookings) || [];
  var occRate = (st === null || st === void 0 ? void 0 : st.totalRooms) > 0 ? Math.round((st === null || st === void 0 ? void 0 : st.bookedRooms) / (st === null || st === void 0 ? void 0 : st.totalRooms) * 100) : 0;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kpi-cards"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi-card c-navy"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-money-bill-wave kpi-card-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-title"
  }, "Total Revenue"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-value"
  }, fmtCur(b.totalRevenue)), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-sub"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-check"
  }), " ", b.totalBookings || 0, " total bookings")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card c-teal"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bed kpi-card-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-title"
  }, "Active Bookings"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-value"
  }, b.activeBookingCount || 0), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-sub"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sign-out-alt"
  }), " ", b.checkedOutCount || 0, " checked out")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card c-green"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-wallet kpi-card-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-title"
  }, "Net Balance"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-value"
  }, fmtCur(f.netBalance)), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-sub"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-up"
  }), " ", fmtCur(f.totalIncome), " income")), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card c-orange"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-pie kpi-card-icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-title"
  }, "Occupancy Rate"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-value"
  }, occRate, "%"), /*#__PURE__*/React.createElement("div", {
    className: "kpi-card-sub"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  }), " ", (st === null || st === void 0 ? void 0 : st.bookedRooms) || 0, " of ", (st === null || st === void 0 ? void 0 : st.totalRooms) || 0, " rooms"))), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, (st === null || st === void 0 ? void 0 : st.totalRooms) || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Total Rooms")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card accent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bed"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, (st === null || st === void 0 ? void 0 : st.bookedRooms) || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Booked")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, (st === null || st === void 0 ? void 0 : st.availableRooms) || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Available")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card warning"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tools"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, (st === null || st === void 0 ? void 0 : st.maintenanceRooms) || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Maintenance")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card purple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clock"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, (st === null || st === void 0 ? void 0 : st.reservedRooms) || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Reserved")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, inv.totalInvoices || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Invoices")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-double"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, inv.paidInvoices || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Paid")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card red"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, inv.overdueInvoices || 0), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Overdue"))), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-split",
    style: {
      gridTemplateColumns: '2fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 15px 0',
      color: '#001f3f'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-th-large"
  }), " Room Occupancy Map"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
      gap: '10px'
    }
  }, ((st === null || st === void 0 ? void 0 : st.allRoomsDetails) || []).map(function (rm) {
    var bg = '#34a853'; // Available
    if (rm.status === 'Booked') bg = '#0074D9';
    if (rm.status === 'Maintenance') bg = '#fbbc04';
    if (rm.status === 'Reserved') bg = '#6f42c1';
    return /*#__PURE__*/React.createElement("div", {
      key: rm.roomNo,
      style: {
        background: bg,
        color: '#fff',
        padding: '12px 8px',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '90px',
        gap: '4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '18px',
        fontWeight: 'bold'
      }
    }, rm.roomNo), rm.guestName ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%'
      },
      title: rm.guestName
    }, rm.guestName), rm.checkIn && rm.checkOut && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        opacity: 0.9,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      title: "".concat(fmtDShort(rm.checkIn), " - ").concat(fmtDShort(rm.checkOut))
    }, fmtDShort(rm.checkIn), " - ", fmtDShort(rm.checkOut))) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        opacity: 0.9,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      title: rm.status
    }, rm.status));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      display: 'flex',
      gap: '15px',
      fontSize: '12px',
      color: '#666'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      background: '#34a853',
      borderRadius: '2px'
    }
  }), " Available"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      background: '#0074D9',
      borderRadius: '2px'
    }
  }), " Booked / Checked In"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      background: '#6f42c1',
      borderRadius: '2px'
    }
  }), " Reserved"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      background: '#fbbc04',
      borderRadius: '2px'
    }
  }), " Maintenance"))), /*#__PURE__*/React.createElement("div", {
    className: "dash-table-card"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clock"
  }), " Recent Bookings"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "dash-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Guest"), /*#__PURE__*/React.createElement("th", null, "Room"), /*#__PURE__*/React.createElement("th", null, "Amount"))), /*#__PURE__*/React.createElement("tbody", null, rb.length > 0 ? rb.map(function (r, i) {
    var avatarColors = ['#0074D9', '#34a853', '#6f42c1', '#e67e22', '#ea4335', '#006d6f', '#d35400', '#3498db', '#9b59b6', '#20c997'];
    var initials = (r.guestName || '?').split(' ').map(function (w) {
      return w[0];
    }).join('').substring(0, 2).toUpperCase();
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600,
        color: '#333'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "guest-avatar",
      style: {
        background: avatarColors[i % avatarColors.length]
      }
    }, initials), r.guestName)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "room-badge"
    }, "#", r.roomNo)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 600,
        color: 'var(--navy-primary)'
      }
    }, fmtCur(r.totalAmount)));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3",
    style: {
      textAlign: 'center',
      color: '#999',
      padding: '30px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-inbox",
    style: {
      fontSize: '24px',
      display: 'block',
      marginBottom: '8px',
      color: '#ccc'
    }
  }), "No bookings yet"))))))), /*#__PURE__*/React.createElement("div", {
    className: "dashboard-grid-2",
    style: {
      gridTemplateColumns: '1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-container"
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "invStatusChart"
  })))));
}
function RoomModal(_ref7) {
  var room = _ref7.room,
    onClose = _ref7.onClose,
    onSave = _ref7.onSave;
  var _useState17 = useState({
      roomNo: (room === null || room === void 0 ? void 0 : room.roomNo) || '',
      roomType: (room === null || room === void 0 ? void 0 : room.roomType) || 'Standard',
      roomRate: (room === null || room === void 0 ? void 0 : room.roomRate) || '',
      roomStatus: (room === null || room === void 0 ? void 0 : room.roomStatus) || 'Available'
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    fd = _useState18[0],
    setFd = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    sv = _useState20[0],
    setSv = _useState20[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  }), " ", room ? 'Edit' : 'Add', " Room"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setSv(true);
      onSave(fd);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Room No *"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: fd.roomNo,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        roomNo: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Type"), /*#__PURE__*/React.createElement("select", {
    value: fd.roomType,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        roomType: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", null, "Standard"), /*#__PURE__*/React.createElement("option", null, "Deluxe"), /*#__PURE__*/React.createElement("option", null, "Suite"), /*#__PURE__*/React.createElement("option", null, "Family"), /*#__PURE__*/React.createElement("option", null, "Single"), /*#__PURE__*/React.createElement("option", null, "Double"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, 'Rate/Night (' + APP_CURRENCY + ') *'), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: fd.roomRate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        roomRate: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Status"), /*#__PURE__*/React.createElement("select", {
    value: fd.roomStatus,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        roomStatus: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", null, "Available"), /*#__PURE__*/React.createElement("option", null, "Booked"), /*#__PURE__*/React.createElement("option", null, "Reserved"), /*#__PURE__*/React.createElement("option", null, "Maintenance")))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function RoomsView(_ref8) {
  var user = _ref8.user;
  var _useState21 = useState(true),
    _useState22 = _slicedToArray(_useState21, 2),
    ld = _useState22[0],
    setLd = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    show = _useState24[0],
    setShow = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    edit = _useState26[0],
    setEdit = _useState26[1];
  var tRef = useRef(null);
  var _useState27 = useState({
      roomType: '',
      roomStatus: ''
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    filters = _useState28[0],
    setFilters = _useState28[1];
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r && r.error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: r.error
        });
        return;
      }
      initT(Array.isArray(r) ? r : []);
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: e.message
      });
    }).getAllRooms();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#roomsT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#roomsT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'roomNo',
            title: 'Room No'
          }, {
            data: 'roomType',
            title: 'Type'
          }, {
            data: 'roomRate',
            title: 'Rate/Night',
            render: function render(d) {
              return fmtCur(d);
            }
          }, {
            data: 'roomStatus',
            title: 'Status',
            render: function render(d) {
              return "<span class=\"status-badge ".concat(statusCls(d), "\">").concat(d, "</span>");
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render() {
              return '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'asc']]
        });
        $('#roomsT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEdit(rd);
            setShow(true);
          } else delRoom(rd);
        });
        tRef.current = t;
      } catch (e) {
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }
    }, 150);
  };
  useEffect(function () {
    if (!tRef.current) return;
    if (filters.roomType) tRef.current.column(1).search('^' + filters.roomType + '$', true, false);else tRef.current.column(1).search('');
    if (filters.roomStatus) tRef.current.column(3).search('^' + filters.roomStatus + '$', true, false);else tRef.current.column(3).search('');
    tRef.current.draw();
  }, [filters]);
  var clearF = function clearF() {
    setFilters({
      roomType: '',
      roomStatus: ''
    });
    if (tRef.current) {
      tRef.current.columns().search('').draw();
    }
  };
  var delRoom = function delRoom(rm) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete Room?',
      text: 'Delete room #' + rm.roomNo + '?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setEdit(null);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteRoom(rm.rowIndex);
    });
  };
  var save = function save(d) {
    if (edit) {
      google.script.run.withSuccessHandler(function (r) {
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setEdit(null);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateRoom(edit.rowIndex, d.roomNo, d.roomType, d.roomRate, d.roomStatus);
    } else {
      google.script.run.withSuccessHandler(function (r) {
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addRoom(d.roomNo, d.roomType, d.roomRate, d.roomStatus);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  }), " Rooms"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEdit(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add Room")), !ld && /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: clearF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle"
  }), " Clear All")), /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bed"
  }), " Room Type"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.roomType,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        roomType: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All Types"), /*#__PURE__*/React.createElement("option", null, "Standard"), /*#__PURE__*/React.createElement("option", null, "Deluxe"), /*#__PURE__*/React.createElement("option", null, "Suite"), /*#__PURE__*/React.createElement("option", null, "Family"), /*#__PURE__*/React.createElement("option", null, "Single"), /*#__PURE__*/React.createElement("option", null, "Double"))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle"
  }), " Status"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.roomStatus,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        roomStatus: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All Status"), /*#__PURE__*/React.createElement("option", null, "Available"), /*#__PURE__*/React.createElement("option", null, "Booked"), /*#__PURE__*/React.createElement("option", null, "Reserved"), /*#__PURE__*/React.createElement("option", null, "Maintenance"))))), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 6,
    columns: 5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "roomsT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(RoomModal, {
    room: edit,
    onClose: function onClose() {
      setShow(false);
      setEdit(null);
    },
    onSave: save
  }));
}
function CustomerModal(_ref9) {
  var customer = _ref9.customer,
    onClose = _ref9.onClose,
    onSave = _ref9.onSave;
  var isEdit = !!customer;
  var _useState29 = useState({
      name: (customer === null || customer === void 0 ? void 0 : customer.name) || '',
      phone: (customer === null || customer === void 0 ? void 0 : customer.phone) || '',
      email: (customer === null || customer === void 0 ? void 0 : customer.email) || '',
      city: (customer === null || customer === void 0 ? void 0 : customer.city) || '',
      maritalStatus: (customer === null || customer === void 0 ? void 0 : customer.maritalStatus) || '',
      notes: (customer === null || customer === void 0 ? void 0 : customer.notes) || ''
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    fd = _useState30[0],
    setFd = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    sv = _useState32[0],
    setSv = _useState32[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-plus"
  }), " ", isEdit ? 'Edit' : 'Add', " Customer"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setSv(true);
      onSave(fd);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Name *"), /*#__PURE__*/React.createElement("input", {
    value: fd.name,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        name: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    value: fd.phone,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        phone: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: fd.email,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        email: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "City"), /*#__PURE__*/React.createElement("input", {
    value: fd.city,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        city: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Marital Status"), /*#__PURE__*/React.createElement("select", {
    value: fd.maritalStatus,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        maritalStatus: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "--"), /*#__PURE__*/React.createElement("option", null, "Single"), /*#__PURE__*/React.createElement("option", null, "Married"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group full-width"
  }, /*#__PURE__*/React.createElement("label", null, "Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: fd.notes,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        notes: e.target.value
      }));
    },
    rows: "2"
  }))), !isEdit && fd.email && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'var(--navy-accent)',
      margin: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-info-circle"
  }), " A login account will be auto-created for this email."), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function CustomersView(_ref0) {
  var user = _ref0.user;
  var _useState33 = useState(true),
    _useState34 = _slicedToArray(_useState33, 2),
    ld = _useState34[0],
    setLd = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    show = _useState36[0],
    setShow = _useState36[1];
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    edit = _useState38[0],
    setEdit = _useState38[1];
  var tRef = useRef(null);
  var _useState39 = useState({
      city: '',
      maritalStatus: ''
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    filters = _useState40[0],
    setFilters = _useState40[1];
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    cities = _useState42[0],
    setCities = _useState42[1];
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  useEffect(function () {
    if (!tRef.current) return;
    if (filters.city) tRef.current.column(4).search('^' + filters.city + '$', true, false);else tRef.current.column(4).search('');
    if (filters.maritalStatus) tRef.current.column(5).search('^' + filters.maritalStatus + '$', true, false);else tRef.current.column(5).search('');
    tRef.current.draw();
  }, [filters]);
  var clearF = function clearF() {
    setFilters({
      city: '',
      maritalStatus: ''
    });
    if (tRef.current) {
      tRef.current.columns().search('').draw();
    }
  };
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r && r.error) {
        Swal.fire({
          icon: 'error',
          text: r.error
        });
        return;
      }
      var arr = Array.isArray(r) ? r : [];
      var uCities = _toConsumableArray(new Set(arr.map(function (c) {
        return c.city;
      }).filter(Boolean))).sort();
      setCities(uCities);
      initT(arr);
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllCustomers();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#custT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#custT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'customerId',
            title: 'ID'
          }, {
            data: 'name',
            title: 'Name'
          }, {
            data: 'phone',
            title: 'Phone'
          }, {
            data: 'email',
            title: 'Email'
          }, {
            data: 'city',
            title: 'City'
          }, {
            data: 'maritalStatus',
            title: 'Status'
          }, {
            data: 'linkedUsername',
            title: 'Account',
            render: function render(d) {
              return d ? '<span style="color:var(--success)"><i class="fas fa-check-circle"></i> ' + d + '</span>' : '<span style="color:#999">-</span>';
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            render: function render() {
              return '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'desc']]
        });
        $('#custT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEdit(rd);
            setShow(true);
          } else delCust(rd);
        });
        tRef.current = t;
      } catch (e) {
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }
    }, 150);
  };
  var delCust = function delCust(c) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete Customer?',
      text: 'Delete ' + c.name + '?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setEdit(null);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteCustomer(c.rowIndex);
    });
  };
  var save = function save(d) {
    if (edit) {
      google.script.run.withSuccessHandler(function (r) {
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setEdit(null);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateCustomer(edit.rowIndex, d);
    } else {
      google.script.run.withSuccessHandler(function (r) {
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          setShow(false);
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addCustomer(d);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-address-book"
  }), " Customers"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEdit(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add Customer")), !ld && /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: clearF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle"
  }), " Clear All")), /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-city"
  }), " City"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.city,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        city: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All Cities"), cities.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-heart"
  }), " Marital Status"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.maritalStatus,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        maritalStatus: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/React.createElement("option", null, "Single"), /*#__PURE__*/React.createElement("option", null, "Married"))))), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 6,
    columns: 7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "custT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(CustomerModal, {
    customer: edit,
    onClose: function onClose() {
      setShow(false);
      setEdit(null);
    },
    onSave: save
  }));
}
function BookingModal(_ref1) {
  var rooms = _ref1.rooms,
    booking = _ref1.booking,
    onClose = _ref1.onClose,
    onBooked = _ref1.onBooked,
    role = _ref1.role,
    _ref1$allBookings = _ref1.allBookings,
    allBookings = _ref1$allBookings === void 0 ? [] : _ref1$allBookings,
    _ref1$allCheckIns = _ref1.allCheckIns,
    allCheckIns = _ref1$allCheckIns === void 0 ? [] : _ref1$allCheckIns;
  var isEdit = !!booking;
  var isAdmin = role === 'admin';
  // If editing, parsing is tricky if the format changed. We will support both room numbers and types.
  var parsedEditRoomNos = isEdit ? (booking.roomNo || '').split(',').map(function (r) {
    return r.trim();
  }).filter(function (r) {
    return r;
  }) : [];
  var _useState43 = useState(isEdit ? parsedEditRoomNos.reduce(function (acc, rm) {
      var match = rm.match(/(.+?)(?:\s*\((\d+)\))?$/);
      if (match) {
        acc[match[1].trim()] = parseInt(match[2] || 1, 10);
      } else {
        acc[rm] = 1;
      }
      return acc;
    }, {}) : {}),
    _useState44 = _slicedToArray(_useState43, 2),
    selectedRoomsByType = _useState44[0],
    setSelectedRoomsByType = _useState44[1];
  var _useState45 = useState(isEdit ? parsedEditRoomNos.reduce(function (acc, rm) {
      var _rooms$find;
      var match = rm.match(/(.+?)(?:\s*\(\d+\))?$/);
      var type = match ? match[1].trim() : rm;
      if (booking.roomRate && ((_rooms$find = rooms.find(function (r) {
        return r.roomType === type;
      })) === null || _rooms$find === void 0 ? void 0 : _rooms$find.roomRate) !== booking.roomRate) {
        acc[type] = booking.roomRate;
      }
      return acc;
    }, {}) : {}),
    _useState46 = _slicedToArray(_useState45, 2),
    customRates = _useState46[0],
    setCustomRates = _useState46[1];
  var _useState47 = useState({
      guestName: (booking === null || booking === void 0 ? void 0 : booking.guestName) || '',
      phone: (booking === null || booking === void 0 ? void 0 : booking.phone) || '',
      email: (booking === null || booking === void 0 ? void 0 : booking.email) || '',
      checkIn: booking !== null && booking !== void 0 && booking.checkIn ? booking.checkIn.slice(0, 10) : '',
      checkOut: booking !== null && booking !== void 0 && booking.checkOut ? booking.checkOut.slice(0, 10) : '',
      checkInTime: (booking === null || booking === void 0 ? void 0 : booking.checkInTime) || '14:00',
      checkOutTime: (booking === null || booking === void 0 ? void 0 : booking.checkOutTime) || '12:00',
      advancePaid: (booking === null || booking === void 0 ? void 0 : booking.advancePaid) || '0',
      paymentMethod: (booking === null || booking === void 0 ? void 0 : booking.paymentMethod) || '',
      foodPlan: (booking === null || booking === void 0 ? void 0 : booking.foodPlan) || 'None',
      discountPercent: (booking === null || booking === void 0 ? void 0 : booking.discountPercent) || '0',
      gstType: (booking === null || booking === void 0 ? void 0 : booking.gstType) || 'Excluding',
      extraPerson: (booking === null || booking === void 0 ? void 0 : booking.extraPerson) || '0'
    }),
    _useState48 = _slicedToArray(_useState47, 2),
    fd = _useState48[0],
    setFd = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    sv = _useState50[0],
    setSv = _useState50[1];
  var _useState51 = useState([]),
    _useState52 = _slicedToArray(_useState51, 2),
    customers = _useState52[0],
    setCustomers = _useState52[1];
  var _useState53 = useState(''),
    _useState54 = _slicedToArray(_useState53, 2),
    selCust = _useState54[0],
    setSelCust = _useState54[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setCustomers(Array.isArray(r) ? r : []);
    }).withFailureHandler(function () {}).getAllCustomers();
  }, []);
  var pickCustomer = function pickCustomer(val) {
    setSelCust(val);
    if (val) {
      var c = customers.find(function (x) {
        return x.customerId === val;
      });
      if (c) setFd(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          guestName: c.name || p.guestName,
          phone: c.phone || p.phone,
          email: c.email || p.email
        });
      });
    }
  };

  // Calculate dynamic availability
  var getAvailByType = function getAvailByType() {
    if (!fd.checkIn || !fd.checkOut) return [];
    var ci = new Date(fd.checkIn);
    var co = new Date(fd.checkOut);
    if (isNaN(ci) || isNaN(co) || co <= ci) return [];

    // 1. Total rooms by type
    var totals = rooms.reduce(function (acc, r) {
      var status = (r.roomStatus || '').toLowerCase();
      if (status !== 'maintenance' && status !== 'reserved') {
        acc[r.roomType] = (acc[r.roomType] || 0) + 1;
      }
      return acc;
    }, {});

    // 2. Count overlapping bookings
    var overlaps = {};
    var overlappingBks = allBookings.filter(function (b) {
      if (b.status === 'Cancelled' || b.status === 'Checked Out') return false;
      if (isEdit && b.ticketId === booking.ticketId) return false;
      var bCi = new Date(b.checkIn);
      var bCo = new Date(b.checkOut);
      return ci < bCo && co > bCi;
    });
    overlappingBks.forEach(function (b) {
      var rNos = (b.roomNo || '').split(',').map(function (r) {
        return r.trim();
      }).filter(function (r) {
        return r;
      });
      rNos.forEach(function (rn) {
        var match = rn.match(/(.+?)(?:\s*\((\d+)\))?$/);
        if (match) {
          var type = match[1].trim();
          var qty = parseInt(match[2] || 1, 10);
          var physRoom = rooms.find(function (r) {
            return r.roomNo.toString() === type;
          });
          if (physRoom) type = physRoom.roomType;
          overlaps[type] = (overlaps[type] || 0) + qty;
        }
      });
    });

    // 3. Count active check-ins (since they hold physical rooms)
    allCheckIns.filter(function (ci) {
      return ci.status === 'Active';
    }).forEach(function (c) {
      var rNos = (c.roomNumbers || '').split(',').map(function (r) {
        return r.trim();
      }).filter(function (r) {
        return r;
      });
      rNos.forEach(function (rn) {
        var roomObj = rooms.find(function (rx) {
          return rx.roomNo === rn;
        });
        if (roomObj) overlaps[roomObj.roomType] = (overlaps[roomObj.roomType] || 0) + 1;
      });
    });
    return Object.keys(totals).map(function (type) {
      var _rooms$find2;
      var t = totals[type];
      var o = overlaps[type] || 0;
      var rate = ((_rooms$find2 = rooms.find(function (r) {
        return r.roomType === type;
      })) === null || _rooms$find2 === void 0 ? void 0 : _rooms$find2.roomRate) || 0;
      return {
        type: type,
        available: Math.max(0, t - o),
        rate: rate
      };
    });
  };
  var availByType = getAvailByType();
  var setRoomTypeQty = function setRoomTypeQty(type, qty) {
    qty = parseInt(qty, 10) || 0;
    setSelectedRoomsByType(function (prev) {
      var next = _objectSpread({}, prev);
      if (qty <= 0) delete next[type];else next[type] = qty;
      return next;
    });
  };
  var handleCustomRate = function handleCustomRate(type, val) {
    setCustomRates(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, type, val));
    });
  };
  var selectedCount = Object.values(selectedRoomsByType).reduce(function (a, b) {
    return a + b;
  }, 0);
  var combinedRate = Object.entries(selectedRoomsByType).reduce(function (sum, _ref10) {
    var _rooms$find3;
    var _ref11 = _slicedToArray(_ref10, 2),
      type = _ref11[0],
      qty = _ref11[1];
    var standardRate = ((_rooms$find3 = rooms.find(function (r) {
      return r.roomType === type;
    })) === null || _rooms$find3 === void 0 ? void 0 : _rooms$find3.roomRate) || 0;
    var cRate = customRates[type];
    var effectiveRate = cRate && !isNaN(parseFloat(cRate)) ? parseFloat(cRate) : standardRate;
    return sum + effectiveRate * qty;
  }, 0);
  var editRate = combinedRate;
  var submit = function submit(e) {
    e.preventDefault();
    if (selectedCount === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Please select at least one room'
      });
      return;
    }
    setSv(true);
    var roomNosStr = Object.entries(selectedRoomsByType).map(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
        type = _ref13[0],
        qty = _ref13[1];
      return "".concat(type, " (").concat(qty, ")");
    }).join(', ');
    var calcTotals = calcTotal();
    var payload = _objectSpread(_objectSpread({}, fd), {}, {
      roomNos: roomNosStr,
      roomRate: combinedRate / selectedCount,
      totalAmount: (calcTotals === null || calcTotals === void 0 ? void 0 : calcTotals.total) || 0,
      tax: (calcTotals === null || calcTotals === void 0 ? void 0 : calcTotals.tax) || 0
    });
    if (isEdit) {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2500,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onBooked, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (err) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: err.message
        });
      }).updateBooking(booking.rowIndex, payload);
    } else {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2500,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onBooked, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (err) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: err.message
        });
      }).bookRoom(payload);
    }
  };
  var calcTotal = function calcTotal() {
    if (!fd.checkIn || !fd.checkOut) return null;
    var ci = new Date(fd.checkIn);
    var co = new Date(fd.checkOut);
    if (isNaN(ci) || isNaN(co) || co <= ci) return null;
    var n = Math.ceil((co - ci) / (1000 * 3600 * 24));
    if (n < 1) n = 1;
    var base = combinedRate * n;
    var d = (parseFloat(fd.discountPercent) || 0) * base / 100;
    var sub = base - d;
    var t = 0;
    if (fd.gstType === 'Including') {
      t = sub - sub / (1 + 0.16);
    } else if (fd.gstType === 'Excluding') {
      t = sub * 0.16;
    }
    return {
      nights: n,
      base: base,
      disc: d,
      tax: t,
      total: fd.gstType === 'Excluding' ? sub + t : sub
    };
  };
  var ct = calcTotal();
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal modal-wide",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(isEdit ? 'fa-edit' : 'fa-calendar-plus')
  }), " ", isEdit ? 'Edit' : 'New Advance', " Booking"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-in Date *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.checkIn,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkIn: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-in Time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: fd.checkInTime,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkInTime: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-out Date *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.checkOut,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkOut: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-out Time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: fd.checkOutTime,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkOutTime: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("hr", {
    style: {
      border: '0',
      borderTop: '1px solid #ddd'
    }
  }))), !isEdit && customers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-tag"
  }), " Select Customer"), /*#__PURE__*/React.createElement(SearchableSelect, {
    value: selCust,
    onChange: pickCustomer,
    options: [{
      value: '',
      label: '-- Manual Entry --'
    }].concat(_toConsumableArray(customers.map(function (c) {
      return {
        value: c.customerId,
        label: c.name + (c.email ? ' (' + c.email + ')' : '')
      };
    }))),
    placeholder: "Search customer..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Select Room Types *"), /*#__PURE__*/React.createElement("div", {
    className: "room-types-list"
  }, !fd.checkIn || !fd.checkOut ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#666'
    }
  }, "Select dates first.") : availByType.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#666'
    }
  }, "No rooms available.") : availByType.map(function (t) {
    return /*#__PURE__*/React.createElement("div", {
      key: t.type,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        marginBottom: '8px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t.type), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#666'
      }
    }, "Standard Rate: ", fmtCur(t.rate), "/night | Available: ", t.available)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px'
      }
    }, selectedRoomsByType[t.type] > 0 && /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.01",
      min: "0",
      placeholder: "Custom Rate (".concat(t.rate, ")"),
      value: customRates[t.type] || '',
      onChange: function onChange(e) {
        return handleCustomRate(t.type, e.target.value);
      },
      style: {
        width: '110px',
        padding: '4px'
      },
      title: "Leave blank for standard rate"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      max: t.available,
      value: selectedRoomsByType[t.type] || '',
      onChange: function onChange(e) {
        return setRoomTypeQty(t.type, e.target.value);
      },
      style: {
        width: '60px',
        padding: '4px'
      },
      placeholder: "Qty"
    })));
  })), selectedCount > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '8px',
      color: 'var(--navy-primary)',
      fontWeight: '600'
    }
  }, "Total Rooms: ", selectedCount, " \u2014 Combined Rate: ", fmtCur(combinedRate), "/night")), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Guest Name *"), /*#__PURE__*/React.createElement("input", {
    value: fd.guestName,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        guestName: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Mobile *"), /*#__PURE__*/React.createElement("input", {
    value: fd.phone,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        phone: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: fd.email,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        email: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Extra Person"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: fd.extraPerson,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        extraPerson: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Advance Paid"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: fd.advancePaid,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        advancePaid: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Mode of Payment"), /*#__PURE__*/React.createElement("select", {
    value: fd.paymentMethod,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        paymentMethod: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Please Select"), /*#__PURE__*/React.createElement("option", null, "Cash"), /*#__PURE__*/React.createElement("option", null, "Card"), /*#__PURE__*/React.createElement("option", null, "Bank Transfer"), /*#__PURE__*/React.createElement("option", null, "Online"), /*#__PURE__*/React.createElement("option", null, "UPI"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Food Plan"), /*#__PURE__*/React.createElement("select", {
    value: fd.foodPlan,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        foodPlan: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "None"
  }, "None"), /*#__PURE__*/React.createElement("option", {
    value: "Including Breakfast"
  }, "Including Breakfast"), /*#__PURE__*/React.createElement("option", {
    value: "Including Breakfast and Dinner"
  }, "Including Breakfast and Dinner"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Discount (%)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    max: "100",
    value: fd.discountPercent,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        discountPercent: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "GST Type"), /*#__PURE__*/React.createElement("select", {
    value: fd.gstType,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstType: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", null, "Excluding"), /*#__PURE__*/React.createElement("option", null, "Including"), /*#__PURE__*/React.createElement("option", null, "None")))), ct && /*#__PURE__*/React.createElement("div", {
    className: "totals-section",
    style: {
      marginTop: '15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Combined Room Rate x ", ct.nights, " night(s)"), /*#__PURE__*/React.createElement("span", null, fmtCur(ct.base))), ct.disc > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Discount (", fd.discountPercent, "%)"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, "- ", fmtCur(ct.disc))), ct.tax > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "GST (16%) ", fd.gstType === 'Including' ? '(Incl)' : ''), /*#__PURE__*/React.createElement("span", null, fmtCur(ct.tax))), /*#__PURE__*/React.createElement("div", {
    className: "totals-row grand-total"
  }, /*#__PURE__*/React.createElement("span", null, "Estimated Total"), /*#__PURE__*/React.createElement("span", null, fmtCur(ct.total))), parseFloat(fd.advancePaid) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Advance Paid"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--success)'
    }
  }, "- ", fmtCur(parseFloat(fd.advancePaid))))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " ", isEdit ? 'Updating...' : 'Booking...') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas ".concat(isEdit ? 'fa-save' : 'fa-check')
  }), " ", isEdit ? 'Update Booking' : 'Book Room(s)')), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function BookingsView(_ref14) {
  var user = _ref14.user,
    role = _ref14.role;
  var isAdmin = role === 'admin';
  var _useState55 = useState(true),
    _useState56 = _slicedToArray(_useState55, 2),
    ld = _useState56[0],
    setLd = _useState56[1];
  var _useState57 = useState([]),
    _useState58 = _slicedToArray(_useState57, 2),
    bks = _useState58[0],
    setBks = _useState58[1];
  var _useState59 = useState([]),
    _useState60 = _slicedToArray(_useState59, 2),
    rooms = _useState60[0],
    setRooms = _useState60[1];
  var _useState61 = useState([]),
    _useState62 = _slicedToArray(_useState61, 2),
    cis = _useState62[0],
    setCis = _useState62[1];
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    show = _useState64[0],
    setShow = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    editBooking = _useState66[0],
    setEditBooking = _useState66[1];
  var tRef = useRef(null);
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      var data = Array.isArray(r) ? r : [];
      var filtered = isAdmin ? data : data.filter(function (b) {
        return b.email === user;
      });
      setBks(filtered);
      google.script.run.withSuccessHandler(function (rm) {
        setRooms(Array.isArray(rm) ? rm : []);
        google.script.run.withSuccessHandler(function (ci) {
          setCis(Array.isArray(ci) ? ci : []);
          setLd(false);
          initT(filtered);
        }).withFailureHandler(function () {
          setLd(false);
          initT(filtered);
        }).getAllCheckIns();
      }).withFailureHandler(function () {
        setLd(false);
        initT(filtered);
      }).getAllRooms();
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllBookings();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#bkT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#bkT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'ticketId',
            title: 'Ticket ID'
          }, {
            data: 'roomNo',
            title: 'Room'
          }, {
            data: 'guestName',
            title: 'Guest'
          }, {
            data: 'checkIn',
            title: 'Check-in',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'checkOut',
            title: 'Check-out',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'status',
            title: 'Status',
            render: function render(d) {
              return "<span class=\"status-badge ".concat(statusCls(d), "\">").concat(d, "</span>");
            }
          }, {
            data: 'paymentStatus',
            title: 'Pay Status',
            render: function render(d) {
              var s = d || 'Unpaid';
              return '<span class="status-badge status-' + s.toLowerCase() + '">' + s + '</span>';
            }
          }, {
            data: 'paymentMethod',
            title: 'Method'
          }, {
            data: 'totalAmount',
            title: 'Total',
            render: function render(d) {
              return fmtCur(d);
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render(d, tp, row) {
              var s = (row.status || '').toLowerCase();
              var btns = '';
              if (s === 'booked') {
                btns += '<button class="action-icon edit-icon" data-action="edit" title="Edit"><i class="fas fa-edit"></i></button>';
                btns += '<button class="action-icon delete-icon" data-action="delete" title="Delete"><i class="fas fa-trash"></i></button>';
              }
              return btns || '-';
            }
          }],
          pageLength: 10,
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'desc']]
        });
        $('#bkT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEditBooking(rd);
            setShow(true);
          } else if (a === 'delete') {
            Swal.fire({
              icon: 'warning',
              title: 'Delete Booking?',
              text: 'Ticket ' + rd.ticketId + ' (Room #' + rd.roomNo + ') will be permanently deleted and the room will be freed.',
              showCancelButton: true,
              confirmButtonColor: '#ea4335',
              confirmButtonText: 'Delete',
              cancelButtonText: 'Cancel'
            }).then(function (res) {
              if (res.isConfirmed) {
                Swal.fire({
                  title: 'Deleting...',
                  allowOutsideClick: false,
                  didOpen: function didOpen() {
                    return Swal.showLoading();
                  }
                });
                google.script.run.withSuccessHandler(function (r) {
                  Swal.close();
                  if (r.success) {
                    Swal.fire({
                      icon: 'success',
                      text: r.message,
                      timer: 2000,
                      showConfirmButton: false
                    });
                    setTimeout(function () {
                      return load();
                    }, 100);
                  } else Swal.fire({
                    icon: 'error',
                    text: r.message
                  });
                }).withFailureHandler(function (e) {
                  Swal.close();
                  Swal.fire({
                    icon: 'error',
                    text: e.message
                  });
                }).deleteBooking(rd.rowIndex);
              }
            });
          }
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-check"
  }), " Bookings"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEditBooking(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " New Booking")), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 6,
    columns: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "bkT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(BookingModal, {
    rooms: rooms,
    allBookings: bks,
    allCheckIns: cis,
    booking: editBooking,
    onClose: function onClose() {
      setShow(false);
      setEditBooking(null);
    },
    onBooked: load,
    role: role
  }));
}
function CheckInView(_ref15) {
  var user = _ref15.user,
    role = _ref15.role;
  var _useState67 = useState('walkin'),
    _useState68 = _slicedToArray(_useState67, 2),
    mode = _useState68[0],
    setMode = _useState68[1];
  var _useState69 = useState([]),
    _useState70 = _slicedToArray(_useState69, 2),
    rooms = _useState70[0],
    setRooms = _useState70[1];
  var _useState71 = useState([]),
    _useState72 = _slicedToArray(_useState71, 2),
    selectedRooms = _useState72[0],
    setSelectedRooms = _useState72[1];
  var _useState73 = useState(''),
    _useState74 = _slicedToArray(_useState73, 2),
    searchQ = _useState74[0],
    setSearchQ = _useState74[1];
  var _useState75 = useState([]),
    _useState76 = _slicedToArray(_useState75, 2),
    searchResults = _useState76[0],
    setSearchResults = _useState76[1];
  var _useState77 = useState(false),
    _useState78 = _slicedToArray(_useState77, 2),
    searching = _useState78[0],
    setSearching = _useState78[1];
  var _useState79 = useState(null),
    _useState80 = _slicedToArray(_useState79, 2),
    linkedBooking = _useState80[0],
    setLinkedBooking = _useState80[1];
  var _useState81 = useState(true),
    _useState82 = _slicedToArray(_useState81, 2),
    ld = _useState82[0],
    setLd = _useState82[1];
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    saving = _useState84[0],
    setSaving = _useState84[1];
  var tRef = useRef(null);
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    updateRec = _useState86[0],
    setUpdateRec = _useState86[1];
  var _useState87 = useState({
      guestName: '',
      companyName: '',
      gstNumber: '',
      identityProof: '',
      mobile: '',
      email: '',
      address: '',
      purposeOfVisit: '',
      checkInDate: new Date().toISOString().split('T')[0],
      checkInTime: '14:00',
      checkOutDate: '',
      checkOutTime: '12:00',
      pax: 1,
      advancePaid: 0,
      extraPerson: 0,
      foodPlan: 'None',
      gstType: 'Excluding',
      fixRoomRentAmount: '',
      billTo: 'Individual',
      discountPercent: 0
    }),
    _useState88 = _slicedToArray(_useState87, 2),
    fd = _useState88[0],
    setFd = _useState88[1];
  var _useState89 = useState([]),
    _useState90 = _slicedToArray(_useState89, 2),
    activeCis = _useState90[0],
    setActiveCis = _useState90[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setRooms(Array.isArray(r) ? r : []);
    }).withFailureHandler(function () {}).getAllRooms();
    loadCheckIns();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var loadCheckIns = function loadCheckIns() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      var data = Array.isArray(r) ? r : [];
      setActiveCis(data.filter(function (ci) {
        return ci.status === 'Active';
      }));
      initT(data);
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllCheckIns();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#ciT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#ciT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'checkInId',
            title: 'ID'
          }, {
            data: 'guestName',
            title: 'Guest'
          }, {
            data: 'roomNumbers',
            title: 'Rooms'
          }, {
            data: 'mobile',
            title: 'Phone'
          }, {
            data: 'checkInDate',
            title: 'Check-In',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'checkOutDate',
            title: 'Expected Out',
            render: function render(d) {
              return d ? fmtDate(d) : '-';
            }
          }, {
            data: 'pax',
            title: 'Pax'
          }, {
            data: 'status',
            title: 'Status',
            render: function render(d) {
              return '<span class="status-badge status-' + (d || 'active').toLowerCase().replace(/\s+/g, '-') + '">' + d + '</span>';
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render(d, tp, row) {
              var html = '';
              if (row.status === 'Active') {
                html += '<button class="action-icon edit-icon" data-action="switch" title="Switch Room / Update Pax"><i class="fas fa-exchange-alt"></i></button>';
                html += '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button>';
                html += '<button class="action-icon checkout-icon" data-action="checkout"><i class="fas fa-sign-out-alt"></i></button>';
              }
              return html || '-';
            }
          }],
          pageLength: 10,
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'desc']]
        });
        $('#ciT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'switch') {
            setUpdateRec(rd);
          } else if (a === 'edit') {
            handleEdit(rd);
          } else if (a === 'checkout') {
            handleCheckout(rd);
          }
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  var toggleRoom = function toggleRoom(rn) {
    setSelectedRooms(function (prev) {
      if (prev.includes(rn)) return prev.filter(function (r) {
        return r !== rn;
      });

      // Before adding, check if there are enough free rooms of this type remaining
      // to satisfy other pending advance bookings.
      var rState = roomStatesMap[rn];
      if (rState && roomStatesMap._typeBookings) {
        var type = rState.room.roomType;
        var reqQty = roomStatesMap._typeBookings[type] || 0;
        if (reqQty > 0) {
          // Count how many rooms of this type are currently fully available (not occupied/maintenance)
          var totalAvailOfType = 0;
          for (var key in roomStatesMap) {
            if (key === '_typeBookings') continue;
            if (roomStatesMap[key].room.roomType === type && roomStatesMap[key].status === 'available') {
              totalAvailOfType++;
            }
          }
          // Count how many we have currently selected of this type (excluding the one we want to add)
          var currentlySelectedOfType = 0;
          prev.forEach(function (srn) {
            if (roomStatesMap[srn] && roomStatesMap[srn].room.roomType === type) {
              currentlySelectedOfType++;
            }
          });

          // If (total - selected - 1) < reqQty, then adding this room would prevent fulfilling the advance bookings
          if (totalAvailOfType - currentlySelectedOfType - 1 < reqQty) {
            Swal.fire({
              icon: 'warning',
              text: "Cannot select this room. There are ".concat(reqQty, " advance booking(s) pending for ").concat(type, " rooms that need to be fulfilled from the remaining availability.")
            });
            return prev;
          }
        }
      }
      return [].concat(_toConsumableArray(prev), [rn]);
    });
  };
  var doSearch = function doSearch() {
    if (!searchQ.trim()) return;
    setSearching(true);
    google.script.run.withSuccessHandler(function (r) {
      setSearching(false);
      setSearchResults(Array.isArray(r) ? r : []);
    }).withFailureHandler(function (e) {
      setSearching(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).searchBookingsByGuestName(searchQ);
  };

  // Dynamic validation of physical rooms vs type requirements
  var _useState91 = useState([]),
    _useState92 = _slicedToArray(_useState91, 2),
    advBks = _useState92[0],
    setAdvBks = _useState92[1];
  var _useState93 = useState(false),
    _useState94 = _slicedToArray(_useState93, 2),
    advLd = _useState94[0],
    setAdvLd = _useState94[1];

  // Compute physical room states by checking overlapping CheckIns and Advance Bookings
  var getRoomStates = function getRoomStates() {
    var states = {};
    // Initialize all rooms as available, unless they are in Maintenance
    rooms.forEach(function (rm) {
      states[rm.roomNo.toString()] = {
        status: (rm.roomStatus || '').toLowerCase() === 'maintenance' ? 'maintenance' : 'available',
        label: (rm.roomStatus || '').toLowerCase() === 'maintenance' ? 'Maintenance' : 'Available',
        room: rm
      };
    });
    if (fd.checkInDate && fd.checkOutDate) {
      var cIn = new Date(fd.checkInDate);
      var cOut = new Date(fd.checkOutDate);

      // 1. Check overlapping Active Check-Ins (except current edit row)
      activeCis.forEach(function (ci) {
        if (editRowIndex && ci.rowIndex === editRowIndex) return; // Skip the one we are editing
        var ciIn = new Date(ci.checkInDate);
        var ciOut = new Date(ci.checkOutDate);
        if (cIn < ciOut && cOut > ciIn) {
          var ciRooms = (ci.roomNumbers || '').split(',').map(function (r) {
            return r.trim();
          }).filter(Boolean);
          ciRooms.forEach(function (rn) {
            if (states[rn]) {
              states[rn].status = 'occupied';
              states[rn].label = 'Checked In';
            }
          });
        }
      });

      // 2. Check overlapping Advance Bookings (except the linked one)
      if (advBks && advBks.length > 0) {
        var typeBookings = {};
        advBks.forEach(function (bk) {
          if (bk.status === 'Booked' && bk.roomNo && bk.ticketId !== (linkedBooking && linkedBooking.ticketId)) {
            var bIn = new Date(bk.checkIn);
            var bOut = new Date(bk.checkOut);
            if (cIn < bOut && cOut > bIn) {
              var roomNosArr = bk.roomNo.split(',').map(function (r) {
                return r.trim();
              }).filter(Boolean);
              roomNosArr.forEach(function (r) {
                var match = r.match(/(.+?)(?:\s*\((\d+)\))?$/);
                if (match && match[2]) {
                  var type = match[1].trim();
                  var qty = parseInt(match[2], 10);
                  typeBookings[type] = (typeBookings[type] || 0) + qty;
                } else {
                  // It's a specific legacy physical room booking, mark it reserved
                  if (states[r]) {
                    states[r].status = 'reserved';
                    states[r].label = 'Reserved';
                  }
                }
              });
            }
          }
        });

        // Instead of greedily reserving rooms and hiding them from selection,
        // we simply keep track of how many of each type are required by other bookings.
        // The validation step below will ensure the user doesn't pick so many
        // that these required types cannot be fulfilled.
        states._typeBookings = typeBookings;
      }
    } else {
      // If no dates selected, fallback to simple filtering for UI initial load
      for (var rn in states) {
        if (states[rn].room.roomStatus.toLowerCase() === 'booked') {
          states[rn].status = 'occupied';
          states[rn].label = 'Checked In';
        } else if (states[rn].room.roomStatus.toLowerCase() === 'reserved') {
          states[rn].status = 'reserved';
          states[rn].label = 'Reserved';
        }
      }
    }
    return states;
  };
  var roomStatesMap = getRoomStates();
  var getDynRooms = function getDynRooms() {
    if (!linkedBooking) return [];
    var requiredTypes = {};
    var bkRooms = linkedBooking.roomNo ? linkedBooking.roomNo.split(',').map(function (r) {
      return r.trim();
    }).filter(function (r) {
      return r;
    }) : [];
    bkRooms.forEach(function (r) {
      var match = r.match(/(.+?)(?:\s*\((\d+)\))?$/);
      if (match && match[2]) {
        requiredTypes[match[1].trim()] = (requiredTypes[match[1].trim()] || 0) + parseInt(match[2], 10);
      } else {
        // It's a specific room (legacy), map to its type or treat as self
        var physRoom = rooms.find(function (rx) {
          return rx.roomNo.toString() === r;
        });
        var type = physRoom ? physRoom.roomType : r;
        requiredTypes[type] = (requiredTypes[type] || 0) + 1;
      }
    });
    var selectedCountByType = {};
    selectedRooms.forEach(function (rn) {
      var physRoom = rooms.find(function (rx) {
        return rx.roomNo.toString() === rn;
      });
      if (physRoom) {
        selectedCountByType[physRoom.roomType] = (selectedCountByType[physRoom.roomType] || 0) + 1;
      }
    });
    return Object.entries(requiredTypes).map(function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
        type = _ref17[0],
        reqQty = _ref17[1];
      var selQty = selectedCountByType[type] || 0;
      return {
        type: type,
        reqQty: reqQty,
        selQty: selQty,
        fulfilled: selQty === reqQty,
        over: selQty > reqQty
      };
    });
  };
  var dynRooms = getDynRooms();
  var needsRoomSelection = mode === 'advance' && dynRooms.length > 0 && !dynRooms.every(function (d) {
    return d.fulfilled;
  });
  var _useState95 = useState(''),
    _useState96 = _slicedToArray(_useState95, 2),
    selAdvBkId = _useState96[0],
    setSelAdvBkId = _useState96[1];
  useEffect(function () {
    if (mode === 'advance' || mode === 'walkin') {
      // need advBks even in walkin to block freeRooms
      setAdvLd(true);
      google.script.run.withSuccessHandler(function (r) {
        setAdvLd(false);
        setAdvBks((Array.isArray(r) ? r : []).filter(function (b) {
          return b.status === 'Booked';
        }));
      }).withFailureHandler(function () {
        return setAdvLd(false);
      }).getAllBookings();
    }
  }, [mode]);
  var pickBooking = function pickBooking(ticketId) {
    setSelAdvBkId(ticketId);
    var bk = advBks.find(function (b) {
      return b.ticketId === ticketId;
    });
    setLinkedBooking(bk || null);
    if (bk) {
      // Check if booking already specifies physical rooms instead of types
      var isPhys = bk.roomNo && !bk.roomNo.match(/\(\d+\)/);
      setSelectedRooms(isPhys ? bk.roomNo.split(',').map(function (r) {
        return r.trim();
      }).filter(function (r) {
        return r;
      }) : []);
      setFd(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          guestName: bk.guestName || '',
          mobile: bk.phone || '',
          email: bk.email || '',
          checkInDate: bk.checkIn ? bk.checkIn.split('T')[0] : p.checkInDate,
          checkInTime: bk.checkInTime || '14:00',
          checkOutDate: bk.checkOut ? bk.checkOut.split('T')[0] : '',
          checkOutTime: bk.checkOutTime || '12:00',
          foodPlan: bk.foodPlan || 'None',
          advancePaid: bk.advancePaid || 0,
          gstType: bk.tax > 0 ? 'Including' : 'Excluding',
          // Infer from old or explicit new
          fixRoomRentAmount: bk.fixRoomRentAmount || '',
          // Sync fixed rent if present
          discountPercent: bk.discount || 0
        });
      });
    } else {
      resetForm();
    }
  };
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    editRowIndex = _useState98[0],
    setEditRowIndex = _useState98[1];
  var resetForm = function resetForm() {
    setFd({
      guestName: '',
      companyName: '',
      gstNumber: '',
      identityProof: '',
      mobile: '',
      email: '',
      address: '',
      purposeOfVisit: '',
      checkInDate: new Date().toISOString().split('T')[0],
      checkInTime: '14:00',
      checkOutDate: '',
      checkOutTime: '12:00',
      pax: 1,
      advancePaid: 0,
      extraPerson: 0,
      foodPlan: 'None',
      gstType: 'Excluding',
      fixRoomRentAmount: '',
      billTo: 'Individual',
      discountPercent: 0
    });
    setSelectedRooms([]);
    setLinkedBooking(null);
    setSelAdvBkId('');
    setEditRowIndex(null);
  };
  var handleEdit = function handleEdit(ci) {
    setFd(_objectSpread(_objectSpread({}, ci), {}, {
      checkInDate: ci.checkInDate ? ci.checkInDate.split('T')[0] : '',
      checkOutDate: ci.checkOutDate ? ci.checkOutDate.split('T')[0] : '',
      checkInTime: ci.checkInTime || '14:00',
      checkOutTime: ci.checkOutTime || '12:00',
      fixRoomRentAmount: ci.fixRoomRentAmount || '',
      discountPercent: ci.discountPercent || 0
    }));
    setSelectedRooms(ci.roomNumbers ? ci.roomNumbers.split(',') : []);
    setLinkedBooking({
      ticketId: ci.linkedTicketId
    });
    setEditRowIndex(ci.rowIndex);
    setMode('walkin');
  };
  var handleCheckout = function handleCheckout(ci) {
    Swal.fire({
      title: 'Checkout Guest?',
      text: "Initiate checkout for ".concat(ci.guestName, "?"),
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Checkout'
    }).then(function (res) {
      if (res.isConfirmed) {
        Swal.fire({
          title: 'Processing...',
          didOpen: function didOpen() {
            return Swal.showLoading();
          }
        });
        google.script.run.withSuccessHandler(function (r) {
          if (r.success) {
            Swal.fire({
              icon: 'success',
              title: 'Checked Out',
              timer: 2000,
              showConfirmButton: false
            });
            loadCheckIns();
            google.script.run.withSuccessHandler(function (r2) {
              setRooms(Array.isArray(r2) ? r2 : []);
            }).getAllRooms();
          } else {
            Swal.fire('Error', r.message, 'error');
          }
        }).withFailureHandler(function (e) {
          return Swal.fire('Error', e.message, 'error');
        }).processFullCheckout(ci.checkInId);
      }
    });
  };
  var submit = function submit(e) {
    e.preventDefault();
    if (!fd.guestName.trim()) {
      Swal.fire({
        icon: 'warning',
        text: 'Guest Name is required.'
      });
      return;
    }
    if (selectedRooms.length === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Select at least one room.'
      });
      return;
    }
    if (needsRoomSelection) {
      Swal.fire({
        icon: 'warning',
        text: 'Please allocate the exact number of physical rooms required by the advance booking.'
      });
      return;
    }
    if (!fd.checkInDate) {
      Swal.fire({
        icon: 'warning',
        text: 'Check-in date is required.'
      });
      return;
    }

    // Before sending, verify room statuses again on the frontend if walk-in and not editing
    if (mode === 'walkin' && !editRowIndex) {
      var _iterator = _createForOfIteratorHelper(selectedRooms),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var rn = _step.value;
          var rState = roomStatesMap[rn];
          if (!rState || rState.status !== 'available') {
            Swal.fire({
              icon: 'error',
              text: "Room ".concat(rn, " is no longer available.")
            });
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    setSaving(true);
    Swal.fire({
      title: 'Processing Check-In...',
      allowOutsideClick: false,
      didOpen: function didOpen() {
        return Swal.showLoading();
      }
    });
    var payload = {
      linkedTicketId: linkedBooking ? linkedBooking.ticketId : '',
      guestName: fd.guestName,
      companyName: fd.companyName,
      gstNumber: fd.gstNumber,
      identityProof: fd.identityProof,
      mobile: fd.mobile,
      email: fd.email,
      address: fd.address,
      purposeOfVisit: fd.purposeOfVisit,
      checkInDate: fd.checkInDate,
      checkInTime: fd.checkInTime,
      checkOutDate: fd.checkOutDate,
      checkOutTime: fd.checkOutTime,
      roomNumbers: selectedRooms.join(','),
      pax: fd.pax,
      advancePaid: fd.advancePaid,
      extraPerson: fd.extraPerson,
      foodPlan: fd.foodPlan,
      gstType: fd.gstType,
      fixRoomRent: fd.fixRoomRentAmount ? 'Yes' : 'No',
      fixRoomRentAmount: fd.fixRoomRentAmount,
      billTo: fd.billTo,
      discountPercent: fd.discountPercent
    };
    if (editRowIndex) {
      google.script.run.withSuccessHandler(function (res) {
        Swal.close();
        setSaving(false);
        if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Update Successful!',
            text: res.message,
            timer: 2500,
            showConfirmButton: false
          });
          resetForm();
          loadCheckIns();
          google.script.run.withSuccessHandler(function (r) {
            setRooms(Array.isArray(r) ? r : []);
          }).getAllRooms();
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        Swal.close();
        setSaving(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateCheckIn(editRowIndex, payload);
    } else {
      google.script.run.withSuccessHandler(function (res) {
        Swal.close();
        setSaving(false);
        if (res.success) {
          Swal.fire({
            icon: 'success',
            title: 'Check-In Successful!',
            text: res.message,
            timer: 2500,
            showConfirmButton: false
          });
          resetForm();
          loadCheckIns();
          google.script.run.withSuccessHandler(function (r) {
            setRooms(Array.isArray(r) ? r : []);
          }).getAllRooms();
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        Swal.close();
        setSaving(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addCheckIn(payload);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  }), " Check-In"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      loadCheckIns();
      google.script.run.withSuccessHandler(function (r) {
        setRooms(Array.isArray(r) ? r : []);
      }).getAllRooms();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sync"
  }), " Refresh")), /*#__PURE__*/React.createElement("div", {
    className: "checkin-mode-toggle"
  }, /*#__PURE__*/React.createElement("button", {
    className: mode === 'advance' ? 'active' : '',
    onClick: function onClick() {
      setMode('advance');
      resetForm();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-check"
  }), " Advance Booking"), /*#__PURE__*/React.createElement("button", {
    className: mode === 'walkin' ? 'active' : '',
    onClick: function onClick() {
      setMode('walkin');
      resetForm();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-walking"
  }), " Walk-In")), mode === 'advance' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px',
      background: '#f8f9fa',
      padding: '15px',
      borderRadius: '4px',
      border: '1px solid #dee2e6'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-check"
  }), " Select Advance Booking"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '600px'
    }
  }, /*#__PURE__*/React.createElement(SearchableSelect, {
    value: selAdvBkId,
    onChange: pickBooking,
    options: advBks.map(function (b) {
      return {
        value: b.ticketId,
        label: "".concat(b.guestName, " (").concat(b.phone || 'No Phone', ") - ").concat(b.roomNo, " - In: ").concat(fmtDate(b.checkIn), " [").concat(b.ticketId, "]")
      };
    }),
    placeholder: "Search by Guest Name, Phone, or Ticket ID...",
    loading: advLd
  })), linkedBooking && dynRooms.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '15px',
      padding: '15px',
      background: '#fff',
      border: '1px solid #c3e6cb',
      borderRadius: '4px'
    }
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      margin: '0 0 10px 0',
      color: '#155724'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-info-circle"
  }), " Booking Requirements"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px 0',
      fontSize: '14px',
      color: '#555'
    }
  }, "Please select physical rooms from the grid below to fulfill this booking:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, dynRooms.map(function (dr, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '8px 12px',
        background: dr.fulfilled ? '#d4edda' : dr.over ? '#f8d7da' : '#fff3cd',
        border: "1px solid ".concat(dr.fulfilled ? '#c3e6cb' : dr.over ? '#f5c6cb' : '#ffeeba'),
        borderRadius: '4px',
        fontSize: '13px',
        color: dr.fulfilled ? '#155724' : dr.over ? '#721c24' : '#856404'
      }
    }, /*#__PURE__*/React.createElement("strong", null, dr.type), ": ", dr.selQty, " / ", dr.reqQty, " selected", dr.fulfilled && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check ml-2"
    }), dr.over && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-triangle ml-2",
      title: "Too many selected"
    }));
  })))), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Guest Name *"), /*#__PURE__*/React.createElement("input", {
    value: fd.guestName,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        guestName: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Company Name"), /*#__PURE__*/React.createElement("input", {
    value: fd.companyName,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        companyName: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "GST Number"), /*#__PURE__*/React.createElement("input", {
    value: fd.gstNumber,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstNumber: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Identity Proof"), /*#__PURE__*/React.createElement("input", {
    value: fd.identityProof,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        identityProof: e.target.value
      }));
    },
    placeholder: "Aadhar/Passport No."
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Mobile"), /*#__PURE__*/React.createElement("input", {
    value: fd.mobile,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        mobile: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: fd.email,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        email: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      gridColumn: '1/-1'
    }
  }, /*#__PURE__*/React.createElement("label", null, "Address"), /*#__PURE__*/React.createElement("input", {
    value: fd.address,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        address: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Purpose of Visit"), /*#__PURE__*/React.createElement("input", {
    value: fd.purposeOfVisit,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        purposeOfVisit: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-In Date *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.checkInDate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkInDate: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-In Time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: fd.checkInTime,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkInTime: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Expected Check-Out Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.checkOutDate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkOutDate: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-Out Time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: fd.checkOutTime,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        checkOutTime: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Pax"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    value: fd.pax,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        pax: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Extra Person"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: fd.extraPerson,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        extraPerson: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Advance Paid (", APP_CURRENCY, ")"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: fd.advancePaid,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        advancePaid: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Food Plan"), /*#__PURE__*/React.createElement("select", {
    value: fd.foodPlan,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        foodPlan: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "None"
  }, "None"), /*#__PURE__*/React.createElement("option", {
    value: "Including Breakfast"
  }, "Including Breakfast"), /*#__PURE__*/React.createElement("option", {
    value: "Including Breakfast and Dinner"
  }, "Including Breakfast and Dinner"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "GST"), /*#__PURE__*/React.createElement("select", {
    value: fd.gstType,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstType: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Excluding"
  }, "Excluding GST"), /*#__PURE__*/React.createElement("option", {
    value: "Including"
  }, "Including GST"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Bill To"), /*#__PURE__*/React.createElement("select", {
    value: fd.billTo,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        billTo: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "Individual"
  }, "Individual"), /*#__PURE__*/React.createElement("option", {
    value: "Company"
  }, "Company"), /*#__PURE__*/React.createElement("option", {
    value: "Agent"
  }, "Agent"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Discount %"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    max: "100",
    value: fd.discountPercent,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        discountPercent: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Fixed Rent Amount (", APP_CURRENCY, ")"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    placeholder: "Leave blank for standard rent",
    value: fd.fixRoomRentAmount,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        fixRoomRentAmount: e.target.value
      }));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      marginBottom: '8px',
      color: '#555',
      fontWeight: 500,
      fontSize: '14px'
    }
  }, "Select Rooms * (", selectedRooms.length, " selected)"), /*#__PURE__*/React.createElement("div", {
    className: "room-tiles-grid"
  }, rooms.map(function (rm) {
    var rState = roomStatesMap[rm.roomNo.toString()];
    var isAvail = rState && rState.status === 'available';
    var isSelected = selectedRooms.includes(rm.roomNo.toString());
    var tileCls = 'room-tile';
    if (!isAvail && !isSelected) tileCls += ' disabled-tile status-' + rState.status;
    if (isSelected) tileCls += ' multi-selected';
    return /*#__PURE__*/React.createElement("div", {
      key: rm.roomNo,
      className: tileCls,
      onClick: function onClick() {
        return isAvail || isSelected ? toggleRoom(rm.roomNo.toString()) : null;
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "room-number"
    }, "#", rm.roomNo), /*#__PURE__*/React.createElement("div", {
      className: "room-type"
    }, rm.roomType), /*#__PURE__*/React.createElement("div", {
      className: "room-rate"
    }, !isAvail && !isSelected ? rState.label : "".concat(fmtCur(rm.roomRate), "/night")));
  })), rooms.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#666',
      fontSize: '13px',
      fontStyle: 'italic'
    }
  }, "No rooms exist in the system.")), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: saving
  }, saving ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Processing...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-door-open"
  }), " Complete Check-In")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: resetForm
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-undo"
  }), " Reset"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: '15px',
      color: 'var(--navy-primary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-list"
  }), " All Check-Ins"), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 5,
    columns: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "ciT",
    className: "display",
    style: {
      width: '100%'
    }
  }))), updateRec && /*#__PURE__*/React.createElement(UpdateStayModal, {
    rec: updateRec,
    onClose: function onClose() {
      return setUpdateRec(null);
    },
    onRefresh: loadCheckIns,
    allRooms: rooms
  }));
}
function UpdateStayModal(_ref18) {
  var rec = _ref18.rec,
    onClose = _ref18.onClose,
    onRefresh = _ref18.onRefresh,
    allRooms = _ref18.allRooms;
  var _useState99 = useState([]),
    _useState100 = _slicedToArray(_useState99, 2),
    roomIds = _useState100[0],
    setRoomIds = _useState100[1];
  var _useState101 = useState(1),
    _useState102 = _slicedToArray(_useState101, 2),
    pax = _useState102[0],
    setPax = _useState102[1];
  var _useState103 = useState(0),
    _useState104 = _slicedToArray(_useState103, 2),
    newRate = _useState104[0],
    setNewRate = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    sv = _useState106[0],
    setSv = _useState106[1];
  useEffect(function () {
    if (rec) {
      setRoomIds((rec.roomNumbers || '').split(',').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s;
      }));
      setPax(parseInt(rec.pax) || 1);
      // Set an initial estimated rate based on the first mapped room or default to 0
      var initialRooms = (rec.roomNumbers || '').split(',').map(function (s) {
        return s.trim();
      }).filter(function (s) {
        return s;
      });
      if (initialRooms.length > 0 && allRooms) {
        var totalEst = 0;
        initialRooms.forEach(function (rn) {
          var rm = allRooms.find(function (r) {
            return r.roomNo.toString() === rn;
          });
          if (rm) totalEst += parseFloat(rm.roomRate) || 0;
        });
        setNewRate(totalEst);
      }
    }
  }, [rec, allRooms]);
  var submit = function submit(e) {
    e.preventDefault();
    if (roomIds.length === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Select at least one room.'
      });
      return;
    }
    setSv(true);
    google.script.run.withSuccessHandler(function (r) {
      setSv(false);
      if (r.success) {
        Swal.fire({
          icon: 'success',
          text: r.message,
          timer: 2000,
          showConfirmButton: false
        });
        onRefresh();
        onClose();
      } else {
        Swal.fire({
          icon: 'error',
          text: r.message
        });
      }
    }).withFailureHandler(function (err) {
      setSv(false);
      Swal.fire({
        icon: 'error',
        text: err.message
      });
    }).updateStaySegment(rec.checkInId, roomIds.join(','), newRate, pax);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exchange-alt"
  }), " Update Stay (Mid-Stay)"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: '#666',
      marginBottom: '15px'
    }
  }, "Update rooms and pax for the rest of the stay."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Current/New Rooms *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginTop: '5px'
    }
  }, allRooms.map(function (rm) {
    return /*#__PURE__*/React.createElement("button", {
      key: rm.roomNo,
      type: "button",
      onClick: function onClick() {
        setRoomIds(function (p) {
          return p.includes(rm.roomNo.toString()) ? p.filter(function (x) {
            return x !== rm.roomNo.toString();
          }) : [].concat(_toConsumableArray(p), [rm.roomNo.toString()]);
        });
      },
      className: "btn ".concat(roomIds.includes(rm.roomNo.toString()) ? 'btn-primary' : 'btn-secondary'),
      style: {
        padding: '6px 12px',
        fontSize: '13px',
        borderRadius: '4px'
      }
    }, "#", rm.roomNo, " (", rm.roomType, ")");
  }), (rec.roomNumbers || '').split(',').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).map(function (rn) {
    if (!allRooms.find(function (x) {
      return x.roomNo.toString() === rn;
    })) {
      return /*#__PURE__*/React.createElement("button", {
        key: rn,
        type: "button",
        onClick: function onClick() {
          setRoomIds(function (p) {
            return p.includes(rn) ? p.filter(function (x) {
              return x !== rn;
            }) : [].concat(_toConsumableArray(p), [rn]);
          });
        },
        className: "btn ".concat(roomIds.includes(rn) ? 'btn-primary' : 'btn-secondary'),
        style: {
          padding: '6px 12px',
          fontSize: '13px',
          borderRadius: '4px'
        }
      }, "#", rn);
    }
    return null;
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-grid",
    style: {
      marginTop: '15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Pax *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "1",
    value: pax,
    onChange: function onChange(e) {
      return setPax(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "New Daily Rate (", APP_CURRENCY, ") *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: newRate,
    onChange: function onChange(e) {
      return setNewRate(e.target.value);
    },
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function RestaurantView(_ref19) {
  var user = _ref19.user;
  var _useState107 = useState([]),
    _useState108 = _slicedToArray(_useState107, 2),
    activeRooms = _useState108[0],
    setActiveRooms = _useState108[1];
  var _useState109 = useState(''),
    _useState110 = _slicedToArray(_useState109, 2),
    selRoom = _useState110[0],
    setSelRoom = _useState110[1];
  var _useState111 = useState(''),
    _useState112 = _slicedToArray(_useState111, 2),
    selCheckIn = _useState112[0],
    setSelCheckIn = _useState112[1];
  var _useState113 = useState(''),
    _useState114 = _slicedToArray(_useState113, 2),
    selGuestName = _useState114[0],
    setSelGuestName = _useState114[1];
  var _useState115 = useState(true),
    _useState116 = _slicedToArray(_useState115, 2),
    ld = _useState116[0],
    setLd = _useState116[1];
  var _useState117 = useState(false),
    _useState118 = _slicedToArray(_useState117, 2),
    saving = _useState118[0],
    setSaving = _useState118[1];
  var _useState119 = useState(null),
    _useState120 = _slicedToArray(_useState119, 2),
    editOrder = _useState120[0],
    setEditOrder = _useState120[1];
  var _useState121 = useState([{
      itemName: '',
      quantity: 1,
      rate: 0
    }]),
    _useState122 = _slicedToArray(_useState121, 2),
    items = _useState122[0],
    setItems = _useState122[1];
  var _useState123 = useState('Breakfast'),
    _useState124 = _slicedToArray(_useState123, 2),
    mealPeriod = _useState124[0],
    setMealPeriod = _useState124[1];
  var tRef = useRef(null);
  var CATEGORIES = ['FoodBeverage', 'ExtraBed', 'MiniBar', 'EarlyClean', 'Xerox', 'Laundry', 'Fax', 'SPBUC', 'Travels', 'Misc'];
  var CAT_LABELS = {
    FoodBeverage: 'Food & Beverage',
    ExtraBed: 'Extra Bed',
    MiniBar: 'Mini Bar',
    EarlyClean: 'Early Clean',
    Xerox: 'Xerox',
    Laundry: 'Laundry',
    Fax: 'Fax',
    SPBUC: 'SP/BUC',
    Travels: 'Travels',
    Misc: 'Miscellaneous'
  };
  var _useState125 = useState({
      category: 'FoodBeverage',
      description: '',
      amount: '',
      orderDate: new Date().toISOString().split('T')[0]
    }),
    _useState126 = _slicedToArray(_useState125, 2),
    fd = _useState126[0],
    setFd = _useState126[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setActiveRooms(Array.isArray(r) ? r : []);
    }).withFailureHandler(function () {}).getActiveCheckInRooms();
    loadOrders();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var _useState127 = useState([]),
    _useState128 = _slicedToArray(_useState127, 2),
    menuItems = _useState128[0],
    setMenuItems = _useState128[1];
  var loadOrders = function loadOrders() {
    var _tRef$current;
    (_tRef$current = tRef.current) === null || _tRef$current === void 0 || _tRef$current.destroy();
    google.script.run.withSuccessHandler(function (r) {
      var d = Array.isArray(r) ? r : [];
      initT(d);
    }).getAllFoodOrders();
    google.script.run.withSuccessHandler(function (r) {
      setMenuItems(r || []);
    }).getAllMenuItems();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#restT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#restT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'orderId',
            title: 'Order ID'
          }, {
            data: 'roomNo',
            title: 'Room'
          }, {
            data: 'checkInId',
            title: 'Check-In'
          }, {
            data: 'orderDate',
            title: 'Date',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'category',
            title: 'Category',
            render: function render(d) {
              return CAT_LABELS[d] || d;
            }
          }, {
            data: 'description',
            title: 'Description'
          }, {
            data: 'amount',
            title: 'Amount',
            render: function render(d) {
              return fmtCur(d);
            }
          }, {
            data: 'status',
            title: 'Status',
            render: function render(d) {
              return '<span class="status-badge status-' + (d || 'active').toLowerCase() + '">' + d + '</span>';
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render() {
              return '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'desc']]
        });
        $('#restT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEditOrder(rd);
            setSelRoom(rd.roomNo);
            setSelCheckIn(rd.checkInId);
            setFd(_objectSpread(_objectSpread({}, fd), {}, {
              orderDate: rd.orderDate ? rd.orderDate.split('T')[0] : ''
            }));
            setItems([{
              itemName: rd.itemName || rd.description || '',
              quantity: rd.quantity || 1,
              rate: rd.rate || rd.amount || 0
            }]);
            if (rd.mealPeriod) setMealPeriod(rd.mealPeriod);
          } else if (a === 'delete') delOrder(rd);
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  var pickRoom = function pickRoom(rn) {
    setSelRoom(rn);
    var rm = activeRooms.find(function (r) {
      return r.roomNo === rn;
    });
    if (rm) {
      setSelCheckIn(rm.checkInId);
      setSelGuestName(rm.guestName);
    } else {
      setSelCheckIn('');
      setSelGuestName('');
    }
  };
  var submit = function submit(e) {
    e.preventDefault();
    if (!selRoom) {
      Swal.fire({
        icon: 'warning',
        text: 'Select a room first.'
      });
      return;
    }
    if (items.some(function (i) {
      return !i.itemName || i.quantity <= 0;
    })) {
      Swal.fire({
        icon: 'warning',
        text: 'Please complete all order line items.'
      });
      return;
    }
    setSaving(true);
    if (editOrder) {
      google.script.run.withSuccessHandler(function (res) {
        setSaving(false);
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          resetOrderForm();
          loadOrders();
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        setSaving(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateFoodOrder(editOrder.rowIndex, {
        roomNo: selRoom,
        checkInId: selCheckIn,
        orderDate: fd.orderDate,
        items: items.map(function (i) {
          return _objectSpread(_objectSpread({}, i), {}, {
            mealPeriod: mealPeriod
          });
        }),
        status: 'Active'
      });
    } else {
      google.script.run.withSuccessHandler(function (res) {
        setSaving(false);
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          resetOrderForm();
          loadOrders();
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        setSaving(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addFoodOrder({
        roomNo: selRoom,
        checkInId: selCheckIn,
        orderDate: fd.orderDate,
        items: items.map(function (i) {
          return _objectSpread(_objectSpread({}, i), {}, {
            mealPeriod: mealPeriod
          });
        })
      });
    }
  };
  var delOrder = function delOrder(ord) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete Order?',
      text: 'Delete order ' + ord.orderId + '?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          loadOrders();
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteFoodOrder(ord.rowIndex);
    });
  };
  var resetOrderForm = function resetOrderForm() {
    setEditOrder(null);
    setFd(_objectSpread(_objectSpread({}, fd), {}, {
      orderDate: new Date().toISOString().split('T')[0]
    }));
    setItems([{
      itemName: '',
      quantity: 1,
      rate: 0
    }]);
    setMealPeriod('Breakfast');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-utensils"
  }), " Restaurant / Services"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      loadOrders();
      google.script.run.withSuccessHandler(function (r) {
        setActiveRooms(Array.isArray(r) ? r : []);
      }).getActiveCheckInRooms();
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-sync"
  }), " Refresh")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#f8f9fa',
      padding: '20px',
      borderRadius: '4px',
      border: '1px solid #dee2e6',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus-circle"
  }), " ", editOrder ? 'Edit' : 'Add New', " Order"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Select Room *"), activeRooms.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#e74c3c',
      fontSize: '14px',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-info-circle"
  }), " No active check-ins found. Check in guests first from the Check-In page.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '15px'
    }
  }, Object.entries(activeRooms.reduce(function (acc, rm) {
    if (!acc[rm.checkInId]) acc[rm.checkInId] = {
      guestName: rm.guestName,
      rooms: []
    };
    acc[rm.checkInId].rooms.push(rm);
    return acc;
  }, {})).map(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
      ciId = _ref21[0],
      group = _ref21[1];
    return /*#__PURE__*/React.createElement("div", {
      key: ciId,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '6px',
        minWidth: '150px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'bold',
        color: 'var(--navy-primary)',
        fontSize: '14px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-circle"
    }), " ", group.guestName, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#888',
        fontWeight: 'normal'
      }
    }, "(ID: ", ciId, ")")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px'
      }
    }, group.rooms.map(function (rm) {
      return /*#__PURE__*/React.createElement("label", {
        key: rm.roomNo,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
          margin: '0',
          fontSize: '14px'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "radio",
        name: "restaurant_room_selection",
        value: rm.roomNo,
        checked: selRoom === rm.roomNo,
        onChange: function onChange() {
          return pickRoom(rm.roomNo);
        },
        style: {
          cursor: 'pointer',
          margin: '0'
        }
      }), /*#__PURE__*/React.createElement("span", null, "#", rm.roomNo));
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-grid",
    style: {
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Date *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.orderDate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        orderDate: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Meal Period *"), /*#__PURE__*/React.createElement("select", {
    value: mealPeriod,
    onChange: function onChange(e) {
      return setMealPeriod(e.target.value);
    },
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "Breakfast"
  }, "Breakfast"), /*#__PURE__*/React.createElement("option", {
    value: "Lunch"
  }, "Lunch"), /*#__PURE__*/React.createElement("option", {
    value: "Dinner"
  }, "Dinner"), /*#__PURE__*/React.createElement("option", {
    value: "Snacks"
  }, "Snacks")))), selGuestName && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: '#666',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-info-circle"
  }), " Selected Guest: ", /*#__PURE__*/React.createElement("strong", null, selGuestName), " | Check-In ID: ", /*#__PURE__*/React.createElement("strong", null, selCheckIn)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '15px',
      borderBottom: '2px solid var(--navy-primary)',
      paddingBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Order Items"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary btn-sm",
    onClick: function onClick() {
      return setItems([].concat(_toConsumableArray(items), [{
        itemName: '',
        quantity: 1,
        rate: 0
      }]));
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add Item")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '3fr 1fr 1fr 1fr auto',
      gap: '10px',
      fontWeight: 'bold',
      fontSize: '12px',
      color: '#555',
      marginBottom: '5px'
    }
  }, /*#__PURE__*/React.createElement("div", null, "Item Name *"), /*#__PURE__*/React.createElement("div", null, "Quantity *"), /*#__PURE__*/React.createElement("div", null, "Rate *"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, "Total"), /*#__PURE__*/React.createElement("div", null)), items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr 1fr 1fr auto',
        gap: '10px',
        alignItems: 'center',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: item.itemName,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        var selVal = e.target.value;
        newItems[index] = _objectSpread(_objectSpread({}, newItems[index]), {}, {
          itemName: selVal
        });
        var menuItm = menuItems.find(function (m) {
          return m.itemName === selVal;
        });
        if (menuItm && menuItm.defaultPrice) {
          newItems[index].rate = menuItm.defaultPrice;
        }
        setItems(newItems);
      },
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Select Item"), menuItems.map(function (m) {
      return /*#__PURE__*/React.createElement("option", {
        key: m.itemName,
        value: m.itemName
      }, m.itemName, " (Rs ", m.defaultPrice, ")");
    })), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      step: "1",
      value: item.quantity,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        newItems[index] = _objectSpread(_objectSpread({}, newItems[index]), {}, {
          quantity: parseInt(e.target.value) || 0
        });
        setItems(newItems);
      },
      required: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "0",
      step: "0.01",
      value: item.rate,
      onChange: function onChange(e) {
        var newItems = _toConsumableArray(items);
        newItems[index] = _objectSpread(_objectSpread({}, newItems[index]), {}, {
          rate: parseFloat(e.target.value) || 0
        });
        setItems(newItems);
      },
      required: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        fontWeight: 'bold',
        padding: '8px',
        backgroundColor: '#eee',
        borderRadius: '4px'
      }
    }, APP_CURRENCY, " ", ((item.quantity || 0) * (item.rate || 0)).toFixed(2)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "action-icon delete-icon",
      onClick: function onClick() {
        var newItems = _toConsumableArray(items);
        newItems.splice(index, 1);
        setItems(newItems);
      },
      disabled: items.length === 1,
      style: {
        margin: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-trash"
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      marginTop: '15px',
      padding: '10px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
      fontSize: '16px'
    }
  }, "Grand Total: ", /*#__PURE__*/React.createElement("strong", null, APP_CURRENCY, " ", items.reduce(function (sum, item) {
    return sum + (item.quantity || 0) * (item.rate || 0);
  }, 0).toFixed(2)))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: saving
  }, saving ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " ", editOrder ? 'Update' : 'Add', " Order")), editOrder && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: resetOrderForm
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel Edit")))), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginBottom: '15px',
      color: 'var(--navy-primary)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-list"
  }), " All Orders"), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 5,
    columns: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "restT",
    className: "display",
    style: {
      width: '100%'
    }
  })));
}
function HotelInvoiceModal(_ref22) {
  var data = _ref22.data,
    onClose = _ref22.onClose;
  var d = data;
  var fmtD = function fmtD(dt) {
    if (!dt) return '-';
    var dd = new Date(dt);
    return dd.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  var fmtDShort = function fmtDShort(dt) {
    if (!dt) return '-';
    var dd = new Date(dt);
    return dd.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short'
    });
  };
  var n2 = function n2(v) {
    return (parseFloat(v) || 0).toFixed(2);
  };
  var cats = ['extraBed', 'foodBev', 'miniBar', 'earlyClean', 'xerox', 'laundry', 'fax', 'spbuc', 'travels', 'misc'];
  var allCatHeaders = ['E.Bed', 'Fds&Bvg', 'MiniBar', 'ErlyCln', 'Xerox', 'Laundry', 'Fax', 'SP/BUC', 'Travels', 'Misc'];
  var colTotals = {};
  cats.forEach(function (c) {
    return colTotals[c] = 0;
  });
  var totalRoomsCol = 0;
  (d.dayByDay || []).forEach(function (row) {
    totalRoomsCol += row.rooms || 0;
    cats.forEach(function (c) {
      return colTotals[c] += row[c] || 0;
    });
  });
  var planLabel = function planLabel(fp) {
    if (!fp || fp === 'None') return 'EP';
    if (fp.indexOf('Dinner') !== -1) return 'MAP';
    return 'CP';
  };
  var numToWords = function numToWords(num) {
    if (!num || num === 0) return 'Zero';
    var ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    var tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    num = Math.round(Math.abs(num));
    var _w = function w(n) {
      if (n < 20) return ones[n];
      if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
      if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + _w(n % 100) : '');
      if (n < 100000) return _w(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + _w(n % 1000) : '');
      if (n < 10000000) return _w(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + _w(n % 100000) : '');
      return _w(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + _w(n % 10000000) : '');
    };
    return 'Rupees ' + _w(num) + ' Only';
  };
  var doPrint = function doPrint() {
    window.print();
  };
  var doPdf = function doPdf() {
    var dayRows = (d.dayByDay || []).map(function (row) {
      return [fmtDShort(row.date), n2(row.rooms), n2(row.extraBed), n2(row.foodBev), n2(row.miniBar), n2(row.earlyClean), n2(row.xerox), n2(row.laundry), n2(row.fax), n2(row.spbuc), n2(row.travels), n2(row.misc), n2(row.dayTotal), n2(row.grandTotal)];
    });
    var totRow = ['Totals', n2(totalRoomsCol)].concat(_toConsumableArray(cats.map(function (c) {
      return n2(colTotals[c]);
    })), [n2(d.subtotal || 0), '']);
    var doc = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: [20, 20, 20, 20],
      content: [{
        text: d.hotelName || 'Hill View Eco Retreat',
        style: 'hdr',
        alignment: 'center'
      }, {
        text: (d.hotelAddress || '') + ' | ' + (d.hotelPhone || '') + ' | ' + (d.hotelEmail || ''),
        alignment: 'center',
        fontSize: 9,
        margin: [0, 0, 0, 5]
      }, d.hotelTIN ? {
        text: 'GSTIN: ' + d.hotelTIN,
        alignment: 'center',
        fontSize: 9,
        margin: [0, 0, 0, 8]
      } : {
        text: '',
        margin: [0, 0, 0, 8]
      }, {
        columns: [{
          width: '60%',
          text: [{
            text: 'Guest: ',
            bold: true
          }, d.guestName + '\n', d.companyName ? {
            text: 'Company: ' + d.companyName + '\n'
          } : '', d.address ? {
            text: 'Address: ' + d.address + '\n'
          } : '', d.gstNumber ? {
            text: 'GSTIN: ' + d.gstNumber + '\n'
          } : '', {
            text: 'Mobile: ' + (d.mobile || '-') + '\n'
          }],
          fontSize: 10
        }, {
          width: '40%',
          table: {
            widths: ['auto', '*'],
            body: [['Bill No#', d.billNumber || ''], ['GR No', d.checkInId || ''], ['Check In', fmtD(d.checkInDate) + ' ' + d.checkInTime], ['Check Out', fmtD(d.checkOutDate) + ' ' + d.checkOutTime], ['Plan', planLabel(d.foodPlan)], ['Pax#', (d.pax || 1).toString()], ['Room#', (d.numberOfRooms || 1).toString()]]
          },
          fontSize: 9
        }]
      }, {
        text: '\n'
      }, {
        table: {
          headerRows: 1,
          widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
          body: [[{
            text: 'Date',
            style: 'th'
          }, {
            text: 'Rooms',
            style: 'th'
          }, {
            text: 'E.Bed',
            style: 'th'
          }, {
            text: 'Fds&Bvg',
            style: 'th'
          }, {
            text: 'MiniBar',
            style: 'th'
          }, {
            text: 'ErlyCln',
            style: 'th'
          }, {
            text: 'Xerox',
            style: 'th'
          }, {
            text: 'Laundry',
            style: 'th'
          }, {
            text: 'Fax',
            style: 'th'
          }, {
            text: 'SP/BUC',
            style: 'th'
          }, {
            text: 'Travels',
            style: 'th'
          }, {
            text: 'Misc',
            style: 'th'
          }, {
            text: 'Day Total',
            style: 'th'
          }, {
            text: 'Gr.Total',
            style: 'th'
          }]].concat(_toConsumableArray(dayRows), [totRow.map(function (v, i) {
            return i === 0 ? {
              text: v,
              bold: true
            } : {
              text: v,
              bold: true
            };
          })])
        },
        fontSize: 8
      }, {
        text: '\n'
      }, {
        columns: [{
          width: '60%',
          text: ''
        }, {
          width: '40%',
          table: {
            widths: ['*', 'auto'],
            body: [['Total Amount', {
              text: n2(d.subtotal || 0),
              alignment: 'right'
            }], ['Discount (' + n2(d.discountPercent || 0) + '%)', {
              text: '- ' + n2(d.discountAmount || 0),
              alignment: 'right'
            }], ['SGST ' + n2(d.sgstPercent || 0) + '%', {
              text: n2(d.sgstAmount || 0),
              alignment: 'right'
            }], ['CGST ' + n2(d.cgstPercent || 0) + '%', {
              text: n2(d.cgstAmount || 0),
              alignment: 'right'
            }], ['Bill Amount', {
              text: n2(d.billAmount || 0),
              alignment: 'right',
              bold: true
            }], ['Less Advance', {
              text: '- ' + n2(d.advancePaid || 0),
              alignment: 'right'
            }], [{
              text: 'Net Amount',
              bold: true
            }, {
              text: n2(d.netAmount || 0),
              alignment: 'right',
              bold: true,
              fontSize: 12
            }]]
          },
          fontSize: 10
        }]
      }, {
        text: '\nRooms: ' + (d.roomNumbers || ''),
        fontSize: 9,
        margin: [0, 5, 0, 0]
      }, {
        text: numToWords(d.billAmount || 0),
        italics: true,
        fontSize: 10,
        margin: [0, 5, 0, 20]
      }, {
        columns: [{
          text: 'Guest\'s Signature\n_______________',
          alignment: 'center',
          fontSize: 9
        }, {
          text: 'PLEASE DEPOSIT YOUR KEY',
          alignment: 'center',
          fontSize: 9,
          bold: true
        }, {
          text: 'Admin / Front Office\n_______________',
          alignment: 'center',
          fontSize: 9
        }]
      }],
      styles: {
        hdr: {
          fontSize: 18,
          bold: true,
          color: '#001f3f'
        },
        th: {
          bold: true,
          fontSize: 8,
          color: 'white',
          fillColor: '#001f3f',
          alignment: 'center'
        }
      },
      defaultStyle: {
        fontSize: 10
      }
    };
    pdfMake.createPdf(doc).download('Invoice-' + (d.billNumber || d.checkInId) + '.pdf');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: '1050px',
      width: '95%'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header no-print"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice"
  }), " Hotel Invoice"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body",
    style: {
      padding: '15px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hotel-invoice"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hotel-invoice-header"
  }, d.hotelLogo && /*#__PURE__*/React.createElement("img", {
    src: d.hotelLogo,
    className: "hotel-logo",
    alt: "Logo"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hotel-info"
  }, /*#__PURE__*/React.createElement("h2", null, d.hotelName || 'Hill View Eco Retreat'), /*#__PURE__*/React.createElement("p", null, d.hotelAddress || ''), /*#__PURE__*/React.createElement("p", null, d.hotelPhone ? 'Ph: ' + d.hotelPhone : '', " ", d.hotelEmail ? ' | ' + d.hotelEmail : ''), d.hotelTIN && /*#__PURE__*/React.createElement("p", null, "GSTIN: ", d.hotelTIN)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '60px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "invoice-meta-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoice-guest-details"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Guest:"), " ", d.guestName), d.companyName && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Company:"), " ", d.companyName), d.address && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Address:"), " ", d.address), d.gstNumber && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "GSTIN:"), " ", d.gstNumber), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Mobile:"), " ", d.mobile || '-'), d.email && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", d.email), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Bill To:"), " ", d.billTo || 'Individual')), /*#__PURE__*/React.createElement("div", {
    className: "invoice-bill-info"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Bill No#"), /*#__PURE__*/React.createElement("td", null, d.billNumber || '-')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "GR No"), /*#__PURE__*/React.createElement("td", null, d.checkInId || '-')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Check In"), /*#__PURE__*/React.createElement("td", null, fmtD(d.checkInDate), " ", d.checkInTime || '')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Check Out"), /*#__PURE__*/React.createElement("td", null, fmtD(d.checkOutDate), " ", d.checkOutTime || '')), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Plan"), /*#__PURE__*/React.createElement("td", null, planLabel(d.foodPlan))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Pax#"), /*#__PURE__*/React.createElement("td", null, d.pax || 1)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Room#"), /*#__PURE__*/React.createElement("td", null, d.numberOfRooms || 1)))))), /*#__PURE__*/React.createElement("table", {
    className: "invoice-day-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Rooms"), allCatHeaders.map(function (h) {
    return /*#__PURE__*/React.createElement("th", {
      key: h
    }, h);
  }), /*#__PURE__*/React.createElement("th", null, "Days Total"), /*#__PURE__*/React.createElement("th", null, "Gr.Total"))), /*#__PURE__*/React.createElement("tbody", null, (d.dayByDay || []).map(function (row, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, fmtDShort(row.date)), /*#__PURE__*/React.createElement("td", null, n2(row.rooms)), /*#__PURE__*/React.createElement("td", null, n2(row.extraBed)), /*#__PURE__*/React.createElement("td", null, n2(row.foodBev)), /*#__PURE__*/React.createElement("td", null, n2(row.miniBar)), /*#__PURE__*/React.createElement("td", null, n2(row.earlyClean)), /*#__PURE__*/React.createElement("td", null, n2(row.xerox)), /*#__PURE__*/React.createElement("td", null, n2(row.laundry)), /*#__PURE__*/React.createElement("td", null, n2(row.fax)), /*#__PURE__*/React.createElement("td", null, n2(row.spbuc)), /*#__PURE__*/React.createElement("td", null, n2(row.travels)), /*#__PURE__*/React.createElement("td", null, n2(row.misc)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, n2(row.dayTotal))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, n2(row.grandTotal))));
  })), /*#__PURE__*/React.createElement("tfoot", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Totals")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, n2(totalRoomsCol))), cats.map(function (c) {
    return /*#__PURE__*/React.createElement("td", {
      key: c
    }, /*#__PURE__*/React.createElement("strong", null, n2(colTotals[c])));
  }), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("strong", null, n2(d.subtotal || 0))), /*#__PURE__*/React.createElement("td", null)))), /*#__PURE__*/React.createElement("table", {
    className: "invoice-totals-table"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Total Amount"), /*#__PURE__*/React.createElement("td", null, n2(d.subtotal || 0))), (d.discountAmount || 0) > 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Discount (", n2(d.discountPercent || 0), "%)"), /*#__PURE__*/React.createElement("td", null, "- ", n2(d.discountAmount || 0))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "SGST ", n2(d.sgstPercent || 0), "%"), /*#__PURE__*/React.createElement("td", null, n2(d.sgstAmount || 0))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "CGST ", n2(d.cgstPercent || 0), "%"), /*#__PURE__*/React.createElement("td", null, n2(d.cgstAmount || 0))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Bill Amount"), /*#__PURE__*/React.createElement("td", null, n2(d.billAmount || 0))), (d.advancePaid || 0) > 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Less Advance"), /*#__PURE__*/React.createElement("td", null, "- ", n2(d.advancePaid || 0))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Net Amount"), /*#__PURE__*/React.createElement("td", null, n2(d.netAmount || 0))))), /*#__PURE__*/React.createElement("div", {
    className: "invoice-footer"
  }, /*#__PURE__*/React.createElement("p", null, "Linked Rooms: ", d.roomNumbers || '-'), /*#__PURE__*/React.createElement("p", {
    className: "amount-words"
  }, numToWords(d.billAmount || 0)), /*#__PURE__*/React.createElement("div", {
    className: "invoice-signatures"
  }, /*#__PURE__*/React.createElement("div", null, "Guest's Signature"), /*#__PURE__*/React.createElement("div", null, "PLEASE DEPOSIT YOUR KEY"), /*#__PURE__*/React.createElement("div", null, "Admin / Front Office InCharge")))), /*#__PURE__*/React.createElement("div", {
    className: "preview-actions no-print"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: doPrint
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-print"
  }), " Print"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: doPdf
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-download"
  }), " Download PDF"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Close")))));
}
function CheckoutView(_ref23) {
  var user = _ref23.user;
  var _useState129 = useState(''),
    _useState130 = _slicedToArray(_useState129, 2),
    roomNo = _useState130[0],
    setRoomNo = _useState130[1];
  var _useState131 = useState(false),
    _useState132 = _slicedToArray(_useState131, 2),
    fetching = _useState132[0],
    setFetching = _useState132[1];
  var _useState133 = useState([]),
    _useState134 = _slicedToArray(_useState133, 2),
    queuedCis = _useState134[0],
    setQueuedCis = _useState134[1];
  var _useState135 = useState(null),
    _useState136 = _slicedToArray(_useState135, 2),
    primaryCiId = _useState136[0],
    setPrimaryCiId = _useState136[1];
  var _useState137 = useState({}),
    _useState138 = _slicedToArray(_useState137, 2),
    foodOrdersMap = _useState138[0],
    setFoodOrdersMap = _useState138[1]; // { checkInId: [orders] }

  // Fine-grained selection tracking
  var _useState139 = useState({}),
    _useState140 = _slicedToArray(_useState139, 2),
    selectedRoomsMap = _useState140[0],
    setSelectedRoomsMap = _useState140[1]; // { checkInId: [roomNos] }
  var _useState141 = useState({}),
    _useState142 = _slicedToArray(_useState141, 2),
    selectedOrdersMap = _useState142[0],
    setSelectedOrdersMap = _useState142[1]; // { checkInId: [orderIds] }

  var _useState143 = useState(null),
    _useState144 = _slicedToArray(_useState143, 2),
    inv = _useState144[0],
    setInv = _useState144[1];
  var _useState145 = useState(false),
    _useState146 = _slicedToArray(_useState145, 2),
    saving = _useState146[0],
    setSaving = _useState146[1];
  var _useState147 = useState('Cash'),
    _useState148 = _slicedToArray(_useState147, 2),
    payMode = _useState148[0],
    setPayMode = _useState148[1];
  var _useState149 = useState(''),
    _useState150 = _slicedToArray(_useState149, 2),
    amtPaid = _useState150[0],
    setAmtPaid = _useState150[1];
  var _useState151 = useState(new Date().toISOString().split('T')[0]),
    _useState152 = _slicedToArray(_useState151, 2),
    checkOutDate = _useState152[0],
    setCheckOutDate = _useState152[1];
  var _useState153 = useState('12:00'),
    _useState154 = _slicedToArray(_useState153, 2),
    checkOutTime = _useState154[0],
    setCheckOutTime = _useState154[1];
  var _useState155 = useState(0),
    _useState156 = _slicedToArray(_useState155, 2),
    discountPercent = _useState156[0],
    setDiscountPercent = _useState156[1];
  var _useState157 = useState(0),
    _useState158 = _slicedToArray(_useState157, 2),
    advanceToApply = _useState158[0],
    setAdvanceToApply = _useState158[1];
  var fetchRoom = function fetchRoom() {
    if (!roomNo.trim()) {
      Swal.fire({
        icon: 'warning',
        text: 'Enter a room number.'
      });
      return;
    }
    setFetching(true);
    google.script.run.withSuccessHandler(function (res) {
      if (res) {
        if (queuedCis.find(function (ci) {
          return ci.checkInId === res.checkInId;
        })) {
          setFetching(false);
          Swal.fire({
            icon: 'info',
            title: 'Already Queued',
            text: 'This check-in is already in the checkout queue.'
          });
          setRoomNo('');
          return;
        }
        if (queuedCis.length === 0) {
          setPrimaryCiId(res.checkInId);
          setDiscountPercent(res.discountPercent || 0);
        }
        setQueuedCis(function (prev) {
          return [].concat(_toConsumableArray(prev), [res]);
        });
        var roomsArr = (res.roomNumbers || '').split(',').map(function (r) {
          return r.trim();
        }).filter(Boolean);
        setSelectedRoomsMap(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, res.checkInId, roomsArr));
        });
        google.script.run.withSuccessHandler(function (orders) {
          setFetching(false);
          var activeOrders = Array.isArray(orders) ? orders.filter(function (o) {
            return o.checkInId === res.checkInId && o.status === 'Active';
          }) : [];
          setFoodOrdersMap(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, res.checkInId, activeOrders));
          });
          setSelectedOrdersMap(function (prev) {
            return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, res.checkInId, activeOrders.map(function (o) {
              return o.orderId;
            })));
          });

          // Recalculate advance
          setAdvanceToApply(function (prev) {
            return prev + (parseFloat(res.advancePaid) || 0);
          });
          setRoomNo('');
        }).withFailureHandler(function (e) {
          setFetching(false);
          Swal.fire('Error', e.message, 'error');
        }).getAllFoodOrders();
      } else {
        setFetching(false);
        Swal.fire({
          icon: 'info',
          title: 'Not Found',
          text: 'No active check-in found for room #' + roomNo
        });
      }
    }).withFailureHandler(function (e) {
      setFetching(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getCheckInByRoomNo(roomNo);
  };
  var removeQueued = function removeQueued(ciId) {
    var removedCi = queuedCis.find(function (c) {
      return c.checkInId === ciId;
    });
    if (removedCi) {
      setAdvanceToApply(function (prev) {
        return Math.max(0, prev - (parseFloat(removedCi.advancePaid) || 0));
      });
    }
    setQueuedCis(function (prev) {
      return prev.filter(function (c) {
        return c.checkInId !== ciId;
      });
    });
    setFoodOrdersMap(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[ciId];
      return n;
    });
    setSelectedRoomsMap(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[ciId];
      return n;
    });
    setSelectedOrdersMap(function (prev) {
      var n = _objectSpread({}, prev);
      delete n[ciId];
      return n;
    });
    if (primaryCiId === ciId) setPrimaryCiId(null);
  };
  var toggleRoom = function toggleRoom(ciId, rn) {
    setSelectedRoomsMap(function (prev) {
      var arr = prev[ciId] || [];
      if (arr.includes(rn)) return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ciId, arr.filter(function (x) {
        return x !== rn;
      })));
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ciId, [].concat(_toConsumableArray(arr), [rn])));
    });
  };
  var toggleOrder = function toggleOrder(ciId, oid) {
    setSelectedOrdersMap(function (prev) {
      var arr = prev[ciId] || [];
      if (arr.includes(oid)) return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ciId, arr.filter(function (x) {
        return x !== oid;
      })));
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, ciId, [].concat(_toConsumableArray(arr), [oid])));
    });
  };
  var doAdvancedCheckout = function doAdvancedCheckout() {
    if (queuedCis.length === 0) {
      Swal.fire({
        icon: 'warning',
        text: 'Add at least one check-in to the queue.'
      });
      return;
    }
    if (!primaryCiId) {
      Swal.fire({
        icon: 'warning',
        text: 'Please select a primary billing guest from the queue.'
      });
      return;
    }
    var hasAnySelection = false;
    var selectedRoomsFlat = [];
    var _loop = function _loop(ciId) {
      if (selectedRoomsMap[ciId] && selectedRoomsMap[ciId].length > 0) {
        hasAnySelection = true;
        selectedRoomsMap[ciId].forEach(function (rn) {
          return selectedRoomsFlat.push({
            checkInId: ciId,
            roomNo: rn
          });
        });
      }
    };
    for (var ciId in selectedRoomsMap) {
      _loop(ciId);
    }
    var selectedOrdersFlat = [];
    for (var _ciId in selectedOrdersMap) {
      if (selectedOrdersMap[_ciId] && selectedOrdersMap[_ciId].length > 0) {
        hasAnySelection = true;
        selectedOrdersMap[_ciId].forEach(function (oid) {
          return selectedOrdersFlat.push(oid);
        });
      }
    }
    if (!hasAnySelection) {
      Swal.fire({
        icon: 'warning',
        text: 'Please select at least one room or POS order to checkout.'
      });
      return;
    }
    setSaving(true);
    Swal.fire({
      title: 'Processing Advanced Checkout...',
      allowOutsideClick: false,
      didOpen: function didOpen() {
        return Swal.showLoading();
      }
    });
    var payload = {
      checkOutDate: checkOutDate,
      checkOutTime: checkOutTime,
      paymentMode: payMode,
      amountPaid: parseFloat(amtPaid) || 0,
      discountPercent: discountPercent,
      advanceToApply: parseFloat(advanceToApply) || 0
    };
    var primaryCi = queuedCis.find(function (ci) {
      return ci.checkInId === primaryCiId;
    });
    var primaryGuestData = {
      guestName: primaryCi.guestName,
      companyName: primaryCi.companyName,
      gstNumber: primaryCi.gstNumber,
      mobile: primaryCi.mobile,
      email: primaryCi.email,
      address: primaryCi.address,
      billTo: primaryCi.billTo,
      gstType: primaryCi.gstType
    };
    google.script.run.withSuccessHandler(function (res) {
      Swal.close();
      setSaving(false);
      if (res.success) {
        Swal.fire({
          icon: 'success',
          title: 'Checkout Complete!',
          text: res.message,
          timer: 2500,
          showConfirmButton: false
        });
        if (res.invoiceData) {
          setInv(res.invoiceData);
        }
        setQueuedCis([]);
        setFoodOrdersMap({});
        setPrimaryCiId(null);
        setSelectedRoomsMap({});
        setSelectedOrdersMap({});
      } else Swal.fire({
        icon: 'error',
        text: res.message
      });
    }).withFailureHandler(function (e) {
      Swal.close();
      setSaving(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).processAdvancedCheckout(primaryGuestData, selectedRoomsFlat, selectedOrdersFlat, payload);
  };
  var totalAdvanceAvailable = queuedCis.reduce(function (sum, ci) {
    return sum + (parseFloat(ci.advancePaid) || 0);
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-object-group"
  }), " Advanced Checkout")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-fetch-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bed"
  }), " Add Room to Checkout Cart"), /*#__PURE__*/React.createElement("input", {
    value: roomNo,
    onChange: function onChange(e) {
      return setRoomNo(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') fetchRoom();
    },
    placeholder: "Enter room number..."
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: fetchRoom,
    disabled: fetching,
    style: {
      height: '50px',
      marginBottom: '0'
    }
  }, fetching ? /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-cart-plus"
  }), " Add"))), queuedCis.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '20px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-shopping-cart"
  }), " Checkout Cart (Select items to pay)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      overflowX: 'auto',
      paddingBottom: '10px'
    }
  }, queuedCis.map(function (ci) {
    var ciRooms = (ci.roomNumbers || '').split(',').map(function (r) {
      return r.trim();
    }).filter(Boolean);
    var ciOrders = foodOrdersMap[ci.checkInId] || [];
    return /*#__PURE__*/React.createElement("div", {
      key: ci.checkInId,
      style: {
        minWidth: '300px',
        flex: '0 0 auto',
        background: '#f8f9fa',
        border: '1px solid #dee2e6',
        borderRadius: '4px',
        padding: '15px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontWeight: 'bold',
        color: 'var(--navy-primary)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "primaryGuest",
      checked: primaryCiId === ci.checkInId,
      onChange: function onChange() {
        return setPrimaryCiId(ci.checkInId);
      },
      style: {
        width: '16px',
        height: '16px',
        margin: 0
      }
    }), "Master Bill Guest"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        color: '#555',
        marginTop: '4px'
      }
    }, "[", ci.checkInId, "] ", ci.guestName)), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-secondary",
      style: {
        padding: '4px 8px',
        margin: 0,
        fontSize: '11px'
      },
      onClick: function onClick() {
        return removeQueued(ci.checkInId);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '15px'
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Rooms"), ciRooms.map(function (rn) {
      return /*#__PURE__*/React.createElement("label", {
        key: rn,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '5px',
          cursor: 'pointer',
          fontSize: '13px'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: (selectedRoomsMap[ci.checkInId] || []).includes(rn),
        onChange: function onChange() {
          return toggleRoom(ci.checkInId, rn);
        }
      }), "Room ", rn);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '15px'
      }
    }, /*#__PURE__*/React.createElement("strong", null, "POS Orders"), ciOrders.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '12px',
        color: '#888',
        marginTop: '5px'
      }
    }, "No pending orders"), ciOrders.map(function (o) {
      return /*#__PURE__*/React.createElement("label", {
        key: o.orderId,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '5px',
          cursor: 'pointer',
          fontSize: '13px'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        checked: (selectedOrdersMap[ci.checkInId] || []).includes(o.orderId),
        onChange: function onChange() {
          return toggleOrder(ci.checkInId, o.orderId);
        }
      }), o.category, " - ", fmtCur(o.amount));
    })));
  })), !primaryCiId && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--danger)',
      fontSize: '13px',
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle"
  }), " Please select a primary guest to generate the master invoice.")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-bill-section"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calculator"
  }), " Master Checkout Options"), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-Out Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: checkOutDate,
    onChange: function onChange(e) {
      return setCheckOutDate(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Check-Out Time"), /*#__PURE__*/React.createElement("input", {
    type: "time",
    value: checkOutTime,
    onChange: function onChange(e) {
      return setCheckOutTime(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Overall Discount (%)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    max: "100",
    value: discountPercent,
    onChange: function onChange(e) {
      return setDiscountPercent(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Advance to Apply (", APP_CURRENCY, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: '#666',
      marginBottom: '4px'
    }
  }, "Max available: ", fmtCur(totalAdvanceAvailable)), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    max: totalAdvanceAvailable,
    value: advanceToApply,
    onChange: function onChange(e) {
      return setAdvanceToApply(e.target.value);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Payment Mode"), /*#__PURE__*/React.createElement("select", {
    value: payMode,
    onChange: function onChange(e) {
      return setPayMode(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", null, "Cash"), /*#__PURE__*/React.createElement("option", null, "Card"), /*#__PURE__*/React.createElement("option", null, "Bank Transfer"), /*#__PURE__*/React.createElement("option", null, "UPI"), /*#__PURE__*/React.createElement("option", null, "Online"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Amount Paid Now (", APP_CURRENCY, ")"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: amtPaid,
    onChange: function onChange(e) {
      return setAmtPaid(e.target.value);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: doAdvancedCheckout,
    disabled: saving || !primaryCiId
  }, saving ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Processing...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), " Generate Invoice for Selected")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: function onClick() {
      setQueuedCis([]);
      setFoodOrdersMap({});
      setPrimaryCiId(null);
      setSelectedRoomsMap({});
      setSelectedOrdersMap({});
      setAdvanceToApply(0);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Clear Cart"))), inv && /*#__PURE__*/React.createElement(HotelInvoiceModal, {
    data: inv,
    onClose: function onClose() {
      return setInv(null);
    }
  }));
}
function FinanceEntryModal(_ref24) {
  var record = _ref24.record,
    onClose = _ref24.onClose,
    onSave = _ref24.onSave,
    user = _ref24.user;
  var _useState159 = useState({
      date: record !== null && record !== void 0 && record.date ? record.date.slice(0, 10) : '',
      type: (record === null || record === void 0 ? void 0 : record.type) || 'Income',
      description: (record === null || record === void 0 ? void 0 : record.description) || '',
      shopSource: (record === null || record === void 0 ? void 0 : record.shopSource) || '',
      amount: (record === null || record === void 0 ? void 0 : record.amount) || '',
      category: (record === null || record === void 0 ? void 0 : record.category) || '',
      currency: (record === null || record === void 0 ? void 0 : record.currency) || APP_CURRENCY
    }),
    _useState160 = _slicedToArray(_useState159, 2),
    fd = _useState160[0],
    setFd = _useState160[1];
  var _useState161 = useState(false),
    _useState162 = _slicedToArray(_useState161, 2),
    sv = _useState162[0],
    setSv = _useState162[1];
  var _useState163 = useState([]),
    _useState164 = _slicedToArray(_useState163, 2),
    cats = _useState164[0],
    setCats = _useState164[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      if (Array.isArray(r)) setCats(r);
    }).getAllCategories();
  }, []);
  var filteredCats = cats.filter(function (c) {
    return c.type === fd.type;
  });
  var submit = function submit(e) {
    e.preventDefault();
    setSv(true);
    var rd = _objectSpread(_objectSpread({}, fd), {}, {
      enteredBy: user
    });
    if (record) {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateFinanceRecord(record.rowIndex, rd);
    } else {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addFinanceRecord(rd);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-coins"
  }), " ", record ? 'Edit' : 'Add', " Entry"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Date *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.date,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        date: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Type *"), /*#__PURE__*/React.createElement("select", {
    value: fd.type,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        type: e.target.value,
        category: ''
      }));
    }
  }, /*#__PURE__*/React.createElement("option", null, "Income"), /*#__PURE__*/React.createElement("option", null, "Expense"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Category"), /*#__PURE__*/React.createElement("select", {
    value: fd.category,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        category: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select Category"), filteredCats.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.categoryId,
      value: c.name
    }, c.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Currency"), /*#__PURE__*/React.createElement("select", {
    value: fd.currency,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        currency: e.target.value
      }));
    },
    style: {
      fontSize: '16px'
    }
  }, CURRENCIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Description *"), /*#__PURE__*/React.createElement("input", {
    value: fd.description,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        description: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Shop / Source"), /*#__PURE__*/React.createElement("input", {
    value: fd.shopSource,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        shopSource: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Amount (", fd.currency, ") *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0.01",
    value: fd.amount,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        amount: e.target.value
      }));
    },
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function FinanceView(_ref25) {
  var user = _ref25.user;
  var _useState165 = useState(true),
    _useState166 = _slicedToArray(_useState165, 2),
    ld = _useState166[0],
    setLd = _useState166[1];
  var _useState167 = useState(false),
    _useState168 = _slicedToArray(_useState167, 2),
    show = _useState168[0],
    setShow = _useState168[1];
  var _useState169 = useState(null),
    _useState170 = _slicedToArray(_useState169, 2),
    edit = _useState170[0],
    setEdit = _useState170[1];
  var _useState171 = useState([]),
    _useState172 = _slicedToArray(_useState171, 2),
    recs = _useState172[0],
    setRecs = _useState172[1];
  var _useState173 = useState({
      totalIncome: 0,
      totalExpenses: 0,
      netBalance: 0
    }),
    _useState174 = _slicedToArray(_useState173, 2),
    summary = _useState174[0],
    setSummary = _useState174[1];
  var tRef = useRef(null);
  var _useState175 = useState({
      dateFrom: '',
      dateTo: '',
      type: '',
      category: ''
    }),
    _useState176 = _slicedToArray(_useState175, 2),
    filters = _useState176[0],
    setFilters = _useState176[1];
  var _useState177 = useState(false),
    _useState178 = _slicedToArray(_useState177, 2),
    showCats = _useState178[0],
    setShowCats = _useState178[1];
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      var d = Array.isArray(r) ? r : [];
      setRecs(d);
      google.script.run.withSuccessHandler(function (s) {
        setSummary(s && !s.error ? s : {
          totalIncome: 0,
          totalExpenses: 0,
          netBalance: 0
        });
        setLd(false);
        initT(d);
      }).withFailureHandler(function () {
        setLd(false);
        initT(d);
      }).getFinanceSummary();
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllFinanceRecords();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#finT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        $.fn.dataTable.ext.search = [];
        var t = $('#finT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'date',
            title: 'Date',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'type',
            title: 'Type',
            render: function render(d) {
              return "<span class=\"status-badge ".concat(statusCls(d), "\">").concat(d, "</span>");
            }
          }, {
            data: 'description',
            title: 'Description'
          }, {
            data: 'category',
            title: 'Category',
            render: function render(d) {
              return d || '-';
            }
          }, {
            data: 'shopSource',
            title: 'Shop/Source'
          }, {
            data: 'amount',
            title: 'Amount',
            render: function render(d, t, row) {
              return fmtCur(d, row.currency);
            }
          }, {
            data: 'balance',
            title: 'Balance',
            render: function render(d) {
              return fmtCur(d);
            }
          }, {
            data: 'enteredBy',
            title: 'Entered By'
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render() {
              return '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'desc']],
          createdRow: function createdRow(row, d) {
            if (d.type === 'Income') $(row).css('background-color', '#d4edda');else if (d.type === 'Expense') $(row).css('background-color', '#fff3cd');
          }
        });
        $('#finT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEdit(rd);
            setShow(true);
          } else delRec(rd);
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  var delRec = function delRec(rec) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete?',
      text: 'Delete this finance record?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteFinanceRecord(rec.rowIndex);
    });
  };
  useEffect(function () {
    if (!tRef.current || recs.length === 0) return;
    $.fn.dataTable.ext.search = [];
    $.fn.dataTable.ext.search.push(function (s, d, idx) {
      var row = recs[idx];
      if (!row) return true;
      if (filters.dateFrom) {
        var dt = new Date(row.date);
        if (dt < new Date(filters.dateFrom)) return false;
      }
      if (filters.dateTo) {
        var _dt = new Date(row.date);
        if (_dt > new Date(filters.dateTo + 'T23:59:59')) return false;
      }
      return true;
    });
    if (filters.type) tRef.current.column(1).search(filters.type);else tRef.current.column(1).search('');
    if (filters.category) tRef.current.column(3).search('^' + filters.category + '$', true, false);else tRef.current.column(3).search('');
    tRef.current.draw();
  }, [filters]);
  var clearF = function clearF() {
    setFilters({
      dateFrom: '',
      dateTo: '',
      type: '',
      category: ''
    });
    if (tRef.current) {
      $.fn.dataTable.ext.search = [];
      tRef.current.columns().search('').draw();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-coins"
  }), " Finance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return setShowCats(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tags"
  }), " Categories"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEdit(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add Entry"))), !ld && /*#__PURE__*/React.createElement("div", {
    className: "finance-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-up"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(summary.totalIncome)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Total Income")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card red"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(summary.totalExpenses)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Total Expenses")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-wallet"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(summary.netBalance)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Net Balance"))), !ld && /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: clearF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle"
  }), " Clear")), /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-alt"
  }), " From"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "filter-input",
    value: filters.dateFrom,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        dateFrom: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-alt"
  }), " To"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "filter-input",
    value: filters.dateTo,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        dateTo: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tag"
  }), " Type"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.type,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        type: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/React.createElement("option", null, "Income"), /*#__PURE__*/React.createElement("option", null, "Expense"))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tags"
  }), " Category"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.category,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        category: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), _toConsumableArray(new Set(recs.map(function (r) {
    return r.category;
  }).filter(Boolean))).map(function (c, i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: c
    }, c);
  }))))), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 6,
    columns: 8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "finT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(FinanceEntryModal, {
    record: edit,
    onClose: function onClose() {
      setShow(false);
      setEdit(null);
    },
    onSave: load,
    user: user
  }), showCats && /*#__PURE__*/React.createElement(CategoryManager, {
    onClose: function onClose() {
      return setShowCats(false);
    }
  }));
}
function UserModal(_ref26) {
  var editUser = _ref26.editUser,
    onClose = _ref26.onClose,
    onSave = _ref26.onSave;
  var _useState179 = useState({
      username: (editUser === null || editUser === void 0 ? void 0 : editUser.username) || '',
      password: '',
      role: (editUser === null || editUser === void 0 ? void 0 : editUser.role) || 'user'
    }),
    _useState180 = _slicedToArray(_useState179, 2),
    fd = _useState180[0],
    setFd = _useState180[1];
  var _useState181 = useState(false),
    _useState182 = _slicedToArray(_useState181, 2),
    sv = _useState182[0],
    setSv = _useState182[1];
  var submit = function submit(e) {
    e.preventDefault();
    setSv(true);
    if (editUser) {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateUser(editUser.rowIndex, fd.password || null, fd.role);
    } else {
      if (!fd.username || !fd.password) {
        Swal.fire({
          icon: 'warning',
          text: 'Username and password required'
        });
        setSv(false);
        return;
      }
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addUser(fd.username, fd.password, fd.role);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '500px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user"
  }), " ", editUser ? 'Edit' : 'Add', " User"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Username ", editUser ? '' : '*'), /*#__PURE__*/React.createElement("input", {
    value: fd.username,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        username: e.target.value
      }));
    },
    disabled: !!editUser,
    required: !editUser
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, editUser ? 'New Password (leave blank to keep)' : 'Password *'), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: fd.password,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        password: e.target.value
      }));
    },
    required: !editUser
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Role"), /*#__PURE__*/React.createElement("select", {
    value: fd.role,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        role: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, "User"), /*#__PURE__*/React.createElement("option", {
    value: "admin"
  }, "Admin"))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function UsersView(_ref27) {
  var user = _ref27.user;
  var _useState183 = useState(true),
    _useState184 = _slicedToArray(_useState183, 2),
    ld = _useState184[0],
    setLd = _useState184[1];
  var _useState185 = useState(false),
    _useState186 = _slicedToArray(_useState185, 2),
    show = _useState186[0],
    setShow = _useState186[1];
  var _useState187 = useState(null),
    _useState188 = _slicedToArray(_useState187, 2),
    edit = _useState188[0],
    setEdit = _useState188[1];
  var tRef = useRef(null);
  var _useState189 = useState({
      role: ''
    }),
    _useState190 = _slicedToArray(_useState189, 2),
    filters = _useState190[0],
    setFilters = _useState190[1];
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  useEffect(function () {
    if (!tRef.current) return;
    if (filters.role) tRef.current.column(1).search('^' + filters.role + '$', true, false);else tRef.current.column(1).search('');
    tRef.current.draw();
  }, [filters]);
  var clearF = function clearF() {
    setFilters({
      role: ''
    });
    if (tRef.current) {
      tRef.current.columns().search('').draw();
    }
  };
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r && r.error) {
        Swal.fire({
          icon: 'error',
          text: r.error
        });
        return;
      }
      initT(Array.isArray(r) ? r : []);
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllUsers();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#usrT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        var t = $('#usrT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'username',
            title: 'Username'
          }, {
            data: 'role',
            title: 'Role',
            render: function render(d) {
              return "<span class=\"role-badge ".concat(d === 'admin' ? 'role-admin' : 'role-user', "\">").concat(d, "</span>");
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render() {
              return '<button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[0, 'asc']]
        });
        $('#usrT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'edit') {
            setEdit(rd);
            setShow(true);
          } else delUser(rd);
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  var delUser = function delUser(u) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete User?',
      text: 'Delete ' + u.username + '?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteUser(u.rowIndex);
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-users"
  }), " Users"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEdit(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Add User")), !ld && /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: clearF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle"
  }), " Clear All")), /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-shield"
  }), " Role"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.role,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        role: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All Roles"), /*#__PURE__*/React.createElement("option", {
    value: "admin"
  }, "Admin"), /*#__PURE__*/React.createElement("option", {
    value: "user"
  }, "User"))))), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 5,
    columns: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "usrT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(UserModal, {
    editUser: edit,
    onClose: function onClose() {
      setShow(false);
      setEdit(null);
    },
    onSave: load
  }));
}
function AccountView(_ref28) {
  var user = _ref28.user;
  var _useState191 = useState(''),
    _useState192 = _slicedToArray(_useState191, 2),
    oldP = _useState192[0],
    setOldP = _useState192[1];
  var _useState193 = useState(''),
    _useState194 = _slicedToArray(_useState193, 2),
    newP = _useState194[0],
    setNewP = _useState194[1];
  var _useState195 = useState(''),
    _useState196 = _slicedToArray(_useState195, 2),
    confP = _useState196[0],
    setConfP = _useState196[1];
  var _useState197 = useState(false),
    _useState198 = _slicedToArray(_useState197, 2),
    sv = _useState198[0],
    setSv = _useState198[1];
  var submit = function submit(e) {
    e.preventDefault();
    if (newP !== confP) {
      Swal.fire({
        icon: 'error',
        text: 'New passwords do not match'
      });
      return;
    }
    if (newP.length < 4) {
      Swal.fire({
        icon: 'warning',
        text: 'Password must be at least 4 characters'
      });
      return;
    }
    setSv(true);
    google.script.run.withSuccessHandler(function (r) {
      setSv(false);
      if (r.success) {
        Swal.fire({
          icon: 'success',
          text: r.message,
          timer: 2000,
          showConfirmButton: false
        });
        setOldP('');
        setNewP('');
        setConfP('');
      } else Swal.fire({
        icon: 'error',
        text: r.message
      });
    }).withFailureHandler(function (e) {
      setSv(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).changePassword(user, oldP, newP);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section",
    style: {
      maxWidth: '500px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-circle"
  }), " My Account")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '20px',
      color: '#666'
    }
  }, "Logged in as: ", /*#__PURE__*/React.createElement("strong", null, user)), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Current Password *"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: oldP,
    onChange: function onChange(e) {
      return setOldP(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "New Password *"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: newP,
    onChange: function onChange(e) {
      return setNewP(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Confirm New Password *"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: confP,
    onChange: function onChange(e) {
      return setConfP(e.target.value);
    },
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Changing...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-key"
  }), " Change Password"))));
}
function AboutView() {
  return /*#__PURE__*/React.createElement("div", {
    className: "about-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "about-title"
  }, /*#__PURE__*/React.createElement("h1", null, "Hill View Eco Retreat"), /*#__PURE__*/React.createElement("p", {
    className: "about-dev"
  }, "Develped by ", /*#__PURE__*/React.createElement("strong", null, "Mohammad Rameez Imdad"), " (Rameez Scripts)"))), /*#__PURE__*/React.createElement("div", {
    className: "about-card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-question-circle"
  }), " What is this App?"), /*#__PURE__*/React.createElement("p", null, "So basicaly this is the Hill View Eco Retreat management system built with Google Apps Script. Its used to manage room bookings, guest check-ins and checkouts, generate invoices, and track income and expenses. Think of it like a digital front desk where you can handle evrything from one place.")), /*#__PURE__*/React.createElement("div", {
    className: "about-card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-clipboard-list"
  }), " What Can You Do With It?"), /*#__PURE__*/React.createElement("ul", {
    className: "about-features"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Room Management"), " - Add, edit, and manage hotel rooms with diffrent types and rates"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Bookings"), " - Create new bookings, track guest details, and manage reservations"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Checkout & Invoicing"), " - Process checkouts and generate professional PDF invoices"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Standalone Invoices"), " - Create invoices with rooms, activities, and services with auto-numbering (INV-0001)"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Multi-Currency"), " - Support for MVR and USD currencies per document"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Tax System"), " - Optional GST (percentage) and Green Tax (per person per night) on invoices"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Finance Tracking"), " - Record income and expenses with categories, currency support, and running balance"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Budget Management"), " - Set monthly budgets and track spending with visual progress bars"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Categories"), " - Manage income and expense categories for better financial tracking"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Monthly Reports"), " - Generate detailed financial reports with category breakdowns"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "PDF to Drive"), " - Save invoice PDFs directly to Google Drive"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Hotel Settings"), " - Configure hotel details, logo, default currency, and tax rates"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Dashboard"), " - Visual overview with charts showing room occupancy, revenue, invoices, and budget"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "User Management"), " - Manage staff accounts with Admin and User roles"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check"
  }), " ", /*#__PURE__*/React.createElement("strong", null, "Export Data"), " - Export any table to CSV, PDF, or print directly"))), /*#__PURE__*/React.createElement("div", {
    className: "about-card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-users-cog"
  }), " User Roles & Permissions"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '15px'
    }
  }, "The system has diffrent user roles. Each role can do diffrent things based on there access level."), /*#__PURE__*/React.createElement("div", {
    className: "about-table-wrapper"
  }, /*#__PURE__*/React.createElement("table", {
    className: "about-roles-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Feature / Action"), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "role-badge role-admin"
  }, "Admin")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "role-badge role-user"
  }, "User")))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "View Dashboard"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Create Bookings"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "View All Bookings"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }), " Own only")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Checkout Guests"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Manage Rooms"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Manage Invoices"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Finance Tracking"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Monthly Reports"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Hotel Settings"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Manage Users"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle text-danger"
  }))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Change Own Password"), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle text-success"
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "about-card about-developer"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-code"
  }), " About the Developer"), /*#__PURE__*/React.createElement("div", {
    className: "developer-info"
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Developer",
    className: "developer-avatar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "developer-details"
  }, /*#__PURE__*/React.createElement("h3", null, "Mohammad Rameez Imdad"), /*#__PURE__*/React.createElement("p", {
    className: "developer-brand"
  }, "Rameez Scripts"), /*#__PURE__*/React.createElement("p", null, "I build custom web apps, dashboards, Google Apps Script solutions, and automation tools. If you need somthing built for your buisness or project, feel free to reach out!"), /*#__PURE__*/React.createElement("div", {
    className: "developer-links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/923224083545",
    target: "_blank",
    className: "dev-link whatsapp"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-whatsapp"
  }), " WhatsApp Me"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/@rameezimdad",
    target: "_blank",
    className: "dev-link youtube"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-youtube"
  }), " Subscribe on YouTube"))))), /*#__PURE__*/React.createElement("div", {
    className: "about-footer"
  }, /*#__PURE__*/React.createElement("p", null, "Made with ", /*#__PURE__*/React.createElement("i", {
    className: "fas fa-heart",
    style: {
      color: '#ea4335'
    }
  }), " by Rameez Scripts"), /*#__PURE__*/React.createElement("p", {
    className: "about-version"
  }, "Version 2.0.0")));
}
function InvoiceModal(_ref29) {
  var invoice = _ref29.invoice,
    onClose = _ref29.onClose,
    onSave = _ref29.onSave,
    user = _ref29.user;
  var _useState199 = useState({
      guestName: (invoice === null || invoice === void 0 ? void 0 : invoice.guestName) || '',
      phone: (invoice === null || invoice === void 0 ? void 0 : invoice.phone) || '',
      email: (invoice === null || invoice === void 0 ? void 0 : invoice.email) || '',
      customerTIN: (invoice === null || invoice === void 0 ? void 0 : invoice.customerTIN) || '',
      currency: (invoice === null || invoice === void 0 ? void 0 : invoice.currency) || APP_CURRENCY,
      dueDate: invoice !== null && invoice !== void 0 && invoice.dueDate ? invoice.dueDate.slice(0, 10) : '',
      status: (invoice === null || invoice === void 0 ? void 0 : invoice.status) || 'Draft',
      notes: (invoice === null || invoice === void 0 ? void 0 : invoice.notes) || '',
      discount: (invoice === null || invoice === void 0 ? void 0 : invoice.discount) || 0,
      gstEnabled: (invoice === null || invoice === void 0 ? void 0 : invoice.gstEnabled) || false,
      gstPercent: (invoice === null || invoice === void 0 ? void 0 : invoice.gstPercent) || 16,
      greenTaxEnabled: (invoice === null || invoice === void 0 ? void 0 : invoice.greenTaxEnabled) || false,
      greenTaxPerNight: (invoice === null || invoice === void 0 ? void 0 : invoice.greenTaxPerNight) || 6,
      greenTaxPax: (invoice === null || invoice === void 0 ? void 0 : invoice.greenTaxPax) || 0,
      greenTaxNights: (invoice === null || invoice === void 0 ? void 0 : invoice.greenTaxNights) || 0
    }),
    _useState200 = _slicedToArray(_useState199, 2),
    fd = _useState200[0],
    setFd = _useState200[1];
  var _useState201 = useState(function () {
      try {
        return JSON.parse(typeof (invoice === null || invoice === void 0 ? void 0 : invoice.items) === 'string' ? invoice.items : '[]');
      } catch (e) {
        return [];
      }
    }),
    _useState202 = _slicedToArray(_useState201, 2),
    items = _useState202[0],
    setItems = _useState202[1];
  var _useState203 = useState(false),
    _useState204 = _slicedToArray(_useState203, 2),
    sv = _useState204[0],
    setSv = _useState204[1];
  var _useState205 = useState([]),
    _useState206 = _slicedToArray(_useState205, 2),
    customers = _useState206[0],
    setCustomers = _useState206[1];
  var _useState207 = useState(''),
    _useState208 = _slicedToArray(_useState207, 2),
    selCust = _useState208[0],
    setSelCust = _useState208[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setCustomers(Array.isArray(r) ? r : []);
    }).withFailureHandler(function () {}).getAllCustomers();
  }, []);
  var pickCustomer = function pickCustomer(val) {
    setSelCust(val);
    if (val) {
      var c = customers.find(function (x) {
        return x.customerId === val;
      });
      if (c) setFd(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          guestName: c.name || p.guestName,
          phone: c.phone || p.phone,
          email: c.email || p.email,
          customerTIN: c.customerTIN || p.customerTIN
        });
      });
    }
  };
  var addRoom = function addRoom() {
    return setItems([].concat(_toConsumableArray(items), [{
      type: 'room',
      roomType: 'Standard',
      quantity: 1,
      nights: 1,
      rate: 0,
      amount: 0
    }]));
  };
  var addActivity = function addActivity() {
    return setItems([].concat(_toConsumableArray(items), [{
      type: 'activity',
      description: '',
      pax: 1,
      rate: 0,
      amount: 0
    }]));
  };
  var addService = function addService() {
    return setItems([].concat(_toConsumableArray(items), [{
      type: 'service',
      description: '',
      amount: 0
    }]));
  };
  var upd = function upd(idx, f, v) {
    var n = _toConsumableArray(items);
    n[idx] = _objectSpread(_objectSpread({}, n[idx]), {}, _defineProperty({}, f, v));
    if (n[idx].type === 'room') {
      var q = parseFloat(n[idx].quantity) || 1;
      var nt = parseFloat(n[idx].nights) || 0;
      var r = parseFloat(n[idx].rate) || 0;
      n[idx].amount = q * nt * r;
    } else if (n[idx].type === 'activity') {
      var px = parseFloat(n[idx].pax) || 1;
      var _r = parseFloat(n[idx].rate) || 0;
      n[idx].amount = px * _r;
    }
    setItems(n);
  };
  var rem = function rem(idx) {
    return setItems(items.filter(function (_, i) {
      return i !== idx;
    }));
  };
  var subTotal = items.reduce(function (s, it) {
    return s + (parseFloat(it.amount) || 0);
  }, 0);
  var disc = parseFloat(fd.discount) || 0;
  var gstAmt = fd.gstEnabled ? (subTotal - disc) * (parseFloat(fd.gstPercent) || 0) / 100 : 0;
  var gtAmt = fd.greenTaxEnabled ? (parseFloat(fd.greenTaxPerNight) || 0) * (parseFloat(fd.greenTaxPax) || 0) * (parseFloat(fd.greenTaxNights) || 0) : 0;
  var total = subTotal - disc + gstAmt + gtAmt;
  var submit = function submit(e) {
    e.preventDefault();
    if (items.length === 0) return Swal.fire({
      icon: 'warning',
      text: 'Add at least one item.'
    });
    setSv(true);
    var data = _objectSpread(_objectSpread({}, fd), {}, {
      items: JSON.stringify(items),
      subTotal: subTotal,
      gstAmount: gstAmt,
      greenTaxAmount: gtAmt,
      totalAmount: total,
      createdBy: user
    });
    if (invoice) {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          var msg = r.message;
          if (r.paymentRecorded) msg += '\n\nPayment has been auto-recorded in Finance.';
          Swal.fire({
            icon: 'success',
            text: msg,
            timer: r.paymentRecorded ? 4000 : 2000,
            showConfirmButton: !!r.paymentRecorded
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).updateInvoice(invoice.rowIndex, data);
    } else {
      google.script.run.withSuccessHandler(function (r) {
        setSv(false);
        if (r.success) {
          Swal.fire({
            icon: 'success',
            text: r.message,
            timer: 2000,
            showConfirmButton: false
          });
          onClose();
          setTimeout(onSave, 100);
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        setSv(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).addInvoice(data);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal modal-wide",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), " ", invoice ? 'Edit' : 'New', " Invoice"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit
  }, !invoice && customers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-user-tag"
  }), " Select Customer (auto-fills guest info)"), /*#__PURE__*/React.createElement(SearchableSelect, {
    value: selCust,
    onChange: pickCustomer,
    options: [{
      value: '',
      label: '-- Manual Entry --'
    }].concat(_toConsumableArray(customers.map(function (c) {
      return {
        value: c.customerId,
        label: c.name + (c.email ? ' (' + c.email + ')' : '')
      };
    }))),
    placeholder: "Search customer..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Guest Name *"), /*#__PURE__*/React.createElement("input", {
    value: fd.guestName,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        guestName: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Phone"), /*#__PURE__*/React.createElement("input", {
    value: fd.phone,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        phone: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: fd.email,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        email: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Customer TIN"), /*#__PURE__*/React.createElement("input", {
    value: fd.customerTIN,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        customerTIN: e.target.value
      }));
    },
    placeholder: "Optional"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Due Date"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: fd.dueDate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        dueDate: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Status"), /*#__PURE__*/React.createElement("select", {
    value: fd.status,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        status: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", null, "Draft"), /*#__PURE__*/React.createElement("option", null, "Sent"), /*#__PURE__*/React.createElement("option", null, "Paid"), /*#__PURE__*/React.createElement("option", null, "Overdue"), /*#__PURE__*/React.createElement("option", null, "Cancelled"))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Currency"), /*#__PURE__*/React.createElement("select", {
    value: fd.currency,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        currency: e.target.value
      }));
    },
    style: {
      fontSize: '16px'
    }
  }, CURRENCIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  })))), /*#__PURE__*/React.createElement("div", {
    className: "line-items-section"
  }, /*#__PURE__*/React.createElement("h4", null, "Room Items ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-primary",
    onClick: addRoom
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Room")), items.filter(function (i) {
    return i.type === 'room';
  }).map(function (it, i) {
    var ri = items.indexOf(it);
    return /*#__PURE__*/React.createElement("div", {
      key: ri,
      className: "line-item-row room-item"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Room Type"), /*#__PURE__*/React.createElement("select", {
      value: it.roomType || '',
      onChange: function onChange(e) {
        return upd(ri, 'roomType', e.target.value);
      }
    }, /*#__PURE__*/React.createElement("option", null, "Standard"), /*#__PURE__*/React.createElement("option", null, "Deluxe"), /*#__PURE__*/React.createElement("option", null, "Suite"), /*#__PURE__*/React.createElement("option", null, "Family"), /*#__PURE__*/React.createElement("option", null, "Single"), /*#__PURE__*/React.createElement("option", null, "Double"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Qty"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      value: it.quantity || 1,
      onChange: function onChange(e) {
        return upd(ri, 'quantity', e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nights"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      value: it.nights || '',
      onChange: function onChange(e) {
        return upd(ri, 'nights', e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Rate"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.01",
      min: "0",
      value: it.rate || '',
      onChange: function onChange(e) {
        return upd(ri, 'rate', e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Amount"), /*#__PURE__*/React.createElement("input", {
      value: fmtCur(it.amount, fd.currency),
      readOnly: true,
      style: {
        background: '#f0f0f0'
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "remove-item",
      onClick: function onClick() {
        return rem(ri);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "line-items-section"
  }, /*#__PURE__*/React.createElement("h4", null, "Activity Items ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-primary",
    onClick: addActivity
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Activity")), items.filter(function (i) {
    return i.type === 'activity';
  }).map(function (it) {
    var ri = items.indexOf(it);
    return /*#__PURE__*/React.createElement("div", {
      key: ri,
      className: "line-item-row activity-item"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Description"), /*#__PURE__*/React.createElement("input", {
      value: it.description || '',
      onChange: function onChange(e) {
        return upd(ri, 'description', e.target.value);
      },
      placeholder: "e.g. Snorkeling Trip"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Pax"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      value: it.pax || '',
      onChange: function onChange(e) {
        return upd(ri, 'pax', e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Rate/Person"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.01",
      min: "0",
      value: it.rate || '',
      onChange: function onChange(e) {
        return upd(ri, 'rate', e.target.value);
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Amount"), /*#__PURE__*/React.createElement("input", {
      value: fmtCur(it.amount, fd.currency),
      readOnly: true,
      style: {
        background: '#f0f0f0'
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "remove-item",
      onClick: function onClick() {
        return rem(ri);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "line-items-section"
  }, /*#__PURE__*/React.createElement("h4", null, "Service Items ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-primary",
    onClick: addService
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " Service")), items.filter(function (i) {
    return i.type === 'service';
  }).map(function (it) {
    var ri = items.indexOf(it);
    return /*#__PURE__*/React.createElement("div", {
      key: ri,
      className: "line-item-row service-item"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Description"), /*#__PURE__*/React.createElement("input", {
      value: it.description || '',
      onChange: function onChange(e) {
        return upd(ri, 'description', e.target.value);
      },
      placeholder: "e.g. Airport Transfer"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Amount"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.01",
      min: "0",
      value: it.amount || '',
      onChange: function onChange(e) {
        return upd(ri, 'amount', parseFloat(e.target.value) || 0);
      }
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "remove-item",
      onClick: function onClick() {
        return rem(ri);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-times"
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "tax-toggle-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tax-toggle-header"
  }, /*#__PURE__*/React.createElement("label", {
    className: "toggle-switch"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: fd.gstEnabled,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstEnabled: e.target.checked
      }));
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "toggle-slider"
  })), /*#__PURE__*/React.createElement("label", null, "GST")), fd.gstEnabled && /*#__PURE__*/React.createElement("div", {
    className: "tax-inputs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "GST %"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: fd.gstPercent,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstPercent: e.target.value
      }));
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "tax-toggle-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tax-toggle-header"
  }, /*#__PURE__*/React.createElement("label", {
    className: "toggle-switch"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: fd.greenTaxEnabled,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        greenTaxEnabled: e.target.checked
      }));
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "toggle-slider"
  })), /*#__PURE__*/React.createElement("label", null, "Green Tax")), fd.greenTaxEnabled && /*#__PURE__*/React.createElement("div", {
    className: "tax-inputs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Rate/Night"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: fd.greenTaxPerNight,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        greenTaxPerNight: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Pax"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: fd.greenTaxPax,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        greenTaxPax: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Nights"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: "0",
    value: fd.greenTaxNights,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        greenTaxNights: e.target.value
      }));
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Discount"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    min: "0",
    value: fd.discount,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        discount: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "totals-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, fmtCur(subTotal, fd.currency))), disc > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("span", null, "- ", fmtCur(disc, fd.currency))), fd.gstEnabled && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "GST (", fd.gstPercent, "%)"), /*#__PURE__*/React.createElement("span", null, fmtCur(gstAmt, fd.currency))), fd.greenTaxEnabled && /*#__PURE__*/React.createElement("div", {
    className: "totals-row"
  }, /*#__PURE__*/React.createElement("span", null, "Green Tax"), /*#__PURE__*/React.createElement("span", null, fmtCur(gtAmt, fd.currency))), /*#__PURE__*/React.createElement("div", {
    className: "totals-row grand-total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, fmtCur(total, fd.currency)))), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: {
      marginTop: '15px'
    }
  }, /*#__PURE__*/React.createElement("label", null, "Notes"), /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: fd.notes,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        notes: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save Invoice")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Cancel"))))));
}
function InvoicePreviewModal(_ref30) {
  var invoice = _ref30.invoice,
    onClose = _ref30.onClose;
  var cur = invoice.currency || APP_CURRENCY;
  var fc = function fc(a) {
    return fmtCur(a, cur);
  };
  var items = function () {
    try {
      return JSON.parse(typeof invoice.items === 'string' ? invoice.items : '[]');
    } catch (e) {
      return [];
    }
  }();
  var roomItems = items.filter(function (i) {
    return i.type === 'room';
  });
  var actItems = items.filter(function (i) {
    return i.type === 'activity';
  });
  var svcItems = items.filter(function (i) {
    return i.type === 'service';
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal modal-wide",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), " Invoice Preview"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoice-preview"
  }, /*#__PURE__*/React.createElement("h2", null, "Hill View Eco Retreat"), /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, "INVOICE"), /*#__PURE__*/React.createElement("div", {
    className: "invoice-detail-grid"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Invoice #:"), " ", invoice.invoiceId), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Date:"), " ", fmtDate(invoice.createdDate)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Guest:"), " ", invoice.guestName), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Due Date:"), " ", fmtDate(invoice.dueDate)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Phone:"), " ", invoice.phone || '-'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Status:"), " ", /*#__PURE__*/React.createElement("span", {
    className: "status-badge ".concat(statusCls(invoice.status))
  }, invoice.status)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", invoice.email || '-'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Currency:"), " ", cur), invoice.customerTIN && /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Customer TIN:"), " ", invoice.customerTIN)), /*#__PURE__*/React.createElement("table", {
    className: "invoice-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Details"), /*#__PURE__*/React.createElement("th", {
    className: "right"
  }, "Amount (", cur, ")"))), /*#__PURE__*/React.createElement("tbody", null, roomItems.map(function (it, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: 'r' + i
    }, /*#__PURE__*/React.createElement("td", null, it.roomType || 'Room'), /*#__PURE__*/React.createElement("td", null, it.quantity || 1, " room(s) x ", it.nights, " night(s) x ", fc(it.rate)), /*#__PURE__*/React.createElement("td", {
      className: "right"
    }, fc(it.amount)));
  }), actItems.map(function (it, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: 'a' + i
    }, /*#__PURE__*/React.createElement("td", null, it.description || 'Activity'), /*#__PURE__*/React.createElement("td", null, it.pax, " pax x ", fc(it.rate)), /*#__PURE__*/React.createElement("td", {
      className: "right"
    }, fc(it.amount)));
  }), svcItems.map(function (it, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: 's' + i
    }, /*#__PURE__*/React.createElement("td", null, it.description || 'Service'), /*#__PURE__*/React.createElement("td", null, "-"), /*#__PURE__*/React.createElement("td", {
      className: "right"
    }, fc(it.amount)));
  }), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/React.createElement("strong", null, "Subtotal")), /*#__PURE__*/React.createElement("td", {
    className: "right"
  }, /*#__PURE__*/React.createElement("strong", null, fc(invoice.subTotal)))), invoice.discount > 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "Discount"), /*#__PURE__*/React.createElement("td", {
    className: "right"
  }, "- ", fc(invoice.discount))), invoice.gstEnabled && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "GST (", invoice.gstPercent, "%)"), /*#__PURE__*/React.createElement("td", {
    className: "right"
  }, fc(invoice.gstAmount))), invoice.greenTaxEnabled && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, "Green Tax (", cur, " ", invoice.greenTaxPerNight, " x ", invoice.greenTaxPax, " pax x ", invoice.greenTaxNights, " nights)"), /*#__PURE__*/React.createElement("td", {
    className: "right"
  }, fc(invoice.greenTaxAmount))), /*#__PURE__*/React.createElement("tr", {
    className: "total-row"
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }, /*#__PURE__*/React.createElement("strong", null, "TOTAL")), /*#__PURE__*/React.createElement("td", {
    className: "right"
  }, /*#__PURE__*/React.createElement("strong", null, fc(invoice.totalAmount)))))), invoice.notes && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '15px',
      fontStyle: 'italic',
      color: '#666'
    }
  }, "Notes: ", invoice.notes)), /*#__PURE__*/React.createElement("div", {
    className: "preview-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return downloadInvoicePdf(invoice);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-download"
  }), " Download PDF"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      return savePdfToDriveHelper(invoice);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-cloud-upload-alt"
  }), " Save to Drive"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Close")))));
}
function InvoicesView(_ref31) {
  var user = _ref31.user;
  var _useState209 = useState(true),
    _useState210 = _slicedToArray(_useState209, 2),
    ld = _useState210[0],
    setLd = _useState210[1];
  var _useState211 = useState(false),
    _useState212 = _slicedToArray(_useState211, 2),
    show = _useState212[0],
    setShow = _useState212[1];
  var _useState213 = useState(null),
    _useState214 = _slicedToArray(_useState213, 2),
    edit = _useState214[0],
    setEdit = _useState214[1];
  var _useState215 = useState(null),
    _useState216 = _slicedToArray(_useState215, 2),
    preview = _useState216[0],
    setPreview = _useState216[1];
  var tRef = useRef(null);
  var _useState217 = useState([]),
    _useState218 = _slicedToArray(_useState217, 2),
    recs = _useState218[0],
    setRecs = _useState218[1];
  var _useState219 = useState({
      dateFrom: '',
      dateTo: '',
      status: '',
      currency: ''
    }),
    _useState220 = _slicedToArray(_useState219, 2),
    filters = _useState220[0],
    setFilters = _useState220[1];
  useEffect(function () {
    load();
    return function () {
      if (tRef.current) try {
        tRef.current.destroy();
      } catch (e) {}
    };
  }, []);
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (odRes) {
      google.script.run.withSuccessHandler(function (r) {
        var d = Array.isArray(r) ? r : [];
        setRecs(d);
        setLd(false);
        initT(d);
        if (odRes && odRes.overdueCount > 0) Swal.fire({
          icon: 'warning',
          title: 'Overdue Invoices',
          text: odRes.overdueCount + ' invoice(s) are now overdue!',
          timer: 4000,
          showConfirmButton: false
        });
      }).withFailureHandler(function (e) {
        setLd(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).getAllInvoices();
    }).withFailureHandler(function () {
      google.script.run.withSuccessHandler(function (r) {
        var d = Array.isArray(r) ? r : [];
        setRecs(d);
        setLd(false);
        initT(d);
      }).withFailureHandler(function (e) {
        setLd(false);
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).getAllInvoices();
    }).checkOverdueInvoices();
  };
  var initT = function initT(data) {
    if (tRef.current) {
      try {
        tRef.current.destroy();
        tRef.current = null;
        $('#invT').empty();
      } catch (e) {}
    }
    setTimeout(function () {
      try {
        $.fn.dataTable.ext.search = [];
        var t = $('#invT').DataTable({
          data: data,
          destroy: true,
          columns: [{
            data: 'invoiceId',
            title: 'Invoice #'
          }, {
            data: 'guestName',
            title: 'Guest'
          }, {
            data: 'createdDate',
            title: 'Date',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'dueDate',
            title: 'Due',
            render: function render(d) {
              return fmtDate(d);
            }
          }, {
            data: 'status',
            title: 'Status',
            render: function render(d) {
              return "<span class=\"status-badge ".concat(statusCls(d), "\">").concat(d, "</span>");
            }
          }, {
            data: 'currency',
            title: 'Cur'
          }, {
            data: 'totalAmount',
            title: 'Total',
            render: function render(d, t, row) {
              return fmtCur(d, row.currency);
            }
          }, {
            data: null,
            title: 'Actions',
            orderable: false,
            className: 'all',
            responsivePriority: 1,
            render: function render() {
              return '<button class="action-icon view-icon" data-action="view"><i class="fas fa-eye"></i></button><button class="action-icon edit-icon" data-action="edit"><i class="fas fa-edit"></i></button><button class="action-icon" data-action="email" title="Email Invoice" style="color:#0074D9"><i class="fas fa-envelope"></i></button><button class="action-icon" data-action="pdf" style="color:#001f3f"><i class="fas fa-file-pdf"></i></button><button class="action-icon" data-action="drive" style="color:#34a853"><i class="fas fa-cloud-upload-alt"></i></button><button class="action-icon delete-icon" data-action="delete"><i class="fas fa-trash"></i></button>';
            }
          }],
          pageLength: 10,
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          responsive: true,
          dom: 'Blfrtip',
          buttons: [{
            extend: 'csv',
            text: '<i class="fas fa-file-csv"></i> CSV',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'pdf',
            text: '<i class="fas fa-file-pdf"></i> PDF',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }, {
            extend: 'print',
            text: '<i class="fas fa-print"></i> Print',
            exportOptions: {
              columns: ':not(:last-child)'
            }
          }],
          order: [[2, 'desc']]
        });
        $('#invT').off('click', '.action-icon').on('click', '.action-icon', function () {
          var a = $(this).data('action');
          var tr = $(this).closest('tr');
          var rd = t.row(tr.hasClass('child') ? tr.prev() : tr).data();
          if (a === 'view') setPreview(rd);else if (a === 'edit') {
            setEdit(rd);
            setShow(true);
          } else if (a === 'email') emailInv(rd);else if (a === 'pdf') downloadInvoicePdf(rd);else if (a === 'drive') savePdfToDriveHelper(rd);else if (a === 'delete') delRec(rd);
        });
        tRef.current = t;
      } catch (e) {
        console.error(e);
      }
    }, 150);
  };
  var delRec = function delRec(rec) {
    Swal.fire({
      icon: 'warning',
      title: 'Delete?',
      text: 'Delete invoice ' + rec.invoiceId + '?',
      showCancelButton: true,
      confirmButtonColor: '#ea4335',
      confirmButtonText: 'Delete'
    }).then(function (r) {
      if (r.isConfirmed) google.script.run.withSuccessHandler(function (res) {
        if (res.success) {
          Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 2000,
            showConfirmButton: false
          });
          setTimeout(load, 100);
        } else Swal.fire({
          icon: 'error',
          text: res.message
        });
      }).withFailureHandler(function (e) {
        return Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).deleteInvoice(rec.rowIndex);
    });
  };
  var emailInv = function emailInv(inv) {
    if (!inv.email) return Swal.fire({
      icon: 'warning',
      text: 'No email address on this invoice.'
    });
    Swal.fire({
      icon: 'question',
      title: 'Email Invoice?',
      text: 'Send invoice ' + inv.invoiceId + ' to ' + inv.email + '?',
      showCancelButton: true,
      confirmButtonColor: '#001f3f',
      confirmButtonText: 'Send Email'
    }).then(function (r) {
      if (r.isConfirmed) {
        Swal.fire({
          title: 'Sending email...',
          allowOutsideClick: false,
          didOpen: function didOpen() {
            return Swal.showLoading();
          }
        });
        google.script.run.withSuccessHandler(function (res) {
          Swal.close();
          if (res.success) Swal.fire({
            icon: 'success',
            text: res.message,
            timer: 3000,
            showConfirmButton: false
          });else Swal.fire({
            icon: 'error',
            text: res.message
          });
        }).withFailureHandler(function (e) {
          Swal.close();
          Swal.fire({
            icon: 'error',
            text: e.message
          });
        }).emailInvoice(inv.invoiceId);
      }
    });
  };
  useEffect(function () {
    if (!tRef.current || recs.length === 0) return;
    $.fn.dataTable.ext.search = [];
    $.fn.dataTable.ext.search.push(function (s, d, idx) {
      var row = recs[idx];
      if (!row) return true;
      if (filters.dateFrom) {
        var dt = new Date(row.createdDate);
        if (dt < new Date(filters.dateFrom)) return false;
      }
      if (filters.dateTo) {
        var _dt2 = new Date(row.createdDate);
        if (_dt2 > new Date(filters.dateTo + 'T23:59:59')) return false;
      }
      return true;
    });
    if (filters.status) tRef.current.column(4).search('^' + filters.status + '$', true, false);else tRef.current.column(4).search('');
    if (filters.currency) tRef.current.column(5).search(filters.currency);else tRef.current.column(5).search('');
    tRef.current.draw();
  }, [filters]);
  var clearF = function clearF() {
    setFilters({
      dateFrom: '',
      dateTo: '',
      status: '',
      currency: ''
    });
    if (tRef.current) {
      $.fn.dataTable.ext.search = [];
      tRef.current.columns().search('').draw();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-file-invoice-dollar"
  }), " Invoices"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: function onClick() {
      setEdit(null);
      setShow(true);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }), " New Invoice")), !ld && /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Filters"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary btn-sm",
    onClick: clearF
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times-circle"
  }), " Clear")), /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-alt"
  }), " From"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "filter-input",
    value: filters.dateFrom,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        dateFrom: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-alt"
  }), " To"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: "filter-input",
    value: filters.dateTo,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        dateTo: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-check-circle"
  }), " Status"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.status,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        status: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), /*#__PURE__*/React.createElement("option", null, "Draft"), /*#__PURE__*/React.createElement("option", null, "Sent"), /*#__PURE__*/React.createElement("option", null, "Paid"), /*#__PURE__*/React.createElement("option", null, "Overdue"), /*#__PURE__*/React.createElement("option", null, "Cancelled"))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-money-bill"
  }), " Currency"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: filters.currency,
    onChange: function onChange(e) {
      return setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        currency: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "All"), CURRENCIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  }))))), ld && /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 5,
    columns: 7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: ld ? 'none' : 'block'
    }
  }, /*#__PURE__*/React.createElement("table", {
    id: "invT",
    className: "display",
    style: {
      width: '100%'
    }
  })), show && /*#__PURE__*/React.createElement(InvoiceModal, {
    invoice: edit,
    onClose: function onClose() {
      setShow(false);
      setEdit(null);
    },
    onSave: load,
    user: user
  }), preview && /*#__PURE__*/React.createElement(InvoicePreviewModal, {
    invoice: preview,
    onClose: function onClose() {
      return setPreview(null);
    }
  }));
}
function SettingsView(_ref32) {
  var user = _ref32.user;
  var _useState221 = useState(true),
    _useState222 = _slicedToArray(_useState221, 2),
    ld = _useState222[0],
    setLd = _useState222[1];
  var _useState223 = useState(false),
    _useState224 = _slicedToArray(_useState223, 2),
    sv = _useState224[0],
    setSv = _useState224[1];
  var _useState225 = useState({
      hotelName: 'Hill View Eco Retreat',
      hotelAddress: '',
      hotelPhone: '',
      hotelEmail: '',
      hotelTIN: '',
      logoUrl: '',
      defaultCurrency: 'MVR',
      gstDefaultPercent: 16,
      greenTaxDefaultRate: 6
    }),
    _useState226 = _slicedToArray(_useState225, 2),
    fd = _useState226[0],
    setFd = _useState226[1];
  useEffect(function () {
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r.success) {
        setFd(_objectSpread(_objectSpread({}, fd), r.data));
        if (r.data.defaultCurrency) APP_CURRENCY = r.data.defaultCurrency;
      }
    }).withFailureHandler(function () {
      return setLd(false);
    }).getSettings();
  }, []);
  var save = function save() {
    setSv(true);
    google.script.run.withSuccessHandler(function (r) {
      setSv(false);
      if (r.success) {
        APP_CURRENCY = fd.defaultCurrency;
        Swal.fire({
          icon: 'success',
          text: r.message,
          timer: 2000,
          showConfirmButton: false
        });
      } else Swal.fire({
        icon: 'error',
        text: r.message
      });
    }).withFailureHandler(function (e) {
      setSv(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).updateSettings(fd);
  };
  var uploadLogo = function uploadLogo(e) {
    var file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) return Swal.fire({
      icon: 'warning',
      text: 'Max 2MB file size.'
    });
    var reader = new FileReader();
    reader.onload = function () {
      var b64 = reader.result.split(',')[1];
      Swal.fire({
        title: 'Uploading...',
        allowOutsideClick: false,
        didOpen: function didOpen() {
          return Swal.showLoading();
        }
      });
      google.script.run.withSuccessHandler(function (r) {
        Swal.close();
        if (r.success) {
          setFd(_objectSpread(_objectSpread({}, fd), {}, {
            logoUrl: r.logoUrl,
            logoFileId: r.fileId
          }));
          Swal.fire({
            icon: 'success',
            text: 'Logo uploaded!',
            timer: 2000,
            showConfirmButton: false
          });
        } else Swal.fire({
          icon: 'error',
          text: r.message
        });
      }).withFailureHandler(function (e) {
        Swal.close();
        Swal.fire({
          icon: 'error',
          text: e.message
        });
      }).uploadLogo(b64, file.name, file.type);
    };
    reader.readAsDataURL(file);
  };
  if (ld) return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DashboardCardSkeleton, null));
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-cog"
  }), " Settings")), /*#__PURE__*/React.createElement("div", {
    className: "settings-form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hotel Name"), /*#__PURE__*/React.createElement("input", {
    value: fd.hotelName,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        hotelName: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hotel Phone"), /*#__PURE__*/React.createElement("input", {
    value: fd.hotelPhone,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        hotelPhone: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hotel Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: fd.hotelEmail,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        hotelEmail: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hotel TIN"), /*#__PURE__*/React.createElement("input", {
    value: fd.hotelTIN,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        hotelTIN: e.target.value
      }));
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Hotel Address"), /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: fd.hotelAddress,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        hotelAddress: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Logo"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: uploadLogo
  }), fd.logoUrl && /*#__PURE__*/React.createElement("img", {
    src: fd.logoUrl,
    alt: "Logo",
    className: "logo-preview"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Default Currency"), /*#__PURE__*/React.createElement("select", {
    value: fd.defaultCurrency,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        defaultCurrency: e.target.value
      }));
    },
    style: {
      fontSize: '16px'
    }
  }, CURRENCIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Default GST %"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: fd.gstDefaultPercent,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        gstDefaultPercent: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/React.createElement("label", null, "Green Tax Rate (per night)"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: fd.greenTaxDefaultRate,
    onChange: function onChange(e) {
      return setFd(_objectSpread(_objectSpread({}, fd), {}, {
        greenTaxDefaultRate: e.target.value
      }));
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: save,
    disabled: sv
  }, sv ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-spinner fa-spin"
  }), " Saving...") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-save"
  }), " Save Settings"))));
}
function CategoryManager(_ref33) {
  var onClose = _ref33.onClose;
  var _useState227 = useState(true),
    _useState228 = _slicedToArray(_useState227, 2),
    ld = _useState228[0],
    setLd = _useState228[1];
  var _useState229 = useState([]),
    _useState230 = _slicedToArray(_useState229, 2),
    cats = _useState230[0],
    setCats = _useState230[1];
  var _useState231 = useState(''),
    _useState232 = _slicedToArray(_useState231, 2),
    name = _useState232[0],
    setName = _useState232[1];
  var _useState233 = useState('Expense'),
    _useState234 = _slicedToArray(_useState233, 2),
    type = _useState234[0],
    setType = _useState234[1];
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      setCats(Array.isArray(r) ? r : []);
    }).withFailureHandler(function () {
      return setLd(false);
    }).getAllCategories();
  };
  useEffect(function () {
    load();
  }, []);
  var add = function add() {
    if (!name.trim()) return;
    google.script.run.withSuccessHandler(function (r) {
      if (r.success) {
        setName('');
        load();
      } else Swal.fire({
        icon: 'error',
        text: r.message
      });
    }).addCategory(name.trim(), type, '');
  };
  var del = function del(cat) {
    if (cat.isDefault) return Swal.fire({
      icon: 'warning',
      text: 'Cannot delete default categories.'
    });
    google.script.run.withSuccessHandler(function (r) {
      if (r.success) load();else Swal.fire({
        icon: 'error',
        text: r.message
      });
    }).deleteCategory(cat.rowIndex);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tags"
  }), " Manage Categories"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Category name",
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    style: {
      flex: 1,
      padding: '10px',
      border: '1.5px solid #d0d0d0',
      borderRadius: '3px',
      fontSize: '16px'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: type,
    onChange: function onChange(e) {
      return setType(e.target.value);
    },
    style: {
      padding: '10px',
      border: '1.5px solid #d0d0d0',
      borderRadius: '3px',
      fontSize: '16px'
    }
  }, /*#__PURE__*/React.createElement("option", null, "Income"), /*#__PURE__*/React.createElement("option", null, "Expense")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: add
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-plus"
  }))), ld ? /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 3,
    columns: 3
  }) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '10px'
    }
  }, "Expense Categories"), cats.filter(function (c) {
    return c.type === 'Expense';
  }).map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.categoryId,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee'
      }
    }, /*#__PURE__*/React.createElement("span", null, c.name, " ", c.isDefault && /*#__PURE__*/React.createElement("small", {
      style: {
        color: '#888'
      }
    }, "(default)")), !c.isDefault && /*#__PURE__*/React.createElement("button", {
      className: "action-icon delete-icon",
      onClick: function onClick() {
        return del(c);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-trash"
    })));
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      color: 'var(--navy-primary)',
      marginTop: '20px',
      marginBottom: '10px'
    }
  }, "Income Categories"), cats.filter(function (c) {
    return c.type === 'Income';
  }).map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.categoryId,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee'
      }
    }, /*#__PURE__*/React.createElement("span", null, c.name, " ", c.isDefault && /*#__PURE__*/React.createElement("small", {
      style: {
        color: '#888'
      }
    }, "(default)")), !c.isDefault && /*#__PURE__*/React.createElement("button", {
      className: "action-icon delete-icon",
      onClick: function onClick() {
        return del(c);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-trash"
    })));
  })))));
}
function ReportsView(_ref34) {
  var user = _ref34.user;
  var _useState235 = useState(new Date().getMonth() + 1),
    _useState236 = _slicedToArray(_useState235, 2),
    month = _useState236[0],
    setMonth = _useState236[1];
  var _useState237 = useState(new Date().getFullYear()),
    _useState238 = _slicedToArray(_useState237, 2),
    year = _useState238[0],
    setYear = _useState238[1];
  var _useState239 = useState('full'),
    _useState240 = _slicedToArray(_useState239, 2),
    type = _useState240[0],
    setType = _useState240[1];
  var _useState241 = useState(false),
    _useState242 = _slicedToArray(_useState241, 2),
    ld = _useState242[0],
    setLd = _useState242[1];
  var _useState243 = useState(null),
    _useState244 = _slicedToArray(_useState243, 2),
    data = _useState244[0],
    setData = _useState244[1];
  var load = function load() {
    setLd(true);
    google.script.run.withSuccessHandler(function (r) {
      setLd(false);
      if (r.success) setData(r.data);else Swal.fire({
        icon: 'error',
        text: r.message
      });
    }).withFailureHandler(function (e) {
      setLd(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getMonthlyReport(month, year, type);
  };
  useEffect(function () {
    load();
  }, [month, year, type]);
  var monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chart-bar"
  }), " Monthly Report")), /*#__PURE__*/React.createElement("div", {
    className: "filters-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filters-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar"
  }), " Month"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: month,
    onChange: function onChange(e) {
      return setMonth(parseInt(e.target.value));
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m,
      value: m
    }, monthNames[m]);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar"
  }), " Year"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "filter-input",
    value: year,
    onChange: function onChange(e) {
      return setYear(parseInt(e.target.value));
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-filter"
  }), " Type"), /*#__PURE__*/React.createElement("select", {
    className: "filter-input",
    value: type,
    onChange: function onChange(e) {
      return setType(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "full"
  }, "Full Report"), /*#__PURE__*/React.createElement("option", {
    value: "income"
  }, "Income Only"), /*#__PURE__*/React.createElement("option", {
    value: "expense"
  }, "Expense Only"))))), ld && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DashboardCardSkeleton, null)), !ld && data && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "report-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card green"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-up"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(data.totalIncome)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Total Income")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card red"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-arrow-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(data.totalExpenses)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Total Expenses")), /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-balance-scale"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(data.net)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Net")), data.budget && /*#__PURE__*/React.createElement("div", {
    className: "stat-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-card-icon"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-piggy-bank"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-value"
  }, fmtCur(data.budget.remaining)), /*#__PURE__*/React.createElement("div", {
    className: "stat-card-label"
  }, "Budget Remaining"), /*#__PURE__*/React.createElement("div", {
    className: "budget-bar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "budget-bar",
    style: {
      width: Math.min(100, data.budget.budgetAmount > 0 ? data.budget.totalSpent / data.budget.budgetAmount * 100 : 0) + '%',
      background: (data.budget.budgetAmount > 0 ? data.budget.totalSpent / data.budget.budgetAmount : 0) > 0.9 ? '#ea4335' : (data.budget.budgetAmount > 0 ? data.budget.totalSpent / data.budget.budgetAmount : 0) > 0.7 ? '#fbbc04' : '#34a853'
    }
  })), /*#__PURE__*/React.createElement("small", {
    style: {
      color: '#888'
    }
  }, fmtCur(data.budget.totalSpent), " / ", fmtCur(data.budget.budgetAmount)))), data.categoryTotals && data.categoryTotals.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '25px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-tags"
  }), " Category Breakdown"), /*#__PURE__*/React.createElement("table", {
    className: "invoice-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", {
    className: "right"
  }, "Total"))), /*#__PURE__*/React.createElement("tbody", null, data.categoryTotals.map(function (ct, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, ct.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "status-badge ".concat(statusCls(ct.type))
    }, ct.type)), /*#__PURE__*/React.createElement("td", {
      className: "right"
    }, fmtCur(ct.total)));
  })))), data.records && data.records.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--navy-primary)',
      marginBottom: '15px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-list"
  }), " Detailed Records (", data.records.length, ")"), /*#__PURE__*/React.createElement("table", {
    className: "invoice-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", {
    className: "right"
  }, "Amount"))), /*#__PURE__*/React.createElement("tbody", null, data.records.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement("td", null, fmtDate(r.date)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "status-badge ".concat(statusCls(r.type))
    }, r.type)), /*#__PURE__*/React.createElement("td", null, r.description), /*#__PURE__*/React.createElement("td", null, r.category || '-'), /*#__PURE__*/React.createElement("td", {
      className: "right"
    }, fmtCur(r.amount, r.currency)));
  })))), data.records && data.records.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: '#888',
      padding: '40px'
    }
  }, "No records found for ", monthNames[month], " ", year, ".")));
}
function BottomNav(_ref35) {
  var activeMenu = _ref35.activeMenu,
    setActiveMenu = _ref35.setActiveMenu,
    role = _ref35.role,
    onLogout = _ref35.onLogout;
  var adm = role === 'admin';
  var items = adm ? [{
    k: 'dashboard',
    i: 'fa-chart-line',
    l: 'Home'
  }, {
    k: 'bookings',
    i: 'fa-calendar-check',
    l: 'Bookings'
  }, {
    k: 'checkout',
    i: 'fa-sign-out-alt',
    l: 'Checkout'
  }, {
    k: 'more',
    i: 'fa-ellipsis-h',
    l: 'More'
  }] : [{
    k: 'bookings',
    i: 'fa-calendar-check',
    l: 'Bookings'
  }, {
    k: 'calendar',
    i: 'fa-calendar-alt',
    l: 'Calendar'
  }, {
    k: 'account',
    i: 'fa-user-circle',
    l: 'Account'
  }, {
    k: 'about',
    i: 'fa-info-circle',
    l: 'About'
  }];
  var _useState245 = useState(false),
    _useState246 = _slicedToArray(_useState245, 2),
    showMore = _useState246[0],
    setShowMore = _useState246[1];
  var moreItems = adm ? [{
    k: 'calendar',
    i: 'fa-calendar-alt',
    l: 'Calendar'
  }, {
    k: 'checkin',
    i: 'fa-door-open',
    l: 'Check-In'
  }, {
    k: 'restaurant',
    i: 'fa-utensils',
    l: 'Restaurant'
  }, {
    k: 'rooms',
    i: 'fa-bed',
    l: 'Rooms'
  }, {
    k: 'invoices',
    i: 'fa-file-invoice-dollar',
    l: 'Invoices'
  }, {
    k: 'finance',
    i: 'fa-coins',
    l: 'Finance'
  }, {
    k: 'reports',
    i: 'fa-chart-bar',
    l: 'Reports'
  }, {
    k: 'users',
    i: 'fa-users',
    l: 'Users'
  }, {
    k: 'customers',
    i: 'fa-address-book',
    l: 'Customers'
  }, {
    k: 'settings',
    i: 'fa-cog',
    l: 'Settings'
  }, {
    k: 'account',
    i: 'fa-user-circle',
    l: 'Account'
  }, {
    k: 'about',
    i: 'fa-info-circle',
    l: 'About'
  }, {
    k: '_logout',
    i: 'fa-power-off',
    l: 'Logout'
  }] : [];
  var handleClick = function handleClick(k) {
    if (k === 'more') {
      setShowMore(!showMore);
      return;
    }
    if (k === '_logout') {
      onLogout();
      return;
    }
    setActiveMenu(k);
    setShowMore(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showMore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: '60px',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 995
    },
    onClick: function onClick() {
      return setShowMore(false);
    }
  }), showMore && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: '60px',
      left: 0,
      right: 0,
      background: 'white',
      zIndex: 996,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
      borderTop: '2px solid var(--navy-primary)',
      padding: '10px',
      maxHeight: '50vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '8px'
    }
  }, moreItems.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m.k,
      onClick: function onClick() {
        return handleClick(m.k);
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '14px 8px',
        border: m.k === '_logout' ? '1px solid #ea4335' : '1px solid #eee',
        borderRadius: '8px',
        background: activeMenu === m.k ? '#f0f4ff' : m.k === '_logout' ? '#fff5f5' : '#fafbfc',
        cursor: 'pointer',
        color: m.k === '_logout' ? '#ea4335' : activeMenu === m.k ? 'var(--navy-primary)' : '#555',
        fontWeight: activeMenu === m.k ? '700' : '500',
        fontSize: '12px',
        touchAction: 'manipulation'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(m.i),
      style: {
        fontSize: '20px'
      }
    }), m.l);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "bottom-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bottom-nav-inner"
  }, items.map(function (m) {
    return /*#__PURE__*/React.createElement("button", {
      key: m.k,
      className: "bottom-nav-item ".concat(activeMenu === m.k || m.k === 'more' && showMore ? 'active' : ''),
      onClick: function onClick() {
        return handleClick(m.k);
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas ".concat(m.i)
    }), /*#__PURE__*/React.createElement("span", null, m.l));
  }))));
}
function BookingDetailModal(_ref36) {
  var booking = _ref36.booking,
    onClose = _ref36.onClose;
  var ci = new Date(booking.checkIn);
  var co = new Date(booking.checkOut);
  var nights = Math.ceil((co - ci) / (1000 * 3600 * 24));
  if (nights < 1) nights = 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    style: {
      maxWidth: '500px'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-check"
  }), " Booking Details"), /*#__PURE__*/React.createElement("button", {
    className: "close-btn",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "invoice-detail-grid"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Ticket:"), " ", booking.ticketId), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Status:"), " ", /*#__PURE__*/React.createElement("span", {
    className: 'status-badge ' + statusCls(booking.status)
  }, booking.status)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Guest:"), " ", booking.guestName), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Room:"), " #", booking.roomNo), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Phone:"), " ", booking.phone || '-'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Email:"), " ", booking.email || '-'), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Check-in:"), " ", fmtDate(booking.checkIn)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Check-out:"), " ", fmtDate(booking.checkOut)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Nights:"), " ", nights), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Rate/Night:"), " ", fmtCur(booking.roomRate)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Discount:"), " ", fmtCur(booking.discount)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Tax:"), " ", fmtCur(booking.tax)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Payment:"), " ", booking.paymentMethod), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Total:"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--navy-primary)'
    }
  }, fmtCur(booking.totalAmount)))), /*#__PURE__*/React.createElement("div", {
    className: "form-actions",
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times"
  }), " Close")))));
}
function CalendarView(_ref37) {
  var user = _ref37.user,
    role = _ref37.role;
  var _useState247 = useState(true),
    _useState248 = _slicedToArray(_useState247, 2),
    loading = _useState248[0],
    setLoading = _useState248[1];
  var _useState249 = useState([]),
    _useState250 = _slicedToArray(_useState249, 2),
    bookings = _useState250[0],
    setBookings = _useState250[1];
  var _useState251 = useState(new Date()),
    _useState252 = _slicedToArray(_useState251, 2),
    currentDate = _useState252[0],
    setCurrentDate = _useState252[1];
  var _useState253 = useState(null),
    _useState254 = _slicedToArray(_useState253, 2),
    selectedBooking = _useState254[0],
    setSelectedBooking = _useState254[1];
  var isAdmin = role === 'admin';
  useEffect(function () {
    loadBookings();
  }, []);
  var loadBookings = function loadBookings() {
    setLoading(true);
    google.script.run.withSuccessHandler(function (r) {
      setLoading(false);
      var data = Array.isArray(r) ? r : [];
      var filtered = isAdmin ? data : data.filter(function (b) {
        return b.email === user;
      });
      setBookings(filtered);
    }).withFailureHandler(function (e) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        text: e.message
      });
    }).getAllBookings();
  };
  var prevMonth = function prevMonth() {
    var d = new Date(currentDate);
    d.setMonth(d.getMonth() - 1);
    setCurrentDate(d);
  };
  var nextMonth = function nextMonth() {
    var d = new Date(currentDate);
    d.setMonth(d.getMonth() + 1);
    setCurrentDate(d);
  };
  var goToday = function goToday() {
    return setCurrentDate(new Date());
  };
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth();
  var firstDay = new Date(year, month, 1).getDay();
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var daysInPrevMonth = new Date(year, month, 0).getDate();
  var cells = [];
  for (var i = firstDay - 1; i >= 0; i--) cells.push({
    day: daysInPrevMonth - i,
    isOther: true,
    date: new Date(year, month - 1, daysInPrevMonth - i)
  });
  for (var d = 1; d <= daysInMonth; d++) cells.push({
    day: d,
    isOther: false,
    date: new Date(year, month, d)
  });
  var rem = 7 - cells.length % 7;
  if (rem < 7) for (var _i = 1; _i <= rem; _i++) cells.push({
    day: _i,
    isOther: true,
    date: new Date(year, month + 1, _i)
  });
  var getBookingsForDate = function getBookingsForDate(date) {
    var dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var dayEnd = new Date(dayStart);
    dayEnd.setDate(dayEnd.getDate() + 1);
    return bookings.filter(function (b) {
      if (!b.checkIn || !b.checkOut) return false;
      var ci = new Date(b.checkIn);
      var co = new Date(b.checkOut);
      return ci < dayEnd && co > dayStart;
    });
  };
  var today = new Date();
  var isToday = function isToday(date) {
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };
  var isPast = function isPast(date) {
    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };
  var isFuture = function isFuture(date) {
    var d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d > t;
  };
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var showMoreBookings = function showMoreBookings(dayBookings, dateStr) {
    var html = dayBookings.map(function (bk) {
      return '<div style="padding:8px 12px;border-bottom:1px solid #eee;cursor:pointer;display:flex;align-items:center;gap:8px" class="swal-bk-row" data-ticket="' + bk.ticketId + '"><span class="status-badge ' + (bk.status === 'Booked' ? 'status-booked' : 'status-checkedout') + '">' + bk.status + '</span> <strong>#' + bk.roomNo + '</strong> ' + bk.guestName + '</div>';
    }).join('');
    Swal.fire({
      title: 'Bookings on ' + dateStr,
      html: '<div style="max-height:300px;overflow-y:auto">' + html + '</div>',
      showConfirmButton: false,
      showCloseButton: true,
      width: 420,
      didOpen: function didOpen() {
        document.querySelectorAll('.swal-bk-row').forEach(function (el) {
          el.addEventListener('click', function () {
            var tid = el.getAttribute('data-ticket');
            var bk = dayBookings.find(function (b) {
              return b.ticketId === tid;
            });
            if (bk) {
              Swal.close();
              setSelectedBooking(bk);
            }
          });
        });
      }
    });
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement(TableSkeleton, {
    rows: 5,
    columns: 7
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "data-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar-header"
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-calendar-alt",
    style: {
      marginRight: '10px'
    }
  }), monthNames[month], " ", year), /*#__PURE__*/React.createElement("div", {
    className: "calendar-nav"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevMonth
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-left"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: goToday
  }, "Today"), /*#__PURE__*/React.createElement("button", {
    onClick: nextMonth
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-chevron-right"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "calendar-grid"
  }, dayNames.map(function (d) {
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      className: "calendar-day-header"
    }, d);
  }), cells.map(function (cell, idx) {
    var dayBookings = cell.isOther ? [] : getBookingsForDate(cell.date);
    var cls = ['calendar-cell'];
    if (cell.isOther) cls.push('other-month');
    if (!cell.isOther && isToday(cell.date)) {
      cls.push('today');
      cls.push('current-date');
    } else if (!cell.isOther && isPast(cell.date)) cls.push('past-date');else if (!cell.isOther && isFuture(cell.date)) cls.push('future-date');
    var maxVisible = 4;
    var dateStr = fmtDate(cell.date.toISOString());
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: cls.join(' ')
    }, /*#__PURE__*/React.createElement("div", {
      className: "calendar-date"
    }, cell.day), dayBookings.slice(0, maxVisible).map(function (bk, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: bk.ticketId + '-' + i,
        className: 'calendar-booking ' + (bk.status === 'Booked' ? 'cal-booked' : 'cal-checkedout'),
        onClick: function onClick() {
          return setSelectedBooking(bk);
        },
        title: bk.guestName + ' - Room #' + bk.roomNo
      }, "#", bk.roomNo, " ", (bk.guestName || '').split(' ')[0]);
    }), dayBookings.length > maxVisible && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '10px',
        color: 'var(--navy-accent)',
        padding: '2px 6px',
        cursor: 'pointer',
        fontWeight: '600'
      },
      onClick: function onClick() {
        return showMoreBookings(dayBookings, dateStr);
      }
    }, "+", dayBookings.length - maxVisible, " more"));
  }))), selectedBooking && /*#__PURE__*/React.createElement(BookingDetailModal, {
    booking: selectedBooking,
    onClose: function onClose() {
      return setSelectedBooking(null);
    }
  }));
}
function MainContent(_ref38) {
  var activeMenu = _ref38.activeMenu,
    user = _ref38.user,
    role = _ref38.role;
  switch (activeMenu) {
    case 'dashboard':
      return /*#__PURE__*/React.createElement(DashboardView, {
        user: user
      });
    case 'bookings':
      return /*#__PURE__*/React.createElement(BookingsView, {
        user: user,
        role: role
      });
    case 'calendar':
      return /*#__PURE__*/React.createElement(CalendarView, {
        user: user,
        role: role
      });
    case 'checkin':
      return /*#__PURE__*/React.createElement(CheckInView, {
        user: user,
        role: role
      });
    case 'checkout':
      return /*#__PURE__*/React.createElement(CheckoutView, {
        user: user
      });
    case 'restaurant':
      return /*#__PURE__*/React.createElement(RestaurantView, {
        user: user
      });
    case 'rooms':
      return /*#__PURE__*/React.createElement(RoomsView, {
        user: user
      });
    case 'customers':
      return /*#__PURE__*/React.createElement(CustomersView, {
        user: user
      });
    case 'invoices':
      return /*#__PURE__*/React.createElement(InvoicesView, {
        user: user
      });
    case 'finance':
      return /*#__PURE__*/React.createElement(FinanceView, {
        user: user
      });
    case 'reports':
      return /*#__PURE__*/React.createElement(ReportsView, {
        user: user
      });
    case 'settings':
      return /*#__PURE__*/React.createElement(SettingsView, {
        user: user
      });
    case 'users':
      return /*#__PURE__*/React.createElement(UsersView, {
        user: user
      });
    case 'account':
      return /*#__PURE__*/React.createElement(AccountView, {
        user: user
      });
    case 'about':
      return /*#__PURE__*/React.createElement(AboutView, null);
    default:
      return null;
  }
}
function Dashboard(_ref39) {
  var user = _ref39.user,
    role = _ref39.role,
    onLogout = _ref39.onLogout;
  var _useState255 = useState(role === 'admin' ? 'dashboard' : 'bookings'),
    _useState256 = _slicedToArray(_useState255, 2),
    am = _useState256[0],
    setAm = _useState256[1];
  var _useState257 = useState(false),
    _useState258 = _slicedToArray(_useState257, 2),
    so = _useState258[0],
    setSo = _useState258[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "app-container"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    activeMenu: am,
    setActiveMenu: setAm,
    role: role,
    user: user,
    onLogout: onLogout,
    isOpen: so,
    setIsOpen: setSo
  }), /*#__PURE__*/React.createElement("div", {
    className: "main-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "hamburger",
    onClick: function onClick() {
      return setSo(!so);
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-bars"
  })), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-hotel"
  }), " Hill View Eco Retreat")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      color: '#666'
    }
  }, "Welcome, ", user)), /*#__PURE__*/React.createElement(MainContent, {
    activeMenu: am,
    user: user,
    role: role
  })), /*#__PURE__*/React.createElement(BottomNav, {
    activeMenu: am,
    setActiveMenu: setAm,
    role: role,
    onLogout: onLogout
  }));
}
var SESSION_TIMEOUT = 60 * 60 * 1000; // 1 hour in ms

function App() {
  var getSession = function getSession() {
    try {
      var s = localStorage.getItem('mri_session');
      if (!s) return null;
      var d = JSON.parse(s);
      if (Date.now() - d.loginTime >= SESSION_TIMEOUT) {
        localStorage.removeItem('mri_session');
        return null;
      }
      return d;
    } catch (e) {
      localStorage.removeItem('mri_session');
      return null;
    }
  };
  var saved = getSession();
  var _useState259 = useState(!!saved),
    _useState260 = _slicedToArray(_useState259, 2),
    li = _useState260[0],
    setLi = _useState260[1];
  var _useState261 = useState(saved ? saved.user : null),
    _useState262 = _slicedToArray(_useState261, 2),
    cu = _useState262[0],
    setCu = _useState262[1];
  var _useState263 = useState(saved ? saved.role : null),
    _useState264 = _slicedToArray(_useState263, 2),
    ur = _useState264[0],
    setUr = _useState264[1];
  var doLogout = function doLogout() {
    localStorage.removeItem('mri_session');
    setLi(false);
    setCu(null);
    setUr(null);
  };
  var handleLogin = function handleLogin(u, r) {
    var session = {
      user: u,
      role: r,
      loginTime: Date.now()
    };
    localStorage.setItem('mri_session', JSON.stringify(session));
    setLi(true);
    setCu(u);
    setUr(r);
  };

  // Check session expiry every 30 seconds
  useEffect(function () {
    if (!li) return;
    var timer = setInterval(function () {
      var s = getSession();
      if (!s) {
        clearInterval(timer);
        doLogout();
        Swal.fire({
          icon: 'info',
          title: 'Session Expired',
          text: 'Your session has expired after 1 hour. Please login again.',
          confirmButtonColor: '#001f3f'
        });
      }
    }, 30000);
    return function () {
      return clearInterval(timer);
    };
  }, [li]);
  return /*#__PURE__*/React.createElement("div", null, !li ? /*#__PURE__*/React.createElement(LoginPage, {
    onLogin: handleLogin
  }) : /*#__PURE__*/React.createElement(Dashboard, {
    user: cu,
    role: ur,
    onLogout: doLogout
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
