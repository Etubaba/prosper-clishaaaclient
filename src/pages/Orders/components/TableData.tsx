import { useState } from "react";
import {
  BlackEyeSvg,
  BluePenSvg,
  CancelSvg,
  GoldCopySvg,
  InfoSvg,
  NoDataSvg,
  PauseSvg,
} from "../../../assets/svg/svg";
import SkelTr from "../../../components/Table/SkelTr";
import Spinner from "../../../components/elements/Spiner";
import { useDataStore } from "../../../context/dataProvider";
import { TTable, singletaskData } from "../../../types/app.types";
import useRequestManager from "../../../manager/requestManger";
import { ordersColumns } from "../../../constants/data";

import { ImPlay2 } from "../../../assets/icon";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import HeadTooltip from "./HeadTooltip";

const skel = [1, 2, 3, 4, 5, 6];

const TableData = ({
  data,
  gotoSingleOrder,
  updateTasksData,
  rawOrderData,
  tableIsLoading,
}: TTable) => {
  const { setData } = useDataStore();
  const { updateTask } = useRequestManager();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataIdUpdating, setDataIdUpdating] = useState<number>(0);

  const setSingleTaskData = (data: singletaskData) => {
    gotoSingleOrder(true);
    setData({
      type: "setSingleTaskData",
      payload: data,
    });
  };
  const setEditTaskData = (data: singletaskData, type: string) => {
    if (type === "edit") {
      if (data.type === "website click") {
        navigate("editVisitTask", {
          state: { id: data.id, data: rawOrderData, type: "edit" },
        });
      } else {
        navigate("editSearchTask", {
          state: { id: data.id, data: rawOrderData, type: "edit" },
        });
      }
    } else {
      if (data.type === "website click") {
        navigate("editVisitTask", {
          state: { id: data.id, data: rawOrderData, type: "copy" },
        });
      } else {
        navigate("editSearchTask", {
          state: { id: data.id, data: rawOrderData, type: "copy" },
        });
      }
    }
  };

  const updateTaskData = async (getdata: singletaskData, value: any) => {
    setLoading(true);
    setDataIdUpdating(getdata.id);
    const updatedTaskData = await updateTask(getdata.id, value);
    if (updatedTaskData.status) {
      const update = { ...getdata, ...value };
      updateTasksData(update);
    }
    setLoading(false);
  };

  // const createduplicateTask = async (id: number) => {
  //   setDataIdUpdating(id);
  //   setLoading(true);
  //   const data: any = rawOrderData?.filter((data: any) => data.id === id)[0];
  //   const adddata = {
  //     bonus_points: 20,
  //     countries: data.countries,
  //     daily_clicks: data.order.daily_clicks,
  //     hours: 720,
  //     is_adult: data.is_adult,
  //     points: data.order.points,
  //     random_click: data.random_click,
  //     recurring: data.recurring,
  //     start: nowDate,
  //     task_type: data.task_type,
  //     days_duration: data?.order.days_duration,
  //     total_interactions: data.order.interactions,
  //     track_domain: data.track_domain,
  //     url: data.url,
  //     visitors_referrer: data.visitors_referrer,
  //     website_click: data.website_click,
  //     weekly: data.weekly,
  //     advanced_search: "google_news",
  //     google_search: JSON.parse(data.google_search),
  //     monthly: data.monthly,
  //     published: false,
  //   };

  //   const response = await createSearchTask(adddata);
  //   if (response.status) {
  //     getUserBalance();
  //     getOrderData();
  //   }
  //   setLoading(false);
  // };

  return (
    <>
      <div className="tableCom w-full overflow-x-auto">
        <table className="w-full ">
          <thead className="">
            <tr className="">
              {ordersColumns.map(({ title }) => {
                return (
                  <th
                    key={title}
                    className="text-left text-blue text-[12px] 2xl:text-[16px] font-normal leading-loose"
                  >
                    <div className="flex flex-row gap-1 items-center">
                      {title}
                      {title === "Interaction" ||
                      title === "Status IA" ||
                      title === "Status %" ||
                      title === "Auto Renew" ||
                      title === "Success" ? (
                        <HeadTooltip title={title} />
                      ) : (
                        <></>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data === null || tableIsLoading ? (
              skel.map((_, i) => {
                return <SkelTr key={i} headers={ordersColumns} />;
              })
            ) : data?.length === 0 ? (
              <tr>
                <td className="  w-full text-center " colSpan={13}>
                  <div className="flex  justify-center pt-4 border flex-col items-center">
                    <NoDataSvg />
                    <span>no data</span>
                  </div>
                </td>
              </tr>
            ) : (
              data?.map((datum, i) => (
                <tr key={i}>
                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {i + 1}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.code}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.created_at}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.type === "website click" ? "visit" : datum.type === "google search" ? "search" : "campaign"}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] text-center mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.interaction}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.country}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.url.substring(0, 40)}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.keyword}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] text-center mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.status_a}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] text-center mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.status_percentage}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] text-center mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {datum.auto_renew === "no" ? (
                        <span className=" text-red">not activated</span>
                      ) : (
                        <span className=" text-green_color">activated</span>
                      )}
                    </p>
                  </td>

                  <td>
                    <p className="p-[0.5rem] text-center mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
                      {`${datum.success}`}
                    </p>
                  </td>

                  <td>
                    <div className=" tableRowActions space-x-2 flex flex-row justify-between items-center p-[0.5rem] min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px]">
                      {loading && dataIdUpdating === datum.id ? (
                        <div className="text-center">
                          <Spinner />
                        </div>
                      ) : !datum.status ? (
                        <>
                          <span onClick={() => setEditTaskData(datum, "copy")}>
                            <GoldCopySvg fill="#a6a6a6" />
                          </span>

                          <span>
                            <PauseSvg fill="#a6a6a6" />
                          </span>
                          <span>
                            <CancelSvg fill="#EE2C4C" />
                          </span>

                          <span onClick={() => setEditTaskData(datum, "edit")}>
                            <BluePenSvg />
                          </span>
                          <span onClick={() => setSingleTaskData(datum)}>
                            <BlackEyeSvg />
                          </span>
                          <span className=" text-[#f65555]">
                            <ImPlay2 />
                          </span>
                        </>
                      ) : (
                        <>
                          <span onClick={() => setEditTaskData(datum, "copy")}>
                            <GoldCopySvg />
                          </span>
                          <span
                            onClick={() =>
                              updateTaskData(datum, { published: false })
                            }
                          >
                            <PauseSvg
                              fill={!datum.published ? "#39A54A" : "#a6a6a6"}
                            />
                          </span>
                          <span
                            onClick={() =>
                              updateTaskData(datum, {
                                status: 0,
                                published: false,
                              })
                            }
                          >
                            <CancelSvg
                              fill={datum.status ? "#a6a6a6" : "#EE2C4C"}
                            />
                          </span>
                          <span onClick={() => setEditTaskData(datum, "edit")}>
                            <BluePenSvg />
                          </span>

                          <span onClick={() => setSingleTaskData(datum)}>
                            <BlackEyeSvg />
                          </span>

                          <span
                            onClick={() =>
                              updateTaskData(datum, { published: true })
                            }
                            className={`${
                              !datum.published
                                ? "text-[#3f3f3f]"
                                : "text-[#2828e8] "
                            } `}
                          >
                            <ImPlay2 />
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
