import clishaBackMain from "../../assets/img/clishabackmain.png";
import clishaLogo from "../../assets/img/clishalogo.png";
import { Button, Form, Input } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import LoginBox from "../../components/elements/LoginBox";
import useAuthMethods from "../../hook/useAuthMethod";
import { Link } from "react-router-dom";
import { useState } from "react";

type CompanyOpt = {
  adminId: number;
  name: string;
};

const Login = () => {
  const [companyOption, setCompanyOption] = useState<CompanyOpt>({
    name: "Select Company",
    adminId: 0,
  });

  const [open, setOpen] = useState(false);

  const admin_id = localStorage.getItem("admin_id");
  const { signIn, loading, subAdminCompany, selectCompany } = useAuthMethods();

  const onFinish = async (values: { email: string; password: string }) => {
    await signIn({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div className="auth relative w-screen h-screen overflow-hidden">
      <img
        src={clishaBackMain}
        alt={"background"}
        className=" z-[-2] absolute lg:w-full h-full max-md:max-w-[150%] max-md:object-cover max-md:object-right"
      />
      <div className="gardientBack z-[-1] absolute w-full h-full top-0 right-0 left-0 bottom-0"></div>
      <div className="h-full w-full flex flex-col">
        <div className="h-[80px] 2xl:h-[110px] w-full flex flex-row items-center justify-between border-b-[0.5px] border-[#a7aab1]">
          <div className="w-full flex flex-row items-center justify-between px-[1rem] sm:px-[4rem] lg:px-[6rem]">
            <h1 className="invisible sm:visible text-white font-bold text-[1.3rem] 2xl:text-[1.6rem]">
              Welcome to Clisha - The Future of Digital Advertising
            </h1>
            <img
              className="w-[100px] h-[30px] 2xl:w-[170px] 2xl:h-[50px] m-0"
              src={clishaLogo}
              alt={"logo"}
            />
          </div>
        </div>
        <div className="px-[1rem] sm:px-[4rem] lg:px-[6rem] relative w-full h-full flex flex-row items-center">
          {subAdminCompany.length === 0 ? (
            <LoginBox>
              <Form
                name="login"
                labelCol={{
                  span: 8,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
                className=" h-full flex flex-col gap-4 justify-between"
              >
                <h1 className="text-white text-[1.5rem] mb-[4px] font-bold text-center">
                  Login
                </h1>
                <Form.Item
                  name="email"
                  className="loginemail"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email Address"
                    className="logininput w-full h-[43px] bg-transparent border-[1px] border-[#fabe28] rounded-[4px] py-[8px] px-[1.2rem] text-white  text-[1rem]"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    className="logininput input_password w-full h-full bg-transparent border-[1px] border-[#fabe28] rounded-[4px] py-[8px]  px-[1.2rem] text-white  text-[1rem]"
                  />
                </Form.Item>
                <p className="text-white cursor-pointer">Forgot Password?</p>
                <Form.Item>
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="loginbtn w-full rounded-[5px] bg-[#fc9828] text-[0.9rem] 2xl:text-[1rem] text-white p-[1.25rem] px-[1.1rem] text-center cursor-pointer flex flex-row justify-center items-center"
                  >
                    Sign In
                  </Button>
                </Form.Item>
                <p className="text-white">
                  Not Registered!{" "}
                  <Link to={"/sign-up"}>
                    <span className="text-yellow font-[500] underline cursor-pointer">
                      Create new account!
                    </span>
                  </Link>
                </p>
              </Form>
            </LoginBox>
          ) : (
            <LoginBox>
              <div className="w-full h-[7rem] flex flex-col   space-y-10">
                <div className="relative">
                  <div
                    onClick={() => setOpen(!open)}
                    className="w-full items-center relative flex justify-between border-[1px] border-[#fabe28] rounded-[4px] py-[8px] px-2 text-white  text-[1rem]"
                  >
                    <p>{companyOption.name}</p>
                    <MdKeyboardArrowDown onClick={() => setOpen(!open)} />
                  </div>
                  {open && (
                    <div className="w-full px-2 py-4 rounded-md bg-[#15202B] absolute z-50">
                      {subAdminCompany.map((com: any, idx: number) => (
                        <p
                          onClick={() => {
                            setCompanyOption(com);
                            setOpen(false);
                          }}
                          key={idx}
                          className="flex bg-[#1B242F]/20 hover:bg-lightdark mb-1 text-white items-center text-xs px-2 rounded-md py-1"
                        >
                          {com.name}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  onClick={() =>
                    selectCompany(
                      `?admin_id=${admin_id}&company_id=${companyOption.adminId}`
                    )
                  }
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  className="loginbtn w-full rounded-[5px] bg-[#fc9828] text-[0.9rem] 2xl:text-[1rem] text-white p-[1rem] px-[1.1rem] text-center cursor-pointer flex flex-row justify-center items-center"
                >
                  Continue
                </Button>
              </div>
            </LoginBox>
          )}
        </div>
        <div className="w-full  bg-[#fabe28] py-[10px] px-2">
          <p className="text-darkgrey text-[0.6rem] font-light 2xl:text-[1rem] text-center">
            Copyright@2022 Clisha.click
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
