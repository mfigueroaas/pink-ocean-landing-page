import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12 md:py-20 lg:py-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance">
              Encuentra tu marco perfecto
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 text-pretty">
              Anteojos ópticos y de sol con estilo boutique. Diseños exclusivos que realzan tu personalidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Descubre la Nueva Colección
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/10">
                Ver Catálogo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Colección de anteojos Pink Ocean"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-300/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
