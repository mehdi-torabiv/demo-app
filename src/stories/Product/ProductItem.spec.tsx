import React from "react";
import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import { Product } from "@/utils/interfaces";

describe("ProductItem Component", () => {
  const mockProduct: Product = {
    id: "1",
    title: "Sample Product",
    description: "This is a sample product",
    thumbnail: "path/to/image.jpg",
    price: 100,
    discountPercentage: 10,
    stock: 10,
    rating: 4.5,
    brand: "Sample Brand",
    category: "Sample Category",
    images: ["path/to/image1.jpg", "path/to/image2.jpg"],
  };

  test("renders product information", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  test("shows discount badge when there is a discount", () => {
    render(
      <ProductItem product={{ ...mockProduct, discountPercentage: 10 }} />
    );
    expect(screen.getByText("10% Off")).toBeInTheDocument();
  });

  test("does not show discount badge when there is no discount", () => {
    render(<ProductItem product={{ ...mockProduct, discountPercentage: 0 }} />);
    expect(screen.queryByText("% Off")).not.toBeInTheDocument();
  });

  test("shows correct stock status", () => {
    render(<ProductItem product={{ ...mockProduct, stock: 0 }} />);
    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });
});
