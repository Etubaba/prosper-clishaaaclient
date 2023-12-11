import { Form, Radio } from "antd";

const RadioForUrl = ({ isInEditMode }: { isInEditMode: boolean }) => {
  return (
    <div className="mt-4">
      <Form.Item
        name="track_domain"
        valuePropName="checked"
        className="mb-2 mt-2 text-lg  "
      >
        <Radio.Group
          disabled={isInEditMode}
          defaultValue={true}
          className="flex sm:flex-row flow-col  items-center  justify-between space-y-2"
        >
          <Radio value={true}>Any URL from this domain</Radio>
          <Radio value={false}>Only this exact URL </Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default RadioForUrl;
