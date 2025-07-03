import { Suspense } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { getFeaturedProducts } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Leaf, Heart, Shield, Truck, Star, ArrowRight, CheckCircle, Users, Award, Sparkles } from "lucide-react"

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 shadow-sm animate-pulse">
          <div className="h-48 bg-nature-100 rounded-xl mb-4"></div>
          <div className="h-4 bg-nature-100 rounded mb-2"></div>
          <div className="h-4 bg-nature-100 rounded w-3/4 mb-4"></div>
          <div className="h-6 bg-nature-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

async function FeaturedProducts() {
  const products = await getFeaturedProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <div key={product.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nature-600 via-nature-500 to-sage-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Sparkles className="h-4 w-4 mr-2" />
              New Natural Collection Available
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-serif leading-tight">
              Embrace Nature's
              <span className="block text-sage-200">Pure Essence</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-nature-100 max-w-2xl mx-auto leading-relaxed px-4">
              Discover our carefully curated collection of premium natural products that nurture your body, mind, and
              home with the power of nature.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-nature-700 hover:bg-nature-50 text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold backdrop-blur-sm bg-transparent"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 sm:mt-12 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-nature-100 px-4">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Truck className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Ethically Sourced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nature-800 mb-4 font-serif">
              Why Choose NatureRiches?
            </h2>
            <p className="text-base sm:text-lg text-nature-600 max-w-2xl mx-auto px-4">
              We're committed to bringing you the finest natural products that support your wellness journey and
              sustainable lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description:
                  "All our products are made with pure, natural ingredients sourced responsibly from nature.",
              },
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Rigorous testing and quality control ensure every product meets our high standards.",
              },
              {
                icon: Heart,
                title: "Ethically Sourced",
                description: "We partner with suppliers who share our commitment to ethical and sustainable practices.",
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized for excellence in natural products and sustainable business practices.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-nature-50 to-sage-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-nature-600 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-nature-800 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-nature-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-sage-50 to-nature-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-nature-600 text-white">
              <Star className="h-4 w-4 mr-2" />
              Customer Favorites
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nature-800 mb-4 font-serif">
              Featured Products
            </h2>
            <p className="text-base sm:text-lg text-nature-600 max-w-2xl mx-auto px-4">
              Discover our most popular natural products, loved by thousands of customers worldwide.
            </p>
          </div>

          <Suspense fallback={<LoadingSkeleton />}>
            <FeaturedProducts />
          </Suspense>

          <div className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-nature-600 hover:bg-nature-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nature-800 mb-4 font-serif">
              Trusted by Nature Lovers
            </h2>
            <p className="text-base sm:text-lg text-nature-600 px-4">
              Join thousands of satisfied customers who have made the switch to natural living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                stat: "50,000+",
                label: "Happy Customers",
                icon: Users,
              },
              {
                stat: "4.9/5",
                label: "Average Rating",
                icon: Star,
              },
              {
                stat: "100%",
                label: "Natural Products",
                icon: Leaf,
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-nature-500 to-sage-600 rounded-full flex items-center justify-center">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-nature-800 mb-2">{item.stat}</div>
                <div className="text-sm sm:text-base text-nature-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-nature-600 to-sage-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Start Your Natural Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-nature-100 max-w-2xl mx-auto px-4">
            Join our community and discover the transformative power of natural living. Your wellness journey starts
            here.
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white text-nature-700 hover:bg-nature-50 text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/products">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
