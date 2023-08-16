import { type Observable } from "@legendapp/state";
import { enableLegendStateReact } from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";
import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
  refValue?: Observable<string>;
}

enableLegendStateReact();
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
      {refValue ? (
        <>
          <Legend.input
            type="text"
            name={name}
            id={name}
            className="block w-full border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-md shadow-sm"
            dir="auto"
            value$={refValue}
            {...restProps}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextInput;
