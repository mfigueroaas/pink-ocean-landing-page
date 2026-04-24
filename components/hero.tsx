import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left Side - Text Content */}
        <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16 xl:px-24 bg-slate-50/50">
          <div className="max-w-xl space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-tight">
              Encuentra tu marco perfecto
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Anteojos ópticos y de sol con estilo boutique. Diseños exclusivos que realzan tu personalidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Descubre la Nueva Colección
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary/10">
                Ver Catálogo
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side - Full Image */}
        <div className="relative min-h-[400px] lg:min-h-full order-first lg:order-last">
          <img
            src="/placeholder.svg?height=900&width=800"
            alt="Colección de anteojos Pink Ocean"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
