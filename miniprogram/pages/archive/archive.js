const academy = require('../../data/academy');

Page({
  data: {
    academyMeta: academy.academyMeta,
    archiveStats: academy.archiveStats
  },

  goToDepartments() {
    wx.navigateTo({ url: '/pages/departments/departments' });
  },

  goToContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
