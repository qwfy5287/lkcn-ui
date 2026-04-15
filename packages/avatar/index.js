/**
 * lkcn-avatar
 * 头像组件
 *
 * @property {string} src - 头像图片 URL
 * @property {string} text - 文字头像（src 不存在时显示）
 * @property {string} size - 尺寸: small | medium | large
 * @property {string} shape - 形状: circle | square
 * @property {string} level - 等级标识（如 "Lv3"），显示在右下角
 * @property {string} customClass
 */
Component({
  options: { addGlobalClass: true, virtualHost: true },
  properties: {
    src: { type: String, value: '' },
    text: { type: String, value: '' },
    size: { type: String, value: 'medium' },
    shape: { type: String, value: 'circle' },
    level: { type: String, value: '' },
    customClass: { type: String, value: '' },
  },
  methods: {
    onError() {
      this.setData({ src: '' });
    },
  },
});
