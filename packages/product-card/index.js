/**
 * lkcn-product-card
 * 商品卡片组件（菜单列表项）
 *
 * 横向布局: 左侧商品图 + 右侧信息区(标题/标签/描述/价格/加购按钮)
 *
 * @property {string} image - 商品图片 URL
 * @property {string} title - 商品名称
 * @property {Array<string>} tags - 标签列表，如 ['全球销量第一', 'IIAC金奖']
 * @property {string} desc - 商品描述文案
 * @property {string|number} price - 当前价格
 * @property {string|number} originalPrice - 原价（划线价）
 * @property {string} pricePrefix - 价格前缀文案，如 "预估到手" / "一口价"
 * @property {string} badge - 图片角标文字，如 "新品" / "回归"
 * @property {string} badgeColor - 角标颜色: blue(default) | orange | green
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} tap - 点击卡片
 * @event {Function} add - 点击加购按钮，detail: { item }
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    image: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    tags: {
      type: Array,
      value: [],
    },
    desc: {
      type: String,
      value: '',
    },
    price: {
      type: null,
      value: '',
    },
    originalPrice: {
      type: null,
      value: '',
    },
    pricePrefix: {
      type: String,
      value: '',
    },
    badge: {
      type: String,
      value: '',
    },
    badgeColor: {
      type: String,
      value: 'blue', // blue | orange | green
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  methods: {
    onCardTap() {
      this.triggerEvent('tap', this._getItemData());
    },

    onAdd(e) {
      // catchtap prevents event bubbling to card
      this.triggerEvent('add', this._getItemData());
    },

    _getItemData() {
      const { image, title, price, originalPrice } = this.data;
      return { image, title, price, originalPrice };
    },
  },
});
