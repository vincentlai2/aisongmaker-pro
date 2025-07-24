import ClientPage from "./ClientPage"
import { Locale } from "@/i18n"
import { Metadata } from "next"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  const baseUrl = "https://aisongmaker.pro"
  const canonicalUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`

  const titles = {
    en: "AI Song Maker - Generate Music from Lyrics Online",
    zh: "AI歌曲制作器 - 在线从歌词生成音乐",
    es: "Creador de Canciones AI - Genera Música desde Letras Online"
  }

  const descriptions = {
    en: "Create original AI songs from your lyrics instantly. Free AI music generator with multiple genres and voice styles. Download MP3 songs for commercial use.",
    zh: "从您的歌词即时创建原创AI歌曲。免费AI音乐生成器，支持多种风格和声音类型。下载MP3歌曲用于商业用途。",
    es: "Crea canciones AI originales desde tus letras al instante. Generador de música AI gratuito con múltiples géneros y estilos de voz. Descarga canciones MP3 para uso comercial."
  }

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': baseUrl,
        'zh': `${baseUrl}/zh`,
        'es': `${baseUrl}/es`,
      }
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: canonicalUrl,
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
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: [`${baseUrl}/og-image.png`],
    }
  }
}

export default function Homepage() {
  return <ClientPage />
}
