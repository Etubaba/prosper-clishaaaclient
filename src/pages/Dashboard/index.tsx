import InfoCard from "./components/InfoCard";
import { FiPlus } from "react-icons/fi";
import MenuList from "./components/MenuList";
import FilterList from "./components/FilterList";
import infoIcon from "../../assets/icon/info_icon.png";
import { MdArrowForwardIos } from "react-icons/md";
import { dashboardSubmenuCard } from "../../constants/data";
import { Link } from "react-router-dom";
import { useUserStore } from "../../context/userProvider";
import { useTranslation } from "react-i18next";
// import UpdateName from "./components/UpdateName";
import useFetchMethods from "../../hook/useFetchMethod";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [t] = useTranslation("global");
  const { admin, company } = useUserStore();
  const [data, setData] = useState();
  const { getUserDashboardReport } = useFetchMethods();

  const getData = async () => {
    const res = await getUserDashboardReport();
    const data = res?.data?.data?.report;
    // const data = setData(res.data.data.report);
    if (res?.status) {
      setData(res?.data?.data?.today);
      data.map((datum: any) => {
        if (datum?.website_click) {
          dashboardSubmenuCard[0].mainAmount =
            datum?.website_click?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[0].subAmount =
            datum?.website_click?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[0].percentage =
            datum?.website_click?.percentage?.toLocaleString() || "0";
        } else if (datum?.google_search) {
          dashboardSubmenuCard[1].mainAmount =
            datum?.google_search?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[1].subAmount =
            datum?.google_search?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[1].percentage =
            datum?.google_search?.percentage?.toLocaleString() || "0";
        } else if (datum?.google_news) {
          dashboardSubmenuCard[2].mainAmount =
            datum?.google_news?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[2].subAmount =
            datum?.google_news?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[2].percentage =
            datum?.google_news?.percentage?.toLocaleString() || "0";
        } else if (datum?.google_video) {
          dashboardSubmenuCard[3].mainAmount =
            datum?.google_video?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[3].subAmount =
            datum?.google_video?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[3].percentage =
            datum?.google_video?.percentage?.toLocaleString() || "0";
        } else if (datum?.google_images) {
          dashboardSubmenuCard[4].mainAmount =
            datum?.google_images?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[4].subAmount =
            datum?.google_images?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[4].percentage =
            datum?.google_images?.percentage?.toLocaleString() || "0";
        } else if (datum?.youtube) {
          dashboardSubmenuCard[5].mainAmount =
            datum?.youtube?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[5].subAmount =
            datum?.youtube?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[5].percentage =
            datum?.youtube?.percentage?.toLocaleString() || "0";
        } else if (datum?.tiktok) {
          dashboardSubmenuCard[6].mainAmount =
            datum?.tiktok?.clicks?.toLocaleString() || "0";
          dashboardSubmenuCard[6].subAmount =
            datum?.tiktok?.interactions?.toLocaleString() || "0";
          dashboardSubmenuCard[6].percentage =
            datum?.tiktok?.percentage?.toLocaleString() || "0";
        }
      });
    }
  };

  const handleName = (name: string) => {
    const firstChar = name?.trim().charAt(0).toUpperCase();
    const remainingChars = name?.slice(1);
    return `${firstChar}${remainingChars}`;
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(company);
  return (
    <>
      {/* <UpdateName /> */}
      <div className="bg-dashboard_bg pt-[130px] py-[100px] px-10">
        <div className="flex justify-between flex-wrap  items-center mt-5">
          <h1 className="text-3xl font-bold ps-2 mt-4">
            {t("Welcome")}{" "}
            {handleName(admin?.firstname) + " " + handleName(admin?.lastname)},{" "}
            {t("welcome_note")}!
          </h1>
          <Link to={"/campaign"}>
            <button className="bg-green_color flex space-x-2 items-center rounded-md  py-2 text-white mt-3   ps-2 pe-5  ">
              <FiPlus className="text-lg" />
              <span className=" text-sm font-bold">{t("create_campaign")}</span>
            </button>
          </Link>
        </div>
        <div className="border border-gray-200 mt-4"></div>
        <div className="ps-3">
          <div className="flex justify-between items-center mt-6 flex-wrap">
            <p className="text-3xl  text-dashboard_text_color font-semibold mb-2 ">
              {t("today")}
            </p>
            {(company?.address_line === null ||
              company?.city === null ||
              company?.country === null ||
              company?.phone_number === null) && (
              <div className="popuotoprofile overflow-hidden">
                <div className=" rounded py-1 px-3 w-[40rem] bg-[#CD3B43] flex items-center justify-between">
                  <div className="items-center flex ">
                    <img src={infoIcon} alt="icon" className="h-5" />
                    <Link to="/profile">
                      <span className="text-white ms-4">
                        {t("complete_profile")}!
                        <span className="text-[#FFDD00]"> {t("setting")}</span>
                      </span>
                    </Link>
                  </div>
                  <MdArrowForwardIos className="text-white" />
                </div>
              </div>
            )}
          </div>

          <div className="flex  mt-4  dashboard_submenu ">
            <MenuList data={data} />
          </div>
        </div>
        <div className="border border-gray-200 mt-6"></div>
        <div className="grid 2xl:grid-cols-5 lg:grid-cols-5  md:grid-cols-3 sm:grid-cols-2  grid-cols-1   gap-5 py-5">
          {dashboardSubmenuCard.map((box, index: number) => (
            <InfoCard key={index} box={box} count={index} />
          ))}
        </div>
        <div className=" mt-12 ">
          <FilterList />
        </div>
      </div>
    </>
  );
}
