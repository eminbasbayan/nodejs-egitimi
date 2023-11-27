const fs = require("node:fs");

//! Senkron dosya okuma
// const txtFile = fs.readFileSync("./file.txt", "utf-8");
// console.log(txtFile.toString());
// console.log("sync");
//! Asenkron dosya okuma
// fs.readFile("./file.txt", (err, data) => {
//   setTimeout(() => {
//     if (err) {
//       console.log("Dosya okunurken bir hata oluştu:", err);
//     } else {
//       console.log(data.toString());
//     }
//   }, 3000);
// });
// console.log("async");

//! Dosya içi yazıyı senkron değiştirme
// fs.writeFileSync("./file.txt", "Hello World!");

//! Dosya içi yazıyı asenkron değiştirme
// fs.writeFile("./file.txt", "Emin Başbayan", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Dosya başarıyla yazıldı!");
//   }
// });

//! Dosya içi yazıyı asenkron append ile yazının sonuna istenilen yazıyı ekleme
fs.writeFile("./file.txt", "Emin Başbayan", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Dosya başarıyla yazıldı!");
  }
});
