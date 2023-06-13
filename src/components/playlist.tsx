import { playlist } from "@/data/playlist";
import { Title } from "./title";

export const PlayList = () => {
  return (
    <>
      <Title titleText="추억의 BGM" subText="TODAY CHOICE" />
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
    </>
  );
};
