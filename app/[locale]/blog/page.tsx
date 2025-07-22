import { generateMetadata } from "@/components/seo-head"
import BlogClient from "./BlogClient"

export const metadata = generateMetadata({
  title: "AI Music Blog | Tips, Tutorials & Industry Insights – AI Song Maker",
  description:
    "Learn about AI music generation, songwriting tips, industry trends, and creative techniques. Stay updated with the latest in AI-powered music creation.",
  keywords: "AI music blog, songwriting tips, music generation tutorials, AI music trends, creative music techniques",
  canonicalUrl: "https://aisongmaker.pro/blog",
})

export default function BlogPage() {
  return <BlogClient />
}
