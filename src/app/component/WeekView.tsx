'use client'

export const WeekCalender = ({ selectedDate, setSelectedDate }: { selectedDate: Date, setSelectedDate: (selectedDate: Date) => void }) => {
    const weekDays = Array.from({ length: 7 }, (_, i) => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() - selectedDate.getDay() + i));
    const hours = Array.from({ length: 25 }, (_, i) => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), i));
    console.log(hours);
    const hourIndicator= new Array(24).fill(0).map((_, i) => i);
    hourIndicator.unshift('All day');
    const setDate = (date: Date) => {
        setSelectedDate(date);
    }
    return (
        <div className="h-full w-full static grid grid-cols-7 grid-rows-14 text-center overflow-scroll border">
           
                <div className="col-span-2 col-end-1  flex flex-col">
                   <div className="absolute lg:text-2xl text-sm pb-2 top-28"></div>
                   {/* <div className="absolute lg:text-2xl text-sm pb-2 top-2">All Day</div> */}
                    {hourIndicator.map((hour) => (
                        <div key={hour} className={`border h-[49px] text-black align-start text-left px-5 ${hour==='All day' && 'absolute bg-gray-100 pl-1'}`}>{hour}</div>
                    ))}
                </div>
                
            {/* <div className=" flex flex-col items-end">
                {hours.map((hour) => (
                <div key={hour.toISOString()} className="border h-1/2 text-gray-400 align-start text-left px-5">{hour.getHours()}</div>
            ))}
            </div> */}
                {weekDays.map((date) => (
                    <div key={date.toDateString()} className={`static flex flex-col col-span-1 content-center lg:text-2xl text-sm`} onClick={() => setDate(date)}>
                        <div className={`absolute top-28 ml-2 ${date.toDateString() === new Date().toDateString() && 'bg-gray-400'}`}>{date.toLocaleString('default', { month: 'short', day: 'numeric', weekday: 'short' })}</div>
                        {hours.map((hour) => (
                            <div key={hour.toISOString()} className={`border h-[60%] text-gray-400 content-center text-left text-sm ${hour.getDate()!==selectedDate.getDate() && 'h-[4%] w-[14%] border-black absolute bg-gray-100'}`}></div>
                        ))}
            
                    </div>
                ))}
        </div>

);
}



//
