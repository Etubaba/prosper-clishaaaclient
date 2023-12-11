import moment from "moment";
import { useState } from "react";
import Spinner from "../../../components/elements/Spiner";

const CalendarBox = ({
  day,
  value,
  active,
  data,
  isLoading,
}: {
  day?: string;
  value: number;
  active?: boolean;
  data: any;
  isLoading: boolean;
}) => {
  return (
    <div
      className={`flex flex-row px-2 pt-1 border-e-2 border-b-2 h-36b h-full relative ${
        active ? "" : ""
      }`}
    >
      <div className="flex-auto w-full h-full overflow-auto pt-10 flex flex-col gap-2">
        {isLoading ? (
          <div className="flex flex-row justify-center items-center w-full h-full">
            <Spinner />
          </div>
        ) : (
          data.map((item: any) => {
            return (
              <div className="w-full bg-white p-2 rounded-[4px]">
                <p>
                  {item.advance_type === "website_click"
                    ? "visit"
                    : item.advance_type === "google_search"
                    ? "search"
                    : item?.advance_type}
                </p>
              </div>
            );
          })
        )}
      </div>
      <div className="flex flex-col text-blue absolute top-[8px] right-[8px]">
        {day && <span className="text-[12px]">{day}</span>}
        <span
          className={` ${
            active ? "opacity-50 text-red" : "bg-[#d9d9d9]"
          }  w-6 h-6 rounded  justify-center text-[14px] items-center text-center`}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

const MainCalendar = ({
  month,
  year,
  calList,
  isCalLoading,
}: {
  month: any;
  year: any;
  calList: any;
  isCalLoading: boolean;
}) => {
  function checkIfDataExists(date: any, calList: any) {
    let splitDate = date.toISOString().split("T")[0];

    const data = calList.filter((item: any) => {
      const changeToISO = item.calenderData.map((changeDate: any) => {
        return new Date(changeDate).toISOString().split("T")[0];
      });
      return changeToISO.includes(splitDate);
    });
    return data;
    // throw new Error("Function not implemented.");
  }
  const isExtraDays = (week: any, date: any) => {
    if (week === 0 && date > 10) {
      return true;
    } else if (week === 5 && date < 10) {
      return true;
    } else if (week === 4 && date < 10) {
      return true;
    } else {
      return false;
    }
  };
  //function to get all days by week
  const getDate = (month: any, calList: any, isCalLoading: boolean) => {
    var calendar = [];

    const startDate = moment([year, month])
      .clone()
      .startOf("month")
      .startOf("week");

    const endDate = moment([year, month]).clone().endOf("month");

    const day = startDate.clone().subtract(1, "day");

    // looping a month by a week
    while (day.isBefore(endDate, "day")) {
      calendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone().format("DD"))
      );
    }

    let finalData: any = [];
    if (calendar.length > 0) {
      calendar.map((week, index) => {
        week.map((day: string) => {

          let revampedYear = isExtraDays(index, day) && month === 0 && index === 0
          ? year
          : isExtraDays(index, day) && month >= 11 && index + 1 === calendar.length
          ? year + 1
          : year

          let revampedMonth = 
          isExtraDays(index, day) && index === 0 && month !== 0
          ? month
          : isExtraDays(index, day) && index === 0 && month === 0
          ? 1
          : (isExtraDays(index, day) && index + 1 === calendar.length && month < 11) 
          ? month + 2
          : (isExtraDays(index, day) && index + 1 === calendar.length && month >= 11) 
          ? (month + 2)%12
          : month + 1

          let currentDate = new Date(
            `${revampedYear}-${revampedMonth}-${Number(day)}`
          );

          // console.log(year)
          // console.log(month)
          // console.log(revampedMonth)
          // console.log(day)
          // console.log(`${isExtraDays(index, day) && month === 0 && index === 0
          //   ? year
          //   : isExtraDays(index, day) && month >= 11 && index + 1 === calendar.length
          //   ? year + 1
          //   : year}-${
          //   isExtraDays(index, day) && index === 0
          //     ? month
          //     : (isExtraDays(index, day) && index + 1 === calendar.length && month < 11) 
          //     ? month + 2
          //     : (isExtraDays(index, day) && index + 1 === calendar.length && month >= 11) 
          //     ? (month + 2)%12
          //     : month + 1
          // }-${Number(day)}`)
          // console.log(currentDate)
          if(currentDate.toISOString().split("T")[1].startsWith('23')){
            currentDate.setHours(currentDate.getHours() + 1);
          }
          finalData.push({
            day: "",
            value: Number(day),
            active: isExtraDays(index, day),
            date: currentDate.toISOString(),
            data: checkIfDataExists(currentDate, calList),
          });
        });
      });
    }

    // console.log(finalData);

    finalData[0].day = "Sun";
    finalData[1].day = "Mon";
    finalData[2].day = "Tue";
    finalData[3].day = "Wed";
    finalData[4].day = "Thu";
    finalData[5].day = "Fri";
    finalData[6].day = "Sat";

    // console.log(finalData);

    return finalData.map((dayData: any, index: any) => (
      <CalendarBox
        day={dayData?.day}
        value={dayData?.value}
        active={dayData?.active}
        data={dayData?.data}
        isLoading={isCalLoading}
      />
    ));
  };

  return (
    <div className="grid grid-cols-7 h-full">
      {getDate(month, calList, isCalLoading)}
    </div>
  );
};

export default MainCalendar;
