import { FaBars } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-[20%] pl-8 flex justify-start items-center text-2xl cursor-pointer lg:block">
      <div className="w-[3rem] h-[3rem] flex items-center justify-center rounded-full bg-white">
        <FaBars color="" />
      </div>
    </div>
  );
}

export default Sidebar;
