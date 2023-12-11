import { useEffect, useState } from "react";
import { HiMinusCircle } from "../../assets/icon";
import {
  monthDatesettings,
  getCertainDaysInTheMonth,
  getCertainDaysInCertainMonths,
} from "../../utils/helperr";
import ClickOrder from "../elements/ClickOrder";
import { Regex } from "../../constants/regex";

const ClickOrderBox = ({
  state,
  interaction,
  handleTotalsMonthNumber,
  noOfDays,
  setInteractions,
  setDuration,
  power,
  monthlyRecurring,
  weeklyRecurring,
  isDaySettingsActive,
  setMonthlyInteraction,
}: {
  state: boolean;
  interaction: number;
  noOfDays: number;
  handleTotalsMonthNumber: (value: number) => void;
  setInteractions: React.Dispatch<React.SetStateAction<any>>;
  setDuration: React.Dispatch<React.SetStateAction<any>>;
  power: number;
  monthlyRecurring: number[];
  weeklyRecurring: string[];
  isDaySettingsActive: boolean;
  setMonthlyInteraction: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [monthState, setMonthState] = useState(monthDatesettings());

  const handleMonthName = (value: string) => {
    const data = monthState.filter(({ month }) => month !== value);
    setMonthState(() => data);
    handleTotalsMonthNumber(data.length);
  };

  useEffect(() => {
    if (state) {
      if (weeklyRecurring.length >= 1 && isDaySettingsActive) {
        //calculate selected days in the month and set it
        setMonthState(() => getCertainDaysInTheMonth(weeklyRecurring));
      } else if (monthlyRecurring.length >= 1 && !isDaySettingsActive) {
        setMonthState(() => getCertainDaysInCertainMonths(monthlyRecurring));
      } else {
        setMonthState(() => monthDatesettings());
        handleTotalsMonthNumber(monthDatesettings().length);
      }
    } else {
      if (weeklyRecurring.length >= 1 && isDaySettingsActive) {
        //calculate selected days in the month and set it
        setMonthState(() =>
          getCertainDaysInTheMonth(weeklyRecurring).slice(0, 1)
        );
      } else if (monthlyRecurring.length >= 1 && !isDaySettingsActive) {
        setMonthState(() =>
          getCertainDaysInCertainMonths(monthlyRecurring).slice(0, 1)
        );
      } else {
        setMonthState(() => monthDatesettings().slice(0, 1));
        // setMonthState(() => monthState.slice(0, 1));
      }
      handleTotalsMonthNumber(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!state, weeklyRecurring, monthlyRecurring]);

  const getAllInteractions = () => {
    let totalInteractions = 0;
    let totalDuration = 0;
    const getDayLeft = (days: number, index: number) => {
      if (noOfDays > monthState[index].days) {
        return days;
      } else {
        return noOfDays;
      }
    };
    monthState.map(({ month, days }, index) => {
      totalInteractions += getDayLeft(days, index) * interaction;
      totalDuration += Number(getDayLeft(days, index));
    });
    setMonthlyInteraction(monthState);
    setInteractions(totalInteractions * power);
    setDuration(totalDuration);
  };

  useEffect(() => {
    getAllInteractions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interaction, monthState, noOfDays, power]);

  return (
    <div className="flex flex-col gap-2">
      {monthState.map(({ month, days }, index) => {
        const getDayLeft = () => {
          if (noOfDays > monthState[index].days) {
            return Number(days) === 0 ? 0 : Number(days);
          } else {
            return Number(noOfDays);
          }
        };
        return (
          <div key={index} className="flex items-center space-x-4">
            <ClickOrder
              interaction={
                Regex.onlyNumberCharacters.test(String(interaction))
                  ? getDayLeft() * interaction * power
                  : 0
              }
              month={month}
              daysLeft={getDayLeft()}
            />
            {index !== 0 ? (
              <span
                onClick={() => handleMonthName(month)}
                className=" inline-block w-10 ms-5 text-center text-darkpink md:text-2xl text-xl cursor-pointer mx-auto "
              >
                <HiMinusCircle />
              </span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ClickOrderBox;
