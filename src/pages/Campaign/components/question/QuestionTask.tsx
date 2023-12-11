import { useForm } from "antd/es/form/Form";
import React, { useReducer, useState } from "react";
import { useUserStore } from "../../../../context/userProvider";

import { GreyPlusSvg, InfoSvg, RedMinusSvg } from "../../../../assets/svg/svg";
import { Button, Form, Select, Tooltip } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { Option } from "antd/es/mentions";
import Input from "./Input";
import { createTaskReducer } from "./reducers";
import QuestionRead from "./QuestionRead";
import { InteractionType } from "../../../../types/components";

const QuestionTask = ({
  url,
  campInteractions,
  setCampInteractions,
  loading,
}: {
  url: string;
  campInteractions: any;
  setCampInteractions: any;
  loading: boolean;
}) => {
  const [numberOfOptions, setNumberOfOptions] = useState<number>(3);

  const initials = {
    ask: "",
    option1: "",
    option2: "",
    option3: "",
    url: "",
    answer: "",
    interaction_name: "",
    showAdded: false,
  };

  const [state, dispatch] = useReducer(createTaskReducer, initials);

  const [form] = useForm();
  const { company } = useUserStore();
  const onFinish = (value: any) => {};

  const [optionArray, setOptionArray] = useState<number[]>([1, 2, 3]);
  const subtractOption = () => {
    if (optionArray.length > 2) {
      let oldArr = optionArray;
      oldArr.pop();
      setOptionArray([...oldArr]);
    }
  };

  //   interaction_name: values.name,
  //   interaction_id: campInteractions.length + 1,
  //   question: values.question,
  //   current_url: values.web_site_url,
  //   interaction_type: values.interaction,
  //   option1: values.option1,
  //   option2: values.option2,
  //   option3: values.option3,
  //   answer: values.answer,
  //   token: company.companyId,
  // };

  const onSubmit = () => {
    //  let oldInteractions = campInteractions;
    const valueObj = {
      interaction_name: state.interaction_name,
      current_url: url,
      question: state.ask,
      answer: state.answer,
      token: company.companyId,
      option1: state.option1,
      option2: state.option2,
      option3: state.option3,
    };
    // oldInteractions.push(valueObj);

    setCampInteractions([...campInteractions, valueObj]);

    dispatch({ type: "showAdded", payload: false });
    resetfields();
  };
  //   const addOption = () => {
  //     if (optionArray.length < 5) {
  //       let oldArr = optionArray;
  //       oldArr.push(optionArray.length + 1);
  //       setOptionArray([...oldArr]);
  //     }
  //   };

  //   const handleNumber = (type: string) => {
  //     if (type === "add") {
  //       setNumberOfOptions((state) => state + 1);
  //     } else {
  //       setNumberOfOptions((state) => state - 1);
  //     }
  //   };
  const answerArrayfn = () => {
    const answerArray: any = [];
    for (let i = 0; i < optionArray.length; i++) {
      answerArray.push({
        name: `Option ${i + 1}`,
        value: `option${i + 1}`,
      });
    }
    return answerArray;
  };

  function resetfields() {
    dispatch({ type: "name", payload: "" });
    dispatch({ type: "answer", payload: "" });
    dispatch({ type: "ask", payload: "" });
    dispatch({ type: "option1", payload: "" });
    dispatch({ type: "option2", payload: "" });
    dispatch({ type: "option3", payload: "" });
    dispatch({ type: "answer", payload: "" });
  }

  const addMore = () => {
    //  let oldInteractions = campInteractions;
    const valueObj = {
      interaction_name: state.interaction_name,
      current_url: url,
      question: state.ask,
      answer: state.answer,
      token: company.companyId,
      option1: state.option1,
      option2: state.option2,
      option3: state.option3,
    };
    // oldInteractions.push(valueObj);
    setCampInteractions([...campInteractions, valueObj]);

    dispatch({ type: "showAdded", payload: true });
    resetfields();

    //setShowAdded(true)
  };

  return (
    <div className="mt-4">
      {/* <Form.Item
        name='web_site_url'
        label='User is on website URL / Domain'
        rules={[{ required: true }]}
      >
        <Input size='large' placeholder='domain name' />
      </Form.Item> */}

      {/* {questionValue && ( */}
      <div className="mt-5">
        {state.showAdded && (
          <div>
            {campInteractions.map((inter: InteractionType, idx: number) => (
              <QuestionRead key={idx} inter={inter} idx={idx} />
            ))}
          </div>
        )}

        <>
          <p className="text-[#1B4C84] font-bold mb-[10px]">
            Question Task {state.showAdded ? campInteractions.length + 1 : 1}
          </p>
          <div className="inputField w-full flex flex-row items-center gap-2">
            <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
              <>
                <p className="text-[#1B4C84]">
                  User is on website URL / Domain
                </p>
                <Tooltip className="ml-3 cursor-pointer" title={""}>
                  <span>
                    <InfoSvg />
                  </span>
                </Tooltip>
              </>
            </div>

            <div className="w-full">
              <Input
                defaultValue={url}
                onChange={(e) =>
                  dispatch({ type: "url", payload: e.target.value })
                }
              />
            </div>
          </div>
          {/* <DefaultOptionQuestion /> */}
          <div className=" flex flex-col mb-2 gap-[6px] my-[6px]">
            <div className="inputField w-full flex flex-row items-center gap-2">
              <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                <>
                  <p className="text-[#1B4C84]">Interaction Name</p>
                  <Tooltip
                    className="ml-3 cursor-pointer"
                    title={"Input the interaction name"}
                  >
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </>
              </div>

              <div className="w-full">
                <Input
                  value={state.interaction_name}
                  onChange={(e) =>
                    dispatch({ type: "name", payload: e.target.value })
                  }
                  // className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
                />
              </div>
            </div>

            <div className="inputField w-full flex flex-row items-center gap-2">
              <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                <>
                  <p className="text-[#1B4C84]">Ask</p>
                  <Tooltip
                    className="ml-3 cursor-pointer"
                    title={"Input the question"}
                  >
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </>
              </div>

              <div className="w-full">
                <Input
                  value={state.ask}
                  onChange={(e) =>
                    dispatch({ type: "ask", payload: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="inputField w-full flex flex-row items-center gap-2 relative">
              <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                <>
                  <p className="text-[#1B4C84]">Option 1</p>
                  <Tooltip className="ml-3 cursor-pointer" title={`Option 1`}>
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </>
              </div>
              <div className="w-full">
                <Input
                  value={state.option1}
                  onChange={(e) =>
                    dispatch({ type: "option1", payload: e.target.value })
                  }
                  // className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
                />
              </div>
              <div className="absolute left-[101%] top-0 bottom-0 m-auto h-fit w-fit flex flex-row items-center justify-start gap-2">
                {/* {index > 0 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={subtractOption}
                >
                  <RedMinusSvg />
                </div>
              )} */}
                {/* {index > 1 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={addOption}
                >
                  <GreyPlusSvg />
                </div>
              )} */}
              </div>
            </div>
            <div className="inputField w-full flex flex-row items-center gap-2 relative">
              <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                <>
                  <p className="text-[#1B4C84]">Option 2</p>
                  <Tooltip className="ml-3 cursor-pointer" title={`Option 2`}>
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </>
              </div>
              <div className="w-full">
                <Input
                  value={state.option2}
                  onChange={(e) =>
                    dispatch({ type: "option2", payload: e.target.value })
                  }
                  // className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
                />
              </div>
              <div className="absolute left-[101%] top-0 bottom-0 m-auto h-fit w-fit flex flex-row items-center justify-start gap-2">
                {/* {index > 0 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={subtractOption}
                >
                  <RedMinusSvg />
                </div>
              )} */}
                {/* {index > 1 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={addOption}
                >
                  <GreyPlusSvg />
                </div>
              )} */}
              </div>
            </div>
            <div className="inputField w-full flex flex-row items-center gap-2 relative">
              <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                <>
                  <p className="text-[#1B4C84]">Option 3</p>
                  <Tooltip className="ml-3 cursor-pointer" title={`Option 3`}>
                    <span>
                      <InfoSvg />
                    </span>
                  </Tooltip>
                </>
              </div>
              <div className="w-full">
                <Input
                  value={state.option3}
                  onChange={(e) =>
                    dispatch({ type: "option3", payload: e.target.value })
                  }
                  // className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
                />
              </div>
              <div className="absolute left-[101%] top-0 bottom-0 m-auto h-fit w-fit flex flex-row items-center justify-start gap-2">
                {/* {index > 0 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={subtractOption}
                >
                  <RedMinusSvg />
                </div>
              )} */}
                {/* {index > 1 && index === optionArray.length - 1 && (
                <div
                  className="h-[16px] w-[16px] cursor-pointer"
                  onClick={addOption}
                >
                  <GreyPlusSvg />
                </div>
              )} */}
              </div>
            </div>

            {/* {optionArray.map((option, index) => {
            return (
              <div
                key={index}
                className="inputField w-full flex flex-row items-center gap-2 relative"
              >
                <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                  <>
                    <p className="text-[#1B4C84]">Option {option}</p>
                    <Tooltip
                      className="ml-3 cursor-pointer"
                      title={`Option ${option}`}
                    >
                      <span>
                        <InfoSvg />
                      </span>
                    </Tooltip>
                  </>
                </div>
                <div className="w-full">
                  <Input
                  // className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
                  />
                </div>
                <div className="absolute left-[101%] top-0 bottom-0 m-auto h-fit w-fit flex flex-row items-center justify-start gap-2">
                  {index > 0 && index === optionArray.length - 1 && (
                    <div
                      className="h-[16px] w-[16px] cursor-pointer"
                      onClick={subtractOption}
                    >
                      <RedMinusSvg />
                    </div>
                  )}
                  {index > 1 && index === optionArray.length - 1 && (
                    <div
                      className="h-[16px] w-[16px] cursor-pointer"
                      onClick={addOption}
                    >
                      <GreyPlusSvg />
                    </div>
                  )}
                </div>
              </div>
            );
          })} */}

            <div className=" relative ">
              {/* <AddMoreOptionFrom handleNumber={handleNumber} /> */}
              <div className="inputField w-full flex flex-row items-center gap-2">
                <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
                  <>
                    <p className="text-[#1B4C84]">Answer</p>
                    <Tooltip className="ml-3 cursor-pointer" title={"Answer"}>
                      <span>
                        <InfoSvg />
                      </span>
                    </Tooltip>
                  </>
                </div>

                <Form.Item
                  name={"answer"}
                  className="w-full"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select
                    // value={state.answer}
                    onChange={(value: any) =>
                      dispatch({ type: "answer", payload: value })
                    }
                    className="min-w-[200px]"
                    suffixIcon={
                      <IoIosArrowDown className=" text-yellow_color text-lg" />
                    }
                    placeholder={"Answer"}
                    allowClear
                  >
                    {answerArrayfn().map((text: any, i: number) => (
                      <Select.Option key={i} value={text.value}>
                        {text.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
              <div className="my-4 "></div>
            </div>
          </div>
        </>

        {/* button starts from here  */}
        <div className="flex flex-row gap-2">
          <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]"></div>
          <div className="flex flex-row justify-between flex-1">
            {/* <Button
              onClick={addMore}
              // type="primary"
              // htmlType="submit"
              className="invoice_download_btn w-[150px] px-3 py-1 !bg-lightgrey rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
            >
              continue task
            </Button> */}

            <Form.Item>
              <Button
                onClick={onSubmit}
                loading={loading}
                //   onClick={}
                type="primary"
                htmlType={"submit"}
                // onClick={onFinish}
                className="updatebtn invoice_download_btn w-[150px] px-3 py-1 bg-green rounded-[5px]  text-[0.8rem] h-[30px]   font-bold"
              >
                finish task
              </Button>
            </Form.Item>
          </div>
        </div>
        {/* </Form> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default QuestionTask;
