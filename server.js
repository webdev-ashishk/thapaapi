import express from "express";
import connectDB from "./db/connect.js";
import products from "./routes/products.js";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", products);

app.listen(port, async () => {
  await connectDB();
  console.log(`server is running ${port}`);
});
