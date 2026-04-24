import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const instagramImages = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

export function InstagramSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Síguenos en @pink.ocean.chile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Únete a nuestra comunidad y descubre inspiración diaria, tips de estilo y looks de nuestras clientas.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-10">
          {instagramImages.map((image, index) => (
            <a
              key={index}
              href="https://instagram.com/pink.ocean.chile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-secondary"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href="https://instagram.com/pink.ocean.chile" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
