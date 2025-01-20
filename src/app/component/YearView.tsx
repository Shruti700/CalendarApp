
import { MonthCalender } from './MonthView';

const YearCalendar = ({selectedDate, setSelectedDate}: {selectedDate: Date; setSelectedDate?: (selectedDate: Date)=> void}) => {
  const [currentYear, currentDate] = [selectedDate.getFullYear(), selectedDate.getDate()];
  const months = Array.from({ length: 12 }, (_, i) => new Date(currentYear, i, currentDate));

  return (
    <div className="h-full flex flex-wrap overflow-auto justify-evenly ">
      {months.map((monthDate, index) => (
        <div key={index} className="mx-6 w-1/5">
          <h2 className="text-center font-bold text-2xl ">{monthDate.toLocaleString('default', { month: 'long' })}</h2>
          <div className=''><MonthCalender selectedDate={monthDate} /></div>
        </div>
      ))}
    </div>
  );
};

export default YearCalendar;