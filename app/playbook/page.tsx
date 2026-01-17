import { Header1 } from '@/components/ui/header'
import { Footer7 } from '@/components/ui/footer-7'
import { PlaybookHero } from '@/components/ui/playbook-hero'
import FeaturedSectionStats from '@/components/ui/featured-section-stats'

export default function Playbook() {
  return (
    <main className="pt-28">
      <Header1 />
      <PlaybookHero />
      <FeaturedSectionStats />
      <Footer7 />
    </main>
  )
}
