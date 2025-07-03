"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, MessageSquare, Leaf, Heart, Clock } from "lucide-react"
import toast from "react-hot-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent successfully! We'll get back to you within 24 hours.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }

    setLoading(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-nature-600 text-white">
            <MessageSquare className="h-4 w-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-nature-800 font-serif">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-nature-600 max-w-2xl mx-auto leading-relaxed px-4">
            Have a question about our natural products or need wellness guidance? We're here to help! Get in touch with
            our friendly team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif text-lg sm:text-xl">
                <Send className="mr-2 h-5 w-5" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-nature-700 mb-2 font-medium text-sm sm:text-base">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-nature-200 focus:border-nature-500 focus:ring-nature-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-nature-700 mb-2 font-medium text-sm sm:text-base">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-nature-200 focus:border-nature-500 focus:ring-nature-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-nature-700 mb-2 font-medium text-sm sm:text-base">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="border-nature-200 focus:border-nature-500 focus:ring-nature-500"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-nature-700 mb-2 font-medium text-sm sm:text-base">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="border-nature-200 focus:border-nature-500 focus:ring-nature-500 min-h-[120px]"
                    placeholder="Tell us more about your question or how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-nature-600 hover:bg-nature-700 text-white font-semibold py-3"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-white border-nature-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-nature-800 font-serif text-lg sm:text-xl">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-800 mb-1 text-sm sm:text-base">Email Support</h3>
                    <p className="text-nature-600 text-sm sm:text-base">hello@natureriches.com</p>
                    <p className="text-nature-500 text-xs sm:text-sm">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-nature-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-nature-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-nature-800 mb-1 text-sm sm:text-base">Response Time</h3>
                    <div className="text-nature-600 text-xs sm:text-sm space-y-1">
                      <p>Email: Within 24 hours</p>
                      <p>Order Issues: Priority response within 4 hours</p>
                      <p>Wellness Questions: Expert guidance within 24 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="bg-gradient-to-br from-nature-50 to-sage-50 border-nature-100">
              <CardHeader>
                <CardTitle className="text-nature-800 font-serif text-lg sm:text-xl">Quick Help</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-nature-800 mb-3 text-sm sm:text-base">Common Questions:</h4>
                    <ul className="space-y-2 text-nature-600">
                      <li>
                        <Link
                          href="/shipping"
                          className="hover:text-nature-800 transition-colors flex items-center text-xs sm:text-sm"
                        >
                          <Leaf className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Shipping & Delivery Information
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/returns"
                          className="hover:text-nature-800 transition-colors flex items-center text-xs sm:text-sm"
                        >
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Returns & Exchanges Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/products"
                          className="hover:text-nature-800 transition-colors flex items-center text-xs sm:text-sm"
                        >
                          <Leaf className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          Product Information & Usage
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className="hover:text-nature-800 transition-colors flex items-center text-xs sm:text-sm"
                        >
                          <Heart className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                          About Our Natural Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-4 sm:p-6 text-white">
              <h3 className="text-white font-semibold mb-3 flex items-center text-sm sm:text-base">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Why Choose NatureRiches Support?
              </h3>
              <div className="space-y-2 text-nature-100 text-xs sm:text-sm">
                <p>• Expert wellness guidance from certified professionals</p>
                <p>• Personalized product recommendations</p>
                <p>• Sustainable living tips and advice</p>
                <p>• Priority support for all customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
