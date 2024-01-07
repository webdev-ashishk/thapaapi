import "dotenv/config";
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
  await connectDB(process.env.MONGODB_URL);
  console.log(`server is running ${port}`);
});
