import { Form, Input, InputNumber, Tooltip } from "antd";
import SelectElement from "./SelectElement";
import { rules } from "../../../../utils/rules";
import refresh_time_icon from "../../../../assets/icon/refresh_time_icon.png";
import InputField from "../../../../components/elements/InputField";
import { InfoSvg, RotateWithTextSvg } from "../../../../assets/svg/svg";

const TaskTypeForm = ({
  jorney_type,
  setDurationInDays,
  setDailyClicks,
  isInEditMode,
  isConfigureRecurringTaskActive,
  setIsInDaysMode,
  isInDaysMode,
}: {
  jorney_type: string;
  setDurationInDays: React.Dispatch<React.SetStateAction<any>>;
  setDailyClicks: React.Dispatch<React.SetStateAction<any>>;
  isInEditMode: boolean;
  isConfigureRecurringTaskActive: boolean;
  setIsInDaysMode: React.Dispatch<React.SetStateAction<any>>;
  isInDaysMode: boolean;
}) => {
  return (
    <>
      <div className="mb-3 flex-1">
        <SelectElement
          name="jorney_type"
          placeholder="Select a  Journey Type"
          label="Task Type"
          options={["search"]}
          // options={["search", "visit"]}
        />
      </div>

      {jorney_type === "search" && (
        <InputField
          title={"Keyword or Keyphrase"}
          name={"search_phrase"}
          className="mb-3"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          info={
            "Provide a keyword or phrase that assists visitors in finding your site effortlessly."
          }
        />
      )}
      {/* <div className="mb-4  mt-4 flex-1">
        <SelectElement
          name="which_type"
          placeholder="Select which Type"
          label="Which Type"
          options={["Website", "Social Media"]}
        />
      </div> */}

      <InputField
        title={"URL / Domain"}
        name={"url"}
        className="mb-3"
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
        info={"Share the URL you wish visitors to explore."}
      />
      {jorney_type === "search" && (
        <InputField
          title={"URL Title"}
          name={"title"}
          className="mb-3"
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          info={"Share the URL you wish visitors to explore."}
        />
      )}

      <div className="daily_clicks w-full flex flex-row items-center justify-between gap-2 mb-3">
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
                // disabled={isInEditMode}
                size="small"
                min={1}
                onChange={(e) => setDailyClicks(e)}
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
              className=" search w-full"
              rules={[
                {
                  required: false,
                  message: "",
                },
              ]}
            >
              <InputNumber
                disabled={isInEditMode || isConfigureRecurringTaskActive}
                size="small"
                min={0}
                onChange={(e) => {
                  if (!e) {
                    setDurationInDays(31);
                  } else {
                    setDurationInDays(e);
                  }
                }}
                className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                placeholder="default is days left this month"
              />
            </Form.Item>
          </div>
        </div>
        <div
          className={`searchTaskModeType mt-4 cursor-pointer 
           ${!isInDaysMode ? "active" : ""}
          `}
          onClick={() => {
            if (isInEditMode) {
            } else {
              setIsInDaysMode((prevState: boolean) => !prevState);
            }
          }}
        >
          <RotateWithTextSvg />
        </div>
      </div>
    </>
  );
};

export default TaskTypeForm;
