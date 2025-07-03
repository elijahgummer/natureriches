"use client"

import { useState, useMemo, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { getAllProducts, getCategories, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Filter, Grid, List } from "lucide-react"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [priceRange, setPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getAllProducts()
        setProducts(allProducts)
      } catch (error) {
        console.error("Failed to load products:", error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  const filteredAndSortedProducts = useMemo(() => {
    if (!products || products.length === 0) return []

    let filtered = [...products] // Create a copy to avoid mutating original array

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Filter by price range
    if (priceRange !== "all") {
      switch (priceRange) {
        case "under-50":
          filtered = filtered.filter((product) => product.price < 50)
          break
        case "50-100":
          filtered = filtered.filter((product) => product.price >= 50 && product.price < 100)
          break
        case "100-200":
          filtered = filtered.filter((product) => product.price >= 100 && product.price < 200)
          break
        case "over-200":
          filtered = filtered.filter((product) => product.price >= 200)
          break
      }
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case "name":
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return filtered
  }, [products, searchTerm, selectedCategory, sortBy, priceRange])

  const categories = getCategories()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-50 to-sage-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-nature-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-nature-100 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="h-48 bg-nature-100 rounded-xl mb-4"></div>
                  <div className="h-4 bg-nature-100 rounded mb-2"></div>
                  <div className="h-4 bg-nature-100 rounded w-3/4 mb-4"></div>
                  <div className="h-6 bg-nature-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-nature-800 mb-4 font-serif">Our Natural Collection</h1>
          <p className="text-lg text-nature-600 max-w-2xl mx-auto">
            Discover our complete range of premium natural products, carefully curated for your wellness and sustainable
            lifestyle
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-nature-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-nature-700">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter & Sort</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="bg-nature-600 hover:bg-nature-700"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="bg-nature-600 hover:bg-nature-700"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-nature-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-nature-200 focus:border-nature-500 focus:ring-nature-500"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-nature-200 focus:border-nature-500 focus:ring-nature-500">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="border-nature-200 focus:border-nature-500 focus:ring-nature-500">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-50">Under $50</SelectItem>
                <SelectItem value="50-100">$50 - $100</SelectItem>
                <SelectItem value="100-200">$100 - $200</SelectItem>
                <SelectItem value="over-200">Over $200</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="border-nature-200 focus:border-nature-500 focus:ring-nature-500">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-nature-600">
            Showing <span className="font-semibold text-nature-800">{filteredAndSortedProducts.length}</span> products
          </p>
          {(searchTerm || selectedCategory !== "all" || priceRange !== "all") && (
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setPriceRange("all")
                setSortBy("name")
              }}
              variant="outline"
              size="sm"
              className="border-nature-300 text-nature-600 hover:bg-nature-50"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
          >
            {filteredAndSortedProducts.map((product, index) => (
              <div key={product.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} viewMode={viewMode} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-nature-100 rounded-full flex items-center justify-center">
                <Search className="h-12 w-12 text-nature-400" />
              </div>
              <h3 className="text-xl font-semibold text-nature-800 mb-2">No products found</h3>
              <p className="text-nature-600 mb-6">
                We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setPriceRange("all")
                  setSortBy("name")
                }}
                className="bg-nature-600 hover:bg-nature-700 text-white"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
