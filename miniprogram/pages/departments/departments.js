const academy = require('../../data/academy');

Page({
  data: {
    departments: academy.departments
  },

  goToContact() {
    wx.switchTab({ url: '/pages/contact/contact' });
  }
});
