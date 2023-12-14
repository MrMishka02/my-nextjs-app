import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";

interface Props extends StaticImageData {
  path: string | StaticImageData;
  cardH1: string;
  cardText: string;
  cardLink: string
}

function Card({ path, cardH1, cardText, cardLink }: Props) {
  return (
    <div
      className="w-[24rem] h-[34rem] drop-shadow-md bg-white rounded-lg mt-20 mb-10 pt-2
      select-none hover:opacity-[0.8] lg:mb-0 lg:mr-6 sm:w-[20rem] sm:mb-0 sm:mr-0"
    >
      <div className="w-[96%] h-[50%] m-auto sm:h-[40%]">
        <div className="drop-shadow-md border-2 mb-2 rounded-2xl overflow-hidden">
          <Image src={path} alt="Card image" />
        </div>
      </div>
      <div className="h-[50%]">
        <h1 className="w-[90%] text-xl font-medium ml-4 mb-4">{cardH1}</h1>
        <p className="w-[90%] ml-4">{cardText}</p>
        <button
          className="w-[30%] h-[8%] ml-[35%] rounded-lg bottom-6 absolute bg-gray-700 text-white
        hover:cursor-pointer hover:bg-gray-500 active:bg-green-700"
        >
          <Link
            href={cardLink}
            target="_blank"
          >
            Go to site
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
