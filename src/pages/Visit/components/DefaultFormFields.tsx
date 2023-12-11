import { Form, Input, InputNumber, Tooltip } from "antd";
import { rules } from "../../../utils/rules";
import refresh_time_icon from "../../../assets/icon/refresh_time_icon.png";
import { InfoSvg, RotateWithTextSvg } from "../../../assets/svg/svg";
import InputField from "../../../components/elements/InputField";

const DefaultFormFields = ({
  monthState,
  setMonthState,
  isConfigureRecurringTaskActive,
  isInEditMode,
}: {
  monthState: boolean;
  setMonthState: () => void;
  isConfigureRecurringTaskActive: boolean;
  isInEditMode: boolean;
}) => {
  return (
    <div className="flex flex-col gap-3 mb-3">
      {/* <Form.Item
        label="Url / Domain"
        name="url"
        className="!text-blue_color !m-0  mb-3 ms-0 "
        rules={[{ required: true, message: "" }]}
      >
        <Input placeholder="Please input" className="w-full inline-block " />
      </Form.Item> */}
      <InputField
        title={"URL / Domain"}
        name={"url"}
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
        info={"Share the URL you wish visitors to explore."}
      />

      <div className="daily_clicks w-full flex flex-row items-center justify-between gap-2">
        <div className="w-full flex flex-row items-center gap-2">
          <div className="inputField w-full">
            <div className="flex flex-row pb-[3px] items-center">
              <p className="text-[#1B4C84]">Daily clicks</p>
              <Tooltip
                className="ml-3 cursor-pointer"
                title={
                  "Specify the number of interactions you aim for each day."
                }
              >
                <span>
                  <InfoSvg />
                </span>
              </Tooltip>
            </div>

            <Form.Item
              name="daily_clicks"
              className=" search w-full"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <InputNumber
                disabled={isInEditMode}
                size="small"
                min={1}
                className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                placeholder="clicks daily"
              />
            </Form.Item>
          </div>
          <div className="inputField w-full">
            <div className="flex flex-row pb-[3px] items-center">
              <p className="text-[#1B4C84]">Duration in days</p>
              <Tooltip
                className="ml-3 cursor-pointer"
                title={"Specify how long you want the task to remain active."}
              >
                <span>
                  <InfoSvg />
                </span>
              </Tooltip>
            </div>

            <Form.Item
              name="duration_in_days"
              className="search w-full"
              rules={[
                {
                  required: false,
                  message: "",
                },
              ]}
            >
              <InputNumber
                disabled={isConfigureRecurringTaskActive || isInEditMode}
                size="small"
                min={0}
                className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                placeholder="default is days left this month"
              />
            </Form.Item>
          </div>
        </div>
        <div
          className={`searchTaskModeType mt-4 cursor-pointer ${
            monthState ? "active" : ""
          }`}
          onClick={() => {
            if (isInEditMode) {
            } else {
              setMonthState();
            }
          }}
        >
          <RotateWithTextSvg />
        </div>
      </div>
      {/* <div className="mt-2 mb-4 flex items-center ">
        <Form.Item
          label="Daily clicks"
          name="daily_clicks"
          rules={rules.onlyNumberCharacters}
          className="me-2 mb-0 flex-1 daily_clicks"
        >
          <Input
            disabled={isInEditMode}
            type="number"
            className="w-full inline-block  lg:w-[14rem] "
          />
        </Form.Item>

        <Form.Item
          name="duration_in_days"
          label="Duration in days"
          rules={rules.notMoreThan31}
          className="mb-0 flex-1 daily_clicks"
        >
          <Input
            disabled={isConfigureRecurringTaskActive || isInEditMode}
            type="number"
            placeholder="Default  is one month"
            className="w-full inline-block "
          />
        </Form.Item>
        <div
          className={`searchTaskModeType mt-4 cursor-pointer ${
            monthState ? "active" : ""
          }`}
          onClick={() => {
            if (isInEditMode) {
            } else {
              setMonthState();
            }
          }}
        >
          <RotateWithTextSvg />
        </div>
        <img
          src={refresh_time_icon}
          alt="icon"
          className="ms-1 mt-7 inline-block cursor-pointer"
          onClick={() => setMonthState()}
        />
      </div> */}
    </div>
  );
};

export default DefaultFormFields;
