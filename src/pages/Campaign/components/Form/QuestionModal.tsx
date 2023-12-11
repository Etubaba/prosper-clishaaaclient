import { Modal } from "antd";
import QuestionForm from "./QuestionForm";

const QuestionModal = ({
  showQuestionModal,
  setShowQuestionModal,
  campInteractions,
  setCampInteractions,
}: {
  showQuestionModal: boolean;
  setShowQuestionModal: React.SetStateAction<any>;
  campInteractions: any;
  setCampInteractions: React.SetStateAction<any>;
}) => {
  return (
    <Modal
      title="Add a Multi-choice Question Form"
      centered
      open={showQuestionModal}
      //   onOk={() => setShowPreview(false)}
      onCancel={() => setShowQuestionModal(false)}
      width={650}
      wrapClassName="questionModal"
    >
      <QuestionForm
        questionValue={showQuestionModal}
        campInteractions={campInteractions}
        setCampInteractions={setCampInteractions}
      />
    </Modal>
  );
};

export default QuestionModal;
