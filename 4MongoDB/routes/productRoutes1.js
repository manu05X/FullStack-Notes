const productControllers = require("../controllers/productControllers");

app.get("/", (req, res) => {});

app.get("/api/products", (req, res) => {
  res.json(products);
});

//Routes
app.get("/products");

//send HTML data as response
//Here we will read from our database i.e from MongoDB atlas
app.get("/api/products");

// Route Parameters using id
app.get("/api/products/:id");

// POST
app.post("/api/products");

pp.post("/api/products/:id");

//PUT
app.put("/api/products/:id");

//Delete

app.delete("/api/products/:id");
