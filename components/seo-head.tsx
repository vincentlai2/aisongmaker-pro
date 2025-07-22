import type { Metadata } from "next"
import { locales, type Locale } from '@/i18n'
import { generateAlternateUrls } from '@/lib/i18n-utils'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  locale?: Locale
  pathname?: string
}

export function generateMetadata({
  title = "AI Song Generator | Make AI Songs from Lyrics or Ideas Online – AIsongmaker.pro",
  description = "Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds. No experience needed.",
  keywords = "AI song generator, lyrics to music, generate music online, AI music maker, text to song, free music generator, AI Song Maker, AI Song Generator",
  canonicalUrl = "https://aisongmaker.pro",
  ogImage = "https://aisongmaker.pro/og-image.jpg",
}: SEOHeadProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    authors: [{ name: "AI Song Maker Team" }],
    creator: "AI Song Maker",
    publisher: "AI Song Maker",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      title,
      description,
      siteName: "AI Song Maker",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "AI Song Maker - Create AI Songs from Lyrics Online",
        },
        {
          url: "https://aisongmaker.pro/og-image-square.jpg",
          width: 1200,
          height: 1200,
          alt: "AI Song Maker Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@aisongmaker",
      site: "@aisongmaker",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "es-ES": `${canonicalUrl}/es`,
        "zh-CN": `${canonicalUrl}/zh`,
      },
    },
    verification: {
      google: "aisongmaker-google-site-verification",
      yandex: "aisongmaker-yandex-verification", 
      yahoo: "aisongmaker-yahoo-verification",
    },
    category: "Music & Audio",
    classification: "AI Music Generator",
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "AI Song Maker",
      "application-name": "AI Song Maker",
      "msapplication-TileColor": "#8b5cf6",
      "theme-color": "#8b5cf6",
    },
  }
}
