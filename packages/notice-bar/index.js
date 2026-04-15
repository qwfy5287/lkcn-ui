/**
 * lkcn-notice-bar
 * 通知栏组件（首页问候栏 / 公告条）
 *
 * @property {string} text - 通知文案
 * @property {string} icon - 左侧图标 URL
 * @property {string} extra - 右侧附加文案（如 "Lv3 小金鹿"）
 * @property {string} theme - 主题: default | blue | orange | gold
 * @property {boolean} link - 是否可点击（显示箭头）
 * @property {string} customClass
 *
 * @event {Function} tap - 点击通知栏
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    text: { type: String, value: '' },
    icon: { type: String, value: '' },
    extra: { type: String, value: '' },
    theme: { type: String, value: 'blue' },
    link: { type: Boolean, value: false },
    customClass: { type: String, value: '' },
  },
  methods: {
    onTap() { this.triggerEvent('tap'); },
  },
});
