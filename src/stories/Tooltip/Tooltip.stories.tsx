import React from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <Tooltip text="Tooltip text">
    <button>Hover over me</button>
  </Tooltip>
);
