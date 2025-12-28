"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { WaitlistModal } from "@/components/ui/waitlist-modal";

const tiers = [
  {
    name: "Discovery",
    price: "Free",
    period: "",
    description: "Get started with basic health tracking",
    features: [
      "Connect 1 wearable",
      "Run 1 experiment per month",
      "Basic insights dashboard",
      "7-day data history",
    ],
    cta: "Lock in Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$5.99",
    period: "/month",
    description: "For those serious about optimization",
    features: [
      "Connect unlimited wearables",
      "Unlimited experiments",
      "Advanced analytics & trends",
      "Full data history",
      "Export your data",
      "Priority support",
    ],
    cta: "Lock in Price",
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "$19.99",
    period: "/month",
    description: "For power users who want it all",
    features: [
      "Everything in Pro",
      "AI-powered recommendations",
      "Custom experiment templates",
      "Advanced correlations",
      "Early access to new features",
    ],
    cta: "Lock in Price",
    highlighted: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
    period: "",
    description: "1-on-1 health optimization with experts",
    features: [
      "Everything in Ultimate",
      "Personal advisor sessions",
      "Professor-guided life plans",
      "Custom health protocols",
      "Quarterly progress reviews",
      "Direct line to our team",
    ],
    cta: "Book a Meeting",
    ctaLink: "https://cal.com/arjun-dixit-0nwkzi/30min",
    highlighted: false,
  },
];

function PricingButton({ tier }: { tier: typeof tiers[0] }) {
  if (tier.ctaLink) {
    return (
      <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button
          className="w-full"
          variant={tier.highlighted ? "default" : "outline"}
        >
          {tier.cta}
        </Button>
      </a>
    );
  }

  return (
    <WaitlistModal>
      <Button
        className="w-full"
        variant={tier.highlighted ? "default" : "outline"}
      >
        {tier.cta}
      </Button>
    </WaitlistModal>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 md:py-20 scroll-mt-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join the waitlist now to lock in early pricing before we launch.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col ${
                tier.highlighted
                  ? "border-primary shadow-lg scale-[1.02]"
                  : ""
              }`}
            >
              <CardHeader className="pb-4">
                {tier.highlighted && (
                  <span className="text-xs font-medium text-primary uppercase tracking-wide mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {tier.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="size-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <PricingButton tier={tier} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
