import { Tooltip } from "antd";
import { InfoSvg } from "../../../assets/svg/svg";

const HeadTooltip = ({ title }: { title: string }) => {
  return (
    <>
      <Tooltip
        className="ml-3"
        title={
          title === "Interaction"
            ? ""
            : title === "Status IA"
            ? "Status IA shows the amount of interactions that have been completed in comparison to the expected number of interactions daily"
            : title === "Status %"
            ? `Status % displays the sum of all interactions that are accomplished throughout a task's lifecycle as a percentage`
            : title === "Auto Renew"
            ? "Auto-renew indicates whether a task will be automatically restarted after its completion."
            : title === "Success"
            ? `Success displays the rate of interactions attained daily as a percentage`
            : ""
        }
      >
        <>
          <InfoSvg />
        </>
      </Tooltip>
    </>
  );
};

export default HeadTooltip;
