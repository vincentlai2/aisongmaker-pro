import { Button } from "@/components/ui/button"
import { Music, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">AI Song Maker</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Create original AI songs online from your lyrics, moods, or ideas. The easiest way to turn your creativity
              into music.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Youtube className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#generator" className="hover:text-white transition-colors">
                  AI Music Generator
                </a>
              </li>
              <li>
                <a href="#lyrics" className="hover:text-white transition-colors">
                  AI Lyrics Generator
                </a>
              </li>
              <li>
                <a href="/prompt-examples" className="hover:text-white transition-colors">
                  Prompt Examples
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/use-cases" className="hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-white transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              <a href="/about" className="hover:text-white transition-colors">
                About
              </a>
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/license" className="hover:text-white transition-colors">
                License
              </a>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
            <div className="text-sm text-gray-400">© 2025 AI Song Maker. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
