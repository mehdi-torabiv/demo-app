import { useRouter } from "next/navigation";
import React from "react";

function ProductCategoryBadge({ category }: { category: string }) {
  const router = useRouter();
  return (
    <div className="flex space-x-3 items-center cursor-pointer">
      <p className="font-bold">Categories:</p>
      <span
        className="text-sm border border-gray-200 shadow-sm bg-white px-3 rounded-md hover:bg-gray-50"
        onClick={() => router.push(`/?c=${category}`)}
      >
        {category}
      </span>
    </div>
  );
}

export default ProductCategoryBadge;
