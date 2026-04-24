import Link from "next/link"
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold text-foreground">Pink Ocean</span>
            </Link>
            <p className="text-sm text-muted-foreground text-pretty">
              Boutique de anteojos con estilo único. Diseños que realzan tu personalidad y cuidan tu visión.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/pink.ocean.chile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">Tienda</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#opticos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Ópticos
              </Link>
              <Link href="#lentes-sol" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Lentes de Sol
              </Link>
              <Link href="#clip-on" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Clip On
              </Link>
              <Link href="#guia-rostros" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Guía de Rostros
              </Link>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">Ayuda</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cómo leer tu receta
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Envíos y devoluciones
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Preguntas frecuentes
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cuidado de tus lentes
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Av. Los Leones 123, Providencia, Santiago
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">hola@pinkocean.cl</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pink Ocean. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
