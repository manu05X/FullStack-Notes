/*

now as we hitting -> http://localhost:8000/products?shoes=puma&id=24 -> it shows us the error message but we have /products. As the
        request is going to exact path its not able to find the product with id 24 so we have error message.
        But if we check for parseUrl.pathname as url has a property as pathname that contains the main url path.
        So we can have check for parseUrl.pathname.

        now though we don't have the exact product with id 24. But we have no error message as we have handled the switch with parseUrl.pathname.
        So we have /products page as response to http://localhost:8000/products?shoes=puma&id=24 without error message.
}

/products?shoes=puma&id=24
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?shoes=puma&id=24',
  query: [Object: null prototype] { shoes: 'puma', id: '24' },
  pathname: '/products',
  path: '/products?shoes=puma&id=24',
  href: '/products?shoes=puma&id=24'
}

*/

const http = require("http");
const fs = require("fs");
const url = require("url");

//create an HTTP server
const myServer = http.createServer((req, res) => {
  console.log(req.url); //wannt to see the exact path

  const parseUrl = url.parse(req.url, true);

  console.log(parseUrl); //

  const log = `${req.url} Request received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (parseUrl.pathname) {
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
        const shoe = parseUrl.query.shoes;
        res.end("This is Products Page " + "here are your shoes " + shoe);
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
