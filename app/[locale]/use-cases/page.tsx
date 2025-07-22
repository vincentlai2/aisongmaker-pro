import { generateMetadata } from "@/components/seo-head"
import UseCasesClient from "./UseCasesClient"

export const metadata = generateMetadata({
  title: "AI Song Maker Use Cases | How Creators Use AI Music Generation",
  description:
    "Discover how content creators, musicians, businesses, and educators use AI Song Maker for YouTube, TikTok, podcasts, marketing, and more creative projects.",
  keywords:
    "AI music use cases, content creator music, YouTube background music, TikTok songs, podcast music, business jingles",
  canonicalUrl: "https://aisongmaker.pro/use-cases",
})

export default function UseCasesPage() {
  return <UseCasesClient />
}
