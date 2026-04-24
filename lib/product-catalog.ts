import rawProducts from "@/lib/product-catalog.json"

export interface CatalogProduct {
  slug: string
  name: string
  category: string
  categorySlug: string
  badge: string
  price: number
  image: string
  source: string
}

export const catalogProducts = rawProducts as CatalogProduct[]

export const featuredProducts = catalogProducts.slice(0, 12)

export const catalogCategories = Array.from(
  new Set(catalogProducts.map((product) => product.category)),
)

export function getProductBySlug(slug: string) {
  return catalogProducts.find((product) => product.slug === slug)
}

export function getProductGallery(product: CatalogProduct, size = 4) {
  const sameCategory = catalogProducts.filter(
    (candidate) => candidate.categorySlug === product.categorySlug,
  )

  const gallery = [
    product.image,
    ...sameCategory
      .filter((candidate) => candidate.slug !== product.slug)
      .slice(0, Math.max(size - 1, 0))
      .map((candidate) => candidate.image),
  ]

  return gallery
}

export function formatCatalogPrice(price: number) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(price)
}
