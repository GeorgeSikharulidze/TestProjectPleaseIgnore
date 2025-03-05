import { Feature73 } from "@/components/Feature73";
import { GetServerSideProps } from 'next';
interface Product {
  id: number;
  name: string;
  description: string;
  image_id: string;
}
interface ProductPageProps {
  product: Product | null;
  error?: string;
}
const productpage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <Feature73 product={product} />
  );
};

export default productpage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { id } = context.params!; // Get the dynamic `id` from the URL

  try {
    // Fetch data from the FastAPI backend
    const res = await fetch(`http://localhost:8000/api/product/${id}`);

    // Check if the response is OK (status code 200-299)
    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }

    const product: Product = await res.json();

    // Pass data to the page via props
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    // Handle errors (e.g., API is down, invalid JSON, etc.)
    return {
      props: {
        product: null,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      },
    };
  }
};