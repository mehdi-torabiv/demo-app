import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(
      <Input type="text" placeholder="Enter text" />
    );
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("handles text input correctly", () => {
    let inputValue = "";
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      inputValue = e.target.value;
    };

    const { getByPlaceholderText } = render(
      <Input
        type="text"
        placeholder="Enter text"
        value={inputValue}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

    expect(inputValue).toBe("Hello, World!");
  });

  it("handles number input correctly", () => {
    let inputValue = 0;
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      inputValue = parseInt(e.target.value, 10);
    };

    const { getByPlaceholderText } = render(
      <Input
        type="number"
        placeholder="Enter number"
        value={inputValue}
        onChange={handleChange}
      />
    );
    const inputElement = screen.getByPlaceholderText("Enter number");

    fireEvent.change(inputElement, { target: { value: "42" } });

    expect(inputValue).toBe(42);
  });
});
