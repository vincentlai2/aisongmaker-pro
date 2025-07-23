import { generateMetadata as generateSEOMetadata } from "@/components/seo-head"
import UseCasesClient from "./UseCasesClient"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params

  const baseUrl = "https://aisongmaker.pro"
  const pathname = "/use-cases"
  const canonicalUrl = locale === "en" ? `${baseUrl}${pathname}` : `${baseUrl}/${locale}${pathname}`

  return generateSEOMetadata({
    title: "AI Song Maker Use Cases | How Creators Use AI Music Generation",
    description:
      "Discover how content creators, musicians, businesses, and educators use AI Song Maker for YouTube, TikTok, podcasts, marketing, and more creative projects.",
    keywords:
      "AI music use cases, content creator music, YouTube background music, TikTok songs, podcast music, business jingles",
    canonicalUrl,
    locale,
    pathname,
  })
}

export default function UseCasesPage() {
  return <UseCasesClient />
}
