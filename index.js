const http = require("node:http");

const server = http.createServer((request, response) => {
  const instructor = {
    firstName: "Emin",
    lastName: "Başbayan",
  };

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(instructor));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
