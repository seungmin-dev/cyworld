import { ITitle } from "@/util/types";
import Link from "next/link";
import { Button } from "./button";
import { cls } from "@/util/utils";

export const Title = ({ titleText, subText, isHome, isDiary }: ITitle) => {
  return (
    <div
      className={cls(
        isHome ? "w-1/2" : "",
        "border-b-[1px] border-zinc-400 flex justify-between items-center"
      )}
    >
      <h4 className="text-[#55B2D4] font-boldFont mb-1 mr-2">{titleText}</h4>
      <p className="font-light text-xs flex-grow text-zinc-900">{subText}</p>
      {isDiary ? (
        <Link href="/diary/create">
          <Button text="다이어리 작성" />
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
