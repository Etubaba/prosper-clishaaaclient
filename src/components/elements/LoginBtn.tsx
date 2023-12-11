type TLoginBtn = {
  placeholder: string;
  fn?: () => void;
};

const LoginBtn = ({ placeholder, fn }: TLoginBtn) => {
  return (
    <div
      tabIndex={0}
      className="loginbtn w-full 2xl:h-[10%] h-[15%] rounded-[5px] bg-orange text-white p-[3%] px-[4%] text-center font-bold cursor-pointer flex flex-row justify-center items-center"
      onClick={fn}
    >
      <p className="w-full h-fit text-center text-[1.3vw]">{placeholder}</p>
    </div>
  );
};

export default LoginBtn;
