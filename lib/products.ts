export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  description: string
  category: string
  rating: number
  reviewCount: number
  inStock: boolean
  isNew?: boolean
  isBestseller?: boolean
  isOrganic?: boolean
  options?: {
    sizes?: string[]
    colors?: string[]
    variants?: string[]
  }
}

const products: Product[] = [
  {
    id: "1",
    name: "Premium Organic Essential Oils Set",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "A curated collection of 12 premium organic essential oils including lavender, eucalyptus, tea tree, and peppermint. Perfect for aromatherapy, diffusing, and natural wellness routines.",
    category: "Essential Oils",
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    isNew: true,
    isBestseller: true,
    isOrganic: true,
    options: {
      variants: ["Starter Set (6 oils)", "Complete Set (12 oils)", "Premium Set (18 oils)"],
    },
  },
  {
    id: "2",
    name: "Sustainable Bamboo Kitchen Utensil Set",
    price: 34.99,
    originalPrice: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Eco-friendly bamboo kitchen utensils including spatulas, spoons, and tongs. Naturally antimicrobial and sustainable alternative to plastic utensils.",
    category: "Kitchen & Home",
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    isBestseller: true,
    isOrganic: true,
    options: {
      variants: ["Basic Set (5 pieces)", "Complete Set (8 pieces)", "Professional Set (12 pieces)"],
    },
  },
  {
    id: "3",
    name: "Authentic Himalayan Pink Salt Lamp",
    price: 45.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Hand-carved authentic Himalayan pink salt lamp that creates a warm, soothing ambiance while naturally purifying the air in your home.",
    category: "Home & Wellness",
    rating: 4.6,
    reviewCount: 267,
    inStock: true,
    isOrganic: true,
    options: {
      sizes: ["Small (2-3 lbs)", "Medium (4-6 lbs)", "Large (7-9 lbs)", "Extra Large (10-12 lbs)"],
    },
  },
  {
    id: "4",
    name: "Organic Herbal Tea Collection",
    price: 39.99,
    originalPrice: 54.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Premium organic herbal tea collection featuring chamomile, peppermint, ginger, and hibiscus. Caffeine-free and perfect for relaxation and wellness.",
    category: "Wellness & Tea",
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    isNew: true,
    isOrganic: true,
    options: {
      variants: ["Relaxation Blend", "Digestive Blend", "Energy Blend", "Complete Collection"],
    },
  },
  {
    id: "5",
    name: "Natural Skincare Essentials Set",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Complete natural skincare routine with organic cleanser, toner, serum, and moisturizer. Suitable for all skin types and free from harsh chemicals.",
    category: "Skincare & Beauty",
    rating: 4.8,
    reviewCount: 298,
    inStock: true,
    isBestseller: true,
    isOrganic: true,
    options: {
      variants: ["Dry Skin", "Oily Skin", "Sensitive Skin", "Anti-Aging"],
    },
  },
  {
    id: "6",
    name: "Indoor Plant Starter Kit",
    price: 64.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Everything you need to start your indoor garden including organic potting soil, natural fertilizer, and care instructions for 6 easy-to-grow plants.",
    category: "Plants & Garden",
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    isNew: true,
    isOrganic: true,
    options: {
      variants: ["Beginner Kit", "Herb Garden Kit", "Succulent Kit", "Air Purifying Plants Kit"],
    },
  },
  {
    id: "7",
    name: "Organic Cotton Bedding Set",
    price: 129.99,
    originalPrice: 159.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "100% organic cotton bedding set including fitted sheet, flat sheet, and pillowcases. Naturally hypoallergenic and breathable for a comfortable night's sleep.",
    category: "Home & Bedding",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    isOrganic: true,
    options: {
      sizes: ["Twin", "Full", "Queen", "King"],
      colors: ["Natural White", "Sage Green", "Soft Gray", "Warm Beige"],
    },
  },
  {
    id: "8",
    name: "Handcrafted Acacia Wood Cutting Board",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Beautiful handcrafted cutting board made from sustainable acacia wood. Naturally antimicrobial and perfect for food preparation and serving.",
    category: "Kitchen & Home",
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    isOrganic: true,
    options: {
      sizes: ["Small (12x8 inches)", "Medium (16x10 inches)", "Large (20x12 inches)", "Extra Large (24x14 inches)"],
    },
  },
  {
    id: "9",
    name: "Artisan Natural Soap Collection",
    price: 42.99,
    originalPrice: 56.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Handmade natural soap collection with organic ingredients including shea butter, coconut oil, and essential oils. Free from synthetic fragrances and harsh chemicals.",
    category: "Skincare & Beauty",
    rating: 4.8,
    reviewCount: 245,
    inStock: true,
    isBestseller: true,
    isOrganic: true,
    options: {
      variants: ["Lavender & Oatmeal", "Tea Tree & Mint", "Rose & Geranium", "Mixed Collection (6 bars)"],
    },
  },
  {
    id: "10",
    name: "Pure Beeswax Candle Set",
    price: 36.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Hand-poured pure beeswax candles that burn clean and long. Natural honey scent with no artificial fragrances or toxic chemicals.",
    category: "Home & Wellness",
    rating: 4.7,
    reviewCount: 167,
    inStock: true,
    isOrganic: true,
    options: {
      variants: ["Pillar Candles (3 pack)", "Votive Candles (6 pack)", "Tea Lights (12 pack)", "Mixed Set"],
    },
  },
  {
    id: "11",
    name: "Virgin Coconut Oil Multi-Pack",
    price: 28.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Cold-pressed virgin coconut oil perfect for cooking, skincare, and hair care. Organic, unrefined, and packed with natural nutrients.",
    category: "Food & Wellness",
    rating: 4.9,
    reviewCount: 389,
    inStock: true,
    isBestseller: true,
    isOrganic: true,
    options: {
      sizes: ["16 oz jar", "32 oz jar", "3-pack (16 oz)", "2-pack (32 oz)"],
    },
  },
  {
    id: "12",
    name: "Handwoven Natural Fiber Rug",
    price: 89.99,
    originalPrice: 119.99,
    image: "/placeholder.svg?height=400&width=400",
    description:
      "Beautiful handwoven rug made from natural jute and cotton fibers. Eco-friendly and perfect for adding warmth and texture to any room.",
    category: "Home & Decor",
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    isNew: true,
    isOrganic: true,
    options: {
      sizes: ["2x3 feet", "3x5 feet", "5x7 feet", "8x10 feet"],
      colors: ["Natural Beige", "Sage Green", "Warm Brown", "Charcoal Gray"],
    },
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.filter((product) => product.isBestseller || product.isNew).slice(0, 8)
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.find((product) => product.id === id) || null
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return products.filter((product) => product.category.toLowerCase().includes(category.toLowerCase()))
}

export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

export function getCategories(): string[] {
  const categories = [...new Set(products.map((product) => product.category))]
  return categories.sort()
}
