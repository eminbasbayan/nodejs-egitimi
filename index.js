const fs = require('fs');

fs.readFile(__filename, (err, data) => {
    console.log('Read File Callback');
});

process.nextTick(() => {
    console.log('Next Tick Callback');
});

Promise.resolve().then(() => {
    console.log('Promise Callback');
});

setTimeout(() => {
    console.log('Set Timeout Callback');
}, 0);

for (let i = 0; i < 1000000000; i++) {}