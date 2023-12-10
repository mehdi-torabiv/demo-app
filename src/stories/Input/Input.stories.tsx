import React from "react";
import { Meta, Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "Enter text",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  placeholder: "Enter number",
};

export const TextareaInput = Template.bind({});
TextareaInput.args = {
  type: "textarea",
  placeholder: "Enter text (textarea)",
};
