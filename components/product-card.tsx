import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  name: string
  price: string
  image: string
  badge?: string
}

export function ProductCard({ name, price, image, badge }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border/40 bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary/30 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground hover:bg-primary/90">
            {badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 gap-3">
        <div className="space-y-1">
          <h3 className="font-serif text-lg font-medium text-card-foreground">{name}</h3>
          <p className="text-base font-semibold text-primary">{price}</p>
        </div>
        <Button variant="outline" className="w-full rounded-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
          Ver detalles
        </Button>
      </div>
    </div>
  )
}
