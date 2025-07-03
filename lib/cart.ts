import type { Product } from "./products"

export interface CartItem {
  id: string
  product: Product
  quantity: number
  selectedOptions?: {
    model?: string
    mode?: string
    color?: string
    length?: string
    plugType?: string
  }
  optionImage?: string
  optionLabel?: string
}

export interface Cart {
  items: CartItem[]
  itemCount: number
  total: number
}

const CART_STORAGE_KEY = "natureriches_cart"

export function getCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [], itemCount: 0, total: 0 }
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (!stored) {
      return { items: [], itemCount: 0, total: 0 }
    }

    const cart = JSON.parse(stored) as Cart
    return cart
  } catch (error) {
    console.error("Error loading cart:", error)
    return { items: [], itemCount: 0, total: 0 }
  }
}

export function saveCart(cart: Cart): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    // Dispatch custom event for cart updates
    window.dispatchEvent(new Event("cartUpdated"))
  } catch (error) {
    console.error("Error saving cart:", error)
  }
}

export function addToCart(
  product: Product,
  options?: {
    model?: string
    mode?: string
    color?: string
    length?: string
    plugType?: string
  },
  optionImage?: string,
): void {
  const cart = getCart()

  // Create option label
  const optionParts = []
  if (options?.model) optionParts.push(`Model: ${options.model}`)
  if (options?.mode) optionParts.push(`Mode: ${options.mode}`)
  if (options?.color) optionParts.push(`Color: ${options.color}`)
  if (options?.length) optionParts.push(`Length: ${options.length}`)
  if (options?.plugType) optionParts.push(`Plug: ${options.plugType}`)

  const optionLabel = optionParts.length > 0 ? optionParts.join(", ") : undefined

  // Create unique ID based on product and options
  const optionKey = options ? JSON.stringify(options) : ""
  const itemId = `${product.id}-${optionKey}`

  const existingItem = cart.items.find((item) => item.id === itemId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.items.push({
      id: itemId,
      product,
      quantity: 1,
      selectedOptions: options,
      optionImage,
      optionLabel,
    })
  }

  // Recalculate totals
  cart.itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)
  cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  saveCart(cart)
}

export function updateCartItemQuantity(itemId: string, quantity: number): void {
  const cart = getCart()
  const item = cart.items.find((item) => item.id === itemId)

  if (item) {
    if (quantity <= 0) {
      cart.items = cart.items.filter((item) => item.id !== itemId)
    } else {
      item.quantity = quantity
    }

    // Recalculate totals
    cart.itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)
    cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

    saveCart(cart)
  }
}

export function removeFromCart(itemId: string): void {
  const cart = getCart()
  cart.items = cart.items.filter((item) => item.id !== itemId)

  // Recalculate totals
  cart.itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)
  cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  saveCart(cart)
}

export function clearCart(): void {
  const emptyCart: Cart = { items: [], itemCount: 0, total: 0 }
  saveCart(emptyCart)
}

export function useCart() {
  const cart = getCart()

  return {
    items: cart.items,
    itemCount: cart.itemCount,
    total: cart.total,
    addItem: addToCart,
    updateQuantity: updateCartItemQuantity,
    removeItem: removeFromCart,
    clearCart,
    getTotal: () => cart.total,
  }
}
