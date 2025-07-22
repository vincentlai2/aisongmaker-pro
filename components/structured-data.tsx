export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://aisongmaker.pro/#website",
        url: "https://aisongmaker.pro/",
        name: "AIsongmaker",
        description: "AI Song Generator - Turn lyrics into music instantly",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://aisongmaker.pro/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "AIsongmaker",
        operatingSystem: "Web Browser",
        applicationCategory: "MultimediaApplication",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "1247",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I use the songs made with AIsongmaker on YouTube or Spotify?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All songs you generate are cleared for commercial use, including platforms like YouTube, Spotify, TikTok, and Instagram.",
            },
          },
          {
            "@type": "Question",
            name: "How does the AI generate music from text or lyrics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You provide a text prompt — like a mood, theme, or full lyrics — and our AI composes melody, adds voice, and creates a structured song from it.",
            },
          },
        ],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
