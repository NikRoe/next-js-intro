import Link from "next/link";
import { getAllProducts } from "../services/productsServices";

export function getServerSideProps() {
  const products = getAllProducts();

  return {
    props: { products: products },
  };
}

export default function Products({ products }) {
  return (
    <>
      <h1>Produkte</h1>
      <p>Auflistung unserer Produkte</p>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/product/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
