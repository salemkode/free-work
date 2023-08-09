import { useState } from "react";
import { twMerge } from "tailwind-merge";

import ServiceForm, { type ServiceItemProperties } from "./ServiceForm";
import BaseButton from "@/components/UI/BaseButton";
import PlusIcon from "@assets/icon/plus.svg";
import useGenerator from "@/hooks/useGenerator";

const useServicesList = () => {
  const [services, setService] = useGenerator().servicesState;

  const createNew = () => {
    const newService = {
      name: "Another service",
      description: "",
      image: "",
      price: "0",
      tags: [],
    };
    setService((services) => [...services, newService]);
  };

  const updateService = (index: number, service: ServiceItemProperties) => {
    console.log(service);
    setService((services) => {
      const newServices = [...services];
      newServices[index] = service;
      return newServices;
    });
  };

  const removeService = (index: number) => {
    setService((services) => {
      const newServices = [...services];
      newServices.splice(index, 1);
      return newServices;
    });
  };

  return {
    services,
    createNew,
    updateService,
    removeService,
  };
};

const ServiceSection = () => {
  const { services, createNew, updateService, removeService } = useServicesList();
  const [active, setActive] = useState(0);

  return (
    <div className="container py-6 md:py-10 grid h-full">
      <h1 className="text-3xl mb-4">Add your services</h1>
      <div className="grid gap-8 md:grid-cols-12 h-full overflow-hidden pb-8">
        <div className="flex flex-col col-span-4 gap-2 pe-4 overflow-auto pb-6">
          {services.map(({ name }, index) => (
            <div
              key={index}
              className={twMerge(
                "rounded-lg px-4 py-2 w-full border cursor-pointer transition-all",
                active === index ? "bg-blue-100 border-blue-600 bold" : ""
              )}
              onClick={() => setActive(index)}
            >
              {name || "empty"}
            </div>
          ))}
          <BaseButton
            className="flex items-center gap-2 w-full text-left"
            onClick={() => createNew()}
          >
            <img src={PlusIcon} alt="" className="w-4" />
            Create new service
          </BaseButton>
        </div>
        <ServiceForm
          className="col-span-8 pe-3 overflow-auto pb-6"
          serviceItem={services[active]}
          removeAble={services.length <= 1}
          onChange={(serviceItem) => updateService(active, serviceItem)}
          onRemove={() => removeService(active)}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
