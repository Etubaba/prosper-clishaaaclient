import { Form, Input } from 'antd';

const DurationForm = () => {
  return (
    <div className='mt-4'>
      <p className=' text-blue_color mb-1 text-lg'>
        Duration of browsing on the website from to
      </p>
      <div className='flex space-x-2'>
        <Form.Item
          name='duration_form'
          rules={[{ required: true, message: '' }]}
        >
          <Input size='large' placeholder='at least 20 seconds ' />
        </Form.Item>
        <Form.Item name='duration_to' rules={[{ required: true, message: '' }]}>
          <Input size='large' placeholder='maximum duration 90 seconds ' />
        </Form.Item>
      </div>
      <p className=' font-thin text-[13px] text-blue text-center'>
        Website visitors are randomly shown how long they have stayed on their
        website
      </p>
    </div>
  );
};

export default DurationForm;
