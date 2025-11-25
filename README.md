# PetShard

PetShard是一个专业的AI驱动宠物健康与护理服务平台，为宠物主人提供全方位的宠物健康咨询、护理建议和AI工具。

## 核心功能

### 🏥 新功能亮点

- **Pet Health Center（宠物健康中心）**
  - 🩺 **Symptom Checker（症状问诊）**: 快速分析宠物症状，评估严重程度，提供专业建议
  - 📋 **Breed Health Guide（品种健康指南）**: 针对特定品种的健康建议和预防措施

- **Pet Care Guide（宠物护理指南）**
  - 🍖 喂养指南：营养需求和喂养计划
  - 🎾 训练技巧：行为训练和服从性培养
  - 🏠 环境布置：安全舒适的生活空间
  - ✂️ 美容护理：毛发、指甲和牙齿护理
  - 👶 幼宠护理：幼犬/幼猫的特殊照顾
  - 👴 老年宠物护理：老龄宠物的特殊需求

### 🔧 其他AI工具

- **宠物智能取名** ✨ 新功能！
- 宠物品种识别
- 宠物年龄计算器
- 虚拟繁育分析
- 宠物视频生成
- 宠物日记
- 宠物星座

## 功能使用指南

### Pet Name Generator（宠物智能取名）✨ 新功能！

访问路径：`/pet-naming`

1. **上传宠物照片**
   - 支持拖拽或点击上传
   - 图片格式：PNG, JPG, JPEG
   - 文件大小：最大 5MB

2. **设置命名偏好（可选）**
   - 首字母要求：指定名字开头字母
   - 性别倾向：男性化/女性化/中性
   - 命名风格：可爱/高贵/霸气/文艺/搞笑
   - 名字长度：短/中/长
   - 其他要求：自定义命名规则

3. **获取完整宠物档案**
   - 🏷️ **智能命名**：3-5个精心挑选的名字建议，含义深刻
   - 🔍 **品种识别**：自动识别宠物品种
   - 🎭 **性格分析**：基于外观和品种特征的性格评估
   - ✨ **宠物星盘**：匹配星座、元素、幸运色和主人类型
   - 📅 **年龄预测**：估算宠物年龄和生命阶段
   - 💊 **健康建议**：基于品种和年龄的护理建议

4. **分享和保存**
   - 下载宠物档案卡片
   - 分享到社交媒体

### Pet Health Center（宠物健康中心）

访问路径：`/health-center`

**Symptom Checker（症状问诊）**
1. 选择宠物类型（狗/猫/其他）
2. 输入宠物信息（品种、年龄）
3. 选择观察到的症状（支持多选）
4. 添加额外的症状描述
5. AI分析并提供：
   - 严重程度评估（轻微/中等/紧急）
   - 可能的病因
   - 应对建议
   - 就医建议

**Breed Health Guide（品种健康指南）**
1. 输入宠物品种
2. 获取包含以下内容的健康指南：
   - 常见健康问题
   - 推荐饮食
   - 运动需求
   - 预防护理建议
   - 年龄特定建议

### Pet Care Guide（宠物护理指南）

访问路径：`/pet-care-guide`

1. 选择护理主题（喂养/训练/美容等）
2. 填写宠物信息（类型、品种、年龄、体重）
3. 添加特殊情况说明（可选）
4. 获取个性化的护理建议

## 技术栈

- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全
- **Tailwind CSS 4** - 现代化样式
- **智谱AI GLM-4-Flash** - AI 模型
- **PayPal** - 支付集成
- **Google Analytics & Microsoft Clarity** - 数据分析

## 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 或 yarn 包管理器

### API 配置

本项目使用智谱AI **GLM-4-Flash** 模型提供 AI 服务。

1. 从 [智谱AI开放平台](https://open.bigmodel.cn/) 获取 API 密钥
2. 在项目根目录创建 `.env.local` 文件：

```env
BIGMODEL_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

完整的环境变量配置请参考 `env.example` 文件。

### 本地开发

```bash
# 1. 克隆仓库
git clone <repository-url>
cd petshard

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp env.example .env.local
# 编辑 .env.local 填入你的 API 密钥

# 4. 启动开发服务器
npm run dev

# 5. 打开浏览器访问
# http://localhost:3000
```

## 部署

支持多种部署方式：

- **Vercel**（推荐）- 零配置部署
- **Cloudflare Pages** - 全球 CDN 加速

详细部署步骤请查看 [DEPLOYMENT.md](./DEPLOYMENT.md)

## 项目文档

- 📖 [部署指南](./DEPLOYMENT.md) - 详细的部署步骤
- ⚙️ [配置指南](./CONFIGURATION_GUIDE.md) - 环境变量和配置
- 🧪 [测试指南](./TESTING_GUIDE.md) - 测试说明
- 🔍 [SEO 优化指南](./SEO_OPTIMIZATION_GUIDE.md) - SEO 最佳实践

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
