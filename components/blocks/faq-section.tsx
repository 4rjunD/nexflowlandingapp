"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What wearables are supported?",
    answer:
      "NexFlow works with Apple Watch, Apple Health, Oura Ring, and Whoop. Connect in seconds and start tracking immediately.",
  },
  {
    question: "Is my health data private and secure?",
    answer:
      "Absolutely. Your data is encrypted end-to-end and never sold to third parties. You own your data and can delete it anytime. Privacy and security are core to everything we build.",
  },
  {
    question: "How is this different from my wearable's app?",
    answer:
      "Your wearable shows you data. NexFlow helps you run experiments to prove what actually works for YOU. Instead of guessing, you'll have real before/after evidence of what improves your sleep, energy, and focus.",
  },
  {
    question: "What kind of experiments can I run?",
    answer:
      "Anything you want to test: no caffeine after noon, 10k steps daily, cold showers, meditation, different sleep times, supplements, and more. We track everything and show you the measurable impact.",
  },
  {
    question: "When do you launch?",
    answer:
      "We're launching Q1 2026. Join the waitlist now to lock in early pricing and get priority support forever as one of the first 1,000 users.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes! Our Discovery plan is free forever and lets you connect 1 wearable and run 1 experiment per month. Perfect for getting started.",
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
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Everything you need to know about NexFlow.
          </p>
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
