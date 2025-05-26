
import React from 'react';
import {calendarData} from '../data/calender.ts';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const CalendarView = () => {
    const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    
    return (
      <div className="calendar-section">
        <div className="calendar-header">
          <span className="this-week">This Week</span>
          <div className="calendar-navigation">
            <h3>{calendarData.month}</h3>
            <div className="nav-arrows">
              <ChevronLeft size={20} />
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
        
        <div className="calendar-grid">
          <div className="calendar-weekdays">
            {weekDays.map(day => (
              <div key={day} className="weekday">{day}</div>
            ))}
          </div>
          <div className="calendar-dates">
            {calendarData.days.map(day => (
              <div key={day.date} className="calendar-date">
                <div className="date-number">{day.date}</div>
                <div className="date-appointments">
                  {day.appointments.map((time, index) => (
                    <div key={index} className="appointment-time">{time}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="appointment-cards">
          <div className="appointment-card dentist">
            <div className="appointment-icon">🦷</div>
            <div className="appointment-info">
              <h4>Dentist</h4>
              <p>09:00-11:00</p>
              <small>Dr. Cameron Williamson</small>
            </div>
          </div>
          <div className="appointment-card physiotherapy">
            <div className="appointment-icon">💪</div>
            <div className="appointment-info">
              <h4>Physiotherapy Appointment</h4>
              <p>11:00-12:00</p>
              <small>Dr. Kevin Djones</small>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export { CalendarView };