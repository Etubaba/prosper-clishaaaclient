import { GoldArrowDownSvg } from "../../assets/svg/svg";
import Table from "../../components/Table";
import { FiDownload } from "../../assets/icon";
import useRequestManager from "../../manager/requestManger";
import { useEffect, useState } from "react";
import moment from "moment";
import { removeSpecialCharacters } from "../../utils/helperr";
import FilterDropdown from "../../components/elements/FiterDropDown";
import TableData from "./components/TableData";
import ViewAllInteractions from "./components/ViewAllInteractions";

const columns = [
  {
    title: "Ltd",
  },
  {
    title: "Order ID",
  },
  {
    title: "Done",
  },
  {
    title: "Type",
  },
  {
    title: "Country",
  },
  {
    title: "Start URL",
  },
  {
    title: "Keyword",
  },
  {
    title: "IP Address",
  },
];
const Summary = () => {
  const { getTasks } = useRequestManager();
  const [taskSummaryData, setTaskSummaryData] = useState<null | any[]>(null);
  const [dropdownTitle, setDropdownTitle] = useState<string>("Order Type");
  const [getAllTasksData, setGetAllTasksData] = useState([]); //
  const [showSingleCalendar, setShowSingleCalendar] = useState<boolean>(false);
  const [getAllOderData, setGetAllOderData] = useState<any[]>([]);
  const [orderData, setOrderData] = useState<null | any[]>(null);
  const [rawOrderData, setRawOrderData] = useState<null | any[]>(null);
  const [viewId, setViewID] = useState({});
  const [activeFilterForCall, setActiveFilterForCall] = useState("");
  const [tableIsLoading, setTableIsLoading] = useState(false);

  // const getAllTasks = async () => {
  //   const data: any = await getTasks(1);
  //   if (data && data.status) {
  //     const filterData = data.data.data.tasks.map((data: any) => ({
  //       id: data.id,
  //       order_id: data.orderId ?? "-",
  //       done_at: moment(data.createdAt).format("DD-MM-YYYY HH:mm:ss"),
  //       type: removeSpecialCharacters(data.task_type),
  //       country: !data.countries
  //         ? "all"
  //         : data.countries.length
  //         ? String(data.countries)
  //         : "all",
  //       url: data.url,
  //       keyword: data.google_search
  //         ? JSON.parse(data.google_search).search_phrase
  //         : "-",
  //       ip_address: "-",
  //     }));
  //     setGetAllTasksData(() => filterData);
  //     setTaskSummaryData(() => filterData);
  //   }
  // };

  const getOrderData = async (
    pageNumber: number,
    task_type?: string | null,
    status?: string | null
  ) => {
    task_type = task_type ? task_type : null;
    status = status ? status : null;
    setTableIsLoading(true);
    const orderData = await getTasks(1, "all", task_type, status);

    if (orderData && orderData.status) {
      const filterData = orderData.data.data.rows.map((data: any) => ({
        id: data.id,
        order_id: data?.order?.id ?? "-",
        created_at: moment(data.createdAt).format("DD-MM-YYYY"),
        type: removeSpecialCharacters(data.task_type),
        interaction: data?.order?.interactions,
        daily_clicks: data?.order?.daily_clicks,
        code: data?.order?.code,
        country: !data.countries
          ? "all"
          : data.countries.length
          ? String(data.countries)
          : "all",
        url: data.url ?? "-",
        keyword: data?.google_search ? data?.google_search?.search_phrase : "-",
        status: data.status,
        status_a: data?.order?.createdAt
          ? `${data?.order?.used}/${data?.order?.interactions} `
          : "-",
        status_percentage: data?.order?.status_percentage
          ? `${data?.order?.status_percentage.toFixed(2)} %`
          : "0%",
        auto_renew:
          data.recurring === false
            ? "no"
            : data.recurring === true
            ? "yes"
            : "-",
        success: data?.order?.success_percentage
          ? `${Number(data?.order?.success_percentage).toFixed()}%`
          : "0%",
        published: data.published,
        google_search: data.google_search,
        website_click: data.website_click,
      }));
      setGetAllOderData(() => filterData);
      setRawOrderData(() => orderData.data.data.rows);
      setOrderData(() => filterData);
    }
    setTableIsLoading(false);
  };

  const flterTaskByTaskType = (value: string) => {
    setActiveFilterForCall(
      value === "visit"
        ? "website_click"
        : value === "search"
        ? "google_search"
        : ""
    );
    setDropdownTitle(() => value);
  };
  // const flterTaskByTaskType = (value: string) => {
  //   if (value === "Order Type" || value === "all") {
  //     setTaskSummaryData(() => getAllTasksData);
  //   } else {
  //     let taskType = value === "visit" ? "website click" : value;
  //     const filterData = getAllTasksData.filter((data: any) =>
  //       data.type.includes(taskType)
  //     );
  //     setTaskSummaryData(() => filterData);
  //   }
  //   setDropdownTitle(() => value);
  // };

  const gotoSingleOrder = (value: boolean) => {
    setShowSingleCalendar(value);
  };

  useEffect(() => {
    getOrderData(1, activeFilterForCall);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilterForCall]);

  return !showSingleCalendar ? (
    <div className="summary relative bg-[#F3F4F5] w-screen pt-[130px] px-4 md:px-10 pb-10">
      <div className="flex flex-row justify-between items-center mb-2">
        <h1 className="orders_title font-bold text-[1.3rem]">Task Summary</h1>
        <div className="inputField downloadBtn w-fit">
          <p className="text-[#1B4C84] mb-2">Download</p>
          <div
            tabIndex={0}
            className="invoice_download_btn w-full px-3 py-1 bg-white rounded-[5px] text-black text-[0.8rem] h-[32px] flex flex-row justify-center cursor-pointer"
          >
            <FiDownload className=" text-lg" />
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
      <div className="mt-1 flex flex-row justify-end">
        <FilterDropdown
          placeholder={dropdownTitle}
          fn={flterTaskByTaskType}
          iconImg={<GoldArrowDownSvg />}
        />
      </div>
      <div className="summaryTable w-full mt-3">
        <TableData
          setViewID={setViewID}
          gotoSingleOrder={gotoSingleOrder}
          data={orderData}
          rawOrderData={rawOrderData}
          tableIsLoading={tableIsLoading}
        />
      </div>
    </div>
  ) : (
    <ViewAllInteractions gotoSingleOrder={gotoSingleOrder} viewId={viewId} />
  );
};

export default Summary;
