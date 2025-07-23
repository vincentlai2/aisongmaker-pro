import { generateMetadata as generateSEOMetadata } from "@/components/seo-head"
import ClientPage from "./ClientPage"
import { Locale } from "@/i18n"

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params

  const baseUrl = "https://aisongmaker.pro"
  const pathname = ""
  const canonicalUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`

  return generateSEOMetadata({
    canonicalUrl,
    locale,
    pathname,
  })
}

export default function Homepage() {
  return <ClientPage />
}
