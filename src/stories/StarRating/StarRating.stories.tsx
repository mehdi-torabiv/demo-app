import React from "react";
import { Meta, Story } from "@storybook/react";
import StarRating, { StarRatingProps } from "./StarRating";

export default {
  title: "Components/StarRating",
  component: StarRating,
} as Meta;

// Define the Template with args
const Template: Story<StarRatingProps> = (args) => <StarRating {...args} />;

// Default (4.5 stars out of 5)
export const Default = Template.bind({});
Default.args = {
  rating: 4.5,
  textSize: "lg",
  maxRating: 5,
};

// Example with different props
export const LargeStars = Template.bind({});
LargeStars.args = {
  rating: 3.8,
  textSize: "2xl",
  maxRating: 5,
};

export const SmallStars = Template.bind({});
SmallStars.args = {
  rating: 2.5,
  textSize: "sm",
  maxRating: 5,
};
