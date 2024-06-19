const https = require("node:https");

const CALL_LIMIT = 40;

const start = Date.now();
for (let i = 0; i < CALL_LIMIT; i++) {
  https
    .request("https://google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1} ${Date.now() - start} ms`);
      });
    })
    .end();
}

console.log("async");
