import { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}

/**
 * Tooltip component that shows text on hover.
 *
 * @param {Object} props - The props of the component.
 * @param {React.ReactNode} props.children - The target element over which the tooltip is shown.
 * @param {string} props.text - The text to be shown inside the tooltip.
 * @param {("top"|"bottom"|"left"|"right")} [props.position="top"] - The position of the tooltip relative to the target element.
 * @returns {JSX.Element} The Tooltip component.
 */

function Tooltip({
  children,
  text,
  position = "top",
}: TooltipProps): JSX.Element {
  const [showTooltip, setShowTooltip] = useState(false);

  const getTooltipPosition = () => {
    switch (position) {
      case "bottom":
        return "top-full mt-2";
      case "left":
        return "right-full mr-2";
      case "right":
        return "left-full ml-2";
      default:
        return "bottom-full mb-2";
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={() => setShowTooltip(true)}
        onTouchEnd={() => setShowTooltip(false)}
        className="cursor-pointer"
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={`absolute ${getTooltipPosition()} whitespace-nowrap px-3 py-1 bg-black text-white text-sm rounded-md z-10 transition-opacity duration-300`}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
