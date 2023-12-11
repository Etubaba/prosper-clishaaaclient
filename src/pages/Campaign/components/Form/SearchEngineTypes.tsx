import { useState } from "react";
import { PlusSvg } from "../../../../assets/svg/svg";
import QuestionModal from "./QuestionModal";

const SearchEngineTypes = ({
  searchEngineType,
}: {
  searchEngineType: string;
}) => {
  return (
    <div className="w-full flex flex-row items-center gap-2 mt-2">
      <p className=" text-blue_color text-[0.8rem] w-[250px] max-w-[250px] min-w-[250px]">
        Which search engine would you like to use?
      </p>

      <div className="flex flex-row gap-2 bg-white rounded-[10px] flex-1 p-2 flex-wrap">
        <div className="interactionBtn bg-[#E5E5E5] cursor-not-allowed hover:scale-[1.05] flex flex-row gap-2 p-2 items-center min-w-[100px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
          <PlusSvg />
          <p className="font-bold text-blue_color">Google</p>
        </div>
        <div className="interactionBtn cursor-not-allowed hover:scale-[1.05] flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[100px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
          <PlusSvg />
          <p className="font-bold text-blue_color">Bing</p>
        </div>
        <div className="interactionBtn cursor-not-allowed hover:scale-[1.05] flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[100px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
          <PlusSvg />
          <p className="font-bold text-blue_color">DuckDuck</p>
        </div>
        <div className="interactionBtn cursor-not-allowed hover:scale-[1.05] flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[100px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
          <PlusSvg />
          <p className="font-bold text-blue_color">Yandex</p>
        </div>
        <div className="interactionBtn cursor-not-allowed hover:scale-[1.05] flex flex-row gap-2 p-2 bg-[#E5E5E5] items-center min-w-[100px] flex-1 rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
          <PlusSvg />
          <p className="font-bold text-blue_color">Baidu</p>
        </div>
      </div>
    </div>
  );
};

export default SearchEngineTypes;
