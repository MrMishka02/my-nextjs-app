const ToggleButton = (setOpen: any) => {
  return (
    <div>
      <button
        className="w-[3.125rem] h-[3.125rem] rounded-[50%]
        fixed top-[1.5625rem]  border-none bg-white"
        onClick={() => setOpen((prev: any) => !prev)}
      ></button>
    </div>
  );
};

export default ToggleButton;
