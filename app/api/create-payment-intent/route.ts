import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, currency = "usd" } = body

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items" }, { status: 400 })
    }

    // Calculate total amount
    const amount = items.reduce((total: number, item: any) => {
      return total + item.price * item.quantity * 100 // Convert to cents
    }, 0)

    // Add tax for US orders (8%)
    const taxAmount = currency === "usd" ? Math.round(amount * 0.08) : 0
    const totalAmount = amount + taxAmount

    if (totalAmount < 50) {
      // Minimum 50 cents for Stripe
      return NextResponse.json({ error: "Order total too low" }, { status: 400 })
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: currency.toLowerCase(),
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        items: JSON.stringify(
          items.map((item: any) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            options: item.options ? JSON.stringify(item.options) : undefined,
          })),
        ),
        subtotal: (amount / 100).toString(),
        tax: (taxAmount / 100).toString(),
        total: (totalAmount / 100).toString(),
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ error: `Stripe error: ${error.message}` }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
