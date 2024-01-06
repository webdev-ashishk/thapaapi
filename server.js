const express = require("express");
const app = express();
const port = 3000;
const product_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(req);
});

app.use("/api/products", product_routes);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
