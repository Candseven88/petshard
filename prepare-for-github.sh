#!/bin/bash

# PetShard项目GitHub上传准备脚本

echo "🚀 准备将PetShard项目上传到GitHub..."

# 检查是否已经是Git仓库
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
    echo "✅ Git仓库初始化完成"
else
    echo "✅ Git仓库已存在"
fi

# 检查.gitignore是否存在
if [ ! -f ".gitignore" ]; then
    echo "❌ .gitignore文件不存在！"
    exit 1
else
    echo "✅ .gitignore文件已配置"
fi

# 检查环境变量示例文件
if [ ! -f "env.example" ]; then
    echo "❌ env.example文件不存在！"
    exit 1
else
    echo "✅ env.example文件已存在"
fi

# 添加所有文件到Git
echo "📦 添加文件到Git..."
git add .

# 检查Git状态
echo "📊 Git状态："
git status --short

# 提交代码
echo "💾 提交代码..."
git commit -m "Initial commit: PetShard AI pet tools platform

Features:
- AI-powered pet breed identification
- Virtual pet breeding analysis
- Pet health guide and horoscope
- Pet video generation
- Pet diary and age calculator
- AI tools directory with Ghostface AI integration
- Complete SEO optimization (sitemap, robots.txt, structured data)
- IndexNow API integration
- RSS feed
- PWA manifest
- Search engine verification setup

Technical Stack:
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- PayPal integration for payments
- Google Analytics and Microsoft Clarity
- Comprehensive SEO features

External Links:
- High-quality dofollow backlinks to Ghostface AI
- AI tools directory integration
- Natural content marketing approach"

echo "✅ 代码提交完成"

# 设置主分支
echo "🌿 设置主分支..."
git branch -M main

echo ""
echo "🎉 项目已准备就绪！"
echo ""
echo "📋 下一步操作："
echo "1. 在GitHub上创建新仓库"
echo "2. 复制仓库URL"
echo "3. 运行以下命令："
echo "   git remote add origin <your-github-repo-url>"
echo "   git push -u origin main"
echo ""
echo "🔧 部署到Vercel："
echo "1. 访问 https://vercel.com"
echo "2. 连接GitHub仓库"
echo "3. 配置环境变量（参考CONFIGURATION_GUIDE.md）"
echo "4. 部署完成！"
echo ""
echo "📚 重要文档："
echo "- README.md - 项目说明"
echo "- CONFIGURATION_GUIDE.md - 配置指南"
echo "- SEO_OPTIMIZATION_GUIDE.md - SEO优化指南"
echo "- PROJECT_CLEANUP_SUMMARY.md - 清理总结"
echo ""
echo "🌟 项目特色："
echo "- ✅ 完整的SEO优化"
echo "- ✅ AI工具目录集成"
echo "- ✅ Ghostface AI外链建设"
echo "- ✅ 响应式设计"
echo "- ✅ 生产环境就绪" 