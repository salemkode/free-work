import { useIntersectionObserver } from "@/hooks/intersectionObserver";
import { useState } from "react";

const useSlidesSteps = () => {
  const [index, setIndex] = useState(0);
  const observer = useIntersectionObserver(
    {
      threshold: [0.5],
    },
    (elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          const children = Array.from(
            element.target.parentElement?.children || []
          );
          setIndex(children.findIndex((child) => child === element.target));
        }
      });
    }
  );

  return { index, observer };
};

const ScreenSlider = ({ elements = [] as Array<JSX.Element> }) => {
  const { index, observer } = useSlidesSteps();
  return (
    <div>
      <div className="fixed -top-1 -left-1 -right-1 h-2 bg-white flex ">
        <div
          className={`bg-violet-600 transition-all duration-500 ${index / elements.length === 1 ? "" : "rounded-ee-full"}`}
          style={{
            width: `${(index / elements.length) * 100}%`,
          }}
        />
      </div>
      {elements.map((element, index) => (
        <section
          ref={observer}
          key={index}
          className="min-h-screen overflow-x-hidden"
        >
          {element}
        </section>
      ))}
    </div>
  );
};

export default ScreenSlider;
