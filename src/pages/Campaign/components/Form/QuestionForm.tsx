import { Button, Form, Input, Tooltip } from "antd";
import SelectElement from "./SelectElement";
import DefaultOptionQuestion from "./DefaultOptionQuestion";
import InputField from "../../../../components/elements/InputField";
import { useForm } from "antd/es/form/Form";
import { useUserStore } from "../../../../context/userProvider";
import { InfoSvg } from "../../../../assets/svg/svg";
import { useEffect } from "react";

const QuestionForm = ({
  questionValue,
  campInteractions,
  setCampInteractions,
  url,
}: {
  questionValue: boolean;
  campInteractions: any;
  setCampInteractions: React.SetStateAction<any>;
  url?: string;
}) => {
  const [form] = useForm();
  const { company } = useUserStore();

  const onFinish = (values: any): void => {
    console.log("les values=>", values);
    console.log(form.getFieldsValue());
    // let oldInteractions = campInteractions;
    // const interactionObj = {
    //   interaction_name: values.name,
    //   interaction_id: campInteractions.length + 1,
    //   question: values.question,
    //   current_url: values.web_site_url,
    //   interaction_type: values.interaction,
    //   option1: values.option1,
    //   option2: values.option2,
    //   option3: values.option3,
    //   answer: values.answer,
    //   token: company.companyId,
    // };
    // oldInteractions.push(interactionObj);
    // setCampInteractions(oldInteractions);
    // console.log(values);
  };

  const defaultValues = {
    web_site_url: url || "",
  };

  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [form, defaultValues]);
  return (
    <div className="mt-4">
      {/* <Form.Item
        name='web_site_url'
        label='User is on website URL / Domain'
        rules={[{ required: true }]}
      >
        <Input size='large' placeholder='domain name' />
      </Form.Item> */}

      {/* {questionValue && ( */}
      <div className="mt-5">
        <Form
          form={form}
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          name="question_form"
          initialValues={defaultValues}
          className="question_form"
          requiredMark={false}
          onFinish={onFinish}
          //onSubmitCapture={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <p className="text-[#1B4C84] font-bold mb-[10px]">Question Task 1</p>
          <div className="inputField w-full flex flex-row items-center gap-2">
            <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
              <>
                <p className="text-[#1B4C84]">
                  User is on website URL / Domain
                </p>
                <Tooltip className="ml-3 cursor-pointer" title={""}>
                  <span>
                    <InfoSvg />
                  </span>
                </Tooltip>
              </>
            </div>

            <Form.Item
              name={"web_site_url"}
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
              className="w-full"
            >
              <Input
                className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
              />
            </Form.Item>
          </div>
          <DefaultOptionQuestion />
          <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]"></div>
            <div className="flex flex-row justify-between flex-1">
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="invoice_download_btn w-[150px] px-3 py-1 !bg-lightgrey rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
                >
                  continue task
                </Button>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType={"submit"}
                  // onClick={onFinish}
                  className="updatebtn invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
                >
                  finish task
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      {/* )} */}
    </div>
  );
};

export default QuestionForm;
