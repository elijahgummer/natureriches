import { type NextRequest, NextResponse } from "next/server"
import { sendOrderConfirmationEmail, type OrderEmailData } from "@/lib/email"

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderEmailData = await request.json()

    console.log("📧 Received order email request:", {
      customerEmail: orderData.customerEmail,
      orderNumber: orderData.orderNumber,
      orderTotal: orderData.orderTotal,
    })

    // Validate required fields
    if (!orderData.customerEmail || !orderData.customerName || !orderData.orderNumber) {
      return NextResponse.json({ error: "Missing required order data" }, { status: 400 })
    }

    // Send the emails
    const result = await sendOrderConfirmationEmail(orderData)

    if (result.success) {
      console.log("✅ Order emails sent successfully")
      return NextResponse.json({
        success: true,
        message: "Order confirmation emails sent successfully",
        customerEmail: result.customerEmail,
        ownerEmail: result.ownerEmail,
      })
    } else {
      console.error("❌ Failed to send order emails:", result.error)
      return NextResponse.json({ error: "Failed to send order emails", details: result.error }, { status: 500 })
    }
  } catch (error) {
    console.error("❌ Error in send-order-email API:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
