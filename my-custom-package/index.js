const moment = require("moment");

const getCurrentDateTime = () => {
  const now = moment();

  return {
    fullDate: now.toString(),
    formattedDate1: now.format("YYYY-MM-DD"),
    formattedDate2: now.format("DD-MM-YYYY"),
    formattedTime: now.format("HH:mm:ss"),
  };
};

module.exports = getCurrentDateTime;
