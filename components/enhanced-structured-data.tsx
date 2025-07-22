export function EnhancedStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://aisongmaker.pro/#website",
        url: "https://aisongmaker.pro/",
        name: "AI Song Maker",
        description: "AI Song Generator - Make AI Songs from Lyrics or Ideas Online",
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
        publisher: {
          "@type": "Organization",
          name: "AI Song Maker",
          url: "https://aisongmaker.pro/",
          logo: {
            "@type": "ImageObject",
            url: "https://aisongmaker.pro/logo.png",
          },
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://aisongmaker.pro/#product",
        name: "AI Song Maker",
        description:
          "Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and download full-length tracks in seconds.",
        url: "https://aisongmaker.pro/",
        operatingSystem: "Web Browser",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Music Creation",
        offers: [
          {
            "@type": "Offer",
            name: "Free Plan",
            price: "0",
            priceCurrency: "USD",
            description: "3 songs per day with MP3 download",
          },
          {
            "@type": "Offer",
            name: "Pro Plan",
            price: "19",
            priceCurrency: "USD",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "19",
              priceCurrency: "USD",
              billingDuration: "P1M",
            },
            description: "Unlimited songs with MP3 + WAV download and commercial license",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "1247",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Jason",
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
            },
            reviewBody:
              "I typed a few lines about long-distance love into AI Song Maker, chose a soft voice — and it made a full pop song in 20 seconds. Better than I expected.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://aisongmaker.pro/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I use the songs made with AI Song Maker on YouTube or Spotify?",
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
          {
            "@type": "Question",
            name: "Is this a free AI song generator, or do I need to pay?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can start for free with up to 3 songs per day. Paid plans unlock higher quality downloads, unlimited songs, and more voice options.",
            },
          },
          {
            "@type": "Question",
            name: "Can I choose the voice and genre of the song?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can select from multiple voice styles (male, female, robotic, whisper) and genres like pop, rap, lo-fi, and more.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need any music production skills to use this?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not at all. AI Song Maker is made for beginners. You just need to describe the vibe or paste your lyrics.",
            },
          },
          {
            "@type": "Question",
            name: "How long does it take to generate a full AI song?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On average, under 30 seconds. Just type, choose a style, and hit generate.",
            },
          },
          {
            "@type": "Question",
            name: "Can I download the song as an MP3 or WAV?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can download every generated track in MP3 by default. WAV is available for Pro users.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://aisongmaker.pro/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Song Generator",
            item: "https://aisongmaker.pro/#generator",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Pricing",
            item: "https://aisongmaker.pro/#pricing",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://aisongmaker.pro/#howto",
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
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
