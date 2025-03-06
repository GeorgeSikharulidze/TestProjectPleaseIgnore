// app/product/[id]/page.tsx
import { Feature73 } from "@/components/Feature73";

interface Product {
  id: number;
  name: string;
  description: string;
  img_path: string;
}

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const { id } = params;

  try {
    const res = await fetch(`http://localhost:8000/products/product/${id}`, {
      cache: "no-store", // ensures fresh data on every request
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.statusText}`);
    }

    const product: Product = await res.json();

    return <Feature73 product={product} />;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return <div>Error: {message}</div>;
  }
}
