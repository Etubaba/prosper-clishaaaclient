import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navBar";
import { useDataStore } from "../../context/dataProvider";
import { useUserStore } from "../../context/userProvider";
import VerifyModal from "../../pages/Dashboard/components/VerifyModal";
import { useEffect } from "react";

const Layout = () => {
  // const { admin } = useUserStore();
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location);
  // useEffect(() => {
  //   if (location?.state?.isUserVerified || admin?.email_verified_at) {
  //   } else {
  //     navigate("/verify-email");
  //   }
  // }, [location]);
  // if (location?.state?.isUserVerified === false) return <></>;
  return (
    <div className="h-full flex flex-col">
      {/* {!admin?.email_verified_at && <VerifyModal />} */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
