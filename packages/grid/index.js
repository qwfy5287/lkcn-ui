/**
 * lkcn-grid
 * 宫格导航组件
 *
 * @property {Array<Object>} items - 宫格项数组
 *   item: { icon: string, text: string, desc?: string, badge?: string|number, dot?: boolean, url?: string }
 * @property {number} column - 列数: 3 | 4 | 5
 * @property {boolean} border - 是否显示边框
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} itemtap - 点击某项，detail: { index, item }
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    items: {
      type: Array,
      value: [],
    },
    column: {
      type: Number,
      value: 4,
    },
    border: {
      type: Boolean,
      value: false,
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  methods: {
    onItemTap(e) {
      const { index, item } = e.currentTarget.dataset;
      this.triggerEvent('itemtap', { index, item });

      // Auto-navigate if item has url
      if (item && item.url) {
        wx.navigateTo({ url: item.url });
      }
    },
  },
});
