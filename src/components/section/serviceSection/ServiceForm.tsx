import React, { useCallback, useEffect, useState } from "react";
import TextInput from "@components/UI/TextInput";
import TextArea from "@components/UI/TextArea";
import TagsInput from "@components/UI/TagsInput";
import { twMerge } from "tailwind-merge";
import BaseButton from "@/components/UI/BaseButton";

export interface ServiceItemProperties {
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}
type ServiceFormProps = {
  serviceItem?: ServiceItemProperties;
  className?: string;
  removeAble?: boolean;
  onRemove?: () => void;
  onChange: (args: ServiceItemProperties) => void;
};

const ServiceForm: React.FC<ServiceFormProps> = (props: ServiceFormProps) => {
  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    image: "",
    price: "0",
  });
  type ServiceDataKey = keyof typeof serviceData;
  const [tags, setTags] = useState<string[]>([]);

  const setServiceDataElement = useCallback(
    (name: ServiceDataKey, value: string) => {
      const newServiceData = {
        ...serviceData,
        [name]: value,
      };

      props.onChange({
        tags,
        ...newServiceData,
      });

      setServiceData(newServiceData);
    },
    [props, serviceData, tags]
  );

  useEffect(() => {
    if (!props.serviceItem) return;
    const { tags, ...serviceData } = props.serviceItem;
    setServiceData(() => serviceData);
    setTags(() => tags);
  }, [props.serviceItem]);

  // Create handlers for each input
  const handleInput = (name: ServiceDataKey) => {
    type FormEvents = React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;
    const createdEvent = (event: FormEvents) => {
      setServiceDataElement(name, event.currentTarget.value);
    };
    return createdEvent;
  };

  return (
    <div className={twMerge("h-full overflow-auto", props.className)}>
      <div
        className="max-h-60 aspect-video bg-slate-200 rounded-md bg-cover bg-center"
        style={{
          backgroundImage: `url(${serviceData.image})`,
        }}
      />
      <TextInput
        label="Name"
        name="name"
        onInput={handleInput("name")}
        value={serviceData.name}
      />
      <TextArea
        label="Description"
        name="description"
        onInput={handleInput("description")}
        value={serviceData.description}
      />
      <TextInput
        label="Image"
        name="image"
        onInput={handleInput("image")}
        value={serviceData.image}
      />
      <TextInput
        label="Price"
        name="price"
        onInput={handleInput("price")}
        value={serviceData.price}
      />
      <TagsInput
        label="Service tags"
        name="service-tags"
        onChange={(tags) => setTags(tags)}
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
