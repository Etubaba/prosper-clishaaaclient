import { Button, Form, Input } from "antd";
import ActiveInteractions from "./ActiveInteractions";
import InteractionTypes from "./InteractionTypes";
import QuestionForm from "./QuestionForm";
import SearchEngineTypes from "./SearchEngineTypes";
import { useState } from "react";
import QuestionPart from "./QuestionPart";
import QuestionTask from "../question/QuestionTask";

const InteractionBox = ({
  url,
  jorney_type,
  campInteractions,
  setCampInteractions,
  loading,
}: {
  url: string;
  jorney_type: string;
  campInteractions: any;

  setCampInteractions: React.SetStateAction<any>;
  loading: boolean;
}) => {
  const [interactionType, setInteractionType] = useState("");

  return (
    <>
      <div className="flex flex-row">
        <InteractionTypes setInteractionType={setInteractionType} />
      </div>
      {jorney_type === "search" && (
        <div className="mt-4">
          <SearchEngineTypes searchEngineType={""} />
        </div>
      )}
      {interactionType === "question" && (
        <QuestionTask
          loading={loading}
          url={url}
          campInteractions={campInteractions}
          setCampInteractions={setCampInteractions}
        />
        // <QuestionForm
        //   url={url}
        //   questionValue={true}
        //   campInteractions={campInteractions}
        //   setCampInteractions={setCampInteractions}
        // />
      )}
      {/* <ActiveInteractions campInteractions={campInteractions} /> */}
      {/* <div className="flex  mt-8 items-start space-x-16">
        <UserDoForm duration={duration} questionValue={questionValue} />
        {questionValue && campaignCards.length && (
          <div className="">
            <DisplayCampaingnCard />
          </div>
        )}
      </div> */}
    </>
  );
};

export default InteractionBox;
