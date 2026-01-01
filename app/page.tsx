import { Header1 } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons'
import { BackedByResearch } from '@/components/blocks/backed-by-research'
import { Features } from '@/components/blocks/features-1'
import { FAQSection } from '@/components/blocks/faq-section'
import { Footer7 } from '@/components/ui/footer-7'
import { ExitIntentPopup } from '@/components/ui/exit-intent-popup'
import { StickyCTA } from '@/components/ui/sticky-cta'

export default function Home() {
  return (
    <main>
      <Header1 />
      <Hero />
      <BackedByResearch />
      <Features />
      <FAQSection />
      <Footer7 />
      <ExitIntentPopup />
      <StickyCTA />
    </main>
  )
}
