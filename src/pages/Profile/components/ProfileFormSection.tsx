import { Form, Input } from "antd";
import { LockSvg, ThumbPrintSvg } from "../../../assets/svg/svg";
import UpdateName from "../../Dashboard/components/UpdateName";
import { useState } from "react";
import UpdateProfilePic from "./UpdateProfilePic";
import { useDataStore } from "../../../context/dataProvider";
import { useUserStore } from "../../../context/userProvider";
import useFetchMethods from "../../../hook/useFetchMethod";
import Spinner from "../../../components/elements/Spiner";

const ProfileFormSection = () => {
  const [showEditName, setShowEditName] = useState(false);
  const { setData } = useDataStore();
  const { admin } = useUserStore();
  const { sendUserResetPasswordMail, loading } = useFetchMethods();
  // console.log(showEditName);
  const showUdateNameModeal = () => {
    setData({
      type: "toggleModal",
      payload: true,
    });
  };

  const sendResendPasswordMail = () => {
    const res = sendUserResetPasswordMail({ email: admin?.email });
  };
  return (
    <>
      <UpdateName setter={setShowEditName} show={showEditName} />
      <div className="profile_tab flex flex-col md:flex-row mb-2">
        <div className="title">
          <h1 className="profile_subtitle text-[#1B4C84]">Profile</h1>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-2">
          <Form.Item
            name="adminFirstName"
            label="First Name"
            className="w-full"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            <Input
              className="logininput w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              name="adminFirstName"
              readOnly
            />
          </Form.Item>
          <Form.Item
            name="adminLastName"
            label="Last Name"
            className="w-full"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            <Input
              className="logininput w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              name="adminLastName"
              readOnly
            />
          </Form.Item>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-4 cursor-pointer min-w-[24px] min-h-[24px]"
            onClick={() => showUdateNameModeal()}
            // onClick={() => setShowEditName(true)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.669 3C17.409 3 17.159 3.1 16.959 3.29L13.839 6.41L11.909 4.5L10.499 5.91L11.919 7.33L2.99902 16.25V21H7.74902L16.669 12.08L18.089 13.5L19.499 12.09L17.579 10.17L20.699 7.05C21.099 6.65 21.099 6.02 20.709 5.63L18.369 3.29C18.169 3.1 17.919 3 17.669 3ZM17.659 5.41L18.579 6.33L15.889 9.02L14.969 8.1L17.659 5.41ZM4.99902 17.08L6.91902 19L14.979 10.94L13.059 9.02L4.99902 17.08Z"
              fill="#000"
            />
          </svg>
        </div>
      </div>
      <div className="profile_tab flex flex-col md:flex-row">
        <div className="title">
          <h1 className="profile_subtitle text-[#1B4C84]">
            <UpdateProfilePic />
          </h1>
        </div>
        <div className="others mt-3 lg:mt-0  flex flex-col xl:flex-row items-start ">
          <Form.Item
            name="email"
            label="Email"
            className="w-full"
            rules={[
              {
                type: "email",

                message: "",
              },
              {
                required: false,
                message: "",
              },
            ]}
          >
            <Input
              className="logininput w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              name="email"
              readOnly
            />
          </Form.Item>

          <div className="flex flex-row items-center justify-between ml-2 gap-3 lg:mt-8 mt-4">
            {/* <div className="flex flex-row w-fit h-fit gap-05 items-center cursor-pointer">
              <ThumbPrintSvg />
              <p className="text-[#1B4C84] whitespace-nowrap">change email</p>
            </div>
            <div
              className="flex flex-row w-fit h-fit gap-1 items-center cursor-pointer"
              onClick={sendResendPasswordMail}
            >
              {loading && <Spinner />}
              <LockSvg />
              <p className="text-[#1B4C84] whitespace-nowrap">
                change password
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFormSection;
