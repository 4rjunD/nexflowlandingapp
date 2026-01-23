import Link from "next/link";

const steps = [
  {
    number: "1",
    title: "Connect (or don't)",
    description:
      "Sync your Apple Watch or Oura Ring for richer insights. Or skip the wearable and use manual check-ins. Either way works.",
  },
  {
    number: "2",
    title: "Pick one habit to test",
    description:
      "Cut caffeine after noon. Try a new sleep schedule. Add morning walks. Choose something you've been curious about.",
  },
  {
    number: "3",
    title: "Run a 14-day experiment",
    description:
      "We track your sleep, energy, and focus throughout. No journaling required. Just live your life and let the data accumulate.",
  },
  {
    number: "4",
    title: "See what actually changed",
    description:
      "Get clear before-and-after results. Did your deep sleep improve? Did your energy crash disappear? Now you know.",
  },
];

export function WhatNexFlowDoes() {
  return (
    <section className="py-16 md:py-24 lg:py-28 bg-white border-b border-[#E5E2DB]" aria-labelledby="what-nexflow-does-heading">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="what-nexflow-does-heading"
            className="text-3xl sm:text-4xl font-semibold text-[#111111] mb-4"
            style={{ fontFamily: '"New York", Georgia, serif' }}
          >
            How it works
          </h2>
          <p className="text-[#6B6B6B] max-w-xl mx-auto text-base sm:text-lg">
            No complicated setup. No overwhelming dashboards. Just a simple process to find out what works for you.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-[#F6F4EF] border border-[#E5E2DB]"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1F4D3A] flex items-center justify-center">
                  <span className="text-white font-semibold text-base sm:text-lg">{item.number}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-medium text-[#111111] mb-2" style={{ fontFamily: '"New York", Georgia, serif' }}>
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-12 p-5 sm:p-6 rounded-2xl bg-[#1F4D3A]/5 border border-[#1F4D3A]/10 text-center">
          <p className="text-[#6B6B6B] text-sm sm:text-base">
            <strong className="text-[#111111]">Your data stays yours.</strong> Encrypted, never sold, deletable anytime. Not medical advice.{" "}
            <Link href="/learn" className="text-[#1F4D3A] underline hover:text-[#163D2E] transition-colors">
              Learn more about our approach
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
