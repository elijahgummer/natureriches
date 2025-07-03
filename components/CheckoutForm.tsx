"use client"

import { useState, useEffect } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Truck, Lock, CreditCard, Mail, Globe, AlertCircle } from "lucide-react"
import { useCart } from "@/lib/cart"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import {
  countries,
  getCountryByCode,
  getStatesForCountry,
  getAddressLabels,
  formatCurrency,
  stripeSupportedCurrencies,
} from "@/lib/countries"
import Image from "next/image"

const createShippingSchema = (countryCode: string) => {
  const labels = getAddressLabels(countryCode)

  return z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(1, "Phone number is required"),
    address: z.string().min(1, `${labels.address} is required`),
    city: z.string().min(1, `${labels.city} is required`),
    state: labels.stateRequired ? z.string().min(1, `${labels.state} is required`) : z.string().optional(),
    postalCode: z.string().min(1, `${labels.postalCode} is required`),
    country: z.string().min(1, "Country is required"),
  })
}

type ShippingFormData = z.infer<ReturnType<typeof createShippingSchema>>

interface CheckoutFormProps {
  clientSecret: string
}

export default function CheckoutForm({ clientSecret }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const { items, getTotal, clearCart } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState("US")
  const [currency, setCurrency] = useState("USD")

  const country = getCountryByCode(selectedCountry)
  const addressLabels = getAddressLabels(selectedCountry)
  const statesForCountry = getStatesForCountry(selectedCountry)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ShippingFormData>({
    resolver: zodResolver(createShippingSchema(selectedCountry)),
    defaultValues: {
      country: selectedCountry,
    },
  })

  const subtotal = getTotal()
  const tax = selectedCountry === "US" ? subtotal * 0.08 : 0
  const total = subtotal + tax

  // Update currency when country changes
  useEffect(() => {
    if (country && stripeSupportedCurrencies.includes(country.currency)) {
      setCurrency(country.currency)
    } else {
      setCurrency("USD")
    }
  }, [country])

  // Reset form when country changes
  useEffect(() => {
    setValue("country", selectedCountry)
    setValue("state", "")
  }, [selectedCountry, setValue])

  useEffect(() => {
    if (!stripe) return
    if (!clientSecret) return

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!")
          toast.success("Payment successful!")
          clearCart()
          break
        case "processing":
          setMessage("Your payment is processing.")
          break
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.")
          break
        default:
          setMessage("Something went wrong.")
          break
      }
    })
  }, [stripe, clientSecret, clearCart])

  const onSubmit = async (data: ShippingFormData) => {
    if (!stripe || !elements) {
      toast.error("Payment system not ready. Please try again.")
      return
    }

    setIsProcessing(true)
    setMessage(null)

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation`,
          shipping: {
            name: `${data.firstName} ${data.lastName}`,
            phone: data.phone,
            address: {
              line1: data.address,
              city: data.city,
              state: data.state || undefined,
              postal_code: data.postalCode,
              country: data.country,
            },
          },
          receipt_email: data.email,
        },
        redirect: "if_required",
      })

      if (error) {
        console.error("Payment error:", error)
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message || "Payment failed")
          toast.error(error.message || "Payment failed")
        } else {
          setMessage("An unexpected error occurred.")
          toast.error("An unexpected error occurred")
        }
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        toast.success("Payment successful! Sending confirmation emails...")

        // Send order confirmation emails
        try {
          const orderEmailData = {
            customerEmail: data.email,
            customerName: `${data.firstName} ${data.lastName}`,
            orderNumber: `CZ-${Date.now().toString().slice(-6)}`,
            orderTotal: total,
            orderItems: items.map((item) => ({
              name: item.product.name,
              options: item.optionLabel || undefined,
              quantity: item.quantity,
              price: item.product.price,
              total: item.product.price * item.quantity,
            })),
            shippingAddress: {
              name: `${data.firstName} ${data.lastName}`,
              address: data.address,
              city: data.city,
              state: data.state || "",
              zipCode: data.postalCode,
              country: country?.name || data.country,
            },
            paymentIntentId: paymentIntent.id,
          }

          const emailResponse = await fetch("/api/send-order-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderEmailData),
          })

          if (emailResponse.ok) {
            toast.success("Order confirmation emails sent!")
          } else {
            toast.error("Order processed but email failed to send")
          }
        } catch (emailError) {
          console.error("Error sending confirmation email:", emailError)
          toast.error("Order processed but email failed to send")
        }

        clearCart()
        window.location.href = `/order-confirmation?payment_intent=${paymentIntent.id}&payment_intent_client_secret=${paymentIntent.client_secret}`
      }
    } catch (err) {
      console.error("Unexpected error:", err)
      setMessage("An unexpected error occurred.")
      toast.error("An unexpected error occurred")
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Shipping Information */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Truck className="mr-2 h-5 w-5" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Country Selection */}
              <div>
                <Label htmlFor="country" className="text-gray-300 flex items-center">
                  <Globe className="mr-1 h-4 w-4" />
                  Country *
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 max-h-60">
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code} className="text-white hover:bg-gray-600">
                        {country.name} ({country.currencySymbol})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.country && <p className="text-red-400 text-sm mt-1">{errors.country.message}</p>}
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">
                    First Name *
                  </Label>
                  <Input id="firstName" {...register("firstName")} className="bg-gray-700 border-gray-600 text-white" />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">
                    Last Name *
                  </Label>
                  <Input id="lastName" {...register("lastName")} className="bg-gray-700 border-gray-600 text-white" />
                  {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <Label htmlFor="email" className="text-gray-300 flex items-center">
                  <Mail className="mr-1 h-4 w-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="bg-gray-700 border-gray-600 text-white"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  Phone Number * {country && `(${country.phoneCode})`}
                </Label>
                <Input id="phone" {...register("phone")} className="bg-gray-700 border-gray-600 text-white" />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address" className="text-gray-300">
                  {addressLabels.address} *
                </Label>
                <Input id="address" {...register("address")} className="bg-gray-700 border-gray-600 text-white" />
                {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-gray-300">
                    {addressLabels.city} *
                  </Label>
                  <Input id="city" {...register("city")} className="bg-gray-700 border-gray-600 text-white" />
                  {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <Label htmlFor="postalCode" className="text-gray-300">
                    {addressLabels.postalCode} *
                  </Label>
                  <Input
                    id="postalCode"
                    {...register("postalCode")}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  {errors.postalCode && <p className="text-red-400 text-sm mt-1">{errors.postalCode.message}</p>}
                </div>
              </div>

              {/* State/Province */}
              {statesForCountry.length > 0 && (
                <div>
                  <Label htmlFor="state" className="text-gray-300">
                    {addressLabels.state} {addressLabels.stateRequired && "*"}
                  </Label>
                  <Select onValueChange={(value) => setValue("state", value)}>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder={`Select ${addressLabels.state.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-700 border-gray-600 max-h-60">
                      {statesForCountry.map((state) => (
                        <SelectItem key={state.code} value={state.code} className="text-white hover:bg-gray-600">
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state.message}</p>}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 p-3 bg-blue-900/20 border border-blue-700 rounded-lg">
                <div className="flex items-center text-blue-300 text-sm">
                  <Lock className="mr-2 h-4 w-4" />
                  Your payment information is secure and encrypted
                </div>
              </div>
              <PaymentElement
                options={{
                  layout: "tabs",
                  defaultValues: {
                    billingDetails: {
                      email: watch("email"),
                      name: `${watch("firstName")} ${watch("lastName")}`,
                      address: {
                        line1: watch("address"),
                        city: watch("city"),
                        state: watch("state"),
                        postal_code: watch("postalCode"),
                        country: selectedCountry,
                      },
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700 sticky top-4">
            <CardHeader>
              <CardTitle className="text-white">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                    <div className="relative w-16 h-16 bg-gray-600 rounded-lg overflow-hidden">
                      <Image
                        src={item.optionImage || item.product.image[0] || "/placeholder.svg?height=64&width=64"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=64&width=64"
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm truncate">{item.product.name}</h4>
                      {item.optionLabel && <p className="text-gray-400 text-xs mt-1">{item.optionLabel}</p>}
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-400 text-sm">Qty: {item.quantity}</span>
                        <span className="text-white font-medium">
                          {formatCurrency(item.product.price * item.quantity, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="bg-gray-600" />

              {/* Order Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal, currency)}</span>
                </div>
                {tax > 0 && (
                  <div className="flex justify-between text-gray-300">
                    <span>Tax</span>
                    <span>{formatCurrency(tax, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-green-400 font-medium">FREE</span>
                </div>
                <Separator className="bg-gray-600" />
                <div className="flex justify-between text-white text-lg font-bold">
                  <span>Total</span>
                  <span>{formatCurrency(total, currency)}</span>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-green-900/20 border border-green-700 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-green-300 text-sm">
                  <Truck className="mr-2 h-4 w-4" />
                  Free shipping on all orders
                </div>
                <div className="flex items-center text-green-300 text-sm">
                  <Lock className="mr-2 h-4 w-4" />
                  Secure payment processing
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isProcessing || !stripe || !elements}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg"
              >
                {isProcessing ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  `Complete Order - ${formatCurrency(total, currency)}`
                )}
              </Button>

              {message && (
                <div className="flex items-center p-3 bg-red-900/20 border border-red-700 rounded-lg">
                  <AlertCircle className="mr-2 h-4 w-4 text-red-400" />
                  <p className="text-red-400 text-sm">{message}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  )
}
