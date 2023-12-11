import { useEffect, useState } from "react";

import type { MenuProps } from "antd";
import { Tooltip } from "antd";

import { Menu } from "antd";

import { FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDataStore } from "../../../context/dataProvider";
import useRequestManager from "../../../manager/requestManger";

const MenuList = ({ data }: { data: any }) => {
  const [current, setCurrent] = useState("mail");
  const [activeCount, setActiveCount] = useState<number>(0);

  const { userBalance } = useDataStore();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const { getTasks } = useRequestManager();
  const getorder = async () => {
    const orderData = await getTasks(1, "all");
    let count = 0;
    if (orderData && orderData.status) {
      for (const data of orderData.data.data.rows) {
        if (data.status === 1) {
          count += 1;
        }
      }
    }
    setActiveCount(count);
  };

  console.log(data);
  const items: MenuProps["items"] = [
    {
      label: (
        <span>
          <span className="text-lg  !text-dashboard_text_color font-semibold ">
            {" "}
            Available Interaction{" "}
          </span>

          <span className="amount text-xl !text-yellow_color !ms-2 font-bold">
            {" "}
            {userBalance.toLocaleString()}{" "}
          </span>
          <Link
            className="!text-dashboard_text_color text-sm ms-3  font-semibold mt-4 add_more"
            to="/upgrade"
          >
            Add more
          </Link>
        </span>
      ),
      key: "available",
    },
    {
      label: (
        <Tooltip placement="top" title={"Active task for today"}>
          <span>
            <span className="text-lg  !text-dashboard_text_color font-semibold ">
              {" "}
              Active Task{" "}
            </span>

            <span className="amount text-xl !text-yellow_color !ms-2 font-bold">
              {" "}
              {data?.activeTask || 0}{" "}
            </span>
          </span>
        </Tooltip>
      ),
      key: "task",
      icon: "",
    },
    {
      label: (
        <span>
          <span className="text-lg  !text-dashboard_text_color font-semibold ">
            {" "}
            Interaction
          </span>

          <span className="amount text-xl !text-yellow_color !ms-2 font-bold">
            {" "}
            {data?.interactions || "00"}{" "}
          </span>
        </span>
      ),
      key: "interaction",
      icon: "",
    },
    // {
    //   label: (
    //     <span>
    //       <span className='text-lg  !text-dashboard_text_color font-semibold '>
    //         Active Campign
    //       </span>

    //       <span className='amount text-xl !text-yellow_color !ms-2 font-bold'>
    //         {' '}
    //         00{' '}
    //       </span>
    //     </span>
    //   ),
    //   key: 'activeCampaign',
    //   icon: <FiInfo className='icon  !text-yellow_color !text-xl' />,
    // },
    // {
    //   label: (
    //     <span>
    //       <span className='text-lg  !text-dashboard_text_color font-semibold '>
    //         {' '}
    //         Campign
    //       </span>

    //       <span className='amount text-xl !text-yellow_color !ms-2 font-bold'>
    //         {' '}
    //         00{' '}
    //       </span>
    //     </span>
    //   ),
    //   key: 'campaign',
    //   icon: <FiInfo className='icon  !text-yellow_color !text-xl' />,
    // },
  ];
  useEffect(() => {
    getorder();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className=" w-full bg-transparent border-0 ps-0 "
    />
  );
};

export default MenuList;
