import { Modal } from "antd";
import SwiperComponent from "./SwiperComponent";
import ManualSwiper from "./ManualSwiper";

const PreviewModal = ({
  showPreview,
  setShowPreview,
  previewObj,
}: {
  showPreview: boolean;
  setShowPreview: React.SetStateAction<any>;
  previewObj: any;
}) => {
  return (
    <Modal
      title="Preview Campaign - User Guide"
      centered
      open={showPreview}
      //   onOk={() => setShowPreview(false)}
      onCancel={() => setShowPreview(false)}
      //   width={1000}
      wrapClassName="previewModal"
    >
      {/* <SwiperComponent /> */}
      <ManualSwiper previewObj={previewObj} />
    </Modal>
  );
};

export default PreviewModal;
