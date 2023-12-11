import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface TInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;

  className?: string;
}

export type TBtnProps = {
  children: ReactNode;
  isDark?: boolean;
  className?: string;
};

export type TSelect = {
  labelText: string;
  selectText: string[];
};
export type TCheckBox = {
  labelText: string;
};
export type TFilterSection = {
  setOpen: (value: boolean) => void;
};
export type TLoginBox = {
  children: ReactNode;
};

export type TFilterWrapper = {
  changeFilter: (value: string) => void;
  activeFilter: string;
  dropDownTextHolder: string;
};

export type TCampignCard = {
  answer: string;
  daily_clicks: number;
  duration?: number;
  duration_in_days: number;
  is_fill_form?: boolean;
  interaction: string;
  is_question?: boolean;
  is_todo?: boolean;
  is_video?: boolean;
  jorney_type: string;
  language: string;
  url: string;
  web_site_url: string;
  weekly?: string;
  which_type: string;
  addquestion?: {
    question: string;
    answer_options: string[];
    answer: string;
  }[];
  questions?: {
    question: string;
    answer_options: string[];
    answer: string;
  };
};

export type InputProps = {
  error?: boolean;
  type?: string;
  placeholder?: string;
  style?: string;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export type InteractionType = {
  interaction_name: string;
  current_url: string;
  question: string;
  answer: string;
  option1: string;
  option2: string;
  option3: string;
};
