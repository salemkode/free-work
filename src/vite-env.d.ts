/// <reference types="vite/client" />

declare global {
  type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
  };

  type State<T> = [T, React.Dispatch<React.SetStateAction<T>>];
}

/*
type InArray<T, X> = T extends readonly [X, ...infer _Rest]
  ? true
  : T extends readonly [X]
  ? true
  : T extends readonly [infer _, ...infer Rest]
  ? InArray<Rest, X>
  : false;

type UniqueArray<T = _> = T extends readonly [infer X, ...infer Rest]
  ? InArray<Rest, X> extends true
    ? ["Encountered value with duplicates:", X]
    : readonly [X, ...UniqueArray<Rest>]
  : T;

const arr = ["Unique Items", "First", "One", "One"] as const as UniqueArray;
const functionOnlyAcceptUnDuplicatedValue = <T,>(arr: UniqueArray<T>) => arr;
*/
