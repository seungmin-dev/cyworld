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
      <div className="absolute w-[808px] h-[544px] z-20 m-3 mt-4 pt-7">
        <div className="flex mx-8 items-center">
          <p className="w-48 text-xs text-center font-titleFont">
            TODAY 0 | TOTAL 12345
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
        <div className="relative mx-8 w-full h-[455px]">
          <div className="absolute z-10 t-0 l-0">
            <div className="flex w-full h-[455px]">
              <div className="w-48 h-full mr-1">
                <div className="flex h-full bg-white p-3 rounded-xl border-black border-[0.5px] flex-col justify-between">
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
              </div>
              <div className="w-[550px] h-[455px] bg-white rounded-xl border-zinc-950 border-[0.5px] p-4">
                {children}
              </div>
            </div>
          </div>
          <div className="absolute w-16 flex flex-col z-0 top-2 right-1">
            <Menu />
          </div>
        </div>
      </div>
      <div className="absolute m-3 -z-10">
        <Image src={innerBox} alt="innerBox" />
      </div>
      <div className="absolute -z-20">
        <Image src={bgImage} alt="bgImage" />
      </div>
    </>
  );
}
