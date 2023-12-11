import { RiDeleteBinLine } from "react-icons/ri";
import { BluePenSvg, ClishaDollarSmallSvg } from "../../../../assets/svg/svg";

const ActiveInteractions = ({
  campInteractions,
}: {
  campInteractions: any;
}) => {
  console.log(campInteractions);
  return (
    <div className="w-full md:w-[50%]">
      <p className=" text-blue_color font-medium text-xl mt-8">
        Loaded Interactions
      </p>
      <div className="mt-2 flex flex-col gap-2">
        {campInteractions.map((interactionObj: any) => {
          return (
            <div className="flex flex-row gap-2 flex-1">
              <div className="bbdot"></div>
              <div className="w-full flex flex-row items-center gap-2">
                <div className="interactionBtn cursor-pointer flex flex-row gap-2 p-2 bg-white items-center w-full rounded-[10px] border-[1px] border-grey transition delay-150 ease-in-out">
                  <ClishaDollarSmallSvg />
                  <p className="font-bold text-blue_color">
                    id: {interactionObj?.interaction_id}
                  </p>
                  <p className="font-bold text-blue_color">
                    type: {interactionObj?.interaction_type}
                  </p>
                </div>
                <div className="cursor-pointer">
                  <BluePenSvg />
                </div>
                <div className="cursor-pointer">
                  <RiDeleteBinLine className="h-[24px] w-[24px] text-red" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActiveInteractions;
