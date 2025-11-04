import * as React from "react";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

// shadcn/ui bits
import { Button } from "@/components/ui/button";

// ---- minimal craft-ds inline (single-file helper) ----------------
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type SectionProps = { children: React.ReactNode; className?: string; id?: string };
type ContainerProps = { children: React.ReactNode; className?: string; id?: string };

const Section = ({ children, className, id }: SectionProps) => (
  <section className={cn("py-16 md:py-24 bg-[#030303]", className)} id={id}>
    {children}
  </section>
);

const Container = ({ children, className, id }: ContainerProps) => (
  <div className={cn("mx-auto max-w-5xl p-6 sm:p-8", className)} id={id}>
    {children}
  </div>
);
// ------------------------------------------------------------------

type PlanTier = "Free" | "Pro" | "Ultimate" | "Clinics" | "Enterprise";

interface PricingCardProps {
  title: PlanTier;
  price: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

// Consumer app pricing
const appPricing: PricingCardProps[] = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Basic health score",
      "Limited trends"
    ],
    cta: "Start Free",
    href: "#",
  },
  {
    title: "Pro",
    price: "$9.99/month",
    features: [
      "Full health trends",
      "Smart recommendations",
      "Priority support"
    ],
    cta: "Go Pro",
    href: "#",
    featured: true,
  },
  {
    title: "Ultimate",
    price: "$25/month",
    features: [
      "Advanced insights",
      "Custom plans",
      "Early alerts"
    ],
    cta: "Get Ultimate",
    href: "#",
  },
];

// Business/Enterprise pricing
const businessPricing: PricingCardProps[] = [
  {
    title: "Clinics",
    price: "$20/patient",
    features: [
      "Health scoring system",
      "Patient dashboards",
      "Trend visualization",
      "Email support"
    ],
    cta: "Contact Sales",
    href: "mailto:arjundixit3508@gmail.com?subject=NexFlow%20Clinics%20Plan%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Clinics%20plan%20for%20NexFlow.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!",
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited patients",
      "Custom integrations",
      "White-label option",
      "Dedicated support"
    ],
    cta: "Contact Sales",
    href: "mailto:arjundixit3508@gmail.com?subject=NexFlow%20Enterprise%20Plan%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Enterprise%20plan%20for%20NexFlow.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!",
  },
];

export default function Pricing() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold lg:text-4xl text-white text-center">
          Pricing
        </h2>

        {/* Consumer App Plans */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            For Individuals
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {appPricing.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>

        {/* Business Plans */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">
            For Clinics & Organizations
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-3xl mx-auto">
            {businessPricing.map((plan) => (
              <PricingCard key={plan.title} plan={plan} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PricingCard({ plan }: { plan: PricingCardProps }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-zinc-800 bg-zinc-900/50 p-5 text-center",
        plan.featured && "border-blue-500"
      )}
      aria-label={`${plan.title} plan`}
    >
      <h3 className="text-lg font-semibold text-white mb-2">{plan.title}</h3>
      <h4 className="text-2xl font-bold text-white mb-4">{plan.price}</h4>

      <ul className="space-y-2 mb-6 text-left">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-zinc-300">
            <CircleCheck className="mr-2 h-3 w-3 text-blue-500 flex-shrink-0" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link href={plan.href} className="mt-auto">
        <Button 
          size="sm" 
          className={cn(
            "w-full",
            plan.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-zinc-800 hover:bg-zinc-700"
          )}
        >
          {plan.cta}
        </Button>
      </Link>
    </div>
  );
}