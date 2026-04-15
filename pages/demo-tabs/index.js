Page({
  data: {
    tabActive1: 0,
    tabActive2: 0,
    tabsWithBadge: [
      { title: '全部' },
      { title: '待使用', badge: '3' },
      { title: '已过期' },
    ],
    segActive1: 0,
    segActive2: 0,
  },
  onTab1Change(e) { this.setData({ tabActive1: e.detail.index }); },
  onTab2Change(e) { this.setData({ tabActive2: e.detail.index }); },
  onSeg1Change(e) { this.setData({ segActive1: e.detail.index }); },
  onSeg2Change(e) { this.setData({ segActive2: e.detail.index }); },
});
