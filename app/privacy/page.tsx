import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, Leaf, Heart } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-nature-50 via-white to-sage-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-nature-600 text-white">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-nature-800 font-serif">Privacy Policy</h1>
          <p className="text-xl text-nature-600 max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information with
            the same care we put into our natural products.
          </p>
          <p className="text-nature-500 mt-4">Last updated: December 2024</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Shield className="mr-2 h-5 w-5" />
                Privacy Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>
                At NatureRiches, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or make a purchase.
              </p>
              <div className="bg-gradient-to-r from-nature-50 to-sage-50 border border-nature-200 rounded-lg p-4">
                <h4 className="font-semibold text-nature-800 mb-2 flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Key Commitments:
                </h4>
                <ul className="text-nature-700 text-sm space-y-1">
                  <li>• We only collect information necessary to provide our services</li>
                  <li>• We never sell your personal information to third parties</li>
                  <li>• We use industry-standard security measures</li>
                  <li>• You have complete control over your data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Database className="mr-2 h-5 w-5" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-nature-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Personal Information</h3>
                <p className="mb-2">When you make a purchase or create an account, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely by Stripe)</li>
                  <li>Order history and product preferences</li>
                  <li>Wellness goals and product interests (optional)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 text-nature-600">
                  <li>IP address and browser information</li>
                  <li>Device type and operating system</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Referring website information</li>
                  <li>Shopping behavior and preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-nature-800 mb-3">Cookies and Tracking</h3>
                <p className="text-nature-600">
                  We use cookies to improve your browsing experience, remember your preferences, and analyze site
                  traffic. You can control cookie settings in your browser preferences.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Eye className="mr-2 h-5 w-5" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Order Processing</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Process and fulfill your orders</li>
                    <li>• Send order confirmations and updates</li>
                    <li>• Handle returns and exchanges</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Communication</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Send important account information</li>
                    <li>• Respond to your inquiries</li>
                    <li>• Send wellness tips and product updates</li>
                    <li>• Notify about new natural products</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Website Improvement</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Analyze site usage and performance</li>
                    <li>• Improve user experience</li>
                    <li>• Develop new features</li>
                    <li>• Prevent fraud and abuse</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Legal Compliance</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Comply with legal obligations</li>
                    <li>• Protect our rights and property</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Respond to legal requests</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 flex items-center font-serif">
                <Lock className="mr-2 h-5 w-5" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Technical Safeguards</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure payment processing via Stripe</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Encrypted data storage</li>
                    <li>• Firewall protection and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Access Controls</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Limited employee access to data</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Regular access reviews</li>
                    <li>• Secure development practices</li>
                    <li>• Data minimization principles</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>You have the following rights regarding your personal information:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Access & Control</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Access your personal data</li>
                    <li>• Update or correct information</li>
                    <li>• Delete your account</li>
                    <li>• Export your data</li>
                    <li>• Restrict data processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Communication Preferences</h4>
                  <ul className="text-nature-600 text-sm space-y-1">
                    <li>• Opt out of marketing emails</li>
                    <li>• Manage cookie preferences</li>
                    <li>• Control data sharing</li>
                    <li>• Request data portability</li>
                    <li>• Withdraw consent</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-r from-nature-100 to-sage-100 border border-nature-200 rounded-lg p-4">
                <p className="text-nature-700 text-sm">
                  To exercise any of these rights, please contact us at privacy@natureriches.com. We will respond to
                  your request within 30 days and guide you through the process.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-nature-600 leading-relaxed">
              <p>We work with trusted third-party services to provide our services:</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Payment Processing</h4>
                  <p className="text-nature-600 text-sm">
                    Stripe processes all payments securely. We do not store your payment card information on our
                    servers. All payment data is encrypted and handled according to PCI DSS standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Email Services</h4>
                  <p className="text-nature-600 text-sm">
                    Resend handles our email communications. Your email address is used only for order confirmations,
                    customer service, and optional wellness newsletters.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Analytics</h4>
                  <p className="text-nature-600 text-sm">
                    We use analytics tools to understand how our website is used. This data is anonymized and aggregated
                    to protect your privacy while helping us improve our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-nature-800 mb-2">Shipping Partners</h4>
                  <p className="text-nature-600 text-sm">
                    We share necessary shipping information with our logistics partners to deliver your natural products
                    safely and efficiently.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white border-nature-100 shadow-lg">
            <CardHeader>
              <CardTitle className="text-nature-800 font-serif">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-nature-600 leading-relaxed">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-nature-600">
                <p>
                  <strong>Email:</strong> privacy@natureriches.com
                </p>
                <p>
                  <strong>Phone:</strong> 1-800-NATURE (628-873)
                </p>
                <p>
                  <strong>Mail:</strong>
                </p>
                <p className="ml-4">
                  NatureRiches Privacy Team
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

          {/* Updates */}
          <div className="bg-gradient-to-r from-sage-600 to-nature-600 rounded-2xl p-6 text-white">
            <h3 className="text-white font-semibold mb-3 flex items-center">
              <Leaf className="h-5 w-5 mr-2" />
              Policy Updates
            </h3>
            <p className="text-nature-100 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. We will notify you of any material changes by posting the new policy on this page and
              updating the "Last updated" date. Your continued use of our services after any changes constitutes
              acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
