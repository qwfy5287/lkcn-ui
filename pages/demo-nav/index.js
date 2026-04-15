Page({
  data: {
    searchVal: '',
    catActive: 0,
    categories: [
      { text: '人气Top', icon: '' },
      { text: '今日特价' },
      { text: '周边NEW', tag: '周边NEW', tagColor: 'blue' },
      { text: '自嘲熊' },
      { text: '埃塞！埃塞', tag: '产地季', tagColor: 'orange' },
      { text: '埃塞金烘', tag: '埃塞金烘', tagColor: 'gold' },
      { text: '当季新品' },
      { text: '生椰家族' },
      { text: '果C美式', tag: '苦瓜轻体', tagColor: 'green' },
      { text: '大师咖啡' },
      { text: '美式家族' },
      { text: '风味拿铁' },
      { text: '抹茶系列' },
      { text: '果蔬茶' },
      { text: '轻乳茶' },
    ],
  },
  onSearchInput(e) {
    this.setData({ searchVal: e.detail.value });
  },
  onSearch(e) {
    wx.showToast({ title: '搜索: ' + e.detail.value, icon: 'none' });
  },
  onLocationTap() {
    wx.showToast({ title: '切换门店', icon: 'none' });
  },
  onCatChange(e) {
    this.setData({ catActive: e.detail.index });
  },
});
