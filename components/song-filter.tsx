"use client"
import { Button } from "@/components/ui/button"

interface SongFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function SongFilter({ categories, activeCategory, onCategoryChange }: SongFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
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
  )
}
