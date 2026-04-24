import { ProductCard } from "@/components/product-card"

const products = [
  {
    name: "Modelo Siena",
    price: "$34.990",
    image: "/placeholder.svg?height=400&width=400",
    badge: "Nuevo",
  },
  {
    name: "Modelo Capri",
    price: "$42.990",
    image: "/placeholder.svg?height=400&width=400",
    badge: "Clip On",
  },
  {
    name: "Modelo Portofino",
    price: "$38.990",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Modelo Amalfi",
    price: "$45.990",
    image: "/placeholder.svg?height=400&width=400",
    badge: "Bestseller",
  },
]

export function FavoritesSection() {
  return (
    <section id="opticos" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Los Favoritos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre los modelos más amados por nuestra comunidad. Cada pieza está diseñada para destacar tu estilo único.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
