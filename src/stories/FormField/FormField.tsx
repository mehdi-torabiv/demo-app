export interface FormFieldProps {
  label: string;
  name: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * FormField Component
 *
 * Renders a label and its associated input field. The input field is provided as children.
 * This component can be used to render any form control with a label.
 *
 * @param {FormFieldProps} props - The component props.
 * @returns {JSX.Element} The JSX code for a labeled form field.
 */
function FormField({
  label,
  name,
  className,
  children,
}: FormFieldProps): JSX.Element {
  return (
    <div className={`flex flex-col ${className || ""}`}>
      <label htmlFor={name} className="mb-2">
        {label}:
      </label>
      {children}
    </div>
  );
}

export default FormField;
