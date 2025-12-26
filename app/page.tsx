import { Header1 } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons'
import { BackedByResearch } from '@/components/blocks/backed-by-research'
import { Features } from '@/components/blocks/features-1'
import { PricingSection } from '@/components/blocks/pricing-section'

export default function Home() {
  return (
    <main>
      <Header1 />
      <Hero />
      <BackedByResearch />
      <Features />
      <PricingSection />
    </main>
  )
}
