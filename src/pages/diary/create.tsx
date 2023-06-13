import Layout from "@/components/layout";
import { DiaryForm } from "@/util/types";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CREATE_DIARY, GET_LIST } from "../api/query";
import { useRouter } from "next/router";

const CreateDiary = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<DiaryForm>();
  const [createDiary] = useMutation(CREATE_DIARY);

  const onValid = async (form: DiaryForm) => {
    const result = await createDiary({
      variables: {
        title: form.title,
        contents: form.contents,
        writer: "smdev",
      },
      onCompleted: () => {
        alert("다이어리가 정상적으로 저장되었습니다 😉");
      },
      refetchQueries: [{ query: GET_LIST }],
    });
    router.push(`/diary/${result.data.createBoard.number}`);
  };

  return (
    <Layout>
      <div className="mb-3 border-b-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="text-[#55B2D4] font-bold mb-1 pr-3">DIARY | 글 등록</h4>
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
            <Link href="/diary">
              <button className="bg-white text-xs p-[2px] px-2 rounded-md border-[1px] border-zinc-400 text-zinc-900 mb-2">
                취소하기
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateDiary;
