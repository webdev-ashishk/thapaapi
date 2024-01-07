import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: {
    typeof: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be provided!"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    defaul: Date.now(),
  },
  company: {
    type: String,
    enum: {
      value: ["apple", "hp", "dell", "mi"],
      message: `{VALUE} is not supported`,
    },
  },
});

const PoductModel = mongoose.Model("Product", productSchema);
export default PoductModel;
