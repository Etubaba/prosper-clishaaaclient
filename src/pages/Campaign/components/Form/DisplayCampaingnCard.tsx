import ClishaCard from '../../../../components/elements/ClishaCard';
import { useDataStore } from '../../../../context/dataProvider';
import Questions from '../ContentDisplay/Questions';
import { MdOutlineModeEdit, RiDeleteBinLine } from '../../../../assets/icon';
import VisitContent from '../ContentDisplay/Steps/visit/VisitContent';
import EndVisitContent from '../ContentDisplay/Steps/visit/EndVisitContent';

const DisplayCampaingnCard = () => {
  const { campaignCards } = useDataStore();
  return (
    <>
      <div className='my-4'>
        <VisitContent />
      </div>
      {campaignCards.map((campaign, i) => (
        <div className=''>
          <div className='my-3 flex justify-between items-center text-xl'>
            <MdOutlineModeEdit className=' cursor-pointer text-blue' />
            <RiDeleteBinLine className=' text-red' />
          </div>

          <ClishaCard key={i}>
            {campaign.questions?.question ? (
              <Questions questions={campaign.questions} />
            ) : (
              ''
            )}
          </ClishaCard>
          {campaign?.addquestion?.length
            ? campaign.addquestion.map((question, i) => (
                <div key={i} className='mt-4'>
                  <ClishaCard>
                    <Questions questions={question} />
                  </ClishaCard>
                </div>
              ))
            : null}
        </div>
      ))}
      <div className='my-4'>
        <EndVisitContent />
      </div>
    </>
  );
};

export default DisplayCampaingnCard;
