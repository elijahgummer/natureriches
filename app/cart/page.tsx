"use client"

import { useCart } from "@/lib/cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft, Truck, Shield, Clock, Leaf } from "lucide-react"
import { formatCurrency } from "@/lib/countries"

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart()

  const subtotal = getTotal()
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
        <Header />
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="bg-white border-nature-100 shadow-lg max-w-md w-full">
            <CardContent className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingBag className="h-8 w-8 sm:h-10 sm:w-10 text-nature-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-nature-800 mb-3 sm:mb-4 font-serif">
                Your cart is empty
              </h2>
              <p className="text-nature-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Looks like you haven't added any natural products to your cart yet.
              </p>
              <Button asChild className="w-full bg-nature-600 hover:bg-nature-700 text-white font-semibold">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Start Shopping
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-nature-800 mb-2 font-serif">Shopping Cart</h1>
            <p className="text-nature-600 text-sm sm:text-base">
              {items.length} item{items.length !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center text-nature-600 hover:text-nature-800 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        {/* Benefits Bar */}
        <div className="bg-gradient-to-r from-nature-100 to-sage-100 border border-nature-200 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center text-nature-700">
              <Truck className="mr-2 h-4 w-4" />
              Free Shipping on All Orders
            </div>
            <div className="flex items-center text-nature-700">
              <Shield className="mr-2 h-4 w-4" />
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-nature-700">
              <Clock className="mr-2 h-4 w-4" />
              Ships Within 24 Hours
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="bg-white border-nature-100 shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Product Image */}
                    <div className="relative w-full sm:w-24 h-24 bg-nature-50 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={
                          item.optionImage ||
                          (item.product.image && item.product.image[0]) ||
                          "/placeholder.svg?height=96&width=96"
                        }
                        alt={item.product.name || "Product"}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=96&width=96"
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-nature-800 mb-1">
                        {item.product?.name || "Unknown Product"}
                      </h3>
                      {item.optionLabel && (
                        <p className="text-nature-600 text-xs sm:text-sm mb-2">{item.optionLabel}</p>
                      )}
                      <p className="text-nature-600 font-bold text-base sm:text-lg">
                        {formatCurrency((item.product?.price || 0) * item.quantity, "USD")}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto space-x-3">
                      <div className="flex items-center border border-nature-200 rounded-lg">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 text-nature-600 hover:text-nature-800 hover:bg-nature-50"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                          className="w-12 sm:w-16 h-8 text-center border-0 bg-transparent text-nature-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 text-nature-600 hover:text-nature-800 hover:bg-nature-50"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={clearCart}
                className="border-nature-200 text-nature-600 hover:bg-nature-50 hover:text-nature-800 bg-transparent"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-nature-100 shadow-lg sticky top-4">
              <CardHeader>
                <CardTitle className="text-nature-800 font-serif">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-nature-700">
                    <span className="text-sm sm:text-base">
                      Subtotal ({items.length} item{items.length !== 1 ? "s" : ""})
                    </span>
                    <span className="text-sm sm:text-base">{formatCurrency(subtotal, "USD")}</span>
                  </div>
                  <div className="flex justify-between text-nature-700">
                    <span className="text-sm sm:text-base">Tax</span>
                    <span className="text-sm sm:text-base">{formatCurrency(tax, "USD")}</span>
                  </div>
                  <div className="flex justify-between text-nature-700">
                    <span className="text-sm sm:text-base">Shipping</span>
                    <span className="text-nature-600 font-medium text-sm sm:text-base">FREE</span>
                  </div>
                  <Separator className="bg-nature-200" />
                  <div className="flex justify-between text-nature-800 text-base sm:text-lg font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(total, "USD")}</span>
                  </div>
                </div>

                {/* Savings Badge */}
                <div className="bg-gradient-to-r from-nature-100 to-sage-100 border border-nature-200 rounded-lg p-3">
                  <div className="text-nature-700 text-sm font-medium flex items-center">
                    <Leaf className="h-4 w-4 mr-2" />
                    You're saving on shipping!
                  </div>
                  <div className="text-nature-600 text-xs">Free shipping worth $15.99</div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block">
                  <Button className="w-full bg-nature-600 hover:bg-nature-700 text-white font-bold py-3 text-base sm:text-lg">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>

                {/* Security Badge */}
                <div className="text-center">
                  <div className="flex items-center justify-center text-nature-600 text-xs">
                    <Shield className="mr-1 h-3 w-3" />
                    Secure checkout with 256-bit SSL encryption
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="text-center">
                  <p className="text-nature-600 text-xs mb-2">We accept</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-5 bg-nature-100 rounded text-xs flex items-center justify-center text-nature-600">
                      💳
                    </div>
                    <div className="w-8 h-5 bg-nature-100 rounded text-xs flex items-center justify-center text-nature-600">
                      💳
                    </div>
                    <div className="w-8 h-5 bg-nature-100 rounded text-xs flex items-center justify-center text-nature-600">
                      💳
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
