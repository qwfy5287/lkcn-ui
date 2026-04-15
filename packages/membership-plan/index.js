/**
 * lkcn-membership-plan
 * 会员方案选择器组件（会员卡页面底部订阅区）
 *
 * @property {Array<Object>} plans - 方案列表
 *   item: {
 *     name: string,           // 方案名（如"连续包月"）
 *     price: string|number,   // 价格
 *     originalPrice?: string, // 原价
 *     desc?: string,          // 描述（如"到期以¥9.9自动续费 可随时取消"）
 *     badge?: string,         // 角标（如"爆款天天9.9起"）
 *     ctaText?: string,       // 自定义 CTA 文案
 *   }
 * @property {number} active - 当前选中方案索引
 * @property {string} ctaText - CTA 按钮文案（会被 activePlan.ctaText 覆盖）
 * @property {string} agreement - 协议前缀文案（如"开通会员代表接受"）
 * @property {Array<Object>} agreementLinks - 协议链接
 *   item: { text: string, url?: string }
 * @property {string} customClass
 *
 * @event {Function} change - 切换方案，detail: { index, plan }
 * @event {Function} subscribe - 点击订阅，detail: { plan, agreed }
 * @event {Function} linktap - 点击协议链接，detail: { index, link }
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },

  properties: {
    plans: { type: Array, value: [] },
    active: { type: Number, value: 0 },
    ctaText: { type: String, value: '' },
    agreement: { type: String, value: '' },
    agreementLinks: { type: Array, value: [] },
    customClass: { type: String, value: '' },
  },

  data: {
    agreed: false,
    activePlan: {},
  },

  observers: {
    'plans, active': function (plans, active) {
      this.setData({
        activePlan: plans[active] || {},
      });
    },
  },

  methods: {
    onTabTap(e) {
      const index = e.currentTarget.dataset.index;
      if (index === this.data.active) return;
      this.triggerEvent('change', { index, plan: this.data.plans[index] });
    },

    onSubscribe() {
      this.triggerEvent('subscribe', {
        plan: this.data.activePlan,
        agreed: this.data.agreed,
      });
    },

    onToggleAgreed() {
      this.setData({ agreed: !this.data.agreed });
    },

    onLinkTap(e) {
      const index = e.currentTarget.dataset.index;
      const link = this.data.agreementLinks[index];
      this.triggerEvent('linktap', { index, link });
      if (link && link.url) {
        wx.navigateTo({ url: link.url });
      }
    },
  },
});
