/**
 * lkcn-badge
 * 徽标组件
 *
 * @property {string|number} content - 徽标内容（数字或文字）
 * @property {boolean} dot - 是否只显示小红点
 * @property {number} max - 最大数字，超过显示 max+
 * @property {Array} offset - 偏移量 [top, right]，如 ['-4rpx', '-8rpx']
 * @property {string} customClass - 自定义 class
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    content: { type: null, value: '' },
    dot: { type: Boolean, value: false },
    max: { type: Number, value: 99 },
    offset: { type: Array, value: null },
    customClass: { type: String, value: '' },
  },

  data: {
    display: '',
  },

  observers: {
    'content, max': function (content, max) {
      const num = Number(content);
      if (!isNaN(num) && num > max) {
        this.setData({ display: max + '+' });
      } else {
        this.setData({ display: String(content) });
      }
    },
  },
});
