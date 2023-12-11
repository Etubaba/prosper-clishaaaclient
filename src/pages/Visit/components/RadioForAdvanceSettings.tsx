import { Checkbox, Form } from "antd";
import { InfoToolTip } from "../../../assets/svg/svg";
import SocialIcons from "./SocialIcon";

const RadioForAdvanceSettings = () => {
  return (
    <div className="mt-4">
      <Form.Item name="url" valuePropName="checked" className="text-lg  ">
        <Checkbox value={1}>This orders is for adults</Checkbox>
      </Form.Item>

      <div className="mt-2">
        <div className="mb-2 flex items-center space-x-3 text-blue_color text-sm">
          <span>Website visitors via Messenger</span>
          <span className="mt-2">
            <InfoToolTip />
          </span>
        </div>
        <SocialIcons
          social={[]}
          handledSocial={() => {}}
          isInEditMode={false}
        />
      </div>
    </div>
  );
};

export default RadioForAdvanceSettings;
