import { cn } from "@/lib/utils";
import {
  GraduationCap,
  FlaskConical,
  Brain,
  UserCheck,
  Activity,
  BarChart3,
  Microscope,
  Sparkles,
} from "lucide-react";

export function BackedByResearch() {
  const features = [
    {
      title: "Stanford Research",
      description:
        "Built on foundations from metabolic health research at Stanford University.",
      icon: <GraduationCap className="size-6" />,
    },
    {
      title: "Harvard Collaboration",
      description:
        "Ongoing scientific collaboration with research heads at Harvard University.",
      icon: <Microscope className="size-6" />,
    },
    {
      title: "Emory Partnership",
      description:
        "Working with Emory researchers on personalized health experimentation.",
      icon: <FlaskConical className="size-6" />,
    },
    {
      title: "AI-Powered Analysis",
      description:
        "Advanced AI analyzes your wearable data to explain patterns and suggest experiments.",
      icon: <Brain className="size-6" />,
    },
    {
      title: "Evidence Over Assumptions",
      description:
        "Run real experiments on yourself. See proof of what works, not generic advice.",
      icon: <BarChart3 className="size-6" />,
    },
    {
      title: "Personalized to You",
      description:
        "Unlike aggregated data apps, NexFlow measures impact at the individual level.",
      icon: <UserCheck className="size-6" />,
    },
    {
      title: "300M+ Wearable Users",
      description:
        "Designed for the growing community of health-conscious wearable users worldwide.",
      icon: <Activity className="size-6" />,
    },
    {
      title: "Validated Results",
      description:
        "Go beyond monitoring. Get validated, measurable results for your unique body.",
      icon: <Sparkles className="size-6" />,
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Backed by Research
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            NexFlow is built on scientific foundations with ongoing collaborations at leading research institutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted-foreground/30 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
