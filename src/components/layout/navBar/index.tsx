import {
  ClishaDollarSvg,
  GoldenArrowDownSvg,
  LogoSvg,
  LogoutSvg,
  RefreshSvg,
  SettingsSvg,
} from "../../../assets/svg/svg";
import profileImg from "../../../assets/img/clishaprof.png";
import { NavLink } from "react-router-dom";
import { Button, Dropdown } from "antd";
import LanguageBtn from "./LanguageBtn";
import useAuthMethods from "../../../hook/useAuthMethod";
import { useUserStore } from "../../../context/userProvider";
import MoneyCounter from "../../elements/MoneyCounter";
import { ChangeEvent, useEffect, useState } from "react";
import { useDataStore } from "../../../context/dataProvider";

import { useTranslation } from "react-i18next";
import { MdOutlineModeEdit } from "../../../assets/icon";
import { beforeUpload, getBase64 } from "../../../utils/helperr";
import useRequestManager from "../../../manager/requestManger";
import Spinner from "../../elements/Spiner";

const NavBar = () => {
  const { logout } = useAuthMethods();
  const { admin, company, updateUser } = useUserStore();
  const { updateCompanyIcon } = useRequestManager();
  const { userBalance, getUserBalance, userPayInfo } = useDataStore();

  const [isRecurringActive, setIsRecurringActive] = useState(0);
  const [Loading, setLoading] = useState<boolean>(false);

  const handleMenuClick = (e: any) => {
    if (e.key === "1") {
      logout();
    } else if (e.key === "2") {
    }
  };

  useEffect(() => {
    getUserBalance();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setIsRecurringActive(userPayInfo?.status);
  }, [userPayInfo]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [company.icon]);

  const handleName = (fullName: string) => {
    if (fullName) {
      const firstChar = fullName.trim().charAt(0).toUpperCase();
      const remainingChars = fullName.slice(1);
      const trimmed = `${firstChar}${remainingChars}`;
      const splitName = trimmed.split(" ");
      if (splitName.length > 1) {
        const revampedName = `${splitName[0]} ${splitName[
          splitName.length - 1
        ][0].toUpperCase()}.`;
        return revampedName;
      }
      return splitName[0];
    }
    return null;
  };

  const items = [
    // {
    //   label: "Settings",
    //   key: "1",
    //   icon: <SettingsSvg />,
    // },
    {
      label: "Logout",
      key: "1",
      icon: <LogoutSvg />,
    },
  ];

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const { files } = e.target;
    const selectedFiles = files as FileList;
    const FormData = require("form-data");
    const formData = new FormData();
    formData.append("icon", selectedFiles?.[0]);
    if (beforeUpload(selectedFiles?.[0])) {
      await updateCompanyIcon(formData);
      getBase64(selectedFiles?.[0], (url) => {
        company.icon = url;
        updateUser({ company: company });
      });
      setLoading(false);
    }
  };
  const [t] = useTranslation("global");
  const navigation = [
    { name: t("visit"), href: "/visit" },
    { name: t("search"), href: "/search" },
    { name: t("campaign"), href: "/campaign" },
    { name: t("task_summary"), href: "/summary" },
    { name: t("orders"), href: "/orders" },
    { name: t("faq"), href: "/faq" },
    { name: t("upgrade"), href: "/upgrade" },
    { name: t("profile"), href: "/profile" },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 h-[100px] bg-white z-20 flex flex-col justify-between px-4 pt-5 md:px-10">
        <div className="flex flex-row items-center">
          <div className="logo flex-[1_1_5%] w-[5%]">
            <NavLink to={"/dashboard"}>
              <LogoSvg />
            </NavLink>
          </div>
          <div className="others  flex flex-row justify-end items-center gap-6 flex-[1_1_30%] w-[30%]">
            <ClishaDollarSvg />
            <div className="flex flex-row items-center">
              <MoneyCounter num={userBalance} />
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <path
                  d="M17.6449 6.35C16.1949 4.9 14.2049 4 11.9949 4C7.57488 4 4.00488 7.58 4.00488 12C4.00488 16.42 7.57488 20 11.9949 20C15.7249 20 18.8349 17.45 19.7249 14H17.6449C16.8249 16.33 14.6049 18 11.9949 18C8.68488 18 5.99488 15.31 5.99488 12C5.99488 8.69 8.68488 6 11.9949 6C13.6549 6 15.1349 6.69 16.2149 7.78L12.9949 11H19.9949V4L17.6449 6.35Z"
                  fill={isRecurringActive ? "#fabe29" : "#757575"}
                />
              </svg>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="h-[36px] w-[36px] rounded-full overflow-">
                {Loading ? (
                  <Spinner />
                ) : (
                  <div className="flex flex-row justify-between h-fit gap-05 items-end relative">
                    <img
                      src={company.icon ? company.icon : profileImg}
                      alt="profile"
                      className="h-10 w-auto rounded-full"
                    />
                  </div>
                )}
              </div>

              <h1 className="font-bold">
                {handleName(admin?.firstname + " " + admin?.lastname)}
              </h1>
              <Dropdown menu={menuProps} className="navbar">
                <Button>
                  <GoldenArrowDownSvg />
                </Button>
              </Dropdown>
              <LanguageBtn />
            </div>
          </div>
        </div>
        <div className="navigations flex-1 h-full flex flex-row px-20 items-end">
          {navigation.map((navigate) => {
            return (
              <NavLink
                key={navigate.href}
                to={navigate.href}
                className={`bg-[#F3F4F5] text-[0.8rem] ${
                  navigate.name === "upgrade" ? "upgrade" : ""
                } flex-1 flex font-bold items-center justify-center py-1 whitespace-nowrap`}
              >
                {navigate.name}

                {/* {t(navigate.name)} */}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
