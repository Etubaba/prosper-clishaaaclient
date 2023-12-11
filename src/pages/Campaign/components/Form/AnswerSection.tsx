import { useState } from "react";
import AddMoreOptionFrom from "./AddMoreOption";
import SelectElement from "./SelectElement";
import { Form, Select, Tooltip } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { InfoSvg } from "../../../../assets/svg/svg";
const { Option } = Select;
const AnswerSection = ({ optionArray }: { optionArray: number[] }) => {
  const [numberOfOptions, setNumberOfOptions] = useState<number>(3);

  const handleNumber = (type: string) => {
    if (type === "add") {
      setNumberOfOptions((state) => state + 1);
    } else {
      setNumberOfOptions((state) => state - 1);
    }
  };
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
  return (
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
            className="min-w-[200px]"
            suffixIcon={
              <IoIosArrowDown className=" text-yellow_color text-lg" />
            }
            placeholder={"Answer"}
            allowClear
          >
            {answerArrayfn().map((text: any, i: number) => (
              <Option key={i} value={text.value}>
                {text.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <div className="my-4 ">
        {/* <Form.Item
          name={"answer"}
          label={"Answer"}
          rules={[{ required: true, message: "" }]}
        >
          <Select
            className="min-w-[200px]"
            suffixIcon={
              <IoIosArrowDown className=" text-yellow_color text-lg" />
            }
            placeholder={"Answer"}
            allowClear
          >
            {answerArrayfn().map((text: any, i: number) => (
              <Option key={i} value={text.value}>
                {text.name}
              </Option>
            ))}
          </Select>
        </Form.Item> */}
        {/* <SelectElement
          name="answer"
          label="Answer"
          placeholder="Answer"
          options={answerArrayfn()}
        /> */}
      </div>
    </div>
  );
};
export default AnswerSection;
