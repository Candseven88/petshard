# Cloudflare 部署指南

本文档提供了将 PetSaga 项目部署到 Cloudflare Pages 的详细步骤。

## 前提条件

1. 一个 [GitHub](https://github.com/) 账户
2. 一个 [Cloudflare](https://www.cloudflare.com/) 账户
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

## 步骤 2: 在 Cloudflare 上设置项目

1. 登录到你的 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 在左侧菜单中，点击 **Pages**
3. 点击 **创建应用程序** 或 **连接到 Git**
4. 选择 **连接到 Git**
5. 授权 Cloudflare 访问你的 GitHub 账户
6. 选择你刚刚创建的仓库
7. 配置构建设置:
   - **项目名称**: `petsaga` (或你喜欢的名称)
   - **生产分支**: `main` (或你的主分支名称)
   - **构建命令**: `npm run build`
   - **构建输出目录**: `.next/standalone`
   - **Node.js 版本**: 选择与你本地开发环境相匹配的版本 (推荐 18.x 或更高)

## 步骤 3: 配置环境变量

在 Cloudflare Pages 的项目设置中，添加以下环境变量:

1. 在 Cloudflare Dashboard 中，转到你的 Pages 项目
2. 点击 **设置** > **环境变量**
3. 添加以下环境变量:
   - `BIGMODEL_API_KEY`: 你的 API 密钥
   - `BIGMODEL_API_BASE_URL`: API 基础 URL
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: PayPal 客户端 ID
   - `PAYPAL_SECRET`: PayPal 密钥
   - `PAYPAL_MODE`: `sandbox` 或 `live`
   - `NEXT_PUBLIC_APP_URL`: 你的 Cloudflare Pages URL (例如 `https://petsaga.pages.dev`)
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: 你的 Google Analytics 测量 ID

确保将这些变量添加到生产环境和预览环境（如果需要）。

## 步骤 4: 部署

1. 一旦设置完成，Cloudflare 将自动开始构建和部署你的应用
2. 你可以在 Cloudflare Dashboard 的 Pages 部分监控构建进度
3. 部署完成后，你的应用将可通过 `https://你的项目名称.pages.dev` 访问

## 步骤 5: 自定义域名 (可选)

如果你想使用自定义域名:

1. 在 Cloudflare Dashboard 中，转到你的 Pages 项目
2. 点击 **自定义域名**
3. 点击 **设置自定义域名**
4. 输入你想使用的域名
5. 按照提示完成 DNS 配置

## 步骤 6: 持续部署

每当你推送更改到 GitHub 仓库的主分支时，Cloudflare Pages 将自动重新构建和部署你的应用。

## 故障排除

如果你在部署过程中遇到问题:

1. 检查 Cloudflare 构建日志以获取错误信息
2. 确保所有必需的环境变量都已正确设置
3. 验证 `wrangler.toml` 配置是否正确
4. 确保你的 `next.config.ts` 文件包含适当的 Cloudflare 配置

## 有用的资源

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/) 