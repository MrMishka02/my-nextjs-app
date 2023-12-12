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
        className="m-auto flex justify-center items-center h-[40rem] sm:h-[10rem]
        border-t-2 border-slate-500"
      >
        <div
          id="leftDiv"
          className="w-[60%] h-full flex items-center justify-end"
        >
          <div className="w-[20rem] mr-7 sm:mr-2 sm:w-[8rem]">
            <h2 className="text-cyan-600 text-xl sm:text-xs">
              Hello, My name is
            </h2>
            <h1 className="text-white text-4xl mt-10 sm:text-xl sm:mt-5">
              Mikheil Gogia
            </h1>
            <h2 className="text-green-500 text-2xl mt-10 sm:text-xs sm:mt-5">
              Full-Stack Developer
            </h2>
          </div>
        </div>
        <div
          id="rightDiv"
          className="w-[40%] h-full flex items-center justify-center"
        >
          <div className="flex justify-center sm:w-[6rem]">
            <Image
              src={myPhoto}
              alt="Picture of the author"
              width={200}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
      <div className="flex-col w-full border-t-2 drop-shadow-lg mt-20">
        <h2 className="text-lg text-cyan-600 mt-10 text-center">
          Create beautiful, functional and responsive websites.
        </h2>
        <p className="select-none text-center text-cyan-600 mt-4">
          For more click:{" "}
          <Link href={"./projects"} className="underline text-blue-600">
            Projects
          </Link>
        </p>
        <div className="flex justify-center mt-10 mb-40">
          <Image src={tablet} alt="Project Photo" width={500} />
          <Image src={webPhoto} alt="Project Photo" width={700} />
          <Image src={laptop} alt="Project Photo" width={600} />
        </div>
      </div>
    </main>
  );
}
