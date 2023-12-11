import { Input } from "antd";
import "./elements.css";

const ClickOrder = ({
  month,
  daysLeft,
  interaction,
}: {
  month: string;
  daysLeft: number;
  interaction: number;
}) => {
  return (
    <div className="clickOrderBox flex flex-row items-center justify-between w-full min-w-[300px] bg max-w-fit">
      <p className="font-bold text-[#1B4C84] w-[80px]">{month}</p>
      <div className="flex flex-row items-center gap-2">
        <Input
          value={interaction}
          disabled
          className=" text-[0.9rem] value shadow rounded-[5px] px-2 py-2 !text-white flex flex-row items-center "
        />
        <p className="text-[#A7AAB1] w-[150px]">
          {daysLeft} days left this month
        </p>
      </div>
    </div>
  );
};

export default ClickOrder;
