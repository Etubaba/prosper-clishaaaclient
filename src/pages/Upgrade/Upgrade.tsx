import { useState } from "react";
import InteractionCard from "../../components/elements/InteractionCard";
import PackageOrder from "../../components/elements/PackageOrder";
import PlanBox from "../../components/elements/PlanBox";
import ProgressBar from "../../components/elements/ProgressBar";
import PaymentTypes from "./PaymentTypes";
import PaymentForms from "./PaymentForms";
import CoinPayment from "./CoinPayment";
import BankPayment from "./BankPayment";
import PaypalPayment from "./PaypalPayment";
import OfflinePayment from "./OfflinePayment";

type TPackage = {
  package_name: string;
  amount: number;
  interactions: number;
};

const Upgrade = () => {
  const [paymentType, setPaymentType] = useState<
    "paypal" | "bank" | "coin" | "offline"
  >("bank");
  const [packageObj, setPackageObj] = useState<TPackage>({
    package_name: "Individual",
    amount: 100,
    interactions: 1000,
  });
  const [isIndividualTabActive, setIsIndividualTabActive] =
    useState<boolean>(true);
  const [isPaymentTabActive, setIsisPaymentTabActive] =
    useState<boolean>(false);

  const updateSelectedPackage = (value: TPackage) => {
    setPackageObj(value);
    setIsIndividualTabActive(true);
    setIsisPaymentTabActive(true);
  };

  return (
    <div className="upgrade relative bg-[#F3F4F5] w-screen  pt-[130px] px-4 md:px-10 pb-10">
      <h1 className="font-bold text-[1.4rem]">Choose your clickAds package</h1>
      <div className="w-full h-[1px] bg-[#DADADA] my-2"></div>
      <div className="planBoxCon w-full justify-between 3xl:justify-start my-8 flex flex-row flex-wrap 3xl:flex-nowrap gap-2">
        <PlanBox
          fn={updateSelectedPackage}
          planName={"Basic"}
          amount={250}
          interactions={2500}
        />
        <PlanBox
          fn={updateSelectedPackage}
          planName={"Smart"}
          amount={500}
          interactions={5000}
        />
        <PlanBox
          fn={updateSelectedPackage}
          planName={"Premium"}
          amount={1000}
          interactions={10000}
          hasTag={true}
          tagText={"Most Popular"}
        />
        <PlanBox
          fn={updateSelectedPackage}
          planName={"Exclusive"}
          amount={2500}
          interactions={25000}
        />
        <PlanBox
          fn={updateSelectedPackage}
          planName={"VIP"}
          amount={5000}
          interactions={50000}
          hasTag={true}
          tagText={"Best Value"}
        />
        <PlanBox
          fn={updateSelectedPackage}
          planName={"Individual"}
          amount={0}
          interactions={0}
        />
      </div>
      <div className="w-full h-[1px] bg-[#DADADA] my-2"></div>
      {/* <h1 className="font-bold text-[1.4rem] text-blue">
        Choose your individual plan
      </h1> */}
      <div className="individualPackageCon w-full flex flex-col md:flex-row gap-6 pt-4">
        <div className="individualPackage flex flex-col flex-auto w-[100%] gap-6">
          {/* <ProgressBar
            fn={updateSelectedPackage}
            planName={"Individual"}
            amount={packageObj.amount}
            interactions={packageObj.interactions}
          /> */}
          {isIndividualTabActive && (
            <div className="w-full flex flex-col lg:flex-row pt-4">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-2  md:gap-6 w-full w-full 2xl:max-w-[1248px]">
                <div className="flex-auto w-[100%] max-w-[1024px]">
                  <InteractionCard
                    amount={packageObj.amount}
                    interactions={packageObj.interactions}
                  />
                </div>
                <div className="flex-auto w-[100%] md:w-[30%]">
                  <PackageOrder
                    isPaymentTabActive={isPaymentTabActive}
                    setIsisPaymentTabActive={setIsisPaymentTabActive}
                    packageName={packageObj.package_name}
                    Interaction={Math.ceil(packageObj.interactions)}
                    startDate={new Date().toLocaleDateString()}
                    price={Number(packageObj.amount.toFixed(1))}
                    vat={Number((packageObj.amount * 0.2).toFixed(1))}
                    proceedBtn={true}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isPaymentTabActive && (
        <>
          <h1 className="font-bold text-[1.4rem] text-blue mt-10">
            Checkout For purchase package
          </h1>
          <div className="w-full h-[1px] bg-[#DADADA] my-2 mb-10"></div>
          <div className="flex flex-col md:flex-row w-full gap-8 2xl:max-w-[1248px]">
            <div className="flex-auto flex flex-col gap-4">
              <h1 className="font-bold text-[1.4rem] text-blue">
                Package Details
              </h1>
              <PackageOrder
                isPaymentTabActive={isPaymentTabActive}
                setIsisPaymentTabActive={setIsisPaymentTabActive}
                packageName={packageObj.package_name}
                Interaction={Math.ceil(packageObj.interactions)}
                startDate={new Date().toLocaleDateString()}
                price={Number(packageObj.amount.toFixed(1))}
                vat={Number((packageObj.amount * 0.2).toFixed(1))}
                proceedBtn={false}
              />
            </div>

            <div className="flex-auto w-[100%] md:w-[60%] flex flex-col lg:flex-row gap-2">
              <PaymentTypes
                paymentType={paymentType}
                setPaymentType={setPaymentType}
              />
              <div className="w-full md:w-[1px] h-[1px] md:h-full bg-[#DADADA] mb-2"></div>
              <div className=" w-[100%] h-full sm:w-[65%] max-w-[500px] md:w-[100%] lg:w-[65%]">
                <PaymentForms
                  paymentType={paymentType}
                  packageName={packageObj.package_name}
                  Interaction={Math.ceil(packageObj.interactions)}
                  price={Number(packageObj.amount.toFixed(1))}
                  vat={Number((packageObj.amount * 0.2).toFixed(1))}
                >
                  {paymentType === "coin" ? (
                    <CoinPayment />
                  ) : paymentType === "bank" ? (
                    <BankPayment />
                  ) : paymentType === "offline" ? (
                    <OfflinePayment />
                  ) : (
                    <PaypalPayment />
                  )}
                </PaymentForms>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Upgrade;

// Email
// sb-jiafo26618621@personal.example.com
// Password
// tx9?1qC%
