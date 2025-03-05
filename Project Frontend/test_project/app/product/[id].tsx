import { Feature73 } from "@/components/Feature73";
import { GetServerSideProps } from 'next';
interface Product {
  id: number;
  name: string;
  description: string;
  image_id: string;
}
interface ProductPageProps {
  product: Product;
}
const productpage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <Feature73 product={product} />
  );
};

export default productpage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!; // Get the dynamic `id` from the URL

  // Fetch data from the FastAPI backend
  const res = await fetch(`http://localhost:8000/api/product/${id}`);
  const product = await res.json();

  // Pass data to the page via props
  return {
    props: {
      product,
    },
  };
};