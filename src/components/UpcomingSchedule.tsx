import React from 'react';
import {upcomingAppointments} from '../data/appointments.ts';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((dayGroup, index) => (
        <div key={index} className="schedule-day">
          <h4 className="day-title">{dayGroup.day}</h4>
          <div className="day-appointments">
            {dayGroup.appointments.map((appointment, idx) => (
              <div key={idx} className="appointment-item">
                <div className="appointment-icon">{appointment.icon}</div>
                <div className="appointment-details">
                  <p className="appointment-title">{appointment.title}</p>
                  <p className="appointment-time">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { UpcomingSchedule };