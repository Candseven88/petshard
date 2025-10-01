import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://www.petshard.online'

// 博客文章数据 - 在实际应用中这应该从数据库或CMS获取
const blogPosts = [
  {
    id: "ai-tools-comparison",
    title: "Best AI Tools for Content Creation in 2024: A Comprehensive Comparison",
    description: "Discover the most innovative AI tools for creative projects, from horror content creation to pet care analysis. Compare features, pricing, and find the perfect tool for your needs.",
    date: "2024-12-15T00:00:00.000Z",
    url: `${SITE_URL}/blog/ai-tools-comparison`,
    author: "PetShard Team"
  },
  {
    id: "pet-health-risks-lyme-legionnaires",
    title: "Pet Health Risks: Understanding Lyme Disease and Legionnaires' Disease",
    description: "Learn about these zoonotic diseases, how they affect your pets, and prevention strategies. Discover how AI tools can help protect your pet's health.",
    date: "2023-08-01T00:00:00.000Z",
    url: `${SITE_URL}/blog/pet-health-risks-lyme-legionnaires`,
    author: "PetShard Team"
  }
]

export async function GET() {
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>PetShard - AI Pet Tools Blog</title>
    <description>Latest insights on AI-powered pet care, breed identification, health guidance, and innovative pet tools. Discover the future of pet care technology.</description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <managingEditor>contact@petshard.online (PetShard Team)</managingEditor>
    <webMaster>contact@petshard.online (PetShard Team)</webMaster>
    <category>Pets</category>
    <category>Artificial Intelligence</category>
    <category>Technology</category>
    <category>Health</category>
    <image>
      <url>${SITE_URL}/pet/1.jpg</url>
      <title>PetShard - AI Pet Tools</title>
      <link>${SITE_URL}</link>
      <width>144</width>
      <height>144</height>
      <description>PetShard AI Pet Tools Platform</description>
    </image>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.url}</link>
      <guid isPermaLink="true">${post.url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>contact@petshard.online (${post.author})</author>
      <category>AI Tools</category>
      <category>Pet Care</category>
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
} 