import dbConnect from "../dbConnect";
import Product from "../models/Product";

export async function getAllProducts() {
  await dbConnect();

  const products = await Product.find().populate("category");

  // console.log(products, "produkte");

  const productArray = products.map(
    ({ id, name, description, price, category }) => {
      console.log(category, "kategorie");
      return {
        id,
        name,
        description,
        price,
        category: {
          name: category.name,
          description: category.description,
        },
      };
    }
  );

  return productArray;
}

export async function getProductById(productId) {
  await dbConnect();

  const product = await Product.findById(productId).populate("category");

  const { id, name, description, price, category } = product;

  return {
    id,
    name,
    description,
    price,
    category: { name: category.name, description: category.description },
  };
}
