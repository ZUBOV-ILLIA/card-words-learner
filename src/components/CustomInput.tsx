import { useState } from "react";

interface Props {
  value: string;
  name: string;
  placeholder: string;
  customClass: string;
  onChange: (e: string) => void;
  required?: boolean;
  autofocus?: boolean;
}

export default function CustomInput({
  value,
  name,
  placeholder,
  customClass = "",
  onChange,
  required = false,
  autofocus = false,
}: Props) {
  const [hasError, setHasError] = useState(false);

  function handleFocus() {
    setHasError(false);
  }

  function handleBlur() {
    if (required && !value) {
      setHasError(true);
    }
  }

  return (
    <input
      className={`p-2 w-full border-2 rounded-md ${customClass} ${
        hasError ? "border-red-500" : "border-gray-300"
      }`}
      type="text"
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      required={required}
      autoFocus={autofocus}
    />
  );
}
