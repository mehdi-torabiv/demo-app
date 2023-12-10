interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

/**
 * Button component.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Content inside the button.
 * @param {() => void} [props.onClick] - Function to be called when the button is clicked.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {"button" | "submit" | "reset"} [props.type] - Button type.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @returns {JSX.Element} - The rendered button component.
 */

function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps): JSX.Element {
  const defaultStyles = "px-4 py-2 rounded-md text-white";

  const typeStyles = {
    button: "bg-blue-500 hover:bg-blue-600",
    submit: "bg-green-500 hover:bg-green-600",
    reset: "bg-gray-400 hover:bg-gray-500",
  };

  const combinedStyles = `${defaultStyles} ${type ? typeStyles[type] : ""} ${
    className || ""
  }`;

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
