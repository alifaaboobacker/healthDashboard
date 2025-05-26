import React from 'react';
import { Search, Bell, Plus, Grid, History, Calendar, Users, BarChart3, TestTube, MessageCircle, HelpCircle, Settings, Heart, ChevronLeft, ChevronRight, Eye, Stethoscope, Brain } from 'lucide-react';
const upcomingAppointments = [
    {
      day: 'On Thursday',
      appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon: '📋' },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️' }
      ]
    },
    {
      day: 'On Saturday',
      appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: '❤️' },
        { title: 'Neurologist', time: '16:00 PM', icon: '🧠' }
      ]
    }
  ];
export {upcomingAppointments};