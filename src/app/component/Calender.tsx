'use client'
import { useCurentView, useSelectedDate } from "../../../lib/Store";
import Header from "./Header";
import { MonthCalender } from "./MonthView";
import { WeekCalender } from "./WeekView";
import YearCalendar from "./YearView";

export const Calender = () => {
    const { currentView } = useCurentView();
    const {selectedDate, setSelectedDate} = useSelectedDate();
    return (
        <div className="h-screen w-screen bg-white text-black  flex flex-col justify-center">
            <div className="mx-10 my-5 "><Header /></div>
            <br />
            {currentView === 'year' && 
            <div className="h-full"><YearCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/> </div>}
            {currentView === 'month' &&
            <div className="h-3/4 m-4"><MonthCalender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/></div>}
            {currentView === 'week' && 
            <div className="h-[85%] m-4"><WeekCalender selectedDate={selectedDate} setSelectedDate={setSelectedDate}/></div>}
        </div>
    );
}