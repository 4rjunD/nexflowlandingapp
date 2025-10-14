import * as React from "react";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

// shadcn/ui bits
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ---- minimal craft-ds inline (single-file helper) ----------------
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type SectionProps = { children: React.ReactNode; className?: string; id?: string };
type ContainerProps = { children: React.ReactNode; className?: string; id?: string };

const Section = ({ children, className, id }: SectionProps) => (
  <section className={cn("py-12 md:py-32 bg-[#030303]", className)} id={id}>
    {children}
  </section>
);

const Container = ({ children, className, id }: ContainerProps) => (
  <div className={cn("mx-auto max-w-7xl p-6 sm:p-8", className)} id={id}>
    {children}
  </div>
);
// ------------------------------------------------------------------

type PlanTier = "Clinics & MedSpas" | "Professional" | "Enterprise";

interface PricingCardProps {
  title: PlanTier;
  price: string;
  description?: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
}

// NexFlow pricing data
const pricingData: PricingCardProps[] = [
  {
    title: "Clinics & MedSpas",
    price: "$20/patient",
    description: "Simple, transparent pricing for providers offering early metabolic screening and personalized prevention plans.",
    features: [
      "IRScore: 0-100 insulin resistance rating",
      "Trajectory panel visualization",
      "Personalized prevention recommendations",
      "Patient dashboard access",
      "Email support"
    ],
    cta: "Get Started",
    href: "mailto:arjundixit3508@gmail.com?subject=NexFlow%20Clinics%20%26%20MedSpas%20Plan%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Clinics%20%26%20MedSpas%20plan%20for%20NexFlow.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!",
  },
  {
    title: "Professional",
    price: "$2,000/month",
    description: "Designed for organizations running advanced health analytics, wellness programs, or research studies with customized dashboards and data insights.",
    features: [
      "Everything in Clinics tier",
      "Unlimited patients",
      "Custom dashboards",
      "Advanced data insights",
      "Research study tools",
      "Priority support",
      "API access"
    ],
    cta: "Get a Quote",
    href: "mailto:arjundixit3508@gmail.com?subject=NexFlow%20Professional%20Plan%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Professional%20plan%20for%20NexFlow.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!",
    featured: true,
  },
  {
    title: "Enterprise",
    price: "Custom pricing",
    description: "For large healthcare networks or corporate wellness platforms needing full-scale deployment and dedicated support. Typically $10,000+/month.",
    features: [
      "Everything in Professional tier",
      "Full-scale deployment",
      "White-label solution",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "HIPAA compliance support",
      "Custom ML model training"
    ],
    cta: "Contact Sales",
    href: "mailto:arjundixit3508@gmail.com?subject=NexFlow%20Enterprise%20Plan%20Inquiry&body=Hi%2C%0A%0AI'm%20interested%20in%20the%20Enterprise%20plan%20for%20NexFlow.%0A%0APlease%20provide%20more%20information.%0A%0AThank%20you!",
  },
];

export default function Pricing() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="!my-0 text-4xl font-bold lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-zinc-400 md:text-xl max-w-2xl">
          Choose the plan that fits your organization's needs. From individual clinics to enterprise healthcare networks.
        </p>

        <div className="not-prose mt-8 grid grid-cols-1 gap-6 min-[900px]:grid-cols-3">
          {pricingData.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>

        <p className="text-sm text-zinc-500 mt-8">
          All plans include secure data handling and compliance support. Custom solutions available for unique needs.
        </p>
      </Container>
    </Section>
  );
}

function PricingCard({ plan }: { plan: PricingCardProps }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 p-6 text-left transition-all hover:border-teal-500/30",
        plan.featured && "border-teal-500/50 shadow-lg shadow-teal-500/10"
      )}
      aria-label={`${plan.title} plan`}
    >
      <div className="text-center">
        <div className="inline-flex items-center gap-2">
          <Badge 
            variant={plan.featured ? "default" : "secondary"}
            className={cn(
              plan.featured && "bg-teal-500 hover:bg-teal-600 text-white"
            )}
          >
            {plan.title}
          </Badge>
          {plan.featured && (
            <span className="rounded-full bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-400 border border-teal-500/20">
              Most popular
            </span>
          )}
        </div>
        <h4 className="mb-2 mt-4 text-2xl font-semibold text-white">{plan.price}</h4>
        {plan.description && <p className="text-sm text-zinc-400">{plan.description}</p>}
      </div>

      <div className="my-4 border-t border-zinc-800" />

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm text-zinc-300">
            <CircleCheck className="mr-2 h-4 w-4 text-teal-500" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link href={plan.href}>
          <Button 
            size="sm" 
            className={cn(
              "w-full",
              plan.featured ? "bg-teal-500 hover:bg-teal-600 text-white" : "bg-zinc-800 hover:bg-zinc-700 text-white"
            )}
          >
            {plan.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}