import React from "react";
import { render } from "@testing-library/react";
import StarRating from "./StarRating";

describe("StarRating Component", () => {
  it("renders full stars correctly", () => {
    const { container } = render(<StarRating rating={3} />);
  });
});
