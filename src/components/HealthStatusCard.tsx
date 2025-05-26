
import React from 'react';
import {healthStatusData} from '../data/healthStatus.ts';
const HealthStatusCards = () => {
    return (
      <div className="health-status-cards">
        {healthStatusData.map((item) => (
          <div key={item.id} className={`health-card ${item.status}`}>
            <div className="health-card-icon">{item.icon}</div>
            <div className="health-card-content">
              <h4>{item.title}</h4>
              <p>{item.date}</p>
              <div className={`status-bar ${item.status}`}></div>
            </div>
            <button className="details-button">Details →</button>
          </div>
        ))}
      </div>
    );
  };
  export {HealthStatusCards};