import { Metadata } from 'next'
import { Header1 } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero-with-group-of-images-text-and-two-buttons'
import { WhatNexFlowDoes } from '@/components/blocks/what-nexflow-does'
import { BackedByResearch } from '@/components/blocks/backed-by-research'
import { Features } from '@/components/blocks/features-1'
import { NewsletterSection } from '@/components/blocks/newsletter-section'
import { FAQSection } from '@/components/blocks/faq-section'
import { Footer7 } from '@/components/ui/footer-7'
import { ExitIntentPopup } from '@/components/ui/exit-intent-popup'
import { StickyCTA } from '@/components/ui/sticky-cta'
import { faqData } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'NexFlow | Personalized Health Experiments for Sleep, Energy, and Focus',
  description: 'Run personalized health experiments to discover what actually works for your body. Test one habit for 14 days and see real proof. Works with Apple Watch, Oura Ring, or no wearable at all.',
  keywords: [
    // Primary keywords
    'personalized health experiments',
    'health experiment app',
    'habit tracking app',
    // Device keywords
    'Apple Watch health app',
    'iOS health app',
    'Oura Ring app',
    'wearable health app',
    // Feature keywords
    'sleep tracker app',
    'energy tracking app',
    'focus improvement app',
    // Problem keywords
    'sleep optimization',
    'afternoon energy crash',
    'caffeine and sleep',
    // Brand
    'NexFlow',
  ],
  authors: [{ name: 'NexFlow' }],
  creator: 'NexFlow',
  publisher: 'NexFlow',
  metadataBase: new URL('https://nexflowai.app'),
  alternates: {
    canonical: 'https://nexflowai.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexflowai.app/',
    siteName: 'NexFlow',
    title: 'NexFlow | Personalized Health Experiments',
    description: 'Run personalized health experiments to discover what actually works for your body. Test one habit for 14 days and see real proof.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexFlow | Personalized Health Experiments',
    description: 'Run personalized health experiments to discover what actually works for your body. Test one habit for 14 days and see real proof.',
    creator: '@nexflowai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Health & Fitness',
}

// FAQ Schema for JSON-LD
function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Organization Schema for JSON-LD
function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NexFlow',
    url: 'https://nexflowai.app',
    logo: 'https://nexflowai.app/favicon.png',
    description: 'Personalized health experiments that show what works for your body. Run 14-day experiments to test habits and see real proof of what improves your sleep, energy, and focus.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@nexflowai.app',
      contactType: 'customer support',
    },
  }
}

// MobileApplication Schema for JSON-LD (ASO)
function generateMobileAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'NexFlow',
    operatingSystem: 'iOS',
    applicationCategory: 'HealthApplication',
    description: 'Run personalized health experiments to discover what actually works for your body. Test one habit for 14 days and see real proof of what improves your sleep, energy, and focus.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Founding members get lifetime pricing',
    },
    featureList: [
      '14-day health experiments',
      'Sleep tracking and analysis',
      'Energy level monitoring',
      'Focus improvement insights',
      'AI-powered pattern recognition',
      'Apple Watch integration',
      'Oura Ring integration',
      'Manual check-in option',
    ],
    screenshot: 'https://nexflowai.app/ProdddShottt_final.jpg',
  }
}

// WebSite Schema for JSON-LD (enables sitelinks search)
function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NexFlow',
    url: 'https://nexflowai.app',
    description: 'Personalized health experiments that show what works for your body.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://nexflowai.app/learn?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export default function Home() {
  const faqSchema = generateFAQSchema()
  const orgSchema = generateOrganizationSchema()
  const mobileAppSchema = generateMobileAppSchema()
  const webSiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <main className="bg-[#F6F4EF]">
        <Header1 />
        <Hero />
        <WhatNexFlowDoes />
        <BackedByResearch />
        <Features />
        <section id="newsletter">
          <NewsletterSection />
        </section>
        <FAQSection />
        <Footer7 />
        <ExitIntentPopup />
        <StickyCTA />
      </main>
    </>
  )
}
