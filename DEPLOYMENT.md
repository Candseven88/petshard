# 部署指南

本文档提供了将 PetShard 项目部署到不同平台的详细步骤。

## 目录

- [前提条件](#前提条件)
- [准备工作](#准备工作)
- [Vercel 部署](#vercel-部署)
- [Cloudflare Pages 部署](#cloudflare-pages-部署)
- [环境变量配置](#环境变量配置)
- [故障排除](#故障排除)

## 前提条件

- [GitHub](https://github.com/) 账户
- [Vercel](https://vercel.com/) 或 [Cloudflare](https://www.cloudflare.com/) 账户
- 本地安装的 Git
- 智谱AI API密钥（从 [智谱AI开放平台](https://open.bigmodel.cn/) 获取）

## 准备工作

### 1. 将项目上传到 GitHub

```bash
# 初始化 Git 仓库（如果尚未初始化）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送代码
git push -u origin main
```

## Vercel 部署

### 步骤 1: 导入项目

1. 登录到 [Vercel](https://vercel.com/)
2. 点击 **Add New...** → **Project**
3. 导入你的 GitHub 仓库

### 步骤 2: 配置项目

- **项目名称**: `petshard`（或自定义名称）
- **框架预设**: Next.js（自动检测）
- **根目录**: `./`
- **构建命令**: 保持默认
- **输出目录**: 保持默认

### 步骤 3: 配置环境变量

在 **Settings** → **Environment Variables** 中添加：

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `BIGMODEL_API_KEY` | 智谱AI API密钥 | ✅ |
| `NEXT_PUBLIC_APP_URL` | 应用URL（如 https://petshard.vercel.app） | ✅ |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal客户端ID | 可选 |
| `PAYPAL_SECRET` | PayPal密钥 | 可选 |
| `PAYPAL_MODE` | sandbox 或 live | 可选 |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | 可选 |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity ID | 可选 |

### 步骤 4: 部署

1. 点击 **Deploy**
2. 等待构建完成
3. 访问 `https://你的项目名称.vercel.app`

### 自定义域名

1. 进入 **Settings** → **Domains**
2. 添加你的域名
3. 配置 DNS 记录（按照 Vercel 提供的说明）

## Cloudflare Pages 部署

### 步骤 1: 创建项目

1. 登录到 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 **Pages** → **创建应用程序**
3. 连接到 Git 并选择你的仓库

### 步骤 2: 构建配置

- **项目名称**: `petshard`
- **生产分支**: `main`
- **构建命令**: `npm run build`
- **构建输出目录**: `.next`
- **Node.js 版本**: 18.x 或更高

### 步骤 3: 环境变量

在 **设置** → **环境变量** 中添加与 Vercel 相同的环境变量。

### 步骤 4: 部署

Cloudflare 将自动构建和部署，完成后可通过 `https://你的项目名称.pages.dev` 访问。

### 自定义域名

1. 进入项目设置 → **自定义域名**
2. 添加域名并完成 DNS 配置

## 环境变量配置

### 必需的环境变量

```env
# 智谱AI API配置
BIGMODEL_API_KEY=your_api_key_here

# 应用URL
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 可选的环境变量

```env
# PayPal支付配置
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
PAYPAL_MODE=sandbox  # 或 'live' 用于生产环境

# 分析工具
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_CLARITY_ID=your_clarity_id

# SEO验证
GOOGLE_SITE_VERIFICATION=your_google_verification_code
BING_SITE_VERIFICATION=your_bing_verification_code

# IndexNow API
INDEXNOW_KEY=your_indexnow_key
```

## 持续部署

两个平台都支持持续部署：

- 每次推送到 `main` 分支时自动部署
- Pull Request 创建预览环境
- 部署历史记录和回滚功能

## 故障排除

### 构建失败

1. **检查构建日志**：查看具体错误信息
2. **验证 Node.js 版本**：确保使用 18.x 或更高版本
3. **检查依赖**：运行 `npm install` 确保所有依赖正确安装
4. **环境变量**：确认所有必需的环境变量已配置

### API 调用失败

1. **验证 API Key**：
   ```bash
   # 测试 API 连接
   curl -X POST https://open.bigmodel.cn/api/paas/v4/chat/completions \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"model":"glm-4-flash","messages":[{"role":"user","content":"test"}]}'
   ```

2. **检查 API 格式**：确保使用正确的请求格式
3. **查看服务器日志**：检查详细错误信息

### 环境变量未生效

1. **重新部署**：更改环境变量后需要重新部署
2. **变量名称**：确认变量名称拼写正确
3. **客户端变量**：使用 `NEXT_PUBLIC_` 前缀才能在客户端访问

### 性能问题

1. **启用缓存**：配置适当的缓存策略
2. **图片优化**：使用 Next.js Image 组件
3. **代码分割**：利用动态导入减少初始加载大小

## 有用的资源

- [Vercel 文档](https://vercel.com/docs)
- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [智谱AI API 文档](https://open.bigmodel.cn/dev/api)

## 性能监控

部署后建议配置：

1. **Google Analytics**：追踪用户行为
2. **Microsoft Clarity**：用户会话记录
3. **Vercel/Cloudflare Analytics**：性能指标监控

## 安全建议

- ✅ 永远不要在代码中硬编码 API 密钥
- ✅ 使用环境变量管理敏感信息
- ✅ 定期轮换 API 密钥
- ✅ 为生产环境使用不同的密钥
- ✅ 启用 HTTPS（平台默认提供）
- ✅ 配置适当的 CORS 策略
