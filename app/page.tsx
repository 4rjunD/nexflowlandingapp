import ShapeLandingHero from '@/components/ui/shape-landing-hero'
import { Features } from '@/components/blocks/features-4'
import Pricing from '@/components/ui/pricing-section'
import ModernTeamShowcase from '@/components/ui/cybernetic-team-showcase'
import { NavBar } from '@/components/ui/tubelight-navbar'
import JobListingComponent from '@/components/ui/job-listing'

const teamMembers = [
  {
    name: 'Arjun Dixit',
    title: 'CEO & Product Lead',
    bio: 'Research @ Harvard & Stanford',
    initials: 'AD'
  },
  {
    name: 'Rishi Yedavalli',
    title: 'COO & Operations Lead',
    bio: 'Research @ Harvard & Carnegie Mellon',
    initials: 'RY'
  },
  {
    name: 'Om Guin',
    title: 'CTO & Technical Lead',
    bio: 'Research @ Princeton & Emory',
    initials: 'OG'
  }
];

export default function Home() {
  return (
    <main>
      <NavBar />
      <ShapeLandingHero 
        badge="NexFlow • Backed by Character Capital"
        title1="The Future of"
        title2="Preventative Health"
      />
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="team">
        <ModernTeamShowcase 
          teamMembers={teamMembers}
          tagline="Led by researchers from top institutions, building the future of proactive healthcare"
        />
      </div>
      <div id="careers">
        <JobListingComponent />
      </div>
    </main>
  )
}