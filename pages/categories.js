import Link from "next/link";
import { getAllCategories } from "../services/categoriesServices";

export function getServerSideProps() {
  const categories = getAllCategories();

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
              <Link href={`/category/${category.id}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
