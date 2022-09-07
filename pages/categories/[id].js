import { getCategoryById } from "../../services/categoriesServices";

export async function getServerSideProps(context) {
  const id = Number(context.params.id);

  const category = getCategoryById(id);

  return {
    props: { category: category },
  };
}

export default function CategoryDetail({ category }) {
  console.log(category);
  return (
    <>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
    </>
  );
}
