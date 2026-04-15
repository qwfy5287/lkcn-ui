Page({
  data: {
    swiperItems: [
      { image: 'https://placehold.co/750x320/3D2D1F/fff?text=Banner+1', title: '埃塞金烘系列', subtitle: 'WBC世界亚军诚意推荐' },
      { image: 'https://placehold.co/750x320/1A6EFF/fff?text=Banner+2', title: '茉莉美式咖啡液', subtitle: '风味奇遇季' },
      { image: 'https://placehold.co/750x320/2B7D5B/fff?text=Banner+3', title: '瑞幸即享', subtitle: '醇香浓缩咖啡液' },
    ],
  },
  onSwiperTap(e) {
    wx.showToast({ title: '点击了 Banner ' + (e.detail.index + 1), icon: 'none' });
  },
});
