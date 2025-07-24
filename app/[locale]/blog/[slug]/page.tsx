import { generateMetadata as generateSEOMetadata } from "@/lib/seo-utils"
import { getArticle } from "@/lib/article-management"
import { Locale } from "@/i18n"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import ArticleContent from "./ArticleContent"
import ArticleSkeleton from "./ArticleSkeleton"

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  const article = await getArticle(slug, locale)
  
  if (!article) {
    return {}
  }
  
  return generateSEOMetadata({
    title: `${article.title} - AI Song Maker Blog`,
    description: article.metaDescription,
    keywords: article.keywords,
    locale,
    pathname: `/blog/${slug}`,
  })
}

export default async function BlogPost({ params }: PageProps) {
  const { locale, slug } = await params
  const article = await getArticle(slug, locale)
  
  if (!article) {
    notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent article={article} />
      </Suspense>
    </div>
  )
}

// 这个函数可以预生成热门文章的静态路径
// 其他文章会在请求时动态生成
export async function generateStaticParams() {
  // 在实际实现中，从API获取热门文章
  const popularSlugs = [
    'getting-started-with-ai-music',
    'top-10-ai-song-prompts',
    'how-to-create-viral-music'
  ]
  
  const locales: Locale[] = ['en', 'zh', 'es']
  
  return popularSlugs.flatMap(slug => 
    locales.map(locale => ({
      locale,
      slug
    }))
  )
}
