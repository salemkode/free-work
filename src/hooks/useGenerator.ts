import { ServiceItemProperties } from "@/components/section/serviceSection/ServiceForm";
import { useState } from "react";

const useGenerator = () => {
  const userInfo = observable({
    name: "xs",
    description: "",
    imageUrl: "",
    services: [
      {
        name: "Service 1",
        description: "",
        image: "",
        price: "0",
        tags: [],
      },
    ],
  })
  const name = observable("xs");
  const description = useState("");
  const imageUrl = useState("");

  const servicesState = useState<ServiceItemProperties[]>([
    {
      name: "Service 1",
      description: "",
      image: "",
      price: "0",
      tags: [],
    },
  ]);

  return {
    name,
    description,
    imageUrl,
    servicesState,
  };
};

export default useGenerator;
