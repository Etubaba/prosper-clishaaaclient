import { useState } from 'react';

type TFaqBox = {
  question: string;
  answer: string;
};
const FaqBox = ({ question, answer }: TFaqBox) => {
  const [open, setOpen] = useState<boolean>();
  return (
    <div
      className={`faqBox overflow-hidden h-[40px]`}
      //   className={`faqBox overflow-hidden ${open ? "open" : "close"}`}
      //   style={{ height: open ? "fit-content" : "40px" }}
    >
      <div
        className='faqBoxBtn h-[40px] max-w-[500px] bg-white rounded-[5px] flex flex-row items-center p-3 cursor-pointer'
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <p className='font-bold text-blue'>{question}</p>
      </div>
      <div className='h-fit p-3 bg-grey max-w-[500px]'>
        <p className='font-bold text-blue'>{answer}</p>
      </div>
    </div>
  );
};

export default FaqBox;
