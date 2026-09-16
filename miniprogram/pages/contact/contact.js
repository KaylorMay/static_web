const academy = require('../../data/academy');

const emptyForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

Page({
  data: {
    contactDetails: academy.contactDetails,
    subjects: ['申请入院', '研究合作', '异常记录', '其他事宜'],
    subjectIndex: 0,
    form: { ...emptyForm },
    formStatus: '',
    formStatusType: ''
  },

  handleInput(event) {
    const field = event.currentTarget.dataset.field;
    this.setData({
      [`form.${field}`]: event.detail.value,
      formStatus: '',
      formStatusType: ''
    });
  },

  handleSubjectChange(event) {
    const subjectIndex = Number(event.detail.value);
    this.setData({
      subjectIndex,
      'form.subject': this.data.subjects[subjectIndex],
      formStatus: '',
      formStatusType: ''
    });
  },

  handleSubmit() {
    const form = {
      name: this.data.form.name.trim(),
      email: this.data.form.email.trim(),
      subject: this.data.form.subject.trim(),
      message: this.data.form.message.trim()
    };
    const fields = [
      ['name', '请填写姓名'],
      ['email', '请填写邮箱'],
      ['subject', '请选择来信主题'],
      ['message', '请填写记录内容']
    ];
    const missing = fields.find(([key]) => !form[key]);

    if (missing) {
      this.setFormStatus(missing[1], 'error');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      this.setFormStatus('请输入有效的邮箱地址', 'error');
      return;
    }

    this.setData({
      form: { ...emptyForm },
      subjectIndex: 0,
      formStatus: '记录已封存。学院会在安全窗口内回复。',
      formStatusType: 'success'
    });
    wx.showToast({
      title: '记录已封存',
      icon: 'success'
    });
  },

  setFormStatus(message, type) {
    this.setData({
      formStatus: message,
      formStatusType: type
    });
  }
});
