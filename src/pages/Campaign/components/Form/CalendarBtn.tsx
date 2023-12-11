import calendar_mark from '../../../../assets/img/calendar_mark.png';
const CalendarBtn = () => {
  return (
    <div className=' ms-auto '>
      <div className=' rounded-t-md py-2 px-3 bg-yellow_color flex space-x-3 items-center '>
        <span>Preview Task</span>
        <img src={calendar_mark} alt='' />
      </div>
    </div>
  );
};

export default CalendarBtn;
