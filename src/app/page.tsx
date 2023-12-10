"use client";
import productsApi from "@/api/productsApi";
import Loading from "@/stories/Loading/Loading";
import ProductItem from "@/stories/Product/ProductItem";
import { Product } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const category = searchParams.get("c") ?? "";

  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getProducts,
  });

  const getProductCategoryQuery = useQuery({
    queryKey: ["products", category],
    queryFn: () => productsApi.getProductCategory(category),
    enabled: !!category,
  });

  const { data, isLoading } = category
    ? getProductCategoryQuery
    : getProductsQuery;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto pt-8">
      <div className="flex flex-wrap p-4 md:p-0 lg:-mx-2">
        {data?.products.map((product: Product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
