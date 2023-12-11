import { Radio, Space } from 'antd';
import { TQuestion } from '../../../../types/app.types';

const Questions = ({ questions }: { questions: TQuestion }) => {
  return (
    <div className=''>
      <div className='px-1 text-white mb-4'>
        <p className=' px-5 text-lg'>{questions.question}</p>
        <div className='px-5'>
          <Radio.Group className=' mt-2 question_radio'>
            <Space direction='vertical'>
              {questions.answer_options.map((answer, i) => (
                <Radio key={i} value={answer}>
                  {answer}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
        <div className='text-center'>
          <button className=' bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1'>
            sumbit
          </button>
          <p className=' my-3'>
            Click one of the options above and then answer to complete task
          </p>
          <p>
            Dont want to attempt this question? Deactivated
            <span className=' text-yellow_color'> task here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
