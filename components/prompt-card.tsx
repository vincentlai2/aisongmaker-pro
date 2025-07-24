"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, ExternalLink } from "lucide-react"
import { useState } from "react"

interface PromptCardProps {
  category: string
  prompt: string
  icon: React.ReactNode
  bgColor: string
}

export function PromptCard({ category, prompt, icon, bgColor }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const handleTryNow = () => {
    const encodedPrompt = encodeURIComponent(prompt)
    window.open(`https://www.udio.com/song-builder?prompt=${encodedPrompt}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <CardContent className="p-0">
        {/* Header */}
        <div className={`${bgColor} p-4 text-white`}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                {icon}
              </div>
              <span className="font-semibold text-sm">{category}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
            {prompt}
          </p>

          {/* Actions */}
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleCopy}
              className="flex-1 text-xs"
            >
              <Copy className="w-3 h-3 mr-1" />
              {copied ? "Copied!" : "Copy"}
            </Button>
            <Button
              size="sm"
              onClick={handleTryNow}
              className="flex-1 text-xs bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Try Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
