import { Checkbox, Form } from 'antd';

const CheckBoxForm = () => {
  return (
    <>
      <div className=''>
        <div className='flex space-x-8 items-center mt-3'>
          <Form.Item
            name='is_question'
            valuePropName='checked'
            className='text-lg  w-32 '
          >
            <Checkbox value='question_type'>Question</Checkbox>
          </Form.Item>
          <Form.Item
            name='is_duration'
            valuePropName='checked'
            className='text-lg  w-32 '
          >
            <Checkbox value='question_time'>Duration time</Checkbox>
          </Form.Item>
        </div>
        <div className='flex space-x-8 items-center '>
          <Form.Item
            name='is_video'
            valuePropName='checked'
            className='text-lg  w-32 '
          >
            <Checkbox value='question_type'>Watch Video</Checkbox>
          </Form.Item>
          <Form.Item
            name='is_fill_form'
            valuePropName='checked'
            className='text-lg   w-32'
          >
            <Checkbox value='question_time'>Fill a Form</Checkbox>
          </Form.Item>
          <Form.Item name='todo' valuePropName='checked' className='text-lg   '>
            <Checkbox value='question_time'>Show him next TODO </Checkbox>
          </Form.Item>
        </div>
      </div>
    </>
  );
};

export default CheckBoxForm;
