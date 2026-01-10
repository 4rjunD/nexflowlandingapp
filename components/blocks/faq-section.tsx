"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What does NexFlow do?",
    answer:
      "NexFlow runs 2 week experiments on your habits and shows how your sleep, energy, and focus changed using your data.",
  },
  {
    question: "How is this different from my health app?",
    answer:
      "Your health app tracks. NexFlow tests. You change one habit and we show clear before and after so you know what actually works for you.",
  },
  {
    question: "Do I need a smartwatch?",
    answer:
      "No. NexFlow works with Apple Health, most wearables, or simple manual logging.",
  },
  {
    question: "Who is NexFlow for?",
    answer:
      "People who already care about health and performance and want data backed answers instead of generic advice.",
  },
  {
    question: "Is there a free version or free trial?",
    answer:
      "No. NexFlow is paid only so the product can stay focused on serious users and never rely on ads or selling data.",
  },
  {
    question: "What do I get when I sign up?",
    answer:
      "You can connect your data, set up 2 week experiments, see before and after results, and chat with the health assistant about your patterns.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Usually by the end of your first 2 week experiment you will see how that habit affected your sleep, energy, or focus.",
  },
  {
    question: "Is this medical advice?",
    answer:
      "No. NexFlow is for habit and routine experiments. It does not diagnose or treat. Talk to your doctor for medical decisions.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your data is encrypted, never sold, and you can delete your account and all data at any time.",
  },
  {
    question: "What can I test with NexFlow?",
    answer:
      "Caffeine timing, sleep schedule, steps, exercise, screens, cold showers, meditation, alcohol windows, and other daily habits.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-left">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Questions? Answered.
          </h2>
        </div>
        <div className="divide-y divide-border border-t border-border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
