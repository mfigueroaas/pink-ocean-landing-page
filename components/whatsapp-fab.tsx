"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppFAB() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="lg"
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background px-3 py-2">
          <p className="text-sm font-medium">¿Dudas con tu receta? Te asesoramos</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
