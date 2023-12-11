import moment from "moment";
import { TMonthInYear, TQuery } from "../types/app.types";
import Notification from "../components/notification";

export const curry = (fn: Function, arity = fn.length) => {
  return (function nextCurried(prevArgs) {
    return function curried(nextArgs: any) {
      const args: any = [...prevArgs, nextArgs];
      if (args.length >= arity) {
        return fn(...args);
      } else {
        return nextCurried(args);
      }
    };
  })([]);
};

const getDaysRemaining = () => {
  const currentDate = moment();
  const daysInCurrentMonth = currentDate.daysInMonth();
  return daysInCurrentMonth - currentDate.date();
};

export const monthDatesettings = () => {
  const currentYear = moment().year();
  const monthInYear: TMonthInYear[] = [];

  // Generate names of months and days in each month
  const months: string[] = [];
  const daysInMonths: number[] = [];
  for (let i = 0; i < 12; i++) {
    const monthName = moment().year(currentYear).month(i).format("MMMM");
    const daysInMonth = moment().year(currentYear).month(i).daysInMonth();
    months.push(monthName);
    daysInMonths.push(daysInMonth);
  }
  for (let i = 0; i < 12; i++) {
    const monthValues: TMonthInYear = {
      month: months[i],
      days: daysInMonths[i],
    };
    monthInYear.push(monthValues);
  }

  const indexof = monthInYear.findIndex(
    (monthInYear) => monthInYear.month === moment().format("MMMM")
  );
  const currentDateSettings = monthInYear.slice(indexof);
  currentDateSettings[0].days = getDaysRemaining();
  return currentDateSettings;
};

export const countOccurrencesOfDay = (
  year: number,
  month: number,
  day: number
) => {
  // Get the total number of days in the given month
  const totalDays = moment(`${year}-${month}`, "YYYY-M").daysInMonth();

  // Initialize a counter for the occurrences of the specified day
  let occurrences = 0;

  // Loop through all the days in the month and count occurrences of the specified day
  for (let currentDay = 1; currentDay <= totalDays; currentDay++) {
    const currentDate = moment(`${year}-${month}-${currentDay}`, "YYYY-M-D");
    if (currentDate.day() === day) {
      occurrences++;
    }
  }

  return occurrences;
};

export const getCertainDaysInTheMonth = (daysArr: string[]) => {
  const currentYear = moment().year();
  const monthInYear: TMonthInYear[] = [];
  // Generate names of months and days in each month
  const months: string[] = [];
  const daysInMonths: number[] = [];
  for (let i = 0; i < 12; i++) {
    const monthName = moment().year(currentYear).month(i).format("MMMM");
    const daysInMonth = moment().year(currentYear).month(i).daysInMonth();
    months.push(monthName);
    daysInMonths.push(daysInMonth);
  }
  for (let i = 0; i < 12; i++) {
    const monthValues: TMonthInYear = {
      month: months[i],
      days: daysInMonths[i],
    };
    monthInYear.push(monthValues);
  }

  const indexof = monthInYear.findIndex(
    (monthInYear) => monthInYear.month === moment().format("MMMM")
  );
  const currentDateSettings = monthInYear.slice(indexof);
  currentDateSettings[0].days = getDaysRemaining();
  console.log(currentDateSettings);

  let newArray: TMonthInYear[] = [];
  currentDateSettings.map((currentMonthWithDate, index) => {
    let totalDaysNumber = 0;
    daysArr.map((day) => {
      if (index === 0) {
        let getToday = moment().day();
        let noOfDayTypeThisMonth = 0;
        if (getToday === Number(day)) {
          let gg = currentMonthWithDate.days / 7;
          noOfDayTypeThisMonth = Math.floor(gg) + 1;
        } else {
          if (getToday < Number(day)) {
            let gg = (currentMonthWithDate.days - (Number(day) - getToday)) / 7;
            noOfDayTypeThisMonth = Math.floor(gg + 1);
          } else if (getToday > Number(day)) {
            let gg =
              (currentMonthWithDate.days - (Number(day) + 1 + (6 - getToday))) /
              7;
            noOfDayTypeThisMonth = Math.floor(gg + 1);
          }
        }
        totalDaysNumber += noOfDayTypeThisMonth;
      } else {
        totalDaysNumber += countOccurrencesOfDay(
          currentYear,
          moment().month(currentMonthWithDate.month.toLowerCase()).month() + 1,
          Number(day)
        );
        // console.log("day: " + day + "occur: " + totalDaysNumber);
      }
    });
    const monthValues = {
      month: currentMonthWithDate.month,
      days: totalDaysNumber,
      totalNumberOfDaysLeft: currentMonthWithDate.days,
    };
    newArray.push(monthValues);
  });

  return newArray;
};

