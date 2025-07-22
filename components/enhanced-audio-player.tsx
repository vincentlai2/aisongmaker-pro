"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, RotateCcw } from "lucide-react"

interface EnhancedAudioPlayerProps {
  src: string
  title: string
}

export function EnhancedAudioPlayer({ src, title }: EnhancedAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      setIsLoading(true)
      if (isPlaying) {
        audioRef.current.pause()
        setIsLoading(false)
      } else {
        // Simulate loading for demo
        setTimeout(() => {
          setIsLoading(false)
          // In real implementation, this would actually play
          setIsPlaying(true)
          // Simulate progress
          const interval = setInterval(() => {
            setCurrentTime((prev) => {
              if (prev >= 30) {
                // Demo duration
                setIsPlaying(false)
                clearInterval(interval)
                return 0
              }
              return prev + 1
            })
          }, 1000)
        }, 1000)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const resetTrack = () => {
    setCurrentTime(0)
    setIsPlaying(false)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  useEffect(() => {
    setDuration(30) // Demo duration
  }, [])

  return (
    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
      <Button
        size="sm"
        onClick={togglePlay}
        disabled={isLoading}
        className={`rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 ${
          isLoading ? "animate-pulse" : ""
        } ${isPlaying ? "scale-110" : ""}`}
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </Button>

      <div className="flex-1">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-900">{title}</span>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <Button size="sm" variant="ghost" onClick={resetTrack} className="h-6 w-6 p-0">
              <RotateCcw className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      <Volume2 className="w-4 h-4 text-gray-400" />
    </div>
  )
}
