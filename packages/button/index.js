/**
 * lkcn-button
 * 按钮组件
 *
 * @property {string} type - 按钮类型: primary | cta | secondary | text | gold | default
 * @property {string} size - 按钮尺寸: small | medium | large
 * @property {boolean} block - 是否为块级按钮（撑满父容器宽度）
 * @property {boolean} round - 是否为圆角胶囊按钮
 * @property {boolean} plain - 是否为朴素按钮（描边样式）
 * @property {boolean} disabled - 是否禁用
 * @property {boolean} loading - 是否显示加载状态
 * @property {string} icon - 左侧图标路径
 * @property {string} openType - 微信开放能力
 * @property {string} formType - 表单提交类型
 * @property {string} customClass - 自定义 class
 *
 * @event {Function} tap - 点击事件
 * @event {Function} getuserinfo - 获取用户信息
 * @event {Function} getphonenumber - 获取手机号
 */
Component({
  options: {
    addGlobalClass: true,
    virtualHost: true,
  },

  properties: {
    type: {
      type: String,
      value: 'default', // primary | cta | secondary | text | gold | default
    },
    size: {
      type: String,
      value: 'medium', // small | medium | large
    },
    block: {
      type: Boolean,
      value: false,
    },
    round: {
      type: Boolean,
      value: false,
    },
    plain: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    icon: {
      type: String,
      value: '',
    },
    openType: {
      type: String,
      value: '',
    },
    formType: {
      type: String,
      value: '',
    },
    customClass: {
      type: String,
      value: '',
    },
  },

  methods: {
    onClick(e) {
      if (this.data.disabled || this.data.loading) return;
      this.triggerEvent('tap', e.detail);
    },

    onGetUserInfo(e) {
      this.triggerEvent('getuserinfo', e.detail);
    },

    onGetPhoneNumber(e) {
      this.triggerEvent('getphonenumber', e.detail);
    },
  },
});
