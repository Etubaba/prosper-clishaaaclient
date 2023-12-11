import { Button } from "antd";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import { useLocation } from "react-router-dom";
// import type { Value } from "react-multi-date-picker";

type TRangeDatePicker = {
  monthlyRecurring: number[];
  setMonthlyRecurring: React.Dispatch<React.SetStateAction<any>>;
  initMonthly: string[];
};

const RangeDatePicker = ({
  monthlyRecurring,
  setMonthlyRecurring,
  initMonthly,
}: TRangeDatePicker) => {
  // const tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // const [value, setValue] = useState<Value>([]);
  const [value, setValue] = useState<any>(initMonthly);
  const location = useLocation();

  useEffect(() => {
    let days: { date: number; object: {} }[] = [];
    value.map((date: any) => {
      if (date.day) {
        days.push({ date: date.day, object: date });
      } else {
        days.push({ date: date?.getDate(), object: date });
      }
    });
    setMonthlyRecurring(days);
  }, [value]);

  // useEffect(() => {
  //   if (location?.state) {
  //     setValue(initMonthly);
  //   } else {
  //     setValue([]);
  //   }
  // }, [location.state]);

  return (
    <div className="z-[3] w-full">
      <DatePicker
        multiple
        placeholder="select days of the month"
        fixRelativePosition={true}
        fixMainPosition={true}
        showOtherDays={true}
        value={value}
        onChange={setValue}
      >
        <Button
          onClick={() => {
            setValue([]);
          }}
          type="primary"
          className="updatebtn mx-[9px] invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer text-white whitespace-nowrap font-bold"
        >
          Clear Selection
        </Button>
        <div className="h-[9px]"></div>
      </DatePicker>
    </div>
  );
};

export default RangeDatePicker;
