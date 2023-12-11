import { Button } from "antd";
import OpenCalenar from "./OpenCalenar";
import TopSectionForShowCalendar from "./TopSectionForShowCalendar";
import SiteList from "./SiteList";
// import BigCalendar from './BigCalendar';
import MainCalendar from "./MainCalendar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import useRequestManager from "../../../manager/requestManger";
import useFetchMethods from "../../../hook/useFetchMethod";
import { useUserStore } from "../../../context/userProvider";

const ShowCalender = ({
  setShowLargeCalendar,
}: {
  setShowLargeCalendar: (value: boolean) => void;
}) => {
  const location = useLocation();
  // console.log();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [isLoading, setIsLoading] = useState(false);
  const [isCalLoading, setIsCalLoading] = useState(false);
  const [dataList, setDataList] = useState<any>([]);
  const [calList, setCalList] = useState<any>([]);
  const [smallCalList, setSmallCalList] = useState<any>([]);
  const { getTasks } = useRequestManager();
  const { getUserCalendarData, getAllUserCalendarData } = useFetchMethods();
  const { admin } = useUserStore();

  const getOrderData = async (
    pageNumber: number,
    task_type?: string | null,
    status?: string | null
  ) => {
    task_type = task_type ? task_type : null;
    status = status ? status : null;
    setIsLoading(true);
    const orderData = await getTasks(1, "all", task_type, status);

    if (orderData && orderData.status) {
      setDataList(() => orderData?.data?.data?.rows);
    }
    setIsLoading(false);
  };

  const getUserCalendarDataFunc = async (
    id: number,
    month: number,
    year: number
  ) => {
    setIsCalLoading(true);
    const calData = await getUserCalendarData(id, month, year);
    if (calData && calData.status) {
      setCalList(() => calData?.data?.calender);
    }
    setIsCalLoading(false);
  };
  const getAllUserCalendarDataFunc = async () => {
    setIsLoading(true);
    const calData = await getAllUserCalendarData();
    if (calData && calData.status) {
      setSmallCalList(() => calData?.data?.calender);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getOrderData(1);
    getAllUserCalendarDataFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (admin.id !== 0) {
      getUserCalendarDataFunc(admin.id, selectedMonth, selectedYear);
    }
  }, [selectedYear, selectedMonth, admin.id]);

  return (
    <div className=" pt-36 px-10">
      <TopSectionForShowCalendar
        setShowLargeCalendar={setShowLargeCalendar}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        setSelectedMonth={setSelectedMonth}
        setSelectedYear={setSelectedYear}
      />
      <div className=" show_calendaer flex">
        <div className="flex flex-col w-[290px] py-3 border-e-2 ">
          <OpenCalenar
            setShowLargeCalendar={setShowLargeCalendar}
            data={smallCalList}
          />
          <div className="px-3">
            <Button
              type="primary"
              className="updatebtn invoice_download_btn w-full px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[38px]  text-white  "
            >
              Search For Task
            </Button>
          </div>

          <div className="mt-6">
            <SiteList data={dataList} isLoading={isLoading} />
          </div>
        </div>

        <div className="big_clander w-full">
          {/* <BigCalendar /> */}
          <MainCalendar
            month={selectedMonth}
            year={selectedYear}
            calList={calList}
            isCalLoading={isCalLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCalender;
