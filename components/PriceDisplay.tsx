interface PriceDisplayProps {
  price: number
  originalPrice?: number
  discount?: number
  size?: "sm" | "md" | "lg"
  currency?: string
}

export default function PriceDisplay({
  price,
  originalPrice,
  discount,
  size = "md",
  currency = "USD",
}: PriceDisplayProps) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  }

  const formatPrice = (amount: number) => {
    return `$${amount.toFixed(2)}`
  }

  return (
    <div className="flex items-center gap-2">
      <span className={`font-bold text-nature-600 ${sizeClasses[size]}`}>{formatPrice(price)}</span>

      {originalPrice && originalPrice > price && (
        <span className={`text-earth-500 line-through ${size === "sm" ? "text-xs" : "text-sm"}`}>
          {formatPrice(originalPrice)}
        </span>
      )}

      {discount && (
        <span className={`bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold`}>-{discount}%</span>
      )}
    </div>
  )
}
