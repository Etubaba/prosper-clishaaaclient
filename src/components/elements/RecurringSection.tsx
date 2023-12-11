import { daysOfTheWeek } from "../../constants/data";
import RadioBtn from "./RadioBtn";
import SelectDays from "./SelectDays";
import RangeDatePicker from "./RangeDatePicker";
import { useEffect } from "react";

type TRecurringSection = {
  isConfigureRecurringTaskActive: boolean;
  setIsConfigureRecurringTaskActive: React.Dispatch<React.SetStateAction<any>>;
  isDaySettingsActive: boolean;
  setIsDaySettingsActive: React.Dispatch<React.SetStateAction<any>>;
  monthlyRecurring: number[];
  setMonthlyRecurring: React.Dispatch<React.SetStateAction<any>>;
  weeklyRecurring: string[];
  setWeeklyRecurring: React.Dispatch<React.SetStateAction<any>>;
  form: any;
  initMonthly: string[];
  isInEditMode: boolean;
};

const RecurringSection = ({
  isConfigureRecurringTaskActive,
  setIsConfigureRecurringTaskActive,
  isDaySettingsActive,
  setIsDaySettingsActive,
  monthlyRecurring,
  setMonthlyRecurring,
  weeklyRecurring,
  setWeeklyRecurring,
  form,
  initMonthly,
  isInEditMode,
}: TRecurringSection) => {
  useEffect(() => {
    if (form) {
      if (isDaySettingsActive) {
        form.setFieldsValue({ montly: [] });
      } else {
        setWeeklyRecurring([]);
        form.setFieldsValue({ weekly: [] });
      }
    }
  }, [form, isDaySettingsActive]);
  return (
    <div className="recurringSection h-fit">
      <RadioBtn
        className=""
        state={isConfigureRecurringTaskActive}
        setState={setIsConfigureRecurringTaskActive}
        title={"Configure recurring task settings."}
        isInEditMode={isInEditMode && isInEditMode}
        tooltip={true}
        tooltipTitle={"Customize the days of the week/month when you wish the task to be active."}
      />
      <div
        className={`${
          isConfigureRecurringTaskActive ? "h-[110px] pt-3" : "h-[0px] pt-0"
        }  recurringBox transition ease-in-out delay-100 flex flex-col overflow-hidden gap-3 pl-5`}
      >
        <RadioBtn
          className="w-fit"
          state={isDaySettingsActive}
          setState={setIsDaySettingsActive}
          title={"Day of the week setting."}
          isInEditMode={isInEditMode && isInEditMode}
        />
        <RadioBtn
          className="w-fit"
          state={!isDaySettingsActive}
          setState={setIsDaySettingsActive}
          title={"Day settings for the month."}
          isInEditMode={isInEditMode && isInEditMode}
        />
        {isDaySettingsActive ? (
          <SelectDays
            data={daysOfTheWeek}
            isConfigureRecurringTaskActive={isConfigureRecurringTaskActive}
            weeklyRecurring={weeklyRecurring}
            setWeeklyRecurring={setWeeklyRecurring}
          />
        ) : (
          <RangeDatePicker
            monthlyRecurring={monthlyRecurring}
            setMonthlyRecurring={setMonthlyRecurring}
            initMonthly={initMonthly}
          />
        )}
      </div>
    </div>
  );
};

export default RecurringSection;
