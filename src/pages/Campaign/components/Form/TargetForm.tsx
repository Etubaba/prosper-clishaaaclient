import { Form } from "antd";
import useForm from "antd/es/form/hooks/useForm";
import { useWatch } from "antd/es/form/Form";
import { Reducer, useEffect, useReducer, useState } from "react";
import SecondForm from "./SecondForm";
import FirstForm from "./FirstForm";
import GeoGraphicCharcForm from "./GeographicCharcFrom";
import GeoGraphicTargetForm from "./GeoGraphicTargetForm";
// import ClickOrderBox from '../../../../components/major/ClickOrderBox';
// import { TDataAction } from '../../../../types/app.types';
// import {
//   TformConfig,
//   formConfigReducer,
// } from '../../../../manager/reducerManger';
// import { formConfigInitailValue } from '../../../../constants/data';
import { useDataStore } from "../../../../context/dataProvider";
import { BlackEyeSvg } from "../../../../assets/svg/svg";
import PreviewModal from "./PreviewModal";
import QuestionModal from "./QuestionModal";
import ConfirmBtn from "../../../../components/major/ConfirmBtn";
import { formatDate, filterMonthArr } from "../../../../utils/helperr";
import useFetchMethods from "../../../../hook/useFetchMethod";
import { useUserStore } from "../../../../context/userProvider";

