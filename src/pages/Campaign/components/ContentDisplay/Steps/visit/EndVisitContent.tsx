import ClishaCard from '../../../../../../components/elements/ClishaCard';

const EndVisitContent = () => {
  return (
    <div className='text-white flex flex-col space-y-5'>
      <ClishaCard>
        <div className='px-2 text-white text-center'>
          <p className=' font-medium text-[14px] mb-2 mt-1 '>Done!</p>
          <p className='mb-2 '>
            You have completed this step . Note: You can still interact with
            page.
          </p>
          <p className=' my-3  text-center font-medium'>
            When you are done, click on{' '}
            <span className='  text-yellow_color'>Tarife EMGA </span>
            on this page to continue.
          </p>
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
      </ClishaCard>
      <ClishaCard>
        <div className='px-2 text-white text-center'>
          <div className='flex space-x-2 font-medium  justify-center text-xl'>
            <span>Step </span>
            <span>2</span>
            <span>of</span>
            <span> 2</span>
          </div>
          <p className=' font-medium text-[16px] mb-2 mt-1 '>
            Great's Almost done,
          </p>
          <p className='mb-2 '>
            Please Read the question below. You will find the answer on this
            page! For answering it, click on the button in the bottom right
            corner.
          </p>
          <p className=' my-3 text-[16px] text-center font-medium'>
            {' '}
            Wie viel Extra-Treue-Bonus gibt es bei dem Tarif Nobel?
          </p>
          <ul className=' list-disc text-left ps-5'>
            <li>1000 $</li>
            <li>2000 $</li>
          </ul>

          <button className=' bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1'>
            ok
          </button>
        </div>
      </ClishaCard>
      <ClishaCard>
        <div className='px-2 text-white text-center'>
          <p className=' my-3 text-[16px] text-center font-medium'>
            {' '}
            Wie viel Extra-Treue-Bonus gibt es bei dem Tarif Nobel?
          </p>
          <ul className=' list-disc text-left ps-5'>
            <li>1000 $</li>
            <li>2000 $</li>
          </ul>
          <p></p>

          <button className=' bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1'>
            ok
          </button>
        </div>
      </ClishaCard>
    </div>
  );
};

export default EndVisitContent;
