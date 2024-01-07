import "dotenv/config";
import ProductModel from "../models/product";
import connectDB from "./connect";
import ProductJSON from "./product.json";
console.log(ProductJSON);
async function start() {
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductModel.create(ProductJSON);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}
start();
