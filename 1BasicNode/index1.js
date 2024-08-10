/*
Simple server

* to start with nodemon we use command -> npx nodemon index.js
*/

const http = require("http");

//create an HTTP server
const myServer = http.createServer((req, res) => {
  console.log("Server started");
  // Servers started but we will not see anything on port of server as we are not sending any responses
  // we need to send a response back to see on port of server

  res.end(`Hello form Server`); //In network tab we will see 2 req 1 default logo request for a website at the corner and another is my request
});

//console.log(process.env.PUBLIC_PORT)

//Listen on port 3000
const port = 8000;
myServer.listen(port, () => {
  console.log("Hey! we are ready to take request on http://localhost:${port}");
});
