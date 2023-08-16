import { twMerge } from "tailwind-merge";

import ServiceForm, { type ServiceItemProperties } from "./ServiceForm";
import BaseButton from "@/components/UI/BaseButton";
import PlusIcon from "@assets/icon/plus.svg";
import { services } from "@/store";
import {
  For,
  Memo,
  Show,
  enableLegendStateReact,
  useObservable,
} from "@legendapp/state/react";

let id = 1;
enableLegendStateReact();
const useServicesList = () => {
  const createNew = () => {
    const newService = {
      id: id++,
      name: "Another service",
      description: "",
      image: "",
      price: "0",
      tags: [],
    };
    services.set((services) => [...services, newService]);
  };

  const updateService = (id: number, service: ServiceItemProperties) => {
    console.log(service);
    services.set((services) => {
      const newServices = [...services];
      const index = services.findIndex(({ id: _id }) => _id === id);
      newServices[index] = service;
      return newServices;
    });
  };

  const removeService = (index: number) => {
    services.set((services) => {
      const newServices = [...services];
      newServices.splice(index, 1);
      return newServices;
    });
  };

  return {
    services: services,
    createNew,
    updateService,
    removeService,
  };
};

const ServiceSection = () => {
  const { services, createNew, updateService, removeService } =
    useServicesList();
  const active = useObservable(0);

  return (
    <div className="container py-6 md:py-10 grid h-full">
      <h1 className="text-3xl mb-4">Add your services</h1>
      <div className="grid gap-8 md:grid-cols-12 h-full overflow-hidden pb-8">
        <div className="flex flex-col col-span-4 gap-2 pe-4 overflow-auto pb-6">
          <For each={services}>
            {(_service) => {
              const service = _service as (typeof services)[number];
              return (
                <div
                  className={twMerge(
                    "rounded-lg px-4 py-2 w-full border cursor-pointer transition-all",
                    active.get() === service.get().id
                      ? "bg-blue-100 border-blue-600 bold"
                      : ""
                  )}
                  onClick={() => active.set(service.get().id)}
                >
                  <Memo>{service.name}</Memo>
                </div>
              );
            }}
          </For>
          <BaseButton
            className="flex items-center gap-2 w-full text-left"
            onClick={() => createNew()}
          >
            <img src={PlusIcon} alt="" className="w-4" />
            Create new service
          </BaseButton>
        </div>
        <For each={services}>
          {(_service) => {
            const service = _service as (typeof services)[number];

            return (
              <Show if={service.id.get() === active.get()}>
                <ServiceForm
                  className="col-span-8 pe-3 overflow-auto pb-6"
                  serviceItem={service.get()}
                  removeAble={services.length <= 1}
                  onChange={(serviceItem) =>
                    updateService(service.id.get(), serviceItem)
                  }
                  onRemove={() => removeService(service.id.get())}
                />
              </Show>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default ServiceSection;
