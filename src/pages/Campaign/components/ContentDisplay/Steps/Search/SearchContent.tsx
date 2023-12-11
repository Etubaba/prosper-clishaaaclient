import ClishaCard from '../../../../../../components/elements/ClishaCard';

const SearchContent = ({ domainUrl }: { domainUrl: string }) => {
  return (
    <div>
      <p className=' text-blue_color text-2xl mt-5 mb-3 font-normal'>
        User guidance
      </p>
      <div className='flex space-y-3 flex-col'>
        <ClishaCard>
          <div className=' text-center'>
            <p className=' text-white  text-[14px]'>
              Please enter the copied Search Phrase into the Google Search Bar
              and hit enter
            </p>
            <button className=' bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1'>
              ok
            </button>
          </div>
        </ClishaCard>
        <ClishaCard>
          <div className=' text-center'>
            <p className=' text-white  text-[14px] mb-2 font-semibold'>
              Click {domainUrl}
            </p>
            <p className=' text-white  text-[14px]'>
              Please go through the Google Search result and click on the result
              with the website title {`"${domainUrl}"`}
            </p>
            <button className=' bg-yellow_color px-10 mt-8 text-white rounded text-lg py-1'>
              ok
            </button>
          </div>
        </ClishaCard>
      </div>
    </div>
  );
};

export default SearchContent;
