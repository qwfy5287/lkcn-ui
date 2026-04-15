/**
 * lkcn-promo-card
 * 促销卡片组件
 *
 * @property {string} title - 主标题
 * @property {string} subtitle - 副标题
 * @property {string} image - 右侧/顶部配图 URL
 * @property {string} bgColor - 背景色
 * @property {string} bgImage - 背景图 URL
 * @property {string} titleColor - 标题颜色
 * @property {string} subtitleColor - 副标题颜色
 * @property {string} actionText - 操作按钮文案（如"立即购买"）
 * @property {string} layout - 布局: horizontal | vertical | banner
 * @property {string} customClass
 *
 * @event {Function} tap - 点击卡片
 * @event {Function} actiontap - 点击操作按钮
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    title: { type: String, value: '' },
    subtitle: { type: String, value: '' },
    image: { type: String, value: '' },
    bgColor: { type: String, value: '' },
    bgImage: { type: String, value: '' },
    titleColor: { type: String, value: '' },
    subtitleColor: { type: String, value: '' },
    actionText: { type: String, value: '' },
    layout: { type: String, value: 'horizontal' },
    customClass: { type: String, value: '' },
  },
  methods: {
    onTap() { this.triggerEvent('tap'); },
    onActionTap(e) { this.triggerEvent('actiontap'); },
  },
});
