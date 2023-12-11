import { useEffect, useState } from "react";
import ModalComponent from "../../../components/elements/Modal";
import { useDataStore } from "../../../context/dataProvider";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  TAdminDetails,
  TuserAdminDetails,
  TuserComapnyDetails,
} from "../../../types/app.types";
import { useUserStore } from "../../../context/userProvider";
import useFetchMethods from "../../../hook/useFetchMethod";
import { string } from "yargs";

const UpdateName = ({
  show,
  setter,
}: {
  show: boolean;
  setter: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { setData } = useDataStore();
  const { admin, updateUser } = useUserStore();
  const { updateAdminProfile, getUserProfile } = useFetchMethods();
  const [loading, setIsloading] = useState<boolean>(false);
  const [form] = useForm();

  const defaultValues = {
    adminFirstName: admin?.firstname || "",
    adminLastName: admin?.lastname || "",
  };

  const onFinish = async (value: {
    adminFirstName: string;
    adminLastName: string;
  }) => {
    setIsloading(true);
    let res = await updateAdminProfile({
      firstname: value.adminFirstName,
      lastname: value.adminLastName,
    });
    const getResponse = await getUserProfile();
    if (getResponse?.data?.data) {
      const newData: TuserAdminDetails = {
        admin: {
          ...getResponse?.data?.data?.admin,
        },
      };
      console.log(newData);
      updateUser(newData);
    }
    setData({
      type: "toggleModal",
      payload: false,
    });
    setIsloading(false);
  };
  // useEffect(() => {
  //   if (show) {
  //     setData({
  //       type: "toggleModal",
  //       payload: true,
  //     });
  //   }
  //   // if (admin?.name?.length >= 1 && typeof admin.name === "string") {
  //   //   setData({
  //   //     type: "toggleModal",
  //   //     payload: false,
  //   //   });
  //   // } else if (admin?.name?.length <= 0 && typeof admin.name === "string") {
  //   //   setData({
  //   //     type: "toggleModal",
  //   //     payload: true,
  //   //   });
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [show]);

  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);

  return (
    <div>
      <ModalComponent setter={setter} title="Update your name">
        <Form
          form={form}
          labelCol={{
            span: 8,
          }}
          layout="vertical"
          onFinish={onFinish}
          initialValues={defaultValues}
          autoComplete="off"
          requiredMark={false}
          className="first_col Profile_form mt-5"
        >
          <Form.Item
            name="adminFirstName"
            label="First Name"
            className="w-full"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
          </Form.Item>

          <Form.Item
            name="adminLastName"
            label="Last Name"
            className="w-full mt-2"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input className=" w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]" />
          </Form.Item>

          <Form.Item className=" flex justify-center mt-3">
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              className="updatebtn mt-2 h-[38px] mb-4 md:mb-0 max-w-[100%] sm:max-w-[170px] w-full rounded-[5px] bg-green text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1rem] text-center cursor-pointer flex flex-row justify-center items-center"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
    </div>
  );
};

export default UpdateName;
