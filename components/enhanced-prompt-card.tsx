"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"
import type React from "react"

interface EnhancedPromptCardProps {
  category: string
  prompt: string
  icon: React.ReactNode
  bgColor: string
}

export function EnhancedPromptCard({ category, prompt, icon, bgColor }: EnhancedPromptCardProps) {
  const [copied, setCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Card
      className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${bgColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <div className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>{icon}</div>
            <span className="font-medium ml-2">{category}</span>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={copyPrompt}
            className={`h-8 w-8 p-0 hover:bg-white/50 transition-all duration-300 ${
              copied ? "bg-green-100 hover:bg-green-100" : ""
            }`}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />
            )}
          </Button>
        </div>
        <p className="text-sm text-gray-700 italic">"{prompt}"</p>
        {copied && (
          <div className="mt-2 text-xs text-green-600 font-medium animate-fade-in">✓ Copied to clipboard!</div>
        )}
      </CardContent>
    </Card>
  )
}
