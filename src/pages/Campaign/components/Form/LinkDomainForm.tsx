import { Form, Input } from 'antd';
import SelectElement from './SelectElement';

const LinkDomainForm = () => {
  return (
    <div className='flex'>
      <div className='mt-8 flex flex-col space-y-3'>
        <Form.Item
          label='User is on website URL / Domain'
          name='domain'
          className='!text-blue_color !m-0  mb-3 ms-0  '
          rules={[{ required: true }]}
        >
          <Input
            placeholder='Link Domain'
            className=' inline-block bg-blue_color !text-white ps-2 pe-8  other_input'
          />
        </Form.Item>

        <SelectElement
          label='Interaction'
          placeholder='Question'
          name='interaction'
          options={['Question', 'Form', 'Video', 'Buy']}
        />
      </div>
    </div>
  );
};

export default LinkDomainForm;
