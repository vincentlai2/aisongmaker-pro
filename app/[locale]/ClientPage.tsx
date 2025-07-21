"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { EnhancedStructuredData } from "@/components/enhanced-structured-data"
import { EnhancedAudioPlayer } from "@/components/enhanced-audio-player"
import { EnhancedPromptCard } from "@/components/enhanced-prompt-card"
import { SongFilter } from "@/components/song-filter"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/cta-section"
import {
  Sparkles,
  Clock,
  Mic,
  Copyright,
  Zap,
  Users,
  Star,
  Play,
  Headphones,
  Shield,
  Heart,
  Lightbulb,
  Award,
  CheckCircle,
  Volume2,
  Download,
  Upload,
  Palette,
  Globe,
  Repeat,
  Brain,
  AudioWaveformIcon as Waveform,
  Gift,
  BookOpen,
  Smile,
  Coffee,
  Gamepad2,
  Briefcase,
  Video,
  Target,
  Music,
} from "lucide-react"

export default function ClientPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const songCategories = ["All", "Pop", "Rap", "Lo-fi", "Rock", "Electronic"]

  const promptCategories = [
    {
      category: "Romance & Love",
      prompt: "A soft piano ballad about long-distance love with gentle vocals",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
    },
    {
      category: "Birthday & Celebration",
      prompt: "An upbeat happy birthday song with cheerful melody and party vibes",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
    },
    {
      category: "Study & Focus",
      prompt: "A calm lo-fi instrumental track perfect for studying and concentration",
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
    },
    {
      category: "Motivation & Energy",
      prompt: "A powerful rap track about overcoming challenges and staying strong",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
    },
    {
      category: "Comedy & Fun",
      prompt: "A funny song about everyday life with humorous lyrics and catchy beat",
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
    },
    {
      category: "Chill & Relaxation",
      prompt: "A peaceful acoustic song for relaxation with nature sounds",
      icon: <Coffee className="w-5 h-5 text-teal-500" />,
      bgColor: "bg-gradient-to-r from-teal-50 to-cyan-50",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <EnhancedStructuredData />
      <div className="min-h-screen bg-white">
        <Header />

        {/* 1. Hero Section - 精确H1标题 */}
        <section className="relative px-4 pb-20 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* 精确匹配meta title的H1 */}
            <h1 className="font-bold text-gray-900 mb-6 leading-tight text-3xl">
              AI Song Generator - Make Songs from Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Lyrics or Ideas
              </span>{" "}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              Create original AI songs online from your lyrics, moods, or ideas. Choose a voice, pick a style, and
              download full-length tracks in seconds.
            </p>

            {/* Upload Interface */}
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 hover:border-purple-400 transition-all duration-300 bg-gray-50/50 hover:bg-purple-50/30 hover:scale-105 transform">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                      <Upload className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 mb-2">Type your lyrics or describe your song idea</p>
                    <button className="text-purple-600 hover:text-purple-700 underline text-sm hover:scale-105 transition-transform duration-300">
                      Choose Text File
                    </button>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mt-3">Supports all text formats, max 2000 characters</p>
              </div>

              {/* Generate Button with anchor links */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Your Songs
                </Button>

                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("demo")}
                    className="text-purple-600 border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                  >
                    Listen to Demo
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("pricing")}
                    className="text-purple-600 border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                  >
                    View Pricing
                  </Button>
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-4">3 free generations daily</p>
            </div>
          </div>
        </section>

        {/* 2. What is AI Song Maker */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Is AI Song Maker?</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              AI Song Maker turns any lyric or idea into a fully arranged song. Our AI composes melody, applies voice,
              and generates downloadable audio—within seconds.
            </p>
          </div>
        </section>

        {/* 3. Everything you need to create music with AI */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need with AI Song Maker</h2>
              <p className="text-gray-600">Powerful features designed for creators of all levels</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-sm text-gray-600">Generate songs in under 30 seconds</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Voice Styles</h3>
                  <p className="text-sm text-gray-600">Pick from various voice styles and genres</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Copyright className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Royalty-Free</h3>
                  <p className="text-sm text-gray-600">Full commercial rights included</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Beginner Friendly</h3>
                  <p className="text-sm text-gray-600">No music production experience required</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Multi-Language</h3>
                  <p className="text-sm text-gray-600">Support for multiple languages</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">HD Downloads</h3>
                  <p className="text-sm text-gray-600">MP3 and WAV downloads available</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">All Genres</h3>
                  <p className="text-sm text-gray-600">Pop, rap, lo-fi, and more styles</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Copyright Free</h3>
                  <p className="text-sm text-gray-600">Unique AI-generated content</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Upload className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Write your lyrics or describe your theme</h3>
                <p className="text-gray-600">
                  Input your creative ideas, lyrics, or describe the mood and style you want
                </p>
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-y-1/2"></div>
              </div>
              <div className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Mic className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Choose a voice style and genre</h3>
                <p className="text-gray-600">Select from our wide range of voice styles and musical genres</p>
                <div className="hidden md:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform -translate-y-1/2"></div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Generate and download your song</h3>
                <p className="text-gray-600">Get your complete song in seconds, ready to download and use</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. AI Song Maker Gallery with Enhanced Audio Players */}
        <section id="demo" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Song Maker Gallery</h2>
              <p className="text-gray-600">
                Discover what our community has created. Get inspired and start your own musical journey.
              </p>
            </div>

            <SongFilter categories={songCategories} activeCategory={activeFilter} onCategoryChange={setActiveFilter} />

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src="/images/music-cover-1.png"
                      alt="AI Song Maker generated City Lights track"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">"City Lights"</h3>
                  <p className="text-sm text-gray-600 mb-4">Modern pop demo • 3:24</p>
                  <EnhancedAudioPlayer src="/demo/city-lights.mp3" title="City Lights - Pop Demo" />
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    4.8 • 1.2k plays
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src="/images/music-cover-2.png"
                      alt="AI Song Generator created Echoes of Time"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">"Echoes of Time"</h3>
                  <p className="text-sm text-gray-600 mb-4">Cinematic ballad • 4:12</p>
                  <EnhancedAudioPlayer src="/demo/echoes-of-time.mp3" title="Echoes of Time - Ballad" />
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    4.9 • 856 plays
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src="/images/music-cover-3.png"
                      alt="Loop 808 made with AI Song Maker"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">"Loop 808"</h3>
                  <p className="text-sm text-gray-600 mb-4">Trap instrumental • 2:45</p>
                  <EnhancedAudioPlayer src="/demo/loop-808.mp3" title="Loop 808 - Trap Beat" />
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    4.7 • 2.1k plays
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src="/images/music-cover-4.png"
                      alt="Smile Again - AI Song Generator demo"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">"Smile Again"</h3>
                  <p className="text-sm text-gray-600 mb-4">Acoustic love song • 3:56</p>
                  <EnhancedAudioPlayer src="/demo/smile-again.mp3" title="Smile Again - Acoustic" />
                  <div className="flex items-center mt-3 text-xs text-gray-500">
                    <Star className="w-3 h-3 mr-1 text-yellow-400" />
                    4.8 • 934 plays
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. Voice Styles & Prompt Ideas - Enhanced */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Voice Styles</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  AI Song Maker offers female pop, deep male rap, whisper lo-fi, robotic FX, and more — with regular
                  updates and support for multilingual voices in our AI Song Generator.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                    <span className="font-medium">Female Pop</span>
                    <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-white/50">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                    <span className="font-medium">Deep Male Rap</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:bg-white/50">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between bg-gradient-to-r from-green-100 to-teal-100 text-green-700 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                    <span className="font-medium">Whisper Lo-fi</span>
                    <Button size="sm" variant="ghost" className="text-green-600 hover:bg-white/50">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300">
                    <span className="font-medium">Robotic FX</span>
                    <Button size="sm" variant="ghost" className="text-orange-600 hover:bg-white/50">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Prompt Ideas</h2>
                <div className="space-y-4">
                  {promptCategories.map((item, index) => (
                    <EnhancedPromptCard
                      key={index}
                      category={item.category}
                      prompt={item.prompt}
                      icon={item.icon}
                      bgColor={item.bgColor}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Use Cases - Enhanced Card Format */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-gray-600">Perfect for creators, musicians, and businesses</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Content Creators</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• TikTok and YouTube background music</li>
                    <li>• Podcast intros and outros</li>
                    <li>• Social media content soundtracks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Musicians & Artists</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Song prototyping and demos</li>
                    <li>• Lyric melody exploration</li>
                    <li>• Creative inspiration tool</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Business & Marketing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Brand jingles and sound logos</li>
                    <li>• Commercial background music</li>
                    <li>• Event and presentation audio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Personal Use</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Custom birthday and celebration songs</li>
                    <li>• Personal gifts and surprises</li>
                    <li>• Family event soundtracks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Gamepad2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Gaming & Apps</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Game background music</li>
                    <li>• App notification sounds</li>
                    <li>• Interactive media audio</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Education & Learning</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Educational content music</li>
                    <li>• Study and focus tracks</li>
                    <li>• Language learning songs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 8. Pricing - Enhanced with Pro button */}
        <section className="py-16 px-4" id="pricing">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Free vs Pro Plan</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                  <div className="text-4xl font-bold mb-6">$0</div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      <span>
                        <strong>3 songs per day</strong> - Perfect for trying out
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      All voice and genre access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      MP3 download
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-2 hover:bg-gray-50 bg-transparent mb-3">
                    Start Free Now
                  </Button>
                  <p className="text-sm text-gray-500">No credit card required</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-500 relative hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                  <div className="text-4xl font-bold mb-6">
                    $19<span className="text-lg text-gray-500">/mo</span>
                  </div>
                  <ul className="space-y-3 text-left mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      <span>
                        <strong>Unlimited songs</strong> - Create as much as you want
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      Exclusive voice styles
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      MP3 + WAV download
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 w-5 h-5" />
                      Commercial license
                    </li>
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Upgrade to Pro
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-purple-600 border-purple-200 hover:bg-purple-50 bg-transparent"
                    >
                      View Pro Features
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 9. Testimonials - Extended to 6 */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Users Say</h2>
              <p className="text-gray-600">Real feedback from our community of creators</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">J</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Jason</h4>
                      <p className="text-sm text-gray-600">Freelance Videographer</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "I typed a few lines about long-distance love into AI Song Maker, chose a soft voice — and it made a
                    full pop song in 20 seconds. Better than I expected."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ava R.</h4>
                      <p className="text-sm text-gray-600">Music Hobbyist</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "I've used other AI music tools, but AI Song Generator gives me actual control. Being able to change
                    voice and genre in AI Song Maker makes a big difference."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Marco D.</h4>
                      <p className="text-sm text-gray-600">YouTuber</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "I used AI Song Maker to create a lo-fi track for my vlog series. Downloaded in MP3, no editing
                    needed. This AI Song Generator just worked perfectly."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">E</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Elena C.</h4>
                      <p className="text-sm text-gray-600">Small Business Owner</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "Made a custom happy birthday rap with zero music skills. My friend thought it was from a studio.
                    The quality blew my mind!"
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Kyle M.</h4>
                      <p className="text-sm text-gray-600">Indie Musician</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "This is the first AI tool that actually helped me finish a songwriting idea I started months ago.
                    The melody it created was exactly what I was looking for."
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">L</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lucia P.</h4>
                      <p className="text-sm text-gray-600">Content Creator (Mexico)</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "As a non-native English speaker, I loved that I could write lyrics in Spanish and still get great
                    results. Perfect for my bilingual content!"
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 10. Complete FAQ Section - All 17 Questions */}
        <section className="py-16 px-4" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Everything you need to know about AI Song Maker</p>
            </div>
            <div className="space-y-4">
              {/* Q1 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Can I use the songs made with AI Song Maker on YouTube or Spotify?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. All songs you generate are cleared for commercial use, including platforms like YouTube,
                    Spotify, TikTok, and Instagram.
                  </p>
                </CardContent>
              </Card>

              {/* Q2 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Sparkles className="w-5 h-5 text-purple-500 mr-2" />
                    How does the AI generate music from text or lyrics?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    You provide a text prompt — like a mood, theme, or full lyrics — and our AI composes melody, adds
                    voice, and creates a structured song from it.
                  </p>
                </CardContent>
              </Card>

              {/* Q3 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    Is this a free AI song generator, or do I need to pay?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    You can start for free with up to 3 songs per day. Paid plans unlock higher quality downloads,
                    unlimited songs, and more voice options.
                  </p>
                </CardContent>
              </Card>

              {/* Q4 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Mic className="w-5 h-5 text-blue-500 mr-2" />
                    Can I choose the voice and genre of the song?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. You can select from multiple voice styles (male, female, robotic, whisper) and genres like pop,
                    rap, lo-fi, and more.
                  </p>
                </CardContent>
              </Card>

              {/* Q5 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Heart className="w-5 h-5 text-pink-500 mr-2" />
                    What are the best prompts to generate emotional AI songs?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Describe the feeling and setting clearly. For example: "A soft piano ballad about letting go of
                    someone you loved in the rain."
                  </p>
                </CardContent>
              </Card>

              {/* Q6 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Zap className="w-5 h-5 text-orange-500 mr-2" />
                    Do I need any music production skills to use this?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Not at all. AI Song Maker is made for beginners. You just need to describe the vibe or paste your
                    lyrics.
                  </p>
                </CardContent>
              </Card>

              {/* Q7 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Volume2 className="w-5 h-5 text-indigo-500 mr-2" />
                    Can I make a funny or meme song with AI?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Absolutely. Users create comedy songs, parody raps, and meme content all the time. Just write a
                    creative prompt — we handle the music.
                  </p>
                </CardContent>
              </Card>

              {/* Q8 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Globe className="w-5 h-5 text-teal-500 mr-2" />
                    Does it support multiple languages for song generation?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. We support English, Spanish, French, Japanese, Korean, German, and more. You can write your
                    prompts in your native language.
                  </p>
                </CardContent>
              </Card>

              {/* Q9 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Clock className="w-5 h-5 text-red-500 mr-2" />
                    How long does it take to generate a full AI song?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    On average, under 30 seconds. Just type, choose a style, and hit generate.
                  </p>
                </CardContent>
              </Card>

              {/* Q10 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Download className="w-5 h-5 text-cyan-500 mr-2" />
                    Can I download the song as an MP3 or WAV?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. You can download every generated track in MP3 by default. WAV is available for Pro users.
                  </p>
                </CardContent>
              </Card>

              {/* Q11 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Repeat className="w-5 h-5 text-purple-500 mr-2" />
                    Will each generation give me a different song?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. Even with the same prompt, you'll get variations in melody, timing, and voice expression.
                  </p>
                </CardContent>
              </Card>

              {/* Q12 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Brain className="w-5 h-5 text-green-500 mr-2" />
                    Is the AI trained on existing music or original models?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    We use a proprietary model fine-tuned on royalty-free and synthetic music data — your songs are
                    unique and copyright-safe.
                  </p>
                </CardContent>
              </Card>

              {/* Q13 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Waveform className="w-5 h-5 text-blue-500 mr-2" />
                    Can I generate instrumental-only songs?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. Select "no vocals" in the voice style menu to create instrumental tracks.
                  </p>
                </CardContent>
              </Card>

              {/* Q14 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Award className="w-5 h-5 text-yellow-600 mr-2" />
                    What's the difference between AI Song Maker and tools like Suno or Udio?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    We give you more control, voice options, faster generation, and a clear license. Plus, no account
                    required to start.
                  </p>
                </CardContent>
              </Card>

              {/* Q15 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Video className="w-5 h-5 text-red-600 mr-2" />
                    Can I use AI Song Maker for making background music for videos or podcasts?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes. Many creators use it to produce ambient tracks, intros, outros, or entire podcast soundbeds.
                  </p>
                </CardContent>
              </Card>

              {/* Q16 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    How does AI Song Maker compare to other AI music generators?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    AI Song Maker focuses on user control, faster generation times, and clearer licensing. Our AI Song
                    Generator provides more voice options and genre flexibility than most competitors.
                  </p>
                </CardContent>
              </Card>

              {/* Q17 */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 transform">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <Music className="w-5 h-5 text-purple-600 mr-2" />
                    Can AI Song Generator create songs in specific music styles?
                  </h3>
                  <p className="text-gray-700 ml-7">
                    Yes, AI Song Maker supports various music styles including pop, rock, hip-hop, electronic, folk, and
                    more. Simply specify your preferred style in the prompt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 11. CTA Section */}
        <HomeCTA />

        {/* 12. Technology Behind It */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Technology Behind AI Song Maker</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              AI Song Maker's engine is built on proprietary music generation models and advanced voice synthesis. Our
              AI Song Generator focuses on delivering coherent melodies, natural phrasing, and genre-aware structuring —
              allowing you to create radio-quality output in seconds. Unlike other AI music tools, AI Song Maker
              optimizes for musicality, not just novelty.
            </p>
          </div>
        </section>

        {/* 13. License & Copyright */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">License & Copyright</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              All songs you generate with AI Song Maker are yours to use — whether for personal projects or commercial
              distribution. You own full rights to distribute, remix, publish, or monetize the content. There are no
              hidden usage fees or third-party copyright risks.
            </p>
          </div>
        </section>

        {/* 14. About Us */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About AI Song Maker</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              AI Song Maker is developed by a small team of musicians, developers, and creators who believe that
              songwriting should be accessible to everyone. Our AI Song Generator mission is to empower creativity
              through AI without sacrificing quality or rights. If you have ideas about AI Song Maker, feedback, or
              questions, reach out anytime.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
