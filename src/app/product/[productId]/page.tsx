"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import productsApi from "@/api/productsApi";
import SwiperComponent from "@/components/SwiperComponent";
import { calculateOriginalPrice } from "@/helper";
import StarRating from "@/stories/StarRating/StarRating";
import Link from "next/link";
import Button from "@/stories/Button/Button";
import ProductCategoryBadge from "@/stories/Product/ProductCategoryBadge";
import Loading from "@/stories/Loading/Loading";

function ProductDetails() {
  const params = useParams();
  const productId = Array.isArray(params.productId)
    ? params.productId[0]
    : params.productId;

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => productsApi.getProduct(productId),
    enabled: !!productId,
  });

  if (isLoading) {
    return <Loading />;
  }

  const originalPrice = product?.discountPercentage
    ? calculateOriginalPrice(product.price, product.discountPercentage)
    : product?.price;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row border border-gray-100 justify-between md:p-8 shadow-sm mt-12 rounded-md space-x-5">
        <div className="md:w-2/5">
          <Link
            href={"/"}
            className="text-gray-400 hover:text-black ease-in-out transition"
          >{`< Go Back`}</Link>
          <SwiperComponent slides={product.images} />
        </div>
        <div className="md:w-3/5 space-y-3 md:space-y-8 relative">
          <h1 className="text-2xl pt-3 md:pt-0 font-bold">{product.title}</h1>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col md:flex-row md:items-center">
              <div>
                <span className="text-xl font-bold text-gray-800">
                  ${product.price?.toFixed(2)}
                </span>
                {product.discountPercentage && (
                  <span className="ml-2 text-xl line-through text-gray-500">
                    ${originalPrice?.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="hidden md:flex md:px-3 text-gray-300">|</div>
              <div
                className={`replative right-0 font-semibold text-lg ${
                  product.stock > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} item in stock`
                  : "Out of Stock"}
              </div>
            </div>
            <StarRating rating={product.rating} textSize="xl" />
          </div>
          <ProductCategoryBadge category={product.category} />
          <p className="text-sm">{product.description}</p>
          <div className="w-full p-3 md:absolute md:bottom-0">
            <Button type="button" className="w-full">
              Add to Basket
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
