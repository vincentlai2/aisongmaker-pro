"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Play } from "lucide-react"
import Link from "next/link"

interface CTAProps {
  title: string
  subtitle: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  icon?: React.ReactNode
  variant?: 'default' | 'minimal'
  className?: string
}

export function CTASection({
  title,
  subtitle, 
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  icon = <Sparkles className="w-5 h-5 mr-2" />,
  variant = 'default',
  className = ""
}: CTAProps) {
  if (variant === 'minimal') {
    return (
      <section className={`py-16 px-4 ${className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
              >
                {icon}
                {primaryText}
              </Button>
            </Link>
            {secondaryText && secondaryHref && (
              <Link href={secondaryHref}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-purple-600 border-purple-200 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-2xl bg-transparent hover:scale-105 transition-all"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <div className="w-20 h-20 mx-auto mb-6 opacity-90">
          {icon}
        </div>
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 transform"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              {primaryText}
            </Button>
          </Link>
          {secondaryText && secondaryHref && (
            <Link href={secondaryHref}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all bg-transparent hover:scale-105 transform"
              >
                <Play className="w-5 h-5 mr-2" />
                {secondaryText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

// 预设的CTA变体
export function HomeCTA() {
  return (
    <CTASection
      title="Create Your First Song Now"
      subtitle="No sign-up required. Just enter your idea and hear it come to life."
      primaryText="Start Generating"
      primaryHref="https://www.udio.com/song-builder"
      secondaryText="Listen to Demos"
      secondaryHref="#demo"
      icon={<Sparkles className="w-20 h-20" />}
    />
  )
}

export function UseCasesCTA() {
  return (
    <CTASection
      title="Ready to Join Thousands of Creators?"
      subtitle="Start creating professional-quality music for your projects today."
      primaryText="Start Creating Now"
      primaryHref="https://www.udio.com/song-builder"
      secondaryText="Browse Prompt Examples"
      secondaryHref="/prompt-examples"
      icon={<Sparkles className="w-16 h-16" />}
    />
  )
}

export function BlogCTA() {
  return (
    <CTASection
      title="Stay Updated"
      subtitle="Be the first to know when we publish new articles about AI music creation."
      primaryText="Get Notified When We Launch"
      primaryHref="/"
      icon={<Sparkles className="w-16 h-16" />}
      variant="default"
    />
  )
}