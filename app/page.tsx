import Image from "next/image";
import myPhoto from "./assets/images/misha.png";
import webPhoto from "./assets/images/laptopMobile.png";
import laptop from "./assets/images/laptop.png";
import tablet from "./assets/images/tablet.png";
import Link from "next/link";
import { Header } from "./components";

export default function Home() {
  return (
    <main className="bg-[#0c0c1d] select-none">
      <section className="h-screen" id="Homepage">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="w-[50%] h-full sm:mr-0">
            <p className="text-purple-700 text-xlsm:text-center sm:text-base">
              M I K H E I L G O G I A
            </p>
            <h1
              className="text-white text-4xl
             sm:text-2xl sm:mt-5  sm:text-center"
            >
              Web developer
            </h1>
          </div>
          <div className="w-[50%] h-full sm:mr-0">
            <Image
              src={myPhoto}
              alt="Picture of the author"
              width={250}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </section>
      <section className="flex-col" id="Projects">
        <p className="text-lg text-cyan-600 text-center sm:text-base">
          Create beautiful, functional and responsive websites.
        </p>
        <p className="select-none text-center text-cyan-600 mt-4 sm:text-sm">
          For more click:
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
      </section>
    </main>
  );
}
