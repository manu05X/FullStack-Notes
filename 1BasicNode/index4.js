/*
use url npm package for parsing json and other uses

const url = require("url"); -> require key word say that ->Is URL package present inside my package.json
            yes its present in my package.json so import it. If its not in the pakage then it will try
            to search in internal node_models. If it does not finds their also then it will throw error.


url has a method ->parse() that parses a url and it dstructure the url in its basic components

read this page ---> https://www.npmjs.com/package/url

hit the url->http://localhost:8000/products we get below as parsed and component

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/products',
  path: '/products',
  href: '/products'
}

as we can see most fields of url is NULL because the server is runing on its localhost

now we hit url-> http://localhost:8000/products?shoes=puma

/products?shoes=puma
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?shoes=puma',
  query: 'shoes=puma',
  pathname: '/products',
  path: '/products?shoes=puma',
  href: '/products?shoes=puma'
}

we can notice the search parameter have something

now url.parse(req.url); this method takes a boolean parameter to parse complete url
i.e --> url.parse(req.url, true);

now we hit --> http://localhost:8000/products?shoes=puma&id=24 -> query here means i wnt puma shoes with id 24

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

//Listen on port 3000
const port = 8000;
myServer.listen(port, () => {
  console.log("Hey! we are ready to take request on http://localhost:${port}");
});
