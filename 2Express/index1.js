/*
Here we just remove the Callback function from myServer and give it to another function named serverHandler and give them the 
callback function to take care of. We will just call serverHandler in our createServer function.

Similarly express handle everything by using express().
const app = expres(); --> this returns the serverHandler function

now we can use app to handle all requests and responses and do all other things

*/
const http = require("http");
const fs = require("fs");
const url = require("url");

/*
//create an HTTP server
const myServer = http.createServer((req, res) => {
  console.log(req.url); //wannt to see the exact path

  const parseUrl = url.parse(req.url, true);

  console.log(parseUrl); //

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
      case "/products":
        res.end("This is Products Page");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

*/

function serverHandler() {
  (req, res) => {
    console.log(req.url); //wannt to see the exact path

    const parseUrl = url.parse(req.url, true);

    console.log(parseUrl); //

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
        case "/products":
          res.end("This is Products Page");
          break;
        default:
          res.end("404 Page Not Found");
      }
    });
  };
}

const myServer = http.createServer(serverHandler);

//Listen on port 3000
const port = 8000;
myServer.listen(port, () => {
  console.log("Hey! we are ready to take request on http://localhost:${port}");
});
