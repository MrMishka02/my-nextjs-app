const ToggleButton = ({ setOpen }: any) => {
  return (
    <div>
      <button
        className="w-[3.125rem] h-[3.125rem] rounded-[50%] cursor-pointer
        fixed top-[1.5625rem] left-[1.5625rem] bg-transparent border-none"
        onClick={() => setOpen((prev: any) => !prev)}
      >
        Button
      </button>
    </div>
  );
};

export default ToggleButton;
