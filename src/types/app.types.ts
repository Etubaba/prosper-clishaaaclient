import {
  ChangeEventHandler,
  Dispatch,
  JSXElementConstructor,
  ReactNode,
} from "react";
import { TCampignCard } from "./components";

export interface TRoute {
  path: string;
  element: JSXElementConstructor<any>;
  loader?: any;
}

export interface IjobArray {
  companyLogo: string;
  companyName: string;
  jobType: string;
  amount: string;
  location: string;
  jobTitle: string;
  jobDescription: string;
}

export interface IDashboardSubmenu {
  title: string;
  amount: string;
  btnText?: string;
}
export interface ISubmenuBox {
  cardTitle: string;
  mainAmount: string;
  subAmount: string;
  percentage?: string;
  link?: string;
  name?: string;
}

export interface IcampaignBoxData {
  id: number;
  text: string;
}

export type TAuthProps = {
  children: ReactNode;
};
export interface IUserAuth {
  logout: () => Promise<void>;
  signIn: (values: { email: string; password: string }) => Promise<any>;
  register: (values: { email: string; password: string }) => Promise<any>;
  authUserToken: string | null;
  // resetUser: () => Promise<void>;
}
export type TUserProperitesAction = {
  type: string;
  payload?: any;
};

export interface IErrors {
  value: string;
  msg: string;
  param: string;
  location: string;
}

export interface IErrorResponse {
  status: boolean;
  errors: IErrors[];
}

export type TComapnyDetails = {
  id: number;
  adminId: number;
  companyId: number;
  photo: null | string;
  name: string;
  duration: number;
  bonus: number;
  value: number;
  used: number;
  status: number;
  eligibility: number;
  foreground: string;
  updatedAt: string;
  createdAt: string;
  description: null | string;
  category: null | string;
  icon: null | string;
  background: null | string;
  address_line: null | string;
  address_line_two: null | string;
  zip: null | string;
  city: null | string;
  country: null | string;
  vat_number: null | number;
  phone_number: null | number;
  card_colors: {
    accent_color: string;
  } | null;
};
export type TuserComapnyDetails = {
  company: TComapnyDetails;
};
export type TuserAdminDetails = {
  admin: TAdminDetails;
};

export type TAdminDetails = {
  role: string;
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  updatedAt: string;
  createdAt: string;
  phone: null;
  email_verified_at: null;
};
export type TuserDetails = {
  accessToken: null | string;
  admin: TAdminDetails;
  company: TComapnyDetails;
  updateUser: (values: Partial<TuserDetails>) => void;
};

export type TSearchTaskType = {
  points?: number;
  bonus_points?: number;
  task_type: string;
  url: string;
  track_domain: boolean;
  hours: number;
  start: string;
  recurring?: number;
  daily_clicks: number;
  days_duration: number;
  visitors_referrer: string[];
  weekly: any;
  monthly: any;
  published: boolean;
  is_adult: boolean;
  random_click: boolean;
  countries: string[] | null;
  total_interactions: number;
  order_months: [];
  google_search?: {
    engine: string;
    search_phrase: string;
    title: string;
    duration?: string | number;
    duration_to?: string | number;
    country_specific?: string[];
    country_engine?: string[];
    advan_search?: boolean;
  };
  advanced_search?: string;
};

export type TCountries = {
  country: string;
  iso: string;
};
export type TDays = string[];

export type TCard = {
  loading?: boolean;
  boxColor: string | null;
  foreColor: string;
  logo: string | null;
  text: string;
  lineColor: string;
  cardType: "search" | "visit";
  logoPosition?: "left" | "center" | "right" | "between";
  logoWidth?: "long" | "normal";
  interaction_amount: number;
  url: string;
  duration: number;
  task_code: string;
  cardColors: string;
  time?: number;
};

export type TCardData = {
  interaction_amount: number;
  url: string;
  duration: number;
  task_code: string;
};

export type TDataAction = {
  type: string;
  payload?: any;
};

export type TData = {
  vistcarddata: TCard;
  setData: Dispatch<TDataAction>;
  getUserBalance: () => void;
  singletaskData: singletaskData;
  edittaskData: singletaskData;
  modalState: {
    state: boolean;
  };
  userBalance: number;
  campaignCards: TCampignCard[];
  userInvoices: {
    current_plan: {
      id: number;
      companyId: number;
      txn_id: number;
      package_name: string;
      payment_method: string;
      currency: string;
      amount: number;
      interactions: number;
      vat: number;
      status: number;
      details: string;
      createdAt: string;
      updatedAt: string;
    };
    invoices: TPackageInvoice[];
  };
  getUserInvoice: () => void;
  userPayInfo: TPackageInvoice;
};

