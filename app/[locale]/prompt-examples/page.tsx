import { generateMetadata } from "@/components/seo-head"
import PromptExamplesClient from "./PromptExamplesClient"

export const metadata = generateMetadata({
  title: "AI Song Prompt Examples | Creative Ideas for AI Music Generation – AI Song Maker",
  description:
    "Discover 100+ creative prompt examples for AI song generation. Get inspired with romance, birthday, study, motivation, and comedy song ideas for AI Song Maker.",
  keywords:
    "AI song prompts, music generation ideas, AI lyrics examples, song prompt templates, creative music prompts",
  canonicalUrl: "https://aisongmaker.pro/prompt-examples",
})

export default function PromptExamplesPage() {
  return <PromptExamplesClient />
}
