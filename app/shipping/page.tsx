import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Package, Globe, Clock, Shield, CheckCircle, Leaf } from "lucide-react"
import Link from "next/link"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-nature-600 text-white">
            <Truck className="h-4 w-4 mr-2" />
            Shipping Information
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nature-800 font-serif">Shipping & Delivery</h1>
          <p className="text-xl text-nature-600 max-w-2xl mx-auto leading-relaxed">
            Fast, reliable, and eco-friendly shipping worldwide. Get your natural products delivered sustainably to your
            door.
          </p>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-6 mb-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-2 font-serif flex items-center justify-center">
            <Truck className="h-6 w-6 mr-2" />
            FREE Worldwide Shipping
          </h2>
          <p className="text-nature-100">On all orders over $75 • Carbon-neutral packaging included</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Shipping Options */}
          <div className="space-y-8">
            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Truck className="mr-2 h-5 w-5" />
                  Shipping Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-b border-nature-100 pb-4">
                  <h3 className="font-semibold text-nature-800 mb-2">Standard Shipping - FREE</h3>
                  <div className="text-nature-600 space-y-1">
                    <p>• Delivery: 5-7 business days</p>
                    <p>• Cost: FREE on orders over $75</p>
                    <p>• Tracking included</p>
                    <p>• Available worldwide</p>
                    <p>• Carbon-neutral packaging</p>
                  </div>
                </div>

                <div className="border-b border-nature-100 pb-4">
                  <h3 className="font-semibold text-nature-800 mb-2">Express Shipping</h3>
                  <div className="text-nature-600 space-y-1">
                    <p>• Delivery: 2-3 business days</p>
                    <p>• Cost: $15.99</p>
                    <p>• Priority handling</p>
                    <p>• Signature confirmation</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-nature-800 mb-2">Overnight Shipping</h3>
                  <div className="text-nature-600 space-y-1">
                    <p>• Delivery: Next business day</p>
                    <p>• Cost: $29.99</p>
                    <p>• Available in select areas</p>
                    <p>• Guaranteed delivery</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-nature-50 to-sage-50 border-nature-100">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Globe className="mr-2 h-5 w-5" />
                  International Shipping
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">North America</h4>
                    <ul className="text-nature-600 space-y-1">
                      <li>• USA: 3-5 days</li>
                      <li>• Canada: 5-7 days</li>
                      <li>• Mexico: 7-10 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">Europe</h4>
                    <ul className="text-nature-600 space-y-1">
                      <li>• UK: 5-7 days</li>
                      <li>• EU: 7-10 days</li>
                      <li>• Other: 10-14 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">Asia Pacific</h4>
                    <ul className="text-nature-600 space-y-1">
                      <li>• Australia: 7-10 days</li>
                      <li>• Japan: 5-8 days</li>
                      <li>• Other: 10-15 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">Other Regions</h4>
                    <ul className="text-nature-600 space-y-1">
                      <li>• South America: 10-15 days</li>
                      <li>• Africa: 12-18 days</li>
                      <li>• Middle East: 8-12 days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Processing & Tracking */}
          <div className="space-y-8">
            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Package className="mr-2 h-5 w-5" />
                  Order Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800">Order Confirmation</h4>
                    <p className="text-nature-600 text-sm">Immediate email confirmation after purchase</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-sage-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800">Processing Time</h4>
                    <p className="text-nature-600 text-sm">1-2 business days for careful preparation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="h-5 w-5 text-terracotta-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800">Shipping Notification</h4>
                    <p className="text-nature-600 text-sm">Tracking number sent via email when shipped</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-nature-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800">Delivery</h4>
                    <p className="text-nature-600 text-sm">Eco-friendly packaging with care instructions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Shield className="mr-2 h-5 w-5" />
                  Shipping Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Real-time tracking updates</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Insurance on all shipments</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Temperature-controlled for sensitive products</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Damage protection guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-sage-600 to-nature-600 rounded-2xl p-6 text-white">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Eco-Friendly Packaging
              </h3>
              <div className="space-y-2 text-nature-100 text-sm">
                <p>• 100% recyclable and biodegradable materials</p>
                <p>• Minimal packaging to reduce waste</p>
                <p>• Carbon-neutral shipping options</p>
                <p>• Reusable containers when possible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white border-nature-100">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Important Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-nature-600">
              <p>• Orders placed after 2PM PST ship the next business day</p>
              <p>• Weekend orders are processed on Monday</p>
              <p>• Holiday shipping may experience delays</p>
              <p>• PO Box delivery available for most items</p>
              <p>• Signature required for orders over $200</p>
              <p>• Special handling for temperature-sensitive products</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-nature-100">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Customs & Duties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-nature-600">
              <p>• International customers may be subject to customs fees</p>
              <p>• Duties and taxes are buyer's responsibility</p>
              <p>• We declare accurate values on customs forms</p>
              <p>• Some countries may restrict certain natural products</p>
              <p>• Contact us for specific country requirements</p>
              <p>• All products comply with international shipping regulations</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4 font-serif">Questions About Shipping?</h2>
          <p className="text-nature-100 mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help with any shipping questions, tracking issues, or special delivery
            requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-nature-700 hover:bg-nature-50 font-semibold">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-nature-700 bg-transparent font-semibold"
            >
              <Link href="mailto:shipping@natureriches.com">Email Shipping Team</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
