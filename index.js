setTimeout(() => console.log("Set Timeout Callback 1"), 0);
setImmediate(() => console.log("Set Immediate Callback 1"));


/* ****************** */

// setImmediate(() => console.log("Set Immediate Callback 1"));

// setImmediate(() => {
//   console.log("Set Immediate Callback 2");
//   process.nextTick(() => {
//     console.log("Set Immediate 2 içinde Next Tick Callback");
//   });

//   Promise.resolve().then(() => {
//     console.log("Set Immediate 2 içinde Promise Callback");
//   });
// });

// setImmediate(() => console.log("Set Immediate Callback 3"));

/* ************* */


// const fs = require('fs');

// fs.readFile(__filename, () => {
//     console.log('Read File Callback');

//     setImmediate(() => console.log("ReadFile içinde Set Immediate Callback"));

//     process.nextTick(() => {
//       console.log("ReadFile içinde Next Tick Callback");
//     });
  
//     Promise.resolve().then(() => {
//       console.log("ReadFile içinde Promise Callback");
//     });
// });

// process.nextTick(() => {
//     console.log('Next Tick Callback');
// });

// Promise.resolve().then(() => {
//     console.log('Promise Callback');
// });

// setTimeout(() => {
//     console.log('Set Timeout Callback');
// }, 0);