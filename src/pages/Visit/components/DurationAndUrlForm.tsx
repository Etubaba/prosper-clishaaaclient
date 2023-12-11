import { Form, Input, InputNumber, Tooltip } from "antd";
import { rules } from "../../../utils/rules";
import { InfoSvg } from "../../../assets/svg/svg";
import RadioBtn from "../../../components/elements/RadioBtn";

const DurationAndUrlForm = ({
  isInEditMode,
  isAnyUrlActive,
  setIsAnyUrlActive,
}: {
  isInEditMode: boolean;
  isAnyUrlActive: boolean;
  setIsAnyUrlActive: React.Dispatch<React.SetStateAction<any>>;
}) => {
  return (
    <>
      <div className="mt-3">
        <div className="flex flex-row pb-[3px] items-center">
          <p className="text-[#1B4C84]">
            Duration of browsing on the website from to
          </p>
          <Tooltip
            className="ml-3 cursor-pointer"
            title={
              "Share the desired duration of visitor interaction on your website."
            }
          >
            <span>
              <InfoSvg />
            </span>
          </Tooltip>
        </div>
        <div className=" flex-row flex gap-2 w-full">
          <Form.Item
            name="duration"
            className=" search w-full"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            <InputNumber
              disabled={isInEditMode}
              size="small"
              min={20}
              max={90}
              className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              placeholder="at least 20 seconds"
            />
          </Form.Item>
          <Form.Item
            name="duration_to"
            className=" search w-full"
            rules={[
              {
                required: false,
                message: "",
              },
            ]}
          >
            <InputNumber
              disabled={isInEditMode}
              size="small"
              min={20}
              max={90}
              className="flex-1 w-full px-3 py-2 bg-white rounded-[5px] text-black text-[0.8rem]"
              placeholder="maximum duration 90 seconds"
            />
          </Form.Item>
        </div>
        <p className="text-[#1B4C84] text-[0.5rem] pb-[3px]">
          Website visitors are randomly shown how long they have stayed on their
          website
        </p>
      </div>
      <div className="flex flex-row justify-between mt-3">
        <RadioBtn
          className={"flex-auto w-[50%] justify-start"}
          state={isAnyUrlActive}
          setState={setIsAnyUrlActive}
          title={"Any URL from this domain."}
          isInEditMode={isInEditMode}
        />
        <RadioBtn
          className={"flex-auto w-[50%] justify-start"}
          state={!isAnyUrlActive}
          setState={setIsAnyUrlActive}
          title={"Only this exact URL"}
          isInEditMode={isInEditMode}
        />
      </div>
    </>
    // <div className="">
    //   <span className=" text-blue_color inline-block mb-1 mt-2">
    //     Duration of browsing on the website from to
    //   </span>
    //   <div className="mt-0 flex md:items-center md:flex-row flex-col  ">
    //     <Form.Item
    //       name="duration"
    //       rules={rules.onlyNumberCharacters}
    //       className="md:me-2 me-0 mb-0 flex-1"
    //     >
    //       <Input
    //         disabled={isInEditMode}
    //         placeholder="at least 20 seconds"
    //         className="w-full inline-block "
    //       />
    //     </Form.Item>
    //     <Form.Item
    //       name="duration_to"
    //       rules={rules.onlyNumberCharacters}
    //       className="mb-0 flex-1 md:mt-0 mt-3 "
    //     >
    //       <Input
    //         disabled={isInEditMode}
    //         placeholder="maximum duration 90 seconds"
    //         className="w-full inline-block "
    //       />
    //     </Form.Item>
    //   </div>
    //   <span className=" text-blue_color inline-block mb-1 font-thin text-[12px]">
    //     Website visitors are randomly shown how long they have stayed on their
    //     website
    //   </span>
    // </div>
  );
};
export default DurationAndUrlForm;
