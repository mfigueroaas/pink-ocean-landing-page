"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Camera, MessageCircle, Ruler, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import {
  formatCatalogPrice,
  getProductBySlug,
  getProductGallery,
} from "@/lib/product-catalog"

const treatments = [
  { id: "clear", name: "Cristales Transparentes", price: 0 },
  { id: "blue-light", name: "Filtro Luz Azul", price: 15000 },
  { id: "photochromic", name: "Fotocromáticos", price: 25000 },
]

export default function ProductDetailPage() {
  const params = useParams<{ slug: string }>()
  const product = params?.slug ? getProductBySlug(params.slug) : undefined
  const productImages = product ? getProductGallery(product) : []

  const [selectedImage, setSelectedImage] = useState(0)
  const [purchaseType, setPurchaseType] = useState("frame-only")
  const [selectedTreatment, setSelectedTreatment] = useState("clear")
  const [quantity, setQuantity] = useState(1)
  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null)

  const basePrice = product?.price ?? 0
  const treatmentPrice = treatments.find(t => t.id === selectedTreatment)?.price || 0
  const totalPrice = purchaseType === "with-prescription" ? basePrice + treatmentPrice : basePrice

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0])
    }
  }

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="container mx-auto px-4 lg:px-8 py-16 flex-1">
          <div className="max-w-xl rounded-2xl border border-border/40 bg-card p-8 space-y-4">
            <h1 className="font-serif text-3xl text-foreground">Producto no encontrado</h1>
            <p className="text-muted-foreground">
              No encontramos este modelo en el catalogo actual. Vuelve a la tienda para explorar las fotos cargadas.
            </p>
            <Button asChild className="rounded-full">
              <Link href="/">Volver a la tienda</Link>
            </Button>
          </div>
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden bg-slate-50 ring-2 transition-all ${
                      selectedImage === index 
                        ? "ring-primary" 
                        : "ring-transparent hover:ring-primary/30"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Title & Price */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-primary">
                  {formatCatalogPrice(totalPrice)}
                </p>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Modelo de la categoria {product.category}. Esta ficha usa tus fotos reales para visualizar color, forma y estilo del marco.
                Puedes comprar solo armazon o agregar cristales con tratamiento segun tu necesidad.
              </p>

              {/* Purchase Type Selector */}
              <Tabs value={purchaseType} onValueChange={setPurchaseType} className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-12 rounded-full bg-slate-100 p-1">
                  <TabsTrigger 
                    value="frame-only" 
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Solo Armazón
                  </TabsTrigger>
                  <TabsTrigger 
                    value="with-prescription"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Añadir Cristales
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="frame-only" className="mt-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-border/40">
                    <p className="text-sm text-muted-foreground">
                      Recibirás solo el armazón con cristales de demostración. 
                      Puedes llevarlos a tu óptica de confianza para agregar tu receta.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="with-prescription" className="mt-6 space-y-6">
                  {/* Prescription Upload */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-dashed border-primary/40 space-y-4">
                    <h3 className="font-medium text-foreground">Sube tu receta</h3>
                    <label className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white border border-border/40 cursor-pointer hover:border-primary/40 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Camera className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-foreground">
                          {prescriptionFile ? prescriptionFile.name : "Subir imagen de mi receta"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          JPG, PNG o PDF (máx. 5MB)
                        </p>
                      </div>
                      <input 
                        type="file" 
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="sr-only" 
                      />
                    </label>
                  </div>

                  {/* Treatment Selector */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-foreground">Selecciona tratamiento</h3>
                    <RadioGroup value={selectedTreatment} onValueChange={setSelectedTreatment} className="space-y-3">
                      {treatments.map((treatment) => (
                        <div key={treatment.id} className="flex items-center">
                          <RadioGroupItem 
                            value={treatment.id} 
                            id={treatment.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={treatment.id}
                            className="flex flex-1 items-center justify-between p-4 rounded-xl bg-slate-50 border border-border/40 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-all"
                          >
                            <span className="font-medium">{treatment.name}</span>
                            <span className="text-primary font-semibold">
                              {treatment.price === 0 ? "Incluido" : `+${formatCatalogPrice(treatment.price)}`}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Frame Measurements */}
              <div className="p-6 rounded-2xl bg-slate-50 space-y-4">
                <div className="flex items-center gap-2">
                  <Ruler className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-foreground">Medidas del Armazón</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-xl bg-white">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">A</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">140mm</p>
                    <p className="text-xs text-muted-foreground">Ancho</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">P</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">18mm</p>
                    <p className="text-xs text-muted-foreground">Puente</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white">
                    <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">V</span>
                    </div>
                    <p className="text-lg font-semibold text-foreground">145mm</p>
                    <p className="text-xs text-muted-foreground">Varilla</p>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground">Cantidad:</span>
                <div className="flex items-center gap-2 rounded-full bg-slate-100 p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base font-semibold"
                >
                  Añadir al Carrito
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="flex-1 rounded-full h-14 text-base border-green-500 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <a
                    href={`https://wa.me/56912345678?text=${encodeURIComponent(`Hola, me interesa el modelo ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
