/** @format */

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes, privateRoutes } from "./routes";
import Layout from "../components/layout";
import { AppProvider } from "../context/appProvider";

const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* <Route index element={<AppProvider />} /> */}
        <Route index element={<Navigate to={"/dashboard"} />} />

        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            loader={route.loader}
            key={route.path}
          />
        ))}
        <Route element={<AppProvider />}>
          <Route element={<Layout />}>
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                element={<route.element />}
                loader={route.loader}
                key={route.path}
              />
            ))}
          </Route>
        </Route>
      </Route>
    )
  );
};

const RootRouter = () => <RouterProvider router={router()} />;

export default RootRouter;
