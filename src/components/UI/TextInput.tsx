import { handleInput } from "@/modules/inputHandeler";
import { State } from "@/types/react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  refValue?: State<string>;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  className,
  refValue,
  ...restProps
}) => {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        className="block w-full border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md shadow-sm"
        dir="auto"
        value={refValue ? refValue[0] : restProps.value}
        onInput={refValue ? handleInput(refValue[1]) : restProps.onInput}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;
