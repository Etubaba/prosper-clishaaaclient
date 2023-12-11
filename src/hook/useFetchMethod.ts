import { useState } from "react";
import useRequestManager from "../manager/requestManger";
import {
  TSearchTaskType,
  TProfileUpdate,
  TCardUpdate,
  TCoinPayment,
  TAdminUpdate,
} from "../types/app.types";

const useFetchMethods = () => {
  const {
    createTask,
    updateProfile,
    getProfile,
    updateCard,
    coinPayment,
    cardPayment,
    offlinePayment,
    getWallet,
    configurePaypalPayment,
    paypalSecondPayment,
    paypalPayment,
    validatePackage,
    validatePaypalPackage,
    getInvoices,
    updateAdmin,
    getDashboardReport,
    resendEmail,
    sendResetPasswordEmail,
    resetPassword,
    createInteraction,
    createCampaignTask,
    getCalendarData,
    getAllCalendarData,
  } = useRequestManager();

  const [loading, setLoading] = useState<boolean>(false);

  const createSearchTask = async (values: TSearchTaskType) => {
    setLoading(true);
    const responses: any = await createTask(values);
    setLoading(false);
    return responses;
  };

  const updateUserProfile = async (values: TProfileUpdate) => {
    setLoading(true);
    const responses: any = await updateProfile(values);
    setLoading(false);
    return responses;
  };
  const updateAdminProfile = async (values: TAdminUpdate) => {
    setLoading(true);
    const responses: any = await updateAdmin(values);
    setLoading(false);
    return responses;
  };
  const getUserProfile = async () => {
    setLoading(true);
    const responses: any = await getProfile();
    setLoading(false);
    return responses;
  };
  const updateUserCard = async (values: TCardUpdate) => {
    setLoading(true);
    const responses: any = await updateCard(values);
    setLoading(false);
    return responses;
  };
  const buyPackageWithCoinPayment = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await coinPayment(values);
    setLoading(false);
    return responses;
  };
  const buyPackageWithCard = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await cardPayment(values);
    setLoading(false);
    return responses;
  };
  const buyPackageOffline = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await offlinePayment(values);
    setLoading(false);
    return responses;
  };
  const getUserWallet = async () => {
    setLoading(true);
    const responses: any = await getWallet();
    setLoading(false);
    return responses;
  };
  const configurePackagePaypal = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await configurePaypalPayment(values);
    setLoading(false);
    return responses;
  };
  const buyPackageWithPaypal = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await paypalPayment(values);
    setLoading(false);
    return responses;
  };
  const buySecondPackageWithPaypal = async (values: TCoinPayment) => {
    setLoading(true);
    const responses: any = await paypalSecondPayment(values);
    setLoading(false);
    return responses;
  };
  const validatePackageOnSuccess = async (txn_id: string) => {
    setLoading(true);
    const responses: any = await validatePackage(txn_id);
    setLoading(false);
    return responses;
  };
  const validatePaypalPackageOnSuccess = async (token: string) => {
    setLoading(true);
    const responses: any = await validatePaypalPackage(token);
    setLoading(false);
    return responses;
  };
  const getCompanyInvoices = async () => {
    setLoading(true);
    const responses: any = await getInvoices();
    setLoading(false);
    return responses;
  };
  const getUserDashboardReport = async () => {
    setLoading(true);
    const responses: any = await getDashboardReport();
    setLoading(false);
    return responses;
  };
  const resendUserEmail = async (email: { email: string }) => {
    setLoading(true);
    const responses: any = await resendEmail(email);
    setLoading(false);
    return responses;
  };
  const sendUserResetPasswordMail = async (email: { email: string }) => {
    setLoading(true);
    const responses: any = await sendResetPasswordEmail(email);
    setLoading(false);
    return responses;
  };
  const resetUserPAssword = async (obj: {
    email: string;
    password: string;
    confirm_password: string;
  }) => {
    setLoading(true);
    const responses: any = await resetPassword(obj);
    setLoading(false);
    return responses;
  };
  const createCampaignInteraction = async (obj: any) => {
    setLoading(true);
    const responses: any = await createInteraction(obj);
    setLoading(false);
    return responses;
  };
  const createUserCampaignTask = async (obj: any, id: number, companyid: number) => {
    setLoading(true);
    const responses: any = await createCampaignTask(obj, id, companyid);
    setLoading(false);
    return responses;
  };
  const getUserCalendarData = async (
    adminId: number,
    month: number,
    year: number
  ) => {
    setLoading(true);
    const responses: any = await getCalendarData(adminId, month, year);
    setLoading(false);
    return responses;
  };
  const getAllUserCalendarData = async () => {
    setLoading(true);
    const responses: any = await getAllCalendarData();
    setLoading(false);
    return responses;
  };

  return {
    loading,
    setLoading,
    createSearchTask,
    updateUserProfile,
    updateUserCard,
    getUserProfile,
    buyPackageWithCoinPayment,
    buyPackageWithCard,
    buyPackageOffline,
    getUserWallet,
    configurePackagePaypal,
    buyPackageWithPaypal,
    buySecondPackageWithPaypal,
    validatePackageOnSuccess,
    validatePaypalPackageOnSuccess,
    getCompanyInvoices,
    updateAdminProfile,
    getUserDashboardReport,
    resendUserEmail,
    sendUserResetPasswordMail,
    resetUserPAssword,
    createCampaignInteraction,
    createUserCampaignTask,
    getUserCalendarData,
    getAllUserCalendarData,
  };
};

export default useFetchMethods;
