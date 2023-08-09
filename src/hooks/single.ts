import { useState } from "react";

export const useSingle = <T>(input: T) => {
  const [state, setState] = useState(input);

  return {
    state,
    setState,
  };
};

export type Single<T> = ReturnType<typeof useSingle<T>>;
