/**
 * lkcn-tabs
 * 标签页切换组件
 *
 * @property {Array<string|Object>} tabs - 标签数组
 *   string: 直接作为标题
 *   object: { title: string, badge?: string|number }
 * @property {number} active - 当前激活的标签索引
 * @property {boolean} sticky - 是否吸顶
 * @property {boolean} showContent - 是否显示内容区 slot
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} change - 切换标签，detail: { index, tab }
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    tabs: {
      type: Array,
      value: [],
      observer: '_updateLine',
    },
    active: {
      type: Number,
      value: 0,
      observer: '_updateLine',
    },
    sticky: {
      type: Boolean,
      value: false,
    },
    showContent: {
      type: Boolean,
      value: false,
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  data: {
    lineStyle: '',
  },

  lifetimes: {
    ready() {
      this._updateLine();
    },
  },

  methods: {
    onTabTap(e) {
      const index = e.currentTarget.dataset.index;
      if (index === this.data.active) return;

      this.triggerEvent('change', {
        index,
        tab: this.data.tabs[index],
      });
    },

    _updateLine() {
      // Wait for next tick to ensure DOM is ready
      setTimeout(() => {
        const query = this.createSelectorQuery();
        query.selectAll('.lkcn-tabs__tab').boundingClientRect();
        query.select('.lkcn-tabs__nav').boundingClientRect();
        query.exec((res) => {
          if (!res || !res[0] || !res[1]) return;

          const tabRects = res[0];
          const navRect = res[1];
          const active = this.data.active;

          if (!tabRects[active]) return;

          const activeTab = tabRects[active];
          const lineWidth = 40; // rpx equivalent width for the indicator
          const left = activeTab.left - navRect.left + (activeTab.width - lineWidth) / 2;

          this.setData({
            lineStyle: `width: ${lineWidth}px; transform: translateX(${left}px);`,
          });
        });
      }, 50);
    },
  },
});
