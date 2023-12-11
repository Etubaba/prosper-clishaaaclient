import cardTypesImg from "../../assets/img/cardtypes.png";
import paypalImg from "../../assets/img/paypal.png";
import coinpayImg from "../../assets/img/coinpay.png";
import offlinepay from "../../assets/img/offlinepay.png";

type TPaymentTypes = {
  paymentType: "paypal" | "bank" | "coin" | "offline";
  setPaymentType: React.Dispatch<React.SetStateAction<any>>;
};

const PaymentTypes = ({ paymentType, setPaymentType }: TPaymentTypes) => {
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-[1.4rem] text-blue">
        Please select a payment method!
      </h1>
      <div className="flex flex-col flex-auto gap-6 mt-2 overflow-auto items-start">
        <div
          className="flex flex-row gap-4 items-center cursor-pointer"
          onClick={() => setPaymentType("bank")}
        >
          <div
            className={`${
              paymentType === "bank" ? "bg-blue" : "bg-grey"
            } transition delay-100 ease-in-out h-[20px] min-w-[20px] rounded-full shadow-inner `}
          ></div>
          <img
            src={cardTypesImg}
            alt="card types"
            className=" h-[40px] w-[180px]"
          />
        </div>

        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => setPaymentType("paypal")}
        >
          <div
            className={`${
              paymentType === "paypal" ? "bg-blue" : "bg-grey"
            } transition delay-100 ease-in-out h-[20px] min-w-[20px] rounded-full shadow-inner`}
          ></div>
          <img
            src={paypalImg}
            alt="card types"
            className=" h-[35px] w-[130px]"
          />
        </div>

        <div
          className="flex flex-row gap-2 items-center cursor-pointer"
          onClick={() => setPaymentType("coin")}
        >
          <div
            className={`${
              paymentType === "coin" ? "bg-blue" : "bg-grey"
            } transition delay-100 ease-in-out h-[20px] min-w-[20px] rounded-full shadow-inner`}
          ></div>
          <img
            src={coinpayImg}
            alt="card types"
            className=" h-[45px] w-[100px]"
          />
        </div>

        <div
          className="flex flex-row gap-5 items-center cursor-pointer"
          onClick={() => setPaymentType("offline")}
        >
          <div
            className={`${
              paymentType === "offline" ? "bg-blue" : "bg-grey"
            } transition delay-100 ease-in-out h-[20px] min-w-[20px] rounded-full shadow-inner`}
          ></div>
          <img
            src={offlinepay}
            alt="card types"
            className=" h-[40px] w-[40px]"
          />
        </div>
      </div>

      <div className="paymentTypeBox"></div>
    </div>
  );
};

export default PaymentTypes;
