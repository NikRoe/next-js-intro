import Link from "next/link";
import { getAllCategories } from "../../services/categoriesServices";

export async function getServerSideProps() {
  const categories = await getAllCategories();

  return {
    props: { categories: categories },
  };
}

export default function Categories({ categories }) {
  return (
    <>
      <h1>Kategorien</h1>
      <p>Auflistung unserer Kategorien</p>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <Link href={`/categories/${category.id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
