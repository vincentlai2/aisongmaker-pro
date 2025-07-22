"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UseCasesCTA } from "@/components/cta-section"
import {
  Users,
  Award,
  Briefcase,
  Gift,
  Gamepad2,
  BookOpen,
  ArrowLeft,
  Play,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function UseCasesClient() {
  const useCases = [
    {
      title: "Content Creators",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      description: "Perfect for YouTubers, TikTokers, and social media creators",
      examples: [
        "YouTube video background music",
        "TikTok original soundtracks",
        "Instagram Reels audio",
        "Podcast intros and outros",
        "Twitch stream music",
        "Social media ads",
      ],
      testimonial: {
        name: "Sarah Chen",
        role: "YouTuber (500K subscribers)",
        quote:
          "AI Song Maker saved me hundreds of dollars on royalty-free music. I create custom tracks for every video now!",
        rating: 5,
      },
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Musicians & Artists",
      icon: <Award className="w-8 h-8 text-green-500" />,
      description: "For indie musicians, songwriters, and music producers",
      examples: [
        "Song prototyping and demos",
        "Lyric melody exploration",
        "Creative inspiration tool",
        "Backing track creation",
        "Genre experimentation",
        "Collaboration starting points",
      ],
      testimonial: {
        name: "Marcus Rodriguez",
        role: "Indie Musician",
        quote: "I use AI Song Maker to quickly test out lyrical ideas. It's like having a co-writer available 24/7.",
        rating: 5,
      },
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Business & Marketing",
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      description: "For agencies, startups, and marketing professionals",
      examples: [
        "Brand jingles and sound logos",
        "Commercial background music",
        "Event and presentation audio",
        "Product launch soundtracks",
        "Corporate training videos",
        "Marketing campaign music",
      ],
      testimonial: {
        name: "Jennifer Park",
        role: "Marketing Director",
        quote: "We created a perfect jingle for our startup in 5 minutes. Our clients love the unique sound!",
        rating: 5,
      },
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Personal & Gifts",
      icon: <Gift className="w-8 h-8 text-orange-500" />,
      description: "For special occasions and personal projects",
      examples: [
        "Custom birthday songs",
        "Wedding anniversary music",
        "Baby shower lullabies",
        "Graduation celebrations",
        "Holiday family songs",
        "Pet tribute music",
      ],
      testimonial: {
        name: "David Thompson",
        role: "Father of 3",
        quote: "Made a personalized birthday rap for my daughter. She played it for all her friends - instant dad win!",
        rating: 5,
      },
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Gaming & Apps",
      icon: <Gamepad2 className="w-8 h-8 text-teal-500" />,
      description: "For game developers and app creators",
      examples: [
        "Game background music",
        "App notification sounds",
        "Interactive media audio",
        "Menu and UI sounds",
        "Character theme songs",
        "Level completion music",
      ],
      testimonial: {
        name: "Alex Kim",
        role: "Indie Game Developer",
        quote:
          "Created an entire soundtrack for my mobile game using AI Song Maker. Players love the unique audio experience!",
        rating: 5,
      },
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Education & Learning",
      icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
      description: "For teachers, trainers, and educational content",
      examples: [
        "Educational content music",
        "Study and focus tracks",
        "Language learning songs",
        "Children's educational music",
        "Training video soundtracks",
        "Meditation and mindfulness",
      ],
      testimonial: {
        name: "Dr. Lisa Wang",
        role: "Elementary Teacher",
        quote:
          "My students learn multiplication tables so much faster with the custom songs I create. Music makes everything stick!",
        rating: 5,
      },
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center text-purple-600 hover:text-purple-700 mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>

            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">How Creators Use AI Song Maker</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover real-world applications and success stories from content creators, musicians, businesses, and
                individuals using AI Song Maker to enhance their projects.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${useCase.color} p-6 text-white`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{useCase.title}</h3>
                          <p className="opacity-90">{useCase.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="font-semibold mb-4 text-gray-900">Common Use Cases:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                        {useCase.examples.map((example, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {example}
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">{useCase.testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h5 className="font-semibold text-sm">{useCase.testimonial.name}</h5>
                            <p className="text-xs text-gray-600">{useCase.testimonial.role}</p>
                          </div>
                        </div>
                        <blockquote className="text-sm text-gray-700 italic mb-2">
                          "{useCase.testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center">
                          {[...Array(useCase.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stats */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Success by the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <p className="text-gray-600">Songs Created</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">15K+</div>
                <p className="text-gray-600">Active Creators</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <p className="text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <UseCasesCTA />

        <Footer />
      </div>
    </>
  )
}
