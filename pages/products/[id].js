import { getProductById } from "../../services/productsServices";

export function getServerSideProps(context) {
  const id = Number(context.params.id);

  const product = getProductById(id);

  return {
    props: { product: product },
  };
}

export default function ProductDetail({ product }) {
  return (
    <>
      <h1>{product.name}</h1>
      <p>Beschreibung: {product.description}</p>
      <p>Aus der Kategorie: {product.category}</p>
    </>
  );
}
