/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Form } from "antd";

import BillingFormSection from "./BillingFormSection";
import { useForm } from "antd/es/form/Form";
import { useUserStore } from "../../../context/userProvider";
import { TProfileUpdate, TuserComapnyDetails } from "../../../types/app.types";
import useFetchMethods from "../../../hook/useFetchMethod";
import { useEffect } from "react";
import ProfileFormSection from "./ProfileFormSection";
import UpdateProfilePic from "./UpdateProfilePic";
import { useState } from "react";

const ProfileForm = () => {
  const [form] = useForm();
  const { company, admin, updateUser } = useUserStore();
  const { updateUserProfile, getUserProfile, loading } = useFetchMethods();
  const [phoneNumber, setPhoneNumber] = useState<any>("");

  const defaultValues = {
    adminName: admin?.name || "",
    adminFirstName: admin?.firstname || "",
    adminLastName: admin?.lastname || "",
    address_line: company?.address_line || "",
    address_line_two: company?.address_line_two || "",
    city: company?.city || "",
    name: company?.name || "",
    country: company?.country || "",
    email: admin?.email || "",
    phone_number: company?.phone_number || "",
    prefix: "",
    vat_number: company?.vat_number || "",
    zip: company?.zip || "",
  };

  console.log(company);
  const onFinish = async (values: TProfileUpdate) => {
    let revampedValues = { ...values };
    if (phoneNumber) {
      revampedValues = {
        ...values,
        phone_number: phoneNumber,
      };
    }
    await updateUserProfile(revampedValues);
    const getResponse = await getUserProfile();
    if (getResponse?.data?.data) {
      const newData: TuserComapnyDetails = {
        company: {
          ...getResponse?.data?.data?.company,
        },
      };
      updateUser(newData);
    }
  };

  useEffect(() => {
    let number = company?.phone_number || "";
    setPhoneNumber(number);
  }, [company]);
  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);

  return (
    <Form
      form={form}
      name="profile"
      labelCol={{
        span: 8,
      }}
      layout="vertical"
      initialValues={defaultValues}
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={false}
      className="first_col Profile_form"
    >
      {/* <UpdateProfilePic /> */}
      <ProfileFormSection />
      <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>
      <div className="billing_tab flex flex-col md:flex-row">
        <div className="title">
          <h1 className="profile_subtitle text-[#1B4C84]">Billing Address</h1>
        </div>
        <div className="others mt-3 lg:mt-0 flex flex-col gap-2">
          <BillingFormSection
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="updatebtn mt-2 h-[38px] mb-4 md:mb-0 max-w-[100%] sm:max-w-[170px] w-full rounded-[5px] bg-green text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1rem] text-center cursor-pointer flex flex-row justify-center items-center"
            >
              Update
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
export default ProfileForm;
