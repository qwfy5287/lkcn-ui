/**
 * lkcn-search-bar
 * 搜索栏组件
 *
 * @property {string} value - 搜索框内容
 * @property {string} placeholder - 占位文案
 * @property {boolean} autoFocus - 是否自动聚焦
 * @property {boolean} showIcon - 是否显示搜索图标
 * @property {boolean} showClear - 是否显示清除按钮
 * @property {boolean} showAction - 是否显示取消按钮
 * @property {string} actionText - 取消按钮文案
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} input - 输入事件，detail: { value }
 * @event {Function} search - 确认搜索，detail: { value }
 * @event {Function} clear - 清除内容
 * @event {Function} cancel - 点击取消
 * @event {Function} focus - 获取焦点
 * @event {Function} blur - 失去焦点
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    value: {
      type: String,
      value: '',
    },
    placeholder: {
      type: String,
      value: '搜索',
    },
    autoFocus: {
      type: Boolean,
      value: false,
    },
    showIcon: {
      type: Boolean,
      value: true,
    },
    showClear: {
      type: Boolean,
      value: true,
    },
    showAction: {
      type: Boolean,
      value: true,
    },
    actionText: {
      type: String,
      value: '取消',
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  data: {
    focus: false,
  },

  methods: {
    onFocus(e) {
      this.setData({ focus: true });
      this.triggerEvent('focus', e.detail);
    },

    onBlur(e) {
      // Delay to allow action tap to fire first
      setTimeout(() => {
        this.setData({ focus: false });
      }, 150);
      this.triggerEvent('blur', e.detail);
    },

    onInput(e) {
      this.triggerEvent('input', { value: e.detail.value });
    },

    onSearch(e) {
      this.triggerEvent('search', { value: e.detail.value });
    },

    onClear() {
      this.triggerEvent('input', { value: '' });
      this.triggerEvent('clear');
    },

    onCancel() {
      this.setData({ focus: false });
      this.triggerEvent('input', { value: '' });
      this.triggerEvent('cancel');
    },
  },
});
