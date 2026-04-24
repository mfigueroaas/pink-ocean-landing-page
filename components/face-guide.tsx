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
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Placeholder Icon Circle */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-dashed border-primary/40 mb-4 flex items-center justify-center bg-white group-hover:border-primary transition-colors">
                <span className="text-primary/40 text-xs">Icono</span>
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
