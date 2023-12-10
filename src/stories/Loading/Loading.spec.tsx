import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("renders the loading spinner", () => {
    const { getByTestId } = render(<Loading />);
    const spinner = screen.getByTestId("loading-spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("displays a backdrop", () => {
    const { getByTestId } = render(<Loading />);
    const backdrop = screen.getByTestId("loading-backdrop");
    expect(backdrop).toBeInTheDocument();
  });
});
