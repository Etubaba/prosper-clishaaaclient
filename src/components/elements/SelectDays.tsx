import { Select, Space, Form } from "antd";
import { TDays } from "../../types/app.types";

const { Option } = Select;

const SelectDays = ({
  data,
  isConfigureRecurringTaskActive,
  weeklyRecurring,
  setWeeklyRecurring,
}: {
  data: TDays;
  isConfigureRecurringTaskActive: boolean;
  weeklyRecurring: string[];
  setWeeklyRecurring: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const handleChange = (value: string[]) => {
    setWeeklyRecurring(value);
  };

  return (
    <div className="selectdays">
      <Form.Item name="weekly">
        <Select
          mode="multiple"
          className="max-w-[250px] mb-2"
          placeholder="select days of the week"
          onChange={handleChange}
          optionLabelProp="label"
          size="large"
          autoClearSearchValue
          value={weeklyRecurring}
        >
          {data.map((data, index) => (
            <Option key={index} value={index} label={data}>
              <Space>{data}</Space>
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectDays;
