import { useEffect, useState } from "react";
import Table from "../../../components/Table";
import useRequestManager from "../../../manager/requestManger";
import moment from "moment";
import { removeSpecialCharacters } from "../../../utils/helperr";
import { AiFillCloseCircle } from "../../../assets/icon";

const ViewAllInteractions = ({
  gotoSingleOrder,
  viewId,
}: {
  gotoSingleOrder: (value: boolean) => void;
  viewId: any;
}) => {
  const { getTaskSummary } = useRequestManager();
  // console.log(viewId);
  const [taskSummaryData, setTaskSummaryData] = useState<null | any[]>(null);
  const [getAllTasksData, setGetAllTasksData] = useState([]);
  const getAllTasks = async () => {
    const data: any = await getTaskSummary(viewId?.id);
    if (data && data.status) {
      // console.log(data.data.data.tasks);
      const filterData = data.data.data.tasks.map((data: any) => ({
        id: data?.task?.id,
        order_id: data?.task?.order?.code ?? "-",
        taskId: data?.taskId ?? "-",
        done_at: moment(data.createdAt).format("DD-MM-YYYY HH:mm:ss"),
        type: removeSpecialCharacters(data?.task?.task_type),
        country: data?.user?.country ?? "--",
        url: data?.task?.url,
        keyword: data?.task?.google_search
          ? data?.task?.google_search?.search_phrase
          : "-",
        ip_address: data?.user?.clishaId,
      }));

      const finalFilter = filterData.filter((data: any) => {
        return data?.taskId === viewId.id;
      });
      setGetAllTasksData(() => filterData);
      setTaskSummaryData(() => finalFilter);
    }
  };

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
      title: "Clisha ID",
    },
  ];

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="pt-32 pb-20 px-10 relative">
      <div className="flex justify-start gap-2 items-center">
        <AiFillCloseCircle
          className=" text-red text-3xl cursor-pointer"
          onClick={() => gotoSingleOrder(false)}
        />
        <h1 className="orders_title font-bold text-[1.4rem]">
          Interactions On Order #{viewId?.order_id}
        </h1>
      </div>
      <div className="w-full h-[1px] bg-[#DADADA] mt-2 mb-2"></div>
      <Table
        gotoSingleOrder={() => {}}
        headers={columns}
        data={taskSummaryData}
        actions={false}
      />
    </div>
  );
};

export default ViewAllInteractions;
