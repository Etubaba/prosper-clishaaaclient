import { Form, Input, InputNumber } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { useDataStore } from "../../../context/dataProvider";

const PayInfoTabSection = () => {
  const [values, setValues] = useState<any>(null);
  const { userPayInfo } = useDataStore();

  const [form] = useForm();

  const defaultValues = {
    product: values?.package_name || "",
    interaktion: values?.interactions || "",
    price: values?.amount || "",
  };

  useEffect(() => {
    setValues(userPayInfo);
  }, [userPayInfo]);
  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);

  return (
    <Form
      form={form}
      name="payment_info"
      labelCol={{
        span: 8,
      }}
      layout="vertical"
      initialValues={defaultValues}
      autoComplete="off"
      className=""
    >
      <div className="w-full h-[1px] bg-[#DADADA] mt-3 mb-2"></div>
      <h1 className="profile_subtitle text-[#1B4C84] mt-2 mb-4 ">
        Payment Information
      </h1>
      <div className="paymentOptions h-30px w-full flex flex-row mt-2 mb-4">
        <div
          style={{
            backgroundColor:
              values?.payment_method === "paypal" ? "#1B4C84" : "#fff",
            color: values?.payment_method === "paypal" ? "white" : "#1B4C84",
          }}
          className="rounded-l-[10px] flex-1  bg-white text-black flex flex-row justify-center items-center p-1 cursor-pointer"
        >
          <p className="h-fit w-fit">paypal</p>
        </div>
        <div
          style={{
            backgroundColor:
              values?.payment_method === "stripe" ? "#1B4C84" : "#fff",
            color: values?.payment_method === "stripe" ? "white" : "#1B4C84",
          }}
          className=" rounded-r-[10px] flex-1 bg-white text-black flex flex-row justify-center items-center p-1 cursor-pointer"
        >
          <p className="h-fit w-fit">credit card</p>
        </div>
        {/* <div
          style={{
            backgroundColor:
              values?.payment_method === "coinpayment" ? "#1B4C84" : "#fff",
            color:
              values?.payment_method === "coinpayment" ? "white" : "#1B4C84",
          }}
          className="rounded-r-[10px] flex-1 bg-white text-black flex flex-row justify-center items-center p-1 cursor-pointer"
        >
          <p className="h-fit w-fit">crypto</p>
        </div> */}
      </div>
      <div className="paymentOptionDetails w-full mt-2">
        {/* <div className="inputField w-full mt-4 mb-0.5">
          <Form.Item
            name="paypalName"
            className="w-full"
            rules={[
              {
                required: false,
                // message: "Please input your E-mail!",
                message: "",
              },
            ]}
          >
            <Input
              className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              placeholder="Paypal Username"
              readOnly
            />
          </Form.Item>
        </div> */}
        <div className=" flex space-x-3 flex-row py-3 items-center ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M17.6449 6.35C16.1949 4.9 14.2049 4 11.9949 4C7.57488 4 4.00488 7.58 4.00488 12C4.00488 16.42 7.57488 20 11.9949 20C15.7249 20 18.8349 17.45 19.7249 14H17.6449C16.8249 16.33 14.6049 18 11.9949 18C8.68488 18 5.99488 15.31 5.99488 12C5.99488 8.69 8.68488 6 11.9949 6C13.6549 6 15.1349 6.69 16.2149 7.78L12.9949 11H19.9949V4L17.6449 6.35Z"
              fill={values?.status ? "#fabe29" : "#757575"}
            />
          </svg>
          <div className="flex justify-between items-center  space-x-3 ">
            <span className=" text-blue">automatic purchase is</span>
            <span
              style={{ color: values?.status ? "green" : "#ef131a" }}
              className="text-red font-bold"
            >
              {values?.status ? "active" : "inactive"}
            </span>
          </div>
        </div>
        <div className="productdetails flex flex-row gap-2">
          <div className="inputField w-full">
            <p className="text-[#1B4C84]">Product</p>
            <Form.Item
              name="product"
              className="w-full"
              rules={[
                {
                  required: true,
                  // message: "Please input your E-mail!",
                  message: "",
                },
              ]}
            >
              <Input
                className="logininput w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                // onChange={onChangeEvent}
                readOnly
                value={values ? values?.package_name : null}
              />
            </Form.Item>
          </div>
          <div className="inputField w-full">
            <p className="text-[#1B4C84]">Interaktion</p>
            <Form.Item
              name="interaktion"
              className="w-full"
              rules={[
                {
                  required: true,
                  // message: "Please input your E-mail!",
                  message: "",
                },
              ]}
            >
              <InputNumber
                className="logininput w-full px-3 py-1 bg-white rounded-[5px] text-black text-[0.8rem]"
                name="email"
                size="small"
                readOnly
                value={values ? values?.interactions : null}
                // onChange={onChangeEvent}
              />
            </Form.Item>
          </div>
          <div className="inputField w-full">
            <p className="text-[#1B4C84]">Price</p>
            <Form.Item
              name="price"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input
                className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                suffix={"€"}
                type="number"
                min={1}
                readOnly
                value={values ? values?.amount + values?.amount * 0.2 : null}
                // onChange={onChangeEvent}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PayInfoTabSection;
