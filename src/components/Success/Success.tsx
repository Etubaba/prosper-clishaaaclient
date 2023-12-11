import success from "../../assets/img/success.gif";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFetchMethods from "../../hook/useFetchMethod";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { validatePackageOnSuccess, validatePaypalPackageOnSuccess } = useFetchMethods();

  const checkAndValidate = async () => {
    const paidPackage = localStorage.getItem("package");
    if (paidPackage) {
      const txn_id = JSON.parse(paidPackage).txn_id;
      const validateRes = await validatePackageOnSuccess(txn_id);
      localStorage.removeItem("package");
    }
  };
  useEffect(() => {
    const mode = searchParams.get('mode')
    const token = searchParams.get('token')
    const ba_token = searchParams.get('ba_token')
    if (mode === 'paypal') {
      validatePaypalPackageOnSuccess(token ? token : '')
    } else if (mode === 'stripe') {
      checkAndValidate();
    }
  }, []);

  return (
    <div className="h-screen relative w-screen bg-white">
      <div className="gardientBack z-[1] absolute w-full h-full top-0 right-0 left-0 bottom-0"></div>
      <div className="w-full h-full z-[2] flex flex-col gap-5 justify-center items-center">
        <img src={success} alt="success icon" />
        <h1 className="font-bold text-[2rem] text-black text-center">
          Your Purchase was Successful!
        </h1>
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
          className="z-[2] updatebtn text-white invoice_download_btn w-[200px] px-4 py-1 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
        >
          Go Back To Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Success;
