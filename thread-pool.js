/* const fs = require("node:fs");

console.log("Başlangıç");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Bitiş"); */

/* ******************** */

// const crypto = require("node:crypto");

// const start = Date.now();

// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log(`Süre: ${Date.now() - start} ms`);

/* ******************** */

/* ******************** */

const crypto = require("node:crypto");

const start = Date.now();

const CALL_LIMIT = 3;

for (let i = 0; i < CALL_LIMIT; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Süre: ${Date.now() - start} ms`);
  });
}

console.log("async");
