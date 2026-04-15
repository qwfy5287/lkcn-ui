/**
 * lkcn-tabbar
 * 底部导航栏组件
 *
 * 通常配合自定义 tabBar 使用，替代原生 tabBar 以获得更灵活的样式控制。
 *
 * @property {Array<Object>} items - 导航项数组
 *   item: {
 *     icon: string,           // 默认图标路径
 *     activeIcon?: string,    // 激活态图标路径（可选，不传则使用 icon）
 *     text: string,           // 标签文案
 *     badge?: string|number,  // 徽标数字
 *     dot?: boolean,          // 是否显示小红点
 *     url?: string,           // 跳转路径（可选）
 *   }
 * @property {number} active - 当前激活的导航项索引
 * @property {boolean} fixed - 是否固定在底部
 * @property {boolean} border - 是否显示上边框
 * @property {boolean} placeholder - 固定定位时是否生成等高占位元素
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} change - 切换导航项，detail: { index, item }
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
    active: {
      type: Number,
      value: 0,
    },
    fixed: {
      type: Boolean,
      value: true,
    },
    border: {
      type: Boolean,
      value: true,
    },
    placeholder: {
      type: Boolean,
      value: true,
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  methods: {
    onItemTap(e) {
      const index = e.currentTarget.dataset.index;
      if (index === this.data.active) return;

      const item = this.data.items[index];
      this.triggerEvent('change', { index, item });

      // Auto-navigate if item has url (switchTab for tabBar pages)
      if (item && item.url) {
        wx.switchTab({ url: item.url });
      }
    },
  },
});
