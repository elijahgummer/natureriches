import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NatureRiches - Premium Natural & Organic Products",
  description:
    "Discover premium natural and organic products for a healthier lifestyle. From essential oils to sustainable kitchen essentials, we bring nature's best to your home.",
  keywords:
    "natural products, organic, essential oils, sustainable living, eco-friendly, wellness, aromatherapy, natural skincare, organic food",
  authors: [{ name: "NatureRiches" }],
  openGraph: {
    title: "NatureRiches - Premium Natural & Organic Products",
    description:
      "Discover premium natural and organic products for a healthier lifestyle. From essential oils to sustainable kitchen essentials.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NatureRiches - Premium Natural & Organic Products",
    description:
      "Discover premium natural and organic products for a healthier lifestyle. From essential oils to sustainable kitchen essentials.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1c1917",
              color: "#ffffff",
              border: "1px solid #22c55e",
            },
          }}
        />
      </body>
    </html>
  )
}
