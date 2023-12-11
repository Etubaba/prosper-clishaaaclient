import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";

const DateFilter = ({
  changeFilter,
}: {
  changeFilter: (value: string, type: string) => void;
}) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    changeFilter(dateString, "date");
  };
  return (
    <div className="filter_date_picker w-[140px] h-[23px]">
      <DatePicker
        className="h-full rounded-none text-[0.8rem] "
        format={"DD-MM-YYYY"}
        onChange={onChange}
      />
    </div>
  );
};

export default DateFilter;
