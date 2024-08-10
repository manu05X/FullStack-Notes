const express = require("express");

const app = express();

//Define a route that responds with "Hello, world!"
app.get("/", (req, res) => {
  res.send("Hola from Server");
});

app.get("/about", (req, res) => {
  return res.send("This is about Page");
});

app.get("/product", (req, res) => {
  console.log(req);
  const shoe = req.query.shoes;
  return res.send("This is Product Page " + shoe);
});

const port = 8001;
//Start the server
app.listen(port, () => {
  console.log("Hey! Server is running on http://localhost:`${port}`");
});
