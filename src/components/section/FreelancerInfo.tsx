import React from "react";
import { twMerge } from "tailwind-merge";

import TextArea from "@components/UI/TextArea";
import ProfileImageUpload from "@components/ProfileImageUpload";
import BaseButton from "@components/UI/BaseButton";

// images
import PersonWallPaper from "@assets/personWallPaper.webp";
import TagsInput from "@components/UI/TagsInput";
import ServicesMarketplace from "@components/ServicesMarketplace";
import SocialMedia from "@components/SocialMedia";
import TextInput from "../UI/TextInput";
import useGenerator from "@/hooks/useGenerator";

export interface FreelancerInfoProps {
  className?: string;
  onComplete?: () => void;
}
const FreelancerInfo: React.FC<FreelancerInfoProps> = ({
  className = "",
  onComplete,
}) => {
  const { name, description } = useGenerator();

  return (
    <div className={twMerge("", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div className="container py-4 md:py-8 overflow-auto h-screen">
          <h1 className="text-3xl mb-4">Personal info</h1>
          <ProfileImageUpload />
          <TextInput
            label="First name"
            name="first_name"
            placeholder="First name"
            refValue={name}
            className="mt-2"
          />
          <TextArea
            label="Description your self"
            name="description"
            placeholder="Description"
            refValue={description}
            className="mt-2"
          />
          <ServicesMarketplace />
          <SocialMedia />
          <TagsInput name="user-tags" label="User tags" className="my-2" />
          <div className="flex">
            <BaseButton className="px-6" onClick={onComplete}>
              Go to next steps
            </BaseButton>
          </div>
        </div>
        {/* Right side image */}
        <img
          src={PersonWallPaper}
          alt="person"
          className=" h-screen w-full object-cover md:block hidden"
        />
      </div>
    </div>
  );
};

export default FreelancerInfo;
