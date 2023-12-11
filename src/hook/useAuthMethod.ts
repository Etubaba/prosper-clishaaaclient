import { ClearUser, SaveUser } from "./useUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequestManager from "../manager/requestManger";

const useAuthMethods = () => {
  const { register, login, subadminSelection } = useRequestManager();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [subAdminCompany, setSubAdminCompany] = useState<any[]>([]);

  const logout = async () => {
    ClearUser();
    navigate("/login");
  };

  const selectCompany = async (url: string) => {
    setLoading(true);
    const response = await subadminSelection(url);
    if (response && response.status) {
      setLoading(false);
      updateUserAndRedirect(response.data, "login");
      setSubAdminCompany([]);
    }
  };

  const signIn = async (values: { email: string; password: string }) => {
    setLoading(true);

    const responses: any = await login(values.email, values.password);
    if (responses && responses.status) {
      const { data } = responses;

      if (
        Array.isArray(data.data.company) ||
        data.data.message === "Please Select a company"
      ) {
        localStorage.setItem("admin_id", data.data?.admin?.id);

        setSubAdminCompany(data.data.company);
      } else {
        updateUserAndRedirect(responses.data, "login");
      }
    }

    setLoading(false);
  };

  const updateUserAndRedirect = (tokenData: any, pageType: string) => {
    const data = {
      admin: tokenData.data.admin,
      company: tokenData.data.company,
      accessToken: tokenData.data.accessToken,
    };
    SaveUser(data);
    localStorage.setItem("user_email", data?.admin?.email);
    const isUserVerified = data?.admin?.email_verified_at ? true : false;
    // const goTo = pageType === "register" ? "/verify-email" : "/dashboard";
    // navigate(goTo, { state: { isUserVerified: isUserVerified } });
    navigate("/", { state: { isUserVerified: isUserVerified } });
  };

  const signUp = async (values: {
    email: string;
    password: string;
    company_name: string;
    confirm: string;
    firstname: string;
    lastname: string;
  }) => {
    setLoading(true);
    const data = await register(
      values.email,
      values.password,
      values.company_name,
      values.confirm,
      values.firstname,
      values.lastname
    );

    if (data && data.status) {
      const signInData = await login(values.email, values.password);
      updateUserAndRedirect(signInData?.data, "register");
    }

    setLoading(false);
  };

  return {
    loading,
    setLoading,
    logout,
    signIn,
    signUp,
    selectCompany,
    subAdminCompany,
  };
};

export default useAuthMethods;
