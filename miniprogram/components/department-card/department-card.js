Component({
  data: {
    expanded: false
  },

  methods: {
    toggle() {
      const expanded = !this.data.expanded;
      this.setData({ expanded });
      this.triggerEvent('toggle', {
        id: this.properties.department.id,
        expanded
      });
    }
  }
});
