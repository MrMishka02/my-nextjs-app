const Links = () => {
  const items = ["Projects", "Contact", "About"];
  return (
    <div className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[1.25rem]">
      <a href="/">Homepage</a>
      {items.map((item) => (
        <a href={`${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
