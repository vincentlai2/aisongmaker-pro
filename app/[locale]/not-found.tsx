'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Music, FileText, Lightbulb, BookOpen } from 'lucide-react';
import { useEffect } from 'react';

export default function NotFound() {
  const t = useTranslations('notFound');
  const tNav = useTranslations('navigation');

  // 设置SEO meta标签
  useEffect(() => {
    // 设置页面标题
    document.title = '404 - Page Not Found | AI Song Maker';
    
    // 添加noindex meta标签
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow, noarchive, nosnippet';
    document.head.appendChild(metaRobots);

    return () => {
      // 清理meta标签
      const existingMeta = document.head.querySelector('meta[name="robots"]');
      if (existingMeta) {
        document.head.removeChild(existingMeta);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative px-4 pb-20 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Hero Section - 匹配首页风格 */}
          <div className="mb-12">
            <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">404</div>
            <h1 className="font-bold text-gray-900 mb-6 leading-tight text-3xl">
              {t('heading')} - But You Can Still Create Amazing{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Songs
              </span>
            </h1>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
              {t('description')} But don't worry, you can still create original AI songs from your lyrics, moods, or ideas.
            </p>
          </div>

          {/* Action Buttons - 匹配首页按钮风格 */}
          <div className="space-y-4 mb-12">
            <Button
              asChild
              size="lg"
              className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                {t('buttons.home')}
              </Link>
            </Button>
            
            <div className="flex gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="text-purple-600 border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
              >
                <Link href="/prompt-examples">Listen to Demo</Link>
              </Button>
              <Button
                asChild
                variant="outline" 
                className="text-purple-600 border-purple-200 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
              >
                <Link href="/use-cases">View Use Cases</Link>
              </Button>
            </div>
          </div>

          {/* Suggestions Card */}
          <Card className="mb-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('suggestions.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{t('suggestions.checkUrl')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{t('suggestions.goHome')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{t('suggestions.searchSite')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{t('suggestions.contactUs')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              {t('popularPages.title')}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform">
                <CardContent className="p-6">
                  <Link href="/" className="block">
                    <Music className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.generator')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create AI songs instantly
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform">
                <CardContent className="p-6">
                  <Link href="/prompt-examples" className="block">
                    <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.examples')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Get inspired with examples
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform">
                <CardContent className="p-6">
                  <Link href="/use-cases" className="block">
                    <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.useCases')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Discover use cases
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform">
                <CardContent className="p-6">
                  <Link href="/blog" className="block">
                    <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.blog')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Read our latest posts
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
