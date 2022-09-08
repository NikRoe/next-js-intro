import dbConnect from "../dbConnect";
import Product from "../models/Product";

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find();

  return products.map(({ id, name, description, price, category }) => {
    return { id, name, description, price, category };
  });
}

export async function getProductById(productId) {
  await dbConnect();

  const product = await Product.findById(productId);

  const { id, name, description, price, category } = product;

  return { id, name, description, price, category };
}
