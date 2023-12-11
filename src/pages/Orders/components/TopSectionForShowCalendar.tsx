import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoMdCloseCircleOutline,
  AiFillCloseCircle,
} from "../../../assets/icon";
import { Select } from "antd";
const { Option } = Select;
const TopSectionForShowCalendar = ({
  setShowLargeCalendar,
  selectedMonth,
  selectedYear,
  setSelectedMonth,
  setSelectedYear,
}: {
  setShowLargeCalendar: (value: boolean) => void;
  selectedMonth: number;
  selectedYear: number;
  setSelectedMonth: React.SetStateAction<any>;
  setSelectedYear: React.SetStateAction<any>;
}) => {
  const navigate = useNavigate();
  const months = moment.months();
  return (
    <div>
      <div className="flex items-center border-b-[3px] pb-3">
        <div className="flex items-center">
          <AiFillCloseCircle
            className=" text-red text-3xl cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h2 className=" ml-3 font-bold text-2xl">Calendar</h2>

          <div className="ml-10 flex items-center space-x-3 text-2xl">
            <div className="flex items-center space-x-3">
              <div
                className="cursor-pointer p-1 rounded-full hover:bg-blue transition delay-50 ease-in-out"
                onClick={() => {
                  if (selectedMonth === 0) {
                    setSelectedMonth(11);
                    setSelectedYear((prev: number) => prev - 1);
                  } else if (selectedMonth > 11) {
                    setSelectedMonth((selectedMonth - 1) % 11);
                  } else {
                    setSelectedMonth(selectedMonth - 1);
                  }
                }}
              >
                <IoIosArrowBack className=" text-yellow_color " />
              </div>
              <div
                className="cursor-pointer p-1 rounded-full hover:bg-blue transition delay-50 ease-in-out"
                onClick={() => {
                  if (selectedMonth === 11) {
                    setSelectedMonth(0);
                    setSelectedYear((prev: number) => prev + 1);
                  } else if (selectedMonth > 11) {
                    setSelectedMonth((selectedMonth + 1) % 11);
                  } else {
                    setSelectedMonth(selectedMonth + 1);
                  }
                }}
              >
                <IoIosArrowForward className=" text-yellow_color " />
              </div>
            </div>
            <span className=" text-blue text-sm">
              {moment.months(selectedMonth)}, {selectedYear}
            </span>
          </div>
        </div>

        <div className="flex ms-auto items-center">
          <Select
            className="min-w-[120px] bg-none border-none"
            suffixIcon={
              <IoIosArrowDown className=" text-yellow_color text-lg" />
            }
            value={moment.months(selectedMonth)}
            onChange={(value) => setSelectedMonth(value)}
            // placeholder={placeholder}
          >
            {months.map((text: string, i) => (
              <Option key={i} value={i}>
                {text}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TopSectionForShowCalendar;
