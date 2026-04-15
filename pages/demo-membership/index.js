Page({
  data: {
    planActive: 0,
    plans: [
      {
        name: '连续包月',
        price: '9.90',
        originalPrice: '19.90',
        desc: '到期以¥9.9自动续费 可随时取消',
        badge: '爆款天天9.9起',
        ctaText: '开通连续包月 ¥9.90',
      },
      {
        name: '月卡',
        price: '15.90',
        originalPrice: '19.90',
        desc: '',
        ctaText: '开通月卡 ¥15.90',
      },
    ],
    links: [
      { text: '《付费会员服务协议》' },
      { text: '《自动续费说明》' },
    ],
  },
  onPlanChange(e) {
    this.setData({ planActive: e.detail.index });
  },
  onSubscribe(e) {
    const plan = e.detail.plan;
    wx.showModal({
      title: '确认开通',
      content: plan.name + ' ¥' + plan.price,
      showCancel: true,
    });
  },
  onFabTap() {
    wx.showToast({ title: 'AI Lucky!', icon: 'none' });
  },
});
