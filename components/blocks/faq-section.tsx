"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need a smartwatch?",
    answer:
      "No. Works with Apple Health, any smartwatch, or just manual logging. Use what you have.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Encrypted, never sold, delete anytime. Your data is yours.",
  },
  {
    question: "How is this different from my health app?",
    answer:
      "Your health app shows data. We show proof. Before and after. What actually changed.",
  },
  {
    question: "What can I test?",
    answer:
      "Anything. No caffeine. More sleep. Cold showers. Meditation. Supplements. If you can try it, we can measure it.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. Free to start, no credit card. Upgrade when you want more.",
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
