import React from "react";
import { Meta, Story } from "@storybook/react";
import FormField, { FormFieldProps } from "./FormField";

export default {
  title: "Components/FormField",
  component: FormField,
} as Meta;

const Template: Story<FormFieldProps> = (args) => (
  <FormField {...args}>
    <input type="text" />
  </FormField>
);

export const Default = Template.bind({});
Default.args = {
  label: "Test Label",
  name: "testInput",
};
