import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    

    return (
        <div className="custom-calendar-container w-fit  text-center">
            <h1 className="bg-primaryColor w-full mb-2 p-2 rounded-md">Calendar</h1>
            <div className="custom-calendar">
                <Calendar
                className="rounded-md border-none shadow-md bg-gradient-to-r from-red-500 to-[#0058ff]"
                    onChange={onChange}
                    value={date}
                    calendarType="US"
                    minDate={new Date()}
                    maxDate={new Date(2024, 11, 31)}
                    tileClassName={({ date }) =>{

                        date.getDay() === 0 ? ' text-white text-bold mb-1 block ' : ''
                        
                    }
                    }
                    taile
                />
            </div>
        </div>
    );
}

export default MyCalendar;
