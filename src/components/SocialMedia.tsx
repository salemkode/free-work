import UrlsInput from "@/components/UI/UrlsInput";

const SocialMedia = () => {
  const items = [
    {
      name: "Facebook",
      placeholder: "https://facebook.com/username",
    },
    {
      name: "Twitter",
      placeholder: "https://twitter.com/username",
    },
    {
      name: "Instagram",
      placeholder: "https://instagram.com/username",
    },
    {
      name: "LinkedIn",
      placeholder: "https://linkedin.com/in/username",
    },
    {
      name: "GitHub",
      placeholder: "https://github.com/username",
    },
    {
      name: "Stack Overflow",
      placeholder: "https://stackoverflow.com/users/username",
    },
  ] as const;

  return <UrlsInput items={items} />;
};

export default SocialMedia;