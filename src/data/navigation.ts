import React from 'react';
import { Grid, History, Calendar, Users, BarChart3, TestTube, MessageCircle, HelpCircle, Settings } from 'lucide-react';
const navigationLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: Grid, active: true },
    { id: 'history', label: 'History', icon: History },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: Users },
    { id: 'statistics', label: 'Statistics', icon: BarChart3 },
    { id: 'tests', label: 'Tests', icon: TestTube },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'setting', label: 'Setting', icon: Settings }
  ];
export {navigationLinks};