<p align="center">
  <img src="https://img.shields.io/npm/v/lkcn-ui?color=1A6EFF&label=npm" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/lkcn-ui?color=FF6B35" alt="downloads" />
  <img src="https://img.shields.io/github/license/user/lkcn-ui" alt="license" />
  <img src="https://img.shields.io/github/stars/user/lkcn-ui?style=social" alt="stars" />
</p>

<h1 align="center">LKCN UI</h1>

<p align="center">☕ 瑞幸风格微信小程序组件库 · Luckin Coffee Style WeChat Mini Program UI</p>

---

## ✨ 特性

- 🎨 **瑞幸设计语言** — 从瑞幸咖啡小程序提炼的完整 Design Token 体系（色彩、字体、间距、圆角）
- 📦 **按需引入** — 每个组件独立目录，支持单独引用，不产生冗余代码
- 🛠 **原生开发** — 纯微信小程序自定义组件，零依赖，兼容原生 / Taro / uni-app 项目
- 🎯 **TypeScript 支持** — 完整的组件类型声明文件
- 📖 **配套文档** — 每个组件提供用法示例与 API 说明
- 🌗 **暗色模式** — 内置深色主题适配（规划中）

## 📦 安装

### npm 安装

```bash
npm install lkcn-ui
```

在微信开发者工具中：「工具」→「构建 npm」，然后在 `app.json` 或页面 JSON 中注册组件：

```json
{
  "usingComponents": {
    "lkcn-button": "lkcn-ui/button/index",
    "lkcn-tag": "lkcn-ui/tag/index",
    "lkcn-price": "lkcn-ui/price/index"
  }
}
```

### 直接下载

将 `packages/` 目录下需要的组件复制到小程序项目中，修改引用路径即可。

## 🚀 快速上手

```xml
<!-- 按钮 -->
<lkcn-button type="primary">立即下单</lkcn-button>
<lkcn-button type="cta">开通连续包月 ¥9.90</lkcn-button>

<!-- 价格 -->
<lkcn-price value="9.9" original="32" prefix="预估到手" />

<!-- 标签 -->
<lkcn-tag type="filled">新品</lkcn-tag>
<lkcn-tag type="outlined">全球销量第一</lkcn-tag>

<!-- 商品卡片 -->
<lkcn-product-card
  image="/images/coconut-latte.png"
  title="生椰拿铁（首创）"
  tags="{{['全球销量第一', 'IIAC金奖']}}"
  price="9.9"
  original-price="32"
  bind:add="onAddToCart"
/>
```

## 📋 组件列表

| 组件 | 说明 | 状态 |
|------|------|------|
| Button | 按钮 — primary / secondary / cta / text / gold | ✅ |
| Tag | 标签 — filled / outlined / light / plain × 4 色 | ✅ |
| Price | 价格展示 — 现价 + 原价 + 前缀文案 | ✅ |
| Card | 卡片容器 — title/extra/shadow/border | ✅ |
| Grid | 宫格导航 — 支持 3/4/5 列 + badge/dot | ✅ |
| Tabs | 标签页切换 — 滑动下划线指示器 + sticky | ✅ |
| SegmentControl | 分段切换器（自提/外送） | ✅ |
| SearchBar | 搜索栏 — 聚焦光环 + 清除/取消 | ✅ |
| TabBar | 底部导航栏 — safe-area + fixed + badge | ✅ |
| ProductCard | 商品卡片 — 图片/标签组/双行价格/加购 | ✅ |
| Badge | 徽标 — 数字/文字/小红点 + max 溢出 | ✅ |
| Avatar | 头像 — 图片/文字/fallback + 等级角标 | ✅ |
| Stepper | 步进器 — 折叠态 + 展开态加购控件 | ✅ |
| LocationBar | 定位栏 — 门店名/距离/切换箭头 | ✅ |
| CouponScroll | 优惠券横滑栏 — 价格 + 标签 + 使用按钮 | ✅ |
| NoticeBar | 通知栏 — blue/orange/gold 主题 | ✅ |
| PromoCard | 促销卡片 — horizontal/vertical/banner 布局 | ✅ |
| CategorySidebar | 分类侧边栏 — 激活指示条 + tag 标签 | ✅ |
| Swiper | 轮播图 — 圆点指示器 + 文字叠加层 | ✅ |
| LevelCard | 等级卡片 — 积分/进度条/升级提示 + 3 主题 | ✅ |
| FloatingButton | 浮动按钮 — 可拖拽 + 阴影 | ✅ |
| MembershipPlan | 会员方案选择器 — 方案卡 + CTA + 协议勾选 | ✅ |

> ✅ 22 个组件全部完成

## 🎨 Design Token

组件库内置瑞幸风格的 Design Token，通过 CSS 变量全局注入：

```css
page {
  /* 品牌色 */
  --lkcn-blue: #1A6EFF;
  --lkcn-orange: #FF6B35;
  --lkcn-gold: #C8A26E;
  --lkcn-green: #2B7D5B;
  --lkcn-brown: #3D2D1F;

  /* 文字 */
  --lkcn-text-primary: #222222;
  --lkcn-text-secondary: #666666;
  --lkcn-text-tertiary: #999999;

  /* 背景 */
  --lkcn-bg-page: #F5F5F5;
  --lkcn-bg-card: #FFFFFF;
  --lkcn-bg-orange-light: #FFF5EE;
  --lkcn-bg-blue-light: #EEF4FF;

  /* 圆角 */
  --lkcn-radius-xs: 8rpx;
  --lkcn-radius-sm: 16rpx;
  --lkcn-radius-md: 24rpx;
  --lkcn-radius-lg: 40rpx;
  --lkcn-radius-full: 50%;

  /* 间距 */
  --lkcn-spacing-xs: 8rpx;
  --lkcn-spacing-sm: 16rpx;
  --lkcn-spacing-md: 24rpx;
  --lkcn-spacing-lg: 32rpx;
  --lkcn-spacing-xl: 48rpx;
}
```

覆盖这些变量即可全局换肤，适配你自己的品牌风格。

## 🏗 项目结构

```
lkcn-ui/                 ← 用微信开发者工具打开此目录
├── app.js
├── app.json
├── app.wxss
├── project.config.json
├── packages/            # 组件源码（22 个组件）
│   ├── button/
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   ├── index.js
│   │   └── index.json
│   ├── tag/
│   ├── price/
│   └── ...
├── pages/               # 示例 demo 页面
│   ├── index/
│   ├── demo-button/
│   ├── demo-tag/
│   └── demo-price/
├── styles/              # 全局样式
│   ├── variables.wxss   # Design Token
│   └── reset.wxss       # 基础重置
├── package.json
└── README.md
```

## 🤝 参与贡献

欢迎提交 PR！开发流程：

```bash
# 1. Clone 仓库
git clone https://github.com/user/lkcn-ui.git

# 2. 用微信开发者工具打开 lkcn-ui/ 根目录

# 3. 在 packages/ 下开发或修改组件

# 4. 在 pages/ 下查看组件 demo 效果

# 5. 提交 PR
```

## 📄 License

[MIT](./LICENSE) © LKCN UI Contributors

---

<p align="center">
  <sub>灵感来源于瑞幸咖啡小程序的优秀设计，本项目与瑞幸咖啡品牌无隶属关系。</sub>
</p>
