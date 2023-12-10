import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => <Button>Click me</Button>;

export const Primary = () => <Button type="button">Primary Button</Button>;

export const Disabled = () => <Button disabled>Disabled Button</Button>;
