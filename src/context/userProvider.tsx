import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { GetUser, SaveUser } from "../hook/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import { ERoutes } from "../types/enum";
import { TuserDetails } from "../types/app.types";
import { useLang } from "../hook/useLang";
import { TUserProfileIntailValue } from "../constants/data";

type Props = {
  children: ReactNode;
};

const userContext = createContext<TuserDetails>(TUserProfileIntailValue);

export const UserProvider = ({ children }: Props) => {
  const [userProfile, setUserProfile] = useState<TuserDetails>(
    TUserProfileIntailValue
  );
  const location = useLocation();
  const navigate = useNavigate();

  const { setDefaultLang } = useLang();

  const checkUser = async () => {
    const data = await GetUser();

    if (!data) {
      navigate(ERoutes.Login);
    } else {
      console.log(data);
      console.log(data?.admin?.email_verified_at);
      if (!data?.admin?.email_verified_at) {
        navigate(ERoutes.VerifyEmail);
      }
      setUserProfile({
        ...data,
      });
    }
  };

  const updateUserDetails = (values: Partial<TuserDetails>) => {
    SaveUser({
      ...userProfile,
      ...values,
    });
    setUserProfile({
      ...userProfile,
      ...values,
    });
  };

  useEffect(() => {
    checkUser();
    setDefaultLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <userContext.Provider
      value={{ ...userProfile, updateUser: updateUserDetails }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserStore = () => useContext(userContext);
