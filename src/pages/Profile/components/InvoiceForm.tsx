import { Input, Form, InputNumber, Select, DatePicker, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { LogoSvg, PlusSvg } from "../../../assets/svg/svg";
import { useDataStore } from "../../../context/dataProvider";
import { useEffect, useRef, useState } from "react";
import { TPackageInvoice } from "../../../types/app.types";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import PackageOrder from "../../../components/elements/PackageOrder";
import html2canvas from "html2canvas";
import { useUserStore } from "../../../context/userProvider";
import Receipt from "./Receipt";
import useRequestManager from "../../../manager/requestManger";

const InvoiceForm = () => {
  const [form] = useForm();
  const { userInvoices } = useDataStore();
  const [values, setValues] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [managers, setMangers] = useState([]);

  const { inviteAdmin, getAllManagers, assignAdmin } = useRequestManager();
  const pdfdata = useRef<any>();
  const { company } = useUserStore();

  const defaultValues = {
    invoiceDate: values?.createdAt
      ? new Date(values?.createdAt).toLocaleString()
      : "",
    invoiceProduct: values?.package_name || "",
    invoiceInteraction: values?.interactions || "",
    invoicePayment: values?.payment_method || "",
  };

  useEffect(() => {
    setValues(userInvoices?.invoices[0]);
  }, [userInvoices]);
  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);

  const printt = async (pdfdata: any, trueData: any) => {
    if (values) {
      let image = "";

      let rows = [];
      for (let i = 0; i < trueData.length; i++) {
        let temp = [
          trueData[i].id,
          trueData[i].date,
          trueData[i].description,
          trueData[i].credit,
          trueData[i].debit,
        ];
        rows.push(temp);
      }
      await html2canvas(pdfdata).then((canvas) => {
        image = canvas.toDataURL("image/png");
      });
      const pdf = new jsPDF("p", "pt", [1280, 1131]);
      pdf.addImage(image, "PNG", 0, 0, 1130, 981);
      // const pdf = new jsPDF("p", "pt", [345, 420]);
      // pdf.addImage(image, "PNG", 15, 15, 315, 370);

      pdf.save("invoice.pdf");
    }
  };
  // console.log(userInvoices?.invoices)

  const onFinish = async (values: any) => {
    setLoading(true);
    await inviteAdmin({
      company_id: company.adminId,
      email: values.email,
      lastname: values.lastname,
      firstname: values.firstname,
      password: values.password,
    });

    setLoading(false);
  };

  useEffect(() => {
    const fetchManagers = async () => {
      const {
        data: { managers },
      } = await getAllManagers();
      setMangers(managers);
    };
    fetchManagers();
  }, []);

  const onSelectFinish = async (value: { manager: number }) => {
    const selectedAdminId = value.manager;
    await assignAdmin(
      `?admin_id=${selectedAdminId}&company_id=${company.adminId}`
    );
  };

  return (
    <>
      <Form
        form={form}
        name="invoice"
        labelCol={{
          span: 8,
        }}
        layout="vertical"
        initialValues={defaultValues}
        autoComplete="off"
        className=""
      >
        <div className="invoices_tab first_col  flex flex-col md:flex-row  pt-2">
          <div className="title">
            <h1 className="profile_subtitle text-[#1B4C84]">Invoices</h1>
          </div>
          <div className="others my-3 lg:my-0 flex-wrap md:flex-nowrap flex flex-row gap-2">
            <div className="inputField w-full">
              <p className="text-[#1B4C84]">Date</p>
              <Form.Item
                name="invoiceDate"
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
                  placeholder=""
                  readOnly
                />
              </Form.Item>
            </div>
            <div className="inputField drop w-full">
              <p className="text-[#1B4C84]">Product</p>
              <Form.Item
                name="invoiceProduct"
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
                  placeholder=""
                  readOnly
                />
              </Form.Item>
            </div>
            <div className="inputField w-full">
              <p className="text-[#1B4C84]">Interaktion</p>
              <Form.Item
                name="invoiceInteraction"
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
                  placeholder=""
                  readOnly
                />
              </Form.Item>
            </div>
            <div className="inputField drop w-full">
              <p className="text-[#1B4C84]">Payment</p>
              <Form.Item
                name="invoicePayment"
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
                  placeholder=""
                  readOnly
                />
              </Form.Item>
            </div>
            <div className="inputField downloadBtn  w-full">
              <p className="text-[#1B4C84]">Download</p>
              <Button
                onClick={() => printt(pdfdata.current, [])}
                tabIndex={0}
                className="invoice_download_btn w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.59 10.09L13 12.67V3H11V12.67L8.41 10.09L7 11.5L12 16.5L17 11.5L15.59 10.09ZM19 19V12H21V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V12H5V19H19Z"
                    fill="black"
                    fillOpacity="0.54"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Form>

      <Form
        onFinish={onSelectFinish}
        name="selectmanager"
        labelCol={{
          span: 8,
        }}
        autoComplete="off"
        className="flex flex-col md:flex-row w-full"
      >
        <div className="first_col managers_tab md:items-center flex flex-col md:flex-row  mt-4">
          <div className="title">
            <h1 className="profile_subtitle text-[#1B4C84]">Select Manager</h1>
          </div>
          <div className="others my-3 lg:my-0 h-fit w-full flex flex-col justify-between">
            <p className="text-[#1B4C84] pb-[3px]">Access clickAds Manager</p>
            <div className="h-fit w-full flex flex-col md:flex-row justify-between gap-2">
              <div className=" w-full ">
                <Form.Item
                  name="manager"
                  className="w-full"
                  // label="Managers"
                >
                  <Select placeholder="Select Manager">
                    {managers.map((manager: any) => {
                      return (
                        <Select.Option key={manager.id} value={manager.id}>
                          {manager.firstname + " " + manager.lastname}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className="second_col flex flex-row justify-between items-end buttnn pl-0 md:px-[2rem] lg:px-[4rem] 2xl:px-[7rem]">
          <Form.Item>
            <Button
              htmlType="submit"
              tabIndex={0}
              className="invoice_download_btn w-fit px-3 py-2 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
            >
              <PlusSvg />
              <p className="text-white whitespace-nowrap w-fit ml-2">
                Add Manager
              </p>
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Form
        onFinish={onFinish}
        name="manager"
        labelCol={{
          span: 8,
        }}
        autoComplete="off"
        className="flex flex-col md:flex-row w-full"
      >
        <div className="first_col managers_tab md:items-center flex flex-col md:flex-row  mt-4">
          <div className="title">
            <h1 className="profile_subtitle text-[#1B4C84]">Invite Manager</h1>
          </div>
          <div className="others my-3 lg:my-0 h-fit w-full flex flex-col justify-between">
            <p className="text-[#1B4C84] pb-[3px]">Access clickAds Manager</p>
            <div className="h-fit w-full flex flex-col md:flex-row justify-between gap-2">
              <div className="inputField w-full md:w-1/4">
                <Form.Item
                  name="firstname"
                  className="w-full"
                  rules={[
                    {
                      required: false,
                      message: "",
                    },
                  ]}
                >
                  <Input
                    placeholder="First name"
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                  />
                </Form.Item>
              </div>
              <div className="inputField md:w-1/4 w-full">
                <Form.Item
                  name="lastname"
                  className="w-full"
                  rules={[
                    {
                      required: false,
                      message: "",
                    },
                  ]}
                >
                  <Input
                    placeholder="Last name"
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                  />
                </Form.Item>
              </div>
              <div className="inputField md:w-1/4 w-full">
                <Form.Item
                  name="email"
                  className="w-full"
                  id="managerEmail"
                  rules={[
                    {
                      type: "email",
                      // message: "The input is not valid E-mail!",
                      message: "",
                    },
                    {
                      required: true,
                      // message: "Please input your E-mail!",
                      message: "",
                    },
                  ]}
                >
                  <Input
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                    name="email"
                    placeholder="Email Address"
                    // onChange={onChangeEvent}
                  />
                </Form.Item>
              </div>
              <div className="inputField md:w-1/4 w-full">
                <Form.Item
                  name="password"
                  className="w-full"
                  id="managerPassword"
                  rules={[
                    {
                      //type: "email",
                      // message: "The input is not valid E-mail!",
                      message: "",
                    },
                    {
                      required: true,
                      // message: "Please input your E-mail!",
                      message: "",
                    },
                  ]}
                >
                  <Input
                    className="w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                    name="password"
                    placeholder="Password"
                    // onChange={onChangeEvent}
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className="second_col flex flex-row justify-between items-end buttnn pl-0 md:px-[2rem] lg:px-[4rem] 2xl:px-[7rem]">
          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              tabIndex={0}
              className="invoice_download_btn w-fit px-3 py-2 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
            >
              <PlusSvg />
              <p className="text-white whitespace-nowrap w-fit">
                Invite Manager
              </p>
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          height: "1px",
        }}
        className="pt-[1px]"
      >
        <div
          className="pdftable flex flex-col items-center w-full max-w-[1280px] min-w-[1280px]"
          ref={pdfdata}
        >
          <Receipt
            packageName={values?.package_name}
            Interaction={values?.interactions}
            startDate={new Date(values?.createdAt).toLocaleDateString()}
            price={Number(values?.amount) - Number(values?.vat)}
            vat={values?.vat}
            name={company?.name}
            method={values?.payment_method}
          />
        </div>
      </div>
    </>
  );
};

export default InvoiceForm;
