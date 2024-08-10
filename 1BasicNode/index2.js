/*


The issue lies in how the res.end() function is being called before the switch statement. Once res.end() is called, the HTTP response is considered complete, so any code following that in the same request will not be executed.

The res.end() is only called within each case of the switch statement, ensuring that the response is sent after the correct content is determined.
*/

const http = require("http");

//create an HTTP server
const myServer = http.createServer((req, res) => {
  //res.end(`Hello form Server`); // here we are ending the http request
  //Once res.end() is called, the HTTP response is considered complete, so any code following that in the same request will not be executed.

  console.log(req.url); //wannt to see the exact path
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

//Listen on port 3000
const port = 8000;
myServer.listen(port, () => {
  console.log("Hey! we are ready to take request on http://localhost:${port}");
});
