import { Button, InputNumber } from "antd";
import { ClishaDollarSmallSvg } from "../../assets/svg/svg";
import { useUserStore } from "../../context/userProvider";
import { useEffect, useState } from "react";
import useFetchMethods from "../../hook/useFetchMethod";
// import { TuserComapnyDetails } from "../../types/app.types";

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
  hasTag?: boolean;
  tagText?: string;
};

const PlanBox = ({
  planName,
  amount,
  interactions,
  fn,
  hasTag,
  tagText,
}: TPlanBox) => {
  const [value, setValue] = useState<number>(interactions);
  const [individualValue, setIndividualValue] = useState<number | null>(null);
  const [packageObj, setPackageObj] = useState<TPackage>({
    package_name: planName,
    amount: amount,
    interactions: value,
  });

  useEffect(() => {
    if (individualValue) {
      setPackageObj({
        package_name: planName,
        amount: individualValue | amount,
        interactions: value,
      });
    }
  }, [value]);

  useEffect(() => {
    if (planName === "Individual") {
      if (individualValue) {
        setValue(individualValue * 10);
      } else {
        setValue(0);
      }
    }
  }, [individualValue]);

  return (
    <div className="planBox cursor-pointer shadow relative p-4 bg-white rounded-[5px] w-full min-w-[200px] sm:max-w-[200px] flex-1 flex flex-col gap-2 justify-between">
      {hasTag && (
        <div className="planBoxTag absolute top-[-11px] right-[1rem] bg-blue px-3 py-1 rounded-[5px]">
          <p className="text-white font-[500] text-[0.8rem]">{tagText}</p>
        </div>
      )}
      <h2 className="font-bold text-yellow text-[1.4rem] leading-none">
        {planName}
      </h2>
      {planName === "Individual" ? (
        <div className="flex flex-row justify-end gap-1">
          <InputNumber
            onChange={setIndividualValue}
            value={individualValue}
            className="w-[150px] h-fit px-3 bg-white rounded-[5px] text-blue font-bold text-[1.5rem] text-end"
            size="small"
          />
          <h2 className="font-bold text-blue text-[2rem] text-end leading-none mt-2">
            €
          </h2>
        </div>
      ) : (
        <h2 className="font-bold text-blue text-[2rem] text-end leading-none mt-2">
          {amount} €
        </h2>
      )}
      <div className="flex flex-row gap-[2.5px] items-center justify-center">
        <ClishaDollarSmallSvg />
        <p className="font-bold text-blue">{value?.toLocaleString()}</p>
        <p className="text-[0.6rem] leading-none">Interaction this month</p>
      </div>
      <Button
        // loading={loading}
        type="primary"
        htmlType="submit"
        onClick={() => {
          fn(packageObj);
        }}
        className="updatebtn text-white invoice_download_btn w-full px-4 py-1 bg-green rounded-[5px] text-black text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer"
      >
        Purchase package
      </Button>
    </div>
  );
};

export default PlanBox;