const defaultDays = 31;
const TragetForm = () => {
  const { setData, getUserBalance } = useDataStore();
  const { createUserCampaignTask, createCampaignInteraction, loading } =
    useFetchMethods();
  const [form] = useForm();
  const nameValue = useWatch("target_group", form);
  const tastType = useWatch("jorney_type", form);
  const questionValue = useWatch("is_question", form);
  const continent = useWatch("continent", form);
  const duration = useWatch("is_duration", form);
  const jorney_type = useWatch("jorney_type", form);
  const daily_clicks = useWatch("daily_clicks", form);
  const duration_in_days = useWatch("duration_in_days", form);
  const search_phrase = useWatch("search_phrase", form);
  const url = useWatch("url", form);
  const [showPreview, setShowPreview] = useState(false);
  const [previewObj, setPreviewObj] = useState<any>([]);
  const [campInteractions, setCampInteractions] = useState<any>([]);
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [isFinishLoading, setIsFinishLoading] = useState(false);
  const [interactionCreated, setInteractionCreated] = useState(false);

  const [isDaySettingsActive, setIsDaySettingsActive] = useState<boolean>(true);
  const [isAnyUrlActive, setIsAnyUrlActive] = useState<boolean>(true);
  const [monthlyRecurring, setMonthlyRecurring] = useState<number[] | never[]>(
    []
  );
  const [isConfigureRecurringTaskActive, setIsConfigureRecurringTaskActive] =
    useState<boolean>(false);
  const [power, setPower] = useState<number>(1);
  const [primaryInteractions, setPrimaryInteractions] = useState<number>(0);
  const [dailyClicks, setDailyClicks] = useState<number>(0);
  const [durationInDays, setDurationInDays] = useState<number>(defaultDays);
  const [weeklyRecurring, setWeeklyRecurring] = useState<[]>([]);
  const [isInDaysMode, setIsInDaysMode] = useState<boolean>(true);
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const [initMonthly, setInitMonthly] = useState<[]>([]);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [monthlyInteraction, setMonthlyInteraction] = useState<[]>([]);
  const [isSave, setIsSave] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { admin, company } = useUserStore();
  // console.log(campaignCards);

  const handleTotalsMonthNumber = (value: number) => {
    setMonthNumber(value);
  };

  const onfinish = async (values: any) => {
    if (isInEditMode) {
      // console.log("edit");
      // setLoading(true);
      // let searchObj = editData?.google_search;
      // const updatedTaskData = await updateTask(editData?.id, {
      //   url: values?.url,
      //   google_search: {
      //     ...searchObj,
      //     search_phrase: values.search_phrase,
      //     title: values.title,
      //   },
      // });
      // setLoading(false);
    } else {
      setLoading(true);
      let catcher;
      try {
        //create interaction
        let interactionsForTask = [];
        try {
          if (campInteractions.length >= 1) {
            // remove duplicate interaction from campInteraction

            const uniqueInteraction: any = {};
            const uniqueCampIneraction = campInteractions.filter(
              (item: any) => {
                if (!uniqueInteraction[item.interaction_name]) {
                  uniqueInteraction[item.interaction_name] = true;
                  return true;
                }
                return false;
              }
            );

            for (let i = 0; i < uniqueCampIneraction.length; i++) {
              let interactionObj = uniqueCampIneraction[i];
              // Check if campInteractions already contains an object with the same interaction_name
              // let similarInteractions = campInteractions.filter(
              //   (item: any, index: any) =>
              //     item.interaction_name === interactionObj.interaction_name &&
              //     index !== i
              // );
              // if (similarInteractions.length > 0) {
              //   // Log the similar interactions and stop the function
              //   throw new Error(`Some interactions have the same name`);
              // }

              const interactionRes = await createCampaignInteraction({
                answer: interactionObj.answer,
                url: interactionObj.current_url,
                name: interactionObj.interaction_name,
                option1: interactionObj.option1,
                option2: interactionObj.option2,
                option3: interactionObj.option3,
                question: interactionObj.question,
                token: interactionObj.token,
                type: "multichoice",
                adminId: interactionObj.token,
              });

              if (interactionRes?.data?.data) {
                interactionsForTask.push({
                  description: "",
                  interaction: `${interactionRes?.data?.data?.interaction?.id}`,
                  link: interactionObj?.current_url,
                  link_type: "content",
                  // name: interactionObj.interaction_name, // Add interaction_name to the object
                });
              }

              // console.log(interactionRes);
              if (interactionRes?.data?.errors) {
                throw new Error("an error occurred");
              }
              if (!interactionRes) {
                throw new Error("an error occurred");
              }

              setInteractionCreated(true);
            }
          } else {
            throw new Error("please add interaction");
          }
        } catch (err: any) {
          catcher = "error occur";

          console.log(err.message);
        }

        const nowDate = formatDate(new Date());
        let pushValues: any = {
          points: power,
          bonus_points: 20,
          task_type: "search_journey",
          advance_type: "campaign",
          url: values.url,
          track_domain: isAnyUrlActive,
          hours: 720,
          start: nowDate,
          published: isSave ? false : true,
          weekly: [],
          monthly: [],
          recurring: 0,
          token: company.id,
          daily_clicks: Number(values.daily_clicks),
          days_duration: Number(values.duration_in_days),
          countries: values?.countries?.length >= 1 ? values.countries : [],
          total_interactions: primaryInteractions,
          order_months: monthlyInteraction,
          journey: [...interactionsForTask],
          google_search: {},
        };

        if (tastType === "search") {
          pushValues = {
            ...pushValues,
            task_type: "search_journey",
            google_search: {
              advan_search: false,
              country_engine: [],
              country_specific: [],
              duration: 20,
              duration_to: 90,
              engine: "google_search",
              title: values.title,
              search_phrase: values.search_phrase,
            },
          };
        } else if (tastType === "visit") {
          // pushValues = { ...pushValues, task_type: "journey" };
        }

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

        if (catcher !== "error occur")
          await createUserCampaignTask(pushValues, admin.id, company.id);

        // const response = await createUserCampaignTask(
        //   pushValues,
        //   admin.id,
        //   company.id
        // );
        setLoading(false);
        setIsFinishLoading(false);

        // const response = await createUserCampaignTask(
        //   pushValues,
        //   admin.id,
        //   company.id
        // );
      } catch (err) {
        console.log(err);
        setLoading(false);
        setIsFinishLoading(false);
      }
      // console.log(duration_from);
      // if (response && response.status) {
      //   const cardData: any = {
      //     interaction_amount: power,
      //     url: response?.data?.data?.task.url,
      //     // duration: duration,
      //     // duration: duration_from,
      //     // duration:
      //     //   Number(pushValues?.google_search?.duration_to) -
      //     //   Number(pushValues?.google_search?.duration),
      //     task_code: response?.data?.data?.task.task_code,
      //   };
      //   form.resetFields();
      //   // setCardData(cardData);
      //   setIsConfigureRecurringTaskActive(false);
      //   setIsDaySettingsActive(true);
      //   setIsInDaysMode(true);
      //   setMonthlyRecurring([]);
      //   setInitMonthly([]);
      //   setIsInEditMode(false);
      //   setDailyClicks(0);

      //   getUserBalance();
      // }

      setInteractionCreated(false);
      setCampInteractions([]);
    }
    // const getOptions = Object.keys(values);
    // const options: string[] = [];
    // getOptions.forEach((key) => {
    //   if (key.includes("option")) options.push(values[key]);
    // });

    // // questions?: {
    // //   question: string;
    // //   answer_options: string[];
    // //   answer: string;
    // // };

    // const updatecardValue = {
    //   daily_clicks: values.daily_daily,
    //   duration: values.is_duration,
    //   duration_in_days: values.duration_in_days,
    //   is_fill_form: values.is_fill_form,
    //   interaction: values.interaction,
    //   is_question: values.is_question,
    //   is_todo: values.todo,
    //   is_video: values.is_video,
    //   jorney_type: values.jorney_type,
    //   language: values.language,
    //   question: values.question_one,
    //   url: values.url,
    //   web_site_url: values.web_site_url,
    //   weekly: values.weeklly,
    //   which_type: values.which_type,
    //   questions: {
    //     question: values.question_one,
    //     answer_options: options,
    //     answer: values.answer,
    //   },
    //   addquestion: [],
    // };
    // setData({
    //   type: "updateCampaignCard",
    //   payload: updatecardValue,
    // });
  };

  useEffect(() => {
    if (tastType) {
      let pushed = [];
      if (tastType === "search") {
        pushed.push({
          type: "card",
          mode: tastType,
          data: { keyword: search_phrase },
        });
        if (search_phrase) {
          pushed.push({
            type: "copied",
            mode: tastType,
            data: { url: url },
          });
        }
      }
      setPreviewObj(pushed);
    }
  }, [tastType, search_phrase, url]);

  const delayFunc = async (value: any) => {
    setIsFinishLoading(true);
    setTimeout(async () => await onfinish(value), 3000);
    form.resetFields();
  };

  // console.log(previewObj);
  // console.log(campInteractions);
  return (
    <div className="">
      <Form
        form={form}
        layout="vertical"
        className="target_form"
        requiredMark={false}
        // size='large'
        onFinish={delayFunc}
        //onFinish={onfinish}
      >
        <div className="mt-3 lg:max-w-screen-lg mx-auto">
          <FirstForm showOtherForm={!!nameValue} />

          {nameValue ? (
            <div className="">
              <GeoGraphicCharcForm />
              <GeoGraphicTargetForm continent={continent} />
            </div>
          ) : null}

          <div className="w-full h-[1px] bg-[#DADADA] mt-5"></div>

          <SecondForm
            isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
            setIsConfigureRecurringTaskActive={
              setIsConfigureRecurringTaskActive
            }
            monthlyRecurring={monthlyRecurring}
            setMonthlyRecurring={setMonthlyRecurring}
            weeklyRecurring={weeklyRecurring}
            setWeeklyRecurring={setWeeklyRecurring}
            setShowQuestionModal={setShowQuestionModal}
            duration={duration}
            questionValue={questionValue}
            showCard={!!tastType}
            jorney_type={jorney_type}
            search_phrase={search_phrase}
            url={url}
            campInteractions={campInteractions}
            setCampInteractions={setCampInteractions}
            isDaySettingsActive={isDaySettingsActive}
            setIsDaySettingsActive={setIsDaySettingsActive}
            isAnyUrlActive={isAnyUrlActive}
            setIsAnyUrlActive={setIsAnyUrlActive}
            isInDaysMode={isInDaysMode}
            setIsInDaysMode={setIsInDaysMode}
            form={form}
            initMonthly={initMonthly}
            isInEditMode={isInEditMode}
            setDailyClicks={setDailyClicks}
            dailyClicks={dailyClicks}
            durationInDays={durationInDays}
            setDurationInDays={setDurationInDays}
            setPrimaryInteractions={setPrimaryInteractions}
            handleTotalsMonthNumber={handleTotalsMonthNumber}
            power={power}
            setMonthlyInteraction={setMonthlyInteraction}
            loading={isFinishLoading}
          />

          <ConfirmBtn
            showTitle={false}
            interactions={primaryInteractions}
            loader={isLoading}
            setIsSave={setIsSave}
          />
        </div>
      </Form>
      {tastType && (
        <div
          onClick={() => setShowPreview(true)}
          className="fixed bottom-[100px] md:right-10 right-4 previewBtn bg-purple rounded-full h-[70px] w-[70px] flex flex-row justify-center items-center cursor-pointer"
        >
          <BlackEyeSvg />
          <p className="absolute top-[110%] whitespace-nowrap font-bold">
            click to preview
          </p>
        </div>
      )}
      <QuestionModal
        showQuestionModal={showQuestionModal}
        setShowQuestionModal={setShowQuestionModal}
        campInteractions={campInteractions}
        setCampInteractions={setCampInteractions}
      />
      <PreviewModal
        showPreview={showPreview}
        setShowPreview={setShowPreview}
        previewObj={previewObj}
      />
    </div>
  );
};

export default TragetForm;
