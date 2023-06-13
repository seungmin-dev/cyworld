import Layout from "@/components/layout";
import { GET_LIST } from "./api/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { Title } from "@/components/title";
import { PlayList } from "@/components/playlist";

export default function Home() {
  const { data } = useQuery(GET_LIST);
  return (
    <Layout>
      <div className="mb-3">
        <Title titleText="Updated news" isHome={true} />
        <div className="flex justify-between pb-1">
          <div className="w-1/2 pt-1">
            <div>
              {data?.fetchBoards
                .slice(0, 4)
                .map(
                  (post: { title: string; number: number }, index: number) => (
                    <Link href={`/diary/${post.number}`} key={index}>
                      <p className="text-sm mb-1">
                        <span className="p-1 bg-[#EE3E61] rounded-md text-white text-xs mr-1">
                          다이어리
                        </span>
                        {post.title}
                      </p>
                    </Link>
                  )
                )}
            </div>
          </div>
          <div className="w-2/5">
            <div className="flex px-[5px] py-[2px] border-y-[1px] border-dashed border-zinc-400 text-sm">
              <p className="w-1/2">
                다이어리{" "}
                <span className="text-[#55B2D4] font-semibold">
                  0 / {data?.fetchBoards.length}
                </span>
              </p>
              <p className="w-1/2">
                사진첩{" "}
                <span className="text-[#55B2D4] font-semibold">0 / 97</span>
              </p>
            </div>
            <div className="flex px-[5px] py-[2px] border-b-[1px] border-dashed border-zinc-400 text-sm">
              <p className="w-1/2">
                게시판{" "}
                <span className="text-[#55B2D4] font-semibold">0 / 19</span>
              </p>
              <p className="w-1/2">
                방명록{" "}
                <span className="text-[#55B2D4] font-semibold">0 / 5</span>
              </p>
            </div>
            <div className="py-[2px] border-b-[1px] border-dashed border-zinc-400 text-sm">
              <span>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PlayList />
      </div>
    </Layout>
  );
}
