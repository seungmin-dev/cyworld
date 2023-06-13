import Layout from "@/components/layout";
import { DiaryForm } from "@/util/types";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { GET_DIARY, GET_LIST, UPDATE_DIARY } from "../api/query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const UpdateDiary = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<DiaryForm>();
  const [updateDiary] = useMutation(UPDATE_DIARY);

  const { data } = useQuery(GET_DIARY, {
    variables: {
      number: Number(router.query.id),
    },
  });

  useEffect(() => {
    setValue("title", data.fetchBoard.title);
    setValue("contents", data.fetchBoard.contents);
  }, []);

  const onValid = async (form: DiaryForm) => {
    console.log(form);
    const result = await updateDiary({
      variables: {
        number: Number(router.query.id),
        writer: "smdev",
        title: form.title,
        contents: form.contents,
      },
      onCompleted: () => {
        alert("다이어리가 정상적으로 수정되었습니다 😉");
      },
      refetchQueries: [{ query: GET_LIST }],
    });
    router.push(`/diary/${result.data.updateBoard.number}`);
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="mb-3 border-b-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="text-[#55B2D4] font-bold mb-1 pr-3">DIARY | 글 수정</h4>
      </div>
      <div className="w-100 border-[1px] border-zinc-200 p-2">
        <form onSubmit={handleSubmit(onValid)}>
          <input
            type="text"
            placeholder="제목을 입력하세요."
            {...register("title", { required: true })}
            className="block w-full text-xs p-1 border-[1px] border-zinc-200 mb-2"
          />
          <textarea
            placeholder="내용을 입력하세요."
            {...register("contents", { required: true })}
            className="block w-full h-72 text-xs p-1 border-[1px] border-zinc-200"
          />

          <div className="pt-2 text-center">
            <button className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2 mr-2">
              등록하기
            </button>
            <button
              onClick={onCancel}
              className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2"
            >
              취소하기
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default UpdateDiary;
