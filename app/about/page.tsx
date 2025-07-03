import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Truck, Users, Star, CheckCircle, Leaf, Heart, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-nature-600 text-white">
            <Heart className="h-4 w-4 mr-2" />
            Our Story
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-nature-800 font-serif">
            About NatureRiches
          </h1>
          <p className="text-lg sm:text-xl text-nature-600 max-w-3xl mx-auto leading-relaxed px-4">
            Your trusted partner for premium natural and organic products. We're passionate about helping people embrace
            a healthier, more sustainable lifestyle with nature's finest offerings.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-nature-100">
            <div className="text-2xl sm:text-3xl font-bold text-nature-600 mb-2">50,000+</div>
            <div className="text-nature-700 font-medium text-xs sm:text-sm">Happy Customers</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-nature-100">
            <div className="text-2xl sm:text-3xl font-bold text-sage-600 mb-2">4.9★</div>
            <div className="text-nature-700 font-medium text-xs sm:text-sm">Average Rating</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-nature-100">
            <div className="text-2xl sm:text-3xl font-bold text-terracotta-600 mb-2">100%</div>
            <div className="text-nature-700 font-medium text-xs sm:text-sm">Natural Products</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-nature-100">
            <div className="text-2xl sm:text-3xl font-bold text-nature-600 mb-2">50+</div>
            <div className="text-nature-700 font-medium text-xs sm:text-sm">Countries Served</div>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-nature-800 mb-4 sm:mb-6 font-serif">Our Story</h2>
            <div className="space-y-4 text-nature-600 leading-relaxed text-sm sm:text-base">
              <p>
                Founded in 2020, NatureRiches began with a simple mission: to provide people with access to premium
                natural and organic products that enhance both wellness and environmental sustainability.
              </p>
              <p>
                What started as a small operation has grown into a trusted global brand, serving customers in over 50
                countries. We carefully curate every product in our catalog, ensuring that each item meets our high
                standards for quality, purity, and environmental responsibility.
              </p>
              <p>
                Today, we're proud to be the go-to destination for natural products, from essential oils and skincare to
                sustainable home essentials and wellness supplements.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-nature-50 to-sage-50 rounded-2xl p-6 sm:p-8 border border-nature-100">
            <h3 className="text-xl sm:text-2xl font-bold text-nature-800 mb-4 sm:mb-6 font-serif">
              Why Choose NatureRiches?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-nature-800 text-sm sm:text-base">Premium Quality</h4>
                  <p className="text-nature-600 text-xs sm:text-sm">
                    Every product is tested and verified for purity and quality
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-nature-800 text-sm sm:text-base">Sustainable Sourcing</h4>
                  <p className="text-nature-600 text-xs sm:text-sm">
                    Ethically sourced ingredients that support communities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-nature-800 text-sm sm:text-base">Expert Support</h4>
                  <p className="text-nature-600 text-xs sm:text-sm">Dedicated customer service and wellness guidance</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-nature-800 text-sm sm:text-base">Satisfaction Guarantee</h4>
                  <p className="text-nature-600 text-xs sm:text-sm">30-day money-back guarantee on all products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-nature-800 mb-8 sm:mb-12 font-serif">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-white border-nature-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-nature-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-3 font-serif">Purity First</h3>
                <p className="text-nature-600 leading-relaxed text-sm sm:text-base">
                  We never compromise on purity. Every product is carefully selected and tested to meet our high
                  standards for natural excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-nature-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-3 font-serif">Sustainability</h3>
                <p className="text-nature-600 leading-relaxed text-sm sm:text-base">
                  Our commitment to the environment drives everything we do. We support sustainable practices and
                  eco-friendly packaging.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-nature-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-terracotta-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-3 font-serif">Community Care</h3>
                <p className="text-nature-600 leading-relaxed text-sm sm:text-base">
                  We believe in giving back to the communities that provide our ingredients and supporting local farmers
                  and artisans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-nature-800 mb-4 sm:mb-6 font-serif">Meet Our Team</h2>
          <p className="text-nature-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4">
            Our passionate team of wellness experts, sustainability advocates, and customer service professionals work
            tirelessly to bring you the best natural products and experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-nature-100 to-sage-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-nature-200">
                <Users className="h-12 w-12 sm:h-16 sm:w-16 text-nature-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-2">Product Curation Team</h3>
              <p className="text-nature-600 text-sm sm:text-base">Sourcing and testing the finest natural products</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-sage-100 to-nature-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-sage-200">
                <Truck className="h-12 w-12 sm:h-16 sm:w-16 text-sage-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-2">Fulfillment Team</h3>
              <p className="text-nature-600 text-sm sm:text-base">Ensuring fast, sustainable delivery worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-terracotta-100 to-nature-100 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-terracotta-200">
                <Star className="h-12 w-12 sm:h-16 sm:w-16 text-terracotta-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-2">Customer Care Team</h3>
              <p className="text-nature-600 text-sm sm:text-base">
                Providing exceptional support and wellness guidance
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 font-serif">Have Questions About Our Products?</h2>
          <p className="text-nature-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            We'd love to hear from you. Get in touch with our team for product recommendations, wellness advice, or any
            questions about natural living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-nature-700 hover:bg-nature-50 font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-nature-700 bg-transparent font-semibold"
            >
              <Link href="mailto:hello@natureriches.com">Email Us</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
