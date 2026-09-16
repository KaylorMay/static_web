const academy = require('../../data/academy');

Page({
  data: {
    academyMeta: academy.academyMeta,
    archiveStats: academy.archiveStats,
    departments: academy.departments,
    calendarItems: academy.calendarItems
  },

  goToArchive() {
    wx.switchTab({ url: '/pages/archive/archive' });
  },

  goToDepartments() {
    wx.navigateTo({ url: '/pages/departments/departments' });
  },

  goToCalendar() {
    wx.switchTab({ url: '/pages/calendar/calendar' });
  },

  goToContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
