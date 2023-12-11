import {
  CancelSvg,
  DateRangeSvg,
  GoldArrowDownSvg,
  GoldDownloadSvg,
  PauseSvg,
  RotateSvg,
} from "../../../assets/svg/svg";
import FilterDropdown from "../../../components/elements/FiterDropDown";
import OrderFilterBtn from "../../../components/elements/OrderFilterBtn";
import { TFilterWrapper } from "../../../types/components";
import DateFilter from "./DateFilter";

const FilterWrapper = ({
  changeFilter,
  activeFilter,
  dropDownTextHolder,
}: TFilterWrapper) => {
  return (
    <div className="buttons h-30px w-full flex flex-row flex-wrap lg:flex-nowrap gap-1 lg:gap-0 mt-2 mb-4 justify-between">
      <div className="firstSet flex flex-col md:flex-row gap-2 md:gap-1 items-start">
        <OrderFilterBtn
          placeholder="all orders"
          fn={changeFilter}
          activeFilter={activeFilter}
        />
        <OrderFilterBtn
          placeholder="open orders"
          fn={changeFilter}
          activeFilter={activeFilter}
          iconImg={<RotateSvg />}
        />
        <OrderFilterBtn
          placeholder="pause orders"
          fn={changeFilter}
          activeFilter={activeFilter}
          iconImg={<PauseSvg />}
        />
        <OrderFilterBtn
          placeholder="ended orders"
          fn={changeFilter}
          activeFilter={activeFilter}
          iconImg={<CancelSvg />}
        />
        <FilterDropdown
          placeholder={dropDownTextHolder}
          fn={changeFilter}
          activeFilter={activeFilter}
          iconImg={<GoldArrowDownSvg />}
        />
      </div>
      <div className="secondSet flex flex-col md:flex-row gap-1">
        <DateFilter changeFilter={changeFilter} />
        <div
          style={{ backgroundColor: "#fff", color: "#1B4C84" }}
          className={`
          } orderBtn relative bg-blue text-white flex flex-row justify-between items-center p-1 h-[23px] w-[140px] cursor-pointer`}
          onClick={() => {
            // fn(placeholder);
          }}
        >
          <p className={`h-fit w-fit pl-[1.5rem]`}>download</p>
          <GoldDownloadSvg />
        </div>
      </div>
    </div>
  );
};
export default FilterWrapper;
