import { Form, Select } from "antd";
import { IoIosArrowDown } from "../../../../assets/icon";
const { Option } = Select;

const SelectElement = ({
  placeholder,
  label,
  options,
  name,
}: {
  label: string;
  placeholder: string;
  name: string | any[];
  options: string[];
}) => {
  return (
    <div className="">
      <Form.Item
        name={name}
        label={label}
        rules={[{ required: true, message: "" }]}
      >
        <Select
          className="min-w-[200px]"
          suffixIcon={<IoIosArrowDown className=" text-yellow_color text-lg" />}
          placeholder={placeholder}
          allowClear
        >
          {options.map((text: string, i) => (
            <Option key={i} value={text}>
              {text}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectElement;
