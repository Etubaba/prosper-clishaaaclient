import { useEffect, useState } from "react";
import { ClishaDollarWithWhiteBgSvg } from "../../assets/svg/svg";

type TPackage = {
  package_name: string;
  amount: number;
  interactions: number;
};

type TPlanBox = {
  planName: string;
  amount: number;
  interactions: number;
  fn: (value: TPackage) => void;
};

const ProgressBar = ({ fn, planName, amount, interactions }: TPlanBox) => {
  const [value, setValue] = useState<string>(interactions.toString());
  const [showValue, setShowValue] = useState(false);
  // const [packageObj, setPackageObj] = useState<TPackage>({
  //   package_name: planName,
  //   amount: amount,
  //   interactions: Number(value),
  // });

  const handleProgress = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const calculateMove = (value: number): number => {
    return value / 2500;
  };

  useEffect(() => {
    fn({
      package_name: planName,
      amount: Number(value) * 0.1,
      interactions: Number(value),
    });
    if (Number(value) > 1000) {
      setShowValue(true);
    } else {
      setShowValue(false);
    }
  }, [value]);

  useEffect(() => {
    window.addEventListener("click", function (event) {
      setShowValue(false);
    });
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row gap-0 md:gap-2 md:gap-6 pt-4">
      <div className="w-full my-5 max-w-[1024px]">
        <div
          className="progress_container w-full flex flex-col gap-5"
          onClick={(e) => e.preventDefault()}
        >
          <div className="progress w-full relative flex flex-row items-center justify-center m-auto">
            <input
              onInput={handleProgress}
              id="song_progress"
              type="range"
              min="1000"
              max="250000"
              step="1"
              className="w-full outline-none rounded-[160px] z-[1]"
              value={interactions}
              defaultValue="0"
            />
            <div className="absolute progressLine w-full h-[3px] z-[0] bg-blue"></div>
            <div
              id="song_progress_keeper"
              className="relative z-[0]"
              // style={{ left: `${calculateMove(Number(value)) + "%"}` }}
              style={{
                left: `${
                  interactions <= 250000
                    ? calculateMove(Number(interactions)) + "%"
                    : "100%"
                }`,
              }}
            >
              <div
                className={`valueKeeper ${
                  showValue ? "show" : "hide"
                } bg-red w-fit p-1 h-[35px] m-auto rounded-full flex flex-row justify-center items-center`}
              >
                <p className="text-white font-[500]">{interactions}</p>
                {/* <p className="text-white font-[500]">{value}</p> */}
              </div>
              <div className={"song_progress_keeper_move"}>
                <ClishaDollarWithWhiteBgSvg />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-row w-fit">
              <div className="bg-red p-2 w-fit">
                <p className="text-white font-[500]">1.000</p>
              </div>
              <div className="bg-blue p-2 w-fit">
                <p className="text-white font-[500]">Interaction</p>
              </div>
            </div>

            <div className="flex flex-row w-fit">
              <div className="bg-red p-2 w-fit">
                <p className="text-white font-[500]">250.000</p>
              </div>
              <div className="bg-blue p-2 w-fit">
                <p className="text-white font-[500]">Interaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buyPackage flex-auto w-[100%] md:w-[20%] 3xl:w-[30%] flex flex-row justify-end 3xl:justify-start">
        <div
          // onClick={() => fn(packageObj)}
          tabIndex={0}
          className="invoice_download_btn  w-[170px] md:w-[200px] px-4 py-1 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
        >
          <p className="text-white">Purchase package</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
