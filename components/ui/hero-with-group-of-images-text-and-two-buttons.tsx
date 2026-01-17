"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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
    <div className="w-full pt-36 pb-8 lg:pt-40 lg:pb-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <div className="flex gap-4 flex-col order-2 md:order-1">
            <div>
              <Badge variant="outline" className="border-[#1F4D3A] text-[#1F4D3A]">Launching Q1 2026</Badge>
            </div>
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>
                Life&apos;s too short for generic advice.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-[#6B6B6B] max-w-md text-left">
                Supplements. Routines. Sleep hacks. How much have you spent on things that didn&apos;t work? Pick one. Test it. See the proof. Optimize your lifestyle.
              </p>
            </div>
            {isSuccess ? (
              <div className="flex items-center gap-2 text-[#1F4D3A]">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">You&apos;re on the list! We&apos;ll be in touch soon.</span>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="h-12 text-base border-[#D9D6CF] focus:border-[#1F4D3A]"
                  />
                  <Button size="lg" type="submit" disabled={isSubmitting} className="gap-2 whitespace-nowrap bg-[#1F4D3A] hover:bg-[#163D2E] text-white">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Get Early Access <MoveRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
                <p className="text-sm text-[#999999]">
                  Free to start. No credit card required.
                </p>
              </div>
            )}
            {error && <p className="text-sm text-[#C45C5C]">{error}</p>}
          </div>
          <div className="flex items-center justify-center order-1 md:order-2">
            <Image
              src="/ProdddShottt_final.jpg"
              alt="NexFlow App"
              width={1200}
              height={900}
              priority
              className="w-full max-w-md md:max-w-2xl md:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
