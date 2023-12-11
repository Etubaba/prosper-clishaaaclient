import { TRoute } from "../types/app.types";

import Search from "../pages/Search/Search";
import Dashboard from "../pages/Dashboard";
import Faq from "../pages/Faq";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import Summary from "../pages/Summary";
import VisitPage from "../pages/Visit";
import { ERoutes } from "../types/enum";
import SignUp from "../pages/SignUp";
import Campaign from "../pages/Campaign";
import Upgrade from "../pages/Upgrade/Upgrade";
import Login from "../pages/Login";
import Success from "../components/Success/Success";
import ShowCalender from "../pages/Orders/components/ShowCalender";
import VerifyEmail from "../components/layout/VerifyEmail/VerifyEmail";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

const routes: TRoute[] = [
  {
    path: ERoutes.Signup,
    element: SignUp,
  },
  {
    path: ERoutes.Login,
    element: Login,
  },
  {
    path: ERoutes.Success,
    element: Success,
  },
  {
    path: ERoutes.VerifyEmail,
    element: VerifyEmail,
  },
  {
    path: ERoutes.ResetPassword,
    element: ResetPassword,
  },
];
const privateRoutes: TRoute[] = [
  {
    path: ERoutes.Dashboard,
    element: Dashboard,
  },
  {
    path: ERoutes.Profile,
    element: Profile,
  },
  {
    path: ERoutes.Orders,
    element: Orders,
  },
  {
    path: ERoutes.Calendar,
    element: ShowCalender,
  },
  {
    path: ERoutes.EditSearchOrder,
    element: Search,
  },
  {
    path: ERoutes.EditVisitOrder,
    element: VisitPage,
  },
  {
    path: ERoutes.Summary,
    element: Summary,
  },
  {
    path: ERoutes.Faq,
    element: Faq,
  },
  {
    path: ERoutes.Visit,
    element: VisitPage,
  },
  {
    path: ERoutes.Search,
    element: Search,
  },
  {
    path: ERoutes.Campaign,
    element: Campaign,
  },
  {
    path: ERoutes.Upgrade,
    element: Upgrade,
  },
];
export { routes, privateRoutes };
