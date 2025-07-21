'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Music, FileText, Lightbulb, BookOpen } from 'lucide-react';

export default function Test404Page() {
  const t = useTranslations('notFound');
  const tNav = useTranslations('navigation');

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Hero Section */}
          <div className="mb-12">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 mb-6">
              404
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('heading')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                {t('buttons.home')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5" />
                {t('buttons.previous')}
              </Link>
            </Button>
          </div>

          {/* Suggestions Card */}
          <Card className="mb-12 bg-gray-50 border border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('suggestions.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{t('suggestions.checkUrl')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{t('suggestions.goHome')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{t('suggestions.searchSite')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{t('suggestions.contactUs')}</span>
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
              <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <Link href="/" className="block">
                    <Music className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.generator')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('popularPages.generatorDesc')}
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <Link href="/prompt-examples" className="block">
                    <Lightbulb className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.examples')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('popularPages.examplesDesc')}
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <Link href="/use-cases" className="block">
                    <FileText className="h-8 w-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.useCases')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('popularPages.useCasesDesc')}
                    </p>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <CardContent className="p-6">
                  <Link href="/blog" className="block">
                    <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {t('popularPages.blog')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {t('popularPages.blogDesc')}
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
