/**
 * lkcn-segment
 * 分段切换器（自提/外送）
 *
 * @property {Array<string|Object>} items - 选项数组
 *   string: 直接作为文案
 *   object: { text: string, value?: any }
 * @property {number} active - 当前激活索引
 * @property {boolean} round - 是否为圆角胶囊样式
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} change - 切换选项，detail: { index, item }
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
    round: {
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

      this.triggerEvent('change', {
        index,
        item: this.data.items[index],
      });
    },
  },
});
