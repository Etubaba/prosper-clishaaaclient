import { useState } from "react";
import Card from "../../../../components/elements/Card";
import { useUserStore } from "../../../../context/userProvider";
import { Button } from "antd";
import ClishaCard from "../../../../components/elements/ClishaCard";
import CopyContent from "../ContentDisplay/CopyContent";
import { RightArrowSvg } from "../../../../assets/svg/svg";
import SearchContent from "../ContentDisplay/Steps/Search/SearchContent";

const ManualSwiper = ({ previewObj }: { previewObj: any }) => {
  const { company, admin } = useUserStore();
  const [slide, setSlide] = useState(1);
  console.log(previewObj);
  console.log(slide);
  return (
    <div className="manualSwiper w-full h-full relative">
      {previewObj.map((datum: any, index: number) => {
        return (
          <div
            className={` slide ${
              index + 1 === slide && "show"
            } w-full h-full flex flex-row justify-center items-center bg-[#d0d0d0] absolute top-0 z-[${
              slide + 1 - index
            }]`}
          >
            {datum?.type === "card" && (
              <div className="flex flex-row justify-center items-center gap-6">
                <Card
                  boxColor={company.background}
                  foreColor={company.foreground}
                  logo={company.photo}
                  text={`Complete the ${admin.name} task to claim your bonus.`}
                  cardType="search"
                  lineColor={company.foreground}
                  interaction_amount={0}
                  url={""}
                  duration={0}
                  task_code={""}
                  cardColors={company.card_colors?.accent_color ?? "#fa6e28"}
                />
                {datum?.data?.keyword && (
                  <>
                    <div>
                      <RightArrowSvg />
                      <p>On Click</p>
                    </div>
                    <ClishaCard>
                      <CopyContent value={datum?.data?.keyword} />
                    </ClishaCard>
                  </>
                )}
              </div>
            )}
            {datum?.type === "copied" && (
              <div className="flex flex-row justify-center items-center gap-6">
                <ClishaCard>
                  <div className=" text-center">
                    <p className=" text-white  text-[14px]">
                      Please enter the copied Search Phrase into the Google
                      Search Bar and hit enter
                    </p>
                    <button className=" bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1">
                      ok
                    </button>
                  </div>
                </ClishaCard>
                <div>
                  <RightArrowSvg />
                  <p>On Click</p>
                </div>
                <ClishaCard>
                  <div className=" text-center">
                    <p className=" text-white  text-[14px] mb-2 font-semibold">
                      Click {`${datum?.data?.url ?? ""}`}
                    </p>
                    <p className=" text-white  text-[14px]">
                      Please go through the Google Search result and click on
                      the result with the website title{" "}
                      {`${datum?.data?.url ?? ""}`}
                    </p>
                    <button className=" bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1">
                      ok
                    </button>
                  </div>
                </ClishaCard>
              </div>
            )}
          </div>
        );
      })}
      <>
        <Button
          onClick={() => setSlide((prev) => prev - 1)}
          disabled={slide === 1}
          className="z-[1000] absolute left-[10px] top-0 bottom-0 m-auto px-3 py-1 border-0 bg-yellow_color rounded-[5px] text-[0.8rem] font-bold"
        >
          Prev
        </Button>
        <Button
          onClick={() => setSlide((prev) => prev + 1)}
          disabled={slide === previewObj?.length}
          className="z-[1000] absolute right-[10px] top-0 bottom-0 m-auto px-3 py-1 border-0 bg-yellow_color rounded-[5px] text-[0.8rem] font-bold"
        >
          Next
        </Button>
      </>
    </div>
  );
};

export default ManualSwiper;
