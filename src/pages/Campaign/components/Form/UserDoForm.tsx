import CheckBoxForm from "./CheckBoxForm";
import DurationForm from "./DurationForm";
import QuestionForm from "./QuestionForm";

const UserDoForm = ({
  questionValue,
  duration,
}: {
  duration: boolean;
  questionValue: boolean;
}) => {
  return (
    <div className="mt-5">
      <p className=" text-blue_color font-medium text-xl mt-8">
        What should the USER do on the website
      </p>
      <CheckBoxForm />
      {duration && <DurationForm />}

      <QuestionForm
        questionValue={questionValue}
        setCampInteractions={undefined}
        campInteractions={undefined}
      />
    </div>
  );
};

export default UserDoForm;
