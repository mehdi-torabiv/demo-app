import React from "react";
import { Product } from "@/utils/interfaces";
import StarRating from "../StarRating/StarRating";
import Tooltip from "../Tooltip/Tooltip";
import { calculateOriginalPrice, truncateText } from "@/helper";
import { useRouter } from "next/navigation";

interface ProductItemProps {
  product: Product;
}

function ProductItem({ product }: ProductItemProps) {
  const router = useRouter();

  const originalPrice = calculateOriginalPrice(
    product.price,
    product.discountPercentage
  );

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      className="group relative rounded-md min-h-[40vh] border border-gray-100 hover:shadow-md transition-shadow ease-in delay-75 cursor-pointer"
      onClick={handleClick}
    >
      {product.discountPercentage && (
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity delay-100 ease-in-out">
          {product.discountPercentage.toFixed(0)}% Off
        </div>
      )}

      <div className="h-40 max-h-40 mx-auto overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-4 px-5">
        <div className="flex justify-between items-center">
          <Tooltip text={product.title}>
            <h4 className="font-bold">{truncateText(product.title, 10)}</h4>
          </Tooltip>
          <StarRating rating={product.rating} />
        </div>

        <p className="text-sm">{product.description}</p>

        <div className="w-full flex xl:absolute bottom-3 items-baseline mt-2">
          <div>
            <span className="text-sm font-semibold text-gray-800">
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage && (
              <span className="ml-2 text-sm line-through text-gray-500">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <div className="px-3 text-gray-300">|</div>
          <div
            className={`replative right-0 font-semibold text-sm ${
              product.stock > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
