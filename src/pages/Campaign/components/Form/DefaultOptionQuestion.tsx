import { Button, Form, Input } from "antd";
import PrimaryDefaultQuestionFrom from "./PrimaryDefaultQuestionFrom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import SelectElement from "./SelectElement";
import { useState } from "react";
import ClickOrderBox from "../../../../components/major/ClickOrderBox";

const DefaultOptionQuestion = () => {
  const [numberOfOptions, setNumberOfOptions] = useState<number>(3);
  const [optionArray, setOptionArray] = useState<number[]>([]);

  const handleNumber = (type: string) => {
    if (type === "add") {
      setNumberOfOptions((state) => state + 1);
    } else {
      if (numberOfOptions === 3) {
        return;
      }
      setNumberOfOptions((state) => state - 1);
    }
  };

  const handleOptionArray = (value: string | number) => {
    if (typeof value === "number") {
      setOptionArray([...optionArray, value]);
    } else {
      // const newValue : number[]= optionArray.pop()
      setOptionArray((state) =>
        state.filter((value) => value !== optionArray[optionArray.length - 1])
      );
    }
  };

  const answerArrayfn = () => {
    const answerArray: string[] = [];
    for (let i = 0; i < numberOfOptions; i++) {
      answerArray.push(`Option ${i + 1}`);
    }
    return answerArray;
  };

  const addQuestionToJourney = () => {};

  return (
    <>
      <PrimaryDefaultQuestionFrom
      // setOptionArray={setOptionArray}
      // optionArray={optionArray}
      />

      {/* <Form.List name="addquestion">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <div key={field.key} className=" flex flex-col  relative">
                <div className=" relative mt-4">
                  <Form.Item
                    {...field}
                    name={[field.name, "Question"]}
                    label="Question"
                    className="p-0 "
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "option_one"]}
                    label="Option 1"
                    className="mt-3"
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "option_two"]}
                    label="Option 2"
                    className="my-4"
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, "option_three"]}
                    label="Option 3"
                    className="mt-3"
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input />
                  </Form.Item>

                  <div className="mb-3 mt-3">
                    {optionArray.map((_, i) => (
                      <div
                        key={i + Date.now()}
                        className=" flex flex-col  relative"
                      >
                        <div className=" relative ">
                          <Form.Item
                            name={`options_${i + 4}`}
                            label={`Option ${i + 4}`}
                            className="p-0 mt-3"
                            rules={[{ required: true, message: "" }]}
                          >
                            <Input />
                          </Form.Item>
                        </div>

                        <MinusCircleOutlined
                          className=" text-red text-xl absolute top-[75%]   right-[-3rem] translate-x-[-50%]  translate-y-[-50%] "
                          onClick={() => {
                            handleNumber("remove");
                            handleOptionArray("remove");
                          }}
                        />
                      </div>
                    ))}

                    <Form.Item className=" absolute w-full">
                      <span
                        className={`border bg-blue_color text-white   absolute ${
                          optionArray.length
                            ? "top-[-2.2rem] right-[-5rem]"
                            : "top-[-2.9rem] right-[-2.8rem]"
                        }  h-8 w-8 flex justify-center items-center rounded-full`}
                      >
                        <PlusOutlined
                          className="  "
                          onClick={() => {
                            handleNumber("add");
                            handleOptionArray(optionArray.length + 1);
                          }}
                        />
                      </span>
                    </Form.Item>
                  </div>
                  <SelectElement
                    name={[field?.name, "answer_one"]}
                    label="Answer"
                    placeholder="Answer"
                    options={answerArrayfn()}
                  />
                </div>
                <AnswerSection field={field} />
      {/* <MinusCircleOutlined
                  className=" text-red text-xl absolute top-[50%]  right-[-3rem] translate-x-[-50%]  translate-y-[-50%] "
                  onClick={() => {
                    handleNumber("remove");
                    remove(field.name);
                  }}
                />
              </div>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Questions
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List> */}
    </>
  );
};

export default DefaultOptionQuestion;
