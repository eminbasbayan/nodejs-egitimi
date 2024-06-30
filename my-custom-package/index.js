const moment = require("moment");

const now = moment();

//  Sun Jun 30 2024 12:52:34 GMT+0300
console.log("Current Date and Time:", now.toString());

console.log("Formatted Date:", now.format('YYYY-MM-DD'));
console.log("Formatted Date:", now.format('DD-MM-YYYY'));

console.log("Formatted Time:", now.format('HH:mm:ss'));

