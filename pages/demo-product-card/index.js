Page({
  data: {
    count1: 0,
    count2: 2,
  },
  onAdd(e) {
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  onCount1Change(e) {
    this.setData({ count1: e.detail.value });
  },
  onCount2Change(e) {
    this.setData({ count2: e.detail.value });
  },
});
