import { useState, useEffect } from "react";
import { Calendar, Value } from "react-multi-date-picker";

const OpenCalenar = ({
  setShowLargeCalendar,
  data,
}: {
  setShowLargeCalendar: (value: boolean) => void;
  data: any;
}) => {
  const [value, setValue] = useState<Value>(data);

  useEffect(() => {
    setValue(data);
  }, [data]);

  return (
    <div className="z-[3] w-full">
      <Calendar
        showOtherDays={true}
        value={value}
        onChange={setValue}
        highlightToday={false}
        readOnly
      >
        <div className="h-[9px]"></div>
      </Calendar>
    </div>
  );
};

export default OpenCalenar;
