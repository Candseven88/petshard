# PetShard 配置指南

## 🔧 环境变量配置

### 步骤1: 创建 .env.local 文件

在项目根目录创建 `.env.local` 文件，并添加以下内容：

```bash
# API Keys
BIGMODEL_API_KEY=your_api_key_here
BIGMODEL_API_BASE_URL=your_api_base_url_here

# PayPal Configuration
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_SECRET=your_paypal_secret
PAYPAL_MODE=sandbox

# Application URLs
NEXT_PUBLIC_APP_URL=https://www.petshard.online

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# SEO & Search Engine Verification
GOOGLE_SITE_VERIFICATION=your_google_verification_code
BING_SITE_VERIFICATION=your_bing_verification_code
YANDEX_SITE_VERIFICATION=cf286c544f4e31d1

# IndexNow API
INDEXNOW_KEY=your_unique_indexnow_key

# Microsoft Clarity
NEXT_PUBLIC_CLARITY_ID=your_clarity_id
```

## 📊 具体配置步骤

### 1. Google Search Console 验证

1. **访问**: https://search.google.com/search-console
2. **添加网站**: 输入 `https://www.petshard.online`
3. **选择验证方法**: "HTML 标记"
4. **复制验证代码**: 例如 `google-site-verification=abc123def456`
5. **只取后面部分**: `abc123def456`
6. **添加到 .env.local**: `GOOGLE_SITE_VERIFICATION=abc123def456`

### 2. Bing Webmaster Tools 验证

1. **访问**: https://www.bing.com/webmasters
2. **添加网站**: 输入 `https://www.petshard.online`
3. **选择验证方法**: "Meta 标记"
4. **复制验证代码**: 例如 `<meta name="msvalidate.01" content="xyz789abc123" />`
5. **只取 content 部分**: `xyz789abc123`
6. **添加到 .env.local**: `BING_SITE_VERIFICATION=xyz789abc123`

### 3. Yandex Webmaster 验证 ✅ 已完成

1. **访问**: https://webmaster.yandex.com
2. **添加网站**: 输入 `https://www.petshard.online`
3. **验证文件**: 已创建 `public/yandex_cf286c544f4e31d1.html`
4. **验证码**: `cf286c544f4e31d1`
5. **添加到 .env.local**: `YANDEX_SITE_VERIFICATION=cf286c544f4e31d1`

**注意**: Yandex 验证文件已自动创建，您只需要在 `.env.local` 中添加验证码即可。

### 4. IndexNow API 密钥

1. **生成唯一密钥**: 可以使用任何32-64位的随机字符串
2. **在线生成器**: https://www.uuidgenerator.net/ (去掉连字符)
3. **示例密钥**: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`
4. **添加到 .env.local**: `INDEXNOW_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`
5. **更新密钥文件**: 将相同的密钥写入 `public/indexnow-key.txt`

### 5. Microsoft Clarity (可选)

1. **访问**: https://clarity.microsoft.com
2. **创建项目**: 添加 `https://www.petshard.online`
3. **获取项目ID**: 例如 `abc123def4`
4. **添加到 .env.local**: `NEXT_PUBLIC_CLARITY_ID=abc123def4`

### 6. Google Analytics (如果还没有)

1. **访问**: https://analytics.google.com
2. **创建媒体资源**: 添加 `https://www.petshard.online`
3. **获取测量ID**: 例如 `G-ABC123DEF4`
4. **添加到 .env.local**: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4`

## 🔑 IndexNow 密钥文件配置

### 更新 public/indexnow-key.txt

将您生成的 IndexNow 密钥写入 `public/indexnow-key.txt` 文件：

```bash
# 编辑文件
nano public/indexnow-key.txt

# 将密钥粘贴进去（与 .env.local 中的相同）
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

## 🚀 配置完成后的验证

### 1. 重启开发服务器
```bash
npm run dev
```

### 2. 验证端点是否工作
- **站点地图**: http://localhost:3000/sitemap.xml
- **Robots.txt**: http://localhost:3000/robots.txt
- **IndexNow API**: http://localhost:3000/api/indexnow
- **RSS订阅**: http://localhost:3000/rss.xml

### 3. 测试 IndexNow API
```bash
curl -X POST http://localhost:3000/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["/", "/ai-tools"]}'
```

## 📋 配置检查清单

- [ ] 创建 `.env.local` 文件
- [ ] 配置 Google Search Console 验证
- [ ] 配置 Bing Webmaster Tools 验证
- [x] 配置 Yandex Webmaster 验证 ✅ 已完成
- [x] 生成并配置 IndexNow 密钥 ✅ 已完成
- [x] 更新 `public/indexnow-key.txt` 文件 ✅ 已完成
- [ ] 配置 Microsoft Clarity (可选)
- [ ] 重启开发服务器
- [ ] 验证所有端点正常工作

## ⚠️ 重要提醒

1. **不要提交 .env.local**: 这个文件包含敏感信息，已在 .gitignore 中
2. **生产环境**: 在 Vercel 等平台的环境变量设置中添加相同配置
3. **密钥安全**: IndexNow 密钥不是敏感信息，但建议定期更换
4. **验证时间**: 搜索引擎验证可能需要几小时到几天时间生效

## 🔗 有用链接

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Yandex Webmaster](https://webmaster.yandex.com)
- [Microsoft Clarity](https://clarity.microsoft.com)
- [IndexNow 文档](https://www.indexnow.org/)
- [UUID 生成器](https://www.uuidgenerator.net/)

配置完成后，您的网站将具备完整的SEO优化和搜索引擎发现能力！ 