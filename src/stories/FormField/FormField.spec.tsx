import React from "react";
import { render, screen } from "@testing-library/react";
import FormField from "./FormField";

test("renders FormField with label and children", () => {
  const label = "Test Label";
  const name = "testInput";

  // Render the FormField component with label and children
  render(
    <FormField label={label} name={name}>
      <input type="text" id={name} />{" "}
      {/* Add an "id" that matches the "name" */}
    </FormField>
  );

  // Use screen.getByLabelText to get the input element by its associated label text
  const inputElement = screen.getByLabelText(`${label}:`);

  // Check if the label and input elements are present in the rendered output
  const labelElement = screen.getByText(`${label}:`);

  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
