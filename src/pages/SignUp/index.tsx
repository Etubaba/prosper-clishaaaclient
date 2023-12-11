import clishaBackMain from "../../assets/img/clishabackmain.png";
import clishaLogo from "../../assets/img/clishalogo.png";
import { Button, Form, Input } from "antd";
import LoginBox from "../../components/elements/LoginBox";
import useAuthMethods from "../../hook/useAuthMethod";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signUp, loading } = useAuthMethods();

  const onFinish = async (values: {
    email: string;
    password: string;
    company_name: string;
    confirm: string;
    firstname: string;
    lastname: string;
  }) => {
    await signUp({
      email: values.email,
      password: values.password,
      company_name: values.company_name,
      confirm: values.confirm,
      firstname: values.firstname,
      lastname: values.lastname,
    });
  };

  return (
    <div className=" auth relative w-screen h-screen overflow-hidden">
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
          <LoginBox>
            <Form
              name="login"
              labelCol={{
                span: 8,
              }}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
              className=" h-full flex flex-col gap-4 justify-between"
            >
              <h1 className="text-white text-[1.5rem] mb-[4px] font-bold text-center">
                Sign Up Company
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
                name="firstname"
                className="loginemail"
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name !",
                  },
                ]}
              >
                <Input
                  placeholder="First Name"
                  className="logininput w-full h-[43px] bg-transparent border-[1px] border-[#fabe28] rounded-[4px] py-[8px] px-[1.2rem] text-white  text-[1rem]"
                />
              </Form.Item>
              <Form.Item
                name="lastname"
                className="loginemail"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name !",
                  },
                ]}
              >
                <Input
                  placeholder="Last Name"
                  className="logininput w-full h-[43px] bg-transparent border-[1px] border-[#fabe28] rounded-[4px] py-[8px] px-[1.2rem] text-white  text-[1rem]"
                />
              </Form.Item>
              <Form.Item
                name="company_name"
                className="loginemail"
                rules={[
                  {
                    required: true,
                    message: "Please input your Company Name !",
                  },
                ]}
              >
                <Input
                  placeholder="Company Name "
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
              <Form.Item
                name="confirm"
                dependencies={["password"]}
                // hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="Confirm Password"
                  className="logininput input_password w-full h-full bg-transparent border-[1px] border-[#fabe28] rounded-[4px] py-[8px]  px-[1.2rem] text-white  text-[1rem]"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  className="loginbtn w-full rounded-[5px] bg-[#fc9828] text-[0.9rem] 2xl:text-[1rem] text-white p-[1.25rem] px-[1.1rem] text-center cursor-pointer flex flex-row justify-center items-center"
                >
                  Sign Up
                </Button>
              </Form.Item>
              <p className="text-white">
                Already Registered!{" "}
                <Link to={"/login"}>
                  <span className="text-yellow font-[500] underline cursor-pointer">
                    Sign in!
                  </span>
                </Link>
              </p>
            </Form>
          </LoginBox>
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

export default SignUp;
