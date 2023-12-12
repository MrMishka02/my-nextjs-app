"use client";

const Footer = () => {
  return (
    <div className="flex items-center justify-center h-[5.4rem] bg-gray-200 border-slate-300 border-t-2 sm:h-[4rem]">
      <div
        className="relative flex items-center pl-4 text-6xl rotate-90 bottom-[2.5rem] h-[6rem] w-[6rem] text-white
      rounded-full bg-gray-200 cursor-pointer select-none hover:-translate-y-1 border-slate-300 border-l-2
      sm:h-[4rem] sm:w-[4rem] sm:text-4xl sm:bottom-8 sm:pl-3 sm:pb-1"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &#10094;
      </div>
      <div className="absolute flex justify-center items-center sm:w-[90%] w-[60%]">
        <p className="m-4 text-slate-500">
          <a
            href="https://www.linkedin.com/in/mikheil-gogia-848315247/"
            className="cursor-pointer"
          >
            &copy; 2023 Mikheil Gogia
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
