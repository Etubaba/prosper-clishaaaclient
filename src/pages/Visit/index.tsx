import VisitForm from "./components/VisitForm";
import DisplayInfoMessage from "../Search/components/DisplayInfoMessage";

const VisitPage = () => {
  return (
    <div className="bg-dashboard_bg pt-[130px] px-4 md:px-10 pb-10">
      <DisplayInfoMessage />
      <div className=" mx-auto">
        <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
        <VisitForm />
      </div>
    </div>
  );
};

export default VisitPage;
