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
import { STable, singletaskData } from "../../../types/app.types";
import useRequestManager from "../../../manager/requestManger";
import { ordersColumns } from "../../../constants/data";

import { useNavigate } from "react-router-dom";
import HeadTooltip from "../../Orders/components/HeadTooltip";

const skel = [1, 2, 3, 4, 5, 6];

const TableData = ({
  data,
  gotoSingleOrder,
  rawOrderData,
  setViewID,
  tableIsLoading,
}: STable) => {
  const { setData } = useDataStore();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [dataIdUpdating, setDataIdUpdating] = useState<number>(0);

  const setSingleTaskData = (data: singletaskData) => {
    gotoSingleOrder(true);
    setViewID(data);
  };

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
                          <span onClick={() => setSingleTaskData(datum)}>
                            <BlackEyeSvg />
                          </span>
                        </>
                      ) : (
                        <>
                          <span onClick={() => setSingleTaskData(datum)}>
                            <BlackEyeSvg />
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
