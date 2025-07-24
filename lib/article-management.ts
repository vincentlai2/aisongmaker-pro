// 大规模多语言文章管理系统
import { Locale } from '@/i18n'

// 文章数据类型
export interface Article {
  id: string
  slug: string
  createdAt: Date
  updatedAt: Date
  status: 'draft' | 'published' | 'archived'
}

export interface ArticleTranslation {
  id: string
  articleId: string
  locale: Locale
  title: string
  content: string
  metaDescription: string
  keywords: string
  translatedAt: Date
  translationStatus: 'pending' | 'completed' | 'reviewed'
}

// 数据库操作 (示例 - 实际使用 Prisma/Drizzle)
export async function getArticle(slug: string, locale: Locale): Promise<ArticleTranslation | null> {
  // 实际实现中连接数据库
  try {
    const response = await fetch(`/api/articles/${slug}?locale=${locale}`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch article:', error)
    return null
  }
}

export async function getAllArticles(locale: Locale, page = 1, limit = 20) {
  try {
    const response = await fetch(`/api/articles?locale=${locale}&page=${page}&limit=${limit}`)
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    return { articles: [], total: 0 }
  }
}

// 翻译服务
export class TranslationService {
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async translateText(text: string, fromLang: string, toLang: string): Promise<string> {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are a professional translator. Translate from ${fromLang} to ${toLang}. Maintain the tone and style. For blog content, keep it SEO-friendly.`
            },
            {
              role: 'user',
              content: text
            }
          ],
          max_tokens: 4000,
          temperature: 0.3,
        }),
      })

      const data = await response.json()
      return data.choices[0]?.message?.content || text
    } catch (error) {
      console.error('Translation failed:', error)
      return text // 返回原文作为fallback
    }
  }

  async translateArticle(article: ArticleTranslation, targetLocale: Locale): Promise<ArticleTranslation> {
    const [translatedTitle, translatedContent, translatedDescription] = await Promise.all([
      this.translateText(article.title, 'en', targetLocale),
      this.translateText(article.content, 'en', targetLocale),
      this.translateText(article.metaDescription, 'en', targetLocale),
    ])

    return {
      ...article,
      id: `${article.id}-${targetLocale}`,
      locale: targetLocale,
      title: translatedTitle,
      content: translatedContent,
      metaDescription: translatedDescription,
      translatedAt: new Date(),
      translationStatus: 'completed',
    }
  }
}

// 批量翻译管理器
export class BatchTranslationManager {
  private translationService: TranslationService
  private supportedLocales: Locale[]

  constructor(apiKey: string, supportedLocales: Locale[]) {
    this.translationService = new TranslationService(apiKey)
    this.supportedLocales = supportedLocales
  }

  async translateAllArticles(batchSize = 10) {
    const articles = await this.getUntranslatedArticles()
    
    console.log(`Found ${articles.length} articles to translate`)

    for (let i = 0; i < articles.length; i += batchSize) {
      const batch = articles.slice(i, i + batchSize)
      await this.processBatch(batch)
      
      // 避免API限制
      await this.sleep(2000)
    }
  }

  private async processBatch(articles: ArticleTranslation[]) {
    const promises = articles.flatMap(article => 
      this.supportedLocales
        .filter(locale => locale !== 'en') // 假设英文是源语言
        .map(locale => this.translateAndSave(article, locale))
    )

    await Promise.allSettled(promises)
  }

  private async translateAndSave(article: ArticleTranslation, targetLocale: Locale) {
    try {
      const translatedArticle = await this.translationService.translateArticle(article, targetLocale)
      await this.saveTranslation(translatedArticle)
      console.log(`✅ Translated ${article.title} to ${targetLocale}`)
    } catch (error) {
      console.error(`❌ Failed to translate ${article.title} to ${targetLocale}:`, error)
    }
  }

  private async getUntranslatedArticles(): Promise<ArticleTranslation[]> {
    // 获取需要翻译的文章
    const response = await fetch('/api/articles/untranslated')
    return await response.json()
  }

  private async saveTranslation(translation: ArticleTranslation) {
    await fetch('/api/articles/translations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(translation),
    })
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

// 使用示例
export async function initializeBatchTranslation() {
  const supportedLocales: Locale[] = [
    'en', 'zh', 'es', 'fr', 'de', 'ja', 'ko', 'pt', 'ru', 'ar',
    'hi', 'it', 'nl', 'sv', 'pl', 'tr', 'th', 'vi', 'id', 'ms'
    // ... 可以扩展到50种语言
  ]

  const manager = new BatchTranslationManager(
    process.env.OPENAI_API_KEY!,
    supportedLocales
  )

  await manager.translateAllArticles()
}

// SEO优化的sitemap生成
export async function generateMultilingualSitemap() {
  const articles = await getAllArticlesForSitemap()
  const locales = ['en', 'zh', 'es', 'fr', 'de'] // 主要语言
  
  const sitemapEntries = articles.flatMap(article => 
    locales.map(locale => ({
      url: locale === 'en' 
        ? `https://aisongmaker.pro/blog/${article.slug}`
        : `https://aisongmaker.pro/${locale}/blog/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: locales.reduce((acc, l) => {
          const url = l === 'en' 
            ? `https://aisongmaker.pro/blog/${article.slug}`
            : `https://aisongmaker.pro/${l}/blog/${article.slug}`
          acc[l] = url
          return acc
        }, {} as Record<string, string>)
      }
    }))
  )

  return sitemapEntries
}

async function getAllArticlesForSitemap() {
  // 获取所有已发布的文章
  const response = await fetch('/api/articles?status=published&limit=10000')
  return await response.json()
}
