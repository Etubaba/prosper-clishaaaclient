import { campaignBoxData } from '../../constants/data';
import TextBox from './components/Box';

const Note = () => {
  return (
    <div className='flex  justify-between space-x-5 mt-4'>
      <div className='flex-1'>
        <h1 className=' text-blue_color text-2xl capitalize'>
          campaign manager
        </h1>
        <p className=' text-blue_color font-light leading-7  text-[16px] px-3 mt-3'>
          The campaign manager provides you with the opportunity to harness the
          full expertise and potential of clisha in a campaign, allowing you to
          attract real human visitors to your entire online presence. With the
          campaign manager, you can strategically steer these users across your
          entire infrastructure, ultimately increasing your visibility and
          improving your search engine rankings. Moreover, it offers a
          significant boost to your online reputation, providing immense value
          to your overall digital presence.
        </p>
      </div>
      <div className='flex-1 mb-5'>
        <h1 className=' text-blue_color text-2xl capitalize'>WHY</h1>
        <div className='mt-3 text-blue_color flex flex-col space-y-3'>
          {campaignBoxData.map(({ text, id }) => (
            <TextBox key={id} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
