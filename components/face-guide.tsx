import { Button } from "@/components/ui/button"

const faceTypes = [
  {
    name: "Redondo",
    description: "Marcos angulares o rectangulares para equilibrar las facciones suaves.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Ovalado",
    description: "Casi cualquier estilo te favorece. Experimenta con formas audaces.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Cuadrado",
    description: "Marcos redondeados u ovalados para suavizar los ángulos.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Corazón",
    description: "Marcos con la parte inferior más ancha para balancear la frente.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function FaceGuide() {
  return (
    <section id="guia-rostros" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Encuentra tu Marco Ideal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada rostro es único. Descubre qué estilo de marco realza mejor tus facciones naturales.
          </p>
        </div>

        {/* Face Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {faceTypes.map((face, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border/40 transition-all duration-300 hover:shadow-lg hover:border-primary/30 cursor-pointer"
            >
              {/* Face Shape Circle */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-secondary mb-4 ring-2 ring-transparent group-hover:ring-primary/50 transition-all">
                <img
                  src={face.image}
                  alt={`Rostro ${face.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-2">{face.name}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{face.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            Ver Recomendaciones
          </Button>
        </div>
      </div>
    </section>
  )
}
