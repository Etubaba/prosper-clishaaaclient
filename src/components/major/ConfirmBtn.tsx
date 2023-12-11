import { Button, Form } from "antd";
import { Link, useLocation } from "react-router-dom";
import { Regex } from "../../constants/regex";
import { useState } from "react";
import { IoMdClose } from "../../assets/icon";
import { useDataStore } from "../../context/dataProvider";

type TConfirmBtn = {
  showTitle?: boolean;
  interactions: number;
  loader: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<any>>;
};

const ConfirmBtn = ({
  showTitle,
  interactions,
  loader,
  setIsSave,
}: TConfirmBtn) => {
  const [openPopOver, setOpenPopOver] = useState(false);
  const location = useLocation();
  const { userBalance } = useDataStore();

  const hide = () => {
    setOpenPopOver(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpenPopOver(newOpen);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpenPopOver(false);
    }, 3000);
  };
  const PopUp = ({ openPopOver }: { openPopOver: boolean }) => {
    return (
      <div
        className={`${
          openPopOver ? " opacity-1 visible" : " opacity-0 hidden"
        }  ' bg-blue w-[500px] top-[-10px] text-white p-3 absolute z-10 left-[120px] rounded-md transition-all delay-100'`}
      >
        <span
          onClick={hide}
          className="text-white absolute top-1 right-1 cursor-pointer  text-lg"
        >
          <IoMdClose />
        </span>
        {Number(userBalance) < interactions ? (
          <p className="text-center text-lg text-red">
            Insufficient Interaction Balance
          </p>
        ) : (
          <p className="text-center text-lg">
            Would you like to save or publish this created task
          </p>
        )}

        {Number(userBalance) < interactions ? (
          <Link to={"/upgrade"}>
            <p className=" text-[11px] text-center w-[370px] mx-auto mt-3 font-light underline">
              click here to purchase a package
            </p>
          </Link>
        ) : (
          <>
            <div className="flex space-x-10 justify-center mt-3">
              <Button
                loading={loader}
                type="primary"
                htmlType="submit"
                onClick={() => {
                  setIsSave(true);
                  handleClose();
                }}
                className="updatebtn invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
              >
                Save
              </Button>
              <Button
                loading={loader}
                htmlType="submit"
                onClick={() => {
                  setIsSave(false);
                  handleClose();
                }}
                className="updatebtn invoice_download_btn w-[150px] px-3 py-1  border-0 bg-yellow_color rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
              >
                Publish
              </Button>
            </div>
            <p className=" text-[11px] text-center w-[370px] mx-auto mt-3 font-light">
              if you Click on "Publish" the daily task will be display to the
              users either on the next business day day or on the state yu have
              set as the start date{" "}
            </p>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-[1px] bg-[#DADADA] my-3"></div>

      <div className="flex flex-col xl:flex-row mt-4 mb-10">
        {showTitle && (
          <div className="title min-w-[150px]">
            <h1 className="subtitle font-bold text-[1.4rem] text-[#1B4C84]">
              {""}
            </h1>
          </div>
        )}
        <div className="others w-full flex flex-col gap-3">
          <p className="text-yellow_color">
            <span className="text-[#1B4C84] text-[1.1rem] font-bold">
              {Regex.onlyNumberCharacters.test(String(interactions))
                ? interactions
                : 0}
            </span>{" "}
            interactions this months
          </p>
          <div className="w-full flex flex-row justify-between gap-3 items-center">
            <Form.Item className=" relative">
              {(location.pathname === "/orders/editVisitTask" &&
                location?.state?.type === "edit") ||
              (location.pathname === "/orders/editSearchTask" &&
                location?.state?.type === "edit") ? (
                ""
              ) : (
                <PopUp openPopOver={openPopOver} />
              )}

              <Button
                loading={loader}
                type="primary"
                htmlType={
                  (location.pathname === "/orders/editVisitTask" &&
                    location?.state?.type === "edit") ||
                  (location.pathname === "/orders/editSearchTask" &&
                    location?.state?.type === "edit")
                    ? "submit"
                    : "button"
                }
                onClick={() => handleOpenChange(true)}
                className="updatebtn invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[38px] border-solid border-[0.5px] border-[#d9d9d9] flex flex-row justify-center items-center cursor-pointer text-white whitespace-nowrap font-bold"
              >
                {(location.pathname === "/orders/editVisitTask" &&
                  location?.state?.type === "edit") ||
                (location.pathname === "/orders/editSearchTask" &&
                  location?.state?.type === "edit")
                  ? "save "
                  : "Confirm order"}
              </Button>
            </Form.Item>
            <p className="text-[0.55rem] text-[#1B4C84]">
              By clicking Update Order I confirm that I have read and agree to
              the{" "}
              <Link to={"/"} className="text-yellow_color">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link to={"/"} className="text-yellow_color">
                Privacy Policy
              </Link>{" "}
              for this site.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmBtn;
