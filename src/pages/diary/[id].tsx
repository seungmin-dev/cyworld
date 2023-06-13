import Layout from "@/components/layout";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_DIARY } from "../api/query";
import { useRouter } from "next/router";

const DiaryDetail = () => {
  const router = useRouter();
  const { data } = useQuery(GET_DIARY, {
    variables: {
      number: Number(router.query.id),
    },
  });

  return (
    <Layout>
      <div className="mb-3 border-b-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="text-[#55B2D4] font-bold mb-1 pr-3">DIARY</h4>
      </div>
      <div className="w-full py-1 pl-3 bg-zinc-300">
        <span className="text-sm text-zinc-700">
          {data?.fetchBoard.createdAt.slice(0, 10)}
        </span>
      </div>
      <div className="w-full border-[1px] border-zinc-200 p-4 py-12">
        <h2 className="text-center pb-6 font-semibold text-lg">
          제목 : {data?.fetchBoard.title}
        </h2>
        <p className="text-sm text-zinc-500">{data?.fetchBoard.contents}</p>
      </div>
      <div className="pt-2 text-center">
        <button className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2 mr-2">
          수정하기
        </button>
        <button className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2">
          삭제하기
        </button>
      </div>
      <Link href="/diary">
        <span className="underline text-zinc-500 font-light text-sm">
          {"<"} 다이어리 리스트 바로가기
        </span>
      </Link>
    </Layout>
  );
};

export default DiaryDetail;
