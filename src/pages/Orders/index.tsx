import { useEffect, useState } from "react";
import SingleTaskSummary from "./components/SingleOrderSummary";
import useRequestManager from "../../manager/requestManger";
import moment from "moment";
import {
  removeSpecialCharacters,
  typeOfFilterValues,
} from "../../utils/helperr";
import TableData from "./components/TableData";
import FilterWrapper from "./components/FilterWrapper";
import EditPage from "../EditPage";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState("all orders");
  const [activeFilterForCall, setActiveFilterForCall] = useState("");
  const { getTasks } = useRequestManager();
  const [showSingleCalendar, setShowSingleCalendar] = useState<boolean>(false);
  const [getAllOderData, setGetAllOderData] = useState<any[]>([]);
  const [orderData, setOrderData] = useState<null | any[]>(null);
  const [rawOrderData, setRawOrderData] = useState<null | any[]>(null);
  const [dropDownTextHolder, setDropDownTextHolder] =
    useState<string>("Order Type");
  const [dropDownTextHolderForCall, setDropDownTextHolderForCall] =
    useState<string>("");
  const [tableIsLoading, setTableIsLoading] = useState(false);
  const navigate = useNavigate();
  const changeFilter = (value: string, type: string = "") => {
    if (type === "dropdown") {
      setDropDownTextHolder(value === "all" ? "Order Type" : value);
      setDropDownTextHolderForCall(
        value === "visit"
          ? "website_click"
          : value === "search"
          ? "google_search"
          : ""
      );
    } else {
      setActiveFilter(value);
      setActiveFilterForCall(
        value === "open orders"
          ? "play"
          : value === "pause orders"
          ? "pause"
          : value === "ended orders"
          ? "end"
          : ""
      );
    }
    // handleFilterings(value);
  };

  const handleFilterings = (value: string) => {
    const query = typeOfFilterValues(value);
    let filterData: any = [];
    if (Object.keys(query)[0] === "all") {
      filterData = getAllOderData;
    } else if (Object.keys(query)[0] === "createdAt") {
      filterData = Object.values(query)[0]
        ? orderData?.filter((data) =>
            data.created_at.split(" ")[0].includes(Object.values(query)[0])
          )
        : orderData;
    } else {
      filterData = orderData?.filter(
        (data) => data[Object.keys(query)[0]] === Object.values(query)[0]
      );
    }
    setOrderData(() => filterData);
  };
  const gotoSingleOrder = (value: boolean) => {
    setShowSingleCalendar(value);
  };

  const callGetAllOderData = () => {
    getOrderData(1);
  };

  const updateTasksData = (sentdata: any) => {
    const updataData: any = getAllOderData?.map((data) => {
      if (sentdata.id === data.id) {
        return {
          ...data,
          ...sentdata,
        };
      }

      return data;
    });
    setGetAllOderData(() => updataData);
    callGetAllOderData();
  };

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
        ...data,
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
  useEffect(() => {
    getOrderData(1, dropDownTextHolderForCall, activeFilterForCall);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilterForCall, dropDownTextHolderForCall]);

  return !showSingleCalendar ? (
    <div className="orders relative bg-[#F3F4F5] w-screen pt-[130px] px-4 md:px-10 pb-10">
      <div className="flex justify-between items-center">
        <h1 className="orders_title font-bold text-[1.4rem]">Orders</h1>
        {orderData && (
          <div
            onClick={() => navigate("calendar")}
            tabIndex={0}
            className="invoice_download_btn w-[150px] px-4 py-1 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
          >
            <p className="text-white">Go to calendar</p>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
      <FilterWrapper
        changeFilter={changeFilter}
        activeFilter={activeFilter}
        dropDownTextHolder={dropDownTextHolder}
      />
      <div className="orderTable w-full">
        <TableData
          gotoSingleOrder={gotoSingleOrder}
          data={orderData}
          updateTasksData={updateTasksData}
          rawOrderData={rawOrderData}
          tableIsLoading={tableIsLoading}
        />
        {/* <EditPage /> */}
      </div>
    </div>
  ) : (
    <SingleTaskSummary gotoSingleOrder={gotoSingleOrder} />
  );
};

export default Orders;
