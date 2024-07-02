const getCurrentDateTime = require("moment-bilgen-yazilim-akademi");

const dateTime = getCurrentDateTime();

console.log(dateTime.fullDate);
console.log(dateTime.formattedDate1);
console.log(dateTime.formattedDate2);
console.log(dateTime.formattedTime);