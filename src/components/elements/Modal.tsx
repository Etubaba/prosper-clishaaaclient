import { Modal } from "antd";
import { useDataStore } from "../../context/dataProvider";
import { ReactNode } from "react";
const ModalComponent = ({
  children,
  title,
  setter,
}: {
  children: ReactNode;
  title: string;
  setter: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const { modalState, setData } = useDataStore();

  const handleCancel = () => {
    if (setter) {
      setter(false);
    }
    setData({
      type: "toggleModal",
      payload: false,
    });
  };

  return (
    <Modal
      title={title}
      open={modalState.state}
      onCancel={handleCancel}
      className=" modal_content"
      footer={false}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
