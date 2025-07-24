import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/temp/', '/.well-known/'],
        crawlDelay: 1
      },
      // AI爬虫特殊规则
      {
        userAgent: 'GPTBot',
        allow: ['/blog/', '/use-cases/', '/prompt-examples/', '/'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/blog/', '/use-cases/', '/prompt-examples/', '/'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/']
      },
      {
        userAgent: 'CCBot',
        allow: ['/blog/', '/use-cases/', '/prompt-examples/', '/'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/']
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/blog/', '/use-cases/', '/prompt-examples/', '/'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/']
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/blog/', '/use-cases/', '/prompt-examples/', '/'],
        disallow: ['/api/', '/admin/', '/_next/', '/private/']
      },
      // 搜索引擎优化
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 0
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
        crawlDelay: 1
      }
    ],
    sitemap: 'https://aisongmaker.pro/sitemap.xml',
    host: 'https://aisongmaker.pro'
  }
}