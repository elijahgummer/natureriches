import { Resend } from "resend"

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set")
}

const resend = new Resend(process.env.RESEND_API_KEY)

export interface OrderDetails {
  orderId: string
  customerEmail: string
  customerName: string
  items: Array<{
    name: string
    quantity: number
    price: number
    options?: string
  }>
  subtotal: number
  tax: number
  total: number
  shippingAddress?: {
    name: string
    line1: string
    city: string
    state: string
    postal_code: string
    country: string
  }
}

export async function sendCustomerOrderConfirmation(orderDetails: OrderDetails) {
  const { orderId, customerEmail, customerName, items, subtotal, tax, total, shippingAddress } = orderDetails

  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - NatureRiches</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8fdf8; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 30px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .content { padding: 30px 20px; }
        .order-summary { background-color: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .item { border-bottom: 1px solid #e5e7eb; padding: 15px 0; }
        .item:last-child { border-bottom: none; }
        .total-row { font-weight: bold; font-size: 18px; color: #22c55e; }
        .shipping-info { background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background-color: #1c1917; color: #a8a29e; padding: 20px; text-align: center; font-size: 14px; }
        .button { display: inline-block; background-color: #22c55e; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold; margin: 10px 0; }
        .highlight { color: #22c55e; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🌿 NatureRiches</div>
          <h1>Order Confirmation</h1>
          <p>Thank you for choosing natural & organic products!</p>
        </div>
        
        <div class="content">
          <h2>Hi ${customerName}! 🌱</h2>
          <p>We're excited to confirm your order! Your natural products are being carefully prepared and will be shipped with eco-friendly packaging.</p>
          
          <div class="order-summary">
            <h3>📦 Order Details</h3>
            <p><strong>Order Number:</strong> <span class="highlight">${orderId}</span></p>
            <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
            
            <h4>Items Ordered:</h4>
            ${items
              .map(
                (item) => `
              <div class="item">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <strong>${item.name}</strong>
                    ${item.options ? `<br><small style="color: #666;">${item.options}</small>` : ""}
                    <br><small>Quantity: ${item.quantity}</small>
                  </div>
                  <div style="font-weight: bold; color: #22c55e;">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            `,
              )
              .join("")}
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #22c55e;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Tax:</span>
                <span>$${tax.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Shipping:</span>
                <span style="color: #22c55e; font-weight: bold;">FREE 🌍</span>
              </div>
              <div style="display: flex; justify-content: space-between;" class="total-row">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          ${
            shippingAddress
              ? `
            <div class="shipping-info">
              <h3>🚚 Shipping Address</h3>
              <p>
                <strong>${shippingAddress.name}</strong><br>
                ${shippingAddress.line1}<br>
                ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postal_code}<br>
                ${shippingAddress.country}
              </p>
              <p><strong>Estimated Delivery:</strong> 5-7 business days</p>
              <p><small>📱 You'll receive tracking information once your order ships!</small></p>
            </div>
          `
              : ""
          }

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://natureriches.com/products" class="button">Continue Shopping 🛒</a>
          </div>

          <div style="background-color: #f0fdf4; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3>🌿 Why You'll Love Your Natural Products:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>✅ 100% Natural & Organic ingredients</li>
              <li>🌍 Sustainably sourced and eco-friendly</li>
              <li>📦 Plastic-free, biodegradable packaging</li>
              <li>💚 30-day satisfaction guarantee</li>
            </ul>
          </div>

          <p>Questions about your order? Reply to this email or contact us at <a href="mailto:hello@natureriches.com" style="color: #22c55e;">hello@natureriches.com</a></p>
          
          <p>Thank you for supporting sustainable living! 🌱</p>
          <p>The NatureRiches Team</p>
        </div>
        
        <div class="footer">
          <p>© 2024 NatureRiches | Premium Natural & Organic Products</p>
          <p>Made with 💚 for a sustainable future</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    await resend.emails.send({
      from: "NatureRiches <orders@natureriches.com>",
      to: [customerEmail],
      subject: `🌿 Order Confirmed #${orderId} - Your Natural Products Are On The Way!`,
      html: customerEmailHtml,
    })

    console.log("Customer confirmation email sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending customer email:", error)
    return { success: false, error }
  }
}

export async function sendOwnerOrderNotification(orderDetails: OrderDetails) {
  const { orderId, customerEmail, customerName, items, subtotal, tax, total, shippingAddress } = orderDetails

  const ownerEmail = process.env.OWNER_EMAIL || "elijahgummer5@gmail.com"

  const ownerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>🚨 NEW ORDER ALERT - NatureRiches</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #fef3c7; }
        .container { max-width: 600px; margin: 0 auto; background-color: white; }
        .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 30px 20px; text-align: center; }
        .logo { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
        .content { padding: 30px 20px; }
        .alert { background-color: #fef2f2; border: 2px solid #ef4444; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .order-summary { background-color: #f0fdf4; border: 1px solid #22c55e; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .item { border-bottom: 1px solid #e5e7eb; padding: 15px 0; }
        .item:last-child { border-bottom: none; }
        .total-row { font-weight: bold; font-size: 18px; color: #f59e0b; }
        .shipping-info { background-color: #eff6ff; border: 1px solid #3b82f6; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .checklist { background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .footer { background-color: #1c1917; color: #a8a29e; padding: 20px; text-align: center; font-size: 14px; }
        .urgent { color: #ef4444; font-weight: bold; font-size: 20px; }
        .highlight { color: #f59e0b; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">🌿 NatureRiches</div>
          <h1 class="urgent">🚨 NEW ORDER ALERT! 🚨</h1>
          <p>Immediate action required - Customer order received!</p>
        </div>
        
        <div class="content">
          <div class="alert">
            <h2>⚡ URGENT: New Order Received</h2>
            <p><strong>Order ID:</strong> <span class="highlight">${orderId}</span></p>
            <p><strong>Order Value:</strong> <span class="highlight">$${total.toFixed(2)}</span></p>
            <p><strong>Order Time:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <h3>👤 Customer Information</h3>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
          
          <div class="order-summary">
            <h3>📦 Order Details</h3>
            
            <h4>Items Ordered:</h4>
            ${items
              .map(
                (item) => `
              <div class="item">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <strong>${item.name}</strong>
                    ${item.options ? `<br><small style="color: #666;">${item.options}</small>` : ""}
                    <br><small>Quantity: ${item.quantity}</small>
                  </div>
                  <div style="font-weight: bold; color: #22c55e;">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            `,
              )
              .join("")}
            
            <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #f59e0b;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Tax:</span>
                <span>$${tax.toFixed(2)}</span>
              </div>
              <div style="display: flex; justify-content: space-between;" class="total-row">
                <span>TOTAL:</span>
                <span>$${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          ${
            shippingAddress
              ? `
            <div class="shipping-info">
              <h3>🚚 Shipping Address</h3>
              <p>
                <strong>${shippingAddress.name}</strong><br>
                ${shippingAddress.line1}<br>
                ${shippingAddress.city}, ${shippingAddress.state} ${shippingAddress.postal_code}<br>
                ${shippingAddress.country}
              </p>
            </div>
          `
              : ""
          }

          <div class="checklist">
            <h3>✅ Order Processing Checklist</h3>
            <p><strong>Complete these steps immediately:</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>☐ Verify inventory for all items</li>
              <li>☐ Prepare eco-friendly packaging materials</li>
              <li>☐ Print shipping label and order details</li>
              <li>☐ Quality check all natural products</li>
              <li>☐ Package items with care instructions</li>
              <li>☐ Ship within 24 hours for customer satisfaction</li>
              <li>☐ Send tracking information to customer</li>
            </ul>
          </div>

          <div style="background-color: #fef3c7; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3>📊 Business Metrics</h3>
            <p>🎉 Another happy customer choosing natural products!</p>
            <p>💰 Revenue: $${total.toFixed(2)}</p>
            <p>🌱 Promoting sustainable living one order at a time</p>
          </div>

          <p><strong>Next Steps:</strong> Process this order immediately to maintain our excellent customer service standards.</p>
          
          <p>Best regards,<br>NatureRiches Order System</p>
        </div>
        
        <div class="footer">
          <p>© 2024 NatureRiches | Order Management System</p>
          <p>This is an automated notification for order processing</p>
        </div>
      </div>
    </body>
    </html>
  `

  try {
    await resend.emails.send({
      from: "NatureRiches Orders <orders@natureriches.com>",
      to: [ownerEmail],
      subject: `🚨 URGENT: New Order #${orderId} - $${total.toFixed(2)} - Action Required!`,
      html: ownerEmailHtml,
    })

    console.log("Owner notification email sent successfully")
    return { success: true }
  } catch (error) {
    console.error("Error sending owner email:", error)
    return { success: false, error }
  }
}
