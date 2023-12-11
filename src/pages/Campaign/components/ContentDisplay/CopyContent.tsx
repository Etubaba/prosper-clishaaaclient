import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyContent = ({ value }: { value: string }) => {
  const [isCpoied, setIscopied] = useState<boolean>(false);
  useEffect(() => {
    if (isCpoied) {
      setTimeout(
        () => {
          setIscopied(false);
        },

        3000
      );
    }
  }, [isCpoied]);
  return (
    <div className=''>
      <p className=' text-white text-center'>
        Click the button below to start your Task
      </p>
      <div className='mt-2'>
        <div className='flex'>
          <span className=' flex-1 p-2  bg-white rounded-tl rounded-bl'>
            {value}
          </span>
          <CopyToClipboard text={value} onCopy={() => setIscopied(true)}>
            <button
              type='button'
              className=' rounded bg-yellow_color px-3 py-2 ms-[-10px] text-white '
            >
              {isCpoied ? 'Copied' : 'Copy'}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default CopyContent;
