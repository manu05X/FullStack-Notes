/*
Creating Logger using fs module to log the request path

*/

const http = require("http");
const fs = require("fs");

//create an HTTP server
const myServer = http.createServer((req, res) => {
  console.log(req.url); //wannt to see the exact path

  const log = `${req.url} Request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is is HomePage");
        break;
      case "/about":
        res.end("This is AboutPage");
        break;
      case "/contact":
        res.end("This is ContactPage");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

//Listen on port 3000
const port = 8000;
myServer.listen(port, () => {
  console.log("Hey! we are ready to take request on http://localhost:${port}");
});
