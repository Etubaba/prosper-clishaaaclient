import { useState } from 'react';

import { Button } from 'antd';
import { format } from 'date-fns';
import Calendar from './BigCalendar/Calendar';

const BigCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <div className='mt-16 flex flex-col items-center gap-8'>
      <div className='flex flex-col items-center gap-4'>
        <p>
          <strong>Selected Date: </strong>
          {format(currentDate, 'dd LLLL yyyy')}
        </p>

        <Button onClick={handleSetToday}>Today</Button>
      </div>

      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
};

export default BigCalendar;
