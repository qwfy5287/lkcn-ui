/**
 * lkcn-location-bar
 * 定位栏组件（菜单页顶部门店定位）
 *
 * @property {string} name - 门店名称
 * @property {string} distance - 距离文案，如 "101m"
 * @property {boolean} action - 是否显示右侧操作区 slot
 * @property {string} customClass
 *
 * @event {Function} tap - 点击定位栏（切换门店）
 * @event {Function} actiontap - 点击右侧操作区
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    name: { type: String, value: '' },
    distance: { type: String, value: '' },
    action: { type: Boolean, value: false },
    customClass: { type: String, value: '' },
  },
  methods: {
    onTap() { this.triggerEvent('tap'); },
    onActionTap() { this.triggerEvent('actiontap'); },
  },
});
