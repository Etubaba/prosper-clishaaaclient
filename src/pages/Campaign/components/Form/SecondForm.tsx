import { useState } from "react";
import RecurringSection from "../../../../components/elements/RecurringSection";
import TaskTypeForm from "./TastType";
import UserDoForm from "./UserDoForm";
import Card from "../../../../components/elements/Card";
import { useUserStore } from "../../../../context/userProvider";
import RadioBtn from "../../../../components/elements/RadioBtn";
import DisplayCampaingnCard from "./DisplayCampaingnCard";
import ClishaCard from "../../../../components/elements/ClishaCard";
import CopyContent from "../ContentDisplay/CopyContent";
import SearchContent from "../ContentDisplay/Steps/Search/SearchContent";
import { useDataStore } from "../../../../context/dataProvider";
import InteractionTypes from "./InteractionTypes";
import ClickOrderBox from "../../../../components/major/ClickOrderBox";
import ActiveInteractions from "./ActiveInteractions";
import SearchEngineTypes from "./SearchEngineTypes";
import InteractionBox from "./InteractionBox";

const SecondForm = ({
  form,
  setShowQuestionModal,
  showCard,
  questionValue,
  duration,
  jorney_type,
  search_phrase,
  url,
  campInteractions,
  setCampInteractions,
  isConfigureRecurringTaskActive,
  setIsConfigureRecurringTaskActive,
  isDaySettingsActive,
  setIsDaySettingsActive,
  isAnyUrlActive,
  setIsAnyUrlActive,
  isInDaysMode,
  setIsInDaysMode,
  monthlyRecurring,
  setMonthlyRecurring,
  weeklyRecurring,
  setWeeklyRecurring,
  setDailyClicks,
  setDurationInDays,
  dailyClicks,
  durationInDays,
  initMonthly,
  isInEditMode,
  setPrimaryInteractions,
  handleTotalsMonthNumber,
  power,
  setMonthlyInteraction,
  loading,
}: {
  form: any;
  setShowQuestionModal: React.SetStateAction<any>;
  showCard: boolean;
  questionValue: boolean;
  duration: boolean;
  jorney_type: string;
  search_phrase: string;
  url: string;
  campInteractions: any;
  setCampInteractions: React.Dispatch<React.SetStateAction<any>>;
  isConfigureRecurringTaskActive: boolean;
  setIsConfigureRecurringTaskActive: React.Dispatch<React.SetStateAction<any>>;
  isDaySettingsActive: boolean;
  setIsDaySettingsActive: React.Dispatch<React.SetStateAction<any>>;
  isAnyUrlActive: boolean;
  setIsAnyUrlActive: React.Dispatch<React.SetStateAction<any>>;
  isInDaysMode: boolean;
  setIsInDaysMode: React.Dispatch<React.SetStateAction<any>>;
  monthlyRecurring: number[];
  setMonthlyRecurring: React.Dispatch<React.SetStateAction<any>>;
  weeklyRecurring: string[];
  setWeeklyRecurring: React.Dispatch<React.SetStateAction<any>>;
  setDurationInDays: React.Dispatch<React.SetStateAction<any>>;
  setDailyClicks: React.Dispatch<React.SetStateAction<any>>;
  setPrimaryInteractions: React.Dispatch<React.SetStateAction<any>>;
  dailyClicks: any;
  durationInDays: any;
  initMonthly: string[];
  isInEditMode: boolean;
  handleTotalsMonthNumber: (value: number) => void;
  power: any;
  setMonthlyInteraction: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}) => {
  const { company, admin } = useUserStore();
  const { campaignCards } = useDataStore();
  useState<boolean>(false);

  return (
    <div className="">
      <div className="flex flex-col ">
        <div className="flex justify-between mt-4 items-start space-x-16">
          <div className="flex-1">
            <TaskTypeForm
              jorney_type={jorney_type}
              setDurationInDays={setDurationInDays}
              setDailyClicks={setDailyClicks}
              isInEditMode={isInEditMode}
              isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
              setIsInDaysMode={setIsInDaysMode}
              isInDaysMode={isInDaysMode}
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
              isInEditMode={false}
            />{" "}
            <div className="flex flex-row justify-between mt-4">
              <RadioBtn
                className={"flex-auto w-[50%] justify-start"}
                state={isAnyUrlActive}
                setState={setIsAnyUrlActive}
                title={"Any URL from this domain."}
                // isInEditMode={isInEditMode}
              />
              <RadioBtn
                className={"flex-auto w-[50%] justify-start"}
                state={!isAnyUrlActive}
                setState={setIsAnyUrlActive}
                title={"Only this exact URL"}
                // isInEditMode={isInEditMode}
              />
            </div>
          </div>
          <div className="flex-1">
            {/* {jorney_type === "search" ? ( */}
            <div className="flex-1 flex flex-col ms-10 space-y-2">
              <div className=" relative">
                {jorney_type === "search" ? (
                  <Card
                    boxColor={company.background}
                    foreColor={company.foreground}
                    logo={company.photo}
                    text={`Complete the ${admin.name} task to claim your bonus.`}
                    cardType="search"
                    lineColor={company.foreground}
                    interaction_amount={0}
                    url={""}
                    duration={0}
                    task_code={""}
                    cardColors={company.card_colors?.accent_color ?? "#fa6e28"}
                  />
                ) : (
                  <Card
                    logo={company?.photo}
                    // loading={loading}
                    boxColor={company.background}
                    foreColor={company.foreground}
                    text={`Solve “${company?.name}” Task, Stay for secs and then come back to claim your bonus.`}
                    cardType="visit"
                    lineColor={company?.foreground}
                    interaction_amount={0}
                    url={url ?? ""}
                    duration={0}
                    task_code={""}
                    cardColors={company.card_colors?.accent_color ?? "#fa6e28"}
                  />
                )}
                {search_phrase && (
                  <div className=" absolute top-[-30%] right-[-3rem] z-10">
                    <ClishaCard>
                      <CopyContent value={search_phrase} />
                    </ClishaCard>
                  </div>
                )}
              </div>
              {/* {!questionValue && search_phrase && (
                  <SearchContent domainUrl={url} />
                )} */}
            </div>
            {/* ) : null} */}
          </div>
        </div>
      </div>
      <div className="border border-gray-200 mt-4"></div>
      <InteractionBox
        loading={loading}
        url={url}
        jorney_type={jorney_type}
        campInteractions={campInteractions}
        setCampInteractions={setCampInteractions}
      />

      <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>
      <div className="others w-full flex flex-col gap-3">
        <p className="text-[#1B4C84]">Click Order</p>
        <ClickOrderBox
          state={!isInDaysMode}
          interaction={dailyClicks}
          handleTotalsMonthNumber={handleTotalsMonthNumber}
          noOfDays={durationInDays}
          setInteractions={setPrimaryInteractions}
          setDuration={() => {}}
          power={power}
          monthlyRecurring={monthlyRecurring}
          weeklyRecurring={weeklyRecurring}
          isDaySettingsActive={isDaySettingsActive}
          setMonthlyInteraction={setMonthlyInteraction}
        />
      </div>
    </div>
  );
};

export default SecondForm;
