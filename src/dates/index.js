// import moment here; use this package in each function
const moment = require('moment')
// this my code to write to day 
const today = () => {
  const day = moment().format("dddd");
  console.log("Today is:",day);
  return day;
};
// These codes write date
const calendar = () => {
 const date = moment().format("LL");
 console.log("Today is Date:", date);
 return date;
};

// these codes for time
const currentTime = () => {
  const time = moment().format("hLTS");
  console.log(" Today Time:", time);
  return time;
};

module.exports = {
  today,
  calendar,
  currentTime
}