const fmtDate = (s) => { if(!s) return '-'; return new Date(s).toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',year:'numeric',month:'short',day:'2-digit'}); };
const fmtDateTime = (s) => { if(!s) return '-'; return new Date(s).toLocaleString('en-IN',{timeZone:'Asia/Kolkata',year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:true}); };
const fmtD=(dt)=>{if(!dt)return'-';const dd=new Date(dt);return dd.toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',day:'2-digit',month:'2-digit',year:'numeric'});};
const fmtDShort=(dt)=>{if(!dt)return'-';const dd=new Date(dt);return dd.toLocaleDateString('en-IN',{timeZone:'Asia/Kolkata',day:'2-digit',month:'short'});};
const fmtTime=(d)=>{if(!d)return '';return new Date(d).toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',hour12:true});};

const testDate = "2024-03-20T12:00:00Z";
console.log("fmtDate: ", fmtDate(testDate));
console.log("fmtDateTime: ", fmtDateTime(testDate));
console.log("fmtD: ", fmtD(testDate));
console.log("fmtDShort: ", fmtDShort(testDate));
console.log("fmtTime: ", fmtTime(testDate));
