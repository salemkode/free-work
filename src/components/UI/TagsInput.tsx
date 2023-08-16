import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import BaseButton from "./BaseButton";

interface TagsInputProps {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  onChange?: (tags: string[]) => void;
}
const TagsInput: React.FC<TagsInputProps> = ({ name, label, className, placeholder, onChange }) => {
  const [tags, setTags] = useState([] as string[]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const _className = twMerge(
    `flex flex-wrap gap-2 w-full
    border-0 py-1.5 px-2 text-gray-900 
    placeholder:text-gray-400 
    transition-all
    [&:has(:focus)]:ring-2 [&:has(:focus)]:ring-inset [&:has(:focus)]:ring-indigo-600 ring-1 ring-inset ring-gray-300 
    sm:text-sm sm:leading-6 rounded-md shadow-sm`,
    className
  );

  useEffect(() => {
    onChange?.(tags);
  }, [onChange, tags]);

  const addTag = () => {
    const newTag = inputValue.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setInputValue("");
    }
  };
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTag();
    } else if (event.key === "Backspace" && !inputValue) {
      setTags(tags.slice(0, -1));
    }
  };

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className={_className} onClick={() => inputRef.current?.focus()}>
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-sky-600 text-white rounded-md py-1 px-3 flex items-center gap-2"
          >
            <span>{tag}</span>
            <button
              type="button"
              className="hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-blue-500"
              onClick={() => {
                setTags(tags.filter((t) => t !== tag));
              }}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
        <input
          name={name}
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder={placeholder ? placeholder : "Add a tag"}
          className="outline-none min-w-[10ch] flex-grow"
        />
        <BaseButton onClick={addTag}>Add</BaseButton>
      </div>
    </div>
  );
};

export default TagsInput;
