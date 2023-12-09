import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  test("shows tooltip text on mouse enter", () => {
    render(
      <Tooltip text="Tooltip text">
        <div>Hover me</div>
      </Tooltip>
    );

    const triggerElement = screen.getByText("Hover me");
    fireEvent.mouseEnter(triggerElement);

    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  test("hides tooltip text on mouse leave", () => {
    render(
      <Tooltip text="Tooltip text">
        <div>Hover me</div>
      </Tooltip>
    );

    const triggerElement = screen.getByText("Hover me");
    fireEvent.mouseEnter(triggerElement);
    fireEvent.mouseLeave(triggerElement);

    expect(screen.queryByText("Tooltip text")).not.toBeInTheDocument();
  });
});
