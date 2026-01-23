"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://submit-form.com/K9AikUH27", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full pt-32 pb-12 md:pt-40 md:pb-20 lg:pb-24 bg-white" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:gap-12 items-center md:grid-cols-2">
          <div className="flex gap-5 md:gap-6 flex-col order-2 md:order-1">
            <div>
              <Badge variant="outline" className="border-[#1F4D3A] text-[#1F4D3A] text-xs sm:text-sm">Only 500 founding member spots</Badge>
            </div>
            <div className="flex gap-4 md:gap-5 flex-col">
              <h1 id="hero-heading" className="max-w-lg text-left">
                <span className="block text-sm sm:text-base font-medium text-[#1F4D3A] mb-3 tracking-wide uppercase">
                  Personalized health experiments
                </span>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                  Know what actually works for your body.
                </span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed tracking-tight text-[#6B6B6B] max-w-md text-left">
                Stop guessing. Pick one habit, run a 14-day experiment, and see real proof of what works. No wearable required (but it helps).
              </p>
            </div>
            {isSuccess ? (
              <div className="flex items-center gap-2 text-[#1F4D3A]" role="status" aria-live="polite">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                <span className="font-medium">You&apos;re in! Check your inbox for next steps.</span>
              </div>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <div className="flex-1">
                    <label htmlFor="hero-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="hero-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      aria-describedby="hero-email-hint"
                      className="w-full h-12 px-4 text-base border border-[#D9D6CF] rounded-lg bg-white text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#1F4D3A]/20 focus:border-[#1F4D3A] disabled:opacity-50"
                    />
                  </div>
                  <Button size="lg" type="submit" disabled={isSubmitting} className="h-12 gap-2 whitespace-nowrap bg-[#1F4D3A] hover:bg-[#163D2E] text-white rounded-lg">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>Joining...</span>
                      </>
                    ) : (
                      <>
                        Claim Your Spot <MoveRight className="w-4 h-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
                <p id="hero-email-hint" className="text-sm text-[#999999]">
                  Founding members get lifetime pricing. No credit card required.
                </p>
              </div>
            )}
            {error && <p className="text-sm text-[#C45C5C]" role="alert">{error}</p>}
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <Image
              src="/ProdddShottt_final.jpg"
              alt="NexFlow app showing wearable health experiment results with sleep, energy, and focus metrics from Apple Watch data"
              width={1200}
              height={900}
              priority
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
