import { products } from "./constants/products.js";

import Product from "./model/productSchema.js";

export const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Data Imported successfully");
  } catch (error) {
    console.log("error:", error.message);
  }
};
