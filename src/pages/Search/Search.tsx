import { Form } from "antd";
import { useEffect, useState } from "react";
import useFetchMethods from "../../hook/useFetchMethod";
import AdvanceSettings from "../../components/major/AdvanceSettings";
import SettingsForm from "./components/SettingsForm";
import CardAndFacts from "./components/CardAndFacts";
import ClickOrderBox from "../../components/major/ClickOrderBox";
import { filterMonthArr, formatDate } from "../../utils/helperr";
import { TCardData, TSearchTaskType } from "../../types/app.types";
import { useForm, useWatch } from "antd/es/form/Form";
import ConfirmBtn from "../../components/major/ConfirmBtn";
import { useDataStore } from "../../context/dataProvider";
import { useLocation } from "react-router-dom";
import DisplayInfoMessage from "./components/DisplayInfoMessage";
import useRequestManager from "../../manager/requestManger";

type TSearchTaskForm = {
  daily_clicks: number;
  duration: number;
  duration_in_days: string;
  duration_to: number;
  engine: string;
  search_phrase: string;
  url: string;
  weekly: [];
  countries: string[];
  select_country_specific_form: string;
  advanced_search: string;
  country_specific: string;
  country_engine: string;
  title: string;
};

const defaultDays = 31;
const Search = () => {
  const { createSearchTask, loading } = useFetchMethods();
  const { updateTask } = useRequestManager();
  const { getUserBalance } = useDataStore();
  const [power, setPower] = useState<number>(1);
  const [dailyClicks, setDailyClicks] = useState<number>(0);
  const [durationInDays, setDurationInDays] = useState<number>(defaultDays);
  const [isAdvanceSearchActive, setIsAdvanceSearchActive] =
    useState<boolean>(false);
  const [isConfigureRecurringTaskActive, setIsConfigureRecurringTaskActive] =
    useState<boolean>(false);
  const [monthlyRecurring, setMonthlyRecurring] = useState<number[] | never[]>(
    []
  );
  const [weeklyRecurring, setWeeklyRecurring] = useState<[]>([]);
  const [isDaySettingsActive, setIsDaySettingsActive] = useState<boolean>(true);
  const [isAnyUrlActive, setIsAnyUrlActive] = useState<boolean>(true);
  const [isForAdultActive, setIsForAdultActive] = useState<boolean>(false);
  const [isDailyRandomSettingsActive, setIsDailyRandomSettingsActive] =
    useState<boolean>(false);
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const [isInDaysMode, setIsInDaysMode] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isInAdvanceSettingsMode, setIsInAdvanceSettingsMode] =
    useState<boolean>(false);
  const [cardData, setCardData] = useState<TCardData>({
    interaction_amount: 0,
    url: "",
    duration: 0,
    task_code: "",
  });
  const [primaryInteractions, setPrimaryInteractions] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [form] = useForm();
  const duration_from = useWatch("duration", form);
  const duration_to = useWatch("duration_to", form);
  const [social, setSocial] = useState<string[]>([]);

  //for search engine search
  const [activeSearchType, setActiveSearchType] = useState<string>("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCountriesSpecific, setSelectedCountriesSpecific] =
    useState<string>("");
  const [selectedGeoLocation, setSelectedGeoLocation] = useState<string>("");
  const [isSave, setIsSave] = useState(false);
  const [monthlyInteraction, setMonthlyInteraction] = useState<[]>([]);
  const [initMonthly, setInitMonthly] = useState<[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [editData, setEditData] = useState<any>({});

  const onFinish = async (values: TSearchTaskForm) => {
    if (isInEditMode) {
      console.log("edit");
      setLoading(true);
      let searchObj = editData?.google_search;
      const updatedTaskData = await updateTask(editData?.id, {
        url: values?.url,
        google_search: {
          ...searchObj,
          search_phrase: values.search_phrase,
          title: values.title,
        },
      });
      setLoading(false);
    } else {
      setLoading(true);
      const nowDate = formatDate(new Date());
      let pushValues: TSearchTaskType = {
        points: power,
        bonus_points: 20,
        task_type: "google_search",
        url: values.url,
        track_domain: isAnyUrlActive,
        hours: 720,
        start: nowDate,
        visitors_referrer: social,
        published: isSave ? false : true,
        weekly: [],
        monthly: [],
        recurring: 0,
        daily_clicks: Number(values.daily_clicks),
        days_duration: Number(values.duration_in_days),
        is_adult: isForAdultActive,
        random_click: isDailyRandomSettingsActive,
        countries: values?.countries?.length >= 1 ? values.countries : [],
        total_interactions: primaryInteractions,
        order_months: monthlyInteraction,
        google_search: {
          engine: values.engine,
          search_phrase: values.search_phrase,
          title: values.title,
          duration: values?.duration?.toString()
            ? values?.duration?.toString()
            : 20,
          duration_to: values?.duration_to?.toString()
            ? values?.duration_to?.toString()
            : 90,
          country_specific: isInAdvanceSettingsMode
            ? [values.country_specific]
            : [],
          country_engine: isInAdvanceSettingsMode
            ? [values.country_engine]
            : [],
          advan_search: isAdvanceSearchActive,
        },
        advanced_search: isAdvanceSearchActive ? values.advanced_search : "",
      };

      if (isConfigureRecurringTaskActive && values?.weekly?.length >= 1) {
        pushValues = { ...pushValues, recurring: 1, weekly: values.weekly };
      } else if (
        isConfigureRecurringTaskActive &&
        monthlyRecurring?.length >= 1
      ) {
        pushValues = {
          ...pushValues,
          recurring: 1,
          monthly: filterMonthArr(monthlyRecurring),
        };
      }

      const response = await createSearchTask(pushValues);
      setLoading(false);
      console.log(duration_from);
      if (response && response.status) {
        const cardData: any = {
          interaction_amount: power,
          url: response?.data?.data?.task.url,
          // duration: duration,
          duration: duration_from,
          // duration:
          //   Number(pushValues?.google_search?.duration_to) -
          //   Number(pushValues?.google_search?.duration),
          task_code: response?.data?.data?.task.task_code,
        };
        form.resetFields();
        setCardData(cardData);
        setIsForAdultActive(false);
        setIsDailyRandomSettingsActive(false);
        setIsConfigureRecurringTaskActive(false);
        setIsDaySettingsActive(true);
        setIsInDaysMode(true);
        setIsAdvanceSearchActive(false);
        setMonthlyRecurring([]);
        setInitMonthly([]);
        setIsInEditMode(false);
        setDailyClicks(0);

        getUserBalance();
      }
    }
  };

  const handleTotalsMonthNumber = (value: number) => {
    setMonthNumber(value);
  };

  const handledSocial = (data: string) => {
    if (social.includes(data)) {
      const filteredData = social.filter((icon) => icon !== data);
      setSocial(() => filteredData);
    } else {
      setSocial([...social, data]);
    }
  };

  const updatePower = () => {
    let newPower = 2;
    if (isAdvanceSearchActive) {
      newPower += 1;
    }
    if (selectedCountries.length >= 1) {
      newPower += 1;
    }
    if (social.length >= 1) {
      newPower += 1;
    }
    if (selectedCountriesSpecific) {
      newPower += 1;
    }
    if (selectedGeoLocation) {
      newPower += 1;
    }
    setPower(newPower);
  };
  useEffect(() => {
    updatePower();
    if (durationInDays === 0) {
      setDurationInDays(defaultDays);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dailyClicks,
    social,
    durationInDays,
    isInDaysMode,
    monthNumber,
    isAdvanceSearchActive,
    isInAdvanceSettingsMode,
    primaryInteractions,
    selectedCountries,
    selectedCountriesSpecific,
    selectedGeoLocation,
  ]);

  const location = useLocation();

  const checkLocationData = () => {
    if (location?.state?.type === "edit" || location?.state?.type === "copy") {
      const data = location.state.data?.filter(
        (data: any) => data.id === location.state.id
      )[0];
      setEditData(data);
      setIsInEditMode(true);
      if (data) {
        let defaultValues = {
          engine: data?.google_search ? data?.google_search?.engine : "",
          search_phrase: data?.google_search
            ? data?.google_search?.search_phrase
            : "",

          url: data?.url || "",
          title: data?.google_search?.title || "",
          daily_clicks: data?.order?.daily_clicks || 0,
          duration_in_days: data?.order?.days_duration || 0,
          duration: data?.google_search ? data?.google_search?.duration : 0,
          duration_to: data?.google_search
            ? data?.google_search?.duration_to
            : 0,
          track_domain: data?.track_domain || true,
          countries: data?.countries || [],
          country_specific: data?.google_search?.country_specific,
          country_engine: data?.google_search?.country_engine,
          weekly: [],
          monthly: [],
        };
        setSocial(data?.visitors_referrer);
        setDailyClicks(data?.order?.daily_clicks || 0);
        setDurationInDays(data?.order?.days_duration || 0);
        setIsForAdultActive(data?.is_adult);
        setIsDailyRandomSettingsActive(data?.random_click);
        if (data?.weekly?.length >= 1) {
          setIsConfigureRecurringTaskActive(true);
          setWeeklyRecurring(data?.weekly);
          defaultValues = { ...defaultValues, weekly: data?.weekly };
        } else if (data?.monthly?.length >= 1) {
          setIsConfigureRecurringTaskActive(true);
          setIsDaySettingsActive(false);
          // setMonthlyRecurring(data?.monthly);
          // defaultValues = {
          //   ...defaultValues,
          //   monthly: data?.monthly,
          // };
          let newArray: any = [];
          data?.monthly.map((dateStr: any) => {
            newArray.push(new Date(dateStr));
          });
          setInitMonthly(newArray);
        }
        if (data?.google_search?.advan_search) {
          setIsAdvanceSearchActive(true);
        }
        if (data?.countries) {
          setSelectedCountries(data?.countries);
        }
        if (data?.google_search?.country_specific?.length >= 1) {
          setSelectedCountriesSpecific(data?.google_search?.country_specific);
        }
        if (data?.google_search?.country_engine?.length >= 1) {
          setSelectedGeoLocation(data?.google_search?.country_engine);
        }
        if (data?.order?.order_months?.length > 1) {
          setIsInDaysMode(false);
        }

        form.setFieldsValue(defaultValues);
      }
    } else if (location?.state?.type === "dashboard") {
      if (location?.state?.extra === "Google Search") {
        let defaultValues = {
          engine: "google_search",
        };
        form.setFieldsValue(defaultValues);
      } else if (location?.state?.extra === "Google News Search") {
        setIsAdvanceSearchActive(true);
        let defaultValues = {
          engine: "google_news",
        };
        form.setFieldsValue(defaultValues);
      } else if (location?.state?.extra === "Google Video Search") {
        setIsAdvanceSearchActive(true);
        let defaultValues = {
          engine: "google_video",
        };
        form.setFieldsValue(defaultValues);
      } else if (location?.state?.extra === "Google Images Search") {
        setIsAdvanceSearchActive(true);
        let defaultValues = {
          engine: "google_images",
        };
        form.setFieldsValue(defaultValues);
      } else if (location?.state?.extra === "YouTube Search") {
        setIsAdvanceSearchActive(true);
        let defaultValues = {
          engine: "youtube",
        };
        form.setFieldsValue(defaultValues);
      } else if (location?.state?.extra === "TikTok Search") {
        setIsAdvanceSearchActive(true);
        let defaultValues = {
          engine: "tiktok",
        };
        form.setFieldsValue(defaultValues);
      }
    } else {
      form.resetFields();
      setIsForAdultActive(false);
      setIsDailyRandomSettingsActive(false);
      setIsConfigureRecurringTaskActive(false);
      setIsDaySettingsActive(true);
      setIsInDaysMode(true);
      setIsAdvanceSearchActive(false);
      setMonthlyRecurring([]);
      setInitMonthly([]);
      setIsInEditMode(false);
    }
  };
  useEffect(() => {
    checkLocationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <div className="search relative bg-[#F3F4F5] w-screen pt-[130px] px-4 md:px-10 pb-10">
      <DisplayInfoMessage />
      <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
      <div className="h-fit w-full flex flex-col md:flex-row justify-between pt-8 gap-8">
        <Form
          form={form}
          name="searchTask"
          labelCol={{
            span: 8,
          }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          // autoComplete="off"
          className="first_col flex-auto w-full md:w-[50%] 2xl:min-w-[650px] 2xl:max-w-[650px]"
        >
          <div className="flex flex-col xl:flex-row">
            <div className="title min-w-[150px]">
              <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84]">
                Search
              </h1>
            </div>

            <SettingsForm
              setDailyClicks={setDailyClicks}
              setDurationInDays={setDurationInDays}
              isAdvanceSearchActive={isAdvanceSearchActive}
              setIsAdvanceSearchActive={setIsAdvanceSearchActive}
              isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
              setIsConfigureRecurringTaskActive={
                setIsConfigureRecurringTaskActive
              }
              isDaySettingsActive={isDaySettingsActive}
              setIsDaySettingsActive={setIsDaySettingsActive}
              isAnyUrlActive={isAnyUrlActive}
              setIsAnyUrlActive={setIsAnyUrlActive}
              isInDaysMode={isInDaysMode}
              setIsInDaysMode={setIsInDaysMode}
              setActiveSearchType={setActiveSearchType}
              monthlyRecurring={monthlyRecurring}
              setMonthlyRecurring={setMonthlyRecurring}
              weeklyRecurring={weeklyRecurring}
              setWeeklyRecurring={setWeeklyRecurring}
              form={form}
              initMonthly={initMonthly}
              isInEditMode={isInEditMode}
            />
          </div>
          <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>
          <div className="flex flex-col xl:flex-row mt-4">
            <div className="title min-w-[150px]">
              <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84]">
                {""}
              </h1>
            </div>
            <div className="others w-full flex flex-col gap-3">
              <p className="text-[#1B4C84]">Click Order</p>
              <ClickOrderBox
                interaction={dailyClicks}
                state={!isInDaysMode}
                handleTotalsMonthNumber={handleTotalsMonthNumber}
                noOfDays={durationInDays}
                setInteractions={setPrimaryInteractions}
                setDuration={setDuration}
                power={power}
                monthlyRecurring={monthlyRecurring}
                weeklyRecurring={weeklyRecurring}
                isDaySettingsActive={isDaySettingsActive}
                setMonthlyInteraction={setMonthlyInteraction}
              />
            </div>
          </div>

          {!isInAdvanceSettingsMode && (
            <ConfirmBtn
              showTitle={true}
              interactions={primaryInteractions}
              loader={isLoading}
              setIsSave={setIsSave}
            />
          )}

          <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>

          <AdvanceSettings
            loading={isLoading}
            showTitle={true}
            isForAdultActive={isForAdultActive}
            setIsForAdultActive={setIsForAdultActive}
            isDailyRandomSettingsActive={isDailyRandomSettingsActive}
            setIsDailyRandomSettingsActive={setIsDailyRandomSettingsActive}
            isInAdvanceSettingsMode={isInAdvanceSettingsMode}
            setIsInAdvanceSettingsMode={setIsInAdvanceSettingsMode}
            totalInteractions={primaryInteractions}
            activeSearchType={activeSearchType}
            setIsSave={setIsSave}
            social={social}
            handledSocial={handledSocial}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
            setSelectedCountriesSpecific={setSelectedCountriesSpecific}
            setSelectedGeoLocation={setSelectedGeoLocation}
            isInEditMode={isInEditMode}
          />
        </Form>
        <CardAndFacts
          totalIntraction={power}
          durationincard={duration_from}
          loading={loading}
          cardData={cardData}
        />
      </div>
      <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>
    </div>
  );
};

export default Search;
