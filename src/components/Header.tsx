import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
const Header = () => {
    return (
      <header className="header">
        <div className="header-left">
          
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
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
      </header>
    );
  };
export { Header };