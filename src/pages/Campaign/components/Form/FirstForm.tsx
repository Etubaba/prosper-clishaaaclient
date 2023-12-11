import SelectElement from './SelectElement';

import question_markup from '../../../../assets/icon/question_mark.png';

const FirstForm = ({ showOtherForm }: { showOtherForm: boolean }) => {
  return (
    <>
      <div className=' flex space-x-2 '>
        <SelectElement
          name='language'
          label='Language'
          placeholder='Select a  language'
          options={['English', 'Germany']}
        />
        <div className=''>
          <span className='mt-8 flex items-center ms-5'>
            <img src={question_markup} alt='icon' className=' me-2' />
            <span>
              wir biete dir unserer dienstleistung in 14 verschieden sprachen
              an.
            </span>
          </span>
        </div>
      </div>

      {/* <div className='flex space-x-2  mt-3'>
        <SelectElement
          name='target_group'
          placeholder='Select a target group'
          label='Target group'
          options={['new target group']}
        />
        {showOtherForm ? (
          <Form.Item
            name={'name'}
            label='Group Name'
            rules={[{ required: true }]}
          >
            <Input
              placeholder='Group Name'
              suffix={<BiPlus className=' text-yellow_color text-lg' />}
            />
          </Form.Item>
        ) : null}
      </div> */}
    </>
  );
};

export default FirstForm;
