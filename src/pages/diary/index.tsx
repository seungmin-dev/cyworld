import Layout from "@/components/layout";
import Link from "next/link";

const Diary = () => {
  return (
    <Layout>
      <div className="mb-3 border-b-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="text-[#55B2D4] font-bold mb-1 pr-3">DIARY</h4>
        <p className="font-light text-xs flex-grow">TODAY STORY</p>
        <Link href="/diary/create">
          <button className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2">
            다이어리 작성
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Diary;
