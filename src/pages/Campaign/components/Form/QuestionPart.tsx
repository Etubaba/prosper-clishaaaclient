import { Button, Form, Input } from "antd";

const QuestionPart = ({
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
  function onFinish(values: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Form
      //   form={form}
      layout="vertical"
      labelCol={{
        span: 8,
      }}
      name="hhh"
      className="question_form"
      requiredMark={false}
      onFinish={onFinish}
      autoComplete="off"
    >
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
      <Form.Item>
        <Button
          type="primary"
          htmlType={"submit"}
          className="updatebtn invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
        >
          finish task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QuestionPart;
