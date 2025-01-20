'use client'
import { useCurentView } from "../../../lib/Store";
import { DAYS, DAYS_ABBREVIATION, isLeapYear, NUMBER_OF_DAYS_IN_MONTH, NUMBER_OF_DAYS_IN_MONTH_LEAP } from "./consts";

export const MonthCalender = ({selectedDate, setSelectedDate}: {selectedDate: Date; setSelectedDate?: (selectedDate: Date)=> void}) => {
    const { currentView } = useCurentView();
    const monthNumber = selectedDate.getMonth() + 1;  
    const numberOfDays = isLeapYear(selectedDate.getFullYear())? NUMBER_OF_DAYS_IN_MONTH_LEAP: NUMBER_OF_DAYS_IN_MONTH
    const dates = Array.from({ length: numberOfDays[monthNumber as keyof typeof NUMBER_OF_DAYS_IN_MONTH] }, (_, i) => new Date(selectedDate.getFullYear(),selectedDate.getMonth(), i+1));
    const DaysArray = Object.keys(DAYS);
    const startDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();  
    const setDate = (date: Date) => {
        console.log(
            "from",selectedDate);
        
        if (setSelectedDate) {
            setSelectedDate(date);
        }
        console.log(
            "to",selectedDate);
    }
    
    
    return (
        <div className="h-full  grid grid-cols-7 gap-1 text-center">
            {currentView !== 'year' ? (
                DaysArray.map((day) => (
                    <div key={day} className={`${currentView !== 'year' && 'font-bold'} text-xl content-center `}>
                        {day}
                    </div>
                ))
            ) : (
                DAYS_ABBREVIATION.map((day) => (
                    <div key={day} className={`${currentView !== 'year' && 'font-bold'} text-sm lg:text-xl content-center `}>
                        {day}
                    </div>
                ))
            )}
            {Array.from({ length: startDay }).map((_, i) => {
                return <div key={i}></div>;
            })} 
            {dates.map((date) => (
                <div key={date.toDateString()} className={`${currentView !== 'year' && 'border'} p-2 content-start lg:text-2xl ${date.toDateString() === new Date().toDateString() && 'bg-gray-400' } text-sm`} onClick={()=>setDate(date)}>
                    {date.getDate()}
                </div>
            ))}
        </div>
    );
}