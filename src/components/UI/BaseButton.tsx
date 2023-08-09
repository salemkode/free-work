import { twMerge } from "tailwind-merge";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}
const BaseButton: React.FC<BaseButtonProps> = ({
  className,
  children,
  ...restProps
}) => {
  const _className = twMerge(
    "cursor-pointer rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500",
    className
  );
  return (
    <button className={_className} {...restProps}>
      {children}
    </button>
  );
};

export default BaseButton;
