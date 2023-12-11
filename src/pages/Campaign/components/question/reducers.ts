export interface createTaskState {
  url: string;
  ask: string;
  option1: string;
  option2: string;
  option3: string;
  answer: string;
  interaction_name: string;
  showAdded: boolean;
}

export type CreateTaskAction =
  | { type: "url"; payload: string }
  | { type: "ask"; payload: string }
  | { type: "option1"; payload: string }
  | { type: "option2"; payload: string }
  | { type: "option3"; payload: string }
  | { type: "answer"; payload: string }
  | { type: "name"; payload: string }
  | { type: "showAdded"; payload: boolean };

export const createTaskReducer = (
  state: createTaskState,
  actions: CreateTaskAction
): createTaskState => {
  switch (actions.type) {
    case "url":
      return { ...state, url: actions.payload };
    case "ask":
      return { ...state, ask: actions.payload };
    case "option1":
      return { ...state, option1: actions.payload };
    case "option2":
      return { ...state, option2: actions.payload };
    case "option3":
      return { ...state, option3: actions.payload };
    case "answer":
      return { ...state, answer: actions.payload };
    case "name":
      return { ...state, interaction_name: actions.payload };
    case "showAdded":
      return { ...state, showAdded: actions.payload };

    default:
      return state;
  }
};
