/**
 * lkcn-stepper
 * 步进器（加购数量控制）
 *
 * 瑞幸菜单页交互: value=0 时只显示 + 圆形按钮,
 * value>0 时展开为 [-] [数字] [+] 三段式控件。
 *
 * @property {number} value - 当前值
 * @property {number} min - 最小值
 * @property {number} max - 最大值
 * @property {number} step - 步长
 * @property {string} customClass
 *
 * @event {Function} change - 值变化，detail: { value }
 * @event {Function} add - 点击增加
 * @event {Function} minus - 点击减少
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },

  properties: {
    value: { type: Number, value: 0 },
    min: { type: Number, value: 0 },
    max: { type: Number, value: 99 },
    step: { type: Number, value: 1 },
    customClass: { type: String, value: '' },
  },

  methods: {
    onAdd() {
      const next = Math.min(this.data.value + this.data.step, this.data.max);
      this._emit(next);
      this.triggerEvent('add');
    },

    onMinus() {
      const next = Math.max(this.data.value - this.data.step, this.data.min);
      this._emit(next);
      this.triggerEvent('minus');
    },

    _emit(value) {
      if (value !== this.data.value) {
        this.triggerEvent('change', { value });
      }
    },
  },
});
