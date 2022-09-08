import Link from "next/link";
import { getAllProducts } from "../../services/productsServices";

export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
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
              <Link href={`/products/${product.id}`}>
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
