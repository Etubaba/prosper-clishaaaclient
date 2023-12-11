import { FaRegCompass, BiPlus } from "../../assets/icon";
import TragetForm from "./components/Form/TargetForm";
import FakeCampaign from "./FakeCampaign";

import Note from "./Note";

const Campaign = () => {
  return (
    <>
      <div className="pt-[130px] relative px-4 md:px-10 mb-32">
        {/* <FakeCampaign /> */}
        <h1 className="orders_title font-bold text-[1.4rem]">
          Make your business visible and convince clickers of your product
        </h1>
        <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
        <Note />
        <div className="border border-gray-200 mt-3"></div>
        <div className="mt-8 flex items-start">
          <div className="mt-2">
            <FaRegCompass className="text-[#FC9828] text-4xl" />
          </div>
          <span className="ms-4 font-normal md:w-9/12">
            Your success is our success. That's why we have developed the
            campaign manager to enable even more successes in your business.
            Specifically for DIY customers, we have created an additional access
            to the advertising campaign manager. If this area appears too
            complex for you, we are here to assist you. Alternatively, there are
            numerous marketing agencies worldwide that are familiar with our
            systems and are interested in accompanying you on your path to
            success and strengthening your online presence.
          </span>
        </div>
        <div className="mt-10 flex justify-between  items-center">
          <h1 className=" text-blue_color text-2xl capitalize">
            campaign start
          </h1>
          <button
            type="submit"
            className="rounded font-medium items-center flex bg-green_color mb-2 text-white py-1 pe-6"
          >
            <span className="px-2">
              <BiPlus className="text-white text-lg" />
            </span>
            <span>Create a campaign </span>
          </button>
        </div>
        <TragetForm />
      </div>
    </>
  );
};

export default Campaign;
