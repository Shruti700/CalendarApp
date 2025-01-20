"use client"
import React from 'react';
import { useCurentView, useSelectedDate } from '../../../lib/Store';
import { isLeapYear, VIEWS } from './consts';

const Header = () => {
    const { selectedDate, setSelectedDate } = useSelectedDate();
    const { currentView, setCurrentView } = useCurentView();
    const monthName = selectedDate.toLocaleString('default', { month: 'long' });
    const year = selectedDate.getFullYear();
    const addDays = (date: Date, days: number) => {
        const copy = new Date(date);
        copy.setDate(date.getDate() + days);
        return copy;
    }
    const weekViewHeader = {
        start: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay()),
        end: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay() + 6)
    }

    const dateOffsets: { [key: string]: number } = {
        year: isLeapYear(year)? 366: 365,
        month: 30,
        week: 7,
        day: 1,
        default: 30
    };
    const next = () => {
       const offset = dateOffsets[currentView] ;
        setSelectedDate(addDays(selectedDate, offset));
    };

    const prev = () => {
        const offset = dateOffsets[currentView] ;
        setSelectedDate(addDays(selectedDate, -offset));
    };
    const getTitle = () => {
        switch (currentView) {
            case 'year':
                return <div className="text-4xl">{selectedDate.getFullYear().toString()}</div>
            case 'month':
                return <div className="text-4xl">{monthName} {year}</div>
            case 'week':
                return <div className="text-4xl">{weekViewHeader.start.toLocaleString('default', { month: 'long' , day: '2-digit'})} - {weekViewHeader.end.toLocaleString('default', { month: 'long' , day: '2-digit'})}</div>
            case 'day':
                return <div className="text-4xl">{selectedDate.toDateString()}</div>
            default:
                return <div className="text-4xl">{monthName} {year}</div>
        }
    }
    return (
        <div className="flex justify-between text-3xl">
            <div className="text-base">
                <button className="bg-slate-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-solid border-y-2 border-l-2 border-slate-700 rounded-l-lg" onClick={prev}>
                    <span>&lt;</span>
                </button>
                <button className="bg-slate-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border-solid border-y-2 border-r-2 border-slate-700 rounded-r-lg" onClick={next}>
                    <span>&gt;</span>
                </button>
                <button className='bg-slate-500 hover:bg-gray-600 text-white  py-2 px-4 border-solid border-2 border-slate-700 rounded-lg ml-10' onClick={() => setSelectedDate(new Date())}>
                    Today
                </button>
            </div>
            {getTitle()}
            <div className="text-base rounded border-solid border-2 border-slate-700 ">
                {VIEWS.map((view) => (
                    <button key={view} className={`bg-slate-500 hover:bg-gray-600 focus:bg-gray-700 text-white font-bold py-2 px-4  ${currentView === view ? 'bg-gray-600' : ''}`} onClick={() => setCurrentView(view)}>
                        <span>{view}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Header;