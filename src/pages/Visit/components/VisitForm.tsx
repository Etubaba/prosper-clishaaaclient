import { Form } from "antd";
import { useEffect, useState } from "react";
import RadioForUrl from "./RadioForUrl";
import useFetchMethods from "../../../hook/useFetchMethod";
import { useDataStore } from "../../../context/dataProvider";
import { TCard } from "../../../types/app.types";
import { useForm, useWatch } from "antd/es/form/Form";
import { filterMonthArr, formatDate } from "../../../utils/helperr";
import { useUserStore } from "../../../context/userProvider";
import RecurringSection from "../../../components/elements/RecurringSection";
import DefaultFormFields from "./DefaultFormFields";
import DurationAndUrlForm from "./DurationAndUrlForm";
import AdvanceSettings from "../../../components/major/AdvanceSettings";
import ConfirmBtn from "../../../components/major/ConfirmBtn";
import ClickOrderBox from "../../../components/major/ClickOrderBox";
import { useLocation } from "react-router-dom";
import Card from "../../../components/elements/Card";
import VisitFormNote from "./VisitFormNote";
import useRequestManager from "../../../manager/requestManger";

const defaultDays = 31;

const VisitForm = () => {
  const { createSearchTask } = useFetchMethods();
  const { updateTask } = useRequestManager();
  const { company } = useUserStore();
  const { setData, getUserBalance } = useDataStore();
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const getdailyClickValue = useWatch("daily_clicks", form);
  const duration_in_days = useWatch("duration_in_days", form);
  const durationincard = useWatch("duration", form);
  const nowDate = formatDate(new Date());
  const [social, setSocial] = useState<string[]>([]);

  const [updateAmountRate, setUpdateAmountRate] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [isAnyUrlActive, setIsAnyUrlActive] = useState<boolean>(true);
  // const duration_from = useWatch("duration", form);
  // const duration_to = useWatch("duration_to", form);

  const [primaryInteractions, setPrimaryInteractions] = useState<number>(0);
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [isForAdultActive, setIsForAdultActive] = useState<boolean>(false);
  const [isDailyRandomSettingsActive, setIsDailyRandomSettingsActive] =
    useState<boolean>(false);

  const [monthState, setMonthState] = useState<boolean>(false);
  const [isConfigureRecurringTaskActive, setIsConfigureRecurringTaskActive] =
    useState<boolean>(false);
  const [monthlyRecurring, setMonthlyRecurring] = useState<[]>([]);
  const [initMonthly, setInitMonthly] = useState<any>([]);
  const [weeklyRecurring, setWeeklyRecurring] = useState<[]>([]);
  const [monthlyInteraction, setMonthlyInteraction] = useState<[]>([]);

  const [isDaySettingsActive, setIsDaySettingsActive] = useState<boolean>(true);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [editData, setEditData] = useState<any>({});
  const location = useLocation();
  //for save or publish

  const handledSocial = (data: string) => {
    if (social.includes(data)) {
      const filteredData = social.filter((icon) => icon !== data);
      setSocial(() => filteredData);
    } else {
      setSocial([...social, data]);
    }
  };
  const [isSave, setIsSave] = useState(false);
  const visitDefaultData = {
    points: updateAmountRate,
    bonus_points: 20,
    task_type: "website_click",
  };

  const changeMonthState = () => {
    setMonthState((state) => !state);
  };

  const setCardData = (data: Partial<TCard>) => {
    setData({
      type: "taskCard",
      payload: data,
    });
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    if (isInEditMode) {
      console.log("edit");
      setLoading(true);
      const updatedTaskData = await updateTask(editData?.id, {
        url: values?.url,
      });
      setLoading(false);
    } else {
      let mainData = {
        ...visitDefaultData,
        ...values,
        days_duration: values?.duration_in_days,
        hours: 720,
        track_domain: isAnyUrlActive,
        visitors_referrer: social,
        start: nowDate,
        random_click: isDailyRandomSettingsActive,
        is_adult: isForAdultActive,
        total_interactions: primaryInteractions,
        recurring: 0,
        published: isSave ? false : true,
        countries: values?.countries?.length >= 1 ? values.countries : [],
        website_click: {
          duration: values.duration ? values.duration : "20",
          duration_to: values.duration_to ? values.duration_to : "90",
        },
        order_months: monthlyInteraction,
      };

      if (isConfigureRecurringTaskActive && values?.weekly?.length >= 1) {
        mainData = { ...mainData, recurring: 1, weekly: values.weekly };
      } else if (
        isConfigureRecurringTaskActive &&
        monthlyRecurring?.length >= 1
      ) {
        mainData = {
          ...mainData,
          recurring: 1,
          monthly: filterMonthArr(monthlyRecurring),
        };
      }

      setLoading(true);

      const response = await createSearchTask(mainData);
      if (response && response.status) {
        const cardData = {
          interaction_amount: primaryInteractions,
          url: response?.data?.data?.task.url,
          time: response?.data?.data?.task.website_click.duration,
          // duration: duration,
          duration: response?.data?.data?.task.website_click.duration,
          // duration:
          //   response?.data?.data?.task.website_click.duration_to -
          //   response?.data?.data?.task.website_click.duration,
          task_code: response?.data?.data?.task.task_code,
        };
        setCardData(cardData);
        getUserBalance();
      }
    }
    setLoading(false);
  };

  const handleTotalsMonthNumber = (value: number) => {
    setMonthNumber(value);
  };

  const toUpateAmountRateFn = () => {
    let newPower = 1;
    if (social.length >= 1) {
      newPower += 1;
    }
    if (selectedCountries.length >= 1) {
      newPower += 1;
    }
    setUpdateAmountRate(newPower);
  };

  useEffect(() => {
    toUpateAmountRateFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    getdailyClickValue,
    duration_in_days,
    monthState,
    monthNumber,
    primaryInteractions,
    buttonState,
    social,
    selectedCountries,
  ]);

  const cheeckLocationData = () => {
    if (location.state) {
      if (location?.state?.type === "edit") {
        setIsInEditMode(true);
      }

      const data = location.state.data?.filter(
        (data: any) => data.id === location.state.id
      )[0];
      setEditData(data);
      if (data) {
        let defaultValues = {
          url: data?.url || "",
          daily_clicks: data?.order?.daily_clicks || 0,
          duration_in_days: data?.order?.days_duration || 0,
          duration: data?.website_click?.duration || 0,
          duration_to: data?.website_click?.duration_to || 0,
          track_domain: data?.track_domain || true,
          countries: data?.countries || [],
          visitors_referrer: data?.visitors_referrer || [],
          monthly: [],
          weekly: [],
        };
        setIsForAdultActive(data?.is_adult);
        setIsDailyRandomSettingsActive(data?.random_click);
        setSocial(data?.visitors_referrer);
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
        if (data?.countries) {
          setSelectedCountries(data?.countries);
        }
        if (data?.order?.order_months?.length > 1) {
          setMonthState(true);
        }
        form.setFieldsValue(defaultValues);
      }
    } else {
      form.resetFields();
      setIsForAdultActive(false);
      setIsDailyRandomSettingsActive(false);
      setSocial([]);
      setInitMonthly([]);
      setMonthlyRecurring([]);
      setIsConfigureRecurringTaskActive(false);
      setIsDaySettingsActive(true);
      setMonthState(false);
      setIsInEditMode(false);
    }
  };

  const showSeconds = () => {
    return isNaN(Number(durationincard)) ? 0 : durationincard;
  };
  const { vistcarddata } = useDataStore();

  // const [loading, setLoading] = useState(false);
  const [cardColor, setCardColor] = useState<string | null>(
    company?.background
  );
  const [cardForeColor, setCardForeColor] = useState<string>(
    company?.foreground
  );

  useEffect(() => {
    cheeckLocationData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);
  useEffect(() => {
    setCardColor(company?.background);
    setCardForeColor(company?.foreground);
  }, [company]);

  return (
    <div className="flex mt-6 vist_form items-start  lg:flex-row flex-col">
      <div className="flex lg:w-auto w-full md:flex-row flex-col">
        <h3 className="text-blue_color font-bold text-xl md:mb-0 mb-3">
          Visits
        </h3>
        <Form
          form={form}
          name="complex-form"
          layout="vertical"
          className="md:ms-9 ms-0 lg:w-[450px] w-full"
          requiredMark={false}
          onFinish={onFinish}
        >
          <DefaultFormFields
            monthState={monthState}
            setMonthState={changeMonthState}
            isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
            isInEditMode={isInEditMode}
          />

          <RecurringSection
            isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
            setIsConfigureRecurringTaskActive={
              setIsConfigureRecurringTaskActive
            }
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
          <div className="mb-2"></div>
          <DurationAndUrlForm
            isInEditMode={isInEditMode}
            isAnyUrlActive={isAnyUrlActive}
            setIsAnyUrlActive={setIsAnyUrlActive}
          />
          {/* <div className="mt-2 ">
            <RadioForUrl isInEditMode={isInEditMode} />
          </div> */}
          <div className="border border-gray-200 mt-4"></div>
          <span className=" text-blue_color inline-block mb-1 text-md  mt-3">
            Click Order
          </span>
          <div className=" mt-2 ">
            <ClickOrderBox
              state={monthState}
              interaction={getdailyClickValue}
              handleTotalsMonthNumber={handleTotalsMonthNumber}
              noOfDays={
                duration_in_days === 0 ||
                duration_in_days === undefined ||
                duration_in_days === ""
                  ? defaultDays
                  : duration_in_days
              }
              setInteractions={setPrimaryInteractions}
              setDuration={setDuration}
              power={updateAmountRate}
              monthlyRecurring={monthlyRecurring}
              weeklyRecurring={weeklyRecurring}
              isDaySettingsActive={isDaySettingsActive}
              setMonthlyInteraction={setMonthlyInteraction}
            />
          </div>

          {!buttonState && (
            <ConfirmBtn
              showTitle={false}
              interactions={primaryInteractions}
              loader={loading}
              setIsSave={setIsSave}
            />
          )}

          <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>
          <AdvanceSettings
            loading={loading}
            showTitle={false}
            type={"visit"}
            isForAdultActive={isForAdultActive}
            setIsForAdultActive={setIsForAdultActive}
            isDailyRandomSettingsActive={isDailyRandomSettingsActive}
            setIsDailyRandomSettingsActive={setIsDailyRandomSettingsActive}
            isInAdvanceSettingsMode={buttonState}
            setIsInAdvanceSettingsMode={setButtonState}
            totalInteractions={primaryInteractions}
            setIsSave={setIsSave}
            social={social}
            handledSocial={handledSocial}
            selectedCountries={selectedCountries}
            setSelectedCountries={setSelectedCountries}
            setSelectedCountriesSpecific={() => {}}
            setSelectedGeoLocation={function (value: any): void {}}
            isInEditMode={isInEditMode}
          />
        </Form>
      </div>
      <div className="flex-1 md:ms-16 w-full">
        <div className="flex justify-between flex-wrap md:flex-row flex-col gap-8 ">
          <div className="mb-4">
            <h3 className=" text-blue_color text-xl mb-2 font-medium">
              Your user card
            </h3>
            <Card
              logo={company?.photo}
              loading={loading}
              boxColor={cardColor}
              foreColor={cardForeColor}
              text={`Solve “${
                company?.name
              }” Task, Stay for ${showSeconds()} sec and then come back to claim your bonus.`}
              cardType="visit"
              lineColor={company?.foreground}
              interaction_amount={
                updateAmountRate || vistcarddata.interaction_amount
              }
              url={vistcarddata.url}
              duration={durationincard}
              task_code={vistcarddata.task_code}
              cardColors={company.card_colors?.accent_color ?? "#fa6e28"}
            />
          </div>
          <div className="flex-auto">
            <h3 className=" text-blue_color text-xl font-medium mb-2">
              Cost of each function
            </h3>
            <table className="w-full bg-white max-w-[700px]">
              <thead className="bg-[#979797]j bg-blue p-2">
                <th className="px-2 py-1 w-[50%] text-yellow text-start">
                  Function
                </th>
                <th className="px-2 py-1 w-[50%] text-yellow text-end">Cost</th>
              </thead>
              <tbody>
                <tr className="">
                  <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                    Visit
                  </td>
                  <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                    1
                  </td>
                </tr>
                <tr className="">
                  <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                    Restrict visitors to the website by country
                  </td>
                  <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                    1
                  </td>
                </tr>
                <tr className="">
                  <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                    The orders is for adults
                  </td>
                  <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                    0
                  </td>
                </tr>
                <tr className="">
                  <td className="px-2 py-1 w-[50%] text-start !font-inter text-blue text-[0.7rem]">
                    Websites visitors via messenger
                  </td>
                  <td className="px-2 py-1 w-[50%] text-end !font-inter font-[800] text-red text-[1rem]">
                    1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {location.pathname === "/orders/editVisitTask" ? "" : <VisitFormNote />}
      </div>
    </div>
  );
};
export default VisitForm;
