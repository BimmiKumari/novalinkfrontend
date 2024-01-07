import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 12, 1),
        end: new Date(2023, 12, 9),
    },
    {
        title: "Christmas Eve",
        allDay: true,
        start: new Date(2023, 10, 24),
        end: new Date(2023, 10, 25),
    },
    {
        title: "Christmas",
        allDay: true,
        start: new Date(2023, 10, 25),
        end: new Date(2023, 10, 26),
    },

    {
        title: "Vacation",
        start: new Date(2023, 7, 7),
        end: new Date(2023, 7, 10),
    },
   
];

function App() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("Event Added Successfully"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div style={{justifyContent:'center',alignItems:'center'}}>
        <div className="App" style={{ backgroundColor:"#02042a" ,margin:'20px'}}>
            <h2 className="bright-glowing-text ">Plan Your Event With Novalink</h2>
            <div style={{color:'white',display:'flex',justifyContent:'center',alignItems:'center',columnGap:'40px'}}>
                <input type="text" placeholder="Add Your Event" className="event_box" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" ,color:"white"}} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button className="Marks" onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" ,color:'white'}} />
        </div>
        </div>
    );
}

export default App;