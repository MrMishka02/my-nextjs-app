import Image from "next/image";
import myPhoto from "./assets/images/misha.png";
import webPhoto from "./assets/images/laptopMobile.png";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="m-auto flex justify-center items-center h-[50%] sm:h-[25%]">
        <div id="leftDiv" className="w-[60%] h-full flex items-center justify-end">
          <div className="w-[20rem] mr-10 sm:mr-2 sm:w-[8rem]">
            <h2 className="text-cyan-600 text-2xl sm:text-xs">
              Hello, My name is
            </h2>
            <h1 className="text-white text-4xl mt-10 sm:text-xl sm:mt-5">
              Mikheil Gogia
            </h1>
            <h2 className="text-green-500 text-3xl mt-10 sm:text-xs sm:mt-5">
              Full-Stack Developer
            </h2>
          </div>
        </div>
        <div id="rightDiv" className="w-[40%] h-full flex items-center justify-center">
          <div className="flex justify-center sm:w-[6rem]">
            <Image src={myPhoto} alt="Picture of the author" width={200} style={{borderRadius: "50%"}} />
          </div>
        </div>
      </div>
      <div className="flex-col mt-10">
        <h2 className="text-2xl text-cyan-600 text-center">
          Create a beautiful websites
        </h2>
        <div className="flex justify-center mt-4">
          <Image src={webPhoto} alt="Interface Photo" width={600} />
        </div>
      </div>
    </main>
  );
}
