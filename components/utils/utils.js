const utils = {
  getComponent: function(selector) {
    const pages = getCurrentPages();
    const current = pages[pages.length - 1];
    //const component = current.selectAllComponents(selector);
    const component = current.selectComponent(selector);
    if (!component) {
      return null;
    }
    return component;
  },
  toast: function(options) {
    const {
      //selector = '.tui-tips-ctx'
      selector = '#tui-tips-ctx'
    } = options;
    const component = utils.getComponent(selector);
    if (component) {
      component.showTips(options);
    }
  }
};
module.exports = {
  toast: utils.toast
};