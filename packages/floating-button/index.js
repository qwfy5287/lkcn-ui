/**
 * lkcn-floating-button
 * 浮动按钮组件（如菜单页 AI Lucky 吉祥物按钮）
 *
 * @property {string} icon - 图标/图片 URL
 * @property {string} text - 文字（icon 不存在时显示）
 * @property {number} right - 距右边距 (rpx)
 * @property {number} bottom - 距底部距离 (rpx)
 * @property {boolean} draggable - 是否可拖拽
 * @property {string} customClass
 *
 * @event {Function} tap - 点击按钮
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },

  properties: {
    icon: { type: String, value: '' },
    text: { type: String, value: '' },
    right: { type: Number, value: 28 },
    bottom: { type: Number, value: 200 },
    draggable: { type: Boolean, value: false },
    customClass: { type: String, value: '' },
  },

  data: {
    positionStyle: '',
    startY: 0,
    currentBottom: 0,
  },

  lifetimes: {
    attached() {
      this._updatePosition();
    },
  },

  observers: {
    'right, bottom': function () {
      this._updatePosition();
    },
  },

  methods: {
    onTap() {
      this.triggerEvent('tap');
    },

    onMove(e) {
      if (!this.data.draggable) return;

      const touch = e.touches[0];
      const sysInfo = wx.getSystemInfoSync();
      const screenH = sysInfo.windowHeight;

      // Convert touch position to bottom value
      const newBottom = screenH - touch.clientY - 54; // 54 = half button size in px
      const clamped = Math.max(100, Math.min(newBottom, screenH - 150));

      this.setData({
        positionStyle: `right: ${this.data.right}rpx; bottom: ${clamped}px;`,
      });
    },

    _updatePosition() {
      this.setData({
        positionStyle: `right: ${this.data.right}rpx; bottom: ${this.data.bottom}rpx;`,
      });
    },
  },
});
