import UrlsInput, { UpdatedList } from "@/components/UI/UrlsInput";


const ServicesMarketplace = () => {
  const items = [
    {
      name: "Website",
      placeholder: "https://example.com",
    },
    {
      name: "Khamsat",
      placeholder: "https://khamsat.com/user/username",
    },
    {
      name: "Fiverr",
      placeholder: "https://fiverr.com/username",
    },
    {
      name: "Mostaql",
      placeholder: "https://mostaql.com/u/username",
    },
    {
      name: "Upwork",
      placeholder: "https://upwork.com/username",
    },
    {
      name: "Freelancer",
      placeholder: "https://freelancer.com/username",
    },
  ] as const;

  const onUpdate = (updatedList: UpdatedList<typeof items>) => {
    console.log(updatedList.Website);
  };

  return <UrlsInput items={items} onUpdate={onUpdate} />;
};

export default ServicesMarketplace;
