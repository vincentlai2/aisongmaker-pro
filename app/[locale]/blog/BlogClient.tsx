"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, ArrowRight, Sparkles, BookOpen, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BlogClient() {
  const featuredPosts = [
    {
      title: "10 Tips for Writing Better AI Song Prompts",
      excerpt:
        "Learn how to craft prompts that generate exactly the music you envision. From mood descriptions to genre specifications.",
      author: "AI Song Maker Team",
      date: "2025-07-24",
      readTime: "5 min read",
      category: "Tutorial",
      image: "/blog/prompt-tips.jpg",
      featured: true,
    },
    {
      title: "The Future of AI in Music Creation",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the music industry and what it means for creators.",
      author: "Dr. Sarah Chen",
      date: "2025-07-20",
      readTime: "8 min read",
      category: "Industry",
      image: "/blog/ai-future.jpg",
      featured: true,
    },
  ]

  const recentPosts = [
    {
      title: "How to Create Viral TikTok Songs with AI",
      excerpt:
        "Step-by-step guide to generating catchy, short-form content that resonates with social media audiences.",
      author: "Marcus Johnson",
      date: "2025-07-18",
      readTime: "6 min read",
      category: "Social Media",
      image: "/blog/tiktok-songs.jpg",
    },
    {
      title: "Copyright and AI-Generated Music: What You Need to Know",
      excerpt: "Understanding the legal landscape of AI music creation and how to protect your generated content.",
      author: "Legal Team",
      date: "2025-07-15",
      readTime: "7 min read",
      category: "Legal",
      image: "/blog/copyright.jpg",
    },
    {
      title: "From Lyrics to Melody: The Science Behind AI Song Generation",
      excerpt: "Deep dive into the technology that transforms your words into complete musical compositions.",
      author: "Tech Team",
      date: "2025-07-12",
      readTime: "10 min read",
      category: "Technology",
      image: "/blog/ai-science.jpg",
    },
    {
      title: "Building Your Brand with Custom Music",
      excerpt: "How businesses are using AI-generated music to create unique brand identities and marketing campaigns.",
      author: "Marketing Team",
      date: "2025-07-10",
      readTime: "5 min read",
      category: "Business",
      image: "/blog/brand-music.jpg",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24 },
    { name: "Tutorial", count: 8 },
    { name: "Industry", count: 6 },
    { name: "Technology", count: 4 },
    { name: "Business", count: 3 },
    { name: "Legal", count: 2 },
    { name: "Social Media", count: 1 },
  ]

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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Music Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tips, tutorials, and insights about AI music generation. Learn how to create better songs and stay
                updated with industry trends.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-12 mb-12">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Coming Soon!</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're working on creating amazing content about AI music generation, songwriting tips, and industry
                insights. Stay tuned for regular updates!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Notified When We Launch
                </Button>
                <Link href="/prompt-examples">
                  <Button size="lg" variant="outline" className="px-8 py-4 bg-transparent">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Browse Prompt Examples
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preview of Planned Content */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Coming</h2>
              <p className="text-gray-600">Preview of the content we're preparing for you</p>
            </div>

            {/* Featured Posts Preview */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {featuredPosts.map((post, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                      <div className="text-white text-center">
                        <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-80" />
                        <p className="text-sm opacity-80">Coming Soon</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                          <Calendar className="w-4 h-4 ml-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm" disabled>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Posts Preview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="h-32 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white opacity-60" />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {post.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">{post.title}</h4>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Be the first to know when we publish new articles about AI music creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
