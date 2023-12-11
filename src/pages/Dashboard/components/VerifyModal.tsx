import { useLocation, useNavigate } from "react-router-dom";
import verify_img from "../../../assets/img/verify_img.png";
import { useEffect } from "react";
import { useUserStore } from "../../../context/userProvider";
import useFetchMethods from "../../../hook/useFetchMethod";
import { Button } from "antd";
import useAuthMethods from "../../../hook/useAuthMethod";
import { LogoutSvg } from "../../../assets/svg/svg";

const VerifyModal = () => {
  const { resendUserEmail } = useFetchMethods();
  const { logout } = useAuthMethods();
  const resendEmail = () => {
    const userEmail = localStorage.getItem("user_email") || admin?.email;
    const res = resendUserEmail({ email: userEmail });
    console.log(res);
  };
  const { admin } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(admin);
    if (location?.state?.isUserVerified || admin?.email_verified_at) {
      navigate("/dashboard");
    } else {
    }
  }, [admin?.email_verified_at]);
  if (location?.state?.isUserVerified === true) return <></>;
  return (
    <div className=" fixed right-0 left-0 top-0 bottom-0 z-[1000] bg-[#ffffff] flex flex-col justify-center items-center">
      <div className="bg-white w-[32rem] text-center px-2 text-[#2b3582] pt-10 pb-14">
        <div className="mb-3 text-center w-full ">
          <img src={verify_img} alt="" className="inline-block" />
        </div>
        <h3 className=" font-bold text-xl">Verify your account</h3>
        <p className="font-[400] text-[1rem] mt-2">
          Thank you for registration . We send a confirmation email. our Please
          check you inbox or Spam and go for link
        </p>
        <p className=" font-[300] mt-2 text-[0.7rem]">
          don’t get a link ?{" "}
          <a
            className="cursor-pointer underline hover:scale-[1.05] hover:text-red"
            onClick={resendEmail}
          >
            resend
          </a>{" "}
          or email us at{" "}
          <span className="font-normal text-[#fc9828]">
            service@clisha.click
          </span>
        </p>
      </div>
      <Button
        onClick={logout}
        tabIndex={0}
        className="invoice_download_btn w-full max-w-[120px] px-3 py-2 bg-white rounded-[15px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center gap-2 cursor-pointer"
      >
        <LogoutSvg />
        <p className="font-bold text-[1rem] ">Logout</p>
      </Button>
    </div>
  );
};

export default VerifyModal;
