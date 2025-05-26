import React from "react";
import {Sidebar} from "./components/SideBar.tsx";
import { DashboardMainContent } from "./Dashboard.tsx";
const App = () => {
  return (
    <div className="app">

      <div className="app-body">
        <Sidebar />
        <DashboardMainContent />
      </div>
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: #f8fafc;
          color: #1e293b;
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header Styles */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 600;
          margin-left: 20px;
          margin-bottom: 15px;
        }

        .logo-health {
          color: #06b6d4;
        }

        .logo-care {
          color: #1e293b;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: #94a3b8;
        }

        .search-input {
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 0.5rem;
          width: 300px;
          font-size: 0.875rem;
          background: #f8fafc;
        }

        .search-input:focus {
          outline: none;
          border-color: #06b6d4;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .notification-icon {
          color: #64748b;
          cursor: pointer;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .add-button {
          background: #4f46e5;
          color: white;
          border: none;
          border-radius: 0.5rem;
          padding: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* App Body */
        .app-body {
          display: flex;
          flex: 1;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 240px;
          background: white;
          border-right: 1px solid #e2e8f0;
          padding: 2rem 0;
        }

        .sidebar-section {
          padding: 0 1.5rem;
        }

        .sidebar-heading {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          color: #64748b;
          text-decoration: none;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .nav-link:hover {
          background: #f1f5f9;
          color: #1e293b;
        }

        .nav-link.active {
          background: #eff6ff;
          color: #2563eb;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }

        .dashboard-header h2 {
          font-size: 1.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 400px;
          gap: 2rem;
        }

        /* Anatomy Section */
        .anatomy-section {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 1.5rem;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .anatomy-container {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .anatomy-figure {
          position: relative;
        }

        .anatomy-image {
          width: 200px;
          height: 300px;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .anatomy-indicator {
          position: absolute;
          background: white;
          padding: 0.5rem 1rem;
          border-radius: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .healthy-heart {
          top: 80px;
          right: -80px;
          background: #3b82f6;
          color: white;
        }

        .healthy-leg {
          bottom: 60px;
          left: -60px;
          background: #06b6d4;
          color: white;
        }

        /* Health Status Cards */
        .health-status-cards {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .health-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .health-card-icon {
          font-size: 2rem;
        }

        .health-card-content {
          flex: 1;
        }

        .health-card-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .health-card-content p {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .status-bar {
          height: 4px;
          border-radius: 2px;
          width: 100%;
        }

        .status-bar.healthy {
          background: #10b981;
        }

        .status-bar.warning {
          background: #f59e0b;
        }

        .details-button {
          background: none;
          border: none;
          color: #06b6d4;
          font-size: 0.875rem;
          cursor: pointer;
        }

        /* Calendar Section */
        .calendar-section {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .this-week {
          color: #64748b;
          font-size: 0.875rem;
        }

        .calendar-navigation {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .calendar-navigation h3 {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .nav-arrows {
          display: flex;
          gap: 0.5rem;
        }

        .nav-arrows svg {
          cursor: pointer;
          color: #64748b;
        }

        .calendar-weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .weekday {
          text-align: center;
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .calendar-dates {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.5rem;
        }

        .calendar-date {
          text-align: center;
          padding: 0.5rem 0.25rem;
        }

        .date-number {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .date-appointments {
          display: flex;
          flex-direction: column;
          gap: 0.125rem;
        }

        .appointment-time {
          background: #e0e7ff;
          color: #3730a3;
          font-size: 0.75rem;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
        }

        .appointment-cards {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .appointment-card {
          flex: 1;
          padding: 1rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .appointment-card.dentist {
          background: #312e81;
          color: white;
        }

        .appointment-card.physiotherapy {
          background: #e0e7ff;
          color: #312e81;
        }

        .appointment-icon {
          font-size: 1.5rem;
        }

        .appointment-info h4 {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .appointment-info p {
          font-size: 0.75rem;
          margin-bottom: 0.25rem;
        }

        .appointment-info small {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        /* Upcoming Schedule */
        .upcoming-schedule {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .upcoming-schedule h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .schedule-day {
          margin-bottom: 1.5rem;
        }

        .day-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #64748b;
          margin-bottom: 0.75rem;
        }

        .day-appointments {
          display: flex;
          gap: 1rem;
        }

        .appointment-item {
          background: #f1f5f9;
          padding: 1rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .appointment-details {
          flex: 1;
        }

        .appointment-title {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .appointment-time {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Activity Feed */
        .activity-feed {
          background: white;
          border-radius: 1rem;
          padding: 1.2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          height: 280px;
        }

        .activity-feed h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .activity-summary {
          color: #64748b;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
        }

        .activity-chart {
          display: flex;
          justify-content: space-between;
          align-items: end;
          height: 120px;
          padding: 0 1rem;
        }

        .chart-day {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .chart-bars {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .chart-bar {
          width: 8px;
          border-radius: 4px;
        }

        .chart-bar.active {
          background: #06b6d4;
        }

        .chart-bar.inactive {
          background: #e2e8f0;
        }

        .chart-label {
          font-size: 0.75rem;
          color: #64748b;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .dashboard-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .right-column {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 200px;
          }
          
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
          
          .header-left {
            gap: 1rem;
          }
          
          .search-input {
            width: 200px;
          }
          
          .main-content {
            padding: 1rem;
          }
        }

        @media (max-width: 640px) {
          .app-body {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            padding: 1rem 0;
          }
          
          .nav-links {
            flex-direction: row;
            overflow-x: auto;
            padding: 0 1rem;
            gap: 0.5rem;
          }
          
          .nav-link {
            white-space: nowrap;
            flex-shrink: 0;
          }
          
          .header {
            padding: 1rem;
          }
          
          .header-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .search-input {
            width: 100%;
          }
          
          .appointment-cards {
            flex-direction: column;
          }
          
          .day-appointments {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export {App};