import { ProductCard } from "@/components/product-card"
import {
  catalogCategories,
  catalogProducts,
  featuredProducts,
  formatCatalogPrice,
} from "@/lib/product-catalog"

export function FavoritesSection() {
  return (
    <section id="opticos" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Catalogo Pink Ocean
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Agregamos fotos reales de tus categorias: {catalogCategories.join(", ")}. Explora modelos clip on, de sol opticos y marcos metalicos.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Mostrando {featuredProducts.length} destacados de {catalogProducts.length} productos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              slug={product.slug}
              name={product.name}
              price={formatCatalogPrice(product.price)}
              image={product.image}
              category={product.category}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
