import "./Profile.css";
import PayInfoTabSection from "./components/PayInfoTabSection";
import CardTabSection from "./components/CardTabSection";
import ProfileForm from "./components/ProfileForm";
import InvoiceForm from "./components/InvoiceForm";
import { useDataStore } from "../../context/dataProvider";
import { useEffect } from "react";

const Profile = () => {
  const { getUserInvoice } = useDataStore();
  useEffect(() => {
    getUserInvoice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="profile relative bg-[#F3F4F5] w-full   pt-[130px] px-4 md:px-10 pb-10">
      <h1 className="profile_title font-bold ">Set your Company details</h1>
      <div className="w-full h-[1px] bg-[#DADADA] mt-2"></div>
      <div className="pt-8 flex flex-col">
        <div className="TopSection h-fit w-full flex flex-col justify-between">
          <div className="h-fit w-full flex flex-col md:flex-row justify-between">
            <ProfileForm />

            <div className="second_col pl-0 md:px-[2rem] xl:px-[4rem] 2xl:px-[6rem]">
              <div className="h-full w-full flex flex-col space-y-14">
                <CardTabSection />
                <PayInfoTabSection />
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#DADADA] mt-4 mb-2"></div>
        </div>
        <InvoiceForm />
      </div>
    </div>
  );
};

export default Profile;
