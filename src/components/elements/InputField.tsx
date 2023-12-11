import { Form, Input, Tooltip } from "antd";
import { InfoSvg } from "../../assets/svg/svg";

type TInputField = {
  title?: string;
  name: string;
  className?: string;
  rules?: {
    required: boolean;
    message: string;
  }[];
  info?: string;
};

const InputField = ({ title, name, className, rules, info }: TInputField) => {
  return (
    <div className="inputField w-full">
      <div className="flex flex-row pb-[3px] items-center">
        {title && (
          <>
            <p className="text-[#1B4C84]">{title}</p>
            <Tooltip className="ml-3 cursor-pointer" title={info}>
              <span>
                <InfoSvg />
              </span>
            </Tooltip>
          </>
        )}
      </div>

      <Form.Item name={name} rules={rules}>
        <Input
          className={`${className} w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
        />
      </Form.Item>
    </div>
  );
};

export default InputField;
