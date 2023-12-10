/**
 * `Input` Component
 *
 * This component renders input fields. It supports three types of inputs:
 * - `text`
 * - `number`
 * - `textarea`
 *
 * The component is styled using TailwindCSS and can be further customized
 * via the `className` prop.
 *
 * @param {Object} props - The component props
 * @param {"text" | "number" | "textarea"} [props.type="text"] - The type of the input field.
 * @param {string} [props.placeholder] - A brief hint to the user about the expected input.
 * @param {string} [props.className] - Additional CSS classes for styling the component with TailwindCSS.
 * @param {string} [props.value] - The input value for controlled components.
 * @param {React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>} [props.onChange] - Change event handler.
 * @returns {JSX.Element} The JSX Code for input element.
 */

export interface InputProps {
  type?: "text" | "number" | "textarea";
  placeholder?: string;
  name?: string;
  className?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

function Input({ type, placeholder, value, onChange, ...props }: InputProps) {
  switch (type) {
    case "textarea":
      return (
        <textarea
          placeholder={placeholder}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
          value={value}
          onChange={onChange}
          {...props}
        />
      );
    case "number":
      return (
        <input
          type="number"
          placeholder={placeholder}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
          value={value}
          onChange={onChange}
          {...props}
        />
      );
    default:
      return (
        <input
          type="text"
          placeholder={placeholder}
          className={`border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
          value={value}
          onChange={onChange}
          {...props}
        />
      );
  }
}

export default Input;
