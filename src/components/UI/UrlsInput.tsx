import { useEffect, useState } from "react";
import TextInput from "@/components/UI/TextInput";
import { twMerge } from "tailwind-merge";
import {
  enableLegendStateReact,
  useObservable,
  useObserve,
} from "@legendapp/state/react";
import { UpdatedList, UrlsItem, generateLinkList } from "@/data";
interface UrlsInputProps<TItems extends UrlsItem | Readonly<UrlsItem>> {
  className?: string;
  items: TItems[] | Readonly<TItems[]>;
  onUpdate?: (args: UpdatedList<TItems[]>) => void;
}
enableLegendStateReact();
const UrlsInput = <T extends UrlsItem>({
  items,
  className,
  onUpdate,
}: UrlsInputProps<T>) => {
  const urlValue = useObservable("");
  const linksList = useObservable(generateLinkList(items));
  const [selected, SelectItem] = useState(0);

  useEffect(() => {
    const selectedName = items[selected].name;

    if (selectedName || !(selectedName in linksList.get())) {
      urlValue.set(linksList.get()[selectedName as keyof UpdatedList<T[]>]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useObserve(() => {
    const url = urlValue.get();
    linksList.set({
      ...linksList.get(),
      [items[selected].name]: url,
    });
    onUpdate?.(linksList.get());
  });

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
        refValue={urlValue}
      />
    </div>
  );
};

export default UrlsInput;
