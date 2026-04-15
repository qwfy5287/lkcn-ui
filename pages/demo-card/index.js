Page({
  data: {
    coupons: [
      { value: '9.9', label: '商品兑换券', actionText: '使用' },
      { value: '9.9', label: '商品兑换券', actionText: '使用' },
      { value: '10.9', label: '商品兑换券', actionText: '使用' },
      { value: '5', label: '满减券', actionText: '使用' },
    ],
  },
  onCouponTap(e) {
    wx.showToast({ title: '使用 ¥' + e.detail.coupon.value + ' 券', icon: 'none' });
  },
});
