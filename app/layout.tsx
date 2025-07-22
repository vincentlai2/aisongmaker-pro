import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Song Generator | Make AI Songs from Lyrics or Ideas Online – AIsongmaker.pro',
  description: 'Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds. No experience needed.',
  keywords: 'AI song generator, lyrics to music, generate music online, AI music maker, text to song, free music generator, AI Song Maker, AI Song Generator',
  authors: [{ name: 'AI Song Maker Team' }],
  creator: 'AI Song Maker',
  publisher: 'AI Song Maker',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aisongmaker.pro',
    title: 'AI Song Generator | Make AI Songs from Lyrics or Ideas Online',
    description: 'Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds.',
    siteName: 'AI Song Maker',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Song Generator | Make AI Songs from Lyrics or Ideas Online',
    description: 'Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Root layout should not render html/body tags when using i18n
  // The locale layout handles the html tag with proper lang/dir attributes
  return children
}
