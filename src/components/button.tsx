import { IButton } from "@/util/types";

export const Button = ({ text, ...rest }: IButton) => {
  return (
    <button
      {...rest}
      className="bg-white text-xs p-[2px] px-2 rounded-sm border-[1px] border-zinc-400 text-zinc-900 mb-2"
    >
      {text}
    </button>
  );
};
