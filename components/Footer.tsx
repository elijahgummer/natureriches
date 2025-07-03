import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-nature-800 via-nature-700 to-sage-800 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-nature-600/30">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-serif">Stay Connected with Nature</h3>
            <p className="text-nature-200 mb-4 sm:mb-6 text-sm sm:text-base">
              Subscribe to our newsletter for exclusive offers, wellness tips, and the latest natural product updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-nature-300 focus:border-white/40"
              />
              <Button className="bg-white text-nature-800 hover:bg-nature-50 font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-nature-400 to-sage-500 rounded-full flex items-center justify-center">
                <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold font-serif">NatureRiches</div>
                <div className="text-xs text-nature-300">Pure • Natural • Sustainable</div>
              </div>
            </div>
            <p className="text-nature-200 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Dedicated to bringing you the finest natural products that nurture your body, mind, and home with the pure
              essence of nature.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Products", href: "/products" },
                { name: "Contact", href: "/contact" },
                { name: "Blog", href: "/blog" },
                { name: "FAQ", href: "/faq" },
                { name: "Reviews", href: "/reviews" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-nature-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Customer Care</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Shipping Info", href: "/shipping" },
                { name: "Returns & Exchanges", href: "/returns" },
                { name: "Size Guide", href: "/size-guide" },
                { name: "Track Your Order", href: "/track" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-nature-200 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Get in Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-nature-400 flex-shrink-0" />
                <div className="text-nature-200 text-sm sm:text-base">hello@natureriches.com</div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-4 sm:mt-6">
              <h5 className="font-semibold mb-2 text-sm sm:text-base">Stay Updated</h5>
              <div className="text-nature-200 text-xs sm:text-sm space-y-1">
                <p>Get wellness tips and exclusive offers</p>
                <p>New product announcements</p>
                <p>Sustainable living guides</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-nature-600/30">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-nature-300 text-xs sm:text-sm text-center sm:text-left">
              © 2024 NatureRiches. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-nature-300 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
              <span>for nature lovers everywhere</span>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-nature-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-nature-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
