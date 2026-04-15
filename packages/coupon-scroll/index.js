/**
 * lkcn-coupon-scroll
 * 优惠券横滑栏组件
 *
 * @property {Array<Object>} coupons - 优惠券数组
 *   item: { value: string|number, label?: string, actionText?: string }
 * @property {string} customClass
 *
 * @event {Function} coupontap - 点击优惠券，detail: { index, coupon }
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    coupons: { type: Array, value: [] },
    customClass: { type: String, value: '' },
  },
  methods: {
    onCouponTap(e) {
      const { index, coupon } = e.currentTarget.dataset;
      this.triggerEvent('coupontap', { index, coupon });
    },
  },
});
