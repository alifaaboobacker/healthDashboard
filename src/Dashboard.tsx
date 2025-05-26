import React from 'react';
import {AnatomySection} from './components/AnatomySection.tsx';
import {ActivityFeed} from './components/ActivityFeed.tsx';
import {HealthStatusCards} from './components/HealthStatusCard.tsx';
import {CalendarView} from './components/CalenderView.tsx';
import {UpcomingSchedule} from './components/UpcomingSchedule.tsx';
import { Search, Bell, Plus } from 'lucide-react';
const DashboardMainContent = () => {
    return (
      <main className="main-content">
        <div className="dashboard-header">
        <div className="search-container">
        <div className="header-left">      
        <Search className="search-icon" size={20} />
        <input type="text" placeholder="Search" className="search-input" />
          </div>       
            <div className="header-right">
          <Bell className="notification-icon" size={20} />
          <div className="user-profile">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="user-avatar" />
          </div>
          
          <button className="add-button">
            <Plus size={20} />
          </button>
        </div>
          </div>
          <h2>Dashboard</h2>
        </div>
        
        <div className="dashboard-grid">
          <div className="left-column">
            <AnatomySection />
            <ActivityFeed />
          </div>
          
          <div className="middle-column">
            <HealthStatusCards />
          </div>
          
          <div className="right-column">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </main>
    );
  };
  export { DashboardMainContent };