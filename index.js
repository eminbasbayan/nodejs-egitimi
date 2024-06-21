const fs = require("fs");

// Readable stream oluşturuluyor
const readableStream = fs.createReadStream(__filename);

// Stream kapatılıyor
readableStream.close();

// Close event dinleniyor
readableStream.on("close", () => {
  console.log("readableStream close event callback");
});

// Diğer asenkron metotlar
setImmediate(() => console.log("setImmediate 1"));
setTimeout(() => console.log("setTimeout 1"), 0);
Promise.resolve().then(() => console.log("Promise.resolve 1"));
process.nextTick(() => console.log("process.nextTick 1"));