/**
 * lkcn-card
 * 卡片容器组件
 *
 * @property {string} title - 卡片标题
 * @property {string} extra - 右侧附加操作文案（如"查看更多"）
 * @property {boolean} shadow - 是否显示阴影
 * @property {boolean} border - 是否显示边框
 * @property {boolean} footer - 是否启用 footer slot
 * @property {boolean|string} padding - 设为 false 可移除内边距
 * @property {string} radius - 自定义圆角，如 "40rpx"
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} tap - 点击卡片
 * @event {Function} extratap - 点击右侧附加区域
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
    multipleSlots: true,
  },

  properties: {
    title: { type: String, value: '' },
    extra: { type: String, value: '' },
    shadow: { type: Boolean, value: false },
    border: { type: Boolean, value: false },
    footer: { type: Boolean, value: false },
    padding: { type: null, value: true },
    radius: { type: String, value: '' },
    customClass: { type: String, value: '' },
  },

  methods: {
    onClick() {
      this.triggerEvent('tap');
    },
    onExtraTap(e) {
      this.triggerEvent('extratap');
    },
  },
});
