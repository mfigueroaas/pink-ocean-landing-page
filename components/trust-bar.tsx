import { MapPin, Truck, FileText, Receipt } from "lucide-react"

const trustItems = [
  {
    icon: MapPin,
    text: "Tienda en Providencia",
  },
  {
    icon: Truck,
    text: "Envíos a todo Chile",
  },
  {
    icon: FileText,
    text: "Aceptamos Recetas Médicas",
  },
  {
    icon: Receipt,
    text: "Boleta para Reembolso",
  },
]

export function TrustBar() {
  return (
    <section className="w-full border-y border-border/40 bg-background py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
