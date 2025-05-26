import React from 'react';
import {navigationLinks} from '../data/navigation.ts';

const Sidebar = () => {
    return (
      <aside className="sidebar">
        <div className='header-left'>
        <h1 className="logo">
            <span className="logo-health">Health</span>
            <span className="logo-care">care.</span>
          </h1>
          </div>
        <div className="sidebar-section">
          <h3 className="sidebar-heading">General</h3>
          <nav className="nav-links">
            {navigationLinks
              .filter(link => ['dashboard', 'history', 'calendar', 'appointments', 'statistics', 'tests'].includes(link.id))
              .map((link) => {
                const IconComponent = link.icon;
                return (
                  <a key={link.id} href="#" className={`nav-link ${link.active ? 'active' : ''}`}>
                    <IconComponent size={20} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
          </nav>

          <h3 className="sidebar-heading">Tools</h3>
          <nav className="nav-links">
            {navigationLinks
              .filter(link => ['chat', 'support'].includes(link.id))
              .map((link) => {
                const IconComponent = link.icon;
                return (
                  <a key={link.id} href="#" className={`nav-link ${link.active ? 'active' : ''}`}>
                    <IconComponent size={20} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
          </nav>

          <nav className="nav-links">
            {navigationLinks
              .filter(link => link.id === 'setting')
              .map((link) => {
                const IconComponent = link.icon;
                return (
                  <a key={link.id} href="#" className={`nav-link ${link.active ? 'active' : ''}`}>
                    <IconComponent size={20} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
          </nav>
        </div>
      </aside>
    );
  };

export {Sidebar};