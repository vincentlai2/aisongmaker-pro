'use client';

import { Article } from "@/lib/article-management";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.metaDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <article className="prose prose-lg max-w-none">
      {/* Header */}
      <header className="mb-8 not-prose">
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-6">
          {article.metaDescription}
        </p>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime} min read</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{article.category}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={handleShare} variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </header>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="mb-8 not-prose">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t not-prose">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-500">Tags:</span>
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </footer>
    </article>
  );
}