export const getCertainDaysInCertainMonths = (monthsArr: any) => {
  const currentYear = moment().year();
  const monthInYear: TMonthInYear[] = [];
  // Generate names of months and days in each month
  const months: string[] = [];
  const daysInMonths: number[] = [];
  for (let i = 0; i < 12; i++) {
    const monthName = moment().year(currentYear).month(i).format("MMMM");
    // const daysInMonth = moment().year(currentYear).month(i).daysInMonth();
    months.push(monthName);
    daysInMonths.push(0);
  }
  for (let i = 0; i < 12; i++) {
    const monthValues: TMonthInYear = {
      month: months[i],
      days: daysInMonths[i],
    };
    monthInYear.push(monthValues);
  }

  const indexof = monthInYear.findIndex(
    (monthInYear) => monthInYear.month === moment().format("MMMM")
  );
  const currentDateSettings = monthInYear.slice(indexof);
  currentDateSettings[0].days = getDaysRemaining();
  // console.log(currentDateSettings);

  let newArray: TMonthInYear[] = [];
  currentDateSettings.map((currentMonthWithDate, index) => {
    let totalDaysNumber = 0;
    monthsArr.map((dateInmonth: any) => {
      if (dateInmonth?.object?.year) {
        if (Number(dateInmonth.object.year) === currentYear) {
          if (currentMonthWithDate.month === dateInmonth.object.month.name) {
            totalDaysNumber += 1;
          }
        }
      } else {
        if (Number(dateInmonth?.object?.getFullYear()) === currentYear) {
          const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          let name = month[dateInmonth?.object?.getMonth()];
          if (currentMonthWithDate.month === name) {
            totalDaysNumber += 1;
          }
        }
      }
    });
    const monthValues = {
      month: currentMonthWithDate.month,
      days: totalDaysNumber,
    };
    newArray.push(monthValues);
  });
  return newArray;
};

export const filterMonthArr = (monthArr: any) => {
  let newArr: any[] = [];
  monthArr.map((monthObj: any) => {
    return newArr.push(new Date(monthObj.object).toISOString().split("T")[0]);
  });
  // monthArr.map((monthObj: any) => {
  //   return newArr.push(
  //     `${monthObj.object.year}-${monthObj.object.month.number}-${monthObj.object.day}`
  //   );
  // });
  // monthArr.map((monthObj: any) => {
  //   return newArr.push(
  //     `${monthObj.object.day}-${monthObj.object.month.number}-${monthObj.object.year}`
  //   );
  // });
  console.log(newArr);
  // monthArr.map((monthObj: any) => {
  //   return newArr.push(monthObj.date);
  // });
  return newArr;
};

export function formatDate(date = new Date()) {
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("default", { month: "2-digit" });
  const day = date.toLocaleString("default", { day: "2-digit" });
  return [year, month, day].join("-");
}

export const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    Notification.displayInfo({
      message: "error",
      description: "You can only upload JPG/PNG file",
    });
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    Notification.displayInfo({
      message: "error",
      description: "Image must smaller than 2MB!",
    });
  }
  return isJpgOrPng && isLt2M;
};
export const getBase64 = (img: any, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const getWords = (str: string[] | string) => {
  return String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter(function alpha(v) {
      return /^[\w]+$/.test(v);
    });
};

export const removeSpecialCharacters = (str: string) => {
  const regex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
  return str.split(regex).join(" ");
};

export const typeOfFilterValues = (value: string) => {
  const val = value.toLowerCase();
  const query = {} as TQuery;

  switch (true) {
    case val.includes("all"):
      query.all = true;
      break;
    case val.includes("open"):
      query.published = true;
      break;
    case val.includes("pause"):
      query.published = false;
      break;
    case val.includes("visit"):
      query.type = "website click";
      break;
    case val.includes("search"):
      query.type = "google search";
      break;
    case val.includes("ended"):
      query.status = 0;
      break;
    default:
      query.createdAt = val;
  }

  return query;
};
