import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { FavoritesSection } from "@/components/favorites-section"
import { FaceGuide } from "@/components/face-guide"
import { InstagramSection } from "@/components/instagram-section"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <FavoritesSection />
        <FaceGuide />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
