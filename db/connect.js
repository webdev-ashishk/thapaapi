import mongoose from "mongoose";

const connectDB = (URL) => {
  console.log("connectDB is running!");
  return mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default connectDB;
