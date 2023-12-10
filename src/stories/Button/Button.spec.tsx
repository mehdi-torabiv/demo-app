import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders a button with default styles", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("px-4 py-2 rounded-md text-white");
  });

  it("renders a primary button with custom styles", () => {
    render(
      <Button type="button" className="bg-primary text-white">
        Primary Button
      </Button>
    );
    const button = screen.getByText("Primary Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary text-white");
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("disables the button when 'disabled' prop is true", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText("Disabled Button");
    expect(button).toBeDisabled();
  });
});
