import { Form, Input } from "antd";
import { rules } from "../../utils/rules";
import { RotateWithTextSvg } from "../../assets/svg/svg";
import { Dispatch } from "react";
import { TDataAction } from "../../types/app.types";

type TFristProps = {
  isRecurring: boolean;
  showMonth: boolean;
  setFormSetting: Dispatch<TDataAction>;
};

const FirstForm = ({ isRecurring, showMonth, setFormSetting }: TFristProps) => {
  const handleMonthState = () => {
    setFormSetting({
      type: "toggleShowMonth",
      payload: !showMonth,
    });
  };
  return (
    <div>
      <Form.Item
        label="Url / Domain"
        name="url"
        className="!text-blue_color !m-0  mb-3 ms-0 "
        rules={[{ required: true, message: "" }]}
      >
        <Input placeholder="Please input" className="w-full inline-block " />
      </Form.Item>

      <div className="mt-2 mb-4 flex items-center ">
        <Form.Item
          label="Daily clicks"
          name="daily_clicks"
          rules={rules.onlyNumberCharacters}
          className="me-2 mb-0 flex-1 daily_clicks"
        >
          <Input type="number" className="w-full inline-block  lg:w-[14rem] " />
        </Form.Item>

        <Form.Item
          name="duration_in_days"
          label="Duration in days"
          rules={rules.notMoreThan31}
          className="mb-0 flex-1 daily_clicks"
        >
          <Input
            disabled={isRecurring}
            type="number"
            placeholder="Default  is one month"
            className="w-full inline-block "
          />
        </Form.Item>
        <div
          className={`searchTaskModeType mt-4 cursor-pointer ${
            showMonth ? "active" : ""
          }`}
          onClick={() => {
            handleMonthState();
          }}
        >
          <RotateWithTextSvg />
        </div>
      </div>
    </div>
  );
};

export default FirstForm;
