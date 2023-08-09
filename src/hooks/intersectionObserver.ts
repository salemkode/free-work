import { useCallback, useRef } from "react";

export const useIntersectionObserver = (
  options: IntersectionObserverInit,
  cb: IntersectionObserverCallback
) => {
  const observer = useRef<IntersectionObserver>(
    new window.IntersectionObserver(cb, options)
  );

  return useCallback((node: unknown) => {
    if (!node && node instanceof Element) {
      if (observer.current) {
        observer.current.disconnect();
      }
      return;
    } else if (!(node instanceof Element)) {
      return;
    }

    observer.current.observe(node);
  }, []);
};
