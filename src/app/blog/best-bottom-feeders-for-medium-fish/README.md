# 博客文章框架 - 待填充内容指南

## 📁 已创建的文件结构

```
/src/app/blog/best-bottom-feeders-for-medium-fish/
├── README.md                           # 本文件
├── page.tsx                            # ✅ 主页面框架（已完成结构）
├── types.ts                            # ✅ TypeScript类型定义
├── data.ts                             # ⚠️ 数据文件（需要填充）
└── components/
    ├── BottomFeederCard.tsx           # ✅ 鱼种卡片组件（完整）
    ├── ProductRecommendation.tsx      # ✅ 产品推荐组件（完整）
    ├── QuickActionPlan.tsx            # ✅ 行动计划组件（完整）
    └── VideoEmbed.tsx                 # ✅ 视频嵌入组件（完整）
```

## 🎯 需要填充的内容

### 1. **data.ts 文件** - 最重要！

需要在 `data.ts` 中添加完整的10种底栖鱼数据。参考 `PODCAST_IMPLEMENTATION_GUIDE.md` 第3节。

**当前状态**: 只有1条示例数据
**需要添加**: 9条完整数据

每条数据格式：
```typescript
{
  id: 2,
  name: "Bristlenose Plecos",
  emoji: "🦈",
  imageUrl: "https://cdn.shopify.com/...",
  size: "4-5 inches",
  compatibility: 4,
  specialSkill: "Algae destroyer + wood keeper",
  description: "详细描述...",
  tankRequirement: "29+ gallons",
  whyItWorks: "推荐理由..."
}
```

**10种鱼的图片链接都在指南中！**

### 2. **page.tsx 文件** - 需要填充文案

#### 待填充位置（搜索 "TODO"）：

**位置1**: Background Knowledge Section（第107-122行）
- 🐟 What Are They? - 添加底栖鱼定义
- ⚖️ Size Compatibility - 添加兼容性说明
- 🧹 Cleaning Power - 添加清洁效果说明

**位置2**: Conclusion Section（第179-187行）
- 添加结论段落
- 添加号召行动

**位置3**: Featured Image（第56行）
- 替换为合适的特色图片路径

### 3. **products 数组** - 添加第二个产品

在 `data.ts` 的 `products` 数组中添加第二个产品数据：

```typescript
{
  name: "Automatic Fish Feeder for Aquarium",
  affiliateLink: "https://amzn.to/48doIoy",
  features: [
    "Accurate Food Amount: 16 grids, up to 2g each",
    "2 Setup Methods: Adjustable clamp or suction cup",
    "Moisture-resistant Design: Fully sealed",
    "Customized Feeding Time: Up to 3x daily",
    "USB Rechargeable: 1-2 month battery life"
  ],
  description: "The #1 reason for excess food? Overfeeding. This feeder ensures exact portions."
}
```

## 🚀 快速开始步骤

### Step 1: 填充数据文件
1. 打开 `PODCAST_IMPLEMENTATION_GUIDE.md`
2. 复制第3节的所有10种鱼的数据
3. 粘贴到 `data.ts` 的 `bottomFeeders` 数组中
4. 添加第二个产品到 `products` 数组

### Step 2: 填充页面文案
1. 打开 `page.tsx`
2. 搜索所有 `TODO` 标记
3. 根据 `PODCAST_IMPLEMENTATION_GUIDE.md` 填充对应内容

### Step 3: 测试页面
```bash
npm run dev
```
访问: `http://localhost:3000/blog/best-bottom-feeders-for-medium-fish`

## 📋 填充内容清单

- [ ] data.ts - 添加剩余9种底栖鱼数据
- [ ] data.ts - 添加第二个产品（Automatic Feeder）
- [ ] page.tsx - 填充 "What Are They?" 说明
- [ ] page.tsx - 填充 "Size Compatibility" 说明
- [ ] page.tsx - 填充 "Cleaning Power" 说明
- [ ] page.tsx - 填充结论段落
- [ ] page.tsx - 替换特色图片
- [ ] 测试所有链接是否正常工作
- [ ] 检查移动端响应式显示

## 🎨 样式说明

所有组件已使用 TailwindCSS 完成样式设计：
- ✅ 响应式布局（mobile-first）
- ✅ 悬停效果
- ✅ 颜色主题一致
- ✅ 阴影和圆角

无需修改样式，只需填充内容！

## 📝 重要提示

1. **图片链接**: 所有10种鱼的图片URL都在 `PODCAST_IMPLEMENTATION_GUIDE.md` 中
2. **Affiliate链接**: 已正确设置 `rel="nofollow sponsored"`
3. **SEO优化**: 结构化数据已添加在页面底部
4. **TypeScript**: 所有类型已定义，确保数据格式正确

## 🆘 如有问题

参考主指导文档：
- `/PODCAST_IMPLEMENTATION_GUIDE.md` - 完整实施指南
- 包含所有数据、文案、技术要求

## ✨ 完成后

填充完成后，这个博客文章将包含：
- ✅ 完整的10种底栖鱼展示
- ✅ 2个产品推荐
- ✅ YouTube视频嵌入
- ✅ 行动计划
- ✅ SEO优化的元数据
- ✅ 相关资源链接

预计最终页面长度：2000-2500字，阅读时间15分钟。

---

**开始时间**: 只需30-45分钟即可完成所有内容填充！
**难度**: 🟢 简单 - 只需复制粘贴和简单编辑
