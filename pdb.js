import "dotenv/config";
import connectDB from "./db/connect.js";
import ProductModel from "./models/product.js";
import jsonData from "./products.json";
async function start() {
  console.log("inside function");
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductModel.create(jsonData);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
}
start();
