import { Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import useFetchMethods from "../../hook/useFetchMethod";
import Spinner from "../../components/elements/Spiner";
import { TBuyPackage, TPackageOrder } from "../../types/app.types";
import { useEffect, useState } from "react";

const PaymentForms = ({
  paymentType,
  packageName,
  Interaction,
  price,
  vat,
  children,
}: TPackageOrder) => {
  const [form] = useForm();
  const {
    buyPackageWithCoinPayment,
    buyPackageWithCard,
    getUserWallet,
    configurePackagePaypal,
    buyPackageWithPaypal,
    buySecondPackageWithPaypal,
    buyPackageOffline,
  } = useFetchMethods();

  type TWallet = {
    balance: number;
    bonus_points: number;
    companyId: number;
    createdAt: string;
    id: number;
    paypal_links: [];
    paypal_plan: [];
    paypal_plan_id: [];
    updatedAt: string;
    used: number;
  };
  const [walletTracker, setWalletTracker] = useState<TWallet>();
  const [isLoading, setIsLoading] = useState(false);
  const [isConfigurePaypalLoading, setIsConfigurePaypalLoading] =
    useState(false);
  useEffect(() => {
    //validate wallet
    validateWallet();
  }, []);

  const validateWallet = async () => {
    const userWalletResponse = await getUserWallet();
    setWalletTracker(userWalletResponse?.data?.data?.wallet);
  };

  const BuyWithCoinPayment = async () => {
    setIsLoading(true);
    const coinPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };
    const response = await buyPackageWithCoinPayment(coinPaymentData);

    if (response?.data) {
      window.open(response?.data?.data?.response?.checkout_url, "_blank");
      localStorage.setItem(
        "package",
        JSON.stringify(response?.data?.data?.package)
      );
    }
    setIsLoading(false);
  };

  const BuyWithCard = async () => {
    setIsLoading(true);
    const coinPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };
    const response = await buyPackageWithCard(coinPaymentData);

    if (response?.data) {
      localStorage.setItem(
        "package",
        JSON.stringify(response?.data?.data?.package)
      );
      window.open(response?.data?.data?.response?.url, "");
    }
    setIsLoading(false);
  };
  const BuyWithOffline = async () => {
    setIsLoading(true);
    const coinPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };
    const response = await buyPackageOffline(coinPaymentData);

    if (response?.data) {
      localStorage.setItem(
        "package",
        JSON.stringify(response?.data?.data?.package)
      );
    }
    setIsLoading(false);
  };

  const configurePaypal = async () => {
    setIsConfigurePaypalLoading(true);
    const paypalPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };

    //validate configure paypal
    const configurePaypalResponse = await configurePackagePaypal(
      paypalPaymentData
    );
    validateWallet();
    setIsConfigurePaypalLoading(false);
  };

  const BuyWithPaypal = async () => {
    setIsLoading(true);
    const paypalPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };

    if (walletTracker === null) {
    } else {
      //buy paypal package
      const paypalResponse = await buyPackageWithPaypal(paypalPaymentData);
      if (paypalResponse?.data) {
        window.open(
          paypalResponse?.data?.data?.wallet?.paypal_links[0]?.href,
          ""
        );
        localStorage.setItem("package", JSON.stringify(paypalPaymentData));
      }
    }
    setIsLoading(false);
  };
  const BuySecondWithPaypal = async () => {
    setIsLoading(true);
    const paypalPaymentData = {
      package_name: packageName,
      amount: price + vat,
      interactions: Interaction,
      vat: vat,
      currency: "EUR",
    };

    if (walletTracker === null) {
    } else {
      //buy paypal package
      const paypalResponse = await buySecondPackageWithPaypal(
        paypalPaymentData
      );
      if (paypalResponse?.data) {
        // console.log(paypalResponse?.data?.data?.wallet?.paypal_links[0]?.href);
        window.open(
          paypalResponse?.data?.data?.wallet?.paypal_links[0]?.href,
          ""
        );
        localStorage.setItem("package", JSON.stringify(paypalPaymentData));
      }
    }
    setIsLoading(false);
  };

  const onFinish = async (values: TBuyPackage) => {
    if (paymentType === "coin") {
      BuyWithCoinPayment();
    } else if (paymentType === "bank") {
      BuyWithCard();
    } else if (paymentType === "paypal") {
      BuyWithPaypal();
    } else if (paymentType === "offline") {
      BuyWithOffline();
    }
  };

  return (
    <Form
      form={form}
      name="profile"
      labelCol={{
        span: 8,
      }}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={false}
      className="paymentForm first_col h-full flex flex-col justify-between lg:min-w-[400px]"
    >
      {children}

      {paymentType === "paypal" ? (
        <>
          <div>
            <p>
              if you haven't connected your paypal previously, click on connect
              now otherwise pay now.
            </p>
            <Button
              disabled={walletTracker?.paypal_plan ? true : false}
              type="primary"
              onClick={() => configurePaypal()}
              className=" mt-2 h-[38px] mb-4 md:mb-0 max-w-[100%] w-full rounded-[5px] bg-green text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1rem] text-center cursor-pointer flex flex-row justify-center items-center gap-2"
            >
              {isConfigurePaypalLoading && <Spinner />} Connect Now
            </Button>
            <Form.Item>
              <Button
                //   loading={loading}
                disabled={!walletTracker?.paypal_plan ? true : false}
                type="primary"
                htmlType="submit"
                className=" mt-2 h-[38px] mb-4 md:mb-0 max-w-[100%] w-full rounded-[5px] bg-blue text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1rem] text-center cursor-pointer flex flex-row justify-center items-center gap-2"
              >
                {isLoading && <Spinner />} Pay Now
              </Button>
            </Form.Item>
          </div>
        </>
      ) : (
        <div>
          {paymentType !== "offline" && (
            <p className="font-yellow font-bold">
              Click pay now and you will be redirected to a payment page!
            </p>
          )}
          {paymentType === "offline" && (
            <p className="font-yellow font-bold">
              Click generate payment and an offline payment will be initiated
            </p>
          )}
          <Form.Item>
            <Button
              //   loading={loading}
              type="primary"
              htmlType="submit"
              className=" mt-2 h-[38px] mb-4 md:mb-0 max-w-[100%] w-full rounded-[5px] bg-blue text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1rem] text-center cursor-pointer flex flex-row justify-center items-center gap-2"
            >
              {isLoading && <Spinner />}{" "}
              {paymentType === "offline" ? "Generate Payment" : "Pay Now"}
            </Button>
          </Form.Item>
        </div>
      )}
    </Form>
  );
};

export default PaymentForms;
