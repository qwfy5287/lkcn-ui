/**
 * lkcn-price
 * 价格展示组件
 *
 * 将价格数字拆分为符号、整数、小数三部分分别渲染，
 * 符合瑞幸"整数大 + 小数小"的视觉层次。
 *
 * @property {number|string} value - 当前价格
 * @property {number|string} original - 原价（划线价），可选
 * @property {string} prefix - 前缀文案，如 "预估到手" / "一口价" / "会员价"
 * @property {string} symbol - 货币符号，默认 "¥"
 * @property {string} size - 尺寸: normal | large
 * @property {number} decimals - 小数位数，默认 -1（自动：有小数显示，无小数不显示）
 * @property {string} customClass - 自定义 class
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    value: {
      type: null, // accepts Number or String
      value: 0,
      observer: '_splitPrice',
    },
    original: {
      type: null,
      value: '',
    },
    prefix: {
      type: String,
      value: '',
    },
    symbol: {
      type: String,
      value: '¥',
    },
    size: {
      type: String,
      value: 'normal', // normal | large
    },
    decimals: {
      type: Number,
      value: -1, // -1 = auto
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  data: {
    integerPart: '0',
    decimalPart: '',
  },

  lifetimes: {
    attached() {
      this._splitPrice();
    },
  },

  methods: {
    _splitPrice() {
      const val = parseFloat(this.data.value);
      if (isNaN(val)) {
        this.setData({ integerPart: '0', decimalPart: '' });
        return;
      }

      const { decimals } = this.data;
      let str;

      if (decimals >= 0) {
        str = val.toFixed(decimals);
      } else {
        // Auto mode: show decimals only if they exist
        str = String(val);
      }

      const parts = str.split('.');
      this.setData({
        integerPart: parts[0],
        decimalPart: parts[1] || '',
      });
    },
  },
});
