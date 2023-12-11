import { Form, Input, Tooltip } from "antd";

import AnswerSection from "./AnswerSection";
import InputField from "../../../../components/elements/InputField";
import {
  CancelSvg,
  GreyPlusSvg,
  InfoSvg,
  RedMinusSvg,
} from "../../../../assets/svg/svg";
import { MinusCircleOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const AddOption = ({
  id,
  addBtn,
  subBtn,
  optionArray,
  setOptionArray,
  subtractOption,
  addOption,
}: {
  id: number;
  addBtn: boolean;
  subBtn: boolean;
  optionArray: number[];
  setOptionArray: React.Dispatch<React.SetStateAction<number[]>>;
  subtractOption: () => void;
  addOption: () => void;
}) => {
  return (
    <div className="inputField w-full flex flex-row items-center gap-2 relative">
      <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
        <>
          <p className="text-[#1B4C84]">Option {id}</p>
          <Tooltip className="ml-3 cursor-pointer" title={`Option ${id}`}>
            <span>
              <InfoSvg />
            </span>
          </Tooltip>
        </>
      </div>
      <Form.Item
        name={`option${id}`}
        rules={[
          {
            required: true,
            message: "",
          },
        ]}
        className="w-full"
      >
        <Input
          className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
        />
      </Form.Item>
      <div className="absolute left-[101%] top-0 bottom-0 m-auto h-fit w-fit flex flex-row items-center justify-start gap-2">
        {subBtn && (
          <div
            className="h-[16px] w-[16px] cursor-pointer"
            onClick={subtractOption}
          >
            <RedMinusSvg />
          </div>
        )}
        {addBtn && (
          <div className="h-[16px] w-[16px] cursor-pointer" onClick={addOption}>
            <GreyPlusSvg />
          </div>
        )}
      </div>
    </div>
  );
};
const PrimaryDefaultQuestionFrom = ({}: // optionArray,
// setOptionArray,
{
  // optionArray: number[];
  // setOptionArray: React.Dispatch<React.SetStateAction<number[]>>;
}) => {
  const [optionArray, setOptionArray] = useState<number[]>([1, 2]);
  const subtractOption = () => {
    if (optionArray.length > 2) {
      let oldArr = optionArray;
      oldArr.pop();
      setOptionArray([...oldArr]);
    }
  };
  const addOption = () => {
    if (optionArray.length < 5) {
      let oldArr = optionArray;
      oldArr.push(optionArray.length + 1);
      setOptionArray([...oldArr]);
    }
  };
  return (
    <div className=" flex flex-col mb-2 gap-[6px] my-[6px]">
      {/* <Form.Item
        name="question_one"
        label="Question"
        rules={[{ required: true, message: "" }]}
      >
        <Input />
      </Form.Item> */}
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

        <Form.Item
          name={"name"}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          className="w-full"
        >
          <Input
            className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
          />
        </Form.Item>
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

        <Form.Item
          name={"question"}
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          className="w-full"
        >
          <Input
            className={`w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]`}
          />
        </Form.Item>
      </div>

      {optionArray.map((option, index) => {
        return (
          <AddOption
            id={option}
            addBtn={
              index > 0 && index === optionArray.length - 1 ? true : false
            }
            subBtn={
              index > 1 && index === optionArray.length - 1 ? true : false
            }
            optionArray={optionArray}
            setOptionArray={setOptionArray}
            subtractOption={subtractOption}
            addOption={addOption}
          />
        );
      })}

      {/* <Form.Item
        name="option_one"
        label="Option 1"
        rules={[{ required: true, message: "" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="option_two"
        label="Option 2"
        rules={[{ required: true, message: "" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="option_three"
        label="Option 3"
        rules={[{ required: true, message: "" }]}
      >
        <Input />
      </Form.Item> */}
      <AnswerSection optionArray={optionArray} />
    </div>
  );
};

export default PrimaryDefaultQuestionFrom;
