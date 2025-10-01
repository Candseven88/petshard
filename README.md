# PetShard

PetShard是一个宠物相关服务的Web应用，提供宠物品种识别、宠物健康指南、宠物星座和虚拟繁育等功能。

## 项目特点

- 宠物品种识别
- 宠物健康指南
- 宠物星座
- 虚拟繁育
- 宠物视频生成
- 宠物日记

## 技术栈

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PayPal集成

## 本地开发

1. 克隆仓库
2. 安装依赖
   ```bash
   npm install
   ```
3. 创建`.env.local`文件，参考`env.example`
4. 启动开发服务器
   ```bash
npm run dev
```
5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## Vercel部署指南

### 前提条件

1. 一个[GitHub](https://github.com/)账户
2. 一个[Vercel](https://vercel.com/)账户

### 步骤1: 将项目上传到GitHub

1. 在GitHub上创建一个新的仓库
2. 在本地项目目录中初始化Git仓库（如果尚未初始化）:
   ```bash
   git init
   ```
3. 添加所有文件到Git:
   ```bash
   git add .
   ```
4. 提交更改:
   ```bash
   git commit -m "初始提交"
   ```
5. 添加GitHub仓库作为远程仓库:
   ```bash
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   ```
6. 推送代码到GitHub:
   ```bash
   git push -u origin main
   ```
   (如果你的默认分支是`master`而不是`main`，请相应调整)

### 步骤2: 在Vercel上部署项目

1. 登录到[Vercel](https://vercel.com/)
2. 点击"Add New..."，然后选择"Project"
3. 导入你的GitHub仓库
4. 配置项目:
   - 项目名称: `petshard`（或你喜欢的名称）
   - 框架预设: `Next.js`
   - 根目录: `./`（默认）
   - 构建命令: 保持默认（Vercel会自动检测）
   - 输出目录: 保持默认（Vercel会自动检测）

### 步骤3: 配置环境变量

在Vercel项目设置中，添加以下环境变量:

1. 在Vercel Dashboard中，转到你的项目
2. 点击"Settings" > "Environment Variables"
3. 添加以下环境变量:
   - `BIGMODEL_API_KEY`: 你的API密钥
   - `BIGMODEL_API_BASE_URL`: API基础URL
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: PayPal客户端ID
   - `PAYPAL_SECRET`: PayPal密钥
   - `PAYPAL_MODE`: `sandbox`或`live`
   - `NEXT_PUBLIC_APP_URL`: 你的网站URL（例如`https://petshard.online`）
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: 你的Google Analytics测量ID

### 步骤4: 部署

1. 点击"Deploy"按钮
2. Vercel将自动构建和部署你的应用
3. 部署完成后，你的应用将可通过`https://你的项目名称.vercel.app`访问

### 步骤5: 自定义域名（可选）

如果你想使用自定义域名:

1. 在Vercel Dashboard中，转到你的项目
2. 点击"Settings" > "Domains"
3. 添加你的自定义域名
4. 按照Vercel提供的说明配置DNS记录

### 持续部署

每当你推送更改到GitHub仓库的主分支时，Vercel将自动重新构建和部署你的应用。

## 许可证

[MIT](LICENSE)
