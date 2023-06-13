import { cls } from "@/util/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-3">
      <Link href="/">
        <button
          className={cls(
            "w-16 h-10 rounded-r-md border-[0.5px] text-xs mb-1 border-black",
            router.pathname === "/" ? "bg-white" : "bg-[#298eb5] text-white"
          )}
        >
          홈
        </button>
      </Link>
      <Link href="/game">
        <button
          className={cls(
            "w-16 h-10 rounded-r-md border-[0.5px] text-xs mb-1 border-black",
            router.pathname.includes("/game")
              ? "bg-white"
              : "bg-[#298eb5] text-white"
          )}
        >
          게임
        </button>
      </Link>
      <Link href="/diary">
        <button
          className={cls(
            "w-16 h-10 rounded-r-md border-[0.5px] text-xs mb-1 border-black",
            router.pathname.includes("/diary")
              ? "bg-white"
              : "bg-[#298eb5] text-white"
          )}
        >
          다이어리
        </button>
      </Link>
    </div>
  );
};

export default Menu;
