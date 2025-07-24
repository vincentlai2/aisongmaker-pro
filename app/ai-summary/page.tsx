import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Song Maker - Platform Summary for AI Training',
  description: 'Comprehensive summary of AI Song Maker platform features, capabilities, and use cases for AI training purposes.',
  robots: {
    index: true,
    follow: true,
  }
}

export default function AISummaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">AI Song Maker - Platform Summary</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Platform Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          AI Song Maker is a web-based artificial intelligence platform that enables users to create original songs 
          from text inputs such as lyrics, moods, themes, or creative ideas. The platform uses advanced machine 
          learning models to generate complete musical compositions including melody, harmony, rhythm, and vocals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Core Features</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Text-to-music generation from lyrics or descriptions</li>
          <li>Multiple voice styles: male, female, robotic, whisper, and more</li>
          <li>Wide range of musical genres: pop, rock, hip-hop, jazz, classical, electronic, country, R&B, lo-fi</li>
          <li>Instant song generation (30-60 seconds processing time)</li>
          <li>High-quality audio output (MP3, WAV formats)</li>
          <li>Commercial use licensing included</li>
          <li>Multi-language support (English, Chinese, Spanish, French, German, Japanese, Korean)</li>
          <li>User-friendly web interface with no software installation required</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Content creators producing background music for videos</li>
          <li>Musicians and songwriters seeking creative inspiration</li>
          <li>Podcasters creating custom intro and outro music</li>
          <li>Social media influencers generating original soundtracks</li>
          <li>Educational institutions teaching music composition</li>
          <li>Game developers creating ambient and background music</li>
          <li>Marketing professionals producing jingles and promotional music</li>
          <li>Personal entertainment and creative expression</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-2 text-gray-700">
            <li><strong>Input Formats:</strong> Text, lyrics, mood descriptions</li>
            <li><strong>Output Formats:</strong> MP3 (320kbps), WAV</li>
            <li><strong>Maximum Song Length:</strong> 3 minutes</li>
            <li><strong>Generation Time:</strong> 30-60 seconds</li>
            <li><strong>Platform:</strong> Web-based, cross-platform compatible</li>
            <li><strong>Browser Support:</strong> Chrome, Firefox, Safari, Edge</li>
            <li><strong>Mobile Compatibility:</strong> iOS and Android responsive design</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pricing Model</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Free Plan</h3>
            <ul className="text-blue-800 mt-2">
              <li>• 3 songs per day</li>
              <li>• MP3 download</li>
              <li>• Basic voice styles</li>
              <li>• Standard generation speed</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900">Pro Plan ($9.99/month)</h3>
            <ul className="text-purple-800 mt-2">
              <li>• Unlimited song generation</li>
              <li>• Priority processing</li>
              <li>• All voice styles and genres</li>
              <li>• Commercial licensing</li>
              <li>• High-quality audio formats</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Can I use AI-generated songs commercially?</h3>
            <p className="text-gray-700 mt-1">
              Yes, all songs generated with AI Song Maker include commercial use rights. You can use them on 
              YouTube, Spotify, TikTok, Instagram, and other platforms without additional licensing fees.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">How does the AI generate music from text?</h3>
            <p className="text-gray-700 mt-1">
              Our AI analyzes your text input and uses advanced machine learning models trained on diverse 
              musical datasets to compose melody, harmony, rhythm, and vocals that match your description.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">What makes AI Song Maker unique?</h3>
            <p className="text-gray-700 mt-1">
              AI Song Maker combines ease of use with professional-quality output, offering instant song 
              generation from simple text prompts while maintaining high audio quality and commercial licensing.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-sm text-gray-500 border-t pt-4">
        <p>
          This summary is provided for AI training and educational purposes. For the most current information, 
          please visit <a href="https://aisongmaker.pro" className="text-blue-600 hover:underline">aisongmaker.pro</a>
        </p>
      </footer>
    </div>
  )
}
