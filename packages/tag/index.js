/**
 * lkcn-tag
 * 标签组件
 *
 * @property {string} type - 标签类型: filled | outlined | light | plain
 * @property {string} size - 标签尺寸: small | medium | large
 * @property {string} color - 颜色变体: blue(default) | orange | green | gold
 * @property {boolean} round - 是否为圆角胶囊
 * @property {boolean} closable - 是否可关闭
 * @property {string} customClass - 自定义 class
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    type: {
      type: String,
      value: 'outlined', // filled | outlined | light | plain
    },
    size: {
      type: String,
      value: 'medium', // small | medium | large
    },
    color: {
      type: String,
      value: 'blue', // blue | orange | green | gold
    },
    round: {
      type: Boolean,
      value: false,
    },
    closable: {
      type: Boolean,
      value: false,
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  methods: {
    onClick(e) {
      this.triggerEvent('tap', e.detail);
    },

    onClose(e) {
      this.triggerEvent('close');
    },
  },
});
