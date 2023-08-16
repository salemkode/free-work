import { twMerge } from "tailwind-merge";
import TextInput from "@components/UI/TextInput";
import BaseButton from "@components/UI/BaseButton";
import { useComputed } from "@legendapp/state/react";
import { imageUrl } from "@/store";

const useProfileImage = () => {
  const imgComponentsProps = useComputed(() => {
    if (!imageUrl.get()) {
      return {
        src: "/images/placeholder.png",
        alt: "Profile image placeholder image click to upload",
      } as const;
    }

    return {
      src: imageUrl.get(),
      alt: "Profile image click to upload new image",
    } as const;
  });

  return {
    imageUrl: imageUrl,
    imgComponentsProps,
  };
};

interface ProfileImageUploadProps {
  className?: string;
}
const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  className,
}) => {
  const { imageUrl, imgComponentsProps } = useProfileImage();

  return (
    <div className={twMerge("flex flex-col items-start", className)}>
      <div className="flex gap-3 w-full">
        <div className="bg-gray-200 rounded-full overflow-hidden">
          <label htmlFor="profile-image">
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              className="hidden"
            />
            <img
              className="w-32 h-32 rounded-full overflow-hidden text-transparent object-cover cursor-pointer"
              {...imgComponentsProps.get()}
            />
          </label>
        </div>
        <div className="flex-grow flex gap-2 my-auto">
          <TextInput
            name="first_name"
            placeholder="Image url"
            className="py-0 flex-grow"
            refValue={imageUrl}
          />
          <BaseButton className="w-max !m-0" onClick={() => imageUrl.set("")}>
            Reset
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUpload;
