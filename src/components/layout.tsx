import Image from "next/image";
import Menu from "./menu";
import profileImg from "../../public/images/profile_image.png";
import innerBox from "../../public/images/inner_box.png";
import bgImage from "../../public/images/background_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFaceSmile,
  faHashtag,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="relative w-[1024px] h-[544px]">
        <span>
          <Image src={bgImage} alt="bgImage" style={{ position: "absolute" }} />
        </span>
        <span>
          <Image
            src={innerBox}
            alt="innerBox"
            style={{
              width: "808px",
              position: "absolute",
              paddingLeft: "10px",
              paddingTop: "30px",
            }}
          />
        </span>
        <div className="relative w-[810px] p-3 pt-14">
          <div className="flex w-[730px] ml-9 items-center">
            <p className="w-48 text-xs text-center font-titleFont">
              TODAY <span className="text-red-600">0</span> | TOTAL 12345
            </p>
            <div className="flex-grow flex justify-between items-center">
              <h2 className="text-[#55B2D4] font-bold text-lg pl-2 font-titleFont">
                사이좋은 사람들, 싸이월드
              </h2>
              <p className="ml-2 text-zinc-400 font-light pr-2 text-xs">
                사생활보호설정
                <span className="ml-1 inline-block border-t-4 border-t-transparent border-l-8 border-l-orange-400 border-b-4 border-b-transparent"></span>
              </p>
            </div>
          </div>
          <div className="relative mx-8 w-[795px] h-[455px] flex">
            <div className="flex w-48 h-[455px] mr-1 bg-white p-3 rounded-xl border-black border-[0.5px] flex-col justify-between">
              <div>
                <Image
                  src={profileImg}
                  alt="profileImg"
                  className="w-6/7 mb-4"
                />
                <div className="pt-4 border-t-[0.5px] border-dashed border-black text-sm divide-y-4 divide-transparent">
                  <h4>
                    <FontAwesomeIcon icon={faFaceSmile} /> 이름
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faPhone} /> Phone
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                  </h4>
                  <h4>
                    <FontAwesomeIcon icon={faHashtag} /> 인스타그램
                  </h4>
                </div>
              </div>
              <div className="text-sm">
                <p className="mb-1">오늘의 기분</p>
                <select className="w-full h-8 px-1 border-[0.5px] border-zinc-600 rounded-lg">
                  <option className="py-1">😄 기쁨</option>
                  <option className="py-1">🙂 보통</option>
                  <option className="py-1">💩 최악</option>
                  <option className="py-1">🤬 화남</option>
                </select>
              </div>
            </div>
            <div className="w-[535px] h-[455px] bg-white rounded-xl border-zinc-950 border-[0.5px] p-4">
              {children}
            </div>
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
}
