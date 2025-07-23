'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function GlobalNotFound() {
  const router = useRouter();

  // 移除自动重定向，让用户停留在404页面
  // useEffect(() => {
  //   router.replace('/en');
  // }, [router]);

  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
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
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href="/en"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go Home
                </a>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Go Back
                </button>
              </div>

              {/* Suggestions Card */}
              <div className="mb-12 bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What can you do?
                </h2>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Check the URL for typos</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Go back to homepage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Search our site</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Contact us for help</span>
                  </div>
                </div>
              </div>

              {/* Popular Pages */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                  Popular Pages
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform rounded-lg p-6">
                    <a href="/en" className="block">
                      <svg className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        AI Song Generator
                      </h4>
                      <p className="text-sm text-gray-600">
                        Create AI songs instantly
                      </p>
                    </a>
                  </div>

                  <div className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform rounded-lg p-6">
                    <a href="/en/prompt-examples" className="block">
                      <svg className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Prompt Examples
                      </h4>
                      <p className="text-sm text-gray-600">
                        Get inspired with examples
                      </p>
                    </a>
                  </div>

                  <div className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform rounded-lg p-6">
                    <a href="/en/use-cases" className="block">
                      <svg className="h-8 w-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Use Cases
                      </h4>
                      <p className="text-sm text-gray-600">
                        Discover use cases
                      </p>
                    </a>
                  </div>

                  <div className="group hover:shadow-lg transition-all duration-300 bg-white/60 backdrop-blur-sm border-0 hover:scale-105 transform rounded-lg p-6">
                    <a href="/en/blog" className="block">
                      <svg className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Blog
                      </h4>
                      <p className="text-sm text-gray-600">
                        Read our latest posts
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
