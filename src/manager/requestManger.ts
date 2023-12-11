import { fetchInstance } from "../api/fetch";
import { requestsUrl } from "../api/requestsUrl";
import {
  InviteAdminType,
  TAdminUpdate,
  TCardUpdate,
  TCoinPayment,
  TProfileUpdate,
  TSearchTaskType,
  singletaskData,
} from "../types/app.types";
import { curry } from "../utils/helperr";

async function postManger(url: string, data: any) {
  return await fetchInstance.post(url, data);
}

async function putManger(url: string, data: any) {
  return await fetchInstance.put(url, data);
}

async function getManger(url: string) {
  return await fetchInstance.get(url);
}
const useRequestManager = () => {
  const register = async (
    email: string,
    password: string,
    company_name: string,
    confirmPassword: string,
    firstname: string,
    lastname: string
  ) => {
    return await curry(postManger)(requestsUrl.registerApi)({
      email,
      password,
      company_name,
      confirmPassword,
      firstname,
      lastname,
    });
  };

  const login = async (email: string, password: string) => {
    return await curry(postManger)(requestsUrl.loginApi)({
      email,
      password,
    });
  };
  // const updateProfile = async (email: string, password: string) => {
  //   return await curry(putManger)(requestsUrl.profileUpdateApi)({
  //     email,
  //     password,
  //   });
  // };
  const createTask = async (obj: TSearchTaskType) => {
    return await curry(postManger)(requestsUrl.createTaskApi)(obj);
  };

  const updateProfile = async (obj: TProfileUpdate) => {
    return await curry(putManger)(requestsUrl.profileUpdateApi)(obj);
  };
  const updateProfilePic = async (file: string) => {
    return await curry(postManger)(requestsUrl.updateprofilePic)(file);
  };
  const updateCompanyIcon = async (file: any) => {
    return await curry(postManger)(requestsUrl.updateCompanyIcon)(file);
  };

  const updateCard = async (obj: TCardUpdate) => {
    return await curry(putManger)(requestsUrl.profileUpdateApi)(obj);
  };

  const getProfile = async () => {
    return await getManger(requestsUrl.profileUpdateApi);
  };

  // const createCampaignTask = async (obj: any) => {
  //   return await curry(postManger)(requestsUrl.createCampaign)(obj);
  // };

  const getCalendarData = async (
    adminId: number,
    month: number,
    year: number
  ) => {
    return await getManger(
      `${requestsUrl.getCalendarData}?admin_id=${adminId}&month=${month}&year=${year}`
    );
  };

  const getTasks = async (
    pageNumber: number = 1,
    size: string = "",
    task_type?: string | null,
    status?: string | null
  ) => {
    return await getManger(
      `${requestsUrl.getTasks}?page=${pageNumber}${size ? "&size=all" : ""}${
        task_type ? `&task_type=${task_type}` : ""
      }${status ? `&status=${status}` : ""} `
    );
  };

  const updateTask = async (id: number, obj: Partial<singletaskData>) => {
    return await curry(putManger)(`${requestsUrl.updateTaskApi}/${id}`)(obj);
  };

  const coinPayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.coinPaymentApi)(obj);
  };
  const cardPayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.cardPaymentApi)(obj);
  };
  const offlinePayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.offlinePayment)(obj);
  };

  const getWallet = async () => {
    return await getManger(requestsUrl.walletApi);
  };
  const configurePaypalPayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.configurePaypalPaymentApi)(obj);
  };
  const paypalPayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.paypalPaymentApi)(obj);
  };
  const paypalSecondPayment = async (obj: TCoinPayment) => {
    return await curry(postManger)(requestsUrl.paypalSecondPaymentApi)(obj);
  };
  const validatePackage = async (txn_id: string) => {
    return await getManger(`${requestsUrl.validatePackageApi}/${txn_id}`);
  };
  const validatePaypalPackage = async (token: string) => {
    return await getManger(
      `${requestsUrl.validatePaypalPackageApi}?token=${token}`
    );
  };
  const getInvoices = async () => {
    return await getManger(`${requestsUrl.getInvoiceApi}`);
  };
  const updateAdmin = async (obj: TAdminUpdate) => {
    return await curry(putManger)(requestsUrl.updateAdmin)(obj);
  };

  const getTaskSummary = async (taskId: number) => {
    return await getManger(
      `${requestsUrl.getTaskSummaryById}/${taskId}?page=1`
    );
  };
  const getDashboardReport = async () => {
    return await getManger(`${requestsUrl.getReport}`);
  };
  const resendEmail = async (obj: { email: string }) => {
    return await curry(postManger)(requestsUrl.resendVerifyEmail)(obj);
  };
  const sendResetPasswordEmail = async (obj: { email: string }) => {
    return await curry(postManger)(requestsUrl.sendResetPasswordEmail)(obj);
  };
  const resetPassword = async (obj: {
    email: string;
    password: string;
    confirm_password: string;
  }) => {
    return await curry(postManger)(requestsUrl.resetPassword)(obj);
  };

  const subadminSelection = async (query: string) => {
    return await getManger(requestsUrl.selectCompany + query);
  }
  const createInteraction = async (obj: any) => {
    return await curry(postManger)(requestsUrl.createInteraction)(obj);
  };
  const createCampaignTask = async (obj: any, id:number, companyid: number) => {
    return await curry(postManger)(`${requestsUrl.createCampaign}?admin_id=${id}&company_id=${companyid}`)(obj);

  };

  const inviteAdmin = async (obj: InviteAdminType) => {
    return await curry(postManger)(requestsUrl.inviteAdmin)(obj);
  };
  const getAllCalendarData = async () => {
    return await getManger(`${requestsUrl.getAllCalendarData}`);
  };

  const getAllManagers = async () => {
    return await getManger(requestsUrl.getManagers);
  };
  const assignAdmin = async (query: string) => {
    return await getManger(requestsUrl.assignManagers + query);
  };

  return {
    register,
    login,
    createTask,
    updateProfile,
    updateCard,
    getProfile,
    updateProfilePic,
    updateCompanyIcon,
    getTasks,
    coinPayment,
    cardPayment,
    offlinePayment,
    getWallet,
    configurePaypalPayment,
    paypalSecondPayment,
    paypalPayment,
    updateTask,
    validatePackage,
    validatePaypalPackage,
    getInvoices,
    updateAdmin,
    getTaskSummary,
    getDashboardReport,
    resendEmail,
    sendResetPasswordEmail,
    resetPassword,
    subadminSelection,
    inviteAdmin,
    createInteraction,
    createCampaignTask,
    getCalendarData,
    getAllManagers,
    assignAdmin,
    getAllCalendarData,
  };
};

export default useRequestManager;