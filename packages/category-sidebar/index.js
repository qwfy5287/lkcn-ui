/**
 * lkcn-category-sidebar
 * 分类侧边栏组件（菜单页左侧分类导航）
 *
 * @property {Array<string|Object>} categories - 分类列表
 *   string: 直接作为文案
 *   object: { text: string, icon?: string, tag?: string, tagColor?: string, dot?: boolean }
 * @property {number} active - 当前激活索引
 * @property {string} height - 侧边栏高度，默认 '100vh'
 * @property {string} customClass
 *
 * @event {Function} change - 切换分类，detail: { index, category }
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    categories: { type: Array, value: [] },
    active: { type: Number, value: 0 },
    height: { type: String, value: '100vh' },
    customClass: { type: String, value: '' },
  },
  methods: {
    onItemTap(e) {
      const index = e.currentTarget.dataset.index;
      if (index === this.data.active) return;
      this.triggerEvent('change', {
        index,
        category: this.data.categories[index],
      });
    },
  },
});
