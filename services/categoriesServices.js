import dbConnect from "../dbConnect";
import Category from "../models/Category";

export async function getAllCategories() {
  await dbConnect();

  const categories = await Category.find();

  return categories.map(({ name, description, id }) => {
    return { name, description, id };
  });
}

export async function getCategoryById(categoryId) {
  await dbConnect();

  const category = await Category.findById(categoryId);

  const { name, description, id } = category;

  return { name, id, description };
}
