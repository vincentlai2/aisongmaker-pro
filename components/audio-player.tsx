"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2 } from "lucide-react"

interface AudioPlayerProps {
  src: string
  title: string
}

export function AudioPlayer({ src, title }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
      <Button size="sm" onClick={togglePlay} className="rounded-full bg-purple-600 hover:bg-purple-700 text-white">
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      <div className="flex-1">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-900">{title}</span>
          <span className="text-gray-500">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      <Volume2 className="w-4 h-4 text-gray-400" />

      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}
