"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import productsApi from "@/api/productsApi";

function ProductDetails() {
  const params = useParams();
  const productId = Array.isArray(params.productId)
    ? params.productId[0]
    : params.productId;

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsApi.getProduct(productId),
    enabled: !!productId,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <div></div>
    </div>
  );
}
export default ProductDetails;
