# Vercel 部署指南

本文档提供了将 PetShard 项目部署到 Vercel 的详细步骤。

## 前提条件

1. 一个 [GitHub](https://github.com/) 账户
2. 一个 [Vercel](https://vercel.com/) 账户
3. 本地安装的 Git

## 步骤 1: 将项目上传到 GitHub

1. 在 GitHub 上创建一个新的仓库
2. 在本地项目目录中初始化 Git 仓库（如果尚未初始化）:
   ```bash
   git init
   ```
3. 添加所有文件到 Git:
   ```bash
   git add .
   ```
4. 提交更改:
   ```bash
   git commit -m "初始提交"
   ```
5. 添加 GitHub 仓库作为远程仓库:
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   ```
6. 推送代码到 GitHub:
   ```bash
   git push -u origin main
   ```
   (如果你的默认分支是 `master` 而不是 `main`，请相应调整)

## 步骤 2: 在 Vercel 上部署项目

1. 登录到 [Vercel](https://vercel.com/)
2. 点击 "Add New..."，然后选择 "Project"
3. 导入你的 GitHub 仓库
4. 配置项目:
   - **项目名称**: `petshard`（或你喜欢的名称）
   - **框架预设**: `Next.js`
   - **根目录**: `./`（默认）
   - **构建命令**: 保持默认（Vercel 会自动检测）
   - **输出目录**: 保持默认（Vercel 会自动检测）

## 步骤 3: 配置环境变量

在 Vercel 项目设置中，添加以下环境变量:

1. 在 Vercel Dashboard 中，转到你的项目
2. 点击 "Settings" > "Environment Variables"
3. 添加以下环境变量:
   - `BIGMODEL_API_KEY`: 你的 API 密钥
   - `BIGMODEL_API_BASE_URL`: API 基础 URL
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: PayPal 客户端 ID
   - `PAYPAL_SECRET`: PayPal 密钥
   - `PAYPAL_MODE`: `sandbox` 或 `live`
   - `NEXT_PUBLIC_APP_URL`: 你的网站 URL（例如 `https://petshard.online`）
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: 你的 Google Analytics 测量 ID

确保将这些变量添加到生产环境和预览环境（如果需要）。

## 步骤 4: 部署

1. 点击 "Deploy" 按钮
2. Vercel 将自动构建和部署你的应用
3. 部署完成后，你的应用将可通过 `https://你的项目名称.vercel.app` 访问

## 步骤 5: 自定义域名（可选）

如果你想使用自定义域名:

1. 在 Vercel Dashboard 中，转到你的项目
2. 点击 "Settings" > "Domains"
3. 添加你的自定义域名
4. 按照 Vercel 提供的说明配置 DNS 记录

## 持续部署

每当你推送更改到 GitHub 仓库的主分支时，Vercel 将自动重新构建和部署你的应用。

## 故障排除

如果你在部署过程中遇到问题:

1. 检查 Vercel 构建日志以获取错误信息
2. 确保所有必需的环境变量都已正确设置
3. 验证 `next.config.ts` 配置是否正确
4. 如果遇到构建错误，尝试在 `next.config.ts` 中添加 `output: 'standalone'` 配置

## 有用的资源

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Vercel CLI 文档](https://vercel.com/docs/cli) 