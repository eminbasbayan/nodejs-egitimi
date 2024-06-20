const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/products") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Products Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Emin",
        lastName: "Başbayan",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
