import React from "react";
import { name, description, services, websites, socialMedia } from "@/store";
import { twMerge } from "tailwind-merge";
import { stringify } from "smol-toml";
import { enableLegendStateReact, useComputed } from "@legendapp/state/react";

enableLegendStateReact();
export interface GenerateFileProps {
  className?: string;
  onComplete?: () => void;
}
const GenerateFile: React.FC<GenerateFileProps> = ({ className = "" }) => {
  const code = useComputed(() => {
    return stringify({
      version: "0.1",
      data: {
        name: name.get(),
        description: description.get(),
        website: {
          ...websites.get(),
        },
        social_media: {
          ...socialMedia.get(),
        },
      },
      services: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...services.get().reduce(function (acc: any, cur) {
          acc[cur.id + 1] = Object.assign({ ...cur }, { id: undefined });
          return acc;
        }, {}),
      },
    });
  });

  return (
    <div
      className={twMerge(
        "container flex flex-col items-center justify-center h-full",
        className
      )}
    >
      <h1 className="text-3xl mb-4">Generate File</h1>
      <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 w-full overflow-auto">
        <pre>{code}</pre>
      </code>
    </div>
  );
};

export default GenerateFile;
