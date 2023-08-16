import TextInput from "@components/UI/TextInput";
import TextArea from "@components/UI/TextArea";
import TagsInput from "@components/UI/TagsInput";
import { twMerge } from "tailwind-merge";
import BaseButton from "@/components/UI/BaseButton";
import { enableLegendStateReact, useObservable, useObserve } from "@legendapp/state/react";

export interface ServiceItemProperties {
  id: number,
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}
type ServiceFormProps = {
  serviceItem: ServiceItemProperties;
  className?: string;
  removeAble?: boolean;
  onRemove?: () => void;
  onChange: (args: ServiceItemProperties) => void;
};
enableLegendStateReact();

const ServiceForm: React.FC<ServiceFormProps> = (props: ServiceFormProps) => {
  const name = useObservable(() => props.serviceItem.name);
  const description = useObservable(() => props.serviceItem.description);
  const image = useObservable(() => props.serviceItem.image);
  const price = useObservable(() => props.serviceItem.price);
  const tags = useObservable([] as string[]);

  useObserve(() => {
    const serviceData = {
      id: props.serviceItem.id,
      name: name.get(),
      description: description.get(),
      image: image.get(),
      price: price.get(),
      tags: tags.get(),
    };
    props.onChange(serviceData)
  });

  return (
    <div className={twMerge("h-full overflow-auto", props.className)}>
      <div
        className="max-h-60 aspect-video bg-slate-200 rounded-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${image.get()})`,
        }}
      />
      <TextInput label="Name" name="name" refValue={name} />
      <TextArea label="Description" name="description" refValue={description} />
      <TextInput label="Image" name="image" refValue={image} />
      <TextInput label="Price" name="price" refValue={price} />
      <TagsInput
        label="Service tags"
        name="service-tags"
        onChange={(_tags) => tags.set(_tags)}
      />
      <BaseButton
        className="my-3 px-6"
        onClick={() => props.onRemove?.()}
        disabled={props.removeAble}
      >
        Remove Service
      </BaseButton>
    </div>
  );
};

export default ServiceForm;
