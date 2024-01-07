import mongoose from "mongoose";
const uri =
  "mongodb+srv://webdevashishk:koXDxEaQQ0ffldKl@thapaapi.q0n7uyj.mongodb.net/ThapaAPI?retryWrites=true&w=majority";
const connectDB = () => {
  console.log("connectDB is running!");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
export default connectDB;
