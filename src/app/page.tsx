"use client";
import productsApi from "@/api/productsApi";
import ProductItem from "@/stories/Product/ProductItem";
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
    <div className="container mx-auto pt-8">
      <div className="flex flex-wrap -mx-2">
        {data.products.map((product: Product) => (
          <div key={product.id} className="w-1/4 px-2 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
