import { useState } from "react";
import { PlusSvg } from "../../../../assets/svg/svg";
import QuestionModal from "./QuestionModal";

const InteractionTypes = ({
  setInteractionType,
}: {
  setInteractionType: React.SetStateAction<any>;
}) => {
  return (
    <div className="w-full flex flex-row items-center gap-2 mt-2">
      <p className=" text-blue_color text-[0.8rem] w-[250px] max-w-[250px] min-w-[250px]">
        What should the users do?
      </p>

      <div className="flex flex-row gap-2 bg-white rounded-[10px] flex-1 p-2 flex-wrap">
        <div
          className="interactionBtn cursor-pointer hover:scale-[1.05] flex flex-row gap-2 p-2 bg-white items-center min-w-[200px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out"
          onClick={() => {
            setInteractionType("question");
          }}
        >
          <PlusSvg />
          <p className="font-bold text-blue_color">Questions</p>
        </div>
        <div className="interactionBtn cursor-not-allowed  flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[200px] flex-1 rounded-[10px] border-[1px] border-grey ">
          <PlusSvg />
          <p className="font-bold text-blue_color/20">Duration Time</p>
        </div>
        <div className="interactionBtn cursor-not-allowed  flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[200px] flex-1 rounded-[10px] border-[1px] border-grey ">
          <PlusSvg />
          <p className="font-bold text-blue_color/20">Watch Video</p>
        </div>
        <div className="interactionBtn cursor-not-allowed  flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[200px] flex-1 rounded-[10px] border-[1px] border-grey ">
          <PlusSvg />
          <p className="font-bold text-blue_color/20">Fill a Form</p>
        </div>
        <div className="interactionBtn cursor-not-allowed  flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[200px] flex-1 rounded-[10px] border-[1px] border-grey ">
          <PlusSvg />
          <p className="font-bold text-blue_color/20">Show him next TODO</p>
        </div>
      </div>
    </div>
  );
};

export default InteractionTypes;
