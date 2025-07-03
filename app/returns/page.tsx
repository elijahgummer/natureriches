import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RotateCcw, Shield, CheckCircle, Package, Heart, Leaf } from "lucide-react"
import Link from "next/link"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-nature-600 text-white">
            <RotateCcw className="h-4 w-4 mr-2" />
            Returns & Exchanges
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nature-800 font-serif">Returns & Exchanges</h1>
          <p className="text-xl text-nature-600 max-w-2xl mx-auto leading-relaxed">
            We want you to love your natural products! Our hassle-free return and exchange policy ensures your complete
            satisfaction.
          </p>
        </div>

        {/* Return Policy Banner */}
        <div className="bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-6 mb-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-2 font-serif flex items-center justify-center">
            <Heart className="h-6 w-6 mr-2" />
            30-Day Satisfaction Guarantee
          </h2>
          <p className="text-nature-100">Love it or return it - we stand behind the quality of our natural products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Return Policy */}
          <div className="space-y-8">
            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Return Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-nature-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">30-Day Return Window</h4>
                      <p className="text-nature-600 text-sm">
                        Return any product within 30 days of delivery for a full refund or exchange.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-sage-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Original Condition</h4>
                      <p className="text-nature-600 text-sm">
                        Products must be unused and in original packaging with all labels intact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-terracotta-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Free Return Shipping</h4>
                      <p className="text-nature-600 text-sm">
                        We provide prepaid return labels for all returns and exchanges.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-nature-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Fast Processing</h4>
                      <p className="text-nature-600 text-sm">
                        Refunds processed within 3-5 business days after we receive your return.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-nature-50 to-sage-50 border-nature-100">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Package className="mr-2 h-5 w-5" />
                  How to Return
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-nature-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Contact Us</h4>
                      <p className="text-nature-600 text-sm">
                        Email hello@natureriches.com or use our contact form to start your return.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-sage-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Get Return Label</h4>
                      <p className="text-nature-600 text-sm">We'll email you a prepaid return label within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-terracotta-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Pack & Ship</h4>
                      <p className="text-nature-600 text-sm">
                        Pack the item in original packaging and attach the return label.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-nature-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-nature-800">Receive Your Refund</h4>
                      <p className="text-nature-600 text-sm">
                        We'll process your refund as soon as we receive your return.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Return Information */}
          <div className="space-y-8">
            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 flex items-center font-serif">
                  <Shield className="mr-2 h-5 w-5" />
                  Return Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">What Can Be Returned</h4>
                    <ul className="text-nature-600 space-y-1 text-sm">
                      <li>• All natural products in original condition</li>
                      <li>• Unopened skincare and wellness products</li>
                      <li>• Essential oils with intact seals</li>
                      <li>• Home products and accessories</li>
                      <li>• Gift sets and bundles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">What Can't Be Returned</h4>
                    <ul className="text-nature-600 space-y-1 text-sm">
                      <li>• Opened personal care items (for hygiene reasons)</li>
                      <li>• Custom or personalized products</li>
                      <li>• Products damaged by misuse</li>
                      <li>• Items without original packaging</li>
                      <li>• Digital downloads or e-books</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-2">Quality Guarantee</h4>
                    <div className="bg-gradient-to-r from-nature-100 to-sage-100 border border-nature-200 rounded-lg p-3">
                      <p className="text-nature-700 text-sm">
                        Every product is carefully inspected before shipping. If you receive a damaged or defective
                        item, we'll replace it immediately at no cost to you.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 font-serif">Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Free exchanges for different sizes or scents</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Upgrade to premium products (pay difference)</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">Same-day processing for exchanges</span>
                  </div>
                  <div className="flex items-center text-nature-600">
                    <CheckCircle className="h-4 w-4 mr-2 text-nature-600" />
                    <span className="text-sm">No restocking fees</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-sage-600 to-nature-600 rounded-2xl p-6 text-white">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <Leaf className="h-5 w-5 mr-2" />
                Sustainability Note
              </h3>
              <div className="space-y-2 text-nature-100 text-sm">
                <p>• We refurbish returned items when possible</p>
                <p>• Packaging materials are recycled or reused</p>
                <p>• Unopened products may be donated to wellness programs</p>
                <p>• We're committed to minimizing waste in our return process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4 font-serif">Need Help With a Return?</h2>
          <p className="text-nature-100 mb-6 max-w-2xl mx-auto">
            Our customer happiness team is here to make your return or exchange process as smooth as possible. We're
            committed to your satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-nature-700 hover:bg-nature-50 font-semibold">
              <Link href="/contact">Start a Return</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-nature-700 bg-transparent font-semibold"
            >
              <Link href="mailto:returns@natureriches.com">Email Returns Team</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
