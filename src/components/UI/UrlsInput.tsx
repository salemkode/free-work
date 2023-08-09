import { useEffect, useMemo, useRef, useState } from "react";
import TextInput from "@/components/UI/TextInput";
import { twMerge } from "tailwind-merge";

type UrlsItem = {
  name: string;
  placeholder: string;
};

export type UpdatedList<T extends UrlsItem[] | Readonly<Readonly<UrlsItem>[]>> =
  Record<T[number]["name"], string>;
interface UrlsInputProps<TItems extends UrlsItem | Readonly<UrlsItem>> {
  className?: string;
  items: TItems[] | Readonly<TItems[]>;
  onUpdate?: (args: UpdatedList<TItems[]>) => void;
}

const generateLinkList = <TItems extends UrlsItem | Readonly<UrlsItem>>(
  items: TItems[] | Readonly<TItems[]>
): UpdatedList<TItems[]> => {
  return Object.assign({}, ...items.map((item) => ({ [item.name]: "" })));
};

const UrlsInput = <T extends UrlsItem>({
  items,
  className,
  onUpdate,
}: UrlsInputProps<T>) => {
  const [value, setValue] = useState("");
  const [selected, SelectItem] = useState(0);
  const [linksList, setLinksList] = useState(generateLinkList(items));

  useEffect(() => {
    const selectedName = items[selected].name;

    if (selectedName || !(selectedName in linksList)) {
      setValue(linksList[selectedName as keyof typeof linksList]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    setLinksList((prev) => ({
      ...prev,
      [items[selected].name]: value,
    }));
    onUpdate?.(linksList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-3 pt-2 pb-4">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => SelectItem(index)}
            className={twMerge(
              "cursor-pointer shadow-sm rounded-lg border px-4 py-1.5 border-gray-500 transition-all border-solid",
              selected === index ? "border-blue-500 bg-blue-200" : ""
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
      <TextInput
        name=""
        placeholder={items.at(selected)?.placeholder}
        refValue={[value, setValue]}
      />
    </div>
  );
};

export default UrlsInput;
