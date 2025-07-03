import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle, Leaf } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-nature-600 text-white">
            <FileText className="h-4 w-4 mr-2" />
            Terms of Service
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nature-800 font-serif">Terms of Service</h1>
          <p className="text-xl text-nature-600 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website or purchasing our natural products.
          </p>
          <p className="text-nature-500 mt-4">Last updated: December 2024</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Agreement */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <FileText className="mr-2 h-5 w-5" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>
                By accessing and using the NatureRiches website (natureriches.com), you accept and agree to be bound by
                the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use
                this service.
              </p>
              <div className="bg-gradient-to-r from-terracotta-50 to-nature-50 border border-terracotta-200 rounded-lg p-4">
                <h4 className="font-semibold text-terracotta-800 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Important:
                </h4>
                <p className="text-terracotta-700 text-sm">
                  These terms constitute a legally binding agreement between you and NatureRiches. Please read them
                  carefully and contact us if you have any questions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Scale className="mr-2 h-5 w-5" />
                Use License
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-nature-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Permitted Use</h3>
                <p className="mb-2">
                  Permission is granted to temporarily download one copy of NatureRiches materials for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>Personal, non-commercial transitory viewing only</li>
                  <li>Placing orders for natural products</li>
                  <li>Accessing customer support and wellness guidance</li>
                  <li>Reviewing product information and ingredients</li>
                  <li>Reading educational content about natural living</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Prohibited Activities</h3>
                <p className="mb-2">This license shall NOT allow you to:</p>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer materials to another person</li>
                  <li>Resell or redistribute our products without authorization</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Products and Orders */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Products and Orders</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-nature-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Product Information</h3>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>We strive to display product colors and images as accurately as possible</li>
                  <li>Actual colors may vary due to monitor settings and natural variations</li>
                  <li>Product specifications are subject to change without notice</li>
                  <li>We reserve the right to limit quantities</li>
                  <li>All natural products are subject to seasonal availability</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Pricing and Payment</h3>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Payment is due at time of order</li>
                  <li>We accept major credit cards and PayPal</li>
                  <li>Subscription pricing may vary based on commitment length</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Order Acceptance</h3>
                <p className="text-nature-600">
                  We reserve the right to refuse or cancel any order for any reason, including but not limited to
                  product availability, errors in product or pricing information, or problems identified by our fraud
                  detection systems.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping and Returns */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Shipping and Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Shipping Terms</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Shipping times are estimates only</li>
                    <li>• Risk of loss passes to buyer upon delivery</li>
                    <li>• International orders may incur customs fees</li>
                    <li>• We are not responsible for shipping delays</li>
                    <li>• Special handling for temperature-sensitive products</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Return Policy</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• 30-day return window from delivery</li>
                    <li>• Items must be in original condition</li>
                    <li>• Free return shipping provided</li>
                    <li>• Refunds processed within 5-7 business days</li>
                    <li>• Some products may have specific return restrictions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warranties and Disclaimers */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Shield className="mr-2 h-5 w-5" />
                Warranties and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-nature-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Product Warranties</h3>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>Products come with manufacturer warranties as specified</li>
                  <li>Warranty terms vary by product and manufacturer</li>
                  <li>We facilitate warranty claims but are not the warranty provider</li>
                  <li>Warranty does not cover misuse or normal wear and tear</li>
                  <li>Natural products may have variations that are not defects</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Health and Wellness Disclaimer</h3>
                <div className="bg-gradient-to-r from-sage-50 to-nature-50 border border-sage-200 rounded-lg p-4">
                  <p className="text-sage-700 text-sm">
                    Our natural products are not intended to diagnose, treat, cure, or prevent any disease. Always
                    consult with a healthcare professional before using any new wellness products, especially if you
                    have medical conditions or are taking medications.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">General Disclaimer</h3>
                <div className="bg-gradient-to-r from-terracotta-50 to-nature-50 border border-terracotta-200 rounded-lg p-4">
                  <p className="text-terracotta-700 text-sm">
                    The materials on NatureRiches' website are provided on an 'as is' basis. NatureRiches makes no
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular
                    purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>
                In no event shall NatureRiches or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on NatureRiches' website, even if NatureRiches or an authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
              <div className="bg-gradient-to-r from-terracotta-50 to-nature-50 border border-terracotta-200 rounded-lg p-4">
                <h4 className="font-semibold text-terracotta-800 mb-2">Maximum Liability</h4>
                <p className="text-terracotta-700 text-sm">
                  Our total liability to you for any claim arising from or relating to these terms or your use of our
                  services shall not exceed the amount you paid for the specific product or service that gave rise to
                  the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>You agree not to use our website or services to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Prohibited Activities</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe on intellectual property rights</li>
                    <li>• Transmit harmful or malicious code</li>
                    <li>• Attempt unauthorized access to our systems</li>
                    <li>• Post false or misleading product reviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Account Responsibilities</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Provide accurate account information</li>
                    <li>• Maintain security of your account</li>
                    <li>• Notify us of unauthorized use</li>
                    <li>• Accept responsibility for account activity</li>
                    <li>• Use products as intended and directed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Applicable Law</h3>
                <p className="text-nature-600">
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  States and the State of California, and you irrevocably submit to the exclusive jurisdiction of the
                  courts in that state or location.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Dispute Resolution</h3>
                <p className="text-nature-600">
                  Any disputes arising from these terms or your use of our services will be resolved through binding
                  arbitration, except for claims that may be brought in small claims court. We encourage customers to
                  contact us first to resolve any issues amicably.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-nature-600 leading-relaxed">
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <div className="space-y-2 text-nature-600">
                <p>
                  <strong>Email:</strong> legal@natureriches.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-NATURE (628-873)
                </p>
                <p>
                  <strong>Mail:</strong>
                </p>
                <p className="ml-4">
                  NatureRiches Legal Department
                  <br />
                  123 Nature Way
                  <br />
                  Green Valley, CA 90210
                  <br />
                  United States
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <div className="bg-gradient-to-r from-nature-600 to-sage-600 rounded-2xl p-6 text-white">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              Changes to Terms
            </h3>
            <p className="text-nature-100 text-sm leading-relaxed">
              We reserve the right to update these Terms of Service at any time to reflect changes in our practices,
              services, or legal requirements. Changes will be effective immediately upon posting on this page. Your
              continued use of our website and services after any changes constitutes acceptance of the new terms. We
              encourage you to review these terms periodically.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
