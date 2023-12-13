import Image from "next/image";
import myPhoto from "./assets/images/misha.png";
import webPhoto from "./assets/images/laptopMobile.png";
import laptop from "./assets/images/laptop.png";
import tablet from "./assets/images/tablet.png";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        className="m-auto flex justify-center items-center h-[40rem]
        border-t-2 border-slate-500 sm:h-[30rem] sm:flex-col"
      >
        <div
          id="leftDiv"
          className="w-[60%] h-full flex items-center justify-end
          sm:flex-col sm:items-center sm:justify-center sm:order-1 sm:w-full"
        >
          <div className="w-[20rem] mr-7 sm:mr-0">
            <p
              className="text-cyan-600 text-xl drop-shadow-[40px_16px_2px_rgba(255,0,255,0.5)]
            sm:text-center sm:text-base"
            >
              Hello, My name is
            </p>
            <h1
              className="text-white text-4xl mt-10 drop-shadow-[50px_34px_3px_rgba(255,0,0,0.3)]
             sm:text-2xl sm:mt-5  sm:text-center"
            >
              Mikheil Gogia
            </h1>
            <p
              className="text-green-500 text-2xl mt-10 drop-shadow-[60px_24px_3px_rgba(255,165,0,0.4)]
             sm:text-center sm:text-base sm:mt-5"
            >
              Full-Stack Developer
            </p>
          </div>
        </div>
        <div
          id="rightDiv"
          className="w-[40%] h-full flex items-center justify-center sm:w-full"
        >
          <div className="flex justify-center sm:w-[8rem]">
            <Image
              src={myPhoto}
              alt="Picture of the author"
              width={250}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      <div className="flex-col border-t-2 drop-shadow-lg mt-20">
        <p className="text-lg text-cyan-600 mt-10 text-center sm:text-base">
          Create beautiful, functional and responsive websites.
        </p>
        <p className="select-none text-center text-cyan-600 mt-4 sm:text-sm">
          For more click:{" "}
          <Link href={"./projects"} className="underline text-blue-600 text-sm">
            Projects
          </Link>
        </p>
        <div className="flex justify-evenly mt-10 mb-40 sm:flex-col sm:items-center">
          <div className="w-[28%] pt-8 sm:w-[80%]">
            <Image src={tablet} alt="Project Photo" />
          </div>
          <div className="w-[38%] sm:w-[80%] sm:pt-10">
            <Image src={webPhoto} alt="Project Photo" />
          </div>
          <div className="w-[32%] pt-7 sm:w-[80%] sm:pt-10">
            <Image src={laptop} alt="Project Photo" />
          </div>
        </div>
      </div>
    </main>
  );
}
