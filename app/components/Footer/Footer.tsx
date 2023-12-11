"use client";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-300">
      <div
        className="relative flex items-center pl-3 text-6xl rotate-90 bottom-[2.5rem] h-[100px] w-[100px]
      rounded-full bg-gray-300 cursor-pointer select-none hover:-translate-y-1"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        &#10094;
      </div>
      <div className="absolute flex justify-center items-center w-[90%] xl:w-[60%]">
        <p className="m-4 text-slate-600">
          <a
            href="https://www.linkedin.com/in/mikheil-gogia-848315247/"
            className="cursor-pointer"
          >
            &copy; 2023 Mikheil Gogia
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
