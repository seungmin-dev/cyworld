import Layout from "@/components/layout";
import Image from "next/image";
import lottoImg from "../../../public/images/lotto.png";
import trainImg from "../../../public/images/train.png";
import { useEffect, useRef, useState } from "react";
import { Title } from "@/components/title";

const Game = () => {
  const [lastWord, setLastWord] = useState("코드캠프");
  const [answer, setAnswer] = useState("결과는?");
  const wordRef = useRef<HTMLInputElement | null>(null);
  const [lottoArr, setLottoArr] = useState<string[]>([]);
  const [playLotto, setPlayLotto] = useState(false);

  useEffect(() => {
    let lottoTemp = [];
    for (let i = 0; i < 6; i++) {
      lottoTemp.push((Math.floor(Math.random() * 44) + 1).toString());
    }
    setLottoArr(lottoTemp);
    setPlayLotto(false);
  }, [playLotto]);

  const lastWordGame = () => {
    if (lastWord.slice(-1) === wordRef.current?.value.slice(0, 1)) {
      setAnswer("정답입니다!");
      setLastWord(wordRef.current!.value);
    } else {
      setAnswer("오답입니다");
    }
    wordRef.current!.value = "";
  };

  return (
    <Layout>
      <Title titleText="GAME" subText="TODAY CHOICE" />
      <div className="w-100 pt-2">
        <div className="w-1/2 m-auto bg-zinc-100 rounded-xl border-[1px] border-zinc-400 p-5 mb-3 text-center">
          <Image src={trainImg} alt="끝말잇기 이미지" className="m-auto mb-3" />
          <h2 className="font-bold text-sm pb-1">끝말잇기</h2>
          <p className="text-sm">제시어 : {lastWord}</p>
          <input
            type="text"
            name="wordRef"
            ref={wordRef}
            placeholder="단어를 입력하세요."
            className="text-xs p-[2px] rounded-sm border-[1px] border-zinc-400"
          />
          <button
            onClick={lastWordGame}
            className="bg-white text-xs p-[2px] rounded-sm border-[1px] border-zinc-400 text-zinc-900 mb-2"
          >
            입력
          </button>
          <p className="text-sm">{answer}</p>
        </div>
        <div className="w-1/2 m-auto bg-zinc-100 rounded-xl border-[1px] border-zinc-400 p-5 text-center">
          <Image src={lottoImg} alt="로또 이미지" className="m-auto mb-1" />
          <h2 className="font-bold text-sm pb-1">LOTTO</h2>
          <p className="text-sm pb-1">버튼을 눌러 추첨하세요.</p>
          <div className="w-2/3 m-auto mb-1 bg-yellow-300 rounded-sm border-[1px] border-zinc-500 flex justify-around">
            {lottoArr.map((item: string, index) => (
              <span key={index} className="text-sm font-semibold">
                {item}
              </span>
            ))}
          </div>
          <button
            onClick={() => setPlayLotto(true)}
            className="bg-white text-xs p-[2px] rounded-sm border-[1px] border-zinc-400 text-zinc-900 mb-2"
          >
            추첨하기
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Game;
