import { TData, TDataAction } from "../types/app.types";

export type TformConfig = {
  isRecurring: boolean;
  showMonth: boolean;
  monthlyRecurring: string[];
};

export function formConfigReducer(
  state: TformConfig,
  action: TDataAction
): TformConfig {
  if (action.type === "toggleisRecurring") {
    return {
      ...state,
      isRecurring: action.payload,
    };
  }
  if (action.type === "toggleShowMonth") {
    return {
      ...state,
      showMonth: action.payload,
    };
  }
  if (action.type === "monthlyRecurring") {
    return {
      ...state,
      monthlyRecurring: action.payload,
    };
  }

  return state;
}

export function appProviderReducer(state: TData, action: TDataAction): TData {
  if (action.type === "taskCard") {
    return {
      ...state,
      vistcarddata: { ...state.vistcarddata, ...action.payload },
    };
  }
  if (action.type === "setSingleTaskData") {
    return {
      ...state,
      singletaskData: { ...state.singletaskData, ...action.payload },
    };
  }
  if (action.type === "toggleModal") {
    return {
      ...state,
      modalState: { state: action.payload },
    };
  }
  if (action.type === "getUserWallet") {
    return {
      ...state,
      userBalance: action.payload.userBalance,
    };
  }

  if (action.type === "updateCampaignCard") {
    return {
      ...state,
      campaignCards: [...state.campaignCards, action.payload],
    };
  }
  if (action.type === "getUserInvoice") {
    return {
      ...state,
      userInvoices: action.payload.userInvoices,
    };
  }
  if (action.type === "getUserPayInfo") {
    return {
      ...state,
      userPayInfo: action.payload.userPayInfo,
    };
  }
  if (action.type === "setEditTaskData") {
    return {
      ...state,
      edittaskData: { ...state.edittaskData, ...action.payload },
    };
  }

  return state;
}
