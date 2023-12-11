import { Select, Tooltip } from "antd";
import React from "react";
import { InfoSvg } from "../../../../assets/svg/svg";
import Input from "./Input";
import { IoIosArrowDown } from "react-icons/io";
import { InteractionType } from "../../../../types/components";

const QuestionRead = ({
  inter,
  idx,
}: {
  inter: InteractionType;
  idx: number;
}) => {
  return (
    <div>
      {" "}
      <p className="text-[#1B4C84] font-bold mb-[10px]">
        Question Task {idx + 1}
      </p>
      <div className="inputField w-full flex flex-row items-center gap-2">
        <div className="flex flex-row items-center w-[250px] min-w-[250px] max-w-[250px]">
          <>
            <p className="text-[#1B4C84]">User is on website URL / Domain</p>
            <Tooltip className="ml-3 cursor-pointer" title={""}>
              <span>
                <InfoSvg />
              </span>
            </Tooltip>
          </>
        </div>

        <div className="w-full">
          <Input defaultValue={inter.current_url} />
        </div>
      </div>
      {/* <DefaultValueOptionQuestion /> */}
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
              defaultValue={inter.interaction_name}
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
            <Input defaultValue={inter.question} />
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
              defaultValue={inter.option1}
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
              defaultValue={inter.option2}
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
              defaultValue={inter.option3}
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

            {/* <Form.Item
              name={"answer"}
              className="w-full"
              rules={[{ required: true, message: "" }]}
            > */}
            <Select
              defaultValue={inter.answer}
              className="w-full"
              suffixIcon={
                <IoIosArrowDown className=" text-yellow_color text-lg" />
              }
              placeholder={"Answer"}
              allowClear
            >
              {/* {answerArrayfn().map((text: any, i: number) => (
                  <Select.Option key={i} value={text.value}>
                    {text.name}
                  </Select.Option>
                ))} */}
            </Select>
            {/* </Form.Item> */}
          </div>
          <div className="my-4   border-b "></div>
        </div>
      </div>
    </div>
  );
};

export default QuestionRead;
