import { getProductById } from "../../services/productsServices";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const product = await getProductById(id);

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
