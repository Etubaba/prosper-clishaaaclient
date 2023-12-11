import { Tooltip } from "antd";
import { InfoSvg } from "../../assets/svg/svg";

type TRadioBtn = {
  className?: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
  title: string;
  tooltip?: boolean;
  tooltipTitle?: string;
  textClass?: string;
  isInEditMode?: boolean;
};

const RadioBtn = ({
  className,
  state,
  setState,
  title,
  tooltip,
  tooltipTitle,
  textClass,
  isInEditMode,
}: TRadioBtn) => {
  return (
    <div
      className={`checkcircle flex flex-row gap-1 items-center cursor-pointer ${className}`}
      onClick={() => {
        if (isInEditMode) {
        } else {
          setState((prevState: boolean) => !prevState);
        }
      }}
    >
      <div
        className={`h-[13px] min-w-[13px] bg-${
          state ? "blue" : "white"
        } rounded-full transition ease-in-out delay-100`}
      ></div>
      <p className={`text-[#1B4C84] whitespace-wrap  ${textClass}`}>{title}</p>
      {tooltip && (
        <Tooltip className="ml-3" title={tooltipTitle}>
          <span>
            <InfoSvg />
          </span>
        </Tooltip>
      )}
    </div>
  );
};

export default RadioBtn;
