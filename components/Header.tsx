"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, Search, User, Leaf, Heart } from "lucide-react"
import { useCart } from "@/lib/cart"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-nature-800 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <span>Free shipping on orders over $75 🌿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-nature-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-nature-500 to-sage-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-nature-800 font-serif">NatureRiches</div>
                <div className="text-xs text-nature-600 -mt-1 hidden lg:block">Pure • Natural • Sustainable</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-nature-600 relative group ${
                    pathname === item.href ? "text-nature-600" : "text-nature-800"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-nature-600 transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "w-full" : ""
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Search Button */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-nature-700 hover:text-nature-600 hover:bg-nature-50 p-2"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-nature-700 hover:text-nature-600 hover:bg-nature-50 p-2"
              >
                <Heart className="h-5 w-5" />
              </Button>

              {/* Account Button */}
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex text-nature-700 hover:text-nature-600 hover:bg-nature-50 p-2"
              >
                <User className="h-5 w-5" />
              </Button>

              {/* Cart Button */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="relative text-nature-700 hover:text-nature-600 hover:bg-nature-50 p-2"
              >
                <Link href="/cart">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-nature-600 text-white text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden text-nature-700 p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-white">
                  <div className="flex flex-col h-full">
                    {/* Mobile Logo */}
                    <div className="flex items-center space-x-2 pb-6 border-b border-nature-100">
                      <div className="w-8 h-8 bg-gradient-to-br from-nature-500 to-sage-600 rounded-full flex items-center justify-center">
                        <Leaf className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-nature-800 font-serif">NatureRiches</div>
                        <div className="text-xs text-nature-600 -mt-1">Pure • Natural • Sustainable</div>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-6">
                      <div className="space-y-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg font-medium transition-colors duration-200 hover:text-nature-600 ${
                              pathname === item.href ? "text-nature-600" : "text-nature-800"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Mobile Actions */}
                      <div className="mt-8 pt-6 border-t border-nature-100 space-y-4">
                        <Button
                          variant="outline"
                          className="w-full justify-start border-nature-200 text-nature-700 hover:bg-nature-50 bg-transparent"
                        >
                          <Search className="h-4 w-4 mr-2" />
                          Search Products
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-nature-200 text-nature-700 hover:bg-nature-50 bg-transparent"
                        >
                          <Heart className="h-4 w-4 mr-2" />
                          Wishlist
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-nature-200 text-nature-700 hover:bg-nature-50 bg-transparent"
                        >
                          <User className="h-4 w-4 mr-2" />
                          My Account
                        </Button>
                      </div>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="pt-6 border-t border-nature-100">
                      <Button asChild className="w-full bg-nature-600 hover:bg-nature-700 text-white">
                        <Link href="/products" onClick={() => setIsOpen(false)}>
                          Shop Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
