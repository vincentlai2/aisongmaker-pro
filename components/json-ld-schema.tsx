"use client"

interface JSONLDProps {
  type: 'website' | 'faq' | 'howto' | 'software' | 'article'
  data: any
}

// Website Schema
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Song Maker",
    "description": "Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds.",
    "url": "https://aisongmaker.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://aisongmaker.pro/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://twitter.com/aisongmaker",
      "https://facebook.com/aisongmaker",
      "https://youtube.com/@aisongmaker"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Software Application Schema
export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Song Maker",
    "description": "AI Song Generator that creates original songs from lyrics, moods, or ideas. Choose voices, pick styles, and download full-length tracks instantly.",
    "url": "https://aisongmaker.pro",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free plan with 3 songs per day"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "AI Song Maker Team"
    },
    "featureList": [
      "AI Song Generation",
      "Multiple Voice Styles",
      "Genre Selection",
      "Instant MP3 Download",
      "Commercial License",
      "Multilingual Support"
    ],
    "screenshot": "https://aisongmaker.pro/images/app-screenshot.jpg"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ Schema
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I use the songs made with AI Song Maker on YouTube or Spotify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All songs you generate are cleared for commercial use, including platforms like YouTube, Spotify, TikTok, and Instagram."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AI generate music from text or lyrics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You provide a text prompt — like a mood, theme, or full lyrics — and our AI composes melody, adds voice, and creates a structured song from it."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a free AI song generator, or do I need to pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can start for free with up to 3 songs per day. Paid plans unlock higher quality downloads, unlimited songs, and more voice options."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose the voice and genre of the song?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can select from multiple voice styles (male, female, robotic, whisper) and genres like pop, rap, lo-fi, and more."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to generate a full AI song?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, under 30 seconds. Just type, choose a style, and hit generate."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// HowTo Schema for AI Song Creation
export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create AI Songs with AI Song Maker",
    "description": "Step-by-step guide to generate original AI songs from your lyrics, moods, or ideas using AI Song Maker.",
    "image": "https://aisongmaker.pro/images/how-to-create-ai-songs.jpg",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Internet connection"
      },
      {
        "@type": "HowToSupply",
        "name": "Web browser"
      },
      {
        "@type": "HowToSupply",
        "name": "Song lyrics or idea"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Write your lyrics or describe your theme",
        "text": "Input your creative ideas, lyrics, or describe the mood and style you want for your AI song.",
        "image": "https://aisongmaker.pro/images/step-1-write-lyrics.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Choose a voice style and genre",
        "text": "Select from our wide range of voice styles (male, female, robotic, whisper) and musical genres (pop, rap, lo-fi, etc.).",
        "image": "https://aisongmaker.pro/images/step-2-choose-voice.jpg"
      },
      {
        "@type": "HowToStep",
        "name": "Generate and download your song",
        "text": "Click generate and get your complete AI song in seconds, ready to download as MP3 and use anywhere.",
        "image": "https://aisongmaker.pro/images/step-3-download.jpg"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization Schema
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Song Maker",
    "description": "AI Song Generator platform that enables creators to generate original songs from lyrics and ideas instantly.",
    "url": "https://aisongmaker.pro",
    "logo": "https://aisongmaker.pro/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@aisongmaker.pro"
    },
    "sameAs": [
      "https://twitter.com/aisongmaker",
      "https://facebook.com/aisongmaker",
      "https://youtube.com/@aisongmaker"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article Schema for Blog Posts
export function ArticleSchema({ 
  title, 
  description, 
  datePublished, 
  dateModified, 
  author, 
  image,
  url 
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author: string
  image?: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image || "https://aisongmaker.pro/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Song Maker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aisongmaker.pro/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}