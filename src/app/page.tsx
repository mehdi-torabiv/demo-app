"use client";
import productsApi from "@/api/productsApi";
import { Product } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      {data.products.map((product: Product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
