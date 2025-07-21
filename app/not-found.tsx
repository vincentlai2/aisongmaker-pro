import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Music, FileText, Lightbulb, BookOpen } from 'lucide-react';

// SEO优化：返回404状态码和noindex
export const metadata: Metadata = {
  title: '404 - Page Not Found | AI Song Maker',
  description: 'The page you are looking for could not be found. Explore our AI song generation tools and create amazing music.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
      </head>
      <body>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* 404 Hero Section */}
              <div className="mb-12">
                <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 mb-6">
                  404
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Page Not Found
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Sorry, the page you are looking for doesn't exist. But don't worry, you can still create amazing AI songs!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              {/* Suggestions Card */}
              <Card className="mb-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    What you can do:
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Check the URL for typos</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Visit our homepage</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Explore our features</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Try creating an AI song</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Pages */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Popular Pages
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform">
                    <CardContent className="p-6">
                      <Link href="/" className="block">
                        <Music className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <h4 className="font-semibold text-gray-900 mb-2">
                          AI Song Generator
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
                          Prompt Examples
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
                          Use Cases
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
                          Blog
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
      </body>
    </html>
  );
}
