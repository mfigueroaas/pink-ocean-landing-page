"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Permanent Tooltip Bubble */}
      <div className="hidden sm:flex items-center bg-white rounded-full shadow-lg px-4 py-2 border border-border/40">
        <p className="text-sm font-medium text-foreground whitespace-nowrap">
          ¿Dudas con tu receta? Te asesoramos
        </p>
        {/* Arrow pointing to button */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
      </div>
      
      {/* WhatsApp Button */}
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <a
          href="https://wa.me/56912345678?text=Hola%2C%20tengo%20una%20consulta%20sobre%20mi%20receta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Contactar por WhatsApp</span>
        </a>
      </Button>
    </div>
  )
}
