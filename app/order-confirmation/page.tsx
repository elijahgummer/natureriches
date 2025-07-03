"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { CheckCircle, Package, Mail, ArrowRight, Home, Star, Truck } from "lucide-react"
import { clearCart } from "@/lib/cart"
import { stripePromise } from "@/lib/stripe"
import toast from "react-hot-toast"

interface PaymentIntent {
  id: string
  amount: number
  currency: string
  status: string
  shipping?: {
    name: string
    address: {
      line1: string
      city: string
      state: string
      postal_code: string
      country: string
    }
  }
  receipt_email?: string
  metadata?: Record<string, string>
}

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent | null>(null)
  const [loading, setLoading] = useState(true)
  const [emailStatus, setEmailStatus] = useState<"sending" | "sent" | "failed" | null>(null)

  const paymentIntentId = searchParams.get("payment_intent")
  const clientSecret = searchParams.get("payment_intent_client_secret")

  useEffect(() => {
    if (!paymentIntentId || !clientSecret) {
      setLoading(false)
      return
    }

    const fetchPaymentIntent = async () => {
      try {
        const stripe = await stripePromise
        if (!stripe) throw new Error("Stripe not loaded")

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret)
        if (paymentIntent) {
          setPaymentIntent(paymentIntent as PaymentIntent)

          // Clear cart after successful payment
          if (paymentIntent.status === "succeeded") {
            clearCart()
            toast.success("Order confirmed! Check your email for details.")
          }
        }
      } catch (error) {
        console.error("Error fetching payment intent:", error)
        toast.error("Error loading order details")
      } finally {
        setLoading(false)
      }
    }

    fetchPaymentIntent()
  }, [paymentIntentId, clientSecret])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading order details...</p>
        </div>
      </div>
    )
  }

  if (!paymentIntent) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
          <CardContent className="text-center p-8">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-white mb-4">Order Not Found</h2>
            <p className="text-gray-400 mb-6">
              We couldn't find your order details. Please check your email for confirmation.
            </p>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const orderNumber = `CZ-${paymentIntent.id.slice(-6).toUpperCase()}`
  const orderTotal = paymentIntent.amount / 100
  const subtotal = paymentIntent.metadata?.subtotal
    ? Number.parseFloat(paymentIntent.metadata.subtotal)
    : orderTotal / 1.08
  const tax = paymentIntent.metadata?.tax ? Number.parseFloat(paymentIntent.metadata.tax) : orderTotal - subtotal

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed! 🎉</h1>
          <p className="text-xl text-gray-300 mb-2">Thank you for your purchase!</p>
          <p className="text-gray-400">Order #{orderNumber}</p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-green-900/20 border-green-700">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Payment Confirmed</h3>
              <p className="text-green-300 text-sm">Your payment has been processed successfully</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/20 border-blue-700">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Confirmation Sent</h3>
              <p className="text-blue-300 text-sm">Order details sent to your email</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-900/20 border-yellow-700">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Processing Order</h3>
              <p className="text-yellow-300 text-sm">We'll ship within 24 hours</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Package className="mr-2 h-5 w-5" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Order Number:</span>
                  <div className="text-white font-semibold">{orderNumber}</div>
                </div>
                <div>
                  <span className="text-gray-400">Order Date:</span>
                  <div className="text-white font-semibold">{new Date().toLocaleDateString()}</div>
                </div>
                <div>
                  <span className="text-gray-400">Payment Status:</span>
                  <div className="text-green-400 font-semibold capitalize">{paymentIntent.status}</div>
                </div>
                <div>
                  <span className="text-gray-400">Payment Method:</span>
                  <div className="text-white font-semibold">Card ending in ****</div>
                </div>
              </div>

              <Separator className="bg-gray-600" />

              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {tax > 0 && (
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400 font-medium">FREE</span>
                </div>
                <Separator className="bg-gray-600" />
                <div className="flex justify-between text-white text-lg font-bold">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Information */}
          {paymentIntent.shipping && (
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="text-white font-semibold mb-2">{paymentIntent.shipping.name}</div>
                  <div className="text-gray-300 space-y-1">
                    <div>{paymentIntent.shipping.address.line1}</div>
                    <div>
                      {paymentIntent.shipping.address.city}, {paymentIntent.shipping.address.state}{" "}
                      {paymentIntent.shipping.address.postal_code}
                    </div>
                    <div>{paymentIntent.shipping.address.country}</div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-2">📦 Shipping Timeline</h4>
                  <ul className="text-blue-200 text-sm space-y-1">
                    <li>• Processing: 1-2 business days</li>
                    <li>• Shipping: 5-7 business days</li>
                    <li>• Tracking info will be sent to your email</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* What's Next */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold">📧 Check Your Email</h4>
                <p className="text-gray-300 text-sm">
                  We've sent a detailed order confirmation to{" "}
                  <span className="text-blue-400 font-medium">{paymentIntent.receipt_email}</span>
                </p>

                <h4 className="text-white font-semibold">📱 Track Your Order</h4>
                <p className="text-gray-300 text-sm">
                  You'll receive tracking information within 24 hours once your order ships.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">💬 Need Help?</h4>
                <p className="text-gray-300 text-sm">
                  Contact us at{" "}
                  <a href="mailto:support@czarcar.com" className="text-blue-400 hover:underline">
                    support@czarcar.com
                  </a>{" "}
                  with order #{orderNumber}
                </p>

                <h4 className="text-white font-semibold">⭐ Leave a Review</h4>
                <p className="text-gray-300 text-sm">Share your experience and get 10% off your next order!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="/products">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/50 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Join 10,000+ Happy Customers!</h3>
            <p className="text-gray-300">
              "Amazing quality and fast shipping. CzarCar has the best car accessories!" - Sarah M.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
