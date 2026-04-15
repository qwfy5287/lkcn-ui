/**
 * lkcn-level-card
 * 等级卡片组件（我的页面会员等级展示）
 *
 * @property {number} level - 等级数字（如 3）
 * @property {string} levelName - 等级名称（如 "小金鹿"）
 * @property {number|string} points - 当前积分
 * @property {string} pointsIcon - 积分图标 URL
 * @property {string} expiry - 到期日期文案（如 "2026-05-25到期"）
 * @property {string} theme - 主题: gold | blue | brown
 * @property {boolean} showProgress - 是否显示进度条
 * @property {number} progressPercent - 进度百分比 0-100
 * @property {string} hint - 升级提示文案（如 "还差53个小蓝豆可升级，去冲刺"）
 * @property {string} customClass
 *
 * @event {Function} hinttap - 点击升级提示
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    level: { type: Number, value: 1 },
    levelName: { type: String, value: '' },
    points: { type: null, value: 0 },
    pointsIcon: { type: String, value: '' },
    expiry: { type: String, value: '' },
    theme: { type: String, value: 'gold' },
    showProgress: { type: Boolean, value: true },
    progressPercent: { type: Number, value: 0 },
    hint: { type: String, value: '' },
    customClass: { type: String, value: '' },
  },
  methods: {
    onHintTap() { this.triggerEvent('hinttap'); },
  },
});
