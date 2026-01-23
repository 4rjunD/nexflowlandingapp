"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqData } from "@/lib/faq-data";

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
    <div className="border-b border-[#E5E2DB]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 sm:py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-left text-[#111111] text-sm sm:text-base">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-[#999999] transition-transform duration-200 shrink-0",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "max-h-[500px] pb-4 sm:pb-5" : "max-h-0"
        )}
      >
        <p className="text-[#6B6B6B] text-sm sm:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 lg:py-28" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
            Questions? Answered.
          </h2>
          <p className="mt-4 text-[#6B6B6B] text-base sm:text-lg">
            Everything you need to know about health experiments with NexFlow.
          </p>
        </div>
        <div className="divide-y divide-[#E5E2DB] border-t border-[#E5E2DB]">
          {faqData.map((faq, index) => (
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
