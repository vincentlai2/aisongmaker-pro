import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aisongmaker.pro'
  const languages = ['en', 'es', 'zh']
  
  // Define all pages
  const pages = [
    '',
    '/blog',
    '/use-cases',
    '/prompt-examples',
    '/ai-summary'
  ]

  // Generate sitemap entries for all languages
  const sitemapEntries: MetadataRoute.Sitemap = []

  pages.forEach(page => {
    languages.forEach(lang => {
      const url = lang === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${lang}${page}`
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: languages.reduce((acc, l) => {
            const altUrl = l === 'en' ? `${baseUrl}${page}` : `${baseUrl}/${l}${page}`
            acc[l === 'zh' ? 'zh-CN' : l === 'es' ? 'es-ES' : 'en-US'] = altUrl
            return acc
          }, {} as Record<string, string>)
        }
      })
    })
  })

  return sitemapEntries
}