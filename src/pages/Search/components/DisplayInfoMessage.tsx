import { useLocation, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "../../../assets/icon";

const DisplayInfoMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const displayMessage = () => {
    let message: string = "";

    if (
      location.pathname === "/orders/editVisitTask" ||
      location.pathname === "/orders/editSearchTask"
    ) {
      message =
        location.state.type === "copy"
          ? `Duplicating Order #${location.state?.id}`
          : `Editing Order #${location.state?.id}`;
    }

    if (location.pathname === "/search") {
      message = "Explode your keywords";
    }
    if (location.pathname === "/visit") {
      message = "Let your website visits begin";
    }
    return message;
  };

  return (
    <div className="flex justify-start items-center gap-2">
      {" "}
      {(location?.state?.type === "edit" ||
        location?.state?.type === "copy") && (
        <AiFillCloseCircle
          className=" text-red text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        />
      )}
      <h1 className=" font-semibold text-xl text-black">{displayMessage()}</h1>
    </div>
  );
};
export default DisplayInfoMessage;
