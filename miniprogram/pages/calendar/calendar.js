const academy = require('../../data/academy');

Page({
  data: {
    calendarItems: academy.calendarItems
  },

  goToContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
