"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PromptCard } from "@/components/prompt-card"
import {
  Heart,
  Gift,
  BookOpen,
  Zap,
  Smile,
  Coffee,
  Music,
  Gamepad2,
  Briefcase,
  Search,
  Filter,
  Sparkles,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function PromptExamplesClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = [
    "All",
    "Romance & Love",
    "Birthday & Celebration",
    "Study & Focus",
    "Motivation & Energy",
    "Comedy & Fun",
    "Chill & Relaxation",
    "Business & Marketing",
    "Gaming & Entertainment",
    "Seasonal & Holiday",
  ]

  const allPrompts = [
    // Romance & Love
    {
      category: "Romance & Love",
      prompt: "A soft piano ballad about long-distance love with gentle vocals",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
      tags: ["ballad", "piano", "love", "gentle"],
    },
    {
      category: "Romance & Love",
      prompt: "An acoustic love song about meeting someone special at a coffee shop",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
      tags: ["acoustic", "love", "coffee", "meeting"],
    },
    {
      category: "Romance & Love",
      prompt: "A dreamy pop song about first love and butterflies in your stomach",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
      tags: ["pop", "first love", "dreamy", "butterflies"],
    },
    {
      category: "Romance & Love",
      prompt: "A soulful R&B track about missing someone who moved away",
      icon: <Heart className="w-5 h-5 text-pink-500" />,
      bgColor: "bg-gradient-to-r from-pink-50 to-rose-50",
      tags: ["R&B", "missing", "soulful", "distance"],
    },

    // Birthday & Celebration
    {
      category: "Birthday & Celebration",
      prompt: "An upbeat happy birthday song with cheerful melody and party vibes",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
      tags: ["birthday", "upbeat", "party", "cheerful"],
    },
    {
      category: "Birthday & Celebration",
      prompt: "A funky celebration song for a graduation party with horns",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
      tags: ["graduation", "funky", "horns", "celebration"],
    },
    {
      category: "Birthday & Celebration",
      prompt: "A sweet lullaby-style song for a baby's first birthday",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
      tags: ["lullaby", "baby", "sweet", "first birthday"],
    },
    {
      category: "Birthday & Celebration",
      prompt: "An epic rock anthem for a milestone 50th birthday celebration",
      icon: <Gift className="w-5 h-5 text-orange-500" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-yellow-50",
      tags: ["rock", "epic", "milestone", "50th"],
    },

    // Study & Focus
    {
      category: "Study & Focus",
      prompt: "A calm lo-fi instrumental track perfect for studying and concentration",
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      tags: ["lo-fi", "instrumental", "study", "calm"],
    },
    {
      category: "Study & Focus",
      prompt: "Ambient electronic music with rain sounds for deep work sessions",
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      tags: ["ambient", "electronic", "rain", "deep work"],
    },
    {
      category: "Study & Focus",
      prompt: "Classical piano meditation music for mindfulness and relaxation",
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      tags: ["classical", "piano", "meditation", "mindfulness"],
    },
    {
      category: "Study & Focus",
      prompt: "Gentle jazz instrumental for reading and creative thinking",
      icon: <BookOpen className="w-5 h-5 text-green-500" />,
      bgColor: "bg-gradient-to-r from-green-50 to-emerald-50",
      tags: ["jazz", "instrumental", "reading", "creative"],
    },

    // Motivation & Energy
    {
      category: "Motivation & Energy",
      prompt: "A powerful rap track about overcoming challenges and staying strong",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      tags: ["rap", "powerful", "challenges", "strong"],
    },
    {
      category: "Motivation & Energy",
      prompt: "An energetic workout song with heavy beats and motivational lyrics",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      tags: ["workout", "energetic", "beats", "motivational"],
    },
    {
      category: "Motivation & Energy",
      prompt: "An inspiring pop-rock anthem about chasing your dreams",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      tags: ["pop-rock", "inspiring", "dreams", "anthem"],
    },
    {
      category: "Motivation & Energy",
      prompt: "A high-energy electronic dance track for morning motivation",
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-indigo-50",
      tags: ["electronic", "dance", "morning", "high-energy"],
    },

    // Comedy & Fun
    {
      category: "Comedy & Fun",
      prompt: "A funny song about everyday life with humorous lyrics and catchy beat",
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      tags: ["funny", "everyday", "humorous", "catchy"],
    },
    {
      category: "Comedy & Fun",
      prompt: "A silly rap about trying to adult but failing spectacularly",
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      tags: ["silly", "rap", "adult", "failing"],
    },
    {
      category: "Comedy & Fun",
      prompt: "A parody song about being addicted to social media and memes",
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      tags: ["parody", "social media", "memes", "addicted"],
    },
    {
      category: "Comedy & Fun",
      prompt: "A comedic country song about losing your keys every single day",
      icon: <Smile className="w-5 h-5 text-purple-500" />,
      bgColor: "bg-gradient-to-r from-purple-50 to-pink-50",
      tags: ["comedic", "country", "keys", "daily"],
    },

    // Chill & Relaxation
    {
      category: "Chill & Relaxation",
      prompt: "A peaceful acoustic song for relaxation with nature sounds",
      icon: <Coffee className="w-5 h-5 text-teal-500" />,
      bgColor: "bg-gradient-to-r from-teal-50 to-cyan-50",
      tags: ["peaceful", "acoustic", "nature", "relaxation"],
    },
    {
      category: "Chill & Relaxation",
      prompt: "Smooth jazz for a cozy evening at home with wine",
      icon: <Coffee className="w-5 h-5 text-teal-500" />,
      bgColor: "bg-gradient-to-r from-teal-50 to-cyan-50",
      tags: ["smooth jazz", "cozy", "evening", "wine"],
    },
    {
      category: "Chill & Relaxation",
      prompt: "A dreamy indie track perfect for watching sunset on the beach",
      icon: <Coffee className="w-5 h-5 text-teal-500" />,
      bgColor: "bg-gradient-to-r from-teal-50 to-cyan-50",
      tags: ["dreamy", "indie", "sunset", "beach"],
    },
    {
      category: "Chill & Relaxation",
      prompt: "Soft bossa nova for a lazy Sunday morning with coffee",
      icon: <Coffee className="w-5 h-5 text-teal-500" />,
      bgColor: "bg-gradient-to-r from-teal-50 to-cyan-50",
      tags: ["bossa nova", "lazy", "Sunday", "coffee"],
    },

    // Business & Marketing
    {
      category: "Business & Marketing",
      prompt: "A professional jingle for a tech startup with modern electronic sounds",
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      bgColor: "bg-gradient-to-r from-indigo-50 to-purple-50",
      tags: ["jingle", "tech", "startup", "electronic"],
    },
    {
      category: "Business & Marketing",
      prompt: "An upbeat commercial song for a local bakery with warm, friendly vibes",
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      bgColor: "bg-gradient-to-r from-indigo-50 to-purple-50",
      tags: ["commercial", "bakery", "warm", "friendly"],
    },
    {
      category: "Business & Marketing",
      prompt: "A corporate anthem for team building events with inspiring message",
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      bgColor: "bg-gradient-to-r from-indigo-50 to-purple-50",
      tags: ["corporate", "team building", "inspiring", "anthem"],
    },
    {
      category: "Business & Marketing",
      prompt: "A catchy podcast intro with energetic beats and professional tone",
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      bgColor: "bg-gradient-to-r from-indigo-50 to-purple-50",
      tags: ["podcast", "intro", "energetic", "professional"],
    },

    // Gaming & Entertainment
    {
      category: "Gaming & Entertainment",
      prompt: "Epic orchestral music for a fantasy RPG boss battle scene",
      icon: <Gamepad2 className="w-5 h-5 text-red-500" />,
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      tags: ["orchestral", "fantasy", "RPG", "boss battle"],
    },
    {
      category: "Gaming & Entertainment",
      prompt: "Retro 8-bit style music for a nostalgic arcade game",
      icon: <Gamepad2 className="w-5 h-5 text-red-500" />,
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      tags: ["8-bit", "retro", "arcade", "nostalgic"],
    },
    {
      category: "Gaming & Entertainment",
      prompt: "Ambient space music for a sci-fi exploration game",
      icon: <Gamepad2 className="w-5 h-5 text-red-500" />,
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      tags: ["ambient", "space", "sci-fi", "exploration"],
    },
    {
      category: "Gaming & Entertainment",
      prompt: "Upbeat electronic music for a racing game soundtrack",
      icon: <Gamepad2 className="w-5 h-5 text-red-500" />,
      bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
      tags: ["electronic", "racing", "upbeat", "soundtrack"],
    },

    // Seasonal & Holiday
    {
      category: "Seasonal & Holiday",
      prompt: "A cozy Christmas song with bells, warm vocals, and holiday spirit",
      icon: <Gift className="w-5 h-5 text-green-600" />,
      bgColor: "bg-gradient-to-r from-green-50 to-red-50",
      tags: ["Christmas", "bells", "cozy", "holiday"],
    },
    {
      category: "Seasonal & Holiday",
      prompt: "A spooky Halloween track with eerie sounds and mysterious atmosphere",
      icon: <Music className="w-5 h-5 text-orange-600" />,
      bgColor: "bg-gradient-to-r from-orange-50 to-purple-50",
      tags: ["Halloween", "spooky", "eerie", "mysterious"],
    },
    {
      category: "Seasonal & Holiday",
      prompt: "A fresh spring song about new beginnings and blooming flowers",
      icon: <Heart className="w-5 h-5 text-green-400" />,
      bgColor: "bg-gradient-to-r from-green-50 to-yellow-50",
      tags: ["spring", "new beginnings", "flowers", "fresh"],
    },
    {
      category: "Seasonal & Holiday",
      prompt: "A summer beach party anthem with tropical vibes and steel drums",
      icon: <Coffee className="w-5 h-5 text-blue-400" />,
      bgColor: "bg-gradient-to-r from-blue-50 to-yellow-50",
      tags: ["summer", "beach", "tropical", "steel drums"],
    },
  ]

  const filteredPrompts = allPrompts.filter((prompt) => {
    const matchesCategory = activeCategory === "All" || prompt.category === activeCategory
    const matchesSearch =
      searchTerm === "" ||
      prompt.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Song Prompt Examples</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get inspired with 100+ creative prompt examples for AI music generation. Copy any prompt and start
                creating your perfect song with AI Song Maker.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search prompts by keyword, genre, or mood..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3 text-lg"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        : "hover:bg-purple-50"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Prompts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                Showing {filteredPrompts.length} prompt{filteredPrompts.length !== 1 ? "s" : ""}
                {activeCategory !== "All" && ` in ${activeCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map((prompt, index) => (
                <PromptCard
                  key={index}
                  category={prompt.category}
                  prompt={prompt.prompt}
                  icon={prompt.icon}
                  bgColor={prompt.bgColor}
                />
              ))}
            </div>

            {filteredPrompts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No prompts found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search terms or selecting a different category.</p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("All")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Song?</h2>
            <p className="text-xl mb-8 opacity-90">
              Use any of these prompts with AI Song Maker and bring your musical ideas to life.
            </p>
            <Link href="/">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating Songs
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
