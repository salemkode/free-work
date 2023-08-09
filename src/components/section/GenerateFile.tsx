import { twMerge } from "tailwind-merge";
import { stringify } from "smol-toml";
import useGenerator from "@/hooks/useGenerator";
import React, { useMemo } from "react";

export interface GenerateFileProps {
  className?: string;
  onComplete?: () => void;
}
const GenerateFile: React.FC<GenerateFileProps> = ({ className = "" }) => {
  const generator = useGenerator();

  const code = useMemo(() => {
    return stringify({
      name: generator.name[0],
      description: generator.description[0],
    });
  }, [generator.name, generator.description]);
  return (
    <div
      className={twMerge(
        "container grid items-center justify-center h-full",
        className
      )}
    >
      <h1 className="text-3xl mb-4">Generate File</h1>
      <code>
        <pre>{generator.name[0]}</pre>
      </code>
    </div>
  );
};

export default GenerateFile;
