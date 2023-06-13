import Layout from "@/components/layout";
import { playlist } from "@/data/playlist";
import { GET_LIST } from "./api/query";
import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function Home() {
  const { data } = useQuery(GET_LIST);
  return (
    <Layout>
      <div className="mb-3">
        <h4 className="text-[#55B2D4] font-bold mb-1 border-b-[1px] border-zinc-400 w-1/2">
          Updated news
        </h4>
        <div className="flex justify-between pb-1">
          <div className="w-1/2">
            <div>
              {data.fetchBoards
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
                  0/ {data.fetchBoards.length}
                </span>
              </p>
              <p className="w-1/2">
                사진첩{" "}
                <span className="text-[#55B2D4] font-semibold">0/ 97</span>
              </p>
            </div>
            <div className="flex px-[5px] py-[2px] border-b-[1px] border-dashed border-zinc-400 text-sm">
              <p className="w-1/2">
                게시판{" "}
                <span className="text-[#55B2D4] font-semibold">0/ 19</span>
              </p>
              <p className="w-1/2">
                방명록{" "}
                <span className="text-[#55B2D4] font-semibold">0/ 5</span>
              </p>
            </div>
            <div className="py-[2px] border-b-[1px] border-dashed border-zinc-400 text-sm">
              <span>&nbsp;</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h4 className="text-[#55B2D4] font-bold mr-2">추억의 BGM</h4>
          <p className="font-light text-xs">TODAY CHOICE</p>
        </div>
        <div className="w-full">
          <div>
            <div className="flex bg-zinc-200 border-y-[1px] border-zinc-400 py-[1px]">
              <input type="checkbox" className="block w-3 mx-1" />
              <div className="mx-3 w-7 text-center text-sm">번호</div>
              <div className="w-3/5 text-sm">곡명</div>
              <div className="text-sm">아티스트</div>
            </div>
            {playlist.map((item, index) => (
              <div
                key={index}
                className="flex py-[1px] border-b-[1px] border-dotted border-zinc-400"
              >
                <input type="checkbox" className="block w-3 mx-1" />
                <div className="mx-3 w-7 text-center text-sm">{index + 1}</div>
                <div className="w-3/5 text-sm">{item.title}</div>
                <div className="text-sm">{item.artist}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
