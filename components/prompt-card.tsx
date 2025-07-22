"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

interface PromptCardProps {
  category: string
  prompt: string
  icon: React.ReactNode
  bgColor: string
}

export function PromptCard({ category, prompt, icon, bgColor }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

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
    <Card className={`border-0 shadow-sm hover:shadow-md transition-all duration-300 ${bgColor}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {icon}
            <span className="font-medium ml-2">{category}</span>
          </div>
          <Button size="sm" variant="ghost" onClick={copyPrompt} className="h-8 w-8 p-0 hover:bg-white/50">
            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-sm text-gray-700 italic">"{prompt}"</p>
      </CardContent>
    </Card>
  )
}
