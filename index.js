const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((request, response) => {
  const name = "Emin";

  response.writeHead(200, { "Content-Type": "text/html" });
  // fs.createReadStream(__dirname + "/index.html").pipe(response);
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  response.end(html);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