export type TPackageInvoice = {
  id: number;
  companyId: number;
  txn_id: number;
  package_name: string;
  payment_method: string;
  currency: string;
  amount: number;
  interactions: number;
  vat: number;
  status: number;
  details: string;
  createdAt: string;
  updatedAt: string;
};

export type TQuestion = {
  question: string;
  answer_options: string[];
  answer: string;
};

export type TQuestions = TQuestion[];
export type TProfileUpdate = {
  name?: string;
  description?: string;
  category?: string;
  background?: string;
  foreground?: string;
  address_line?: string;
  address_line_two?: string;
  country?: string;
  city?: string;
  zip?: string;
  vat_number?: string;
  phone_number?: any;
  prefix?: string;
  icon?: string;
};
export type TAdminUpdate = {
  role?: string;
  id?: number;
  name?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: null;
};

export type TUpdateTask = {
  status: number;
};
export type TCardUpdate = {
  background?: string | null;
  foreground?: string | null;
};
export type TMonthInYear = {
  month: string;
  days: number;
};

export type TMainColors = {
  foreground: string;
  background: string | null;
  card_colors: { accent_color: string | undefined };
};

export type TSetColors = {
  cardForeColor: string;
  accentColor: string | undefined;

  changeCardColor: (valueType: Partial<TMainColors>) => void;
  imgLoading: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  showSaveButton: boolean;
  loading: boolean;
  updateCard: () => void;
};

export type TCoinPayment = {
  package_name: string;
  amount: number;
  interactions: number;
  vat: number;
  currency: string;
};
export type TNavigationDropdownItem = {
  label: string;
  key: string;
  icon: ReactNode;
  lang: string;
};

export type singletaskData = {
  id: number;
  order_id: string;
  created_at: string;
  done_at?: string;
  type: string;
  interaction: number;
  country: string[] | string;
  url: string;
  keyword: string[] | string;
  status: number;
  status_percentage?: string;
  auto_renew?: string;
  success: string;
  ip_address?: string;
  published?: boolean;
  status_a?: string;
  code?: string;
  daily_clicks?: number;
  google_search?: any;
  website_click?: {
    duration: number;
    duration_to: number;
  };
};
export type Ttask = {
  id: number;
  adminId: number;
  task_code: string;
  task_type: string;
  points: number;
  bonus_points: number;
  url: string;
  website_click: { duration: "900"; duration_to: "6000" };
  google_search: null;
  journey: null;
  countries: null;
  tokenId: number;
  interactionId: null;
  orderId: null;
  track_domain: false;
  status: number;
  days: number;
  start_at: null;
  end_at: null;
  period_start_at: string;
  period_end_at: string;
  weekly: string[];
  monthly: string[];
  recurring: false;
  archive: false;
  published: true;
  createdAt: string;
  updatedAt: string;
  token: {
    id: number;
    adminId: number;
    companyId: number;
    name: string;
    photo: string;
    duration: number;
    description: null;
    category: null;
    bonus: number;
    value: number;
    used: number;
    status: number;
    eligibility: number;
    icon: null;
    background: string;
    foreground: string;
    address_line: null;
    address_line_two: null;
    zip: null;
    city: null;
    country: null;
    vat_number: null;
    phone_number: null;
    createdAt: string;
    updatedAt: string;
  };
  interaction: null;
  admin: {
    id: number;
    name: string;
    email: string;
    phone: null;
    role: string;
    email_verified_at: null;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
};
export type TtaskData = {
  totalItems: number;
  tasks: Ttask[];
  totalPages: number;
  currentPage: number;
};

export type TQuery = {
  status: number;
  published: boolean;
  all: boolean;
  type: string;
  createdAt: string;
};

export type TTable = {
  data: singletaskData[] | null;
  gotoSingleOrder: (valueType: boolean) => void;
  updateTasksData: (value: singletaskData) => void;
  tableIsLoading: boolean;
  rawOrderData: any;
};
export type STable = {
  data: singletaskData[] | null;
  gotoSingleOrder: (valueType: boolean) => void;
  rawOrderData: any;
  setViewID: React.Dispatch<React.SetStateAction<any>>;
  tableIsLoading?: boolean;
};

export type TPackageOrder = {
  paymentType: "paypal" | "bank" | "coin" | "offline";
  packageName: string;
  Interaction: number;
  price: number;
  vat: number;
  children: ReactNode;
};

export type TBuyPackage = {
  paymentType: string;
};

export type InviteAdminType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  company_id: number;
};
