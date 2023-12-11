import axios from "axios";
import { appConfig } from "../constants/settings";
import Notification from "../components/notification";
import { IErrors } from "../types/app.types";
import local from "../utils/local";

export const fetchInstance = axios.create({
  baseURL: appConfig.baseAPIUrl,
});

fetchInstance.interceptors.request.use((res) => {
  const gettoken: string | null = local.get(appConfig.userLocalKey);

  const token: any = gettoken ? JSON.parse(gettoken).accessToken : "";
  res.headers["x-access-token"] = token;
  res.headers.Authorization = `bearer ${token}`;
  return res;
});

fetchInstance.interceptors.response.use(
  function (response) {
    if (response?.data?.message === "Company Task Overview Report") {
    } else {
      Notification.displayInfo({
        message: response.data.message ? "success" : "",
        description: response.data.message,
      });
    }

    return response;
  },
  (error) => {
    if (error?.response?.data?.message === "No token provided!") {
    } else {
      if (error?.response?.data.errors) {
        error.response.data.errors.map((error: IErrors) =>
          Notification.displayInfo({
            message: "error",
            description: error.msg,
          })
        );
      } else if (error?.response?.data.message) {
        Notification.displayInfo({
          message: "error",
          description: error?.response?.data.message,
        });
      } else {
        Notification.displayInfo({
          message: "error",
          description:
            "something went wrong, please check your network connection and try again",
        });
      }
    }
  }
);
