import {
  ages,
  hobbies,
  interests,
  professions,
} from '../../../../constants/data';
import SelectElement from './SelectElement';

const GeoGraphicCharcForm = () => {
  return (
    <>
      <p className='text-sm font-medium mt-5 text-blue_color'>
        Demographic characteristics of the target group
      </p>
      <div className='grid grid-cols-5 space-x-2 mt-4 w-full'>
        <SelectElement
          name='group_age'
          label='Group Age'
          placeholder='All'
          options={ages}
        />
        <SelectElement
          name='professsion'
          label='Profession '
          placeholder='All'
          options={professions}
        />
        <SelectElement
          name='Hobbies'
          label='hobbies'
          placeholder='All'
          options={hobbies}
        />
        <SelectElement
          name='income'
          label='Income '
          placeholder='All'
          options={['All']}
        />
        <SelectElement
          name='family_status'
          label='Family Status'
          placeholder='All'
          options={['Married', 'Single']}
        />
      </div>
      <div className='grid grid-cols-5 space-x-2 mt-4 w-full'>
        <SelectElement
          name='gender'
          label='Gender'
          placeholder='All'
          options={['Male', 'Female', 'Netural']}
        />
        <SelectElement
          name='interest'
          label='Interest'
          placeholder='All'
          options={interests}
        />
      </div>
    </>
  );
};

export default GeoGraphicCharcForm;
