import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

interface YourType extends StaticImageData {
  path: string | StaticImageData;
  cardH1: string;
  cardText: string;
}

function Card({ path, cardH1, cardText }: YourType) {
  return (
    <div
      className="w-[24rem] h-[34rem] drop-shadow-md bg-white rounded-lg mt-20 mr-10 mb-10 pt-2
      hover:opacity-[0.7] duration-300"
    >
      <div className="w-[96%] h-[50%] pt-4 m-auto">
        <div className="drop-shadow-md border-2 mb-4 rounded-2xl overflow-hidden">
          <Image src={path} alt="Card image" />
        </div>
      </div>
      <div className="h-[40%] mt-4">
        <h1 className="w-[90%] text-xl font-medium ml-4 mb-4">{cardH1}</h1>
        <p className="w-[90%] ml-4">{cardText}</p>
      </div>
    </div>
  );
}

export default Card;
