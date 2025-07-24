import { Metadata } from "next"
import { Locale } from "@/i18n"

interface SEOMetadataProps {
  title?: string
  description?: string
  keywords?: string
  locale: Locale
  pathname: string
  canonicalUrl?: string
}

export function generateMetadata({
  title,
  description,
  keywords,
  locale,
  pathname,
  canonicalUrl
}: SEOMetadataProps): Metadata {
  const baseUrl = "https://aisongmaker.pro"
  
  // Generate canonical URL
  const finalCanonicalUrl = canonicalUrl || (
    locale === "en" 
      ? `${baseUrl}${pathname}` 
      : `${baseUrl}/${locale}${pathname}`
  )

  // Default titles and descriptions by locale
  const defaultTitles = {
    en: "AI Song Maker 2025 - Generate Music from Lyrics Online",
    zh: "AI歌曲制作器 2025 - 在线从歌词生成音乐",
    es: "Creador de Canciones AI 2025 - Genera Música desde Letras Online"
  }

  const defaultDescriptions = {
    en: "Create original AI songs from your lyrics instantly. Free AI music generator with multiple genres and voice styles. Download MP3 songs for commercial use.",
    zh: "从您的歌词即时创建原创AI歌曲。免费AI音乐生成器，支持多种风格和声音类型。下载MP3歌曲用于商业用途。",
    es: "Crea canciones AI originales desde tus letras al instante. Generador de música AI gratuito con múltiples géneros y estilos de voz. Descarga canciones MP3 para uso comercial."
  }

  const finalTitle = title || defaultTitles[locale] || defaultTitles.en
  const finalDescription = description || defaultDescriptions[locale] || defaultDescriptions.en

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords,
    alternates: {
      canonical: finalCanonicalUrl,
      languages: {
        'en': pathname === '' ? baseUrl : `${baseUrl}${pathname}`,
        'zh': pathname === '' ? `${baseUrl}/zh` : `${baseUrl}/zh${pathname}`,
        'es': pathname === '' ? `${baseUrl}/es` : `${baseUrl}/es${pathname}`,
      }
    },
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalCanonicalUrl,
      siteName: "AI Song Maker",
      images: [{
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Song Maker"
      }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [`${baseUrl}/og-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
