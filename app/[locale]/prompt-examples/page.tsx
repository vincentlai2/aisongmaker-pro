import { generateMetadata as generateSEOMetadata } from "@/lib/seo-utils"
import PromptExamplesClient from "./PromptExamplesClient"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params

  const baseUrl = "https://aisongmaker.pro"
  const pathname = "/prompt-examples"
  const canonicalUrl = locale === "en" ? `${baseUrl}${pathname}` : `${baseUrl}/${locale}${pathname}`

  return generateSEOMetadata({
    title: "AI Song Prompt Examples | Creative Ideas for AI Music Generation – AI Song Maker",
    description:
      "Discover 100+ creative prompt examples for AI song generation. Get inspired with romance, birthday, study, motivation, and comedy song ideas for AI Song Maker.",
    keywords:
      "AI song prompts, music generation ideas, AI lyrics examples, song prompt templates, creative music prompts",
    canonicalUrl,
    locale,
    pathname,
  })
}

export default function PromptExamplesPage() {
  return <PromptExamplesClient />
}
