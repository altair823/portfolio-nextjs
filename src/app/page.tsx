import Image from "next/image";
import { korName } from "@/content/personal";

import cppIcon from "../../public/cpp.png";
import javaIcon from "../../public/java.png";
import rustIcon from "../../public/rust.png";
import springBootIcon from "../../public/spring-boot.svg";

export default function Home() {
  return (
    <div>
      <div
        className={
          "h-screen bg-gradient-to-b from-blue-400 to-95% to-yellow-200/50" +
          " flex flex-col justify-between items-center"
        }
      >
        <div className={"mt-16 flex flex-row items-start"}>
          <div className={"m-8"}></div>
          <h1 className={"font-bold text-6xl"}>{korName}</h1>
          <div className={"font-bold text-2xl"}>'s Space</div>
        </div>
        <Image
          src={cppIcon}
          alt={"cpp"}
          className={"h-16 w-auto absolute top-[16rem] left-[6rem]"}
        />
        <Image
          src={javaIcon}
          alt={"java"}
          className={"h-16 w-auto absolute top-[24rem] left-[12rem]"}
        />
        <Image
          src={rustIcon}
          alt={"rust"}
          className={"h-16 w-auto absolute top-[40rem] left-[4rem]"}
        />
        <Image
          src={springBootIcon}
          alt={"spring-boot"}
          className={"h-16 w-auto absolute top-[38rem] left-[18rem]"}
        />
      </div>
      <div className={"h-screen bg-cyan-600"}></div>
    </div>
  );
}
