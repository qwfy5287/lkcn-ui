Page({
  data: {
    grid3: [
      { icon: 'https://placehold.co/80/1A6EFF/fff?text=1', text: '到店取', desc: '提前点单免排队' },
      { icon: 'https://placehold.co/80/1A6EFF/fff?text=2', text: '幸运送', desc: '外卖及时送达' },
      { icon: 'https://placehold.co/80/1A6EFF/fff?text=3', text: '瑞幸即享', desc: '茉莉美式上新' },
    ],
    grid4: [
      { icon: 'https://placehold.co/60/1A6EFF/fff?text=A', text: '咖啡卡券', desc: '立享优惠' },
      { icon: 'https://placehold.co/60/1A6EFF/fff?text=B', text: '礼品卡', desc: '送TA咖啡' },
      { icon: 'https://placehold.co/60/1A6EFF/fff?text=C', text: '福利中心', desc: '天天得福利' },
      { icon: 'https://placehold.co/60/1A6EFF/fff?text=D', text: '拼单满减', desc: '一起更划算' },
    ],
    grid5: [
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=1', text: '我的订单' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=2', text: '咖啡卡券' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=3', text: '优惠券' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=4', text: '招商加盟' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=5', text: '租赁合作' },
    ],
    grid5badge: [
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=1', text: '我的订单' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=2', text: '咖啡卡券' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=3', text: '优惠券', badge: '11' },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=4', text: '招商加盟', dot: true },
      { icon: 'https://placehold.co/48/1A6EFF/fff?text=5', text: '租赁合作' },
    ],
  },
  onItemTap(e) {
    wx.showToast({ title: e.detail.item.text, icon: 'none' });
  },
});
