"use client"

import { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { stripePromise } from "@/lib/stripe"
import CheckoutForm from "@/components/CheckoutForm"
import { useCart } from "@/lib/cart"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { ShoppingCart, ArrowLeft, AlertTriangle, Shield, Truck, Clock, Leaf } from "lucide-react"
import toast from "react-hot-toast"

export default function CheckoutPage() {
  const { items, getTotal } = useCart()
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const total = getTotal()

  useEffect(() => {
    if (items.length === 0) {
      setLoading(false)
      return
    }

    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          options: item.selectedOptions,
        })),
        currency: "usd", // Default to USD, can be changed based on country selection
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error)
        }
        setClientSecret(data.clientSecret)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error creating payment intent:", err)
        setError(err.message || "Failed to initialize payment")
        setLoading(false)
        toast.error("Failed to initialize payment. Please try again.")
      })
  }, [items])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
        <Header />
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nature-600 mx-auto mb-4"></div>
            <p className="text-nature-800 text-lg">Preparing your checkout...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
        <Header />
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="bg-white border-nature-100 shadow-lg max-w-md w-full">
            <CardContent className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-nature-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 text-nature-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-nature-800 mb-3 sm:mb-4 font-serif">
                Your cart is empty
              </h2>
              <p className="text-nature-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Add some natural products to your cart before checking out.
              </p>
              <Button asChild className="w-full bg-nature-600 hover:bg-nature-700 text-white font-semibold">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
        <Header />
        <div className="flex items-center justify-center py-16 px-4">
          <Card className="bg-white border-nature-100 shadow-lg max-w-md w-full">
            <CardContent className="text-center p-6 sm:p-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-red-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-nature-800 mb-3 sm:mb-4 font-serif">Payment Error</h2>
              <p className="text-nature-600 mb-4 sm:mb-6 text-sm sm:text-base">{error}</p>
              <div className="space-y-3">
                <Button
                  onClick={() => window.location.reload()}
                  className="w-full bg-nature-600 hover:bg-nature-700 text-white font-semibold"
                >
                  Try Again
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-nature-200 text-nature-700 hover:bg-nature-50 bg-transparent"
                >
                  <Link href="/cart">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Cart
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }

  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#16a34a",
      colorBackground: "#ffffff",
      colorText: "#1f2937",
      colorDanger: "#ef4444",
      fontFamily: "system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px",
    },
  }

  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
            <Link
              href="/cart"
              className="flex items-center text-nature-600 hover:text-nature-800 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-nature-800 font-serif">Secure Checkout</h1>
            <div className="w-20 hidden sm:block"></div> {/* Spacer for centering */}
          </div>

          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-nature-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                ✓
              </div>
              <span className="ml-2 text-nature-600 font-medium text-xs sm:text-sm">Cart</span>
            </div>
            <div className="w-8 sm:w-12 h-0.5 bg-nature-600"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-nature-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold">
                2
              </div>
              <span className="ml-2 text-nature-800 font-medium text-xs sm:text-sm">Checkout</span>
            </div>
            <div className="w-8 sm:w-12 h-0.5 bg-nature-200"></div>
            <div className="flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-nature-200 rounded-full flex items-center justify-center text-nature-600 text-xs sm:text-sm font-bold">
                3
              </div>
              <span className="ml-2 text-nature-600 font-medium text-xs sm:text-sm">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Benefits Bar */}
        <div className="bg-gradient-to-r from-nature-100 to-sage-100 border border-nature-200 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <div className="flex items-center text-nature-700">
              <Truck className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Free Shipping Worldwide
            </div>
            <div className="flex items-center text-nature-700">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Secure 256-bit SSL Encryption
            </div>
            <div className="flex items-center text-nature-700">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center text-nature-700">
              <Leaf className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              24/7 Customer Support
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
      <Footer />
    </div>
  )
}
