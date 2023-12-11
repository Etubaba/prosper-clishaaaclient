import { TLoginBox } from "../../types/components";

const LoginBox = ({ children }: TLoginBox) => {
  return (
    <div className="loginbox transition delay-100 ease-in-out sm:mx-[2.5rem] lg:mx-[9.5rem] min-h-fit w-full sm:w-[420px] bg-gradient-to-b  from-[#0f0f0f] to-[#0f0f0f57] rounded-[20px] sm:left-[0rem] sm:right-[0rem] px-[2rem] pb-12 pt-14">
      {children}
    </div>
  );
};

export default LoginBox;
