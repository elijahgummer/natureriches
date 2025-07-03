"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import { useCart } from "@/lib/cart"
import type { Product } from "@/lib/products"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
  viewMode?: "grid" | "list"
}

export default function ProductCard({ product, viewMode = "grid" }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsLoading(true)

    try {
      await addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })

      toast.success(`${product.name} added to cart!`, {
        description: "Continue shopping or view your cart",
        action: {
          label: "View Cart",
          onClick: () => (window.location.href = "/cart"),
        },
      })
    } catch (error) {
      toast.error("Failed to add item to cart")
    } finally {
      setIsLoading(false)
    }
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  if (viewMode === "list") {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border-nature-100">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-48 h-48 md:h-auto">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            {product.isNew && <Badge className="absolute top-2 left-2 bg-sage-600 text-white">New</Badge>}
            {discountPercentage > 0 && (
              <Badge className="absolute top-2 right-2 bg-red-500 text-white">-{discountPercentage}%</Badge>
            )}
          </div>

          <CardContent className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-nature-800 mb-2 hover:text-nature-600 transition-colors">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="text-nature-600 mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-nature-600 ml-1">({product.reviewCount})</span>
                  </div>

                  {product.isOrganic && (
                    <Badge variant="outline" className="border-nature-300 text-nature-700">
                      Organic
                    </Badge>
                  )}
                </div>
              </div>

              <div className="text-right ml-4">
                <div className="flex flex-col items-end space-y-2">
                  <div>
                    <span className="text-2xl font-bold text-nature-800">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/${product.id}`}>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleAddToCart}
                      disabled={isLoading || !product.inStock}
                      className="bg-nature-600 hover:bg-nature-700 text-white"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      {isLoading ? "Adding..." : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-nature-100 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {product.isNew && <Badge className="bg-sage-600 text-white shadow-lg">New</Badge>}
          {product.isBestseller && <Badge className="bg-nature-600 text-white shadow-lg">Bestseller</Badge>}
          {discountPercentage > 0 && <Badge className="bg-red-500 text-white shadow-lg">-{discountPercentage}%</Badge>}
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          <Button variant="secondary" size="sm" className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-lg">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" asChild className="w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-lg">
            <Link href={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Quick Add Button */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <Button
            onClick={handleAddToCart}
            disabled={isLoading || !product.inStock}
            className="w-full bg-nature-600 hover:bg-nature-700 text-white shadow-lg"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isLoading ? "Adding..." : "Quick Add"}
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-nature-800 mb-1 line-clamp-2 group-hover:text-nature-600 transition-colors">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-sm text-nature-600 line-clamp-2">{product.description}</p>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-nature-600 ml-1">({product.reviewCount})</span>
          </div>

          {product.isOrganic && (
            <Badge variant="outline" className="text-xs border-nature-300 text-nature-700">
              Organic
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-nature-800">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>

          {!product.inStock && (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
