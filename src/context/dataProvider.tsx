import {
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import { TData, TDataAction } from "../types/app.types";
import useFetchMethods from "../hook/useFetchMethod";
import { appProviderReducer } from "../manager/reducerManger";
import { TDataAppProviderIntailValue } from "../constants/data";

type Props = {
  children: ReactNode;
};

const dataContext = createContext<TData>(TDataAppProviderIntailValue);

export const DataProvider = ({ children }: Props) => {
  const [data, setData] = useReducer<Reducer<TData, TDataAction>>(
    appProviderReducer,
    TDataAppProviderIntailValue
  );
  const { getUserWallet, getCompanyInvoices } = useFetchMethods();

  const getUserBalance = async () => {
    try {
      const userWallet = await getUserWallet();

      setData({
        type: "getUserWallet",
        payload: { userBalance: userWallet.data.data.wallet.balance },
      });
      setData({
        type: "getUserPayInfo",
        payload: { userPayInfo: userWallet.data.data.current_plan },
      });
    } catch (e) {}
  };

  const getUserInvoice = async () => {
    try {
      const userInvoices = await getCompanyInvoices();
      setData({
        type: "getUserInvoice",
        payload: { userInvoices: userInvoices.data.data },
      });
    } catch (e) {}
  };

  return (
    <dataContext.Provider
      value={{ ...data, setData, getUserBalance, getUserInvoice }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useDataStore = () => useContext(dataContext);
