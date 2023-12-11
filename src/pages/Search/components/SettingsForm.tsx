import { Form, Input, InputNumber, Select, Tooltip } from "antd";
import { InfoSvg, RotateWithTextSvg } from "../../../assets/svg/svg";
import RadioBtn from "../../../components/elements/RadioBtn";
import RecurringSection from "../../../components/elements/RecurringSection";
import InputField from "../../../components/elements/InputField";
import { useEffect, useState } from "react";

type TSettingsForm = {
  setDailyClicks: React.Dispatch<React.SetStateAction<any>>;
  setDurationInDays: React.Dispatch<React.SetStateAction<any>>;
  isAdvanceSearchActive: boolean;
  setIsAdvanceSearchActive: React.Dispatch<React.SetStateAction<any>>;
  isConfigureRecurringTaskActive: boolean;
  setIsConfigureRecurringTaskActive: React.Dispatch<React.SetStateAction<any>>;
  isDaySettingsActive: boolean;
  setIsDaySettingsActive: React.Dispatch<React.SetStateAction<any>>;
  isAnyUrlActive: boolean;
  setIsAnyUrlActive: React.Dispatch<React.SetStateAction<any>>;
  isInDaysMode: boolean;
  setIsInDaysMode: React.Dispatch<React.SetStateAction<any>>;
  setActiveSearchType: React.Dispatch<React.SetStateAction<any>>;
  monthlyRecurring: number[];
  setMonthlyRecurring: React.Dispatch<React.SetStateAction<any>>;
  weeklyRecurring: string[];
  setWeeklyRecurring: React.Dispatch<React.SetStateAction<any>>;
  form: any;
  initMonthly: string[];
  isInEditMode: boolean;
};
const SettingsForm = ({
  setDailyClicks,
  setDurationInDays,
  isAdvanceSearchActive,
  setIsAdvanceSearchActive,
  isConfigureRecurringTaskActive,
  setIsConfigureRecurringTaskActive,
  isDaySettingsActive,
  setIsDaySettingsActive,
  isAnyUrlActive,
  setIsAnyUrlActive,
  isInDaysMode,
  setIsInDaysMode,
  setActiveSearchType,
  monthlyRecurring,
  setMonthlyRecurring,
  weeklyRecurring,
  setWeeklyRecurring,
  form,
  initMonthly,
  isInEditMode,
}: TSettingsForm) => {
  type TSEngine = {
    name: string;
    value: string;
  }[];
  let normal: TSEngine = [
    {
      name: "Google Search",
      value: "google_search",
    },
    // {
    //   name: "Bing Search",
    //   value: "bing_search",
    // },
    // {
    //   name: "DuckDuck Search",
    //   value: "duckduck_search",
    // },
    // {
    //   name: "Yandex Search",
    //   value: "yandex_search",
    // },
    // {
    //   name: "Baidu Search",
    //   value: "baidu_search",
    // },
  ];
  let advanced: TSEngine = [
    {
      name: "Google News",
      value: "google_news",
    },
    {
      name: "Google Video",
      value: "google_video",
    },
    {
      name: "Google Images",
      value: "google_images",
    },
    // {
    //   name: "Google Maps",
    //   value: "google_maps",
    // },
    {
      name: "Youtube",
      value: "youtube",
    },
    // {
    //   name: "Tiktok",
    //   value: "tiktok",
    // },
  ];
  const [searchEngine, setSearchEngine] = useState<TSEngine>();

  useEffect(() => {
    if (!isAdvanceSearchActive) {
      setSearchEngine(normal);
    } else {
      setSearchEngine(advanced);
    }
  }, [isAdvanceSearchActive]);
  return (
    <div className="others mt-3 xl:mt-0 w-full max-w-full flex flex-col gap-3">
      <div className="w-full flex flex-row justify-between items-start gap-2">
        <div className="inputField drop flex-auto">
          <div className="flex flex-row pb-[3px] items-center">
            <p className="text-[#1B4C84] ">Search engine</p>
            <Tooltip
              className="ml-3 cursor-pointer"
              title={
                "Choose your preferred search engine to ensure your site is easily discoverable by visitors"
              }
            >
              <span>
                <InfoSvg />
              </span>
            </Tooltip>
          </div>
          <Form.Item
            name="engine"
            className=""
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Select
              className="min-w-[150px] w-full "
              value={"google_search"}
              onChange={(e) => setActiveSearchType(e)}
              disabled={isInEditMode}
            >
              {searchEngine?.map((search) => {
                return (
                  <Select.Option value={search.value}>
                    {search.name}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </div>
        <div className="inputField drop flex-auto flex flex-col items-end">
          <RadioBtn
            state={isAdvanceSearchActive}
            setState={setIsAdvanceSearchActive}
            title={"advanced search engine"}
            isInEditMode={isInEditMode}
          />
          {/* <div
            style={{
              width: isAdvanceSearchActive ? "100%" : "0px",
              transition: "all 0.3s ease-in-out",
            }}
            className={`pt-[3px] overflow-hidden`}
          >
            <Form.Item
              name="advanced_search"
              className=""
              rules={[
                {
                  required: false,
                  message: "",
                },
              ]}
            >
              <Select className="min-w-[150px] w-full">
                <Select.Option value="google_news">Google News</Select.Option>
                <Select.Option value="google_video">Google Video</Select.Option>
                <Select.Option value="google_images">
                  Google Images
                </Select.Option>
                <Select.Option value="youtube">Youtube</Select.Option>
                <Select.Option value="tiktok">TikTok</Select.Option>
              </Select>
            </Form.Item>
          </div> */}
        </div>
      </div>
      <InputField
        title={"Keyword or Keyphrase"}
        name={"search_phrase"}
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
      <InputField
        title={"URL Title"}
        name={"title"}
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
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
                onChange={(e) => setDailyClicks(e)}
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
                disabled={isInEditMode || isConfigureRecurringTaskActive}
                size="small"
                onChange={(e) => {
                  if (!e) {
                    setDurationInDays(31);
                  } else {
                    setDurationInDays(e);
                  }
                }}
                min={0}
                className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
                placeholder="default is days left this month"
              />
            </Form.Item>
          </div>
        </div>
        <div
          className={`searchTaskModeType mt-4 cursor-pointer ${
            !isInDaysMode ? "active" : ""
          }`}
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
      <RecurringSection
        isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
        setIsConfigureRecurringTaskActive={setIsConfigureRecurringTaskActive}
        isDaySettingsActive={isDaySettingsActive}
        setIsDaySettingsActive={setIsDaySettingsActive}
        monthlyRecurring={monthlyRecurring}
        setMonthlyRecurring={setMonthlyRecurring}
        weeklyRecurring={weeklyRecurring}
        setWeeklyRecurring={setWeeklyRecurring}
        form={form}
        initMonthly={initMonthly}
        isInEditMode={isInEditMode}
      />
      <div className="">
        <div className="flex flex-row pb-[3px] items-center">
          <p className="text-[#1B4C84]">
            Duration of browsing on the website from to
          </p>
          <Tooltip
            className="ml-3 cursor-pointer"
            title={
              "Share the desired duration of visitor interaction on your website."
            }
          >
            <span>
              <InfoSvg />
            </span>
          </Tooltip>
        </div>
        <div className=" flex-row flex gap-2 w-full">
          <Form.Item
            name="duration"
            className="search w-full"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            <InputNumber
              disabled={isInEditMode}
              size="small"
              min={20}
              max={90}
              className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              placeholder="at least 20 seconds"
            />
          </Form.Item>
          <Form.Item
            name="duration_to"
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
              min={20}
              max={90}
              className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              placeholder="maximum duration 90 seconds"
            />
          </Form.Item>
        </div>
        <p className="text-[#1B4C84] text-[0.5rem] pb-[3px]">
          Website visitors are randomly shown how long they have stayed on their
          website
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <RadioBtn
          className={"flex-auto w-[50%] justify-start"}
          state={isAnyUrlActive}
          setState={setIsAnyUrlActive}
          title={"Any URL from this domain."}
          isInEditMode={isInEditMode}
        />
        <RadioBtn
          className={"flex-auto w-[50%] justify-start"}
          state={!isAnyUrlActive}
          setState={setIsAnyUrlActive}
          title={"Only this exact URL"}
          isInEditMode={isInEditMode}
        />
      </div>
    </div>
  );
};

export default SettingsForm;
