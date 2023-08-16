import { twMerge } from "tailwind-merge";
import { type Observable } from "@legendapp/state";
import { Legend } from "@legendapp/state/react-components";

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  className?: string;
  refValue: Observable<string>;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  className,
  refValue,
  ...restProps
}) => {
  const _className = twMerge("py-2", className);
  return (
    <div className={_className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <Legend.textarea
        name={name}
        id={name}
        className="
        max-h-32
        block w-full border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset 
        ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
        sm:text-sm sm:leading-6 mt-2 rounded-md shadow-sm"
        dir="auto"
        value$={refValue}
        {...restProps}
      />
    </div>
  );
};

export default TextArea;
