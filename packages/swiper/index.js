/**
 * lkcn-swiper
 * 轮播图组件
 *
 * 封装原生 swiper，增加瑞幸风格的圆点指示器（active dot 拉长为胶囊形）
 * 和可选的文字叠加层。
 *
 * @property {Array<string|Object>} items - 轮播项
 *   string: 图片 URL
 *   object: { image: string, title?: string, subtitle?: string, url?: string }
 * @property {number} current - 当前索引
 * @property {string} height - 轮播高度，默认 '360rpx'
 * @property {boolean} autoplay - 是否自动播放
 * @property {number} interval - 自动播放间隔 (ms)
 * @property {number} duration - 滑动动画时长 (ms)
 * @property {boolean} circular - 是否循环播放
 * @property {boolean} showDots - 是否显示指示点
 * @property {string} imageMode - 图片裁剪模式
 * @property {string} customClass
 *
 * @event {Function} change - 切换时触发，detail: { current, source }
 * @event {Function} itemtap - 点击轮播项，detail: { index, item }
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },

  properties: {
    items: { type: Array, value: [] },
    current: { type: Number, value: 0 },
    height: { type: String, value: '360rpx' },
    autoplay: { type: Boolean, value: true },
    interval: { type: Number, value: 4000 },
    duration: { type: Number, value: 500 },
    circular: { type: Boolean, value: true },
    showDots: { type: Boolean, value: true },
    imageMode: { type: String, value: 'aspectFill' },
    customClass: { type: String, value: '' },
  },

  data: {
    innerCurrent: 0,
  },

  lifetimes: {
    attached() {
      this.setData({ innerCurrent: this.data.current });
    },
  },

  methods: {
    onChange(e) {
      const { current, source } = e.detail;
      this.setData({ innerCurrent: current });
      this.triggerEvent('change', { current, source });
    },

    onItemTap(e) {
      const { index, item } = e.currentTarget.dataset;
      this.triggerEvent('itemtap', { index, item });

      if (item && item.url) {
        wx.navigateTo({ url: item.url });
      }
    },
  },
});
