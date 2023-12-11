import { Radio, Form, Checkbox, Select, Space } from "antd";
import { daysOfTheWeek } from "../../constants/data";
import RangeDatePicker from "../../components/elements/RangeDatePicker";
import { Dispatch } from "react";
import { TDataAction } from "../../types/app.types";
const { Option } = Select;
const RecurringForm = ({
  setFormSetting,
  is_config_task,
  is_week,
}: {
  setFormSetting: Dispatch<TDataAction>;
  is_config_task: boolean;
  is_week: boolean;
}) => {
  const handleMonthlyRecurring = (data: any[]) => {
    setFormSetting({
      type: "monthlyRecurring",
      payload: data,
    });
  };
  return (
    <div className="">
      <Form.Item
        name="is_config_task"
        valuePropName="checked"
        className="mb-2 mt-2 text-lg  isCheck "
      >
        <Checkbox value={true}>Configure recurring task settings.</Checkbox>
      </Form.Item>
      <div
        className={`${
          is_config_task ? "h-[120px] pb-3 " : " h-[0px] pt-0"
        }   ps-5 transition`}
      >
        {is_config_task && (
          <>
            <Form.Item
              name="is_week"
              valuePropName="checked"
              className="mb-2  text-lg isCheck  "
            >
              <Radio.Group
                defaultValue={true}
                className="flex  flex-col space-y-2"
              >
                <Radio value={true}>Day of the week setting.</Radio>
                <Radio value={false}>Day settings for the month </Radio>
              </Radio.Group>
            </Form.Item>
            {is_week ? (
              <Form.Item name="weekly">
                <Select
                  mode="multiple"
                  className="max-w-[250px] mt-3"
                  placeholder="select days of the week"
                  optionLabelProp="label"
                  size="large"
                  autoClearSearchValue
                >
                  {daysOfTheWeek.map((data, index) => (
                    <Option key={index} value={index} label={data}>
                      <Space>{data}</Space>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            ) : (
              <RangeDatePicker
                monthlyRecurring={[1, 2]}
                setMonthlyRecurring={handleMonthlyRecurring}
                initMonthly={[]}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecurringForm;
