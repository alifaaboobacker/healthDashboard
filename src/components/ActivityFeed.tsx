import React from 'react';
const ActivityFeed = () => {
    const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const activityData = [3, 5, 2, 4, 6, 3, 4];
    
    return (
      <div className="activity-feed">
        <h3>Activity</h3>
        <p className="activity-summary">3 appointment on this week</p>
        <div className="activity-chart">
          {days.map((day, index) => (
            <div key={day} className="chart-day">
              <div className="chart-bars">
                <div 
                  className="chart-bar active" 
                  style={{ height: `${activityData[index] * 10}px` }}
                ></div>
                <div 
                  className="chart-bar inactive" 
                  style={{ height: `${(8 - activityData[index]) * 8}px` }}
                ></div>
              </div>
              <span className="chart-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export {ActivityFeed};
  