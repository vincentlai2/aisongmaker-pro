import { generateMetadata as generateSEOMetadata } from "@/lib/seo-utils"
import BlogClient from "./BlogClient"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params

  const baseUrl = "https://aisongmaker.pro"
  const pathname = "/blog"
  const canonicalUrl = locale === "en" ? `${baseUrl}${pathname}` : `${baseUrl}/${locale}${pathname}`

  return generateSEOMetadata({
    title: "AI Music Blog | Tips, Tutorials & Industry Insights – AI Song Maker",
    description:
      "Learn about AI music generation, songwriting tips, industry trends, and creative techniques. Stay updated with the latest in AI-powered music creation.",
    keywords: "AI music blog, songwriting tips, music generation tutorials, AI music trends, creative music techniques",
    canonicalUrl,
    locale,
    pathname,
  })
}

export default function BlogPage() {
  return <BlogClient />
}
