import {
  ClishaDollarWithWhiteBgSvg,
  GoldenRocketSvg,
  RedTrampezumSvg,
  VisitSvg,
  KeywordSearchSvg,
  AdvanceSearchSvg,
  DwellDurSvg,
  GeoTarSvg,
  CreateTaskSvg,
} from "../../assets/svg/svg";

type TInteractionCard = {
  amount: number;
  interactions: number;
};
const InteractionCard = ({ amount, interactions }: TInteractionCard) => {
  return (
    <div className="w-full flex flex-col min-h-[291px]">
      <div className="Body flex flex-col sm:flex-row w-full">
        <div className="firstCol bg-white flex-auto flex flex-col gap-3 justify-between pt-2 items-center flex-auto w-[100%] sm:min-w-[200px]">
          <div className="flex flex-row sm:flex-col md:flex-row gap-2 items-start">
            <h1 className="text-[2.7rem] font-bold text-blue whitespace-nowrap">
              {Number(amount.toFixed(1))} €
            </h1>
            <p className="text-blue">month</p>
          </div>
          <GoldenRocketSvg />
          <div className="relative">
            <RedTrampezumSvg />
            <p className="absolute top-0 right-0 left-0 bottom-0 m-auto h-fit w-fit font-bold text-white">
              coming soon
            </p>
          </div>
        </div>
        <div className="secondCol bg-white flex flex-col flex-auto w-[100%] sm:min-w-[60%]">
          <div className="bg-blue flex flex-row items-center px-4 py-2 gap-2">
            <ClishaDollarWithWhiteBgSvg />
            <h1 className="text-[1.4rem] font-bold text-yellow">
              {interactions}
            </h1>
            <p className=" text-white tracking-wider font-[500]">
              interactions per month
            </p>
          </div>
          <div className="px-4 py-3 flex flex-col gap-2">
            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <VisitSvg />
                </div>
                <p className="text-blue  ">Visit</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">
                {interactions}
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <KeywordSearchSvg />
                </div>
                <p className="text-blue ">Keyword Search</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">
                {(interactions / 2).toFixed()}
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <AdvanceSearchSvg />
                </div>
                <p className="text-blue ">Advanced Search</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">
                {((amount * 333) / 100).toFixed()}
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <AdvanceSearchSvg />
                </div>
                <p className="text-blue ">Advanced Setting</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">
                {((amount * 333) / 100).toFixed()}
              </p>
            </div>
            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <AdvanceSearchSvg />
                </div>
                <p className="text-blue ">Full Advanced</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">
                {((amount * 250) / 100).toFixed()}
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <DwellDurSvg />
                </div>
                <p className="text-blue ">Dwell Duration</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">unlimited</p>
            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <GeoTarSvg />
                </div>
                <p className="text-blue ">Geo Targeting</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">unlimited</p>
            </div>

            <div className="flex flex-row gap-3 justify-between items-center">
              <div className="flex flex-row gap-4 items-center">
                <div className="h-fit w-[20px]">
                  <CreateTaskSvg />
                </div>
                <p className="text-blue ">Create Tasks</p>
              </div>
              <p className="text-darkpink text-[1rem] font-bold">unlimited</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Foot flex flex-col sm:flex-row w-full">
        <div className="bg-orange flex-auto w-[100%] sm:w-[40%] p-2 flex flex-row items-center justify-center">
          <p className="text-white font-bold tracking-[0.25rem] whitespace-nowrap">
            CREATE CAMPAIGNS
          </p>
        </div>
        <div className="bg-red flex-auto w-[100%] sm:w-[60%] p-2 flex flex-row items-center justify-center">
          <p className="text-white font-bold tracking-[0.25rem] whitespace-nowrap">
            UNLIMITED
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractionCard;
