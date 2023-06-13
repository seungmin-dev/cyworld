import Layout from "@/components/layout";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { DELETE_DIARY, GET_DIARY, GET_LIST } from "../api/query";
import { useRouter } from "next/router";
import { Title } from "@/components/title";
import { Button } from "@/components/button";

const DiaryDetail = () => {
  const router = useRouter();
  const [deleteDiary] = useMutation(DELETE_DIARY);
  const { data } = useQuery(GET_DIARY, {
    variables: {
      number: Number(router.query.id),
    },
    fetchPolicy: "cache-and-network",
  });

  const onEdit = () => {
    router.push(`/diary/edit?id=${router.query.id}`);
  };

  const onDelete = async () => {
    const result = await deleteDiary({
      variables: { number: Number(router.query.id) },
      onCompleted: () => {
        alert("다이어리가 정상적으로 삭제되었습니다 😉");
      },
      refetchQueries: [{ query: GET_LIST }],
    });
    router.push("/diary");
  };

  return (
    <Layout>
      <Title titleText="DIARY" />
      <div className="w-full py-1 mt-2 pl-3 bg-zinc-300">
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
      <div className="pt-2 text-center space-x-1">
        <Button onClick={onEdit} text="수정하기" />
        <Button onClick={onDelete} text="삭제하기" />
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
