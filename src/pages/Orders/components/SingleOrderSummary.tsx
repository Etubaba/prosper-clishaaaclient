import { useState } from "react";
import {
  BlackEyeSvg,
  BluePenSvg,
  CancelSvg,
  GoldCopySvg,
  PauseSvg,
} from "../../../assets/svg/svg";
import RadioBtn from "../../../components/elements/RadioBtn";
import DisplayBox from "./DisplayBox";
import InputInfo from "./InputInfo";
import OpenCalenar from "./OpenCalenar";
import ShowCalender from "./ShowCalender";
import { useDataStore } from "../../../context/dataProvider";
import { singletaskData } from "../../../types/app.types";
import { AiFillCloseCircle } from "../../../assets/icon";

const SingleTaskSummary = ({
  gotoSingleOrder,
}: {
  gotoSingleOrder: (valueType: boolean) => void;
}) => {
  const [showLargeCalendar, setShowLargeCalendar] = useState<boolean>(false);
  const { singletaskData }: { singletaskData: any } = useDataStore();
  console.log(singletaskData);

  return !showLargeCalendar ? (
    <div className=" pt-32 pb-20 px-10 relative ">
      <div className="flex border-b-[2px] pb-4 justify-between">
        <div className="flex items-center space-x-3 text-2xl">
          <AiFillCloseCircle
            className=" text-red text-3xl cursor-pointer"
            onClick={() => gotoSingleOrder(false)}
          />{" "}
          <BlackEyeSvg />
          <span>
            <span className=" font-bold">Task </span>#{singletaskData.order_id}
          </span>
        </div>
        <div className="flex space-x-2 items-center">
          <span className=" cursor-pointer">
            <GoldCopySvg
              fill={singletaskData.published ? undefined : "#a6a6a6"}
            />
          </span>
          <span className=" cursor-pointer">
            <PauseSvg
              fill={!singletaskData.published ? "#39A54A" : "#a6a6a6"}
            />
          </span>
          <span className=" cursor-pointer">
            <CancelSvg fill={singletaskData.status ? "#a6a6a6" : "#EE2C4C"} />
          </span>
          <span className=" cursor-pointer">
            <BluePenSvg />
          </span>
        </div>
      </div>
      <InputInfo />
      <div className="mt-3">
        <OpenCalenar
          setShowLargeCalendar={setShowLargeCalendar}
          data={singletaskData?.monthly}
        />
      </div>

      <div className="mt-8">
        <RadioBtn
          className="w-fit justify-end text-2xlg"
          state={true}
          setState={() => {}}
          title={"This orders is for adults"}
          tooltip={true}
          tooltipTitle={""}
          textClass="text-lg font-light"
        />
        <RadioBtn
          className="w-fit justify-end text-2xlg mt-2"
          state={false}
          setState={() => {}}
          title="daily website visitors random setting"
          tooltip={true}
          tooltipTitle={""}
          textClass="text-lg font-light"
        />
        <div className="mt-4 w-[450px]">
          <DisplayBox
            label="Country-specific search engine"
            value="https://google.es/"
          />
        </div>
      </div>
    </div>
  ) : (
    <ShowCalender setShowLargeCalendar={setShowLargeCalendar} />
  );
};

export default SingleTaskSummary;
