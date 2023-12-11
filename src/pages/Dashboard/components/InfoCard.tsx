import { FiInfo, FiPlus } from "react-icons/fi";
import { ISubmenuBox } from "../../../types/app.types";
import arrow_left_exist_icon from "../../../assets/icon/arrow_left_exist_icon.png";
import arrow_up_icon from "../../../assets/icon/arrow_up_icon.png";
import graphIcon from "../../../assets/icon/grap_icon.png";
import { Link } from "react-router-dom";

const InfoCard = ({ box, count }: { box: ISubmenuBox; count: number }) => {
  return (
    <div className="rounded-md bg-white p-4 relative">
      {count > 6 && (
        <div className=" bg-[#00000094] absolute top-0 bottom-0 right-0 left-0 flex rounded-md justify-center items-center ">
          <p className="comingsoon text-2xl">Coming soon</p>
          <p className=" text-2xl"> &#128640;</p>
        </div>
      )}
      <div className="flex justify-between items-center">
        <span className="text-yellow_color text-lg font-bold">
          {box.cardTitle}
        </span>
        <Link to={"/orders"}>
          <img src={arrow_left_exist_icon} className="w-6" alt="icon" />
        </Link>
      </div>
      <div className="flex justify-between mt-2 relative">
        <span className="font-bold text-4xl relative">
          {box.mainAmount}
          <Link
            to={"/"}
            className=" text-dashboard_click_color click_text absolute inline-block w-32 text-[12px] bottom-[-1.5rem] left-0"
          >
            click this month
          </Link>
        </span>
        <Link to={box.name ? `/faq?task_type=${box.name}` : `/faq`}>
          <FiInfo className=" text-yellow_color text-2xl" />
        </Link>
      </div>
      <div className="flex items-center mt-3 gap-2">
        <img src={graphIcon} alt="graph icon" className="w-fit m-[0px]" />
        <span className="font-bold text-lg">{box.subAmount}</span>
      </div>
      <div className="mt-2">
        <Link
          to={box.link ? box.link : "/"}
          state={{
            type: "dashboard",
            mode: box.link,
            extra: box.cardTitle,
          }}
        >
          <button className="bg-green_color flex space-x-3 items-center rounded-md  py-1 text-white   ps-2 pe-5  ">
            <FiPlus className="text-lg" />
            <span className=" text-sm font-medium">Add new order</span>
          </button>
        </Link>
      </div>
      <div className="flex mt-4 items-center space-x-3 ">
        <img src={arrow_up_icon} alt="icon" className="w-fit m-[0px]" />
        <span className="font-bold text-sm">
          {box?.percentage ? box?.percentage : 0.0}%
        </span>
        <span className="text-gray-400 font-semibold text-sm">
          previous month
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
