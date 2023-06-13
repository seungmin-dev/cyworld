import Layout from "@/components/layout";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_LIST } from "../api/query";
import { Title } from "@/components/title";

const Diary = () => {
  const { data } = useQuery(GET_LIST);
  return (
    <Layout>
      <Title titleText="DIARY" subText="TODAY STORY" isDiary={true} />
      <div className="w-full h-[370px] pt-2 overflow-y-scroll">
        {data?.fetchBoards.map(
          (post: { number: number; createdAt: string; title: string }) => (
            <Link href={`/diary/${post.number}`} key={post.number}>
              <div className="w-full border-[1px] border-zinc-400 mb-2 p-3 px-5 flex justify-between items-center">
                <div>
                  <span className="bg-[#55B2D4] text-white text-xs rounded-sm px-[3px] py-[2px]">
                    {post.createdAt.slice(0, 10)}
                  </span>
                  <h2 className="text-zinc-700 text-sm">제목 : {post.title}</h2>
                </div>
                <h2 className="text-zinc-400 underline font-light text-sm">
                  자세히 보러 가기 {">"}
                </h2>
              </div>
            </Link>
          )
        )}
      </div>
    </Layout>
  );
};

export default Diary;
